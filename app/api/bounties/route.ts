import { NextResponse } from "next/server";

export const revalidate = 300; // 5 minutes

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
  pull_request?: Record<string, unknown>;
}

interface ProcessedIssue extends GitHubIssue {
  repository: string;
}

const BOUNTY_LABELS = ["$100", "$250", "$1K", "$2.5K", "$5K", "$10K", "$20K"];

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes for issues
const REPO_CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour for repositories

let cachedData: {
  issues: ProcessedIssue[];
  repositories: string[];
  total: number;
  errors?: string[];
} | null = null;
let cacheTimestamp: number = 0;

let cachedRepos: string[] | null = null;
let repoCacheTimestamp: number = 0;

async function fetchAllRepos(): Promise<string[]> {
  const now = Date.now();
  if (cachedRepos && now - repoCacheTimestamp < REPO_CACHE_TTL_MS) {
    console.log("Serving cached repositories");
    return cachedRepos;
  }

  console.log("Fetching all repositories from antiwork organization");
  const allRepos: string[] = [];
  let page = 1;
  const perPage = 100;
  const org = "antiwork";

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Antiwork-Bounties-App",
  };

  if (process.env.GH_TOKEN) {
    headers.Authorization = `token ${process.env.GH_TOKEN}`;
  }

  try {
    while (true) {
      const url = `https://api.github.com/orgs/${org}/repos?per_page=${perPage}&page=${page}&type=all`;
      const response = await fetch(url, {
        headers,
        next: { revalidate: Math.floor(REPO_CACHE_TTL_MS / 1000) },
      });

      if (!response.ok) {
        if (response.status === 404) {
          console.warn(`Organization ${org} not found`);
          break;
        }
        if (response.status === 403 || response.status === 429) {
          throw new Error(`GitHub API rate limit exceeded while fetching repos`);
        }
        throw new Error(
          `GitHub API error while fetching repos: ${response.status} ${response.statusText}`
        );
      }

      const repos: Array<{ full_name: string }> = await response.json();

      if (repos.length === 0) {
        break;
      }

      repos.forEach((repo) => {
        allRepos.push(repo.full_name);
      });

      // Check if there are more pages
      const linkHeader = response.headers.get("link");
      if (!linkHeader || !linkHeader.includes('rel="next"')) {
        break;
      }

      page++;
    }

    cachedRepos = allRepos;
    repoCacheTimestamp = now;
    console.log(`Fetched ${allRepos.length} repositories`);
    return allRepos;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    // Return cached repos if available, otherwise throw
    if (cachedRepos) {
      console.log("Using cached repositories due to error");
      return cachedRepos;
    }
    throw error;
  }
}

async function fetchIssuesForRepo(repo: string): Promise<GitHubIssue[]> {
  const url = `https://api.github.com/repos/${repo}/issues?state=open&per_page=100`;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Antiwork-Bounties-App",
  };

  if (process.env.GH_TOKEN) {
    headers.Authorization = `token ${process.env.GH_TOKEN}`;
  }

  const response = await fetch(url, {
    headers,
    next: { revalidate: Math.floor(CACHE_TTL_MS / 1000) },
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
    const errors: string[] = [];

    // Fetch all repositories dynamically
    let repositories: string[] = [];
    try {
      repositories = await fetchAllRepos();
      if (repositories.length === 0) {
        errors.push("No repositories found in organization");
      }
    } catch (error) {
      console.error("Error fetching repositories:", error);
      errors.push(
        `Failed to fetch repositories: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      // Fallback to empty array - will result in no issues but won't crash
      repositories = [];
    }

    const repoIssueResults = await Promise.all(
      repositories.map(async (repo) => {
        try {
          const issues = await fetchIssuesForRepo(repo);
          return { repo, issues };
        } catch (error) {
          console.error(`Error fetching issues for ${repo}:`, error);
          errors.push(`Failed to fetch issues from ${repo}`);
          return { repo, issues: [] as GitHubIssue[] };
        }
      })
    );

    const allIssues: ProcessedIssue[] = repoIssueResults.flatMap(
      ({ repo, issues }) =>
        issues
          .filter((issue: any) => !issue.pull_request)
          .filter((issue) =>
            issue.labels.some((l) => BOUNTY_LABELS.includes(l.name))
          )
          .map((issue) => ({ ...issue, repository: repo }))
    );

    const uniqueIssues = allIssues.filter(
      (issue, index, self) => index === self.findIndex((i) => i.id === issue.id)
    );

    uniqueIssues.sort((a, b) => {
      const getBountyValue = (labels: Array<{ name: string }>) => {
        const bountyLabel = labels.find((label) =>
          BOUNTY_LABELS.includes(label.name)
        );
        const values: { [key: string]: number } = {
          $100: 100,
          $250: 250,
          $1K: 1000,
          "$2.5K": 2500,
          $5K: 5000,
          $10K: 10000,
          $20K: 20000,
        };
        return values[bountyLabel?.name || ""] || 0;
      };

      const valueA = getBountyValue(a.labels);
      const valueB = getBountyValue(b.labels);
      return valueB - valueA;
    });

    const response = {
      issues: uniqueIssues,
      repositories: repositories,
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
