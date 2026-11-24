"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Site-wide scroll reveal for `.iz-reveal` elements. Runs again on every
// client-side navigation. Elements already on screen are shown immediately
// (no flash); the rest fade in once as they scroll into view. Does nothing
// for visitors who prefer reduced motion, and content stays visible without JS.
export default function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll(".iz-reveal"));
    const vh = window.innerHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.remove("iz-reveal");
    });
    document.documentElement.classList.add("iz-motion");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          io.unobserve(el);
          el.classList.add("is-in");
          // Drop the reveal classes afterwards so hover transitions aren't delayed.
          const done = (ev) => {
            if (ev.target !== el) return;
            el.removeEventListener("transitionend", done);
            el.classList.remove("iz-reveal", "is-in");
          };
          el.addEventListener("transitionend", done);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    document.querySelectorAll(".iz-reveal").forEach((el) => io.observe(el));

    // Also watch for reveal elements added later (tab switches, galleries…).
    const mo = new MutationObserver((records) => {
      records.forEach((rec) =>
        rec.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.classList.contains("iz-reveal")) io.observe(node);
          node.querySelectorAll?.(".iz-reveal").forEach((el) => io.observe(el));
        })
      );
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
