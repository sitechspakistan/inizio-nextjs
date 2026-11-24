import Link from "next/link";

export default function Cta() {
  return (
    <section className="iz-root iz-cta">
      <div className="iz-cta__box iz-reveal">
        <div>
          <h2>Ready to transform your artwork into a perfect stitch file?</h2>
          <p>Upload your logo and let our experts prepare a flawless embroidery file for you.</p>
        </div>
        <Link href="/place-an-order" className="iz-btn iz-btn--ink">Place your order →</Link>
      </div>
    </section>
  );
}
