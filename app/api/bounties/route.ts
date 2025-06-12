import { NextResponse } from "next/server";

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
}

interface ProcessedIssue extends GitHubIssue {
  repository: string;
}

const BOUNTY_LABELS = ["$1K", "$2.5K", "$5K", "$10K"];
const REPOSITORIES = ["antiwork/gumroad", "antiwork/flexile"];

const CACHE_TTL_MS = 5 * 60 * 1000;
let cachedData: {
  issues: ProcessedIssue[];
  total: number;
  errors?: string[];
} | null = null;
let cacheTimestamp: number = 0;

async function fetchIssuesForRepo(
  repo: string,
  label: string
): Promise<GitHubIssue[]> {
  const url = `https://api.github.com/repos/${repo}/issues?labels=${encodeURIComponent(label)}&state=open&per_page=100`;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Antiwork-Bounties-App",
  };

  if (process.env.flexile_devin_github_pat) {
    headers.Authorization = `token ${process.env.flexile_devin_github_pat}`;
  }

  const response = await fetch(url, {
    headers,
  });

  if (!response.ok) {
    if (response.status === 404) {
      return [];
    }
    if (response.status === 403 || response.status === 429) {
      throw new Error(`GitHub API rate limit exceeded for ${repo}`);
    }
    throw new Error(
      `GitHub API error for ${repo}: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export async function GET() {
  try {
    const now = Date.now();
    if (cachedData && now - cacheTimestamp < CACHE_TTL_MS) {
      console.log("Serving cached bounties data");
      return NextResponse.json(cachedData);
    }

    console.log("Fetching fresh bounties data from GitHub API");
    const allIssues: ProcessedIssue[] = [];
    const errors: string[] = [];

    for (const repo of REPOSITORIES) {
      for (const label of BOUNTY_LABELS) {
        try {
          const issues = await fetchIssuesForRepo(repo, label);
          const processedIssues = issues.map((issue) => ({
            ...issue,
            repository: repo,
          }));
          allIssues.push(...processedIssues);
        } catch (error) {
          console.error(
            `Error fetching issues for ${repo} with label ${label}:`,
            error
          );
          errors.push(`Failed to fetch ${label} issues from ${repo}`);
        }
      }
    }

    const uniqueIssues = allIssues.filter(
      (issue, index, self) => index === self.findIndex((i) => i.id === issue.id)
    );

    uniqueIssues.sort((a, b) => {
      const getBountyValue = (labels: Array<{ name: string }>) => {
        const bountyLabel = labels.find((label) =>
          BOUNTY_LABELS.includes(label.name)
        );
        const values: { [key: string]: number } = {
          $1K: 1000,
          "$2.5K": 2500,
          $5K: 5000,
          $10K: 10000,
        };
        return values[bountyLabel?.name || ""] || 0;
      };

      const valueA = getBountyValue(a.labels);
      const valueB = getBountyValue(b.labels);
      return valueB - valueA;
    });

    const response = {
      issues: uniqueIssues,
      total: uniqueIssues.length,
      errors: errors.length > 0 ? errors : undefined,
    };

    cachedData = response;
    cacheTimestamp = now;

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching bounties:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch bounties",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
