// Soft brand-colour glows + faint stitch pattern used behind every hero.
export default function HeroBackdrop() {
  return (
    <div className="iz-hero__bg" aria-hidden="true">
      <span className="iz-blob iz-blob--a" />
      <span className="iz-blob iz-blob--b" />
      <span className="iz-blob iz-blob--c" />
      <span className="iz-hero__stitch" />
    </div>
  );
}
