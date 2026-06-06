"use client";

import {
  DollarSign,
  Filter,
  SortAsc,
  ExternalLink,
  Github,
  Calendar,
  User,
  MessageSquare,
  Shuffle,
} from "lucide-react";
import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { generateRandomColors } from "@/utils/colors";
import { Font } from "@/app/components/Font";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import {
  getBountyValue,
  getBountyLabel,
  isSubtaskBounty,
} from "@/lib/bounties";

interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
  labels: Array<{
    name: string;
    color: string;
  }>;
  comments: number;
  repository: string;
  subtaskCount: number;
}

interface BountiesData {
  issues: GitHubIssue[];
  loading: boolean;
  error: string | null;
}

function HomeContent() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [logoSize, setLogoSize] = useState(100);
  const [colorsSetByUrl, setColorsSetByUrl] = useState(false);
  const [bountiesData, setBountiesData] = useState<BountiesData>({
    issues: [],
    loading: true,
    error: null,
  });
  const [amountFilter, setAmountFilter] = useState("All");
  const [repoFilter, setRepoFilter] = useState("All");
  const [sortBy, setSortBy] = useState("amount");
  const searchParams = useSearchParams();

  const generateRandomColorsForPage = useCallback(() => {
    if (!colorsSetByUrl) {
      const { backgroundColor, textColor } = generateRandomColors();
      setBackgroundColor(backgroundColor);
      setTextColor(textColor);
    }
  }, [colorsSetByUrl]);

  const setInitialColorsForPage = useCallback(() => {
    const { backgroundColor, textColor } = generateRandomColors();
    setBackgroundColor(backgroundColor);
    setTextColor(textColor);
  }, []);

  useEffect(() => {
    const bgColor = searchParams.get("bg");
    const txtColor = searchParams.get("txt");

    if (bgColor && txtColor) {
      setBackgroundColor(`#${bgColor}`);
      setTextColor(`#${txtColor}`);
      setColorsSetByUrl(true);
    } else {
      setInitialColorsForPage();
      setColorsSetByUrl(false);
    }
  }, [searchParams, setInitialColorsForPage]);

  useEffect(() => {
    document.documentElement.style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      generateRandomColorsForPage();
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [generateRandomColorsForPage]);

  useEffect(() => {
    const updateLogoSize = () => {
      if (window.innerWidth >= 1920) {
        setLogoSize(200);
      } else if (window.innerWidth >= 1280) {
        setLogoSize(100);
      } else if (window.innerWidth >= 1024) {
        setLogoSize(80);
      } else if (window.innerWidth >= 590) {
        setLogoSize(60);
      } else if (window.innerWidth >= 470) {
        setLogoSize(48);
      } else {
        setLogoSize(36);
      }
    };

    updateLogoSize();
    window.addEventListener("resize", updateLogoSize);

    return () => {
      window.removeEventListener("resize", updateLogoSize);
    };
  }, []);

  const fetchBounties = async () => {
    setBountiesData({ issues: [], loading: true, error: null });

    try {
      const response = await fetch("/api/bounties");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch bounties");
      }

      setBountiesData({ issues: data.issues, loading: false, error: null });
    } catch (error) {
      setBountiesData({
        issues: [],
        loading: false,
        error: error instanceof Error ? error.message : "Something went wrong",
      });
    }
  };

  useEffect(() => {
    fetchBounties();
  }, []);

  const getIssueTotalValue = (issue: GitHubIssue) => {
    const amount = getBountyLabel(issue.labels);
    const baseValue = getBountyValue(amount);
    if (isSubtaskBounty(amount)) {
      // For subtask bounties, multiply by the number of subtasks (minimum 1)
      return baseValue * Math.max(issue.subtaskCount, 1);
    }
    return baseValue;
  };

  const availableBounties = React.useMemo(() => {
    const labels = new Set<string>();
    bountiesData.issues.forEach((issue) => {
      const label = getBountyLabel(issue.labels);
      if (label) labels.add(label);
    });
    return Array.from(labels).sort((a, b) => {
      const aIsSubtask = isSubtaskBounty(a);
      const bIsSubtask = isSubtaskBounty(b);
      if (aIsSubtask !== bIsSubtask) {
        return aIsSubtask ? 1 : -1;
      }
      return getBountyValue(a) - getBountyValue(b);
    });
  }, [bountiesData.issues]);

  const availableRepositories = React.useMemo(() => {
    const repos = new Set<string>();
    bountiesData.issues.forEach((issue) => {
      repos.add(issue.repository);
    });
    return Array.from(repos).sort();
  }, [bountiesData.issues]);

  const filteredAndSortedIssues = React.useMemo(() => {
    let filtered = bountiesData.issues;

    if (amountFilter !== "All") {
      filtered = filtered.filter(
        (issue) => getBountyLabel(issue.labels) === amountFilter
      );
    }

    if (repoFilter !== "All") {
      filtered = filtered.filter((issue) => issue.repository === repoFilter);
    }

    return filtered.sort((a, b) => {
      if (sortBy === "amount") {
        const amountA = getBountyValue(getBountyLabel(a.labels));
        const amountB = getBountyValue(getBountyLabel(b.labels));
        return amountB - amountA;
      } else if (sortBy === "date") {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      } else if (sortBy === "repository") {
        return a.repository.localeCompare(b.repository);
      }
      return 0;
    });
  }, [bountiesData.issues, amountFilter, repoFilter, sortBy]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div
      className="min-h-screen font-sans transition-colors duration-300"
      style={{
        fontFamily: "Helvetica Neue, sans-serif",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <div className="mx-auto px-4 py-8 sm:py-12 md:px-6 lg:px-8 lg:py-16">
        <header className="mb-8 flex flex-col items-start justify-between sm:flex-row sm:items-center xl:mb-16">
          <div
            className="mb-4 flex items-center md:mb-0"
            style={{ marginLeft: "-10px" }}
          >
            <Font text="ANTIWORK" color={textColor} size={logoSize} />
          </div>
          <div className="relative hidden sm:block">
            <button
              onClick={generateRandomColorsForPage}
              className="rounded p-2 xl:p-4"
              style={{ backgroundColor: textColor, color: backgroundColor }}
            >
              <Shuffle size={24} className="xl:h-8 xl:w-8" />
            </button>
          </div>
        </header>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center xl:mb-16">
          <div className="flex items-center gap-2">
            <Filter size={20} />
            <span className="text-sm font-bold sm:text-base">Amount:</span>
            <select
              value={amountFilter}
              onChange={(e) => setAmountFilter(e.target.value)}
              className="rounded border px-3 py-1 text-sm"
              style={{
                backgroundColor: backgroundColor,
                color: textColor,
                borderColor: textColor,
              }}
            >
              <option value="All">All amounts</option>
              {availableBounties.map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Github size={20} />
            <span className="text-sm font-bold sm:text-base">Repository:</span>
            <select
              value={repoFilter}
              onChange={(e) => setRepoFilter(e.target.value)}
              className="rounded border px-3 py-1 text-sm"
              style={{
                backgroundColor: backgroundColor,
                color: textColor,
                borderColor: textColor,
              }}
            >
              <option value="All">All repositories</option>
              {availableRepositories.map((repo) => (
                <option key={repo} value={repo}>
                  {repo}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <SortAsc size={20} />
            <span className="text-sm font-bold sm:text-base">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded border px-3 py-1 text-sm"
              style={{
                backgroundColor: backgroundColor,
                color: textColor,
                borderColor: textColor,
              }}
            >
              <option value="amount">Amount</option>
              <option value="date">Date created</option>
              <option value="repository">Repository</option>
            </select>
          </div>
        </div>

        <main>
          {bountiesData.loading && (
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <div
                  className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-solid border-r-transparent"
                  style={{
                    borderColor: `${textColor} transparent ${textColor} ${textColor}`,
                  }}
                ></div>
                <p className="text-sm sm:text-base">Loading bounties...</p>
              </div>
            </div>
          )}

          {bountiesData.error && (
            <div className="rounded border p-8 text-center">
              <p className="mb-4 text-lg font-bold">Error loading bounties</p>
              <p className="mb-4 text-sm">{bountiesData.error}</p>
              <button
                onClick={fetchBounties}
                className="rounded px-4 py-2 text-sm font-bold"
                style={{
                  backgroundColor: textColor,
                  color: backgroundColor,
                }}
              >
                Try again
              </button>
            </div>
          )}

          {!bountiesData.loading && !bountiesData.error && (
            <>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-sm font-bold tracking-wide sm:text-base lg:text-xl xl:text-2xl">
                  {filteredAndSortedIssues.length} open source bounties
                  available
                  {(() => {
                    const total = filteredAndSortedIssues.reduce(
                      (sum, issue) => sum + getIssueTotalValue(issue),
                      0
                    );
                    return total > 0
                      ? ` totaling $${total.toLocaleString()}`
                      : "";
                  })()}
                </h2>
              </div>

              {filteredAndSortedIssues.length === 0 ? (
                <div className="py-16 text-center">
                  <DollarSign size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="mb-2 text-lg font-bold">No bounties found</p>
                  <p className="text-sm opacity-75">
                    Try adjusting your filters to see more results.
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:gap-8">
                  {filteredAndSortedIssues.map((issue) => (
                    <Card
                      key={issue.id}
                      className="transition-all hover:shadow-lg"
                      style={{
                        backgroundColor: backgroundColor,
                        borderColor: textColor,
                        color: textColor,
                      }}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <CardTitle className="text-sm font-bold leading-tight sm:text-base lg:text-lg">
                            <a
                              href={issue.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                              style={{ color: textColor }}
                            >
                              {issue.title}
                            </a>
                          </CardTitle>
                          <div className="flex shrink-0 items-center gap-2">
                            <span
                              className="rounded px-2 py-1 text-xs font-bold"
                              style={{
                                backgroundColor: textColor,
                                color: backgroundColor,
                              }}
                            >
                              {getBountyLabel(issue.labels)}
                            </span>
                            <a
                              className="hover:underline"
                              href={issue.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={16} />
                            </a>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4 text-xs sm:text-sm">
                            <div className="flex items-center gap-1">
                              <Github size={14} />
                              <a
                                className="hover:underline"
                                href={`https://github.com/${issue.repository}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span className="font-medium">
                                  {issue.repository}
                                </span>
                              </a>
                            </div>
                            <div className="flex items-center gap-1">
                              <a
                                className="hover:underline"
                                href={issue.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span>#{issue.number}</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-xs opacity-75">
                            <div className="flex items-center gap-1">
                              <User size={12} />
                              <a
                                className="hover:underline"
                                href={`https://github.com/${issue.user.login}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span>{issue.user.login}</span>
                              </a>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <MessageSquare size={12} />
                                <span>{issue.comments}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar size={12} />
                                <span>{formatDate(issue.created_at)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            textAlign: "center",
          }}
        >
          ▼▼
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
