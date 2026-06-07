import type { Metadata } from "next";
import { Font } from "@/app/components/Font";
import { LinkCard } from "@/app/components/LinkCard";

export const metadata: Metadata = {
  title: "Antiwork — We automated ourselves out of the work.",
  description:
    "Gumroad started in 2011, nearly died in 2015, and now runs support, fraud & risk, engineering, and finance through a single AI agent on a 5-person team. This is how.",
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
        Gumroad started in 2011 as a weekend project — a single link that let
        anyone sell anything. By 2014 it was doing about $915K a year and
        burning cash to get there.
      </p>

      <p style={{ marginTop: 24 }}>
        In 2015 it{" "}
        <LinkCard
          href="https://sahillavingia.com/reflecting"
          title="Reflecting on My Failure to Build a Billion-Dollar Company"
          description="In 2011, I left my job as the second employee at Pinterest — before I vested any of my stock — to work on what I thought would be my life's work…"
          source="sahillavingia.com"
          image="/cards/reflecting.jpg"
        >
          nearly died
        </LinkCard>
        . The Series B fell through, and the team went from twenty-some people
        to a handful overnight. Most companies don&apos;t come back from that.
        Gumroad spent the next decade proving you don&apos;t need the headcount
        to win.
      </p>

      <p style={{ marginTop: 24 }}>
        Revenue went from $915K in 2014 to $9.2M in 2020 to $20.7M in 2023 — the
        year it turned a real profit (~$9.8M). It held around $18M in 2025. Same
        small team. Billions in creator earnings moved through it.
      </p>

      <figure style={{ margin: "32px 0 0" }}>
        <svg
          viewBox="0 0 520 64"
          width="100%"
          height="64"
          preserveAspectRatio="none"
          role="img"
          aria-label="Annual profit (EBITDA), 2012 to 2025: deep losses through 2015, near break-even 2016 to 2022, then sharply profitable from 2023 — peak ~$9.8M in 2023, ~$5.9M in 2025."
          style={{ display: "block", overflow: "visible" }}
        >
          <line
            x1="4"
            y1="44.6"
            x2="516"
            y2="44.6"
            stroke="#ddd"
            strokeWidth={1}
            strokeDasharray="3 3"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 4.0 48.1 L 43.4 52.4 L 82.8 58.5 L 122.2 60.0 L 161.5 45.3 L 200.9 45.0 L 240.3 44.6 L 279.7 45.5 L 319.1 44.7 L 358.5 51.7 L 397.8 50.0 L 437.2 4.0 L 476.6 21.6 L 516.0 20.4"
            fill="none"
            stroke="#111"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="122.2" cy="60.0" r="2.5" fill="#888" />
          <circle cx="437.2" cy="4.0" r="2.5" fill="#ec4899" />
          <circle cx="516.0" cy="20.4" r="2.5" fill="#111" />
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
          <span>−$3.7M · 2015</span>
          <span style={{ color: "#111" }}>+$5.9M · 2025</span>
        </figcaption>
        <figcaption style={{ marginTop: 4, color: "#888", fontSize: 13 }}>
          Annual profit (EBITDA), 2012–2025. Dotted line is break-even. That
          $5.9M in 2025 — across today&apos;s team of five — is over $1M of
          profit per person.
        </figcaption>
      </figure>

      <p style={{ marginTop: 24 }}>
        Then 2026 hit an inflection — the agent took over the work, and the
        numbers bent up while the team kept shrinking.
      </p>

      <figure style={{ margin: "32px 0 0" }}>
        <svg
          viewBox="0 0 520 64"
          width="100%"
          height="64"
          preserveAspectRatio="none"
          role="img"
          aria-label="Engineering headcount, February 2023 to January 2026: peak of 27, down to 8."
          style={{ display: "block", overflow: "visible" }}
        >
          <path
            d="M 4.0 28.2 L 18.6 33.3 L 33.3 38.3 L 47.9 20.6 L 62.5 25.7 L 77.1 30.7 L 91.8 33.3 L 106.4 38.3 L 121.0 40.8 L 135.7 25.7 L 150.3 28.2 L 164.9 30.7 L 179.5 33.3 L 194.2 23.2 L 208.8 30.7 L 223.4 20.6 L 238.1 20.6 L 252.7 23.2 L 267.3 8.0 L 281.9 18.1 L 296.6 25.7 L 311.2 33.3 L 325.8 28.2 L 340.5 45.9 L 355.1 35.8 L 369.7 33.3 L 384.3 33.3 L 399.0 40.8 L 413.6 40.8 L 428.2 40.8 L 442.9 38.3 L 457.5 45.9 L 472.1 48.4 L 486.7 45.9 L 501.4 53.5 L 516.0 56.0"
            fill="none"
            stroke="#111"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="267.3" cy="8.0" r="2.5" fill="#ec4899" />
          <circle cx="516.0" cy="56.0" r="2.5" fill="#111" />
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
          <span>27 engineers · Aug 2024</span>
          <span style={{ color: "#111" }}>8 · Jan 2026</span>
        </figcaption>
        <figcaption style={{ marginTop: 4, color: "#888", fontSize: 13 }}>
          Engineering headcount. The work didn&apos;t shrink — it moved to the
          agent.
        </figcaption>
      </figure>

      <p style={{ marginTop: 32, fontSize: 20, color: "#111" }}>
        Today one AI agent runs the company.
      </p>

      <p style={{ marginTop: 24 }}>
        We call it Gumclaw. It runs support, fraud &amp; risk, engineering, and
        finance.
      </p>

      <section
        style={{
          margin: "40px 0 0",
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

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          marginTop: 24,
        }}
      >
        <section
          style={{
            flex: "1 1 220px",
            padding: "28px 24px",
            border: "1px solid #eee",
            borderRadius: 14,
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#888",
            }}
          >
            Fraud &amp; risk
          </p>
          <p
            style={{
              margin: "10px 0 0",
              fontSize: "clamp(52px, 12vw, 76px)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#111",
            }}
          >
            ~99%
          </p>
          <p style={{ margin: "6px 0 0", fontSize: 15, color: "#111" }}>
            handled with no human
          </p>
          <p style={{ margin: "18px 0 0", fontSize: 12.5, color: "#888" }}>
            Standard fraud/risk cases reviewed and actioned autonomously by the
            agent.
          </p>
        </section>

        <section
          style={{
            flex: "1 1 220px",
            padding: "28px 24px",
            border: "1px solid #eee",
            borderRadius: 14,
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#888",
            }}
          >
            Idea → shipped
          </p>
          <p
            style={{
              margin: "10px 0 0",
              fontSize: "clamp(52px, 12vw, 76px)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#111",
            }}
          >
            26<span style={{ fontSize: "0.42em", fontWeight: 400 }}> min</span>
          </p>
          <p style={{ margin: "6px 0 0", fontSize: 15, color: "#111" }}>
            median, open to merged
          </p>
          <p style={{ margin: "18px 0 0", fontSize: 12.5, color: "#888" }}>
            Median pull-request open-to-merge time on the main codebase, Q2
            2026.
          </p>
        </section>
      </div>

      <section
        style={{
          marginTop: 16,
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

      <figure style={{ margin: "32px 0 0" }}>
        <svg
          viewBox="0 0 700 150"
          width="100%"
          height="150"
          role="img"
          aria-label="Pull requests merged per engineer, by quarter, 2012 to 2026. Hovered around 25 to 80 for over a decade, then spikes to 119 in Q2 2026 — the highest in the company's history, on a team of six."
          style={{ display: "block", overflow: "visible" }}
        >
          <rect x="0.0" y="127.5" width="10.1" height="0.5" fill="#ccc" />
          <rect x="12.1" y="117.7" width="10.1" height="10.3" fill="#ccc" />
          <rect x="24.2" y="108.8" width="10.1" height="19.2" fill="#ccc" />
          <rect x="36.3" y="101.5" width="10.1" height="26.6" fill="#ccc" />
          <rect x="48.4" y="97.0" width="10.1" height="31.0" fill="#ccc" />
          <rect x="60.5" y="92.1" width="10.1" height="35.9" fill="#ccc" />
          <rect x="72.6" y="80.0" width="10.1" height="48.0" fill="#ccc" />
          <rect x="84.7" y="98.9" width="10.1" height="29.1" fill="#ccc" />
          <rect x="96.8" y="103.1" width="10.1" height="24.9" fill="#ccc" />
          <rect x="108.9" y="102.7" width="10.1" height="25.3" fill="#ccc" />
          <rect x="121.0" y="101.6" width="10.1" height="26.4" fill="#ccc" />
          <rect x="133.1" y="98.7" width="10.1" height="29.3" fill="#ccc" />
          <rect x="145.2" y="67.1" width="10.1" height="60.9" fill="#ccc" />
          <rect x="157.3" y="59.3" width="10.1" height="68.7" fill="#ccc" />
          <rect x="169.4" y="46.5" width="10.1" height="81.5" fill="#ccc" />
          <rect x="181.6" y="49.2" width="10.1" height="78.8" fill="#ccc" />
          <rect x="193.7" y="48.3" width="10.1" height="79.7" fill="#ccc" />
          <rect x="205.8" y="125.3" width="10.1" height="2.7" fill="#ccc" />
          <rect x="217.9" y="125.7" width="10.1" height="2.3" fill="#ccc" />
          <rect x="230.0" y="126.0" width="10.1" height="2.0" fill="#ccc" />
          <rect x="242.1" y="111.8" width="10.1" height="16.2" fill="#ccc" />
          <rect x="254.2" y="110.6" width="10.1" height="17.4" fill="#ccc" />
          <rect x="266.3" y="99.5" width="10.1" height="28.5" fill="#ccc" />
          <rect x="278.4" y="101.2" width="10.1" height="26.8" fill="#ccc" />
          <rect x="290.5" y="99.3" width="10.1" height="28.7" fill="#ccc" />
          <rect x="302.6" y="106.2" width="10.1" height="21.8" fill="#ccc" />
          <rect x="314.7" y="87.5" width="10.1" height="40.5" fill="#ccc" />
          <rect x="326.8" y="85.9" width="10.1" height="42.1" fill="#ccc" />
          <rect x="338.9" y="98.3" width="10.1" height="29.7" fill="#ccc" />
          <rect x="351.0" y="90.0" width="10.1" height="38.0" fill="#ccc" />
          <rect x="363.1" y="126.5" width="10.1" height="1.5" fill="#eee" />
          <rect x="375.2" y="126.5" width="10.1" height="1.5" fill="#eee" />
          <rect x="387.3" y="88.4" width="10.1" height="39.6" fill="#ccc" />
          <rect x="399.4" y="55.5" width="10.1" height="72.5" fill="#ccc" />
          <rect x="411.5" y="63.1" width="10.1" height="64.9" fill="#ccc" />
          <rect x="423.6" y="69.2" width="10.1" height="58.8" fill="#ccc" />
          <rect x="435.7" y="85.1" width="10.1" height="42.9" fill="#ccc" />
          <rect x="447.8" y="83.8" width="10.1" height="44.2" fill="#ccc" />
          <rect x="459.9" y="90.4" width="10.1" height="37.6" fill="#ccc" />
          <rect x="472.0" y="89.4" width="10.1" height="38.6" fill="#ccc" />
          <rect x="484.1" y="93.0" width="10.1" height="35.0" fill="#ccc" />
          <rect x="496.2" y="94.8" width="10.1" height="33.2" fill="#ccc" />
          <rect x="508.3" y="100.3" width="10.1" height="27.7" fill="#ccc" />
          <rect x="520.4" y="82.2" width="10.1" height="45.8" fill="#ccc" />
          <rect x="532.6" y="78.3" width="10.1" height="49.7" fill="#ccc" />
          <rect x="544.7" y="83.7" width="10.1" height="44.3" fill="#ccc" />
          <rect x="556.8" y="98.0" width="10.1" height="30.0" fill="#ccc" />
          <rect x="568.9" y="98.2" width="10.1" height="29.8" fill="#ccc" />
          <rect x="581.0" y="94.3" width="10.1" height="33.7" fill="#ccc" />
          <rect x="593.1" y="94.9" width="10.1" height="33.1" fill="#ccc" />
          <rect x="605.2" y="88.8" width="10.1" height="39.2" fill="#ccc" />
          <rect x="617.3" y="104.9" width="10.1" height="23.1" fill="#ccc" />
          <rect x="629.4" y="99.6" width="10.1" height="28.4" fill="#ccc" />
          <rect x="641.5" y="95.2" width="10.1" height="32.8" fill="#ccc" />
          <rect x="653.6" y="90.4" width="10.1" height="37.6" fill="#ccc" />
          <rect x="665.7" y="93.0" width="10.1" height="35.0" fill="#ccc" />
          <rect x="677.8" y="83.3" width="10.1" height="44.7" fill="#ccc" />
          <rect x="689.9" y="10.8" width="10.1" height="117.2" fill="#ec4899" />
          <text
            x="694.9"
            y="7"
            fontSize="9"
            fill="#ec4899"
            fontFamily="monospace"
            textAnchor="end"
          >
            119
          </text>
          <text
            x="5.1"
            y="142"
            fontSize="7"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            12
          </text>
          <text
            x="53.5"
            y="142"
            fontSize="7"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            13
          </text>
          <text
            x="101.9"
            y="142"
            fontSize="7"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            14
          </text>
          <text
            x="150.3"
            y="142"
            fontSize="7"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            15
          </text>
          <text
            x="198.7"
            y="142"
            fontSize="7"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            16
          </text>
          <text
            x="247.1"
            y="142"
            fontSize="7"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            17
          </text>
          <text
            x="295.5"
            y="142"
            fontSize="7"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            18
          </text>
          <text
            x="343.9"
            y="142"
            fontSize="7"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            19
          </text>
          <text
            x="392.4"
            y="142"
            fontSize="7"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            20
          </text>
          <text
            x="440.8"
            y="142"
            fontSize="7"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            21
          </text>
          <text
            x="489.2"
            y="142"
            fontSize="7"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            22
          </text>
          <text
            x="537.6"
            y="142"
            fontSize="7"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            23
          </text>
          <text
            x="586.0"
            y="142"
            fontSize="7"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            24
          </text>
          <text
            x="634.4"
            y="142"
            fontSize="7"
            fill="#bbb"
            fontFamily="monospace"
            textAnchor="middle"
          >
            25
          </text>
          <text
            x="682.8"
            y="142"
            fontSize="7"
            fill="#ec4899"
            fontFamily="monospace"
            textAnchor="middle"
          >
            26
          </text>
        </svg>
        <figcaption style={{ marginTop: 6, color: "#888", fontSize: 13 }}>
          Pull requests merged per engineer, every quarter since 2012. For
          fourteen years it held between roughly 25 and 80. In Q2 2026 — on a
          team of six — it hit 119, the highest in the company&apos;s history.
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
          aria-label="Median time from pull request opened to merged, 2012 to 2026: around 1 to 4 hours through the 2010s, climbing to a peak of about 18 hours in 2023, then collapsing to about 32 minutes in 2026."
          style={{ display: "block", overflow: "visible" }}
        >
          <path
            d="M 4.0 57.8 L 40.6 49.5 L 77.1 58.5 L 113.7 58.2 L 150.3 58.8 L 186.9 54.9 L 223.4 40.7 L 260.0 44.6 L 296.6 56.5 L 333.1 50.8 L 369.7 18.2 L 406.3 4.0 L 442.9 10.8 L 479.4 57.8 L 516.0 60.0"
            fill="none"
            stroke="#111"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="406.3" cy="4.0" r="2.5" fill="#ec4899" />
          <circle cx="516.0" cy="60.0" r="2.5" fill="#111" />
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
          Median time from a pull request opening to merging, 2012–2026. Roughly
          a 34× speed-up from the 2023 peak.
        </figcaption>
      </figure>

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
