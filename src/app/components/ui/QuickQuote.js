// Short quote form. Sends name/email/phone/type to /place-an-order with GET,
// which pre-fills the full order form there (same behaviour as before).
export default function QuickQuote({ title = "Get a free quote", button = "Continue to order →", defaultType = "" }) {
  return (
    <form action="/place-an-order" method="GET" className="iz-quote iz-qq" aria-label={title}>
      <div className="iz-quote__head">
        <h2>{title}</h2>
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
        <label className="iz-field">
          Phone
          <input type="tel" name="phone" placeholder="Your phone" autoComplete="tel" required />
        </label>
        <label className="iz-field">
          Order type
          <span className="iz-select">
          <select name="type" defaultValue={defaultType || "Select Order Type"} required>
            <option value="Select Order Type" disabled>Select</option>
            <option value="Digitizing">Digitizing</option>
            <option value="Vector Art">Vector Art</option>
            <option value="Custom Patches">Custom Patches</option>
          </select>
          </span>
        </label>
      </div>
      <button type="submit" className="iz-quote__submit">{button}</button>
      <p className="iz-quote__note">Upload your artwork on the next step. First order free.</p>
    </form>
  );
}
