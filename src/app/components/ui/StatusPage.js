import Link from "next/link";
import HeroBackdrop from "./HeroBackdrop";

/** Centered status page (coming soon, 404, thank you). */
export default function StatusPage({ icon, code, title, highlight, children, actions }) {
  return (
    <section className="iz-root iz-hero iz-phero iz-status">
      <HeroBackdrop />
      <div className="iz-container iz-phero__inner">
        <div className="iz-hero__copy">
          {code ? <span className="iz-status__code">{code}</span> : icon ? <span className="iz-status__icon" aria-hidden="true">{icon}</span> : null}
          <h1>
            {title} {highlight ? <mark>{highlight}</mark> : null}
          </h1>
          {children ? <p className="iz-hero__lead">{children}</p> : null}
          <div className="iz-status__actions">
            {actions || (
              <>
                <Link href="/" className="iz-btn iz-btn--ink">Explore our website</Link>
                <Link href="/place-an-order" className="iz-btn iz-btn--outline">Place an order</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
