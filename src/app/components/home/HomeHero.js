"use client";

import { useRef, useState } from "react";
import { TRUSTPILOT } from "./reviewsData";

// Same fields and endpoint as the /place-an-order form (src/app/components/OrderForm.js):
// multipart POST to /api/order, which emails the order and redirects to /thank-you.
const ORDER_TYPES = [
  { label: "Digitizing", value: "Digitizing" },
  { label: "Vector Art", value: "Vector Art" },
  { label: "Patches", value: "Custom Patches" },
];

const CARE_OF = ["Muhammad", "Sam Miller", "James baldwin", "Stuart Fountain", "Sam Marcus", "Aiden gray", "John Reed", "Henry Clark"];

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // keep in sync with /api/order

const BRANDS = ["01", "03", "04", "05", "06", "07", "09", "10"];

export function Stars() {
  return (
    <span className="iz-tp-stars" aria-hidden="true">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </span>
  );
}

export default function HomeHero() {
  const [orderType, setOrderType] = useState(ORDER_TYPES[0].value);
  const [fileName, setFileName] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);

  function validateFile(file) {
    if (!file) return "Please upload your design.";
    if (!ALLOWED_TYPES.includes(file.type)) return "Please upload a JPG, PNG, WEBP or PDF file.";
    if (file.size > MAX_FILE_SIZE) return "File is too large. Max size is 5 MB.";
    return "";
  }

  function onFileChange(e) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
    setError(file ? validateFile(file) : "");
  }

  function onDrop(e) {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (!files?.length || !fileRef.current) return;
    fileRef.current.files = files;
    setFileName(files[0].name);
    setError(validateFile(files[0]));
  }

  function onSubmit(e) {
    const msg = validateFile(fileRef.current?.files?.[0]);
    if (msg) {
      e.preventDefault();
      setError(msg);
      return;
    }
    setError("");
    setLoading(true); // native submit continues to /api/order → /thank-you
  }

  return (
    <section id="top" className="iz-root iz-hero">
      <div className="iz-container iz-hero__inner">
        <div className="iz-hero__copy">
          <a href="#reviews" className="iz-tp-pill">
            <Stars />
            <strong>{TRUSTPILOT.score}</strong>
            <span className="iz-muted">
              {TRUSTPILOT.label} on Trustpilot · {TRUSTPILOT.count} reviews
            </span>
          </a>

          <h1>
            Embroidery Digitizing &amp; Vector Art Services <mark>in the USA</mark>
          </h1>

          <p className="iz-hero__lead">
            Inizio Solutions is your trusted partner for professional apparel branding. Send us any logo and get back a clean,
            machine-ready embroidery file, a print-ready vector or premium custom patches, fast. Trusted by embroidery shops and
            apparel brands since 2015.
          </p>

          <ul className="iz-checks">
            <li><span className="iz-check" aria-hidden="true">✓</span>4–5 hr standard delivery</li>
            <li><span className="iz-check" aria-hidden="true">✓</span>3 hr rush jobs</li>
            <li><span className="iz-check" aria-hidden="true">✓</span>DST, PES &amp; more</li>
            <li><span className="iz-check" aria-hidden="true">✓</span>First order free</li>
          </ul>

          <div className="iz-stats">
            <div><strong>10K+</strong><span>projects delivered</span></div>
            <div><strong>200+</strong><span>active clients</span></div>
            <div><strong>10+ yrs</strong><span>experience</span></div>
          </div>

          <div className="iz-brands">
            <span className="iz-brands__label">Trusted by brands like</span>
            <div className="iz-brands__row">
              {BRANDS.map((b) => (
                <img key={b} src={`/assets/images/logo/${b}.webp`} alt="Client brand logo" loading="lazy" />
              ))}
            </div>
          </div>
        </div>

        <form
          id="quote"
          className="iz-quote"
          aria-label="Get a free quote"
          action="/api/order"
          method="POST"
          encType="multipart/form-data"
          onSubmit={onSubmit}
        >
          <div className="iz-quote__head">
            <h2>Get a free quote</h2>
            <span className="iz-badge-yellow">Reply in minutes</span>
          </div>

          <div className="iz-fields">
            <label className="iz-field">
              Name
              <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
            </label>
            <label className="iz-field">
              Email
              <input type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
            </label>
            <label className="iz-field">
              Phone
              <input type="tel" name="phone" placeholder="Your phone" autoComplete="tel" required />
            </label>
            <label className="iz-field">
              Care of
              <select name="care_of" defaultValue="Care of" className="iz-select">
                <option value="Care of">Select (optional)</option>
                {CARE_OF.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </label>
          </div>

          <fieldset>
            <legend>What do you need?</legend>
            <input type="hidden" name="order_type" value={orderType} />
            <div className="iz-chips">
              {ORDER_TYPES.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  className="iz-chip"
                  aria-pressed={orderType === t.value}
                  onClick={() => setOrderType(t.value)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="iz-field">
            Details
            <textarea name="message" rows="2" placeholder="Size, fabric, placement, colors, deadline…" required />
          </label>

          <label className="iz-field">
            Upload your design
            <span
              className={`iz-drop${dragOver ? " is-over" : ""}`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={onDrop}
            >
              <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00737C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 16V4" />
                <path d="M7 9l5-5 5 5" />
                <path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
              </svg>
              {fileName ? (
                <span className="iz-drop__file">{fileName}</span>
              ) : (
                <span>
                  Drop JPG, PNG, WEBP or PDF · or <u>browse</u>
                </span>
              )}
              <span style={{ fontSize: 12 }}>Max 5 MB</span>
              <input ref={fileRef} type="file" name="file" accept=".jpg,.jpeg,.png,.webp,.pdf" onChange={onFileChange} />
            </span>
          </label>

          {error && <p className="iz-quote__error" role="alert">{error}</p>}

          <button type="submit" className="iz-quote__submit" disabled={loading}>
            {loading ? "Sending…" : "Get my free quote →"}
          </button>
          <p className="iz-quote__note">No account needed. Pay with PayPal, card, Apple Pay, AMEX or wire.</p>
        </form>
      </div>
    </section>
  );
}
