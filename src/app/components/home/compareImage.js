// Builds the two sides of the "Same logo. One stitches clean." slider from a
// real Inizio stitch file:
//   real – the file exactly as delivered
//   auto – the same file with typical auto-digitizing flaws simulated on top
//          (misaligned outlines, jagged edges, one stitch angle, thread gaps).
// Browser-only.

// Small seeded PRNG so the simulated flaws don't change on every resize.
function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function mk(w, h, dpr) {
  const c = document.createElement("canvas");
  c.width = Math.round(w * dpr);
  c.height = Math.round(h * dpr);
  return c;
}

// Colour of the fabric in the photo (top-left pixel), used to fill around the image.
export function sampleBackground(img) {
  const c = document.createElement("canvas");
  c.width = c.height = 1;
  const x = c.getContext("2d");
  x.drawImage(img, 0, 0, 1, 1, 0, 0, 1, 1);
  const [r, g, b] = x.getImageData(0, 0, 1, 1).data;
  return `rgb(${r},${g},${b})`;
}

// object-fit: contain
function fit(img, W, H, pad) {
  const s = Math.min((W - pad * 2) / img.naturalWidth, (H - pad * 2) / img.naturalHeight);
  const w = img.naturalWidth * s;
  const h = img.naturalHeight * s;
  return { x: (W - w) / 2, y: (H - h) / 2, w, h };
}

export function buildImageCompare(img, bg, w, h, dpr) {
  const W = Math.round(w * dpr);
  const H = Math.round(h * dpr);
  const box = fit(img, W, H, 16 * dpr);

  // REAL ------------------------------------------------------------------
  const real = mk(w, h, dpr);
  const rx = real.getContext("2d");
  rx.fillStyle = bg;
  rx.fillRect(0, 0, W, H);
  rx.imageSmoothingQuality = "high";
  rx.drawImage(img, box.x, box.y, box.w, box.h);

  // AUTO ------------------------------------------------------------------
  const auto = mk(w, h, dpr);
  const ax = auto.getContext("2d");
  ax.fillStyle = bg;
  ax.fillRect(0, 0, W, H);

  // 1. Jagged, low-detail edges: downsample then upscale without smoothing.
  const lo = document.createElement("canvas");
  const f = 0.28;
  lo.width = Math.max(1, Math.round(box.w * f));
  lo.height = Math.max(1, Math.round(box.h * f));
  const lx = lo.getContext("2d");
  lx.drawImage(img, 0, 0, lo.width, lo.height);
  ax.imageSmoothingEnabled = false;
  ax.drawImage(lo, box.x, box.y, box.w, box.h);
  ax.imageSmoothingEnabled = true;

  // 2. Misaligned outlines: a faint copy shifted off-register.
  ax.globalAlpha = 0.3;
  ax.drawImage(img, box.x + 5 * dpr, box.y + 4 * dpr, box.w, box.h);
  ax.globalAlpha = 1;

  // Clip the stitch effects to the design area only.
  ax.save();
  ax.beginPath();
  ax.rect(box.x, box.y, box.w, box.h);
  ax.clip();

  // 3. One stitch angle everywhere: uniform diagonal ridges.
  const ang = -0.6;
  const d = [Math.cos(ang), Math.sin(ang)];
  const n = [-d[1], d[0]];
  const R = Math.hypot(W, H);
  const cx = W / 2;
  const cy = H / 2;
  const gap = 3.2 * dpr;
  ax.lineWidth = 1 * dpr;
  let k = 0;
  for (let s = -R; s <= R; s += gap, k++) {
    const px = cx + n[0] * s;
    const py = cy + n[1] * s;
    ax.strokeStyle = k % 2 ? "rgba(0,0,0,0.16)" : "rgba(255,255,255,0.12)";
    ax.beginPath();
    ax.moveTo(px - d[0] * R, py - d[1] * R);
    ax.lineTo(px + d[0] * R, py + d[1] * R);
    ax.stroke();
  }

  // 4. Gaps / thread breaks: short runs where fabric shows through.
  const rand = rng(7);
  ax.strokeStyle = bg;
  ax.lineCap = "round";
  for (let i = 0; i < 70; i++) {
    const sx = box.x + rand() * box.w;
    const sy = box.y + rand() * box.h;
    const len = (14 + rand() * 40) * dpr;
    ax.globalAlpha = 0.55 + rand() * 0.35;
    ax.lineWidth = (1.2 + rand() * 1.8) * dpr;
    ax.beginPath();
    ax.moveTo(sx, sy);
    ax.lineTo(sx + d[0] * len, sy + d[1] * len);
    ax.stroke();
  }
  ax.globalAlpha = 1;
  ax.restore();

  // 5. Slight puckering: soften the whole result a touch.
  const soft = mk(w, h, dpr);
  const sx2 = soft.getContext("2d");
  sx2.filter = `blur(${0.6 * dpr}px)`;
  sx2.drawImage(auto, 0, 0);

  return { real, auto: soft };
}
