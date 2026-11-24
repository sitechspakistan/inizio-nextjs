const POINTS = [
  {
    icon: "⏱",
    title: "Faster turnaround",
    body: "Standard package comes with 4 to 5 hours turnaround time, and our Rush Job package provides a turnaround time of 3 hours.",
  },
  {
    icon: "$",
    title: "Quotations are always free",
    body: "You will receive the price estimates and stitch counts within a few minutes after contacting us and requesting the quotes.",
  },
  {
    icon: "✎",
    title: "Anything free is a bonus",
    body: "We give you free edits if you are unsatisfied with the outcome, provided there is no deviation from the original design.",
  },
  {
    icon: "✓",
    title: "Our payment is flexible",
    body: "We accept payments made using PayPal, Credit Cards, Debit Cards, Apple Pay, AMEX and Wire Transfers.",
  },
];

export default function ContentTwo() {
  return (
    <section className="iz-root iz-soft">
      <div className="iz-container iz-section iz-digitizers">
        <div className="iz-digitizers__intro">
          <div className="iz-section-head iz-reveal">
            <span className="iz-eyebrow">Our team</span>
            <h2 className="iz-h2">The Best Embroidery Digitizers - Inizio Solutions</h2>
          </div>
          <p className="iz-reveal" style={{ "--d": 1 }}>
            Our skilled embroidery digitizers have extensive experience in delivering all types of digitizing services suitable for
            every fabric and texture—always with precision and on-time delivery. From the moment you request a quote to the final
            delivery of your digitized file, our team provides complete guidance and support. Our core focus is to produce sharp,
            clean, and detail-rich designs with minimized thread breakage, reduced wastage, and improved production efficiency,
            ensuring faster runs and reliable results for every project.
          </p>
        </div>

        <h3 className="iz-digitizers__sub iz-reveal">Our Embroidery Digitizing Services</h3>
        <ul className="iz-feature-grid">
          {POINTS.map((p, i) => (
            <li key={p.title} className="iz-feature iz-reveal" style={{ "--d": i }}>
              <span className="iz-feature__icon" aria-hidden="true">{p.icon}</span>
              <strong>{p.title}</strong>
              <span>{p.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
