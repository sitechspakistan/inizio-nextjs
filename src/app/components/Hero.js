import Link from "next/link";
import PageHero from "./ui/PageHero";
import QuickQuote from "./ui/QuickQuote";
import { TRUSTPILOT } from "./home/reviewsData";

const BRANDS = ["01", "03", "04", "05", "06", "07", "09", "10"];

// City landing page hero. Props kept from the old design.
export default function Hero({ heading, headingone, paragraph }) {
  return (
    <PageHero
      crumb={<Link href="/cities">Cities</Link>}
      title={heading}
      highlight={headingone?.trim()}
      description={paragraph}
      aside={<QuickQuote />}
    >
      <a href={TRUSTPILOT.url} target="_blank" rel="noopener noreferrer" className="iz-tp-pill">
        <span className="iz-tp-stars" aria-hidden="true">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </span>
        <strong>{TRUSTPILOT.score}</strong>
        <span className="iz-muted">{TRUSTPILOT.label} on Trustpilot · {TRUSTPILOT.count} reviews</span>
      </a>
      <div className="iz-brands">
        <span className="iz-brands__label">Trusted by brands like</span>
        <div className="iz-brands__row">
          {BRANDS.map((b) => (
            <img key={b} src={`/assets/images/logo/${b}.webp`} alt="Client brand logo" loading="lazy" />
          ))}
        </div>
      </div>
    </PageHero>
  );
}
