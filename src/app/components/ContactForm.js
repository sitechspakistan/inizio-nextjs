"use client";
import { useState } from "react";

// Contact section. Same logic as before: POST multipart to /api/contact.
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Failed to send message");
      setSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact-us" className="iz-root iz-soft">
      <div className="iz-container iz-section iz-contact">
        <div className="iz-contact__info iz-reveal">
          <span className="iz-eyebrow">Contact</span>
          <h2 className="iz-h2">Let’s work together.</h2>
          <p>Questions about a file, a bulk order or pricing? Send us a message and our team will get back to you fast, 24/7.</p>
          <div className="iz-contact__list">
            <a className="iz-contact__item" href="https://maps.app.goo.gl/m5ZVT8chR1iBS3fj8" target="_blank" rel="noopener noreferrer">
              <span className="iz-contact__icon"><i className="fas fa-map-marker-alt" aria-hidden="true"></i></span>
              <span><small>Address</small>131 Continental Dr Ste 305, Newark, DE 19713, USA</span>
            </a>
            <a className="iz-contact__item" href="mailto:orders@iniziosolutions.com">
              <span className="iz-contact__icon"><i className="fas fa-envelope" aria-hidden="true"></i></span>
              <span><small>Email</small>orders@iniziosolutions.com</span>
            </a>
            <a className="iz-contact__item" href="tel:+13027791338">
              <span className="iz-contact__icon"><i className="fas fa-phone-alt" aria-hidden="true"></i></span>
              <span><small>Phone</small>+1 (302) 779-1338</span>
            </a>
          </div>
        </div>

        <form className="iz-quote iz-reveal" style={{ "--d": 1 }} onSubmit={handleSubmit} aria-label="Send us an inquiry">
          <input type="hidden" name="form-name" value="contact" />
          <div className="iz-quote__head">
            <h2>Send us an inquiry</h2>
            <span className="iz-badge-yellow">Instant Reply</span>
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
          </div>
          <label className="iz-field">
            Subject
            <input type="text" name="subject" placeholder="What is it about?" />
          </label>
          <label className="iz-field">
            Message
            <textarea name="message" rows="5" placeholder="Tell us about your design, quantity or deadline…" required />
          </label>
          <button className="iz-quote__submit" type="submit" disabled={loading}>
            {loading ? "Sending…" : "Get a free quote →"}
          </button>
          {success && <p className="iz-form-ok" role="status">Thank you! Your message has been sent.</p>}
          {error && <p className="iz-quote__error" role="alert">{error}</p>}
        </form>
      </div>
    </section>
  );
}
