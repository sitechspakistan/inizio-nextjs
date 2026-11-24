"use client";

import { useEffect, useRef, useState } from "react";
import { clamp, sizeCanvas } from "./stitchArt";
import { buildImageCompare, sampleBackground } from "./compareImage";

// Real Inizio stitch file from the portfolio. The AUTO side is simulated from it.
const SAMPLE = {
  src: "/assets/images/portfolio/digitizing/9.webp",
  name: "Drip Stop Plumbing",
};

export default function AutoVsManual() {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  const splitRef = useRef(50);
  const draggingRef = useRef(false);
  const [split, setSplit] = useState(50);

  useEffect(() => {
    splitRef.current = split;
  }, [split]);

  // Draw loop: only redraws when the split changes or the canvas resizes.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cache = {};
    let raf = 0;
    let img = null;
    let bg = "#C9CDD2";

    const loader = new Image();
    loader.decoding = "async";
    loader.onload = () => {
      img = loader;
      bg = sampleBackground(loader);
      cache.st = null; // force a rebuild with the photo
    };
    loader.src = SAMPLE.src;

    function draw() {
      raf = requestAnimationFrame(draw);
      if (!img) return;
      const vh = window.innerHeight;
      const rc = canvas.getBoundingClientRect();
      if (rc.bottom < 0 || rc.top > vh) return;

      const C = sizeCanvas(canvas, cache, (w, h, dpr) => buildImageCompare(img, bg, w, h, dpr));
      const value = splitRef.current;
      if (C.drawn === value) return;
      C.drawn = value;

      const cx = canvas.getContext("2d");
      cx.setTransform(1, 0, 0, 1, 0, 0);
      const sx = (C.w * C.dpr * value) / 100;
      const H = C.h * C.dpr;
      cx.drawImage(C.st.real, 0, 0);
      cx.save();
      cx.beginPath();
      cx.rect(0, 0, sx, H);
      cx.clip();
      cx.drawImage(C.st.auto, 0, 0);
      cx.restore();

      // Divider line + round handle
      cx.fillStyle = "#FFFFFF";
      cx.fillRect(sx - 2 * C.dpr, 0, 4 * C.dpr, H);
      cx.beginPath();
      cx.arc(sx, H / 2, 20 * C.dpr, 0, Math.PI * 2);
      cx.fillStyle = "#FFFFFF";
      cx.shadowColor = "rgba(11,18,32,0.35)";
      cx.shadowBlur = 10 * C.dpr;
      cx.fill();
      cx.shadowBlur = 0;
      cx.strokeStyle = "#0B1220";
      cx.lineWidth = 1.5 * C.dpr;
      cx.stroke();
      cx.fillStyle = "#0B1220";
      cx.font = "700 " + 15 * C.dpr + "px Inter, sans-serif";
      cx.textAlign = "center";
      cx.textBaseline = "middle";
      cx.fillText("⟷", sx, H / 2);
    }

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      loader.onload = null;
    };
  }, []);

  function splitFromPointer(e) {
    const r = boxRef.current.getBoundingClientRect();
    return Math.round(clamp(((e.clientX - r.left) / r.width) * 100, 0, 100));
  }

  function onPointerDown(e) {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setSplit(splitFromPointer(e));
  }

  function onPointerMove(e) {
    if (!draggingRef.current) return;
    setSplit(splitFromPointer(e));
  }

  function onPointerUp(e) {
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
  }

  function onKeyDown(e) {
    const step = e.shiftKey ? 10 : 2;
    let next = null;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") next = split - step;
    else if (e.key === "ArrowRight" || e.key === "ArrowUp") next = split + step;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = 100;
    if (next === null) return;
    e.preventDefault();
    setSplit(clamp(next, 0, 100));
  }

  return (
    <section className="iz-root iz-compare">
      <div className="iz-container iz-section iz-compare__inner">
        <div className="iz-compare__copy">
          <span className="iz-eyebrow">Hand-digitized, never auto-traced</span>
          <h2>Same logo. One stitches clean.</h2>
          <p>
            Auto-digitizing software runs every shape at one angle and one density. That&apos;s where gaps, thread breaks and
            puckering come from. Our digitizers set stitch direction, density and underlay shape by shape.
          </p>
          <div className="iz-vs">
            <div className="iz-vs__bad">
              <strong>Auto software</strong>
              <p>One stitch angle, gaps, misaligned outlines</p>
            </div>
            <div className="iz-vs__good">
              <strong>Inizio digitizing</strong>
              <p>Planned angles, clean edges, right density</p>
            </div>
          </div>
        </div>

        <div className="iz-compare__visual">
          <div
            ref={boxRef}
            className="iz-compare__canvas"
            role="slider"
            tabIndex={0}
            aria-label={`Drag to compare: simulated auto-digitized stitches (left) and the real Inizio stitch file for ${SAMPLE.name} (right)`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={split}
            aria-valuetext={`${split}% auto-digitized shown`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onKeyDown={onKeyDown}
          >
            <canvas ref={canvasRef} aria-hidden="true" />
            <span className="iz-compare__tag" style={{ left: 14, background: "#A2321B" }}>AUTO · simulated</span>
            <span className="iz-compare__tag" style={{ right: 14, background: "#00737C" }}>INIZIO · real file</span>
            <span className="iz-compare__hint" aria-hidden="true">Drag to compare</span>
          </div>
        </div>
      </div>
    </section>
  );
}
