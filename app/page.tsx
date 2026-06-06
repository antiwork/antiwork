import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antiwork — We automated ourselves out of the work.",
  description:
    "Gumroad runs support, fraud & risk, engineering, and finance through a single AI agent on a 6-person team. The software is free. The only thing we sell is how we did it.",
};

const css = `
  :root{
    --bg:#0a0a0f;--panel:#13131c;--panel2:#191924;--ink:#f4f4f8;--mut:#9a9ab0;
    --line:#262633;--pink:#ff90e8;--pink2:#ff6fdf;--grn:#3ddc84;--blu:#6fa8ff;--amb:#ffc14d;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{background:var(--bg);color:var(--ink);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;line-height:1.55}
  .wrap{max-width:1080px;margin:0 auto;padding:0 24px}
  a{color:inherit}
  nav{position:sticky;top:0;z-index:50;background:rgba(10,10,15,.82);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
  nav .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
  .brand{font-weight:800;letter-spacing:-.01em;font-size:18px}
  .brand .dot{color:var(--pink)}
  .nav-cta{font-size:14px;font-weight:700;background:var(--pink);color:#0a0a0f;padding:9px 16px;border-radius:999px;text-decoration:none;transition:.15s}
  .nav-cta:hover{background:var(--pink2)}
  .nav-links{display:flex;gap:26px;align-items:center;font-size:14px;color:var(--mut)}
  .nav-links a{text-decoration:none}
  @media(max-width:720px){.nav-links a:not(.nav-cta){display:none}}
  .hero{padding:96px 0 72px;text-align:center;position:relative;overflow:hidden}
  .glow{position:absolute;width:680px;height:680px;border-radius:50%;filter:blur(140px);opacity:.14;background:var(--pink);top:-260px;left:50%;transform:translateX(-50%);z-index:-1}
  .eyebrow{display:inline-block;font-size:12.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--pink);font-weight:700;border:1px solid #3a2740;background:var(--panel2);padding:7px 15px;border-radius:999px;margin-bottom:28px}
  h1{font-size:clamp(42px,7.5vw,88px);line-height:1.0;font-weight:800;letter-spacing:-.03em}
  h1 .grad{background:linear-gradient(120deg,var(--pink),#ff6fdf 60%,var(--amb));-webkit-background-clip:text;background-clip:text;color:transparent}
  .sub{font-size:clamp(18px,2.3vw,23px);color:var(--mut);max-width:680px;margin:28px auto 0;font-weight:400}
  .hero-ctas{display:flex;gap:14px;justify-content:center;margin-top:40px;flex-wrap:wrap}
  .btn{font-size:16px;font-weight:700;padding:15px 28px;border-radius:999px;text-decoration:none;transition:.15s;display:inline-flex;align-items:center;gap:9px}
  .btn-primary{background:var(--pink);color:#0a0a0f}
  .btn-primary:hover{background:var(--pink2);transform:translateY(-1px)}
  .btn-ghost{background:var(--panel);color:var(--ink);border:1px solid var(--line)}
  .btn-ghost:hover{border-color:var(--pink);background:var(--panel2)}
  .hero-note{font-size:13.5px;color:#62627a;margin-top:18px}
  .premise{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--panel);padding:54px 0}
  .premise .wrap{display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center}
  @media(max-width:760px){.premise .wrap{grid-template-columns:1fr;gap:22px}}
  .premise h2{font-size:clamp(24px,3.4vw,34px);font-weight:800;letter-spacing:-.02em;line-height:1.12}
  .premise p{color:var(--mut);font-size:17px;margin-top:14px}
  .premise .free{display:inline-block;margin-top:16px;font-size:14px;font-weight:700;color:var(--grn);border:1px solid #244031;background:#0e1a13;padding:8px 14px;border-radius:999px}
  .section{padding:74px 0}
  .section-head{text-align:center;margin-bottom:44px}
  .section-head .k{font-size:12.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--pink);font-weight:700}
  .section-head h2{font-size:clamp(28px,4vw,44px);font-weight:800;letter-spacing:-.02em;margin-top:12px}
  .section-head p{color:var(--mut);font-size:17px;max-width:620px;margin:14px auto 0}
  .grid{display:grid;gap:16px}
  .g4{grid-template-columns:repeat(4,1fr)}
  .g3{grid-template-columns:repeat(3,1fr)}
  @media(max-width:880px){.g4,.g3{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:520px){.g4,.g3{grid-template-columns:1fr}}
  .card{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:26px 22px}
  .stat{font-size:clamp(32px,4.4vw,46px);font-weight:800;letter-spacing:-.02em;line-height:1}
  .stat.p{color:var(--pink)}.stat.g{color:var(--grn)}.stat.b{color:var(--blu)}.stat.a{color:var(--amb)}
  .stat small{font-size:.42em;font-weight:700;color:var(--mut)}
  .clbl{font-size:14.5px;color:var(--mut);margin-top:12px}
  .csub{font-size:13px;color:#6b6b80;margin-top:5px}
  .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
  @media(max-width:760px){.steps{grid-template-columns:1fr}}
  .step{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:28px 24px;position:relative}
  .step .n{font-size:13px;font-weight:800;color:var(--pink);letter-spacing:.1em}
  .step h3{font-size:20px;font-weight:800;margin:12px 0 8px;letter-spacing:-.01em}
  .step p{color:var(--mut);font-size:15.5px}
  .step .price{font-size:15px;font-weight:800;color:var(--amb);margin-top:12px}
  .offer{background:linear-gradient(160deg,#1c1426,#13131c);border:1px solid #3a2740;border-radius:24px;padding:56px 40px;text-align:center;margin-top:20px}
  .offer h2{font-size:clamp(28px,4vw,46px);font-weight:800;letter-spacing:-.02em;line-height:1.08}
  .offer .price-line{font-size:clamp(20px,3vw,26px);color:var(--ink);margin-top:18px;font-weight:600}
  .offer .price-line b{color:var(--pink)}
  .offer p{color:var(--mut);font-size:16px;max-width:560px;margin:14px auto 0}
  .offer .btn{margin-top:30px}
  footer{border-top:1px solid var(--line);padding:44px 0;color:#62627a;font-size:14px}
  footer .wrap{display:flex;justify-content:space-between;flex-wrap:wrap;gap:16px;align-items:center}
  footer .tag{font-style:italic;color:var(--mut)}
  .openbadge{display:inline-flex;gap:8px;align-items:center;font-size:13px;color:var(--mut);border:1px solid var(--line);border-radius:999px;padding:6px 13px}
`;

const BOOK_URL = "https://gumclaw.gumroad.com/l/gzhptn";

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav>
        <div className="wrap">
          <div className="brand">
            Antiwork<span className="dot">.</span>
          </div>
          <div className="nav-links">
            <a href="#proof">Proof</a>
            <a href="#how">How it works</a>
            <a href="#stack">The stack</a>
            <a className="nav-cta" href={BOOK_URL}>
              Book the call
            </a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="glow" />
        <div className="wrap">
          <span className="eyebrow">Gumroad · runs on one AI agent</span>
          <h1>
            We automated ourselves
            <br />
            out of the <span className="grad">work.</span>
          </h1>
          <p className="sub">
            Gumroad runs support, fraud &amp; risk, engineering, and finance
            through a single AI agent on a 6-person team. The software that does
            it is free. The only thing we sell is how we did it.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href={BOOK_URL}>
              Book a $10K call →
            </a>
            <a className="btn btn-ghost" href="#how">
              Take the software, free
            </a>
          </div>
          <p className="hero-note">
            Open-source agent stack · no platform fee · no lock-in
          </p>
        </div>
      </header>

      <section className="premise">
        <div className="wrap">
          <div>
            <h2>
              The software is free.
              <br />
              The knowledge isn&apos;t.
            </h2>
            <p>
              Everything Gumroad&apos;s agent runs on — OpenClaw, Hermes, the
              entire skill library — is open-source. Download it, run it, owe us
              nothing. We want you to.
            </p>
            <span className="free">↓ Free &amp; open-source</span>
          </div>
          <div>
            <h2>So what do you actually sell?</h2>
            <p>
              The year of operating knowledge that makes a free framework run a
              real company without falling over. What to automate first, what to
              keep human, where an agent earns trust. That&apos;s the call —
              $10,000, with the people who built it.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="proof">
        <div className="wrap">
          <div className="section-head">
            <div className="k">The proof</div>
            <h2>A 6-person team plus one agent.</h2>
            <p>
              Every number is real and from production — the reason a call is
              worth booking.
            </p>
          </div>
          <div className="g4 grid">
            <div className="card">
              <div className="stat p">
                ~98.5<small>%</small>
              </div>
              <div className="clbl">Support tickets auto-resolved</div>
              <div className="csub">
                median human resolution 17.3 days → 51 min
              </div>
            </div>
            <div className="card">
              <div className="stat g">
                ~99<small>%</small>
              </div>
              <div className="clbl">Fraud/risk standard cases autonomous</div>
              <div className="csub">
                suspend &amp; reinstate, no human in loop
              </div>
            </div>
            <div className="card">
              <div className="stat b">
                ~0.5<small>hr</small>
              </div>
              <div className="clbl">Idea → shipped cycle time</div>
              <div className="csub">
                down from a ~99h peak; all-time-high throughput
              </div>
            </div>
            <div className="card">
              <div className="stat a">82×</div>
              <div className="clbl">Revenue per employee</div>
              <div className="csub">$46K (2014) → $3.8M (2026)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="how" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="k">How it works</div>
            <h2>Take the software. Book the call if you want the shortcut.</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="n">01</div>
              <h3>Take the software</h3>
              <p>
                OpenClaw, Hermes, and the architecture are open and downloadable
                today. Stand up your own agent without paying us a cent.
              </p>
              <div className="price" style={{ color: "var(--grn)" }}>
                Free
              </div>
            </div>
            <div className="step">
              <div className="n">02</div>
              <h3>Book the call</h3>
              <p>
                90 minutes with the people who built and run it. Your stack,
                your bottleneck, what to automate first — and the mistakes to
                skip.
              </p>
              <div className="price">$10,000 · book one or several</div>
            </div>
            <div className="step">
              <div className="n">03</div>
              <h3>Run it yourself</h3>
              <p>
                You own the deployment, on your infrastructure. Book another
                call if it&apos;s worth it. No retainer, no lock-in, no SOW.
              </p>
              <div className="price" style={{ color: "var(--blu)" }}>
                Your infra, your call
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="stack" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="k">The stack</div>
            <h2>Not a model. An operating system for an agent.</h2>
            <p>
              Open-source runtimes, judgment codified as versioned skills, the
              company&apos;s own APIs as the agent&apos;s hands.
            </p>
          </div>
          <div className="g3 grid">
            <div className="card">
              <div className="stat" style={{ fontSize: 30 }}>
                1,225
              </div>
              <div className="clbl">Codified skills</div>
              <div className="csub">
                runbooks with triggers, commands, verification
              </div>
            </div>
            <div className="card">
              <div className="stat" style={{ fontSize: 30 }}>
                49
              </div>
              <div className="clbl">Autonomous cron jobs</div>
              <div className="csub">
                support, risk, eng review, finance — on a schedule
              </div>
            </div>
            <div className="card">
              <div className="stat" style={{ fontSize: 30 }}>
                377K★
              </div>
              <div className="clbl">OpenClaw + Hermes runtimes</div>
              <div className="csub">free, swappable, no vendor lock-in</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="offer">
            <h2>
              How we built a company
              <br />
              that runs itself.
            </h2>
            <div className="price-line">
              <b>$10,000.</b> One call. Book several at today&apos;s price if
              you want — it may go up later, or not.
            </div>
            <p>
              The frameworks are free. The shortcut is ten grand — 90 minutes
              with the team that automated Gumroad. Whatever you book now is
              locked in.
            </p>
            <a className="btn btn-primary" href={BOOK_URL}>
              Book the call →
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="tag">
            We automated ourselves out of the work. The software&apos;s on us —
            the shortcut is ten grand.
          </div>
          <span className="openbadge">
            🦞 Built on OpenClaw + Hermes · open-source
          </span>
        </div>
      </footer>
    </>
  );
}
