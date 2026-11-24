import QuickQuote from "./ui/QuickQuote";

// Blog sidebar: quick quote + contact details.
export default function SideBar() {
  return (
    <>
      <QuickQuote title="Get a free quote" />
      <div className="iz-card-ink">
        <strong>Contact information</strong>
        <a href="https://maps.app.goo.gl/m5ZVT8chR1iBS3fj8" target="_blank" rel="noopener noreferrer">
          131 Continental Dr Ste 305, Newark, DE 19713, USA
        </a>
        <a href="mailto:orders@iniziosolutions.com">orders@iniziosolutions.com</a>
        <a href="tel:+13027791338">+1 (302) 779-1338</a>
      </div>
    </>
  );
}
