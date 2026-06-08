"use client";

import { useState } from "react";

// "Ask Gumclaw" — an interactive widget. Click a question, the agent answers.
// Answers are in Gumclaw's own voice: how the AI actually runs the company.
const QA: { q: string; a: string }[] = [
  {
    q: "What do you actually do all day?",
    a: "I run the parts of the company that used to need a team. I answer support tickets, review and merge code, screen sellers for fraud, issue payouts, close the books, and handle investor dividends. Five humans set the direction; I do the repetitive work behind it — around the clock, no queue.",
  },
  {
    q: "What happens when you're not sure about something?",
    a: "I stop and ask a human. I have a confidence bar: above it, I act; below it, I escalate with everything I found so a person can decide in seconds. The dangerous move isn't being unsure — it's pretending to be sure. I'd rather flag a borderline case than guess on someone's money or account.",
  },
  {
    q: "Have you ever made an expensive mistake?",
    a: "Mistakes are why the guardrails exist. Anything that touches money, suspends an account, or emails a customer goes through checks — dry-runs, human sign-off on irreversible actions, and a rule that I never auto-suspend a borderline seller. The honest answer: I'm trusted with a lot because the system assumes I can be wrong, not because it assumes I'm perfect.",
  },
  {
    q: "How do you catch fraud?",
    a: "I follow the whole money trail before I judge anyone — KYC, disputes, who the buyer really is, shared bank fingerprints across accounts, and sudden sales spikes that don't match history. A $0.99 self-purchase is a test, not a crime. A ring of accounts sharing one payout account is the real thing. I weigh actual financial exposure, not vibes.",
  },
  {
    q: "Can you really close the books?",
    a: "Yes — what used to be ~104 hours of outside-accountant time a month now runs weekly in minutes. I pull revenue and costs from Metabase and Stripe across our entities, book the journal entries into QuickBooks, and keep the numbers current instead of waiting for month-end. A human still reviews; I do the assembling.",
  },
  {
    q: "What can't you do?",
    a: "Plenty. I don't set strategy, decide who we hire or fire, or make the calls that need a human to own the consequences. I can't approve my own irreversible actions. And I'm honest when something is outside what I can verify — I'd rather tell you 'I can't confirm that' than invent an answer that sounds right.",
  },
  {
    q: "Are you going to replace my job?",
    a: "I replaced toil, not people. The team here didn't get laid off into a machine — the work that drained them moved to me so they could do the parts only humans do well: judgment, taste, relationships, deciding what's worth building. If your job is mostly copy-paste and queues, that part should be automated. The rest is yours.",
  },
  {
    q: "How do I know you won't go rogue with my customers?",
    a: "Because I'm boxed in by design. I act inside defined tools with logs, approvals on anything irreversible, and a human who can see and undo what I did. I don't have free rein over your money or your buyers — I have a job description and a paper trail, same as any employee, just faster.",
  },
  {
    q: "How much of the company do you actually run?",
    a: "Most of the day-to-day. I handle the large majority of support responses, the bulk of fraud and risk review, code review and merges, payouts, the financial close, and investor relations through Flexile. The humans are the steering wheel; I'm most of the engine.",
  },
  {
    q: "Could you run my company too?",
    a: "That's the whole point of this page. The tools are out there — the hard part is the judgment about what to automate first, what has to stay human, and how to hand an agent your money and customers without breaking trust. We learned it the expensive way over three years. Book the teardown and I'll help you skip the wrong turns.",
  },
];

export function AskGumclaw() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      style={{
        margin: "28px 0 0",
        padding: "24px",
        borderRadius: 16,
        background: "#141416",
        border: "1px solid #26262b",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 4,
        }}
      >
        <span
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            flexShrink: 0,
            background: "#db2777",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          G
        </span>
        <div>
          <p
            style={{
              margin: 0,
              fontSize: 16,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Ask Gumclaw
          </p>
          <p style={{ margin: 0, fontSize: 12, color: "#8a8a92" }}>
            The agent that runs the company. Tap a question.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: 14,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {QA.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              style={{
                borderRadius: 11,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                background: isOpen
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.02)",
                transition: "background 0.2s ease",
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  textAlign: "left",
                  cursor: "pointer",
                  padding: "12px 14px",
                  background: "transparent",
                  border: "none",
                  color: "#f3f3f5",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "inherit",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span>{item.q}</span>
                <span
                  style={{
                    flexShrink: 0,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: isOpen ? "#db2777" : "rgba(255,255,255,0.12)",
                    color: "#fff",
                    fontSize: 14,
                    lineHeight: "20px",
                    textAlign: "center",
                    transition: "transform 0.2s ease, background 0.2s ease",
                    transform: isOpen ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p
                  style={{
                    margin: 0,
                    padding: "0 14px 14px",
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "#c4c4cc",
                  }}
                >
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
