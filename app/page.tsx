import type { Metadata } from "next";
import { Font } from "@/app/components/Font";
import { BookCTA } from "@/app/components/BookCTA";
import { StickyCTA } from "@/app/components/StickyCTA";
import { ProductLink } from "@/app/components/ProductLink";
import { RevenueChart } from "@/app/components/RevenueChart";
import { AskGumclaw } from "@/app/components/AskGumclaw";
import { Faq } from "@/app/components/Faq";

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
        color: "var(--fg)",
      }}
    >
      <div id="top" style={{ display: "flex", alignItems: "center" }}>
        <a
          href="https://gumclaw.gumroad.com/l/rbexyn"
          title="Get the Antiwork font"
          style={{ display: "inline-flex", textDecoration: "none" }}
        >
          <Font text="ANTIWORK" color="var(--fg)" size={30} />
        </a>
      </div>
      <p style={{ marginTop: 8, fontSize: 13, color: "var(--muted)" }}>
        <a
          href="https://gumclaw.gumroad.com/l/rbexyn"
          style={{
            color: "var(--muted)",
            textDecoration: "underline",
            textUnderlineOffset: "2px",
          }}
        >
          Get the font →
        </a>
      </p>

      <p style={{ marginTop: 32, fontSize: 20, color: "var(--fg)" }}>
        We automated ourselves out of the work.
      </p>

      <p style={{ marginTop: 24 }}>
        Coming out of COVID, <ProductLink brand="gumroad">Gumroad</ProductLink>{" "}
        was a profitable business with a normal-size team — a few dozen people
        across engineering, support, and operations, doing the work by hand the
        way every company does.
      </p>

      <p style={{ marginTop: 24 }}>
        Over the next three years the team got smaller, the work got automated,
        and the numbers kept climbing.
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
            fill="var(--muted)"
            fontFamily="monospace"
            textAnchor="end"
          >
            2023
          </text>
          <rect x="130" y="10" width="380.0" height="16" fill="var(--faint)" />
          <text
            x="516.0"
            y="22"
            fontSize="11"
            fill="var(--muted)"
            fontFamily="monospace"
            textAnchor="end"
          >
            25
          </text>

          <text
            x="120"
            y="56"
            fontSize="11"
            fill="var(--muted)"
            fontFamily="monospace"
            textAnchor="end"
          >
            2024
          </text>
          <rect x="130" y="44" width="212.8" height="16" fill="var(--faint)" />
          <text
            x="348.8"
            y="56"
            fontSize="11"
            fill="var(--muted)"
            fontFamily="monospace"
          >
            14
          </text>

          <text
            x="120"
            y="90"
            fontSize="11"
            fill="var(--fg)"
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
            fill="var(--fg)"
            fontFamily="monospace"
          >
            5
          </text>
        </svg>
        <figcaption
          style={{ marginTop: 6, color: "var(--muted)", fontSize: 13 }}
        >
          Company headcount — 25 in 2023, to 14, to 5 humans today. The work
          didn&apos;t leave. It moved to the agent.
        </figcaption>
      </figure>

      <RevenueChart />

      <p style={{ marginTop: 32, fontSize: 20, color: "var(--fg)" }}>
        Today one AI agent runs the company.
      </p>

      <p style={{ marginTop: 24 }}>We call it Gumclaw.</p>

      <AskGumclaw />

      <p style={{ marginTop: 24 }}>
        Getting here meant building our own tools. Two of them grew into real
        products: <ProductLink brand="helper">Helper</ProductLink>, which runs
        customer support, and <ProductLink brand="flexile">Flexile</ProductLink>
        , which runs our cap table, dividends, and share buybacks — everything
        our investors touch. We built them to scale ourselves down — and
        we&apos;re our own first customer. You can use them too.
      </p>

      <p style={{ marginTop: 24, color: "var(--muted)" }}>
        Here is what it runs today — with more on the way.
      </p>

      <nav
        style={{
          marginTop: 16,
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        {[
          ["Engineering", "engineering"],
          ["Support", "support"],
          ["Fraud & risk", "fraud"],
          ["Finance", "finance"],
          ["Investor relations", "investors"],
        ].map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              fontSize: 13,
              color: "var(--fg)",
              textDecoration: "none",
              padding: "6px 12px",
              border: "1px solid var(--pill-border)",
              borderRadius: 999,
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      <p
        id="engineering"
        style={{
          marginTop: 40,
          scrollMarginTop: 24,
          fontSize: 13,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--muted)",
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
          <rect
            x="0.0"
            y="78.3"
            width="33.4"
            height="49.7"
            fill="var(--faint)"
          />
          <rect
            x="37.4"
            y="83.7"
            width="33.4"
            height="44.3"
            fill="var(--faint)"
          />
          <rect
            x="74.9"
            y="98.0"
            width="33.4"
            height="30.0"
            fill="var(--faint)"
          />
          <rect
            x="112.3"
            y="98.2"
            width="33.4"
            height="29.8"
            fill="var(--faint)"
          />
          <rect
            x="149.7"
            y="94.3"
            width="33.4"
            height="33.7"
            fill="var(--faint)"
          />
          <rect
            x="187.1"
            y="94.9"
            width="33.4"
            height="33.1"
            fill="var(--faint)"
          />
          <rect
            x="224.6"
            y="88.8"
            width="33.4"
            height="39.2"
            fill="var(--faint)"
          />
          <rect
            x="262.0"
            y="104.9"
            width="33.4"
            height="23.1"
            fill="var(--faint)"
          />
          <rect
            x="299.4"
            y="99.6"
            width="33.4"
            height="28.4"
            fill="var(--faint)"
          />
          <rect
            x="336.9"
            y="95.2"
            width="33.4"
            height="32.8"
            fill="var(--faint)"
          />
          <rect
            x="374.3"
            y="90.4"
            width="33.4"
            height="37.6"
            fill="var(--faint)"
          />
          <rect
            x="411.7"
            y="93.0"
            width="33.4"
            height="35.0"
            fill="var(--faint)"
          />
          <rect
            x="449.1"
            y="83.3"
            width="33.4"
            height="44.7"
            fill="var(--faint)"
          />
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
            fill="var(--faint-2)"
            fontFamily="monospace"
            textAnchor="middle"
          >
            2023
          </text>
          <text
            x="166.4"
            y="144"
            fontSize="8"
            fill="var(--faint-2)"
            fontFamily="monospace"
            textAnchor="middle"
          >
            2024
          </text>
          <text
            x="316.1"
            y="144"
            fontSize="8"
            fill="var(--faint-2)"
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
        <figcaption
          style={{ marginTop: 6, color: "var(--muted)", fontSize: 13 }}
        >
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
            stroke="var(--fg)"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="4.0" cy="4.3" r="2.5" fill="#ec4899" />
          <circle cx="516.0" cy="58.4" r="2.5" fill="var(--fg)" />
        </svg>
        <figcaption
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 6,
            color: "var(--muted)",
            fontSize: 13,
          }}
        >
          <span style={{ color: "#ec4899" }}>17.9 hrs · 2023</span>
          <span style={{ color: "var(--fg)" }}>~32 min · 2026</span>
        </figcaption>
        <figcaption
          style={{ marginTop: 4, color: "var(--muted)", fontSize: 13 }}
        >
          Median time from a pull request opening to merging, 2023–2026. From
          most of a day to half an hour — roughly a 34× speed-up.
        </figcaption>
      </figure>

      <p
        id="support"
        style={{
          marginTop: 56,
          scrollMarginTop: 24,
          fontSize: 13,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        Customer support
      </p>

      <p style={{ marginTop: 20 }}>
        Support used to mean waiting. A ticket sat in a queue until a human got
        to it — sometimes the same hour, often the next day. The agent answers
        the moment a message lands. Across 3.2 million support responses,{" "}
        <strong>97.7% went out within the first hour</strong> — and the agent
        itself, which now handles 84% of everything, answers 99.9% of its
        tickets inside that hour.
      </p>

      <figure style={{ margin: "32px 0 0" }}>
        <svg
          viewBox="0 0 520 180"
          width="100%"
          height="180"
          role="img"
          aria-label="Distribution of 3.2 million support responses by time to first reply: 97.7% within an hour, 0.4% in 1 to 4 hours, 0.5% in 4 to 12 hours, 0.5% in 12 to 24 hours, and 0.9% after 24 hours."
          style={{ display: "block", overflow: "visible" }}
        >
          {[
            ["<1 hr", 97.68, "#ec4899"],
            ["1–4 hr", 0.42, "var(--faint)"],
            ["4–12 hr", 0.54, "var(--faint)"],
            ["12–24 hr", 0.5, "var(--faint)"],
            ["24 hr+", 0.85, "var(--faint)"],
          ].map(([label, pct, color], i) => {
            const x = 8 + i * 104;
            const barW = 72;
            const fullH = 120;
            const h = Math.max(2, ((pct as number) / 100) * fullH);
            const y = 130 - h;
            return (
              <g key={label as string}>
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={h}
                  fill={color as string}
                />
                <text
                  x={x + barW / 2}
                  y={y - 6}
                  fontSize="11"
                  fill={color === "#ec4899" ? "#ec4899" : "var(--muted)"}
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  {pct}%
                </text>
                <text
                  x={x + barW / 2}
                  y={148}
                  fontSize="9"
                  fill="var(--faint-2)"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  {label}
                </text>
              </g>
            );
          })}
        </svg>
        <figcaption
          style={{ marginTop: 6, color: "var(--muted)", fontSize: 13 }}
        >
          Time to first response across 3.2M support replies, Jan 2024 – Feb
          2026. Nearly everything is answered within the hour.
        </figcaption>
      </figure>

      <p style={{ marginTop: 24 }}>
        And the answers don&apos;t just come faster — they come from the agent.
        It handled 2.7 million of those 3.2 million responses, leaving the
        humans free for the cases that genuinely need them. If your support
        queue is one hire away from keeping up, the call pays for itself before
        you make it.
      </p>

      <p
        id="fraud"
        style={{
          marginTop: 56,
          scrollMarginTop: 24,
          fontSize: 13,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        Fraud &amp; risk
      </p>

      <section
        style={{
          margin: "20px 0 0",
          padding: "44px 28px",
          border: "1px solid var(--card-border)",
          borderRadius: 14,
          textAlign: "center",
          background: "var(--card)",
          boxShadow: "0 1px 3px var(--card-shadow)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "clamp(52px, 12vw, 76px)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
          }}
        >
          ~99%
        </p>
        <p style={{ margin: "6px 0 0", fontSize: 18, color: "var(--fg)" }}>
          handled with no human
        </p>
        <p style={{ margin: "16px 0 0", fontSize: 13, color: "var(--muted)" }}>
          Standard fraud and risk cases reviewed and actioned autonomously by
          the agent.
        </p>
      </section>

      <p
        id="finance"
        style={{
          marginTop: 56,
          scrollMarginTop: 24,
          fontSize: 13,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        Finance
      </p>

      <section
        style={{
          margin: "20px 0 0",
          padding: "24px",
          border: "1px solid var(--card-border)",
          borderRadius: 14,
          background: "var(--card)",
          boxShadow: "0 1px 3px var(--card-shadow)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--muted)",
            textAlign: "center",
          }}
        >
          The monthly financial close
        </p>

        <div style={{ textAlign: "center", margin: "22px 0 6px" }}>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(56px, 13vw, 88px)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "var(--fg)",
            }}
          >
            104 hrs
          </p>
          <p
            style={{ margin: "8px 0 0", fontSize: 16, color: "var(--muted-2)" }}
          >
            of outside-accountant time a month — now minutes, every week.
          </p>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "var(--muted)" }}>
            Escalon HUB task report, April 2026 — the human hours behind one
            month&apos;s close.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            marginTop: 24,
          }}
        >
          <div
            style={{
              flex: "1 1 200px",
              padding: "16px 18px",
              border: "1px solid var(--card-border)",
              borderRadius: 10,
              background: "var(--card-2)",
              boxShadow: "0 1px 2px var(--card-shadow-sm)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 12,
                fontWeight: 700,
                color: "var(--muted)",
              }}
            >
              Then
            </p>
            <p style={{ margin: "8px 0 0", color: "var(--muted-2)" }}>
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
            <p style={{ margin: "8px 0 0", color: "var(--fg)" }}>
              The agent runs it every week — pulls Metabase + Stripe across four
              entities, books the entries into QuickBooks itself, in minutes.
              The books are always current.
            </p>
          </div>
        </div>
      </section>

      <div
        style={{
          margin: "28px 0 0",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 14,
        }}
      >
        <BookCTA placement="mid" />
        <span style={{ fontSize: 14, color: "var(--muted)" }}>
          If even a fraction of a 104-hour close is yours, the math is easy.
        </span>
      </div>

      <p
        id="investors"
        style={{
          marginTop: 56,
          scrollMarginTop: 24,
          fontSize: 13,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        Investor relations
      </p>

      <section
        style={{
          margin: "20px 0 0",
          padding: "44px 28px",
          border: "1px solid var(--card-border)",
          borderRadius: 14,
          background: "var(--card)",
          boxShadow: "0 1px 3px var(--card-shadow)",
        }}
      >
        <p style={{ margin: 0, fontSize: 18, color: "var(--fg)" }}>
          Once a year, Gumroad returns money to its investors — a dividend to
          shareholders and a buyback of their shares.
        </p>

        <div style={{ textAlign: "center", margin: "36px 0 8px" }}>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            Returned to investors since 2023
          </p>
          <p
            style={{
              margin: "14px 0 0",
              fontSize: "clamp(64px, 15vw, 104px)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "var(--fg)",
            }}
          >
            $14.2M
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            marginTop: 28,
          }}
        >
          <div
            style={{
              flex: "1 1 200px",
              padding: "16px 18px",
              border: "1px solid var(--card-border)",
              borderRadius: 10,
              background: "var(--card-2)",
              boxShadow: "0 1px 2px var(--card-shadow-sm)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 22,
                fontWeight: 700,
                color: "var(--fg)",
              }}
            >
              $11.2M
            </p>
            <p
              style={{ margin: "6px 0 0", fontSize: 13, color: "var(--muted)" }}
            >
              in dividends across four annual rounds, paid to 7,447 investors.
            </p>
          </div>
          <div
            style={{
              flex: "1 1 200px",
              padding: "16px 18px",
              border: "1px solid var(--card-border)",
              borderRadius: 10,
              background: "var(--card-2)",
              boxShadow: "0 1px 2px var(--card-shadow-sm)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 22,
                fontWeight: 700,
                color: "#ec4899",
              }}
            >
              $3.0M
            </p>
            <p
              style={{ margin: "6px 0 0", fontSize: 13, color: "var(--muted)" }}
            >
              buying back investor shares across three tender offers.
            </p>
          </div>
        </div>

        <p style={{ margin: "24px 0 0", color: "var(--muted-2)" }}>
          The agent runs the whole cycle through Flexile: it works out each
          holder&apos;s share, issues the payments, and answers the questions
          that come with them — when the dividend lands, how the buyback is
          priced, what it means for taxes. What used to be a finance-team
          scramble now runs end to end, and no investor waits on a human to hear
          back.
        </p>

        <p style={{ margin: "20px 0 0", fontSize: 13, color: "var(--muted)" }}>
          Dividends and share buybacks paid through Flexile, 2023–2026.
        </p>
      </section>

      <p style={{ marginTop: 40, color: "var(--muted)" }}>
        We&apos;ll show you how we did it. The tools are out there — the hard
        part is the judgment: what to automate first, what has to stay human,
        and how to hand an agent your money and your customers without breaking
        trust. It took us three years and a few expensive wrong turns to learn
        that. In 90 minutes, you get the distilled version — and a prioritized
        plan for your own company. You&apos;ll own it; you won&apos;t be renting
        it from us.
      </p>

      <section
        style={{
          margin: "28px 0 0",
          padding: "28px",
          border: "1px solid var(--card-border)",
          borderRadius: 14,
          background: "var(--card)",
          boxShadow: "0 1px 3px var(--card-shadow)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          The call
        </p>
        <p style={{ margin: "14px 0 0", fontSize: 18, color: "var(--fg)" }}>
          90 minutes, 1:1, with the team that built and runs Gumclaw.
        </p>
        <ul
          style={{
            margin: "16px 0 0",
            paddingLeft: 20,
            color: "var(--muted-2)",
          }}
        >
          <li>
            A teardown of where an agent can take work off your team first.
          </li>
          <li>
            The architecture and guardrails we actually run in production.
          </li>
          <li>The org and trust changes that made it stick.</li>
          <li>A prioritized 90-day automation plan for your company.</li>
        </ul>
        <p style={{ margin: "18px 0 0", fontSize: 14, color: "var(--muted)" }}>
          For founders and operators of 5–100 person internet businesses who
          want to grow without rebuilding a conventional team. $10,000 — less
          than one month of the accountant time the agent replaced.
        </p>
        <p
          style={{
            margin: "16px 0 0",
            padding: "14px 16px",
            background: "#fdf2f8",
            border: "1px solid #fbcfe8",
            borderRadius: 10,
            fontSize: 14,
            color: "#9d174d",
          }}
        >
          <strong style={{ color: "#9d174d" }}>Credit applies:</strong> if you
          decide to have us help you build it afterward, the full $10,000 is
          credited toward that engagement — so the call counts toward the work,
          not on top of it.
        </p>
        <div style={{ marginTop: 22 }}>
          <BookCTA placement="offer" />
        </div>
      </section>

      <Faq />

      <p style={{ marginTop: 48, fontSize: 20, color: "var(--fg)" }}>
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
        <Font text="A" color="var(--faint)" size={30} />
      </a>
      <StickyCTA />
    </main>
  );
}
