"use client";

import { useState } from "react";

/** FAQ section in the home-page style. items: [{ q, a }] */
export default function FaqList({ eyebrow = "FAQs", title = "Frequently asked questions", intro, items }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="iz-root iz-faq">
      <div className="iz-container iz-section iz-faq__inner">
        <div className="iz-faq__seo iz-reveal">
          <span className="iz-eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
          <p>
            Still have a question? Email{" "}
            <a className="iz-link" href="mailto:orders@iniziosolutions.com">orders@iniziosolutions.com</a> or call{" "}
            <a className="iz-link" href="tel:+13027791338">+1 (302) 779-1338</a>.
          </p>
        </div>

        <div className="iz-faq__list">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="iz-faq__item iz-reveal" style={{ "--d": i }}>
                <button
                  type="button"
                  className="iz-faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`faql-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className="iz-faq__icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                <p id={`faql-${i}`} className="iz-faq__a" hidden={!isOpen}>
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
