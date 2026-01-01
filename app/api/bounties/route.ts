import { NextResponse } from "next/server";
import Redis from "ioredis";
import {
  REPOSITORIES,
  getBountyValue,
  getBountyLabel,
  isBountyLabel,
} from "@/lib/bounties";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  html_url: string;
  body: string | null;
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
  subtaskCount: number;
}

function countSubtasks(body: string | null): number {
  if (!body) return 0;
  // Only match unchecked task items: - [ ] or * [ ]
  const uncheckedTaskRegex = /^[\s]*[-*]\s+\[\s\]/gm;
  const matches = body.match(uncheckedTaskRegex);
  return matches ? matches.length : 0;
}

interface CachedData {
  issues: ProcessedIssue[];
  total: number;
  errors?: string[];
}

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

async function clearCache(): Promise<void> {
  const client = getRedis();
  if (!client) return;

  try {
    await client.del(CACHE_KEY);
    console.log("Redis cache cleared");
  } catch (error) {
    console.error("Redis delete error:", error);
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

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const forceRefresh = searchParams.get("refresh") === "true";

    // Try to get cached data from Redis (unless force refresh)
    if (!forceRefresh) {
      const cachedData = await getCachedData();
      if (cachedData) {
        console.log("Serving cached bounties data from Redis");
        return NextResponse.json(cachedData);
      }
    } else {
      console.log("Force refresh requested, clearing cache");
      await clearCache();
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
          .filter((issue) => issue.labels.some((l) => isBountyLabel(l.name)))
          .map((issue) => ({
            ...issue,
            repository: repo,
            subtaskCount: countSubtasks(issue.body),
          }))
    );

    const uniqueIssues = allIssues.filter(
      (issue, index, self) => index === self.findIndex((i) => i.id === issue.id)
    );

    uniqueIssues.sort((a, b) => {
      const valueA = getBountyValue(getBountyLabel(a.labels));
      const valueB = getBountyValue(getBountyLabel(b.labels));
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
