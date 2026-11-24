"use client";

import Link from "next/link";
import { useState } from "react";

const SERVICES = [
  { href: "/services/embroidery-digitizing", label: "Embroidery Digitizing" },
  { href: "/services/vector-art", label: "Vector Art Conversion" },
  { href: "/services/custom-patches", label: "Custom Patches" },
];

// Same menu as the live site (iniziosolutions.com).
const PROMO = [
  { href: "/coming-soon", label: "PP T-Shirt" },
  { href: "/coming-soon", label: "PP Caps" },
];

const LINKS = [
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
];

const SHOP = { href: "https://www.etsy.com/shop/iniziosolutionsshop/?etsrc=sdt", label: "Shop", external: true };

function OrderButton({ className = "", onClick }) {
  return (
    <Link href="/place-an-order" className={`iz-order-btn ${className}`} onClick={onClick}>
      <span className="iz-order-btn__label">Place an Order</span>
      <svg className="iz-order-btn__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    </Link>
  );
}

function Caret() {
  return (
    <svg className="iz-nav__caret" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NavLink({ item, className, onClick }) {
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className} onClick={onClick}>
      {item.label}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="iz-root iz-topbar">
        <div className="iz-container iz-topbar__inner">
          <span>
            Your first order is <strong>free</strong> · Unlimited free quotes, 24/7
          </span>
          <span className="iz-topbar__contact">
            <a href="tel:+13027791338">+1 (302) 779-1338</a>
            <a href="mailto:orders@iniziosolutions.com">orders@iniziosolutions.com</a>
          </span>
        </div>
      </div>

      <header className="iz-root iz-header">
        <div className="iz-container iz-header__inner">
          <Link href="/" className="iz-logo" aria-label="Inizio Solutions home">
            <img src="/assets/images/inizo-logo-removebg-preview.png" alt="Inizio Solutions" width="180" height="42" />
          </Link>

          <nav className="iz-nav" aria-label="Main">
            <div className="iz-nav__item">
              <Link href="/services" aria-haspopup="true">
                Services <Caret />
              </Link>
              <div className="iz-dropdown">
                {SERVICES.map((s) => (
                  <NavLink key={s.href} item={s} />
                ))}
              </div>
            </div>
            {LINKS.map((l) => (
              <NavLink key={l.href} item={l} />
            ))}
            <div className="iz-nav__item">
              <Link href="/coming-soon" aria-haspopup="true">
                Promotional Product <Caret />
              </Link>
              <div className="iz-dropdown">
                {PROMO.map((s) => (
                  <NavLink key={s.label} item={s} />
                ))}
              </div>
            </div>
            <NavLink item={SHOP} />
          </nav>

          <div className="iz-header__cta">
            <OrderButton />
            <button
              type="button"
              className="iz-burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="iz-mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1220" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                {open ? (
                  <path d="M6 6l12 12M18 6 6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div id="iz-mobile-menu" className="iz-mobile" hidden={!open}>
          <div className="iz-container iz-mobile__inner">
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="iz-mobile__sub" onClick={() => setOpen(false)}>
                {s.label}
              </Link>
            ))}
            {LINKS.map((l) => (
              <NavLink key={l.href} item={l} onClick={() => setOpen(false)} />
            ))}
            <Link href="/coming-soon" onClick={() => setOpen(false)}>Promotional Product</Link>
            {PROMO.map((s) => (
              <NavLink key={s.label} item={s} className="iz-mobile__sub" onClick={() => setOpen(false)} />
            ))}
            <NavLink item={SHOP} />
            <OrderButton className="iz-order-btn--block" onClick={() => setOpen(false)} />
          </div>
        </div>
      </header>
    </>
  );
}
