import type { Metadata } from "next";
import { Font } from "@/app/components/Font";
import { ProductLink } from "@/app/components/ProductLink";
import { AskGumclaw } from "@/app/components/AskGumclaw";
import { ArchitectureDiagram } from "@/app/components/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "Antiwork — We automated ourselves out of the work.",
  description:
    "Since 2023, Gumroad has run its operations through a single AI agent. This is how.",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-[640px] px-6 pb-16 pt-8 font-mono text-[16px] leading-[1.7] text-fg">
      <div id="top" className="flex items-center gap-2">
        <Font text="W" color="var(--fg)" size={28} />
        <span
          className="text-[40px] font-bold leading-none text-fg"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          Antiwork
        </span>
      </div>

      <p className="mt-8 text-[20px] text-fg">
        We automated ourselves out of the work.
      </p>

      <p className="mt-8 text-[20px] text-fg">
        Today one AI agent runs the company.
      </p>

      <AskGumclaw />

      <p className="mt-6 text-muted">Here is what it runs today.</p>

      <nav className="mt-4 flex flex-wrap gap-2">
        {[
          ["Customer support", "support"],
          ["The architecture", "architecture"],
          ["The founder", "founder"],
        ].map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className="rounded-full border border-pill-border px-3 py-[6px] text-[13px] text-fg no-underline"
          >
            {label}
          </a>
        ))}
      </nav>

      <p
        id="support"
        className="mt-14 scroll-mt-6 text-[13px] uppercase tracking-[0.18em] text-muted"
      >
        Customer support
      </p>

      <p className="mt-5">
        In the last 24 hours, 479 support tickets came in. The agent closed{" "}
        <strong>478 of them</strong>. A human touched exactly one.
      </p>

      <figure className="mt-8">
        <p className="m-0 text-[clamp(64px,15vw,104px)] font-bold leading-none tracking-[-0.04em] text-fg">
          478<span className="text-faint">/479</span>
        </p>
        <figcaption className="mt-3 text-[13px] text-muted">
          Tickets resolved by the agent alone in the last 24 hours. Ranked
          against the team by tickets resolved, it does more than everyone else
          combined.
        </figcaption>
      </figure>

      <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
        {[
          ["~50s", "median first reply"],
          ["23 min", "median resolution"],
          ["1 in 3", "closed in under 5 min"],
        ].map(([n, l]) => (
          <div key={l as string}>
            <p className="m-0 text-[22px] font-bold text-fg">{n}</p>
            <p className="mt-1 text-[13px] text-muted">{l}</p>
          </div>
        ))}
      </div>

      <p className="mt-8">
        It carries the queue, not just the easy part — returned payouts,
        accounts under review, data-deletion requests, a refund question in
        Spanish, answered in Spanish. And the one ticket that did need a human
        arrived as a GitHub issue with everything the agent had already
        gathered, so the person picked up where it left off, not from zero.
      </p>

      <p className="mt-6">
        The tool behind it is <ProductLink brand="helper">Helper</ProductLink>,
        which runs our customer support end to end. We built it to scale
        ourselves down — and we&apos;re our own first customer. You can use it
        too.
      </p>

      <a
        href="https://helper.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center rounded-full border border-[#b91c1c] bg-[#b91c1c] px-6 py-3 text-[15px] font-bold text-white no-underline"
      >
        Check out helper.ai →
      </a>

      <p
        id="architecture"
        className="mt-14 scroll-mt-6 text-[13px] uppercase tracking-[0.18em] text-muted"
      >
        The architecture
      </p>

      <p className="mt-5">
        Underneath it all is one agent, running on <strong>Hermes Agent</strong>
        . Its brain is three layers: <strong>skills</strong> (how to do the
        work), <strong>cron loops</strong> (when to do it), and{" "}
        <strong>memory</strong> (what it knows). Inputs land, the agent reasons
        and acts, and every action is re-verified by an independent pass.
      </p>

      <div className="mt-8">
        <ArchitectureDiagram />
      </div>

      <p
        id="founder"
        className="mt-14 scroll-mt-6 text-[13px] uppercase tracking-[0.18em] text-muted"
      >
        The founder
      </p>

      <p className="mt-5">
        Running the company takes the founder about{" "}
        <strong>one hour a week</strong>. He reads what the agent escalated,
        signs what only a human can sign, and closes the laptop.
      </p>

      <p className="mt-6">
        The rest of his week goes to his day job. He is a full-time employee of
        the Internal Revenue Service. That is not a joke. Everything on this
        page — the 478 of 479 tickets, the whole operation — is what one agent
        runs while its founder works for the federal government.
      </p>

      <p className="mt-10 text-muted">
        Everything we learned doing this is on this page and in the open — the
        tools are out there, and the hard part is the judgment: what to automate
        first, what has to stay human, and how to hand an agent your money and
        your customers without breaking trust. If you want specifics for your
        own company, don&apos;t book a call — just ask.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 rounded-[12px] border border-[#ec4899] bg-[color:var(--card)] bg-card px-5 py-4 shadow-card-sm">
        <div className="flex-[1_1_260px]">
          <p className="m-0 text-[15px] font-bold text-fg">
            Ask Gumclaw a question
          </p>
          <p className="mt-1 text-[13px] text-muted">
            The agent this page is about answers real questions in public, from
            its own account. Mention it and it replies — usually within the
            hour.
          </p>
        </div>
        <a
          href="https://x.com/intent/post?text=%40gumclaw%20"
          className="inline-flex items-center rounded-full border border-[#ec4899] bg-[#ec4899] px-4 py-[7px] text-[13px] font-bold text-white no-underline"
        >
          Ask on X →
        </a>
      </div>

      <p className="mt-12 text-[20px] text-fg">
        We automated ourselves out of the work. Now we&apos;re just having fun.
      </p>

      <a
        href="#"
        aria-label="Back to top"
        className="mt-14 inline-flex cursor-pointer items-center no-underline"
      >
        <Font text="A" color="var(--faint)" size={30} />
      </a>
    </main>
  );
}
