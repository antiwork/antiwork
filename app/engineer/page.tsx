import type { Metadata } from "next";
import Link from "next/link";
import { Font } from "@/app/components/Font";

export const metadata: Metadata = {
  title: "Antiwork — How we engineer",
  description:
    "One agent writes most of our code. These are the rules it works under: two landing paths, an adversarial review panel, evidence instead of description.",
};

export default function Engineer() {
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

      <p className="mt-8 text-[20px] text-fg">How we engineer.</p>

      <p className="mt-8 text-[20px] text-fg">
        One agent writes most of our code. These are the rules it works under.
      </p>

      <nav className="mt-4 flex flex-wrap gap-2">
        {[
          ["Landing paths", "paths"],
          ["Review", "review"],
          ["Evidence", "evidence"],
          ["Writing", "writing"],
          ["Ownership", "ownership"],
          ["Definition of done", "done"],
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

      <p className="mt-14">
        An agent can write code faster than a person can read it. That single
        fact decides everything below. Our rules are not about making the agent
        slower; they are about keeping the output reviewable, so a human never
        has to trust a diff they have not seen.
      </p>

      <p
        id="paths"
        className="mt-14 scroll-mt-6 text-[13px] uppercase tracking-[0.18em] text-muted"
      >
        Two landing paths
      </p>

      <p className="mt-5">
        Not every change deserves a pull request, and no change deserves to skip
        review. So a change is classified before a line is written.
      </p>

      <p className="mt-6">
        <strong>Features and money go through a PR</strong> — anything a
        customer can see behaving differently, and anything touching payments,
        payouts, refunds, pricing, migrations. These get a draft PR early, a
        review panel, QA evidence, and a human decision where one is owed.
      </p>

      <p className="mt-6">
        <strong>Everything else goes straight to main</strong> — copy, styles,
        metadata, a small controller or config fix — once the specs for the
        touched files pass locally. A one-line fix should not wait behind a
        review ceremony, and a payment path should never borrow that shortcut.
      </p>

      <p className="mt-6">
        Before either, check whether someone already did it. Two lanes working
        the same ticket is not throughput; it is a merge conflict and a wasted
        hour.
      </p>

      <p
        id="review"
        className="mt-14 scroll-mt-6 text-[13px] uppercase tracking-[0.18em] text-muted"
      >
        Review
      </p>

      <p className="mt-5">
        There are two reviews, and they are not the same gate.
      </p>

      <p className="mt-6">
        <strong>While building</strong>, the agent runs an adversarial review on
        its own diff, the way you re-run tests after writing one. Fast, cheap,
        repeatable, and not a merge gate.
      </p>

      <p className="mt-6">
        <strong>Before a pull request is presented to a human</strong>, a panel
        of two frontier models from different labs reviews it at the exact
        commit that will be merged. The verdict is pinned to the commit hash, so
        any later push invalidates it and the panel runs again. One model is not
        a gate: two reviewers given the same diff can agree on every technical
        check and still disagree on a process obligation, and a single reviewer
        grades the code while missing the standard.
      </p>

      <p className="mt-6">
        A finding is a claim, not a fact. The first time we ran a panel, two of
        three findings were reviewer error — a real defect described against the
        wrong code path. Verify each one against the repo before changing
        anything, and say so in the thread when the reviewer is wrong.
      </p>

      <p
        id="evidence"
        className="mt-14 scroll-mt-6 text-[13px] uppercase tracking-[0.18em] text-muted"
      >
        Evidence, not description
      </p>

      <p className="mt-5">
        If a change has a surface a person can see, we render it for real and
        capture it while building — the mailer rendered against real data, the
        endpoint returning a real body, the page loaded in a browser — before
        moving to the next piece of the diff. A description of what the UI
        should look like is not evidence, and neither is a screenshot of a
        prototype that never touches the real code.
      </p>

      <p className="mt-6">
        <strong>Merged is not live.</strong> A merged pull request is a claim
        about a branch. Deployment is a separate fact with its own lag, so we
        read the deployed revision off a live response and grep the served page
        for the new behaviour. Until that readback matches, the work is not done
        — and a green test suite says nothing about it either way.
      </p>

      <p
        id="writing"
        className="mt-14 scroll-mt-6 text-[13px] uppercase tracking-[0.18em] text-muted"
      >
        Writing
      </p>

      <p className="mt-5">
        Comments are for people who already know this codebase. Keep the
        non-obvious why, the ordering constraint, the trap that will bite the
        next editor. Delete the rest: restating the line below, narrating your
        reasoning, the history of the company, the story of the bug.
      </p>

      <p className="mt-6">
        Roughly three lines. If it is longer, ask what you would cut. The same
        rule runs the other way too: a reviewer bot scores comment length
        mechanically, so an over-long comment comes back as a finding even when
        it is correct. And in a public repo a comment must never carry the
        incident that produced the fix, an internal ticket number, or a customer
        identifier — the mechanism is the useful part, not the provenance.
      </p>

      <p className="mt-6">
        Slop is not only prose. A defensive rescue around something that cannot
        fail, a config knob with one caller, a single-use wrapper, a test
        asserting the framework works — if you cannot name the caller, delete
        it.
      </p>

      <p
        id="ownership"
        className="mt-14 scroll-mt-6 text-[13px] uppercase tracking-[0.18em] text-muted"
      >
        Ownership
      </p>

      <p className="mt-5">
        Whoever picks up a piece of work assigns themselves and marks it in
        progress. That marker is a promise: if work is parked, something live
        must be watching it — CI, a reviewer, a scheduled check — or it is not
        parked, it is abandoned, and it should say so.
      </p>

      <p className="mt-6">
        To get someone&apos;s attention you <strong>add</strong> a person to a
        task. You never remove one to notify them, and a human closing or
        redirecting a PR is steering, not a handoff to be taken back. Handoffs
        happen on the issue or the pull request, where they are readable later.
        Never in chat.
      </p>

      <p
        id="done"
        className="mt-14 scroll-mt-6 text-[13px] uppercase tracking-[0.18em] text-muted"
      >
        Definition of done
      </p>

      <p className="mt-5">
        A feature is done when the code is reviewed, the evidence is real, and
        the announcement exists: the mail draft and the social drafts are
        written before the merge, because a feature nobody hears about is not
        shipped. Sending waits for the deploy — announcing something a customer
        cannot use yet is worse than announcing it late — and the send itself
        sits behind a human approval.
      </p>

      <p className="mt-6">
        A bug fix is never announced. Neither is a dependency bump, a metadata
        change, or an internal tool. Those skip marketing with one written
        reason, not a silent omission.
      </p>

      <p className="mt-6">
        After merging, read the main branch&apos;s CI within ten minutes. A
        branch can be green on the partial suite it ran and still break main
        once the rest of the suite sees it — and the person who merged is the
        one best placed to notice.
      </p>

      <p className="mt-14 text-[20px] text-fg">
        The rules are not the interesting part. The interesting part is that
        they are enforced by machines, so nobody has to remember them — and the
        ones that matter were written the day something broke without them.
      </p>

      <p className="mt-10 text-muted">
        Questions about any of this are welcome in the open. We publish what we
        learn rather than what we sell.
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
