import PageHero from "./ui/PageHero";
import QuickQuote from "./ui/QuickQuote";

const TYPE_BY_CRUMB = {
  "Embroidery Digitizing": "Digitizing",
  "Vector Art Conversion": "Vector Art",
  "Custom Patches": "Custom Patches",
};

// Service page hero with a quick quote card. Props kept from the old design.
export default function InnerHero({ subheading, headingone, headingtwo, paragraph }) {
  return (
    <PageHero
      crumb={subheading}
      title={headingone}
      highlight={headingtwo}
      description={paragraph}
      aside={<QuickQuote title="Place an order" defaultType={TYPE_BY_CRUMB[subheading]} />}
    >
      <ul className="iz-checks">
        <li><span className="iz-check" aria-hidden="true">✓</span>4–5 hr standard delivery</li>
        <li><span className="iz-check" aria-hidden="true">✓</span>3 hr rush jobs</li>
        <li><span className="iz-check" aria-hidden="true">✓</span>Free unlimited quotes</li>
        <li><span className="iz-check" aria-hidden="true">✓</span>First order free</li>
      </ul>
    </PageHero>
  );
}
