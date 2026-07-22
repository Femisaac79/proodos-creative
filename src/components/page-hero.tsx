import type { ReactNode } from "react";
import { Intro } from "./motion";

/**
 * Consistent page intro across the routed pages: a small counter/eyebrow, a
 * big Unbounded headline, and a supporting lede — each rising in on load so
 * every page opens with the same orchestrated beat.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-hero shell">
      {eyebrow && (
        <Intro as="p" className="eyebrow" delay={0.05}>
          {eyebrow}
        </Intro>
      )}
      <Intro as="h1" className="display page-hero-title" delay={0.15}>
        {title}
      </Intro>
      {lede && (
        <Intro as="p" className="page-hero-lede" delay={0.28}>
          {lede}
        </Intro>
      )}
      {children && <Intro delay={0.4}>{children}</Intro>}
    </header>
  );
}
