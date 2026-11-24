const STATS = [
  { value: "200+", label: "Our clients" },
  { value: "10K+", label: "Projects delivered" },
  { value: "100%", label: "Quality guaranteed" },
  { value: "10+ yrs", label: "Experience" },
];

export default function Counters() {
  return (
    <section className="iz-root iz-container" style={{ paddingBottom: 24 }}>
      <div className="iz-statsband">
        {STATS.map((s, i) => (
          <div key={s.label} className="iz-reveal" style={{ "--d": i }}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
