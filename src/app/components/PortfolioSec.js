import Link from "next/link";
import Gallery from "./ui/Gallery";
import BehanceBadge from "./ui/BehanceBadge";

const IMAGES = {
  digitizing: ["11.webp", "12.webp", "13.webp", "14.webp", "15.webp", "20.webp", "25.webp", "9.webp"],
  "vector-art": ["11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "20.jpg", "25.jpg", "16.jpg"],
  "custom-patch": ["1.jpg", "2.jpeg", "3.jpeg", "4.png", "5.jpg", "6.jpg", "7.jpg"],
  "mix-img": ["1.webp", "2.webp", "3.webp", "4.webp", "20.webp", "25.webp", "23.webp", "24.webp"],
};

const ALT = {
  digitizing: "Embroidery digitizing sample",
  "vector-art": "Vector art conversion sample",
  "custom-patch": "Custom patch sample",
  "mix-img": "Embroidery digitizing and vector art sample",
};

// Portfolio strip used on service and city pages. Props kept from the old design.
export default function PortfolioSec({ subheading, heading, type = "mix-img" }) {
  const list = IMAGES[type] || IMAGES["mix-img"];
  const images = list.map((f) => ({ src: `/assets/images/portfolio/${type}/${f}`, alt: `${ALT[type] || ALT["mix-img"]} | Inizio Solutions` }));

  return (
    <section className="iz-root iz-container iz-section iz-portfolio">
      <div className="iz-portfolio__head">
        <div className="iz-section-head iz-reveal">
          <span className="iz-eyebrow">{subheading}</span>
          <h2 className="iz-h2">{heading}</h2>
        </div>
        <div className="iz-portfolio__actions">
          <Link className="iz-btn iz-btn--outline" href="/portfolio">View full portfolio →</Link>
          <BehanceBadge />
        </div>
      </div>
      <Gallery images={images} />
    </section>
  );
}
