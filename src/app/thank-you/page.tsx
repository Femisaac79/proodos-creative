import type { Metadata } from "next";
import Link from "next/link";
import SectionBackdrop from "@/components/section-backdrop";
import PageHero from "@/components/page-hero";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { ArrowUpRight } from "@/components/icons";
import { CONTACT, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your enquiry is on its way to Proodos Creative.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

const NEXT_STEPS = [
  {
    step: "01",
    title: "Hit send in your email app",
    copy: `Your message is ready to go to ${CONTACT.email}. If your email app didn't open, message us on WhatsApp instead.`,
  },
  {
    step: "02",
    title: "We reply within one working day",
    copy: "Usually much faster. We'll ask a few questions about your goal so we can give you a clear, fixed quote.",
  },
  {
    step: "03",
    title: "A free discovery call",
    copy: "Thirty minutes to talk it through. We'll tell you honestly whether we're the right fit.",
  },
];

export default function ThankYouPage() {
  return (
    <div className="page theme-green">
      <SectionBackdrop variant="pulse" />
      <PageHero
        title={
          <>
            Thank you.
            <br />
            Let&apos;s build it.
          </>
        }
        lede="Here's what happens next. No waiting around wondering."
      />

      <section className="shell">
        <Stagger className="thanks-steps" gap={0.08}>
          {NEXT_STEPS.map((s) => (
            <StaggerItem key={s.step} className="thanks-step">
              <span className="thanks-step-num">{s.step}</span>
              <h2 className="thanks-step-title">{s.title}</h2>
              <p className="thanks-step-copy">{s.copy}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="shell page-cta">
        <FadeIn>
          <h2 className="headline">WhatsApp is the fastest way.</h2>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href={whatsappLink("Hi Proodos Creative, I just sent an enquiry from your website.")}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp <ArrowUpRight size={16} />
            </a>
            <Link href="/work" className="link">
              Browse our work meanwhile <ArrowUpRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
