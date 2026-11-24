"use client";

import { useRef, useState } from "react";
import Gallery from "./ui/Gallery";
import BehanceBadge from "./ui/BehanceBadge";

const range = (from, to) => Array.from({ length: to - from + 1 }, (_, i) => from + i);

// Same images as the old portfolio page.
const TABS = [
  {
    key: "digitizing",
    label: "Embroidery Digitizing",
    images: [1, ...range(3, 25)].map((n) => ({
      src: `/assets/images/portfolio/digitizing/${n}.webp`,
      alt: "Embroidery digitizing sample | Inizio Solutions",
    })),
  },
  {
    key: "vector-art",
    label: "Vector Art Conversion",
    images: range(1, 35).map((n) => ({
      src: `/assets/images/portfolio/vector-art/${n}.jpg`,
      alt: "Vector art conversion sample | Inizio Solutions",
    })),
  },
  {
    key: "custom-patch",
    label: "Custom Patches",
    images: ["1.jpg", "2.jpeg", "3.jpeg", "4.png", "5.jpg", "6.jpg", "7.jpg"].map((f) => ({
      src: `/assets/images/portfolio/custom-patch/${f}`,
      alt: "Custom patch sample | Inizio Solutions",
    })),
  },
];

export default function Portfolio({ type = "digitizing" }) {
  const initial = Math.max(0, TABS.findIndex((t) => t.key === type));
  const [active, setActive] = useState(initial);
  const tabRefs = useRef([]);

  function onKeyDown(e) {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + TABS.length) % TABS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  const tab = TABS[active];

  return (
    <section className="iz-root iz-container iz-section iz-services">
      <div className="iz-portfolio__head">
        <div role="tablist" aria-label="Portfolio categories" className="iz-tabs" onKeyDown={onKeyDown}>
          {TABS.map((t, i) => (
            <button
              key={t.key}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              role="tab"
              id={`pf-tab-${i}`}
              aria-selected={active === i}
              aria-controls="pf-panel"
              tabIndex={active === i ? 0 : -1}
              className="iz-tab"
              onClick={() => setActive(i)}
            >
              {t.label} <span style={{ opacity: 0.55, fontWeight: 600 }}>({t.images.length})</span>
            </button>
          ))}
        </div>
        <BehanceBadge />
      </div>
      <div role="tabpanel" id="pf-panel" aria-labelledby={`pf-tab-${active}`}>
        <Gallery key={tab.key} images={tab.images} />
      </div>
    </section>
  );
}
