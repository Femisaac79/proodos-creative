import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionBackdrop from "@/components/section-backdrop";
import ContactForm from "@/components/contact-form";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact · Proodos Creative Ltd",
  description:
    "Start a project or book a discovery call. Reach Proodos Creative by form, WhatsApp, email, or phone, and see answers to the questions we hear most.",
};

const CHANNELS = [
  {
    label: "WhatsApp",
    value: "Chat with us now",
    href: "https://wa.me/2348060575360",
    note: "Fastest reply",
  },
  {
    label: "Email",
    value: "hello@proodoscreative.com",
    href: "mailto:hello@proodoscreative.com",
    note: "We reply within a day",
  },
  {
    label: "Phone",
    value: "+234 806 057 5360",
    href: "tel:+2348060575360",
    note: "Mon–Fri, 9–5 WAT",
  },
  {
    label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
    note: "Working with clients everywhere",
  },
];

const FAQ = [
  {
    q: "How much does a project cost?",
    a: "It depends on scope, but we'll always give you a clear, fixed quote before anything starts. No surprises, no hourly meter running.",
  },
  {
    q: "How long does a website take?",
    a: "Most sites launch in three to six weeks. We'll give you a realistic timeline in the discovery call, based on your goals and content.",
  },
  {
    q: "Do you work with businesses outside Lagos?",
    a: "Yes. We work with clients across Nigeria and beyond. The whole process runs comfortably online, wherever you are.",
  },
  {
    q: "What happens after launch?",
    a: "We stay on. Support, measurement, and improvements are part of how we work. Launch is step five of six, not the end.",
  },
];

export default function ContactPage() {
  return (
    <div className="page theme-green">
      <SectionBackdrop variant="drift" />

      <PageHero
        eyebrow="Contact"
        title="Let's start something."
        lede="Tell us what you're building toward. Book a free discovery call, or just say hello, whichever's easier."
      />

      <section className="shell contact-grid">
        <FadeIn className="contact-form-wrap">
          <h2 className="contact-heading">Start a project</h2>
          <ContactForm />
        </FadeIn>

        <div className="contact-side">
          <FadeIn>
            <h2 className="contact-heading">Or reach us directly</h2>
          </FadeIn>
          <Stagger className="channels" gap={0.07}>
            {CHANNELS.map((c) => (
              <StaggerItem key={c.label}>
                <a className="channel" href={c.href}>
                  <span className="channel-label">{c.label}</span>
                  <span className="channel-value">{c.value}</span>
                  <span className="channel-note">{c.note}</span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn className="booking" delay={0.1}>
            <p className="eyebrow">Prefer to talk?</p>
            <p className="booking-copy">
              Book a free 30-minute discovery call. We&apos;ll talk through your
              goal and tell you honestly whether we&apos;re the right fit.
            </p>
            <a href="https://wa.me/2348060575360" className="btn mt-6">
              Book a discovery call <ArrowUpRight size={16} />
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="shell contact-faq">
        <FadeIn>
          <p className="eyebrow">Before you ask</p>
          <h2 className="headline mt-6">Questions we hear a lot</h2>
        </FadeIn>
        <div className="faq-list mt-12">
          {FAQ.map((f, i) => (
            <FadeIn className="faq-item" key={f.q} delay={i * 0.05}>
              <h3 className="faq-q">{f.q}</h3>
              <p className="faq-a">{f.a}</p>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
