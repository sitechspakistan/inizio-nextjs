// Static (server-rendered) sections of the home page.
import Link from "next/link";
import { REVIEWS, TRUSTPILOT, initials } from "./reviewsData";
import BehanceBadge from "../ui/BehanceBadge";

function Stars() {
  return (
    <span className="iz-tp-stars" aria-hidden="true">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </span>
  );
}

/* ----------------------------------------------------------------------- */
const WHY = [
  { stat: "$0", title: "Free first order", body: "Test us on a real job before you spend a dollar. Your first order under 6,000 stitches is on us." },
  { stat: "24/7", title: "Unlimited free quotes", body: "Ask as often as you like. Customer satisfaction comes first." },
  { stat: "4–5h", title: "Fast turnaround", body: "Standard delivery in 4–5 hours, rush files in 3." },
  { stat: "10+", title: "Years of experience", body: "Skilled digitizers and artists who handle complex designs with ease." },
  { stat: "100%", title: "Quality guaranteed", body: "Meticulous detail and an expert team on every file." },
  { stat: "5", title: "Secure ways to pay", body: "PayPal, credit & debit cards, Apple Pay, AMEX and wire transfer." },
];

export function WhyUs() {
  return (
    <section className="iz-root iz-container iz-section iz-why">
      <div className="iz-section-head iz-reveal">
        <span className="iz-eyebrow">Why Inizio</span>
        <h2 className="iz-h2">Built for shops that can&apos;t afford a bad file.</h2>
      </div>
      <div className="iz-why__grid">
        {WHY.map((w, i) => (
          <div key={w.title} className="iz-why__card iz-reveal" style={{ "--d": i % 3 }}>
            <span>{w.stat}</span>
            <h3>{w.title}</h3>
            <p>{w.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
const PORTFOLIO = ["1.webp", "2.webp", "20.webp", "21.webp", "22.webp", "23.webp", "24.webp", "25.webp"];

export function HomePortfolio() {
  return (
    <section id="portfolio" className="iz-root iz-container iz-section iz-portfolio" style={{ paddingTop: 0 }}>
      <div className="iz-portfolio__head">
        <div className="iz-section-head iz-reveal">
          <span className="iz-eyebrow">Portfolio</span>
          <h2 className="iz-h2">Work we&apos;re proud to share.</h2>
        </div>
        <div className="iz-portfolio__actions">
          <Link className="iz-btn iz-btn--outline" href="/portfolio">View full portfolio →</Link>
          <BehanceBadge />
        </div>
      </div>
      <div className="iz-portfolio__grid">
        {PORTFOLIO.map((img, i) => (
          <figure key={img} className="iz-reveal" style={{ "--d": i % 4 }}>
            <img src={`/assets/images/portfolio/mix-img/${img}`} alt="Embroidery digitizing and vector art sample | Inizio Solutions" loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
export function Reviews() {
  return (
    <section id="reviews" className="iz-root iz-reviews">
      <div className="iz-container iz-section iz-reviews__inner">
        <div className="iz-reviews__head iz-reveal">
          <h2 className="iz-h2">Don&apos;t take our word for it. Take theirs.</h2>
          <a className="iz-reviews__score" href={TRUSTPILOT.url} target="_blank" rel="noopener noreferrer">
            <strong>{TRUSTPILOT.score}</strong>
            <span>
              <Stars />
              {TRUSTPILOT.label} · {TRUSTPILOT.count} reviews on Trustpilot
            </span>
          </a>
        </div>

        <div className="iz-reviews__grid">
          {REVIEWS.map((r, i) => (
            <figure key={r.name} className="iz-review iz-reveal" style={{ "--d": i % 3 }}>
              <Stars />
              <blockquote>“{r.quote}”</blockquote>
              <figcaption>
                <span className="iz-review__who">
                  <span className="iz-review__avatar" aria-hidden="true">{initials(r.name)}</span>
                  <span>
                    <strong>{r.name}</strong>
                    <small>{r.location}</small>
                  </span>
                </span>
                <a className="iz-review__src" href={r.url} target="_blank" rel="noopener noreferrer">
                  ★ Trustpilot
                </a>
              </figcaption>
            </figure>
          ))}
        </div>

        <a className="iz-btn iz-btn--teal iz-reviews__more" href={TRUSTPILOT.url} target="_blank" rel="noopener noreferrer">
          Read all {TRUSTPILOT.count} reviews on Trustpilot
        </a>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
export function Pricing() {
  return (
    <section id="pricing" className="iz-root iz-container iz-section iz-pricing">
      <div className="iz-section-head iz-reveal">
        <span className="iz-eyebrow">Pricing</span>
        <h2 className="iz-h2">Clear prices. First order free.</h2>
      </div>
      <div className="iz-pricing__grid">
        <div className="iz-price iz-reveal" style={{ "--d": 0 }}>
          <span className="iz-price__name">Embroidery Digitizing</span>
          <span className="iz-price__amount">
            $8<small> / design</small>
          </span>
          <span className="iz-price__desc">
            Left chest &amp; caps from $8, jacket back logos from $22. Priced by size and stitch count. Any machine format.
          </span>
          <a href="#quote" className="iz-btn iz-btn--outline">Get a quote</a>
        </div>
        <div className="iz-price iz-price--featured iz-reveal" style={{ "--d": 1 }}>
          <span className="iz-price__flag">NEW CUSTOMERS</span>
          <span className="iz-price__name">Your first order</span>
          <span className="iz-price__amount">$0</span>
          <span className="iz-price__desc">
            Free for designs under 6,000 stitches. Try us on a real job. We earn the second order with the first.
          </span>
          <a href="#quote" className="iz-btn iz-btn--teal">Claim free order</a>
        </div>
        <div className="iz-price iz-reveal" style={{ "--d": 2 }}>
          <span className="iz-price__name">Vector Art Conversion</span>
          <span className="iz-price__amount">
            $10<small> / design</small>
          </span>
          <span className="iz-price__desc">Priced by complexity. Simple text logos from $12. AI, EPS, SVG or PDF.</span>
          <a href="#quote" className="iz-btn iz-btn--outline">Get a quote</a>
        </div>
      </div>
      <p className="iz-pricing__foot">
        Need it faster or have a bigger job? <Link href="/pricing" className="iz-link">See full pricing →</Link>
      </p>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
export function CtaBand() {
  return (
    <section className="iz-root iz-cta">
      <div className="iz-cta__box iz-reveal">
        <div>
          <h2>Upload a logo. Stitch it out today.</h2>
          <p>4–5 hour delivery. Your first order is free.</p>
        </div>
        <a href="#quote" className="iz-btn iz-btn--ink">Upload your design →</a>
      </div>
    </section>
  );
}
