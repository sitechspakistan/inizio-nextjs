import Link from "next/link";

// Same plans and prices as before the redesign.
const PLANS = [
  {
    icon: "/assets/images/pricing/1.webp",
    tag: "New customers",
    name: "Free first order",
    price: "$0",
    min: "First order under 6,000 stitches",
    featured: true,
    features: [
      "Free account setup",
      "No credit card required",
      "Access to client dashboard panel",
      "5 free edits within 7 days",
      "2–6 hours delivery (extra $5 USD)",
    ],
    cta: "Claim free order",
  },
  {
    icon: "/assets/images/pricing/06.webp",
    tag: "For individuals",
    name: "Left Chest + Caps",
    price: "$8",
    min: "$8 minimum",
    features: ["24/7 live chat support", "Desired format(s)", "Normal turnaround (6 to 12 hours)", "Unlimited edits for 30 days"],
    cta: "Order now",
  },
  {
    icon: "/assets/images/pricing/07.webp",
    tag: "For individuals",
    name: "Jacket Back Logo",
    price: "$22",
    min: "$12 minimum",
    features: [
      "24/7 customer support",
      "5 selected formats",
      "Data aggregation",
      "Normal turnaround (18 to 48 hours)",
      "Free unlimited edits for 30 days",
      "Urgent (6 to 14 hours) $10 fee",
    ],
    cta: "Order now",
  },
  {
    icon: "/assets/images/pricing/09.webp",
    tag: "For individuals",
    name: "Vector Art Conversion",
    price: "$10",
    min: "$10 minimum",
    features: [
      "Simple textual logo $12",
      "Simple 2+ color logos $15",
      "Complex 2+ color logos $35",
      "Hardcore 2+ color logos $75",
      "Extremely hardcore (ask for quotation)",
      "Turnaround time (3 to 24 hours)",
      "Urgent (1 to 12 hours) $5 fee",
    ],
    cta: "Order now",
  },
];

export default function PriceCard() {
  return (
    <section className="iz-root iz-container iz-section iz-pricing">
      <div className="iz-section-head iz-reveal">
        <span className="iz-eyebrow">Plans</span>
        <h2 className="iz-h2">Clear prices. No hidden costs.</h2>
      </div>
      <div className="iz-pricing__grid iz-pricing__grid--four">
        {PLANS.map((p, i) => (
          <div key={p.name} className={`iz-price iz-reveal${p.featured ? " iz-price--featured" : ""}`} style={{ "--d": i }}>
            {p.featured && <span className="iz-price__flag">NEW CUSTOMERS</span>}
            <span className="iz-price__icon">
              <img src={p.icon} alt="" />
            </span>
            <span className="iz-price__min">{p.featured ? p.min : p.tag}</span>
            <span className="iz-price__name">{p.name}</span>
            <span className="iz-price__amount">
              {p.price}
              {!p.featured && <small> / design</small>}
            </span>
            {!p.featured && <span className="iz-price__min">{p.min}</span>}
            <ul className="iz-price__list">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link href="/place-an-order" className={`iz-btn ${p.featured ? "iz-btn--teal" : "iz-btn--outline"}`}>
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
      <p className="iz-pricing__foot iz-reveal">
        Not sure which plan fits? Quotes are free and unlimited, 24/7.{" "}
        <Link href="/place-an-order" className="iz-link">Get a free quote →</Link>
      </p>
    </section>
  );
}
