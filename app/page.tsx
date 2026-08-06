import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL = "#download";

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand ${inverse ? "brand--inverse" : ""}`} aria-label="Still home">
      <span className="brand__mark" aria-hidden="true">
        <span className="brand__eyes" />
        <span className="brand__smile" />
      </span>
      <span className="brand__word">still<span>.</span></span>
    </span>
  );
}

function AppStoreButton({ light = false }: { light?: boolean }) {
  return (
    <a className={`store-button ${light ? "store-button--light" : ""}`} href={APP_STORE_URL} aria-label="Get Still for iPhone">
      <span className="store-button__apple" aria-hidden="true">●</span>
      <span><small>Launching first on</small><strong>the App Store</strong></span>
      <span className="store-button__arrow" aria-hidden="true">↗</span>
    </a>
  );
}

const features = [
  {
    number: "01",
    title: "A plan built around your real pattern",
    copy: "Still learns your triggers, reasons, baseline and goal—then turns them into a focused daily system.",
    tone: "lime",
    glyph: "◎",
  },
  {
    number: "02",
    title: "Support when an urge is happening",
    copy: "Open a two-minute guided reset, slow the decision down and reconnect with the reason you started.",
    tone: "ink",
    glyph: "↯",
  },
  {
    number: "03",
    title: "Progress you can actually feel",
    copy: "See clear days, money saved, drinks skipped, milestones and your evolving Clear Sky in one place.",
    tone: "blue",
    glyph: "↗",
  },
  {
    number: "04",
    title: "Private by default",
    copy: "Your plan, check-ins and reflections stay on your iPhone. Still has no advertising trackers and sells no recovery data.",
    tone: "paper",
    glyph: "⌾",
  },
];

const faqs = [
  ["Is Still a medical treatment?", "No. Still is a wellness and behavior-change tool, not medical care, diagnosis, detox or treatment. Alcohol withdrawal can be dangerous; people who may be physically dependent should seek medical guidance before stopping suddenly."],
  ["Does Still send my recovery data anywhere?", "The iOS launch version stores your recovery plan, journal and check-ins locally on your device using iOS file protection. It does not include ad trackers or third-party analytics SDKs."],
  ["Can I use Still to cut back instead of quit?", "Yes. During onboarding you can choose to quit, take a clear break or regain control. Still adapts the language of your plan to the goal you choose."],
  ["When is Android coming?", "We are launching on iPhone first so we can make the core experience exceptional. Google Play is the next platform on the roadmap."],
  ["What happens if I have a lapse?", "Still treats a lapse as information, not the erasure of your progress. You can record what happened, reset the current streak and keep the lessons and history you already built."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <Link className="nav__brand" href="/"><Brand /></Link>
        <div className="nav__links">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#safety">Safety</a>
          <Link href="/support">Support</Link>
        </div>
        <a className="nav__download" href={APP_STORE_URL}>Get Still <span>↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <div>
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#safety">Safety</a>
            <Link href="/support">Support</Link>
          </div>
        </details>
      </nav>

      <section className="hero shell">
        <div className="hero__copy">
          <p className="pill"><span /> Private on your iPhone</p>
          <h1>Quit drinking.<br /><em>Keep becoming you.</em></h1>
          <p className="hero__lede">Still is the calm, private system for breaking the drinking cycle—one urge, one decision and one clear day at a time.</p>
          <div className="hero__actions">
            <AppStoreButton />
            <a className="text-link" href="#how">See how it works <span>↓</span></a>
          </div>
          <p className="platform-note"><strong>iOS first.</strong> Google Play comes next.</p>
        </div>

        <div className="phone-stage" aria-label="Still iPhone app screens">
          <div className="orbit orbit--one" />
          <div className="orbit orbit--two" />
          <div className="phone phone--left">
            <Image src="/app/onboarding.png" alt="Still personalized onboarding on iPhone" fill sizes="(max-width: 800px) 38vw, 250px" priority unoptimized />
          </div>
          <div className="phone phone--right">
            <Image src="/app/paywall.png" alt="Still recovery plan on iPhone" fill sizes="(max-width: 800px) 38vw, 250px" priority unoptimized />
          </div>
          <div className="phone phone--center">
            <Image src="/app/dashboard.png" alt="Still clear-day dashboard on iPhone" fill sizes="(max-width: 800px) 52vw, 310px" priority unoptimized />
          </div>
          <span className="stage-note stage-note--top">the next decision</span>
          <span className="stage-note stage-note--bottom">then the next</span>
        </div>
      </section>

      <section className="proof-bar" aria-label="Still product principles">
        <div className="shell proof-bar__inner">
          <span>PERSONALIZED PLAN</span><i />
          <span>2-MINUTE URGE RESET</span><i />
          <span>PRIVATE BY DEFAULT</span><i />
          <span>BUILT FOR IPHONE</span>
        </div>
      </section>

      <section className="manifesto shell" id="how">
        <p className="section-kicker">THE STILL METHOD</p>
        <h2>You do not have to win forever.<br />You only have to win <em>the next decision.</em></h2>
        <p>Still turns a huge life change into a sequence of small, visible actions. Start with your real pattern, prepare for the hard moments and let progress compound.</p>
        <div className="method-grid">
          <article><span>1</span><h3>Tell the truth</h3><p>Map the triggers, costs and reasons that are already shaping your choices.</p></article>
          <article><span>2</span><h3>Interrupt the urge</h3><p>Use a short guided tool before the automatic decision takes over.</p></article>
          <article><span>3</span><h3>Keep the proof</h3><p>Watch your streak, savings and clear-day history become evidence of change.</p></article>
        </div>
      </section>

      <section className="product-showcase" id="features">
        <div className="shell product-showcase__grid">
          <div className="showcase-phone">
            <div className="phone phone--feature">
              <Image src="/app/dashboard.png" alt="Still dashboard showing a 12 day current streak" fill sizes="(max-width: 800px) 70vw, 360px" unoptimized />
            </div>
            <span className="clear-stamp"><strong>12</strong> clear days</span>
          </div>
          <div className="showcase-copy">
            <p className="section-kicker section-kicker--light">YOUR RECOVERY, VISIBLE</p>
            <h2>See the life you are getting back.</h2>
            <p>Every clear day changes the dashboard. Your streak grows, your Clear Sky evolves, and the money and time you are reclaiming stop feeling abstract.</p>
            <ul>
              <li><span>✓</span> Live streak and milestone tracking</li>
              <li><span>✓</span> Daily mood, urge and trigger check-ins</li>
              <li><span>✓</span> Savings and drinks-skipped estimates</li>
              <li><span>✓</span> A lapse never deletes your history</li>
            </ul>
            <AppStoreButton light />
          </div>
        </div>
      </section>

      <section className="features shell">
        <div className="features__heading">
          <div><p className="section-kicker">EVERYTHING IN ONE PLACE</p><h2>A complete system for your next clear day.</h2></div>
          <p>No noisy feeds. No public profile. Just the tools that matter before, during and after a difficult moment.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className={`feature-card feature-card--${feature.tone}`} key={feature.number}>
              <div><span className="feature-card__number">{feature.number}</span><span className="feature-card__glyph" aria-hidden="true">{feature.glyph}</span></div>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="safety shell" id="safety">
        <div className="safety__mark" aria-hidden="true">+</div>
        <div>
          <p className="section-kicker">START SAFELY</p>
          <h2>Stopping suddenly can be unsafe for some people.</h2>
          <p>If you drink heavily most days, have had withdrawal symptoms, or may be physically dependent, speak with a healthcare professional before stopping. Severe confusion, hallucinations or seizures are emergencies—call emergency services.</p>
        </div>
        <Link className="safety__link" href="/support">Open safety resources <span>↗</span></Link>
      </section>

      <section className="founder shell">
        <div className="founder__art" aria-hidden="true"><span /><i /><b>still</b></div>
        <div>
          <p className="section-kicker">WHY STILL EXISTS</p>
          <h2>Built for the quiet moment when you decide what happens next.</h2>
          <p>Still is an independent, iOS-first company built around a simple belief: support should feel human, recovery data should stay private, and a hard day should never erase the progress that came before it.</p>
          <p className="founder__signature"><strong>Sanjit Rajendiran</strong><span>Founder &amp; CEO, Still</span></p>
        </div>
      </section>

      <section className="faq shell">
        <div className="faq__heading"><p className="section-kicker">QUESTIONS, ANSWERED</p><h2>Before you begin.</h2></div>
        <div className="faq__list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>{question}</span><i>+</i></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="download" id="download">
        <div className="download__orb orb--a" /><div className="download__orb orb--b" />
        <div className="download__content shell">
          <Image className="download__icon" src="/app/icon.png" alt="Still app icon" width={94} height={94} unoptimized />
          <p className="section-kicker section-kicker--light">YOUR CLEAR WAY FORWARD</p>
          <h2>Tomorrow starts<br />with <em>today.</em></h2>
          <p>Still is launching first on iPhone. The App Store button will activate the moment the first release is live.</p>
          <AppStoreButton light />
          <span className="download__note">For adults 18+ · Wellness support, not medical care</span>
        </div>
      </section>

      <footer>
        <div className="shell footer__top">
          <div><Brand inverse /><p>A private companion for changing your relationship with alcohol.</p></div>
          <div><strong>Product</strong><a href="#how">How it works</a><a href="#features">Features</a><a href="#safety">Safety</a></div>
          <div><strong>Company</strong><a href="#download">Download</a><Link href="/support">Support</Link><span>Android—later</span></div>
          <div><strong>Legal</strong><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </div>
        <div className="shell footer__bottom"><span>© 2026 Still. Founded by Sanjit Rajendiran.</span><span>Made for the next clear day.</span></div>
      </footer>
    </main>
  );
}
