const BOXES = [
  { stat: "100%", title: "Why are we unique?", body: "We lead the digitizing industry through three key factors: meticulous detail, an expert team, and uncompromised quality." },
  { stat: "$0", title: "Free trial offer", body: "We believe in building long-lasting relationships with our customers, not a one-time deal. So, your first order is free." },
  { stat: "24/7", title: "Unlimited free quotes", body: "Get unlimited free quotes 24/7 from our experts. We always ensure that customer satisfaction is kept on top." },
  { stat: "10+", title: "Experienced team", body: "10+ years of experience in the industry. Our skilled digitizers and artists handle complex designs with ease." },
  { stat: "4–5h", title: "Fast turnaround", body: "Standard delivery in 4-5 hours. Our Rush Job service for professionally digitized files in just 3 hours." },
  { stat: "5", title: "Secure payments", body: "We accept payments made using PayPal, Credit Cards, Debit Cards, Apple Pay, AMEX and Wire Transfers." },
];

export default function Boxes() {
  return (
    <section className="iz-root iz-container iz-section iz-why">
      <div className="iz-section-head iz-reveal">
        <span className="iz-eyebrow">Why Inizio Solutions</span>
        <h2 className="iz-h2">We deliver creative solutions that simplify every step.</h2>
      </div>
      <div className="iz-why__grid">
        {BOXES.map((b, i) => (
          <div key={b.title} className="iz-why__card iz-reveal" style={{ "--d": i % 3 }}>
            <span>{b.stat}</span>
            <h3>{b.title}</h3>
            <p>{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
