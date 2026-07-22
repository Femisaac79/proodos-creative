"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

const STEPS = [
  {
    num: "01",
    name: "Discover",
    copy: "We learn your business, your customers, and what a win actually looks like. No assumptions. We ask the questions that shape everything after.",
  },
  {
    num: "02",
    name: "Strategy",
    copy: "We turn the goal into a plan: what to build, what to say, and how each piece moves someone from stranger to customer.",
  },
  {
    num: "03",
    name: "Design",
    copy: "We design the experience around trust and clarity: the look, the words, the flow. Then we refine it with you in the open.",
  },
  {
    num: "04",
    name: "Development",
    copy: "We build it fast, robust, and ready: clean code, real performance, and every booking, form, and payment path working.",
  },
  {
    num: "05",
    name: "Launch",
    copy: "We take it live carefully: tested, optimised for search, and set up so you can see exactly what it's doing from day one.",
  },
  {
    num: "06",
    name: "Growth",
    copy: "We stay with you, measuring, improving, and adding what the numbers ask for. The work compounds as your business grows.",
  },
];

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  // Smooth the raw scroll progress so the drawn line eases rather than
  // tracking every jitter of the wheel.
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div className="timeline" ref={ref}>
      <div className="timeline-track" aria-hidden="true">
        <motion.div
          className="timeline-fill"
          style={{ scaleY: reduce ? 1 : progress }}
        />
      </div>

      <ol className="timeline-steps">
        {STEPS.map((s, i) => (
          <motion.li
            className="timeline-step"
            key={s.num}
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 0.6, ease: [0.2, 0.65, 0.2, 1] }}
          >
            <div className="timeline-node" aria-hidden="true">
              <span>{s.num}</span>
            </div>
            <div className="timeline-content">
              <h3 className="timeline-name">{s.name}</h3>
              <p className="timeline-copy">{s.copy}</p>
            </div>
            {i < STEPS.length - 1 && (
              <span className="timeline-next" aria-hidden="true">
                ↓
              </span>
            )}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
