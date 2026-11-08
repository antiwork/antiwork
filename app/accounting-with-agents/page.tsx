import type { Metadata } from "next";
import Link from "next/link";
import { Font } from "@/app/components/Font";

export const metadata: Metadata = {
  title: "Antiwork — Accounting with agents",
  description:
    "A talk in twenty-six slides: how an agent keeps a double-entry ledger, closes the month, and stays out of the places a mistake is irreversible. What worked, what we will not automate, and the minimum you need to try it.",
};

const SLIDES = 26;

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

function Bars({
  values,
  labels,
  format,
  colors,
  opacities,
  valueLabels,
  labelEvery,
}: {
  values: number[];
  labels: string[];
  format: (v: number) => string;
  colors?: string[];
  opacities?: number[];
  valueLabels?: boolean;
  labelEvery?: number;
}) {
  const W = 600;
  const H = 150;
  const top = Math.max(...values) * 1.08;
  const bw = W / values.length;
  const yFor = (v: number) => H - (v / top) * H;
  const grid = [0, 0.25, 0.5, 0.75, 1].map((f) => top * 0.92 * f);
  return (
    <svg viewBox={`0 0 ${W} ${H + 22}`} className="w-full text-fg" role="img">
      {grid.map((g, i) => (
        <g key={i}>
          <line
            x1={0}
            x2={W}
            y1={yFor(g)}
            y2={yFor(g)}
            stroke="currentColor"
            strokeOpacity={i === 0 ? 0.35 : 0.1}
            strokeDasharray={i === 0 ? undefined : "2 5"}
          />
          <text
            x={2}
            y={yFor(g) - 3}
            fontSize={8}
            fill="currentColor"
            fillOpacity={0.4}
          >
            {format(g)}
          </text>
        </g>
      ))}
      {values.map((v, i) => (
        <g key={i}>
          <rect
            x={i * bw + 3}
            y={yFor(v)}
            width={bw - 6}
            height={H - yFor(v)}
            fill={colors?.[i] ?? "currentColor"}
            fillOpacity={opacities?.[i] ?? 0.78}
          />
          {valueLabels ? (
            <text
              x={i * bw + bw / 2}
              y={yFor(v) - 4}
              textAnchor="middle"
              fontSize={7.5}
              fill="currentColor"
              fillOpacity={0.5}
            >
              {format(v)}
            </text>
          ) : null}
          <text
            x={i * bw + bw / 2}
            y={H + 14}
            textAnchor="middle"
            fontSize={8.5}
            fill="currentColor"
            fillOpacity={0.5}
          >
            {labelEvery && i % labelEvery !== 0 ? "" : labels[i]}
          </text>
        </g>
      ))}
    </svg>
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
        a real ledger for a real company. Two slides have our own money in them,
        because a method nobody can check against numbers is a brochure; the
        rest is the method, which is the part that travels.
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
          ["Close report", "closereport"],
          ["Cadence", "cadence"],
          ["Assertions", "assertions"],
          ["Evidence", "evidence"],
          ["Guardrails", "guardrails"],
          ["Sales tax", "salestax"],
          ["Income tax", "incometax"],
          ["Unsure", "unsure"],
          ["Audit trail", "audit"],
          ["Failures", "failures"],
          ["Human", "human"],
          ["CFO", "cfo"],
          ["Cost", "cost"],
          ["Cost chart", "costchart"],
          ["Revenue", "revenue"],
          ["Check-in", "checkin"],
          ["Emits", "emits"],
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

      <Slide n={7} id="daily" title="The daily close, step by step">
        <ol className="ml-5 list-decimal space-y-2">
          <li>
            Pull every source that moved since the last run: processor reports,
            bank lines, invoices, bills.
          </li>
          <li>
            Ingest each event under its source key, upserting — a second run
            changes nothing.
          </li>
          <li>
            Match payouts to deposits and bills to payments. Anything unmatched
            becomes a named exception with the source document attached.
          </li>
          <li>
            Post the entries the rules can post; propose the ones they cannot,
            as a diff a human can accept or reject.
          </li>
          <li>
            Run the assertions: entries balance, no unmatched item without an
            exception, no exception past its window, closed periods untouched.
          </li>
          <li>
            Write a one-screen report — the numbers, the exceptions, what it
            could not resolve, and what it refused to do.
          </li>
        </ol>
        <p>
          What it refuses, by rule: create a new account, change a period that
          is closed, move money, or &quot;fix&quot; an exception by deleting it.
          Refusals are output too. An agent that can always produce a clean
          report is not doing accounting.
        </p>
        <p>
          A step that fails stops the rest and reports a failure, not a partial
          success. A close that half-ran is not a smaller close — it is a
          misleading one.
        </p>
        <p className="text-muted">
          The loop is a script with a checklist, woken by cron. The model&apos;s
          contribution is judgment at the edges; the cadence and the assertions
          are code, so they do not depend on the model having a good day.
        </p>
      </Slide>

      <Slide n={8} id="closereport" title="The close, as it comes out">
        <p>
          On the first, one command re-runs every importer for the month that
          just ended and writes a file a controller could sign. Nothing in the
          list below is a summary somebody typed: each line is a count the
          importer returned, so a silent drop shows up as a number that got
          smaller.
        </p>
        <pre className="overflow-x-auto rounded border border-card-border bg-card-2 p-4 text-[12px] leading-[1.55]">
          {`2026-10 close report                            generated 2026-11-01
finance mail ingest   45 days of mail                                ok
revenue               31 days, 62 entries                            ok
ramp                  396 cleared, 0 uncategorized                   ok
mercury               111 cleared, 0 uncategorized                   ok
treasury              dividends 30,764.33                            ok
flexile               4 paid invoices                                ok
wise                  3 remittances, 1,043,053.83                    ok
close accruals        5020 402,761.11 / 6010 71,634.48 / cap 66,600.86
tax offsets           169,787.34 out of revenue tax, into payable
tax provision         YTD pre-tax 6,792,947.39  ->  2,173,743.17
bean-check            green`}
        </pre>
        <p>
          <strong>Two of those lines are why a person still signs.</strong> The
          Stripe processing fees alone are $402,761.11 for the month, booked to
          cost of revenue — one accrual bigger than most companies&apos; whole
          month of costs. And the provision turns $6.8M of year-to-date profit
          into a $2.2M liability at 32 percent. A wrong number there is not a
          typo, it is a filing.
        </p>
        <p>
          The daily half is separate and smaller: revenue posts itself every day
          of the month — 31 of 31 days in October, all 7 so far in November — a
          one-screen report lands in a chat thread at 11:00 every weekday, and
          the tax rails get re-walked at noon. So the numbers move daily and the
          assertions run monthly. That is the right split: a number that arrives
          late is annoying, an assertion that is skipped is invisible.
        </p>
        <Bars
          values={[
            50.2, 48.1, 55.5, 62.7, 54.5, 49.9, 49.0, 45.5, 45.9, 42.2, 43.8,
            49.1, 45.5, 44.8, 48.0, 47.6, 42.0, 42.3, 45.3, 46.7, 46.9, 45.9,
            43.5, 41.7, 42.8, 42.5, 45.8, 46.4, 51.3, 46.7, 43.5,
          ]}
          labels={[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
          ]}
          format={(v) => `${Math.round(v)}`}
          labelEvery={7}
        />
        <p className="text-muted">
          Daily revenue posted by the importer, Stripe and PayPal, October 2026,
          $K. Thirty-one bars, none of them entered by hand, adding to
          $1,455.6K. The closed P&amp;L says $1,442.3K, and the $13.3K between
          them is refund and deferred-revenue handling that only happens at
          close — which is the argument for a close being a step, not a
          formality.
        </p>
      </Slide>

      <Slide n={9} id="cadence" title="What else recurs, and how often">
        <p>
          The daily close is one rung of a ladder. Almost all of the work is on
          a timer, because the useful question is not &quot;what should we
          do&quot; but &quot;how long can we be wrong about this?&quot;
        </p>
        <pre className="overflow-x-auto rounded border border-card-border bg-card-2 p-4 text-[13px] leading-[1.6]">
          {`every 2-5 min    watchdogs       pool health, proxy health, session budgets
every 15-30 min  front line      new tickets, risk queue slice, deploy check
hourly           trust & safety  piracy and DMCA queue, satisfaction scan
daily            books           close, card-testing, spam, policy drift
weekly           patterns        refund abuse, rings, spend digest, release
monthly          close+filings   month close, balance snapshots, tax accruals
quarterly/year   review          accounting review, policy review
on event         hooks           mail push, GitHub, errors, deploy callbacks`}
        </pre>
        <p>
          <strong>
            A timer is a promise about latency; an event is a promise about
            speed.
          </strong>{" "}
          Where both exist — a mail push plus a polling backstop, a webhook plus
          a sweep — the pair is only safe because every handler is idempotent,
          so the second delivery changes nothing.
        </p>
        <p>
          <strong>Cadence is a risk decision.</strong> Fraud and payouts get
          minutes because being wrong for a day is expensive. The books get a
          day because a day&apos;s error is still cheap. Filings get a month
          because that is the deadline, not the risk.
        </p>
        <p>
          <strong>Loops stay silent unless something changed,</strong> and there
          is a hard daily cap on how many messages the scheduler may send a
          person, so that silence keeps meaning &quot;fine.&quot; Watchdogs
          watch the loops themselves — heartbeat, stale queue, disk headroom,
          budget — because otherwise silence is ambiguous.
        </p>
        <p className="text-muted">
          And loops retire. One tied to a single open ticket dies with the
          ticket; a weekly review kills the ones nobody reads. Rot is the
          default state of a scheduler, not an accident.
        </p>
      </Slide>

      <Slide
        n={10}
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
        n={11}
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
        n={12}
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

      <Slide
        n={13}
        id="salestax"
        title="Sales tax: deterministic, so the agent prepares it"
      >
        <p>
          Sales tax is the closest thing in tax to an engineering problem: a
          rate, a taxable base, a period. Which jurisdiction, which rate applied
          on the date of the sale, what was collected, what was remitted, what
          is owed.
        </p>
        <p>
          <strong>The agent runs all of it.</strong> Loading the month&apos;s
          orders, checking that every order reached the rate engine, accruing
          jurisdiction by jurisdiction, posting the monthly journal entry,
          reconciling what the processor collected against what was remitted,
          and tracking every deadline. The loop runs whether or not anyone is
          watching, and it ends in a file a person can read in a minute.
        </p>
        <p>
          <strong>A person presses the button.</strong> Not because the
          arithmetic is hard, but because a filed return is a statement to a
          government, and an amendment costs money, penalties and credibility.
          Preparing and filing are two different acts, and only one of them is
          reversible.
        </p>
        <p className="text-muted">
          What actually breaks it: a rate change inside the period, a new
          jurisdiction crossed by an economic threshold, refunds that land in
          the next period, an exemption certificate that arrives late. None of
          those are computations. They are questions, and the loop files them as
          questions.
        </p>
      </Slide>

      <Slide
        n={14}
        id="incometax"
        title="Income tax: judgment, so the agent assembles instead of deciding"
      >
        <p>
          There is no &quot;the number.&quot; Depreciation method, entity
          classification, how a cost is treated, the timing of revenue, which
          treaty position applies, when to make an estimated payment — each one
          is a decision, and the number is downstream of it.
        </p>
        <p>
          <strong>The agent runs the evidence, not the decision.</strong> It
          closes the books to a known state, keeps a trail for every position
          already taken, computes the arithmetic under each option a person
          hands it, tracks deadlines and payment rails, triages notices and
          drafts the replies, and prepares the paperwork that follows a
          decision.
        </p>
        <p>
          <strong>A person decides.</strong> Positions, elections, amounts,
          signatures. Liability attaches to a person, so the deliverable cannot
          be a finished answer with the reasoning buried inside it. It has to be
          the options, the numbers behind each, and what being wrong would cost.
        </p>
        <p className="text-muted">
          The failure mode to design against is an agent that picks the
          interpretation which makes the books balance, because it can. Sales
          tax asks &quot;is the arithmetic right?&quot; Income tax asks
          &quot;what did we decide?&quot; — a machine can only answer the first
          question.
        </p>
      </Slide>

      <Slide n={15} id="unsure" title="When it is unsure, it stops">
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
        n={16}
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

      <Slide n={17} id="failures" title="What went wrong, honestly">
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
        n={18}
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

      <Slide n={19} id="cfo" title="How the CFO is looped in">
        <p>
          &quot;A human signs off&quot; is not a design until it names the
          human, the artifact, and the deadline. Ours is the CFO, and this is
          the whole interface.
        </p>
        <p>
          <strong>One package on a schedule.</strong> Daily, silence — unless an
          exception needs a decision. Monthly, a close package: the assertions
          with their receipts, every exception with its source document, the
          proposed postings as a diff, and a numbered list of the decisions
          actually being asked for.
        </p>
        <p>
          <strong>Decision cards, not a dashboard.</strong> Each item is one
          question with the evidence attached, the number behind every option,
          and one line saying what happens if nobody answers. A dashboard
          invites looking; a card asks for a signature.
        </p>
        <p>
          <strong>Deadlines are the agent&apos;s problem to track.</strong>
          Filing and payment dates live in the same file as the assertions, so
          an unanswered item escalates on a schedule and then escalates again to
          the CEO. It never resolves itself by default, and a quiet deadline is
          a failure of the loop, not a decision.
        </p>
        <p>
          <strong>Separation of duties.</strong> The agent reads everything and
          writes the book. Money rails, adjustments to a closed period and the
          sign-off need the CFO&apos;s approval recorded against the exact
          change — so the audit trail holds the approval, not only the entry.
        </p>
        <p>
          <strong>Noise is a failure, so it is budgeted.</strong> If the person
          who signs gets a message a day, they will stop reading them. The daily
          message cap exists so that receiving one means something.
        </p>
        <p>
          <strong>They set the rules; the agent follows them.</strong>{" "}
          Materiality thresholds, which accounts may be posted unattended, how
          long an exception may live, who signs what — all of it lives in files
          the agent must read before it acts, and only finance may change them.
          The agent can propose a change to a rule. It cannot edit one.
        </p>
        <p className="text-muted">
          The honest limit: this loop is only as good as the attention behind
          it. The goal is that attention goes to ten decisions a month rather
          than a thousand lines — and that when the CFO is away, the loop keeps
          working and stops in exactly the right place.
        </p>
      </Slide>

      <Slide
        n={20}
        id="cost"
        title="What the finance function costs, before and after"
      >
        <p>
          These are our own invoices, not a vendor deck, and they are the only
          money on these slides. Every company&apos;s numbers are different; the
          shape of the change is what travels.
        </p>
        <pre className="overflow-x-auto rounded border border-card-border bg-card-2 p-4 text-[13px] leading-[1.6]">
          {`month     retainer billed   finance vendor cost   what it was
Jan 2026  $28.0K            -                     retainer
Feb       $34.0K            -                     retainer + add-on
Mar       $18.8K            -                     retainer
Apr       $21.5K            -                     retainer
May       $27.5K            -                     retainer + add-on
Jun       $20.6K            -                     retainer
Jul       $18.5K            -                     last retainer invoice
Aug       -                 $14.7K                transition invoice
Sep       -                 $6.7K                 hours for September
Oct       -                 $2.2K                 hours for October
Nov*      -                 $4.9K                 2025 federal filing
average   about $24.1K       about $7.9K           (Aug-Oct)
                                     intl accounting, Oct only: $15.2K`}
        </pre>
        <p>
          <strong>
            Down from about $24K a month to under $8K, and to $2.2K in the first
            clean month.
          </strong>{" "}
          October is 7.25 hours of a CFO&apos;s time at $290 an hour plus a $71
          payroll-platform fee. August is the transition invoice, when a wrapped
          relationship was still being unwound. What left with the retainer: the
          close, the journal entries, the filing coordination, the reviewer.
          What stayed: the work, the same assertions, and a named person who
          signs.
        </p>
        <p>
          <strong>Booked to the month the hours were worked,</strong> not the
          month the money left. September&apos;s invoice is dated October 1 and
          cleared October 29; October&apos;s is dated November 1 and had not
          cleared at the close. Both sit in the accrual, which is why these
          numbers are not the bank statement — and why a cash-only view of a
          finance function will always lie to you by a month.
        </p>
        <p>
          <strong>Two lines are not the run-rate.</strong> International
          accounting came to $15.2K in October, because a jurisdiction requires
          a local filing agent — that is the cost of a place, not of a person,
          and no amount of software removes it. And $4.4K of 2025 federal filing
          fees arrived in November, net of 2025 retainer credits; that is a year
          of compliance landing in one month.
        </p>
        <p>
          *A $19.9K draft in mid-October was a vendor billing error, reversed
          three days later. The ledger nets it to zero and the correction file
          says so by name, so that nobody reverses it twice.
        </p>
        <p>
          <strong>What the number does not show.</strong> The agent&apos;s own
          model spend is not zero. The review still costs a person hours — fewer
          of them, spent on decisions instead of data entry. And the risk did
          not disappear, it moved: we are now the ones who have to be right, so
          the control has to be a test rather than a relationship.
        </p>
        <p className="text-muted">
          Read as a savings story, that is the honest version: a third of the
          cost, nearly all of it now variable, and none of it safe unless the
          close is a set of assertions you can re-run. A retainer buys someone
          to blame; a pipeline buys a diff.
        </p>
      </Slide>

      <Slide n={21} id="costchart" title="The same line, drawn to scale">
        <Bars
          values={[
            28.0, 34.0, 18.8, 21.5, 27.5, 20.6, 18.5, 14.7, 6.7, 2.2, 4.9,
          ]}
          labels={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
          ]}
          format={(v) => `$${v.toFixed(1)}K`}
          opacities={[0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.65, 0.8, 0.95, 0.95]}
          valueLabels
        />
        <p>
          Seven faded bars of retainer, then four of hours. The eye does the
          arithmetic before the sentence does:{" "}
          <strong>
            $24.1K a month for seven months, $7.9K for the three after it, and
            $2.2K in the month that counts.
          </strong>
        </p>
        <p>
          October is the first clean month of the new shape — 7.25 hours of a
          CFO&apos;s time and a payroll-platform fee, with the close, the
          reconciliations and the reporting done by the pipeline on these
          slides. The November bar is eight days old and mostly one annual
          filing, which is why it sits above October rather than below it.
        </p>
        <p className="text-muted">
          Same source as the table: the GL at cutover for January–July, the live
          ledger for August onward, booked to the month the hours were worked.
        </p>
      </Slide>

      <Slide
        n={22}
        id="revenue"
        title="Revenue over time, straight from the ledger"
      >
        <p>
          Nothing on this chart was typed into this page. It is rendered from
          the same double-entry ledger the loops maintain: the twelve most
          recent months, each one a month the close actually ran and a person
          signed.
        </p>
        <Bars
          values={[
            1459911, 1363596, 1544444, 2112595, 1494309, 1420716, 1439660,
            1378376, 1451539, 1526687, 1400078, 1442271,
          ]}
          labels={[
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ]}
          format={(v) =>
            v >= 1e6 ? `$${(v / 1e6).toFixed(1)}M` : `$${Math.round(v / 1e3)}K`
          }
        />
        <p>
          Last twelve months: <strong>$18.03M</strong>. February is a single
          spike; the rest of the band sits between about $1.36M and $1.53M a
          month, which is the shape you want from a business whose finance
          function you are about to make boring.
        </p>
        <p>
          A revenue chart is only as good as the close behind it. This one can
          be regenerated from the ledger by a script and it changes only when
          the books change — if the chart and the ledger ever disagree, the
          chart is the thing that is wrong.
        </p>
        <p className="text-muted">
          Note the shape as much as the number: flat revenue and a finance
          function that got cheaper is the interesting part, and neither is
          visible on a dashboard that only shows the total.
        </p>
      </Slide>

      <Slide n={23} id="checkin" title="The check-in screen">
        <div className="rounded border border-card-border bg-card-2 p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/home-dashboard.png"
            alt="The home dashboard: a needs-attention card, a revenue row from the books, and a queues card where zeros are healthy."
            className="mx-auto w-full max-w-[340px] rounded"
          />
        </div>
        <p>
          That is the whole dashboard. One static page, regenerated by a script,
          opened on a phone. It is built on a single rule:{" "}
          <strong>a healthy company reads as zeros.</strong> Empty queues, no
          open pull requests. Zeros are the good news, so any number that is not
          zero is the signal, and nobody has to remember yesterday&apos;s value
          to know whether today is fine.
        </p>
        <p>
          The money rows are the deliberate exception: they sit at the top and
          they are large, because those are the numbers worth reading twice. The
          label says &quot;from the books&quot; only when the figure came from
          the closed ledger — not from a processor feed, not an estimate.
        </p>
        <p>
          Every tile is a count of something with a definition and a query
          behind it. Nothing on the screen is a vibe, which is why it can be
          trusted to say &quot;zero&quot; and mean it.
        </p>
        <p className="text-muted">
          Screenshot is the live page from this morning: 8 open support threads
          with 5 past the eight-hour line, and 29 open issues with 24 past it —
          so the top of the screen reads 29, not zero. A dashboard that was
          always green would be a dashboard nobody needed.
        </p>
      </Slide>

      <Slide n={24} id="emits" title="What it emits: alerts and issues">
        <p>
          Two things leave the loops — messages and work items — and both are
          countable, which is what makes the whole system auditable from
          outside. Issues opened by the agent, per month:
        </p>
        <Bars
          values={[62, 29, 106, 346, 891, 701, 806, 931, 237]}
          labels={[
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov*",
          ]}
          format={(v) => `${Math.round(v)}`}
        />
        <p>
          Sixty-two in March, nine hundred and thirty-one in October. The work
          did not grow that fast; the throughput of noticing did. An issue is
          the right output for an agent because it is the same object a person
          uses: it has an owner, a state, a deadline and a public history.
        </p>
        <p>
          Messages go to Telegram, and they are metered: about 1,500 in October
          across seven threads, a median of seven a day in a thread. Every
          message carries the name of the loop that sent it, so a loop that
          talks too much shows up in the ledger and gets fixed or retired.
        </p>
        <p className="text-muted">
          The rule that keeps a channel readable: the loops speak when a number
          is not zero, not when a clock says it is time. Silence is the default
          and it has to keep meaning &quot;nothing happened.&quot; *November is
          eight days.
        </p>
      </Slide>

      <Slide n={25} id="start" title="If you start on Monday">
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

      <Slide n={26} id="rule" title="The one rule">
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
