"use client";

import { motion, useReducedMotion } from "framer-motion";

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
 * hidden from the accessibility tree. Every variant animates transform/
 * opacity only (compositor-friendly), and all motion is disabled for
 * prefers-reduced-motion — the tinted shapes stay as a static wash.
 */
export default function SectionBackdrop({ variant }: { variant: Variant }) {
  const reduce = useReducedMotion();

  return (
    <div className="bd" aria-hidden="true">
      {variant === "drift" && (
        <>
          <motion.div
            className="bd-blob bd-blob-a"
            animate={reduce ? undefined : { x: [0, 70, -50, 0], y: [0, -50, 45, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="bd-blob bd-blob-b"
            animate={reduce ? undefined : { x: [0, -60, 45, 0], y: [0, 40, -55, 0] }}
            transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {variant === "orbit" && (
        <>
          {/* Broken rings — the logo's orbit, blown up to landscape scale.
              Dash gap = the break; the two rings counter-rotate. */}
          <motion.svg
            className="bd-ring bd-ring-a"
            viewBox="0 0 100 100"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          >
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
          </motion.svg>
          <motion.svg
            className="bd-ring bd-ring-b"
            viewBox="0 0 100 100"
            animate={reduce ? undefined : { rotate: -360 }}
            transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
          >
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
          </motion.svg>
        </>
      )}

      {variant === "rise" &&
        DOTS.map((d) => (
          <motion.span
            key={d.left}
            className="bd-dot"
            style={{
              left: d.left,
              width: d.size,
              height: d.size,
              background: d.tint,
            }}
            animate={
              reduce
                ? undefined
                : { y: [0, -400, -800, -1200], opacity: [0, 0.9, 0.9, 0] }
            }
            transition={{
              duration: d.dur,
              delay: d.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

      {variant === "pulse" && (
        <motion.div
          className="bd-glow"
          animate={reduce ? undefined : { scale: [1, 1.16, 1], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
