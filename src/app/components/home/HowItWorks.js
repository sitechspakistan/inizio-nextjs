"use client";

import { useEffect, useRef, useState } from "react";
import { buildStoryStages, clamp, sizeCanvas } from "./stitchArt";

const STAGES = [
  { title: "Your JPG", body: "A low-res logo, a screenshot or a phone photo. Send what you have.", chip: "logo.jpg · 30 × 30 px" },
  { title: "Clean vector paths", body: "We redraw every shape as crisp, scalable vector art: perfect for print.", chip: "logo.svg · vector paths" },
  { title: "Underlay stitches", body: "A foundation that holds the fabric steady so the top stitches sit flat.", chip: "logo.dst · underlay" },
  { title: "Satin & fill, machine-ready", body: "Stitch angles planned shape by shape. Delivered in 4–5 hours.", chip: "logo.dst · ready to sew" },
];
const KEYS = ["raster", "vector", "underlay", "satin"];
const EMBROIDERY_FORMATS = [".DST", ".PES", ".EXP"];
const VECTOR_FORMATS = [".AI", ".EPS", ".SVG", ".PDF"];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;
    const cache = {};
    let raf = 0;
    let lastStage = 0;

    function draw(now) {
      raf = requestAnimationFrame(draw);
      const vh = window.innerHeight;
      const r = section.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;

      const S = sizeCanvas(canvas, cache, buildStoryStages);
      const p = clamp(-r.top / Math.max(1, r.height - vh), 0, 1);
      const u = p * 3.25;
      const i = Math.min(2, Math.floor(u));
      const f = u - i;
      const wv = u >= 3 ? 1 : clamp((f - 0.3) / 0.6, 0, 1);
      const ctx = canvas.getContext("2d");
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      const A = S.st[KEYS[i]];
      const B = S.st[KEYS[i + 1]];
      const H = S.h * S.dpr;
      ctx.drawImage(A, 0, 0);

      const sz = Math.min(S.w, S.h) * 0.84;
      const L = (S.w - sz) / 2 - 20;
      const R = (S.w + sz) / 2 + 20;
      const xw = (L + (R - L) * wv) * S.dpr;
      if (wv > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, xw, H);
        ctx.clip();
        ctx.drawImage(B, 0, 0);
        ctx.restore();
      }
      if (wv > 0 && wv < 1) {
        // Scanning "needle" line
        ctx.fillStyle = "rgba(63,217,225,0.18)";
        ctx.fillRect(xw - 18 * S.dpr, 0, 18 * S.dpr, H);
        ctx.fillStyle = "#3FD9E1";
        ctx.fillRect(xw - 1.5 * S.dpr, 0, 3 * S.dpr, H);
        const ny = (S.h / 2 + Math.sin(now * 0.03) * 6) * S.dpr;
        ctx.fillStyle = "#0B1220";
        ctx.beginPath();
        ctx.moveTo(xw - 5 * S.dpr, ny - 30 * S.dpr);
        ctx.lineTo(xw + 5 * S.dpr, ny - 30 * S.dpr);
        ctx.lineTo(xw, ny + 8 * S.dpr);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#3FD9E1";
        ctx.lineWidth = 1.5 * S.dpr;
        ctx.stroke();
      }

      const next = u >= 3 ? 3 : i + (wv > 0.5 ? 1 : 0);
      if (next !== lastStage) {
        lastStage = next;
        setStage(next);
      }
    }

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  const current = STAGES[stage];

  return (
    <section id="how" ref={sectionRef} className="iz-root iz-story" aria-label="How a JPG becomes an embroidery file">
      <div className="iz-story__sticky">
        <div className="iz-container iz-story__inner">
          <div className="iz-story__copy">
            <span className="iz-eyebrow">How it works · scroll</span>
            <h2>Watch a blurry JPG become a machine-ready file.</h2>
            <ol className="iz-steps">
              {STAGES.map((s, i) => (
                <li
                  key={s.title}
                  className={`iz-step${i === stage ? " is-on" : ""}${i < stage ? " is-done" : ""}`}
                  aria-current={i === stage ? "step" : undefined}
                >
                  <span className="iz-step__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="iz-step__body">
                    <strong>{s.title}</strong>
                    <span>{s.body}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="iz-step is-on iz-story__mobile-step" aria-live="polite">
              <span className="iz-step__num">{String(stage + 1).padStart(2, "0")}</span>
              <span className="iz-step__body">
                <strong>{current.title}</strong>
                <span>{current.body}</span>
              </span>
            </div>
          </div>

          <div className="iz-story__visual">
            <div className="iz-story__canvas">
              <canvas
                ref={canvasRef}
                role="img"
                aria-label="A sample mountain badge logo shown as a pixelated JPG, then vector paths, then underlay stitches, then finished satin embroidery"
              />
              <span className="iz-story__chip">{current.chip}</span>
            </div>
            <div className="iz-formats">
              {EMBROIDERY_FORMATS.map((f) => (
                <span key={f}>{f}</span>
              ))}
              {VECTOR_FORMATS.map((f) => (
                <span key={f} className="is-vector">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
