import type { ReactNode } from "react";
import SectionBackdrop from "./section-backdrop";
import PageHero from "./page-hero";

export type LegalSection = { heading: string; body: ReactNode[] };

/** Shared layout for the privacy and terms pages: plain, readable, no motion beyond the hero. */
export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="page theme-ink">
      <SectionBackdrop variant="drift" />
      <PageHero title={title} lede={intro}>
        <p className="legal-updated">Last updated {updated}</p>
      </PageHero>
      <article className="shell legal-body article-body">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="article-h2">{s.heading}</h2>
            {s.body.map((b, i) =>
              Array.isArray(b) ? (
                <ul key={i} className="article-ul">
                  {b.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              ) : (
                <p key={i} className="article-p">
                  {b}
                </p>
              ),
            )}
          </section>
        ))}
      </article>
    </div>
  );
}
