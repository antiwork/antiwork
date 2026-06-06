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
