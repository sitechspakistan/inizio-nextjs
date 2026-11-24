import Link from "next/link";
import HeroBackdrop from "./HeroBackdrop";

/**
 * Inner page hero: breadcrumb, H1 (with an optional highlighted part),
 * an optional description and an optional right-hand aside (e.g. a quote form).
 */
export default function PageHero({ crumb, title, highlight, description, aside, children, className = "" }) {
  return (
    <section className={`iz-root iz-hero iz-phero ${aside ? "" : "iz-phero--simple"} ${className}`}>
      <HeroBackdrop />
      <div className="iz-container iz-phero__inner">
        <div className="iz-hero__copy">
          {crumb && (
            <nav className="iz-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="iz-crumbs__sep" aria-hidden="true">/</span>
              <span>{crumb}</span>
            </nav>
          )}
          <h1>
            {title}
            {highlight ? (
              <>
                {" "}
                <mark>{highlight}</mark>
              </>
            ) : null}
          </h1>
          {aside && description ? <p className="iz-hero__lead">{description}</p> : null}
          {children}
        </div>
        {aside ? aside : description ? <p className="iz-phero__desc">{description}</p> : null}
      </div>
    </section>
  );
}
