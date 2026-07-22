import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import SectionBackdrop from "@/components/section-backdrop";
import NewsletterForm from "@/components/newsletter-form";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { ArrowUpRight } from "@/components/icons";
import { ARTICLES } from "@/content/articles";

export const metadata: Metadata = {
  title: "Insights · Proodos Creative Ltd",
  description:
    "Practical articles for business owners: why a website earns trust, Google Business Profile vs a website, how hotels lose bookings, and what GS1 barcode registration really is.",
};

export default function InsightsPage() {
  return (
    <div className="page theme-ink">
      <SectionBackdrop variant="orbit" />

      <PageHero
        title="Answers before questions."
        lede="Short, useful reads for business owners: the questions our clients ask before they hire anyone. No jargon, no filler, just what is worth knowing."
      />

      <div className="shell">
        <Stagger className="articles">
          {ARTICLES.map((a) => (
            <StaggerItem className="article" as="article" key={a.slug}>
              <Link href={`/insights/${a.slug}`} className="article-link">
                <div className="article-top">
                  <span className="article-tag">{a.tag}</span>
                  <span className="article-read">{a.readTime}</span>
                </div>
                <h2 className="article-title">{a.title}</h2>
                <p className="article-excerpt">{a.excerpt}</p>
                <span className="article-cta">
                  Read the article <ArrowUpRight size={16} />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <section className="shell newsletter">
        <FadeIn>
          <p className="eyebrow">The newsletter</p>
          <h2 className="headline mt-6 newsletter-title">
            New reads, straight to your inbox.
          </h2>
          <p className="newsletter-copy">
            Get each new article as we publish it, roughly twice a month. No
            spam, no filler, and you can leave any time.
          </p>
          <NewsletterForm source="insights" />
        </FadeIn>
      </section>
    </div>
  );
}
