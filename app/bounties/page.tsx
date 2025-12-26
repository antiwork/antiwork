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
}

interface BountiesData {
  issues: GitHubIssue[];
  loading: boolean;
  error: string | null;
}

function BountiesContent() {
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

  const getBountyAmount = (labels: Array<{ name: string }>) => {
    const bountyLabels = [
      "$100",
      "$200",
      "$250",
      "$1K",
      "$1.5K",
      "$2K",
      "$2.5K",
      "$3K",
      "$5K",
      "$10K",
      "$20K",
      "$200/subtask",
      "$1K/subtask",
      "$1.5K/subtask",
    ];
    const bountyLabel = labels.find((label) =>
      bountyLabels.includes(label.name)
    );
    return bountyLabel?.name || "";
  };

  const getBountyValue = (amount: string) => {
    const values: { [key: string]: number } = {
      $100: 100,
      $200: 200,
      $250: 250,
      $1K: 1000,
      "$1.5K": 1500,
      $2K: 2000,
      "$2.5K": 2500,
      $3K: 3000,
      $5K: 5000,
      $10K: 10000,
      $20K: 20000,
      "$200/subtask": 200,
      "$1K/subtask": 1000,
      "$1.5K/subtask": 1500,
    };
    return values[amount] || 0;
  };

  const filteredAndSortedIssues = React.useMemo(() => {
    let filtered = bountiesData.issues;

    if (amountFilter !== "All") {
      filtered = filtered.filter(
        (issue) => getBountyAmount(issue.labels) === amountFilter
      );
    }

    if (repoFilter !== "All") {
      filtered = filtered.filter((issue) => issue.repository === repoFilter);
    }

    return filtered.sort((a, b) => {
      if (sortBy === "amount") {
        const amountA = getBountyValue(getBountyAmount(a.labels));
        const amountB = getBountyValue(getBountyAmount(b.labels));
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
            <Font text="BOUNTIES" color={textColor} size={logoSize} />
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

        <p
          className="mb-8 text-sm font-bold sm:text-base lg:text-xl xl:mb-16 xl:text-3xl"
          style={{ color: textColor }}
        >
          Open source bounties from{" "}
          <a
            href="https://github.com/antiwork/gumroad"
            className="underline hover:no-underline"
            style={{ color: textColor }}
          >
            Gumroad
          </a>
          ,{" "}
          <a
            href="https://github.com/antiwork/flexile"
            className="underline hover:no-underline"
            style={{ color: textColor }}
          >
            Flexile
          </a>
          ,{" "}
          <a
            href="https://github.com/antiwork/helper"
            className="underline hover:no-underline"
            style={{ color: textColor }}
          >
            Helper
          </a>
          ,{" "}
          <a
            href="https://github.com/antiwork/gumboard"
            className="underline hover:no-underline"
            style={{ color: textColor }}
          >
            Gumboard
          </a>
          , and{" "}
          <a
            href="https://github.com/antiwork/smallbets"
            className="underline hover:no-underline"
            style={{ color: textColor }}
          >
            Small Bets
          </a>
          .
        </p>

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
              <option value="$100">$100</option>
              <option value="$200">$200</option>
              <option value="$250">$250</option>
              <option value="$1K">$1K</option>
              <option value="$1.5K">$1.5K</option>
              <option value="$2K">$2K</option>
              <option value="$2.5K">$2.5K</option>
              <option value="$3K">$3K</option>
              <option value="$5K">$5K</option>
              <option value="$10K">$10K</option>
              <option value="$20K">$20K</option>
              <option value="$200/subtask">$200/subtask</option>
              <option value="$1K/subtask">$1K/subtask</option>
              <option value="$1.5K/subtask">$1.5K/subtask</option>
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
              <option value="antiwork/gumroad">antiwork/gumroad</option>
              <option value="antiwork/flexile">antiwork/flexile</option>
              <option value="antiwork/helper">antiwork/helper</option>
              <option value="antiwork/gumboard">antiwork/gumboard</option>
              <option value="antiwork/smallbets">antiwork/smallbets</option>
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
                  className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"
                  style={{ borderColor: textColor }}
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
                  {filteredAndSortedIssues.length} bounties available totaling
                  over $
                  {filteredAndSortedIssues
                    .reduce(
                      (total, issue) =>
                        total + getBountyValue(getBountyAmount(issue.labels)),
                      0
                    )
                    .toLocaleString()}
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
                              {getBountyAmount(issue.labels)}
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

export default function BountiesPage() {
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
      <BountiesContent />
    </Suspense>
  );
}
