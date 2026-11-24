import Link from "next/link";

const SERVICES = [
  {
    href: "/services/embroidery-digitizing",
    icon: "/assets/images/service/needle.png",
    title: "Embroidery Digitizing",
    body: "Get flawless, machine-ready digitized files for all fabrics. High-quality DST/EXP formats with guaranteed stitch results.",
  },
  {
    href: "/services/vector-art",
    icon: "/assets/images/service/vector.png",
    title: "Vector Art Conversion",
    body: "Convert any logo or raster image into clean, scalable vector format (AI/EPS/SVG) for printing and apparel.",
  },
  {
    href: "/services/custom-patches",
    icon: "/assets/images/service/patches.png",
    title: "Custom Patches",
    body: "We design and deliver premium embroidered, PVC, and Woven patches for businesses and personal use with fast turnaround.",
  },
];

export default function ServiceBoxes() {
  return (
    <section className="iz-root iz-container iz-section">
      <div className="iz-section-head iz-reveal" style={{ marginBottom: 36 }}>
        <span className="iz-eyebrow">What we do</span>
        <h2 className="iz-h2">One partner for stitch files, vector art and patches.</h2>
      </div>
      <div className="iz-svc-grid">
        {SERVICES.map((s, i) => (
          <Link key={s.href} href={s.href} className="iz-svc iz-reveal" style={{ "--d": i }}>
            <span className="iz-svc__icon">
              <img src={s.icon} alt="" />
            </span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <span className="iz-svc__more">Read more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
