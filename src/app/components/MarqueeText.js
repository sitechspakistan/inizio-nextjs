const ITEMS = [
  ["Embroidery", "Digitizing"],
  ["Vector", "Art"],
  ["Custom", "Patches"],
  ["Machine-ready", "Files"],
];

// Scrolling text band. The list is rendered twice so the loop is seamless.
export default function MarqueeText() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section className="iz-root iz-marquee" aria-label="Embroidery digitizing, vector art, custom patches">
      <div className="iz-marquee__track" aria-hidden="true">
        {row.map(([a, b], i) => (
          <span key={i} className="iz-marquee__item">
            {a} <span>{b}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
