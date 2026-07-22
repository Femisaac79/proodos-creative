import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import SectionBackdrop from "@/components/section-backdrop";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "About · Proodos Creative Ltd",
  description:
    "Proodos Creative is a studio that treats design as a business tool. We build credibility, attract customers, and grow revenue, not just beautiful screens.",
};

const BELIEFS = [
  {
    title: "Your website is your first employee",
    copy: "It is not an art project. It is the first member of your team a customer meets. We design it to do the job an employee would: earn trust and ask for the sale.",
  },
  {
    title: "People decide in seconds",
    copy: "Most visitors judge you before they read a word. We spend our craft on those first seconds, the ones that decide whether anyone stays.",
  },
  {
    title: "Growth over decoration",
    copy: "Anyone can make something pretty. What matters is enquiries, bookings, and revenue, the numbers that keep a business alive.",
  },
  {
    title: "Built to be understood",
    copy: "Clear beats clever. If a customer has to think about how something works, we have already lost them. Simplicity is the hardest thing we do.",
  },
];

const HOW = [
  {
    k: "We start with the goal",
    v: "Before a single pixel, we ask what a win looks like: more bookings, higher-value clients, less admin. Then we design backwards from it.",
  },
  {
    k: "We work in the open",
    v: "You see progress early and often. No black box, no big reveal that misses the mark. Feedback shapes the work as it happens.",
  },
  {
    k: "We stay after launch",
    v: "Launch is the start, not the finish. We support, measure, and improve long after the site goes live.",
  },
];

export default function AboutPage() {
  return (
    <div className="page theme-ink">
      <SectionBackdrop variant="pulse" />

      <PageHero
        title={
          <>
            We treat design
            <br />
            as a business tool.
          </>
        }
        lede="Proodos Creative is a studio for businesses that need to be chosen. We build the credibility, the customers, and the growth. The design is how we get there, not the point of it."
      />

      <section className="shell about-philosophy">
        <FadeIn>
          <p className="eyebrow">Our philosophy</p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="about-statement">
            Most studios sell you how something looks. We care how it{" "}
            <em>performs</em>, because a business does not grow on compliments.
            It grows on trust, and trust is designed.
          </p>
        </FadeIn>
      </section>

      <section className="shell">
        <Stagger className="beliefs">
          {BELIEFS.map((b) => (
            <StaggerItem className="belief" key={b.title}>
              <h3 className="belief-title">{b.title}</h3>
              <p className="belief-copy">{b.copy}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="shell about-how">
        <FadeIn>
          <p className="eyebrow">How we work</p>
          <h2 className="headline mt-6 max-w-3xl">
            The way a studio works tells you what it&apos;s like to hire one.
          </h2>
        </FadeIn>
        <div className="about-how-list mt-12">
          {HOW.map((h, i) => (
            <FadeIn className="about-how-row" key={h.k} delay={i * 0.06}>
              <h3 className="about-how-k">{h.k}</h3>
              <p className="about-how-v">{h.v}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="shell page-cta">
        <FadeIn>
          <p className="eyebrow">People buy people</p>
          <h2 className="headline mt-6">Let&apos;s put a face to the work.</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <Link href="/process" className="btn">
              See our process <ArrowUpRight size={16} />
            </Link>
            <Link href="/contact" className="link">
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
