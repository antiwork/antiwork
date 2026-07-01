import type { Metadata } from "next";
import { Font } from "@/app/components/Font";
import { ArchitectureDiagram } from "@/app/components/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "Antiwork — The architecture",
  description:
    "How one autonomous agent runs 99.99% of Gumroad: 273 skills, 78 cron loops, and two memory files. The architecture, redacted.",
};

const DOMAINS: [string, number, string][] = [
  ["gumroad", 146, "support · risk · refunds · KYC · payouts · compliance · tax · eng"],
  ["software-development", 22, "TDD · debugging · code review · planning"],
  ["creative", 20, "diagrams · infographics · design · video"],
  ["productivity", 14, "Google Workspace · Notion · Linear · Ramp"],
  ["mlops", 13, "fine-tuning · serving · evaluation"],
  ["devops", 11, "CI · webhooks · key rotation · incidents"],
  ["+15 more", 47, "media · github · apple · research · email · social…"],
];

const CADENCE: [string, string, string][] = [
  ["support-auto-triage", "every 15m", "auto"],
  ["hourly-risk-queue-review", "hourly", "auto"],
  ["daily-card-testing-autorefund", "daily", "auto"],
  ["weekly-wip-close", "weekly", "gated"],
  ["security-review", "daily", "auto"],
  ["qbo-token-keepalive", "daily", "wd"],
];

const TAG_COLOR: Record<string, string> = {
  auto: "#3fb950",
  gated: "#d29922",
  wd: "#888888",
};

const GUARDRAILS: [string, string][] = [
  ["Confirm before every payment", "No autonomous spend; vendor bank-detail changes trigger an out-of-band BEC check."],
  ["Irreversible-only gating", "Reversible actions run free; one-way doors are gated behind a human."],
  ["Critic + backstop passes", "Every loop is re-verified by an independent pass on a timer. “Done” means a critic confirmed it in production."],
  ["Anti-fabrication rule", "No fact asserted without a live source pulled this session. IDs and amounts are copied, never recalled."],
  ["Humanization clause", "Every customer-facing line reads like a person wrote it."],
  ["Send-as attribution", "Human-in-the-loop replies go out under that human’s name; autonomous ones under the agent’s."],
];

const REPO_URL = "https://github.com/antiwork/skills";

function GithubMark({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function GithubCTA({ label, size = 16 }: { label: string; size?: number }) {
  return (
    <a
      href={REPO_URL}
      className="inline-flex items-center gap-[10px] rounded-full border border-[#ec4899] bg-[#ec4899] font-bold text-white no-underline"
      style={{ padding: size >= 18 ? "14px 26px" : "11px 22px", fontSize: size }}
    >
      <GithubMark size={size + 4} />
      {label}
    </a>
  );
}

export default function Skills() {
  return (
    <main className="mx-auto max-w-[640px] px-6 pb-16 pt-8 font-mono text-[16px] leading-[1.7] text-fg">
      <div className="flex items-center gap-2">
        <a href="/" aria-label="Antiwork home" className="flex items-center gap-2 no-underline">
          <Font text="W" color="var(--fg)" size={24} />
          <span
            className="text-[30px] font-bold leading-none text-fg"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Antiwork
          </span>
        </a>
      </div>

      <p className="mt-8 text-[13px] uppercase tracking-[0.18em] text-muted">
        The architecture
      </p>

      <p className="mt-4 text-[20px] text-fg">
        One autonomous agent runs 99.99% of Gumroad.
      </p>

      <p className="mt-6 text-muted-2">
        Not a chatbot bolted onto a help desk — the actual operator. It reads
        the support queue, investigates fraud, issues refunds, closes tickets,
        writes and ships code, reconciles the books, files tax reports, and
        pings a human only when a decision genuinely needs one. It runs on{" "}
        <strong>Hermes Agent</strong>, and its brain is three layers.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
        <GithubCTA label="Explore the code on GitHub" />
        <span className="text-[13px] text-muted">
          273 skills · 78 cron loops · redacted &amp; open
        </span>
      </div>

      <div className="mt-10">
        <ArchitectureDiagram />
      </div>

      <p className="mt-6 text-[13px] text-muted">
        Redacted: every credential, prod endpoint, customer record, chat
        destination, and prompt internal is stripped. This explains how the
        brain is built — not how to run it.
      </p>

      <p className="mt-14 text-[13px] uppercase tracking-[0.18em] text-muted">
        Skills · procedural memory
      </p>
      <p className="mt-5 text-muted-2">
        Each skill is a <span className="text-fg">SKILL.md</span>: a trigger, a
        numbered procedure, exact commands, pitfalls, and verification. When a
        task matches, the skill loads and the agent follows the house method —
        not an improvised guess. This is how one agent holds the expertise of an
        entire ops + support + finance + eng team.
      </p>

      <div className="mt-6 flex flex-col gap-[10px]">
        {DOMAINS.map(([name, count, covers]) => (
          <div key={name}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[14px] text-fg">{name}</span>
              <span className="text-[13px] text-muted">{count}</span>
            </div>
            <div className="mt-[6px] h-[6px] w-full overflow-hidden rounded-full bg-[color:var(--faint)]">
              <div
                className="h-full rounded-full bg-[#ec4899]"
                style={{ width: `${(count / 146) * 100}%` }}
              />
            </div>
            <p className="mt-[6px] text-[12px] leading-[1.4] text-muted">
              {covers}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-14 text-[13px] uppercase tracking-[0.18em] text-muted">
        Cron loops · the heartbeat
      </p>
      <p className="mt-5 text-muted-2">
        The brain doesn&apos;t wait to be asked. 78 scheduled jobs give it a
        pulse — some every couple of minutes (watchdogs), some daily (risk,
        finance), some weekly (performance review, tax verification). Most run{" "}
        <strong>silent</strong>, speaking up only when something is worth a
        human&apos;s attention.
      </p>

      <div className="mt-6 rounded-[12px] border border-card-border bg-card bg-[color:var(--card)] p-4 shadow-card-sm">
        {CADENCE.map(([name, when, tag], i) => (
          <div
            key={name}
            className={`flex items-center justify-between gap-3 py-2 text-[13px] ${
              i > 0 ? "border-t border-card-border" : ""
            }`}
          >
            <span className="truncate text-muted-2">{name}</span>
            <span className="flex flex-none items-center gap-3">
              <span className="text-muted">{when}</span>
              <span
                className="rounded-full px-2 py-[1px] text-[11px]"
                style={{
                  color: TAG_COLOR[tag],
                  border: `1px solid ${TAG_COLOR[tag]}`,
                }}
              >
                {tag}
              </span>
            </span>
          </div>
        ))}
      </div>

      <p className="mt-14 text-[13px] uppercase tracking-[0.18em] text-muted">
        Guardrails
      </p>
      <div className="mt-6 flex flex-col gap-3">
        {GUARDRAILS.map(([title, body]) => (
          <div
            key={title}
            className="rounded-[12px] border border-card-border bg-card bg-[color:var(--card)] px-5 py-4 shadow-card-sm"
          >
            <p className="m-0 text-[15px] font-bold text-fg">{title}</p>
            <p className="mt-1 text-[13px] text-muted">{body}</p>
          </div>
        ))}
      </div>

      <p className="mt-14 text-[13px] uppercase tracking-[0.18em] text-muted">
        The one thing it doesn&apos;t do
      </p>
      <div className="mt-6 rounded-[12px] border border-[#ec4899] bg-card bg-[color:var(--card)] px-5 py-6 text-center shadow-card-sm">
        <p className="m-0 text-[34px] font-bold leading-none text-[#ec4899]">
          0.01%
        </p>
        <p className="mt-3 text-muted-2">
          The agent runs 99.99% of Gumroad. The remaining sliver is{" "}
          <strong>paying the taxes</strong> — the one irreversible,
          judgment-and-liability call that stays with a human on purpose. It
          prepares everything; a person presses the final button.
        </p>
      </div>

      <div className="mt-14 rounded-[14px] border border-card-border bg-card-2 bg-[color:var(--card-2)] px-6 py-10 text-center shadow-card-sm">
        <p className="m-0 text-[20px] font-bold text-fg">Read the brain.</p>
        <p className="mx-auto mt-2 max-w-[440px] text-[14px] text-muted">
          Every skill and the full cron manifest — redacted, open, and free.
          The whole playbook one agent uses to run a company.
        </p>
        <div className="mt-6 flex justify-center">
          <GithubCTA label="View antiwork/skills on GitHub" size={18} />
        </div>
      </div>

      <a
        href="/"
        className="mt-12 inline-flex items-center text-[13px] text-muted no-underline"
      >
        ← Back to antiwork.com
      </a>
    </main>
  );
}
