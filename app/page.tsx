import type { Metadata } from "next";
import { Font } from "@/app/components/Font";

export const metadata: Metadata = {
  title: "Antiwork — We automated ourselves out of the work.",
  description:
    "Gumroad started in 2011, nearly died in 2015, and now runs support, fraud & risk, engineering, and finance through a single AI agent on a 6-person team. This is how.",
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
      <div style={{ display: "flex", alignItems: "center" }}>
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
        In 2015 it nearly died. The Series B fell through, and the team went
        from twenty-some people to a handful overnight. Most companies
        don&apos;t come back from that. Gumroad spent the next decade proving
        you don&apos;t need the headcount to win.
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
          Annual profit (EBITDA), 2012–2025. Dotted line is break-even. Roughly
          $420K of profit per person in 2025 across a team of 14.
        </figcaption>
      </figure>

      <p style={{ marginTop: 24 }}>
        Then 2026 hit an inflection — the agent took over the work, and the
        numbers bent up while the team kept shrinking:
      </p>

      <div
        style={{
          marginTop: 16,
          padding: "20px 24px",
          border: "1px solid #eee",
          borderRadius: 8,
        }}
      >
        <p style={{ margin: 0, fontWeight: 700 }}>Q1 2026</p>
        <p style={{ margin: "4px 0 0", color: "#444" }}>
          491 pull requests merged by the agent on the main codebase. Support
          handled at ~$117M in creator earnings per support person.
        </p>
        <p style={{ margin: "16px 0 0", fontWeight: 700 }}>Q2 2026 (so far)</p>
        <p style={{ margin: "4px 0 0", color: "#444" }}>
          747 pull requests merged. Support queue cut from ~600 to 31 — a 95%
          reduction. ~$3.8M of revenue per employee, 82× the 2014 figure.
        </p>
      </div>

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
        finance through a single agent on a 6-person team. A year ago that took
        a whole company.
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

      <p style={{ marginTop: 32 }}>
        Some of what it does, all from production:
      </p>

      <ul style={{ marginTop: 8, paddingLeft: 20 }}>
        <li>
          ~98.5% of support tickets auto-resolved, first reply under a minute
        </li>
        <li>
          ~$117M in creator earnings handled per support person (1.5 of them)
        </li>
        <li>
          ~99% of standard fraud/risk cases handled with no human in the loop
        </li>
        <li>idea → shipped in about half an hour, down from a ~99h peak</li>
        <li>82× revenue per employee since 2014</li>
      </ul>

      <figure style={{ margin: "32px 0 0" }}>
        <svg
          viewBox="0 0 420 96"
          width="100%"
          height="96"
          role="img"
          aria-label="Pull requests merged per engineer per month, indexed to 2025 = 100: 2023 was 50, 2024 was 54, 2025 is 100. Output per engineer doubled."
          style={{ display: "block", overflow: "visible" }}
        >
          <text x="0" y="18" fontSize="12" fill="#888" fontFamily="monospace">
            2023
          </text>
          <rect x="48" y="8" width="160" height="14" fill="#ccc" />
          <text x="214" y="18" fontSize="12" fill="#888" fontFamily="monospace">
            50
          </text>

          <text x="0" y="50" fontSize="12" fill="#888" fontFamily="monospace">
            2024
          </text>
          <rect x="48" y="40" width="171.5" height="14" fill="#ccc" />
          <text x="226" y="50" fontSize="12" fill="#888" fontFamily="monospace">
            54
          </text>

          <text x="0" y="82" fontSize="12" fill="#111" fontFamily="monospace">
            2025
          </text>
          <rect x="48" y="72" width="320" height="14" fill="#ec4899" />
          <text x="374" y="82" fontSize="12" fill="#111" fontFamily="monospace">
            100
          </text>
        </svg>
        <figcaption style={{ marginTop: 6, color: "#888", fontSize: 13 }}>
          Pull requests merged per engineer, indexed to 2025. Same people, twice
          the output — the agent does the rest.
        </figcaption>
      </figure>

      <figure style={{ margin: "32px 0 0" }}>
        <svg
          viewBox="0 0 420 72"
          width="100%"
          height="72"
          role="img"
          aria-label="Pull requests merged on the main codebase by quarter: Q1 2026 was 491, Q2 2026 is 747 and still running."
          style={{ display: "block", overflow: "visible" }}
        >
          <text x="0" y="18" fontSize="12" fill="#888" fontFamily="monospace">
            Q1 &apos;26
          </text>
          <rect x="78" y="8" width="185" height="14" fill="#ccc" />
          <text x="269" y="18" fontSize="12" fill="#888" fontFamily="monospace">
            491
          </text>

          <text x="0" y="50" fontSize="12" fill="#111" fontFamily="monospace">
            Q2 &apos;26
          </text>
          <rect x="78" y="40" width="282" height="14" fill="#ec4899" />
          <text x="366" y="50" fontSize="12" fill="#111" fontFamily="monospace">
            747
          </text>
        </svg>
        <figcaption style={{ marginTop: 6, color: "#888", fontSize: 13 }}>
          And in raw terms — pull requests merged on the main codebase, by
          quarter. Q2 isn&apos;t over yet, and it&apos;s already lapped Q1.
        </figcaption>
      </figure>

      <p style={{ marginTop: 24 }}>
        The software that does it is free and open-source — OpenClaw, Hermes,
        the entire skill library. Download it, run it, owe us nothing. We want
        you to.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: "#888" }}>Read more:</p>
      <ul style={{ marginTop: 8, paddingLeft: 20, fontSize: 14 }}>
        <li>
          <a
            href="https://sahillavingia.com/reflecting"
            style={{ color: "#111" }}
          >
            Reflecting on My Failure to Build a Billion-Dollar Company
          </a>{" "}
          <span style={{ color: "#888" }}>— the 2015 near-death, in full.</span>
        </li>
        <li style={{ marginTop: 6 }}>
          <a href="https://sahillavingia.com/work" style={{ color: "#111" }}>
            No Meetings, No Deadlines, No Full-Time Employees
          </a>{" "}
          <span style={{ color: "#888" }}>
            — how the small team actually operates.
          </span>
        </li>
      </ul>

      <p style={{ marginTop: 48, fontSize: 20, color: "#111" }}>
        Now we&apos;re just having fun.
      </p>

      <p style={{ marginTop: 16, color: "#888", fontSize: 14 }}>
        We automated ourselves out of the work. Built on OpenClaw + Hermes,
        open-source.
      </p>
    </main>
  );
}
