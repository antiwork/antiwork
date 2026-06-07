import type { Metadata } from "next";
import { Font } from "@/app/components/Font";

export const metadata: Metadata = {
  title: "Antiwork — We automated ourselves out of the work.",
  description:
    "Since 2023, Gumroad went from a few dozen people to five — running support, fraud & risk, engineering, and finance through a single AI agent. This is how.",
};

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "64px 24px",
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        fontSize: 16,
        lineHeight: 1.7,
        color: "#111",
      }}
    >
      <div id="top" style={{ display: "flex", alignItems: "center" }}>
        <Font text="ANTIWORK" color="#111" size={30} />
      </div>

      <p style={{ marginTop: 32, fontSize: 20, color: "#111" }}>
        We automated ourselves out of the work.
      </p>

      <p style={{ marginTop: 24 }}>
        Coming out of COVID, Gumroad was a profitable business with a
        normal-size team — a few dozen people across engineering, support, and
        operations, doing the work by hand the way every company does.
      </p>

      <p style={{ marginTop: 24 }}>
        Over the next three years the team got smaller, the work got automated,
        and the numbers kept climbing. This is that stretch — 2023 to today.
      </p>

      <figure style={{ margin: "32px 0 0" }}>
        <svg
          viewBox="0 0 520 98"
          width="100%"
          height="98"
          role="img"
          aria-label="Company headcount: 25 in 2023, down to 14 in 2024, and just 5 humans today."
          style={{ display: "block", overflow: "visible" }}
        >
          <text
            x="120"
            y="22"
            fontSize="11"
            fill="#888"
            fontFamily="monospace"
            textAnchor="end"
          >
            2023
          </text>
          <rect x="130" y="10" width="380.0" height="16" fill="#ccc" />
          <text
            x="516.0"
            y="22"
            fontSize="11"
            fill="#888"
            fontFamily="monospace"
            textAnchor="end"
          >
            25
          </text>

          <text
            x="120"
            y="56"
            fontSize="11"
            fill="#888"
            fontFamily="monospace"
            textAnchor="end"
          >
            2024
          </text>
          <rect x="130" y="44" width="212.8" height="16" fill="#ccc" />
          <text
            x="348.8"
            y="56"
            fontSize="11"
            fill="#888"
            fontFamily="monospace"
          >
            14
          </text>

          <text
            x="120"
            y="90"
            fontSize="11"
            fill="#111"
            fontFamily="monospace"
            textAnchor="end"
          >
            Today
          </text>
          <rect x="130" y="78" width="76.0" height="16" fill="#ec4899" />
          <text
            x="212.0"
            y="90"
            fontSize="11"
            fill="#111"
            fontFamily="monospace"
          >
            5
          </text>
        </svg>
        <figcaption style={{ marginTop: 6, color: "#888", fontSize: 13 }}>
          Company headcount — 25 in 2023, to 14, to 5 humans today. The work
          didn&apos;t leave. It moved to the agent.
        </figcaption>
      </figure>

      <p style={{ marginTop: 32, fontSize: 20, color: "#111" }}>
        Today one AI agent runs the company.
      </p>

      <p style={{ marginTop: 24 }}>
        We call it Gumclaw. In 2026 it took over the work — and the numbers bent
        up while the team kept shrinking. A lean team and a tireless agent turn
        out to be the best thing that ever happened to the customer: faster
        answers, faster fixes, faster everything. The ceiling on how good the
        experience can get keeps rising.
      </p>

      <p style={{ marginTop: 24, color: "#888" }}>
        Here is what it runs today — engineering, support, fraud &amp; risk, and
        finance — with more on the way.
      </p>

      <p
        style={{
          marginTop: 40,
          fontSize: 13,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#888",
        }}
      >
        Engineering
      </p>

      <figure style={{ margin: "20px 0 0" }}>
        <svg
          viewBox="0 0 520 150"
          width="100%"
          height="150"
          role="img"
          aria-label="Pull requests merged per engineer, by quarter, 2023 to 2026. Held in the low-to-mid 30s and 40s through 2023, 2024 and 2025, then jumped to 119 in Q2 2026 — the highest in the company's history, on a team of six."
          style={{ display: "block", overflow: "visible" }}
        >
          <rect x="0.0" y="78.3" width="33.4" height="49.7" fill="#ccc" />
          <rect x="37.4" y="83.7" width="33.4" height="44.3" fill="#ccc" />
          <rect x="74.9" y="98.0" width="33.4" height="30.0" fill="#ccc" />
          <rect x="112.3" y="98.2" width="33.4" height="29.8" fill="#ccc" />
          <rect x="149.7" y="94.3" width="33.4" height="33.7" fill="#ccc" />
          <rect x="187.1" y="94.9" width="33.4" height="33.1" fill="#ccc" />
          <rect x="224.6" y="88.8" width="33.4" height="39.2" fill="#ccc" />
          <rect x="262.0" y="104.9" width="33.4" height="23.1" fill="#ccc" />
          <rect x="299.4" y="99.6" width="33.4" height="28.4" fill="#ccc" />
          <rect x="336.9" y="95.2" width="33.4" height="32.8" fill="#ccc" />
          <rect x="374.3" y="90.4" width="33.4" height="37.6" fill="#ccc" />
          <rect x="411.7" y="93.0" width="33.4" height="35.0" fill="#ccc" />
          <rect x="449.1" y="83.3" width="33.4" height="44.7" fill="#ccc" />
          <rect x="486.6" y="10.8" width="33.4" height="117.2" fill="#ec4899" />
          <text
            x="503.3"
            y="7"
            fontSize="9"
            fill="#ec4899"
            fontFamily="monospace"
            textAnchor="middle"
          >
            119
          </text>
          <text
            x="16.7"
            y="144"
            fontSize="8"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            2023
          </text>
          <text
            x="166.4"
            y="144"
            fontSize="8"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            2024
          </text>
          <text
            x="316.1"
            y="144"
            fontSize="8"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            2025
          </text>
          <text
            x="465.9"
            y="144"
            fontSize="8"
            fill="#ec4899"
            fontFamily="monospace"
            textAnchor="middle"
          >
            2026
          </text>
        </svg>
        <figcaption style={{ marginTop: 6, color: "#888", fontSize: 13 }}>
          Pull requests merged per engineer, by quarter. Steady in the 30s and
          40s through 2023–2025, then 119 in Q2 2026 — the most in the
          company&apos;s history, on a team of six.
        </figcaption>
      </figure>

      <p style={{ marginTop: 24 }}>
        And the code ships faster than it ever has. Through the 2010s, the time
        from a pull request opening to merging crept up as the codebase and team
        grew — peaking near 18 hours in 2023. In 2026 the agent took over review
        and merge, and it collapsed to about half an hour.
      </p>

      <figure style={{ margin: "32px 0 0" }}>
        <svg
          viewBox="0 0 520 64"
          width="100%"
          height="64"
          preserveAspectRatio="none"
          role="img"
          aria-label="Median time from pull request opened to merged, 2023 to 2026: around 18 hours in 2023 and 16 in 2024, collapsing to about an hour in 2025 and 32 minutes in 2026."
          style={{ display: "block", overflow: "visible" }}
        >
          <path
            d="M 4.0 4.3 L 174.7 10.8 L 345.3 56.3 L 516.0 58.4"
            fill="none"
            stroke="#111"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="4.0" cy="4.3" r="2.5" fill="#ec4899" />
          <circle cx="516.0" cy="58.4" r="2.5" fill="#111" />
        </svg>
        <figcaption
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 6,
            color: "#888",
            fontSize: 13,
          }}
        >
          <span style={{ color: "#ec4899" }}>17.9 hrs · 2023</span>
          <span style={{ color: "#111" }}>~32 min · 2026</span>
        </figcaption>
        <figcaption style={{ marginTop: 4, color: "#888", fontSize: 13 }}>
          Median time from a pull request opening to merging, 2023–2026. From
          most of a day to half an hour — roughly a 34× speed-up.
        </figcaption>
      </figure>

      <p
        style={{
          marginTop: 56,
          fontSize: 13,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#888",
        }}
      >
        Customer support
      </p>

      <section
        style={{
          margin: "20px 0 0",
          padding: "44px 28px",
          border: "1px solid #eee",
          borderRadius: 14,
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#888",
          }}
        >
          Support resolution time
        </p>
        <p
          style={{
            margin: "14px 0 0",
            fontSize: "clamp(72px, 17vw, 120px)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "#111",
          }}
        >
          489×
        </p>
        <p style={{ margin: "6px 0 0", fontSize: 22, color: "#111" }}>faster</p>

        <div
          style={{ margin: "36px auto 0", maxWidth: 420, textAlign: "left" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 13,
              color: "#888",
            }}
          >
            <span>Before</span>
            <span>17.3 days</span>
          </div>
          <div
            style={{
              marginTop: 6,
              height: 10,
              background: "#eee",
              borderRadius: 999,
            }}
          >
            <div
              style={{
                width: "100%",
                height: 10,
                background: "#ccc",
                borderRadius: 999,
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 13,
              color: "#111",
              marginTop: 20,
            }}
          >
            <span>After</span>
            <span>51 minutes</span>
          </div>
          <div
            style={{
              marginTop: 6,
              height: 10,
              background: "#eee",
              borderRadius: 999,
            }}
          >
            <div
              style={{
                width: "0.2%",
                minWidth: 4,
                height: 10,
                background: "#ec4899",
                borderRadius: 999,
              }}
            />
          </div>
        </div>

        <p style={{ margin: "30px 0 0", fontSize: 13, color: "#888" }}>
          Median resolution time for human-handled tickets. Internal support
          dashboard, Q1 → Q2 2026.
        </p>
      </section>

      <p
        style={{
          marginTop: 56,
          fontSize: 13,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#888",
        }}
      >
        Fraud &amp; risk
      </p>

      <section
        style={{
          margin: "20px 0 0",
          padding: "44px 28px",
          border: "1px solid #eee",
          borderRadius: 14,
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "clamp(52px, 12vw, 76px)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#111",
          }}
        >
          ~99%
        </p>
        <p style={{ margin: "6px 0 0", fontSize: 18, color: "#111" }}>
          handled with no human
        </p>
        <p style={{ margin: "16px 0 0", fontSize: 13, color: "#888" }}>
          Standard fraud and risk cases reviewed and actioned autonomously by
          the agent.
        </p>
      </section>

      <p
        style={{
          marginTop: 56,
          fontSize: 13,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#888",
        }}
      >
        Finance
      </p>

      <section
        style={{
          margin: "20px 0 0",
          padding: "24px",
          border: "1px solid #eee",
          borderRadius: 14,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#888",
            textAlign: "center",
          }}
        >
          The monthly financial close
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            marginTop: 18,
          }}
        >
          <div
            style={{
              flex: "1 1 200px",
              padding: "16px 18px",
              border: "1px solid #eee",
              borderRadius: 10,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 12,
                fontWeight: 700,
                color: "#888",
              }}
            >
              Then
            </p>
            <p style={{ margin: "8px 0 0", color: "#444" }}>
              Closed by hand, once a month. Pull the numbers, reconcile four
              entities, book every journal entry manually — the P&amp;L only
              true at month-end.
            </p>
          </div>
          <div
            style={{
              flex: "1 1 200px",
              padding: "16px 18px",
              border: "1px solid #ec4899",
              borderRadius: 10,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 12,
                fontWeight: 700,
                color: "#ec4899",
              }}
            >
              Now
            </p>
            <p style={{ margin: "8px 0 0", color: "#111" }}>
              The agent runs it every week — pulls Metabase + Stripe across four
              entities, books the entries into QuickBooks itself, in minutes.
              The books are always current.
            </p>
          </div>
        </div>
      </section>

      <p style={{ marginTop: 40, color: "#888" }}>
        More is coming — tax payments, hiring and firing, and the rest of the
        work that still touches a human today.
      </p>

      <p style={{ marginTop: 24 }}>
        The software that does it is free and open-source — the entire skill
        library. Download it, run it, owe us nothing. We want you to.
      </p>

      <p style={{ marginTop: 48, fontSize: 20, color: "#111" }}>
        We automated ourselves out of the work. Now we&apos;re just having fun.
      </p>

      <a
        href="#"
        aria-label="Back to top"
        style={{
          display: "inline-flex",
          alignItems: "center",
          marginTop: 56,
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <Font text="A" color="#ccc" size={30} />
      </a>
    </main>
  );
}
