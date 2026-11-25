"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const SERVICES = [
  {
    tab: "Embroidery Digitizing",
    title: "Embroidery digitizing that runs clean",
    body: "We convert your logos and designs into production-ready embroidery files with clean stitch flow and balanced density, set up for the garment you are sewing: caps, uniforms, jackets and more.",
    points: ["DST, PES & more", "Left chest & cap fronts", "Jacket backs", "Small lettering", "4–5 hr delivery", "3 hr rush"],
    cta: "Digitize my logo",
    href: "/services/embroidery-digitizing",
    media: [
      { src: "/assets/images/2.JPG", alt: "Blades N Fades logo digitized as an embroidery stitch file", caption: "On the machine", contain: true },
      { src: "/assets/images/1.jpeg", alt: "Beanies embroidered with the Blades N Fades logo by Inizio Solutions", caption: "Stitch-out" },
    ],
  },
  {
    tab: "Vector Art",
    title: "Vector art conversion, print-ready",
    body: "Any JPG or PNG redrawn as clean, scalable vector artwork. Ideal for screen printing, DTG, laser etching and large-format vinyl.",
    points: ["AI, EPS, SVG, PDF", "Screen printing", "DTG & DTF", "Laser engraving", "Vinyl & signage", "Color separations"],
    cta: "Vectorize my artwork",
    href: "/services/vector-art",
    media: [
      { src: "/assets/images/portfolio/vector-art/1.jpg", alt: "Raster logo before and after vector conversion", caption: "Before → after", contain: true },
      { src: "/assets/images/portfolio/two-vector.png", alt: "Two mascot logos redrawn as clean vector art", caption: "Clean vector" },
    ],
  },
  {
    tab: "Custom Patches",
    title: "Premium custom patches",
    body: "Designed and manufactured in any style for fine detail, durability and uniform branding that stands out.",
    points: ["Embroidered", "Woven", "PVC", "Chenille", "Uniforms & teams", "Brand merch"],
    cta: "Quote my patches",
    href: "/services/custom-patches",
    media: [
      { src: "/assets/images/portfolio/Patches.jpeg", alt: "Assorted embroidered custom patches", caption: "Finished patches" },
      { src: "/assets/images/portfolio/custom-patch/1.jpg", alt: "Custom patch made by Inizio Solutions", caption: "Custom patch" },
    ],
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern)
  function onKeyDown(e) {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + SERVICES.length) % SERVICES.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="services" className="iz-root iz-container iz-section iz-services">
      <div className="iz-section-head iz-reveal">
        <span className="iz-eyebrow">Services</span>
        <h2 className="iz-h2">One partner for stitch files, vector art and patches.</h2>
      </div>

      <div role="tablist" aria-label="Services" className="iz-tabs iz-reveal" style={{ "--d": 1 }} onKeyDown={onKeyDown}>
        {SERVICES.map((s, i) => (
          <button
            key={s.tab}
            ref={(el) => (tabRefs.current[i] = el)}
            type="button"
            role="tab"
            id={`svc-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`svc-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            className="iz-tab"
            onClick={() => setActive(i)}
          >
            {s.tab}
          </button>
        ))}
      </div>

      {SERVICES.map((s, i) => (
        <div
          key={s.tab}
          role="tabpanel"
          id={`svc-panel-${i}`}
          aria-labelledby={`svc-tab-${i}`}
          className="iz-panel iz-reveal"
          style={{ "--d": 2 }}
          hidden={active !== i}
        >
          <div className="iz-panel__copy">
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <ul className="iz-dash-list">
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="iz-panel__actions">
              <a href="#quote" className="iz-btn iz-btn--ink">{s.cta}</a>
              <Link href={s.href} className="iz-link">Learn more →</Link>
            </div>
          </div>
          <div className="iz-panel__media">
            {s.media.map((m) => (
              <figure key={m.src}>
                <img src={m.src} alt={m.alt} loading="lazy" className={m.contain ? "is-contain" : undefined} />
                <figcaption>{m.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
