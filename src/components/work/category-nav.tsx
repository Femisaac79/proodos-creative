"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "websites", label: "Websites" },
  { id: "graphics", label: "Graphics & Logos" },
  { id: "barcodes", label: "Barcodes" },
];

export default function CategoryNav() {
  const [active, setActive] = useState("websites");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that is on screen.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="cat-nav">
      <div className="cat-nav-inner">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => go(s.id)}
            className={`cat-pill${active === s.id ? " is-active" : ""}`}
            aria-current={active === s.id ? "true" : undefined}
          >
            {active === s.id && (
              <motion.span
                layoutId="cat-pill-bg"
                className="cat-pill-bg"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            )}
            <span className="cat-pill-label">{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
