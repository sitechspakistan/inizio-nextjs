export const BEHANCE_URL = "https://www.behance.net/iniziosolutionsllc";

/** "View us on Behance" badge linking to the Inizio Behance profile. */
export default function BehanceBadge({ className = "" }) {
  return (
    <a className={`iz-behance ${className}`} href={BEHANCE_URL} target="_blank" rel="noopener noreferrer" aria-label="View us on Behance (opens in a new tab)">
      <span className="iz-behance__mark" aria-hidden="true">
        <span className="iz-behance__be">Bē</span>
      </span>
      <span className="iz-behance__text">
        <small>View us on</small>
        <strong>Behance</strong>
      </span>
      <span className="iz-behance__arrow" aria-hidden="true">↗</span>
    </a>
  );
}
