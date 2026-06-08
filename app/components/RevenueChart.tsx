// Annual revenue + adjusted EBITDA, 2023–2025.
// Source: Antiwork 2026 investor deck (app/2026/slides/financials-combined.tsx).
// Revenue and adjusted EBITDA are real figures from that deck.
const DATA = [
  { year: "2023", revenue: 20.74, ebitda: 9.81 },
  { year: "2024", revenue: 18.95, ebitda: 5.57 },
  { year: "2025", revenue: 17.79, ebitda: 5.85 },
];

const MAX = 22; // y-axis ceiling in $M
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
  const barW = 46;
  const gap = 16;

  const y = (v: number) => PAD_T + plotH - (v / MAX) * plotH;

  return (
    <figure className="mt-8">
      <div className="relative rounded-2xl border border-card-border bg-[color:var(--card)] bg-card px-[18px] pb-[14px] pt-5 shadow-card">
        <div className="mb-1 flex items-baseline justify-between">
          <span className="text-[12px] uppercase tracking-[0.16em] text-muted">
            Revenue &amp; profit
          </span>
          <span className="flex gap-[14px] text-[12px] text-muted-2">
            <span className="inline-flex items-center gap-[6px]">
              <span className="h-[10px] w-[10px] rounded-[3px] bg-[#059669]" />
              Revenue
            </span>
            <span className="inline-flex items-center gap-[6px]">
              <span className="h-[10px] w-[10px] rounded-[3px] bg-[#db2777]" />
              EBITDA
            </span>
          </span>
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          height={H}
          role="img"
          aria-label="Annual revenue and adjusted EBITDA, 2023 to 2025. Revenue: $20.7M in 2023, $19.0M in 2024, $17.8M in 2025. Adjusted EBITDA: $9.8M, $5.6M, $5.9M. Profitable every year."
          style={{ display: "block", overflow: "visible" }}
        >
          {/* gridlines */}
          {[0, 5, 10, 15, 20].map((g) => (
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
            const xr = cx - barW - gap / 2 + barW / 2;
            const xe = cx + gap / 2;
            const ryTop = y(d.revenue);
            const eyTop = y(d.ebitda);
            const base = y(0);
            return (
              <g key={d.year}>
                {/* revenue bar */}
                <rect
                  x={cx - barW - gap / 2}
                  y={ryTop}
                  width={barW}
                  height={base - ryTop}
                  rx={4}
                  fill="#059669"
                />
                <text
                  x={cx - gap / 2 - barW / 2}
                  y={ryTop - 6}
                  fontSize="11"
                  fontWeight="700"
                  fill="#047857"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  ${d.revenue.toFixed(1)}M
                </text>

                {/* ebitda bar */}
                <rect
                  x={xe}
                  y={eyTop}
                  width={barW}
                  height={base - eyTop}
                  rx={4}
                  fill="#db2777"
                />
                <text
                  x={xe + barW / 2}
                  y={eyTop - 6}
                  fontSize="11"
                  fontWeight="700"
                  fill="#be185d"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  ${d.ebitda.toFixed(1)}M
                </text>

                {/* year label */}
                <text
                  x={cx}
                  y={base + 20}
                  fontSize="12"
                  fill="var(--muted-2)"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  {d.year}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-2 text-[13px] text-muted">
        Revenue and adjusted EBITDA, 2023–2025 — profitable every year while the
        team shrank. Source: Antiwork investor financials.
      </figcaption>
    </figure>
  );
}
