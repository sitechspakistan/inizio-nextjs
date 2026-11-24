"use client";

import { useCallback, useEffect, useState } from "react";

/** Image grid with a keyboard-accessible lightbox. images: [{ src, alt }] */
export default function Gallery({ images, className = "" }) {
  const [open, setOpen] = useState(-1);
  const count = images.length;

  const close = useCallback(() => setOpen(-1), []);
  const step = useCallback((dir) => setOpen((i) => (i + dir + count) % count), [count]);

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <>
      <div className={`iz-gallery ${className}`}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className="iz-gallery__item iz-reveal"
            style={{ "--d": i % 4 }}
            onClick={() => setOpen(i)}
            aria-label={`Open image ${i + 1} of ${count}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {open >= 0 && (
        <div className="iz-lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={close}>
          <img src={images[open].src} alt={images[open].alt} onClick={(e) => e.stopPropagation()} />
          <button type="button" className="iz-lightbox__btn iz-lightbox__close" aria-label="Close" autoFocus onClick={close}>
            ×
          </button>
          {count > 1 && (
            <>
              <button
                type="button"
                className="iz-lightbox__btn iz-lightbox__prev"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
              >
                ‹
              </button>
              <button
                type="button"
                className="iz-lightbox__btn iz-lightbox__next"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
              >
                ›
              </button>
              <span className="iz-lightbox__count">
                {open + 1} / {count}
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
}
