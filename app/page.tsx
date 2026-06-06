import type { Metadata } from "next";
import { Logo } from "@/app/components/Logo";

export const metadata: Metadata = {
  title: "Antiwork — We automated ourselves out of the work.",
  description:
    "Gumroad runs support, fraud & risk, engineering, and finance through a single AI agent on a 6-person team. The software is free. The only thing we sell is how we did it.",
};

const BOOK_URL = "https://gumclaw.gumroad.com/l/gzhptn";

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
      <Logo size={40} color="black" background="transparent" />

      <p style={{ marginTop: 32 }}>Antiwork</p>

      <p style={{ marginTop: 24 }}>We automated ourselves out of the work.</p>

      <p style={{ marginTop: 24 }}>
        Gumroad runs support, fraud &amp; risk, engineering, and finance through
        a single AI agent on a 6-person team. A year ago that took a whole
        company.
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

      <p style={{ marginTop: 24 }}>
        The software that does it is free and open-source — OpenClaw, Hermes,
        the entire skill library. Download it, run it, owe us nothing. We want
        you to.
      </p>

      <p style={{ marginTop: 24 }}>
        The only thing we sell is how we did it: the year of operating knowledge
        that makes a free framework run a real company without falling over.
        What to automate first, what to keep human, where an agent earns trust.
      </p>

      <p style={{ marginTop: 24 }}>
        That&apos;s a call. $10,000 — 90 minutes with the people who built and
        run it. Book one, or several at today&apos;s price if you want; it may
        go up later, or not.
      </p>

      <p style={{ marginTop: 24 }}>
        Some of what one agent does, all from production:
      </p>

      <ul style={{ marginTop: 8, paddingLeft: 20 }}>
        <li>~98.5% of support tickets auto-resolved (17.3 days → 51 min)</li>
        <li>
          ~99% of standard fraud/risk cases handled with no human in the loop
        </li>
        <li>idea → shipped in about half an hour, down from a ~99h peak</li>
        <li>82× revenue per employee since 2014</li>
      </ul>

      <p style={{ marginTop: 32 }}>
        →{" "}
        <a href={BOOK_URL} style={{ color: "#111" }}>
          Book the call
        </a>
      </p>

      <p style={{ marginTop: 48, color: "#888", fontSize: 14 }}>
        We automated ourselves out of the work. The software&apos;s on us — the
        shortcut is ten grand. Built on OpenClaw + Hermes, open-source.
      </p>
    </main>
  );
}
