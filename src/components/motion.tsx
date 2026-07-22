"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";

// Shared easing — the same curve the CSS reveals use, so Framer-driven and
// CSS-driven motion across the site feel like one hand.
const EASE = [0.2, 0.65, 0.2, 1] as const;

/**
 * Fades + lifts its children into place once they scroll into view. The
 * workhorse scroll-reveal for these pages. Honors reduced-motion by
 * rendering static.
 */
export function FadeIn({
  children,
  y = 26,
  delay = 0,
  className,
  as = "div",
  ...rest
}: {
  children: ReactNode;
  y?: number;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
} & Omit<HTMLMotionProps<"div">, "children" | "as">) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/**
 * Parent for a staggered reveal — children marked with <StaggerItem> come in
 * one after another. Use for lists, grids, stat rows.
 */
export function Stagger({
  children,
  className,
  gap = 0.09,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "article";
}) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
    >
      {children}
    </Comp>
  );
}

/**
 * Page-load intro: children rise in immediately on mount (not scroll-gated).
 * For above-the-fold page heroes where waiting for a scroll trigger would
 * leave the hero blank.
 */
export function Intro({
  children,
  y = 30,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  y?: number;
  delay?: number;
  className?: string;
  as?: "div" | "h1" | "p" | "span";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}
