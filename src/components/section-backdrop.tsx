"use client";

import { useEffect, useRef } from "react";

type Variant = "drift" | "orbit" | "rise" | "pulse";

// Rising dots for the "rise" variant — spread across the width, varied
// size/speed/delay so they read as loose particles, not a grid. One blue
// dot slips in as a quiet nod to the trust color.
const DOTS = [
  { left: "7%", size: 11, dur: 22, delay: 0, tint: "rgba(255,255,255,0.55)" },
  { left: "21%", size: 7, dur: 17, delay: 6, tint: "rgba(11,11,11,0.3)" },
  { left: "37%", size: 14, dur: 26, delay: 2, tint: "rgba(255,255,255,0.4)" },
  { left: "55%", size: 8, dur: 19, delay: 9, tint: "rgba(1,114,165,0.4)" },
  { left: "71%", size: 12, dur: 24, delay: 4, tint: "rgba(255,255,255,0.5)" },
  { left: "88%", size: 9, dur: 18, delay: 12, tint: "rgba(11,11,11,0.25)" },
];

/**
 * Decorative animated layer behind a green section. Purely visual:
 * absolutely positioned, clipped by the section, ignores pointer events,
 * hidden from the accessibility tree.
 *
 * All motion is CSS keyframes on transform/opacity, so it runs on the
 * compositor rather than a JS loop, and it is paused (`.bd-idle`) whenever
 * the section is off-screen — a long page no longer animates a dozen
 * layers nobody can see. prefers-reduced-motion stops it entirely; the
 * tinted shapes stay as a static wash.
 */
export default function SectionBackdrop({ variant }: { variant: Variant }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => el.classList.toggle("bd-idle", !entry.isIntersecting),
      { rootMargin: "120px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`bd bd-idle bd-${variant}`} aria-hidden="true">
      {variant === "drift" && (
        <>
          <div className="bd-blob bd-blob-a" />
          <div className="bd-blob bd-blob-b" />
        </>
      )}

      {variant === "orbit" && (
        <>
          {/* Broken rings — the logo's orbit, blown up to landscape scale.
              Dash gap = the break; the two rings counter-rotate. */}
          <svg className="bd-ring bd-ring-a" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.7"
              strokeLinecap="round"
              strokeDasharray="225 70.3"
            />
          </svg>
          <svg className="bd-ring bd-ring-b" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="rgba(1,114,165,0.22)"
              strokeWidth="0.9"
              strokeLinecap="round"
              strokeDasharray="160 135.3"
            />
          </svg>
        </>
      )}

      {variant === "rise" &&
        DOTS.map((d) => (
          <span
            key={d.left}
            className="bd-dot"
            style={
              {
                left: d.left,
                width: d.size,
                height: d.size,
                background: d.tint,
                "--dur": `${d.dur}s`,
                "--delay": `${d.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}

      {variant === "pulse" && <div className="bd-glow" />}
    </div>
  );
}
