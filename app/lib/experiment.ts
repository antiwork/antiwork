"use client";

// Lightweight client-side A/B harness for the "book a call" CTA.
// Each visitor is assigned a sticky variant (persisted in localStorage) and
// every exposure / click is reported to Vercel Analytics as a custom event,
// so conversion can be compared by variant in the Analytics dashboard.

export type Variant = "control" | "outcome";

const STORAGE_KEY = "antiwork_cta_experiment_v1";

export const CHECKOUT_URL = "https://gumclaw.gumroad.com/l/gzhptn";

// The variants under test mirror the one place the two CRO reviewers diverged:
// time-for-access framing ("control") vs. outcome framing ("outcome").
export const CTA_LABELS: Record<Variant, string> = {
  control: "Book the 90-minute teardown — $10,000",
  outcome: "Get your operating teardown — $10,000",
};

// Assigns (or reads) a sticky 50/50 variant for this visitor.
// SSR-safe: returns "control" on the server so the first client render matches.
export function assignVariant(): Variant {
  if (typeof window === "undefined") return "control";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "control" || stored === "outcome") return stored;
    const variant: Variant = Math.random() < 0.5 ? "control" : "outcome";
    window.localStorage.setItem(STORAGE_KEY, variant);
    return variant;
  } catch {
    return "control";
  }
}
