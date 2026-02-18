export const BOUNTIES = {
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
  "$100/subtask": 100,
  "$200/subtask": 200,
  "$1K/subtask": 1000,
  "$1.5K/subtask": 1500,
} as const;

export type BountyLabel = keyof typeof BOUNTIES;

export const BOUNTY_LABELS = Object.keys(BOUNTIES) as BountyLabel[];

export function getBountyValue(label: string): number {
  return BOUNTIES[label as BountyLabel] || 0;
}

export function isSubtaskBounty(label: string): boolean {
  return label.includes("/subtask");
}

export function isBountyLabel(name: string): boolean {
  return name in BOUNTIES;
}

export function getBountyLabel(labels: Array<{ name: string }>): string {
  const bountyLabel = labels.find((label) => isBountyLabel(label.name));
  return bountyLabel?.name || "";
}

export const REPOSITORIES = [
  "antiwork/gumroad",
  "antiwork/flexile",
  "antiwork/helper",
  "antiwork/gumboard",
  "antiwork/smallbets",
  "antiwork/gumroad-mobile",
] as const;

export type Repository = (typeof REPOSITORIES)[number];
