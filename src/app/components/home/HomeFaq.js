"use client";

import { useState } from "react";
import { HOME_FAQS } from "./faqData";

export default function HomeFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="iz-root iz-faq">
      <div className="iz-container iz-section iz-faq__inner">
        <div className="iz-faq__seo">
          <h2>Professional embroidery digitizing for USA shops and brands</h2>
          <p>
            Embroidery digitizing turns artwork into a stitch file your machine can read. The quality of that file decides everything
            you see on the garment: crisp edges or ragged ones, readable lettering or a blur, a smooth run or constant thread breaks.
          </p>
          <p>
            Since 2015, Inizio Solutions has digitized logos, mascots and detailed illustrations for caps, polos, uniforms and jackets,
            and redrawn raster logos as vector art for screen printing, DTG, laser etching and vinyl. We also design and manufacture
            embroidered, woven, PVC and chenille patches.
          </p>
        </div>

        <div className="iz-faq__list">
          {HOME_FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="iz-faq__item">
                <button
                  type="button"
                  className="iz-faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className="iz-faq__icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                <p id={`faq-a-${i}`} className="iz-faq__a" hidden={!isOpen}>
                  {f.a}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
