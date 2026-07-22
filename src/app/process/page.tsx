import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import SectionBackdrop from "@/components/section-backdrop";
import ProcessTimeline from "@/components/process-timeline";
import { FadeIn } from "@/components/motion";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Process · Proodos Creative Ltd",
  description:
    "Discover, Strategy, Design, Development, Launch, Growth. A clear six-step process so you always know what happens after you say yes.",
};

export default function ProcessPage() {
  return (
    <div className="page theme-green">
      <SectionBackdrop variant="rise" />

      <PageHero
        title={
          <>
            You should know
            <br />
            what happens next.
          </>
        }
        lede="The difference between a professional and a freelancer is what happens after you pay. Here is exactly how a project runs with us: six steps, no surprises."
      />

      <section className="shell">
        <ProcessTimeline />
      </section>

      <section className="shell page-cta">
        <FadeIn>
          <p className="eyebrow">Ready when you are</p>
          <h2 className="headline mt-6">
            Let&apos;s start at step one, together.
          </h2>
          <Link href="/contact" className="btn mt-8">
            Book a discovery call <ArrowUpRight size={16} />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
