"use client";

import { useState } from "react";

// FAQ accordion, Tailwind-styled. Dark mode is automatic via Tailwind's
// `media` strategy (dark: classes follow prefers-color-scheme).
const FAQS: { q: string; a: string }[] = [
  {
    q: "What exactly do I get for $10,000?",
    a: "A 90-minute, 1:1 call with the team that built and runs Gumclaw, plus a prioritized 90-day automation plan for your company. We tear down where an agent can take work off your team first, walk through the architecture and guardrails we actually run in production, and cover the org and trust changes that made it stick.",
  },
  {
    q: "Is the call refundable?",
    a: "No — the call is non-refundable. It's a senior, hands-on working session and the plan is yours to keep. If you go on to have us help you implement, the full $10,000 is credited toward that engagement, so it counts toward the work rather than on top of it.",
  },
  {
    q: "Who's actually on the call?",
    a: "Real members of the team that runs the company day to day — not a salesperson reading a script. You'll be talking to the people who built the support, fraud, finance, and engineering automation you see on this page.",
  },
  {
    q: "Is this right for my company?",
    a: "It's built for founders and operators of roughly 5–100 person internet businesses who want to grow without rebuilding a conventional team. If most of your back office is still done by hand — support queues, fraud review, the monthly close — there's almost certainly work an agent can take over.",
  },
  {
    q: "Can't I just use the tools myself?",
    a: "You can — Helper and Flexile are real products you can use, and the essays are free. The tools are the easy part. The $10,000 buys the judgment: what to automate first, what has to stay human, and how to hand an agent your money and customers without breaking trust. That's the part that took us three years and a few expensive wrong turns.",
  },
  {
    q: "Will an AI run the call?",
    a: "No. Gumclaw runs the company, but the teardown is delivered by the humans who built it. The agent does the work; the people explain how to get there.",
  },
  {
    q: "What happens after I book?",
    a: "You'll get a confirmation and we'll coordinate a time that works. Come with your real numbers and your biggest operational headaches — the more concrete you are, the more concrete the 90-day plan we leave you with.",
  },
  {
    q: "Do you offer ongoing implementation?",
    a: "Yes, for a subset of companies. The call is the front door: if it's a fit on both sides, we'll talk about helping you build, and the $10,000 is credited toward that work.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mt-12">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
        FAQ
      </p>
      <div className="mt-4 flex flex-col gap-2">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_6px_16px_-10px_rgba(0,0,0,0.16)] dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_6px_16px_-10px_rgba(0,0,0,0.5)]"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
              >
                <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {item.q}
                </span>
                <span
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm leading-none text-white transition-transform duration-200 ${
                    isOpen
                      ? "rotate-45 bg-pink-600"
                      : "bg-neutral-300 dark:bg-neutral-700"
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="px-4 pb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
