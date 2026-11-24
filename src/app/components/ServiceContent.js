import Link from "next/link";

export default function ServiceContent() {
  return (
    <section className="iz-root iz-soft">
      <div className="iz-container iz-section">
        <div className="iz-split iz-split--reverse">
          <div className="iz-split__copy iz-reveal">
            <span className="iz-eyebrow">Our mission</span>
            <h2>
              Precision <em>digitizing and vectorizing</em> for global brands
            </h2>
            <p>
              We are a dedicated team providing specialized services like professional embroidery digitizing and vector art
              conversion. With 10+ years of experience, we guarantee pixel-perfect results and durable patches, making your vision
              ready for print and embroidery.
            </p>
            <p>
              We understand the unique demands of the apparel industry and ensure all files DST, EXP, AI, or EPS are delivered with
              exceptional clarity and fast turnaround. From complex logo digitizing to creating custom patches for your brand, Inizio
              Solutions is committed to quality that lasts.
            </p>
            <div className="iz-split__actions">
              <Link href="/place-an-order" className="iz-btn iz-btn--ink">Get a free quote</Link>
              <Link href="/pricing" className="iz-link">See pricing →</Link>
            </div>
          </div>
          <div className="iz-split__media iz-reveal" style={{ "--d": 1 }}>
            <img src="/assets/images/portfolio/service-img.png" alt="Embroidery digitizing and vector art services by Inizio Solutions" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
