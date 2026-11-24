import Link from "next/link";

// Text + image section for city pages. Props kept from the old design.
export default function ContentFour({ heading, headingone, para }) {
  return (
    <section className="iz-root iz-container iz-section">
      <div className="iz-split">
        <div className="iz-split__copy iz-reveal">
          <span className="iz-eyebrow">About Inizio Solutions</span>
          <h2>
            {heading} <em>{headingone}</em>
          </h2>
          <p>{para}</p>
          <div className="iz-split__actions">
            <Link href="/services/embroidery-digitizing" className="iz-btn iz-btn--ink">Read more</Link>
            <Link href="/place-an-order" className="iz-link">Place an order →</Link>
          </div>
        </div>
        <div className="iz-split__media iz-reveal" style={{ "--d": 1 }}>
          <img src="/assets/images/template/digitizing.jpg" alt={`Embroidery digitizing in ${headingone}`} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
