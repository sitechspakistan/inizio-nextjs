import Link from "next/link";

export default function Footer() {
  return (
    <footer className="iz-root iz-footer">
      <div className="iz-container iz-footer__inner">
        <div className="iz-footer__cols">
          <div className="iz-footer__brand">
            <Link href="/" aria-label="Inizio Solutions home">
              <img src="/assets/images/inizo-logo-removebg-preview.png" alt="Inizio Solutions" width="190" height="44" />
            </Link>
            <p>Embroidery digitizing, vector art and custom patches for the USA since 2015.</p>
            <div className="iz-footer__social">
              <a href="https://www.facebook.com/iniziosolutionsllc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/iniziosolutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/company/iniziosolutions/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="iz-footer__col">
            <strong>Services</strong>
            <Link href="/services/embroidery-digitizing">Embroidery Digitizing</Link>
            <Link href="/services/vector-art">Vector Art</Link>
            <Link href="/services/custom-patches">Custom Patches</Link>
            <Link href="/coming-soon">Shirts &amp; Caps</Link>
            <a href="https://www.etsy.com/shop/iniziosolutionsshop/?etsrc=sdt" target="_blank" rel="noopener noreferrer">Etsy Shop</a>
          </div>

          <div className="iz-footer__col">
            <strong>Company</strong>
            <Link href="/pricing">Pricing</Link>
            <Link href="/portfolio">Portfolio</Link>
            <a href="https://www.behance.net/iniziosolutionsllc" target="_blank" rel="noopener noreferrer">Behance</a>
            <Link href="/blog">Blog</Link>
            <Link href="/place-an-order">Place an Order</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms of Use</Link>
          </div>

          <div className="iz-footer__col">
            <strong>Contact</strong>
            <a href="https://maps.app.goo.gl/m5ZVT8chR1iBS3fj8" target="_blank" rel="noopener noreferrer">
              131 Continental Dr Ste 305, Newark, DE 19713, USA
            </a>
            <a href="mailto:orders@iniziosolutions.com">orders@iniziosolutions.com</a>
            <a href="tel:+13027791338">+1 (302) 779-1338</a>
          </div>
        </div>

        <div className="iz-footer__bottom">
          <span>
            © Inizio Solutions {new Date().getFullYear()}. All rights reserved. Designed &amp; Developed by{" "}
            <a href="https://sitechs.co" target="_blank" rel="noopener noreferrer">Sitechs</a>.
          </span>
          <span>PayPal · Visa · Mastercard · AMEX · Apple Pay · Wire</span>
        </div>
      </div>
    </footer>
  );
}
