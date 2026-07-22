import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionBackdrop from "@/components/section-backdrop";
import NewsletterForm from "@/components/newsletter-form";
import { FadeIn, Intro } from "@/components/motion";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { ARTICLES, getArticle } from "@/content/articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article · Proodos Creative Ltd" };
  return {
    title: `${article.title} · Proodos Creative`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const idx = ARTICLES.findIndex((a) => a.slug === slug);
  const next = ARTICLES[(idx + 1) % ARTICLES.length];

  return (
    <div className="page theme-ink">
      <SectionBackdrop variant="pulse" />

      <article className="article-page shell">
        <Intro as="p" className="eyebrow" delay={0.05}>
          <Link href="/insights" className="article-back">
            Insights
          </Link>
          <span className="article-crumb-sep" aria-hidden="true">
            /
          </span>
          {article.tag}
        </Intro>

        <Intro as="h1" className="article-headline" delay={0.15}>
          {article.title}
        </Intro>

        <Intro as="p" className="article-dek" delay={0.26}>
          {article.dek}
        </Intro>

        <Intro className="article-byline" delay={0.36}>
          <span>Proodos Creative</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </Intro>

        <div className="article-body">
          {article.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <FadeIn key={i} y={18}>
                  <h2 className="article-h2">{block.text}</h2>
                </FadeIn>
              );
            }
            if (block.type === "ul") {
              return (
                <FadeIn key={i} y={18}>
                  <ul className="article-ul">
                    {block.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                </FadeIn>
              );
            }
            return (
              <FadeIn key={i} y={18}>
                <p className="article-p">{block.text}</p>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="article-inline-cta">
          <p className="article-inline-cta-copy">
            This is exactly the kind of work we do. If it is on your mind for
            your own business, let us talk it through.
          </p>
          <Link href="/contact" className="btn">
            Start a project <ArrowUpRight size={16} />
          </Link>
        </FadeIn>
      </article>

      <section className="shell article-next">
        <FadeIn>
          <p className="eyebrow">Read next</p>
          <Link href={`/insights/${next.slug}`} className="article-next-link">
            <span className="article-next-tag">{next.tag}</span>
            <span className="article-next-title">{next.title}</span>
            <span className="article-next-go">
              Read the article <ArrowRight size={18} />
            </span>
          </Link>
        </FadeIn>
      </section>

      <section className="shell newsletter">
        <FadeIn>
          <p className="eyebrow">Stay ahead</p>
          <h2 className="headline mt-6 newsletter-title">
            Get the next one in your inbox.
          </h2>
          <p className="newsletter-copy">
            Practical reads for business owners, roughly twice a month. No spam,
            no filler, and you can leave any time.
          </p>
          <NewsletterForm source={`article:${article.slug}`} />
        </FadeIn>
      </section>
    </div>
  );
}
