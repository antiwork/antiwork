// Q1 net income: Q1 2025 vs Q1 2026 (both finalized actuals).
// Source: QuickBooks Online P&L (realm 193514686786709), pulled 2026-06-08.
// Q1 2025 net income $1,301,569; Q1 2026 net income $1,669,057 (+28%).
// Both quarters are closed and finalized.
const DATA = [
  { label: "Q1 2025", value: 1.3, note: "", color: "#f9a8d4" },
  { label: "Q1 2026", value: 1.67, note: "", color: "#db2777" },
];

const MAX = 2; // y-axis ceiling in $M
const W = 520;
const H = 230;
const PAD_L = 16;
const PAD_R = 16;
const PAD_T = 28;
const PAD_B = 34;
const plotW = W - PAD_L - PAD_R;
const plotH = H - PAD_T - PAD_B;

export function RevenueChart() {
  const groupW = plotW / DATA.length;
  const barW = 96;

  const y = (v: number) => PAD_T + plotH - (v / MAX) * plotH;
  const base = y(0);

  return (
    <figure className="mt-8">
      <div className="relative rounded-2xl border border-card-border bg-[color:var(--card)] bg-card px-[18px] pb-[14px] pt-5 shadow-card">
        <div className="mb-1 flex items-baseline justify-between">
          <span className="text-[12px] uppercase tracking-[0.16em] text-muted">
            Q1 net income
          </span>
          <span className="text-[12px] font-bold text-[#059669]">
            +28% year over year
          </span>
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          height={H}
          role="img"
          aria-label="Q1 net income: $1.30M in Q1 2025, rising to $1.67M in Q1 2026 — a 28% year-over-year increase."
          style={{ display: "block", overflow: "visible" }}
        >
          {/* gridlines */}
          {[0, 0.5, 1, 1.5, 2].map((g) => (
            <g key={g}>
              <line
                x1={PAD_L}
                x2={W - PAD_R}
                y1={y(g)}
                y2={y(g)}
                stroke="var(--fg)"
                strokeOpacity={0.08}
              />
              <text
                x={PAD_L}
                y={y(g) - 3}
                fontSize="10"
                fill="var(--faint-2)"
                fontFamily="monospace"
              >
                ${g}M
              </text>
            </g>
          ))}

          {DATA.map((d, i) => {
            const cx = PAD_L + groupW * i + groupW / 2;
            const eyTop = y(d.value);
            return (
              <g key={d.label}>
                {/* net income bar */}
                <rect
                  x={cx - barW / 2}
                  y={eyTop}
                  width={barW}
                  height={base - eyTop}
                  rx={4}
                  fill={d.color}
                />
                {/* value label */}
                <text
                  x={cx}
                  y={eyTop - 8}
                  fontSize="14"
                  fontWeight="700"
                  fill="#be185d"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  ${d.value.toFixed(2)}M
                </text>

                {/* period label */}
                <text
                  x={cx}
                  y={base + 20}
                  fontSize="12"
                  fill="var(--muted-2)"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  {d.label}
                </text>
                {d.note && (
                  <text
                    x={cx}
                    y={base + 32}
                    fontSize="10"
                    fill="var(--faint-2)"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    {d.note}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-2 text-[13px] text-muted">
        Q1 net income — $1.30M (2025) to $1.67M (2026), +28% while the team
        shrank. Source: Antiwork financials (QuickBooks).
      </figcaption>
    </figure>
  );
}
