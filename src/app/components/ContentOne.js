import Link from "next/link";

// Text + image section. Props kept from the old design.
export default function ContentOne({ subheading, headingone, headingtwo, headingthree, paraone, paratwo, imgpath }) {
  return (
    <section className="iz-root iz-container iz-section">
      <div className="iz-split">
        <div className="iz-split__copy iz-reveal">
          <span className="iz-eyebrow">{subheading}</span>
          <h2>
            {headingone} <em>{headingtwo}</em> {headingthree}
          </h2>
          <p>{paraone}</p>
          <p>{paratwo}</p>
          <div className="iz-split__actions">
            <Link href="/place-an-order" className="iz-btn iz-btn--ink">Place an order</Link>
            <Link href="/pricing" className="iz-link">See pricing →</Link>
          </div>
        </div>
        <div className="iz-split__media iz-reveal" style={{ "--d": 1 }}>
          <img src={imgpath} alt={`${headingone} ${headingtwo} by Inizio Solutions`} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
