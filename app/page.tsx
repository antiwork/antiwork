import type { Metadata } from "next";
import { Font } from "@/app/components/Font";
import { BookCTA } from "@/app/components/BookCTA";
import { ProductLink } from "@/app/components/ProductLink";
import { AskGumclaw } from "@/app/components/AskGumclaw";
import { ArchitectureDiagram } from "@/app/components/ArchitectureDiagram";
import { Faq } from "@/app/components/Faq";

export const metadata: Metadata = {
  title: "Antiwork — We automated ourselves out of the work.",
  description:
    "Since 2023, Gumroad has run support and investor relations through a single AI agent. This is how.",
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
          ["Investor relations", "investors"],
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
        gathered, so the person picked up where it left off, not from zero. If
        your support queue is one hire away from keeping up, the call pays for
        itself before you make it.
      </p>

      <p className="mt-6">
        The tool behind it is <ProductLink brand="helper">Helper</ProductLink>,
        which runs our customer support end to end. We built it to scale
        ourselves down — and we&apos;re our own first customer. You can use it
        too.
      </p>

      <p
        id="investors"
        className="mt-14 scroll-mt-6 text-[13px] uppercase tracking-[0.18em] text-muted"
      >
        Investor relations
      </p>

      <section className="mt-5 rounded-[14px] border border-card-border bg-[color:var(--card)] bg-card px-7 py-11 shadow-card">
        <p className="m-0 text-[18px] text-fg">
          Once a year, Gumroad returns money to its investors — a dividend to
          shareholders and a buyback of their shares.
        </p>

        <div className="mb-2 mt-9 text-center">
          <p className="m-0 text-[12px] uppercase tracking-[0.18em] text-muted">
            Returned to investors since 2023
          </p>
          <p className="mt-3.5 text-[clamp(64px,15vw,104px)] font-bold leading-none tracking-[-0.04em] text-fg">
            $14.2M
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-4">
          <div className="flex-[1_1_200px] rounded-[10px] border border-card-border bg-[color:var(--card-2)] bg-card-2 px-[18px] py-4 shadow-card-sm">
            <p className="m-0 text-[22px] font-bold text-fg">$11.2M</p>
            <p className="mt-[6px] text-[13px] text-muted">
              in dividends across four annual rounds, paid to 7,447 investors.
            </p>
          </div>
          <div className="flex-[1_1_200px] rounded-[10px] border border-card-border bg-[color:var(--card-2)] bg-card-2 px-[18px] py-4 shadow-card-sm">
            <p className="m-0 text-[22px] font-bold text-[#ec4899]">$3.0M</p>
            <p className="mt-[6px] text-[13px] text-muted">
              buying back investor shares across three tender offers.
            </p>
          </div>
        </div>

        <p className="mt-6 text-muted-2">
          The agent runs the whole cycle through{" "}
          <ProductLink brand="flexile">Flexile</ProductLink>: it works out each
          holder&apos;s share, issues the payments, and answers the questions
          that come with them — when the dividend lands, how the buyback is
          priced, what it means for taxes. What used to be a finance-team
          scramble now runs end to end, and no investor waits on a human to hear
          back.
        </p>

        <p className="mt-5 text-muted-2">
          Flexile runs our cap table, dividends, and share buybacks — everything
          our investors touch. We built it to scale ourselves down, and
          we&apos;re our own first customer. You can use it too.
        </p>

        <p className="mt-5 text-[13px] text-muted">
          Dividends and share buybacks paid through Flexile, 2023–2026.
        </p>
      </section>

      <p
        id="architecture"
        className="mt-14 scroll-mt-6 text-[13px] uppercase tracking-[0.18em] text-muted"
      >
        The architecture
      </p>

      <p className="mt-5">
        Underneath support and investor relations is one agent, running on{" "}
        <strong>Hermes Agent</strong>. Its brain is three layers: 273{" "}
        <strong>skills</strong> (how to do the work), 78{" "}
        <strong>cron loops</strong> (when to do it), and two{" "}
        <strong>memory files</strong> (what it knows). Inputs land, the agent
        reasons and acts, and every action is re-verified by an independent
        pass.
      </p>

      <div className="mt-8">
        <ArchitectureDiagram compact />
      </div>

      <a
        href="/skills"
        className="mt-6 inline-flex items-center text-[14px] text-[#ec4899] no-underline"
      >
        See the full architecture →
      </a>

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
        page — the 478 of 479 tickets, the $14.2M returned to investors — is
        what one agent runs while its founder works for the federal government.
      </p>

      <p className="mt-10 text-muted">
        We&apos;ll show you how we did it. The tools are out there — the hard
        part is the judgment: what to automate first, what has to stay human,
        and how to hand an agent your money and your customers without breaking
        trust. It took us three years and a few expensive wrong turns to learn
        that. In 90 minutes, you get the distilled version — and a prioritized
        plan for your own company. You&apos;ll own it; you won&apos;t be renting
        it from us.
      </p>

      <p className="mt-10 scroll-mt-6 text-[13px] uppercase tracking-[0.18em] text-muted">
        Other ways to work with us
      </p>

      <div className="mt-6 flex flex-col gap-3">
        {/* Rung 0 — free */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-[12px] border border-card-border bg-[color:var(--card)] bg-card px-5 py-4 shadow-card-sm">
          <div className="flex-[1_1_260px]">
            <p className="m-0 text-[15px] font-bold text-fg">
              The playbook, in the open
            </p>
            <p className="mt-1 text-[13px] text-muted">
              Write-ups, the SOPs at a high level, and Ask Gumclaw answering
              real questions. How we say we want to work with everyone.
            </p>
          </div>
          <p className="m-0 text-[15px] font-bold text-fg">Free</p>
        </div>

        {/* Rung 1 — cohort */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-[12px] border border-card-border bg-[color:var(--card)] bg-card px-5 py-4 shadow-card-sm">
          <div className="flex-[1_1_260px]">
            <p className="m-0 text-[15px] font-bold text-fg">Group cohort</p>
            <p className="mt-1 text-[13px] text-muted">
              A live workshop in a small room. The same teardown thinking,
              shared across a handful of founders who learn from each other.
            </p>
          </div>
          <p className="m-0 text-[15px] font-bold text-fg">$1,500 / seat</p>
        </div>

        {/* Rung 2 — the call (you are here) */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 rounded-[12px] border border-[#ec4899] bg-[color:var(--card)] bg-card px-5 py-4 shadow-card-sm">
          <div className="flex-[1_1_260px]">
            <p className="m-0 text-[15px] font-bold text-fg">
              The teardown call
            </p>
            <p className="mt-1 text-[13px] text-muted">
              90 minutes, 1:1, with the team that built and runs Gumclaw.
              $10,000 — credit applies toward what comes next.
            </p>
          </div>
          <BookCTA placement="rung" label="Book a call →" />
        </div>

        {/* Rung 4 — bespoke */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-[12px] border border-card-border bg-[color:var(--card)] bg-card px-5 py-4 shadow-card-sm">
          <div className="flex-[1_1_260px]">
            <p className="m-0 text-[15px] font-bold text-fg">Bespoke</p>
            <p className="mt-1 text-[13px] text-muted">
              For larger companies, or ones we believe in. Deeper engagements,
              and sometimes equity or revenue share instead of a fee.
            </p>
          </div>
          <p className="m-0 text-[15px] font-bold text-fg">Let&apos;s talk</p>
        </div>
      </div>

      <Faq />

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
