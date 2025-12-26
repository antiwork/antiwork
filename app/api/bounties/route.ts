import { NextResponse } from "next/server";
import Redis from "ioredis";

export const revalidate = 600; // 10 minutes

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

interface CachedData {
  issues: ProcessedIssue[];
  total: number;
  errors?: string[];
}

const BOUNTY_LABELS = [
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
const REPOSITORIES = [
  "antiwork/gumroad",
  "antiwork/flexile",
  "antiwork/helper",
  "antiwork/gumboard",
  "antiwork/smallbets",
];

const CACHE_KEY = "bounties:data";
const CACHE_TTL_SECONDS = 10 * 60; // 10 minutes

let redis: Redis | null = null;

function getRedis(): Redis | null {
  if (!process.env.REDIS_URL) {
    return null;
  }
  if (!redis) {
    redis = new Redis(process.env.REDIS_URL, {
      maxRetriesPerRequest: 3,
      lazyConnect: true,
    });
  }
  return redis;
}

async function getCachedData(): Promise<CachedData | null> {
  const client = getRedis();
  if (!client) return null;

  try {
    const data = await client.get(CACHE_KEY);
    if (data) {
      return JSON.parse(data) as CachedData;
    }
  } catch (error) {
    console.error("Redis get error:", error);
  }
  return null;
}

async function setCachedData(data: CachedData): Promise<void> {
  const client = getRedis();
  if (!client) return;

  try {
    await client.setex(CACHE_KEY, CACHE_TTL_SECONDS, JSON.stringify(data));
  } catch (error) {
    console.error("Redis set error:", error);
  }
}

async function fetchIssuesForRepo(repo: string): Promise<GitHubIssue[]> {
  const allIssues: GitHubIssue[] = [];
  let page = 1;
  const perPage = 100;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Antiwork-Bounties-App",
  };

  if (process.env.GH_TOKEN) {
    headers.Authorization = `token ${process.env.GH_TOKEN}`;
  }

  while (true) {
    const url = `https://api.github.com/repos/${repo}/issues?state=open&per_page=${perPage}&page=${page}`;

    const response = await fetch(url, {
      headers,
      next: { revalidate: CACHE_TTL_SECONDS },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return allIssues;
      }
      if (response.status === 403 || response.status === 429) {
        throw new Error(`GitHub API rate limit exceeded for ${repo}`);
      }
      throw new Error(
        `GitHub API error for ${repo}: ${response.status} ${response.statusText}`
      );
    }

    const issues: GitHubIssue[] = await response.json();
    allIssues.push(...issues);

    // If we got fewer issues than perPage, we've reached the last page
    if (issues.length < perPage) {
      break;
    }

    page++;

    // Safety limit to prevent infinite loops (max 10 pages = 1000 issues per repo)
    if (page > 10) {
      break;
    }
  }

  return allIssues;
}

export async function GET() {
  try {
    // Try to get cached data from Redis
    const cachedData = await getCachedData();
    if (cachedData) {
      console.log("Serving cached bounties data from Redis");
      return NextResponse.json(cachedData);
    }

    console.log("Fetching fresh bounties data from GitHub API");
    const errors: string[] = [];

    const repoIssueResults = await Promise.all(
      REPOSITORIES.map(async (repo) => {
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
        return values[bountyLabel?.name || ""] || 0;
      };

      const valueA = getBountyValue(a.labels);
      const valueB = getBountyValue(b.labels);
      return valueB - valueA;
    });

    const responseData: CachedData = {
      issues: uniqueIssues,
      total: uniqueIssues.length,
      errors: errors.length > 0 ? errors : undefined,
    };

    // Cache the data in Redis
    await setCachedData(responseData);

    return NextResponse.json(responseData);
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
