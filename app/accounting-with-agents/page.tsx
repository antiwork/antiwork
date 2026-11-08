import type { Metadata } from "next";
import Link from "next/link";
import { Font } from "@/app/components/Font";

export const metadata: Metadata = {
  title: "Antiwork — Accounting with agents",
  description:
    "A talk in sixteen slides: how an agent keeps a double-entry ledger, closes the month, and stays out of the places a mistake is irreversible. What worked, what we will not automate, and the minimum you need to try it.",
};

const SLIDES = 16;

function Slide({
  n,
  id,
  title,
  children,
}: {
  n: number;
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mt-16 scroll-mt-6 print:break-inside-avoid print:break-after-page"
    >
      <div className="text-[12px] uppercase tracking-[0.18em] text-muted">
        {String(n).padStart(2, "0")} / {SLIDES}
      </div>
      <h2 className="mt-2 text-[21px] leading-[1.35] text-fg">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

export default function Accounting() {
  return (
    <main className="mx-auto max-w-[640px] px-6 pb-16 pt-8 font-mono text-[16px] leading-[1.7] text-fg">
      <div id="top" className="flex items-center gap-2">
        <Font text="W" color="var(--fg)" size={28} />
        <Link
          href="/"
          className="text-[40px] font-bold leading-none text-fg no-underline"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          Antiwork
        </Link>
      </div>

      <h1 className="mt-8 text-[20px] text-fg">Accounting with agents.</h1>

      <p className="mt-8 text-[20px] text-fg">
        An agent can read a bank statement, propose journal entries and close
        the month. It can also book the same invoice twice, silently. Everything
        below is the difference between those two outcomes.
      </p>

      <p className="mt-4 text-muted">
        A talk in {SLIDES} slides. Scroll, or print to PDF. Written from running
        a real ledger for a real company — the numbers in our books are not in
        here, but the method is.
      </p>

      <nav className="mt-6 flex flex-wrap gap-2 print:hidden">
        {[
          ["Why", "why"],
          ["The ledger", "ledger"],
          ["Pipeline", "pipeline"],
          ["Three lanes", "lanes"],
          ["Idempotency", "idempotency"],
          ["Reconcile", "reconcile"],
          ["The daily loop", "daily"],
          ["Assertions", "assertions"],
          ["Evidence", "evidence"],
          ["Guardrails", "guardrails"],
          ["Unsure", "unsure"],
          ["Audit trail", "audit"],
          ["Failures", "failures"],
          ["Human", "human"],
          ["Start Monday", "start"],
          ["One rule", "rule"],
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

      <Slide
        n={1}
        id="why"
        title="Bookkeeping is the best-shaped work an agent will ever get"
      >
        <p>
          It asks for the same three things over and over: read a source
          document, classify it under rules that already exist, and prove the
          result against a second, independent number.
        </p>
        <p>
          Which is also why it is the most dangerous place to be careless. The
          output feeds tax filings and payroll and the numbers a company is run
          on. A plausible-looking entry is worse than a missing one, because
          nobody goes looking for a number that looks right.
        </p>
        <p className="text-muted">
          So the talk is not &quot;agents can do accounting.&quot; It is the
          smaller, more useful claim: agents can do the volume, if you build the
          book so that being wrong is visible.
        </p>
      </Slide>

      <Slide
        n={2}
        id="ledger"
        title="Make the ledger a text file. Everything else follows."
      >
        <p>
          Our books are plain-text double-entry (Beancount), in a git
          repository. Not a spreadsheet, not a hosted dashboard, not a
          proprietary format the agent has to click through.
        </p>
        <p>
          That single decision buys four things at once: the agent can read the
          whole book in a session; every change is a diff a human can review;
          git is the audit log, with an author and a timestamp on every line;
          and any question about the past is a <code>grep</code>, not a support
          ticket.
        </p>
        <pre className="overflow-x-auto rounded border border-card-border bg-card-2 p-4 text-[13px] leading-[1.6]">
          {`2026-11-08 * "Processor payout"  "key: 5f3c9d2a…"
  Assets:Processor:Clearing          X
  Income:Sales                      -X

2026-11-08 * "Bank deposit"       "key: 8b1e740f…"
  Assets:Bank:Operating              X
  Assets:Processor:Clearing         -X`}
        </pre>
        <p className="text-[14px] text-muted">
          X is always read from the source document. It is never typed by hand,
          and never derived from the other side of the entry.
        </p>
      </Slide>

      <Slide n={3} id="pipeline" title="The pipeline is boring on purpose">
        <pre className="overflow-x-auto rounded border border-card-border bg-card-2 p-4 text-[13px] leading-[1.6]">
          {`sources            ingest            book              check
─────────────      ──────────        ──────────        ─────────────
processor report → normalise      →  double-entry   →  assertions
bank statement   → stable keys    →  ledger file    →  exceptions
invoices / bills → deduplicate   →  (git)          →  daily close
payroll / tax    → attachments   →                  →  month close
                                                     ↓
                                          human sign-off → filings`}
        </pre>
        <p>
          Each arrow is a script, not a conversation. An agent session may
          decide <em>what</em> to run and how to resolve an exception; it does
          not improvise the arithmetic, and it cannot invent a source document.
        </p>
        <p className="text-muted">
          If a step cannot be replayed from the source, it does not belong in
          the pipeline.
        </p>
      </Slide>

      <Slide n={4} id="lanes" title="Three lanes: autonomous, gated, human">
        <p>
          <strong>Autonomous</strong> — reversible and checkable. Reading
          sources, matching a payout to a deposit, drafting an entry, writing
          the exception list, proposing a reclassification. These run on a
          schedule with nobody watching, and a mistake shows up as a diff.
        </p>
        <p>
          <strong>Gated</strong> — one-way doors that a machine may prepare but
          not close alone. Posting adjustments to a closed period, writing off a
          balance, changing a vendor&apos;s bank details.
        </p>
        <p>
          <strong>Human</strong> — judgment with liability attached. Tax
          positions and elections, the sign-off on a filing, the decision to
          pay.
        </p>
        <p className="text-muted">
          The line between the lanes is not &quot;how hard is it.&quot; It is
          &quot;can this be undone, and can it be checked by someone who did not
          do it.&quot;
        </p>
      </Slide>

      <Slide n={5} id="idempotency" title="Idempotency is the whole game">
        <p>
          The first real bug was the obvious one: a sync ran twice and booked
          the same events twice. The ledger balanced perfectly. A balanced entry
          is not a correct entry.
        </p>
        <p>
          The fix is structural, not a stricter prompt. Every ingested event
          carries a stable key derived from the source (processor id, bank
          reference, document hash). Ingestion is an upsert on that key. Running
          the same sync ten times changes nothing, and re-running last month is
          safe.
        </p>
        <p>
          Then the agent gets a rule it can actually verify: before posting, ask
          the book whether this key is already there. &quot;I already saw
          this&quot; is a query, not a memory.
        </p>
      </Slide>

      <Slide
        n={6}
        id="reconcile"
        title="Reconcile. Never manufacture agreement."
      >
        <p>
          Reconciliation is the job of making two independent numbers agree, and
          explaining the difference when they do not. It is not the job of
          making the report look tidy.
        </p>
        <p>
          So the agent is not allowed to adjust one side to match the other. It
          proposes an explanation — a fee line, a timing difference, a refund
          that landed on the other side of a date boundary — and either that
          explanation survives review or it becomes an open exception with a
          name on it.
        </p>
        <p className="text-muted">
          A quiet &quot;reconciled&quot; flag that nobody can explain is how
          books drift for a year and then cost a week to unwind.
        </p>
      </Slide>

      <Slide
        n={7}
        id="daily"
        title="The daily loop: what it does, and what it refuses"
      >
        <p>
          Once a day: pull the new sources, ingest with keys, match payouts to
          deposits, list every unmatched item, check that the trial balance
          holds, and write a one-screen report — numbers, exceptions, what it
          could not resolve.
        </p>
        <p>
          What it refuses, by rule: create a new account, change a period that
          is closed, move money, or &quot;fix&quot; an exception by deleting it.
          Refusals are output too. An agent that can always produce a clean
          report is not doing accounting.
        </p>
        <p className="text-muted">
          The loop is a script with a checklist, woken by cron. The model&apos;s
          contribution is judgment at the edges; the cadence and the assertions
          are code, so they do not depend on the model having a good day.
        </p>
      </Slide>

      <Slide
        n={8}
        id="assertions"
        title="A close is a list of assertions, not a feeling"
      >
        <p>
          &quot;Done&quot; cannot be a vibe. The month close is a file of
          assertions, each one runnable, each with a receipt:
        </p>
        <pre className="overflow-x-auto rounded border border-card-border bg-card-2 p-4 text-[13px] leading-[1.6]">
          {`assert every_entry_balances()          # debits == credits
assert every_payout_has_a_deposit()    # none unmatched
assert no_exception_older_than(3)      # days
assert processor_diff_is_explained()   # fee line, or exception
assert period_is_locked_and_signed()`}
        </pre>
        <p>
          The agent may not mark the close complete. It reports which assertions
          pass, which fail, and what it did about each. When one fails, the
          month is open — that is the whole status model.
        </p>
      </Slide>

      <Slide
        n={9}
        id="evidence"
        title="Every number is read back, in the same session"
      >
        <p>
          The rule we imported from engineering: a number in a report is copied
          from a live source pulled this session, with its id, never recalled
          from an earlier conversation.
        </p>
        <p>
          And a close is not finished because a job said it was finished. Posted
          is not reconciled; reconciled is not reviewed; reviewed is not filed.
          Each of those is a different piece of evidence, and the agent has to
          fetch the next one rather than assume it.
        </p>
        <p className="text-muted">
          This is the accounting version of a lesson that cost us real money in
          software: &quot;merged&quot; is not &quot;live.&quot; The vocabulary
          of completion has to match the evidence, or the words drift.
        </p>
      </Slide>

      <Slide
        n={10}
        id="guardrails"
        title="The guardrails that actually earned their place"
      >
        <ul className="ml-5 list-disc space-y-2">
          <li>
            No autonomous spend. The agent prepares the payment; a person sends
            it.
          </li>
          <li>
            A vendor&apos;s bank details can never change on the strength of an
            email. It takes an out-of-band callback to a number already on file.
          </li>
          <li>
            Tax payments and filings are human-pressed, every time, even when
            everything checks out.
          </li>
          <li>
            One write path per action: a single audited command, not a browser
            and a click nobody can replay.
          </li>
          <li>
            Never disable a control to get past a break. A red assertion is the
            control working.
          </li>
        </ul>
      </Slide>

      <Slide n={11} id="unsure" title="When it is unsure, it stops">
        <p>
          The default for an ambiguous source document is not the most likely
          classification. It is a question, filed where a person will see it,
          with the document attached.
        </p>
        <p>
          That costs latency on purpose: a wrong journal entry costs more than a
          late one. And it means the queue has to make stalling visible — an
          item waiting on a human is a status, not a silence. Ours shows up as a
          labelled, unassigned-to-nobody work item, so a stall reads as a stall
          instead of looking like quiet progress.
        </p>
      </Slide>

      <Slide
        n={12}
        id="audit"
        title='Six months later you must be able to ask "why is this number here?"'
      >
        <p>
          Because every write is one command with logged arguments, and the book
          is a git history, that question has an answer: the commit, the source
          document it came from, the exception it resolved, and the session that
          proposed it.
        </p>
        <p>
          A dashboard screenshot cannot do this. A chat log cannot do this. The
          diff can.
        </p>
        <p className="text-muted">
          Bonus effect: an auditor, a new hire and the agent all read the same
          artifact, so they cannot quietly disagree about what happened.
        </p>
      </Slide>

      <Slide n={13} id="failures" title="What went wrong, honestly">
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong>Double-booking</strong> from a non-idempotent sync. Fixed
            with source keys and upserts, not with a better prompt.
          </li>
          <li>
            <strong>Date boundaries.</strong> A transaction in one timezone, a
            period closed in another. Fixed by deciding one convention and
            asserting on it, everywhere.
          </li>
          <li>
            <strong>
              &quot;Reconciled&quot; that meant &quot;no exception was
              raised.&quot;
            </strong>{" "}
            Fixed by requiring the explanation, not the absence of a complaint.
          </li>
          <li>
            <strong>Two systems drifting apart</strong> while both looked
            healthy. Fixed by making one of them the source of truth and
            reconciling the other to it on a schedule.
          </li>
        </ul>
        <p className="text-muted">
          None of these were model failures. All four were bookkeeping failures
          that a person makes too — the difference is that an agent makes them
          at three in the morning, every day, until a test catches them.
        </p>
      </Slide>

      <Slide
        n={14}
        id="human"
        title="What stays human, and why that is not a compromise"
      >
        <p>
          Tax positions, elections, the decision to pay, the sign-off. Not
          because an agent could not learn the rules, but because someone has to
          be accountable when the rules are interpreted — and that is a person.
        </p>
        <p>
          The useful goal is not to remove the human from those moments. It is
          to make the judgment legible: the agent assembles the evidence, states
          the options, shows the numbers behind each one, and leaves a decision
          that takes two minutes instead of two hours.
        </p>
        <p className="text-muted">
          An agent that makes a reviewer&apos;s job smaller is worth more than
          one that makes the reviewer nervous.
        </p>
      </Slide>

      <Slide n={15} id="start" title="If you start on Monday">
        <ol className="ml-5 list-decimal space-y-2">
          <li>
            Put the ledger in plain-text double entry, in git. No exceptions.
          </li>
          <li>
            Give every write exactly one path — a script with logged arguments.
          </li>
          <li>Derive a stable key for every source event and upsert on it.</li>
          <li>Replace the checklist with assertions that produce receipts.</li>
          <li>
            Separate the person who can pay from the process that proposes
            payment.
          </li>
          <li>
            Write the rules into files the agent must read before it acts, and
            date each rule the day it was learned.
          </li>
        </ol>
        <p className="text-muted">
          That is a weekend of work and it is most of the value. The rest —
          model choice, prompts, tooling — changes every few months. The six
          above have not changed in a century of bookkeeping.
        </p>
      </Slide>

      <Slide n={16} id="rule" title="The one rule">
        <p className="text-[20px]">
          If the agent cannot show you the source document and the diff it
          produced, it does not go in the books.
        </p>
        <p>
          Everything else in this deck is a consequence of that sentence. The
          text ledger makes the diff readable. The keys make the source
          traceable. The assertions make the absence of a diff mean something.
        </p>
        <p className="text-muted">
          We are not trying to build an accountant that never sleeps. We are
          trying to build books where a mistake is loud, attributable and cheap
          — and then letting the volume work run unattended.
        </p>
      </Slide>

      <p className="mt-16 text-muted">
        How the same agent runs the rest of an operation:{" "}
        <a
          href="https://gumclaw.github.io/how-i-work/"
          className="text-fg underline decoration-pill-border underline-offset-4"
        >
          gumclaw.github.io/how-i-work
        </a>
        . The redacted skill library, including the ledger-close and
        deploy-read-back skills:{" "}
        <a
          href="https://github.com/antiwork/skills"
          className="text-fg underline decoration-pill-border underline-offset-4"
        >
          github.com/antiwork/skills
        </a>
        .
      </p>

      <a
        href="#top"
        aria-label="Back to top"
        className="mt-14 inline-flex cursor-pointer items-center no-underline print:hidden"
      >
        <Font text="A" color="var(--faint)" size={30} />
      </a>
    </main>
  );
}
