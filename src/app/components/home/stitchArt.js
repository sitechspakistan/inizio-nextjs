// Canvas drawing helpers for the "How it works" story and the
// "Auto vs. Inizio" comparison. Draws a sample mountain badge as a
// pixelated JPG, vector paths, underlay stitches and finished satin.
// Browser-only: call these from effects, never during render.

function circle(x, cx, cy, r) {
  x.moveTo(cx + r, cy);
  x.arc(cx, cy, r, 0, Math.PI * 2);
}

function poly(pts) {
  return function (x) {
    x.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) x.lineTo(pts[i][0], pts[i][1]);
    x.closePath();
  };
}

const MB = [[205, 300], [272, 186], [345, 300]];
const MF = [[56, 300], [172, 116], [292, 300]];
const SN = [[172, 116], [145, 160], [160, 152], [172, 166], [185, 151], [199, 160]];

const REG = [
  { col: "#F4EAD7", shade: "#E4D3B4", ang: 0.35, tat: true, path: (x) => circle(x, 200, 200, 158) },
  { col: "#F28C38", shade: "#D46F1C", ang: -0.8, path: (x) => circle(x, 262, 138, 34), edge: true },
  { col: "#0E7C86", shade: "#09626A", ang: 0.95, path: poly(MB), edge: true },
  { col: "#19B5BE", shade: "#10929A", ang: -0.95, path: poly(MF), edge: true },
  { col: "#FFFFFF", shade: "#D7E2E7", ang: 0.15, path: poly(SN) },
  { col: "#22355F", shade: "#17264A", ang: 0.02, tat: true, path: (x) => x.rect(0, 300, 400, 100) },
  { col: "#1B2A4A", shade: "#0E1830", ring: true, path: (x) => { circle(x, 200, 200, 187); circle(x, 200, 200, 158); } },
];

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

function clipReg(x, r) {
  if (!r.ring) {
    x.beginPath();
    circle(x, 200, 200, 158);
    x.clip();
  }
  x.beginPath();
  r.path(x);
  x.clip(r.ring ? "evenodd" : "nonzero");
}

function flat(x) {
  REG.forEach((r) => {
    x.save();
    clipReg(x, r);
    x.fillStyle = r.col;
    x.fillRect(-10, -10, 420, 420);
    x.restore();
  });
}

function lines(ang, gap, fn) {
  const d = [Math.cos(ang), Math.sin(ang)];
  const n = [-d[1], d[0]];
  const R = 300;
  let k = 0;
  for (let s = -R; s <= R; s += gap, k++) {
    const cx = 200 + n[0] * s;
    const cy = 200 + n[1] * s;
    fn(cx - d[0] * R, cy - d[1] * R, cx + d[0] * R, cy + d[1] * R, k, d, n);
  }
}

function fabric(x, w, h, dpr) {
  x.setTransform(dpr, 0, 0, dpr, 0, 0);
  x.fillStyle = "#ECEEF1";
  x.fillRect(0, 0, w, h);
  x.strokeStyle = "rgba(11,18,32,0.05)";
  x.lineWidth = 1;
  x.beginPath();
  for (let i = -h; i < w; i += 5) {
    x.moveTo(i, 0);
    x.lineTo(i + h, h);
  }
  x.stroke();
}

function mk(w, h, dpr) {
  const c = document.createElement("canvas");
  c.width = w * dpr;
  c.height = h * dpr;
  return c;
}

function logoT(x, w, h, dpr) {
  const s = (Math.min(w, h) * 0.84) / 400;
  x.setTransform(dpr * s, 0, 0, dpr * s, (dpr * (w - 400 * s)) / 2, (dpr * (h - 400 * s)) / 2);
  return s;
}

function satinLayer(w, h, dpr, sloppy) {
  const c = mk(w, h, dpr);
  const x = c.getContext("2d");
  logoT(x, w, h, dpr);
  x.lineCap = "butt";
  REG.forEach((r) => {
    x.save();
    clipReg(x, r);
    if (sloppy) x.translate(Math.random() * 3, 2.5);
    if (r.ring && !sloppy) {
      for (let a = 0, k = 0; a < Math.PI * 2; a += 0.0155, k++) {
        x.beginPath();
        x.moveTo(200 + Math.cos(a) * 156, 200 + Math.sin(a) * 156);
        x.lineTo(200 + Math.cos(a + 0.02) * 189, 200 + Math.sin(a + 0.02) * 189);
        x.strokeStyle = k % 2 ? r.shade : r.col;
        x.lineWidth = 2.6;
        x.stroke();
      }
    } else {
      const ang = sloppy ? 0 : r.ang;
      const gap = sloppy ? 3.6 : 2.05;
      lines(ang, gap, (x0, y0, x1, y1, k, d) => {
        if (sloppy && Math.random() < 0.2) return;
        x.strokeStyle = k % 2 && !sloppy ? r.shade : r.col;
        x.lineWidth = sloppy ? 2.2 : 2.3;
        if (r.tat && !sloppy) {
          x.beginPath();
          const off = (k % 3) * 5;
          for (let t = -off; t < 600; t += 15) {
            x.moveTo(x0 + d[0] * t, y0 + d[1] * t);
            x.lineTo(x0 + d[0] * (t + 13.6), y0 + d[1] * (t + 13.6));
          }
          x.stroke();
        } else {
          x.beginPath();
          x.moveTo(x0, y0);
          x.lineTo(x1, y1);
          x.stroke();
        }
      });
      if (!sloppy) {
        x.globalAlpha = 0.35;
        x.strokeStyle = "#FFFFFF";
        x.lineWidth = 0.5;
        lines(r.ang, 6.15, (x0, y0, x1, y1) => {
          x.beginPath();
          x.moveTo(x0, y0 - 0.6);
          x.lineTo(x1, y1 - 0.6);
          x.stroke();
        });
        x.globalAlpha = 1;
      }
    }
    x.restore();
    if (r.edge) {
      x.save();
      if (!r.ring) {
        x.beginPath();
        circle(x, 200, 200, 158);
        x.clip();
      }
      x.beginPath();
      r.path(x);
      x.strokeStyle = r.shade;
      x.lineWidth = sloppy ? 1.2 : 2.2;
      if (sloppy) {
        x.translate(-4, 3);
        x.setLineDash([5, 4]);
      }
      x.stroke();
      x.restore();
    }
  });
  return c;
}

function compose(layer, w, h, dpr) {
  const c = mk(w, h, dpr);
  const cx = c.getContext("2d");
  fabric(cx, w, h, dpr);
  cx.setTransform(1, 0, 0, 1, 0, 0);
  cx.shadowColor = "rgba(11,18,32,0.35)";
  cx.shadowBlur = 6 * dpr;
  cx.shadowOffsetY = 2 * dpr;
  cx.drawImage(layer, 0, 0);
  return c;
}

/** All four story stages: raster, vector, underlay, satin. */
export function buildStoryStages(w, h, dpr) {
  const out = {};

  // 1. Pixelated JPG
  const r = mk(w, h, dpr);
  const rx = r.getContext("2d");
  rx.setTransform(dpr, 0, 0, dpr, 0, 0);
  rx.fillStyle = "#FFFFFF";
  rx.fillRect(0, 0, w, h);
  const tiny = document.createElement("canvas");
  tiny.width = 30;
  tiny.height = 30;
  const tx = tiny.getContext("2d");
  tx.setTransform(30 / 400, 0, 0, 30 / 400, 0, 0);
  flat(tx);
  const s = (Math.min(w, h) * 0.84) / 400;
  const sz = 400 * s;
  rx.imageSmoothingEnabled = false;
  rx.drawImage(tiny, (w - sz) / 2, (h - sz) / 2, sz, sz);
  const cell = sz / 30;
  for (let i = 0; i < 160; i++) {
    rx.fillStyle = "rgba(" + (Math.random() < 0.5 ? "120,90,60" : "60,90,120") + ",0.10)";
    rx.fillRect((w - sz) / 2 + ((Math.random() * 30) | 0) * cell, (h - sz) / 2 + ((Math.random() * 30) | 0) * cell, cell * 2, cell);
  }
  out.raster = r;

  // 2. Vector paths
  const v = mk(w, h, dpr);
  const vx = v.getContext("2d");
  vx.setTransform(dpr, 0, 0, dpr, 0, 0);
  vx.fillStyle = "#FFFFFF";
  vx.fillRect(0, 0, w, h);
  vx.strokeStyle = "rgba(11,18,32,0.05)";
  vx.beginPath();
  for (let g = 0; g < Math.max(w, h); g += 20) {
    vx.moveTo(g, 0);
    vx.lineTo(g, h);
    vx.moveTo(0, g);
    vx.lineTo(w, g);
  }
  vx.stroke();
  logoT(vx, w, h, dpr);
  flat(vx);
  vx.lineWidth = 1.3 / s;
  vx.strokeStyle = "#0B1220";
  REG.forEach((rg) => {
    vx.save();
    if (!rg.ring) {
      vx.beginPath();
      circle(vx, 200, 200, 158.5);
      vx.clip();
    }
    vx.beginPath();
    rg.path(vx);
    vx.stroke();
    vx.restore();
  });
  const anchors = MB.concat(MF, SN, [[358, 200], [42, 200], [200, 42], [200, 358], [296, 138], [228, 138], [262, 104], [262, 172]]);
  vx.lineWidth = 1 / s;
  [[200, 42], [200, 358], [262, 104], [262, 172]].forEach((hd) => {
    vx.beginPath();
    vx.moveTo(hd[0] - 46, hd[1]);
    vx.lineTo(hd[0] + 46, hd[1]);
    vx.strokeStyle = "#00A5AF";
    vx.stroke();
    [-46, 46].forEach((o) => {
      vx.beginPath();
      vx.arc(hd[0] + o, hd[1], (3.2 / s) * 1.2, 0, Math.PI * 2);
      vx.fillStyle = "#00A5AF";
      vx.fill();
    });
  });
  anchors.forEach((a) => {
    const q = (4.2 / s) * 1.2;
    vx.fillStyle = "#FFFFFF";
    vx.fillRect(a[0] - q, a[1] - q, q * 2, q * 2);
    vx.strokeStyle = "#0B1220";
    vx.strokeRect(a[0] - q, a[1] - q, q * 2, q * 2);
  });
  out.vector = v;

  // 3. Underlay
  const u = mk(w, h, dpr);
  const ux = u.getContext("2d");
  fabric(ux, w, h, dpr);
  logoT(ux, w, h, dpr);
  REG.forEach((rg) => {
    ux.save();
    clipReg(ux, rg);
    ux.strokeStyle = rg.shade;
    ux.globalAlpha = 0.8;
    ux.lineWidth = 1.1;
    lines((rg.ring ? 0.7 : rg.ang) + Math.PI / 2, 9, (x0, y0, x1, y1, k, d, n) => {
      ux.beginPath();
      for (let t = 0, z = 0; t <= 600; t += 7, z++) {
        const o = z % 2 ? 3.5 : -3.5;
        ux.lineTo(x0 + d[0] * t + n[0] * o, y0 + d[1] * t + n[1] * o);
      }
      ux.stroke();
    });
    ux.restore();
    ux.save();
    if (!rg.ring) {
      ux.beginPath();
      circle(ux, 200, 200, 158);
      ux.clip();
    }
    ux.beginPath();
    rg.path(ux);
    ux.setLineDash([3, 2.4]);
    ux.strokeStyle = rg.shade;
    ux.lineWidth = 1;
    ux.stroke();
    ux.restore();
  });
  out.underlay = u;

  // 4. Satin & fill
  out.satin = compose(satinLayer(w, h, dpr, false), w, h, dpr);
  return out;
}

/** Resize a canvas to its CSS box and (re)build its layers when the size changes. */
export function sizeCanvas(canvas, cache, build) {
  const r = canvas.getBoundingClientRect();
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = Math.max(40, Math.round(r.width));
  const h = Math.max(40, Math.round(r.height));
  if (!cache.st || cache.w !== w || cache.h !== h || cache.dpr !== dpr) {
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    cache.w = w;
    cache.h = h;
    cache.dpr = dpr;
    cache.st = build(w, h, dpr);
    cache.drawn = -1;
  }
  return cache;
}
