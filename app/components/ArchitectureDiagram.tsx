import React from "react";

const INPUTS = [
  "Support queue",
  "GitHub webhooks",
  "risk@ inbox",
  "Telegram DMs",
  "Stripe · QBO · Ramp",
  "Sentry issues",
  "CSAT scans",
  "cron ticks",
];

const LAYERS: [string, string][] = [
  ["Skills", "procedural memory — how to do the work"],
  ["Cron loops", "autonomous cadence — the heartbeat"],
  ["Memory files", "durable state — what it knows, who it serves"],
];

const LANES: { label: string; color: string; items: string[] }[] = [
  {
    label: "Autonomous",
    color: "#3fb950",
    items: ["reply · refund · close", "suspend fraud · run KYC"],
  },
  {
    label: "Gated",
    color: "#d29922",
    items: ["ship code · payouts", "public posts"],
  },
  {
    label: "Human",
    color: "#ec4899",
    items: ["pay taxes", "irreversible spend"],
  },
];

function Arrow() {
  return (
    <div className="flex flex-col items-center py-2 text-faint" aria-hidden>
      <span className="text-[13px] leading-none">▼</span>
    </div>
  );
}

export function ArchitectureDiagram() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {LAYERS.map(([label, sub]) => (
          <div
            key={label}
            className="rounded-[10px] border border-card-border bg-[color:var(--card-2)] bg-card-2 px-3 py-4 text-center shadow-card-sm"
          >
            <p className="m-0 text-[13px] font-bold text-fg">{label}</p>
            <p className="mt-1 text-[11px] leading-[1.4] text-muted">{sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[12px] border border-card-border bg-[color:var(--card)] bg-card p-5 shadow-card-sm">
        <p className="m-0 text-[11px] uppercase tracking-[0.18em] text-muted">
          Inputs
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {INPUTS.map((i) => (
            <span
              key={i}
              className="rounded-full border border-pill-border px-3 py-[5px] text-[12px] text-muted-2"
            >
              {i}
            </span>
          ))}
        </div>

        <Arrow />

        <div className="rounded-[10px] border border-[#ec4899] bg-[color:var(--card-2)] bg-card-2 px-4 py-4 text-center">
          <p className="m-0 text-[15px] font-bold text-fg">
            Gumclaw · Hermes Agent
          </p>
          <p className="mt-2 font-mono text-[12px] tracking-[0.06em] text-[#ec4899]">
            reason → plan → act → verify
          </p>
          <p className="mt-2 text-[12px] text-muted">
            one agent · Soul + Personality · Memory · Skills
          </p>
        </div>

        <Arrow />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {LANES.map((lane) => (
            <div
              key={lane.label}
              className="rounded-[10px] border border-card-border bg-[color:var(--card-2)] bg-card-2 px-3 py-3"
            >
              <p
                className="m-0 text-[12px] font-bold uppercase tracking-[0.12em]"
                style={{ color: lane.color }}
              >
                {lane.label}
              </p>
              <ul className="mt-2 list-none space-y-1 p-0">
                {lane.items.map((it) => (
                  <li key={it} className="text-[12px] text-muted-2">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Arrow />

        <div className="px-4 py-2 text-center">
          <p className="m-0 font-mono text-[12px] tracking-[0.06em] text-muted-2">
            critic → backstop → sweep
          </p>
          <p className="mt-1 text-[11px] text-muted">
            every action re-verified by an independent pass on a timer
          </p>
        </div>
      </div>
    </div>
  );
}
