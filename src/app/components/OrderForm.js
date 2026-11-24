"use client";

import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

// Same fields and endpoint as before: multipart POST to /api/order → /thank-you.
// Name / email / phone / type are pre-filled from the quick quote forms (?name=…&type=…).
const ORDER_TYPES = ["Digitizing", "Vector Art", "Custom Patches"];
const CARE_OF = ["Muhammad", "Sam Miller", "James baldwin", "Stuart Fountain", "Sam Marcus", "Aiden gray", "John Reed", "Henry Clark"];
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // keep in sync with /api/order

export default function OrderForm() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const [orderType, setOrderType] = useState(ORDER_TYPES.includes(typeParam) ? typeParam : ORDER_TYPES[0]);
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
    setLoading(true);
  }

  return (
    <section className="iz-root iz-soft">
      <div className="iz-container iz-section iz-order">
        <form
          className="iz-quote"
          action="/api/order"
          method="POST"
          encType="multipart/form-data"
          onSubmit={onSubmit}
          aria-label="Place an order"
        >
          <div className="iz-quote__head">
            <h2>Order details</h2>
            <span className="iz-badge-yellow">Instant Reply</span>
          </div>

          <div className="iz-fields">
            <label className="iz-field">
              Name
              <input type="text" name="name" placeholder="Your name" autoComplete="name" required defaultValue={searchParams.get("name") || ""} />
            </label>
            <label className="iz-field">
              Email
              <input type="email" name="email" placeholder="you@company.com" autoComplete="email" required defaultValue={searchParams.get("email") || ""} />
            </label>
            <label className="iz-field">
              Phone
              <input type="tel" name="phone" placeholder="Your phone" autoComplete="tel" required defaultValue={searchParams.get("phone") || ""} />
            </label>
            <label className="iz-field">
              Care of
              <span className="iz-select">
              <select name="care_of" defaultValue="Care of">
                <option value="Care of">Select (optional)</option>
                {CARE_OF.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              </span>
            </label>
          </div>

          <fieldset>
            <legend>Order type</legend>
            <input type="hidden" name="order_type" value={orderType} />
            <div className="iz-chips">
              {ORDER_TYPES.map((t) => (
                <button key={t} type="button" className="iz-chip" aria-pressed={orderType === t} onClick={() => setOrderType(t)}>
                  {t}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="iz-field">
            Message
            <textarea name="message" rows="5" placeholder="Size, fabric, placement, colors, file format, deadline…" required />
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
            {loading ? "Sending…" : "Order now →"}
          </button>
          <p className="iz-quote__note">Pay with PayPal, card, Apple Pay, AMEX or wire. Your first order is free.</p>
        </form>

        <aside className="iz-order__aside">
          <ol className="iz-steps-light">
            <li><span><strong>Send your artwork</strong>Any JPG, PNG or PDF, even a phone photo.</span></li>
            <li><span><strong>Get your quote</strong>We reply with price and stitch count, usually within minutes.</span></li>
            <li><span><strong>Receive your file</strong>Machine-ready in 4–5 hours, or about 3 hours for rush jobs.</span></li>
          </ol>
          <div className="iz-card-ink">
            <strong>Need help with your order?</strong>
            <span>Our team is available 24/7.</span>
            <a href="mailto:orders@iniziosolutions.com">orders@iniziosolutions.com</a>
            <a href="tel:+13027791338">+1 (302) 779-1338</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
