import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import SectionBackdrop from "@/components/section-backdrop";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Work · Proodos Creative Ltd",
  description:
    "Concept case studies showing how we turn websites, branding, and video into customer trust and measurable growth for diagnostic centres, hotels, dental clinics, and real estate.",
};

type CaseStudy = {
  index: string;
  name: string;
  sector: string;
  challenge: string;
  solution: string;
  before: string;
  after: string;
  tech: string[];
  results: { value: string; label: string }[];
};

const CASES: CaseStudy[] = [
  {
    index: "01",
    name: "Meridian Diagnostics",
    sector: "Diagnostic Centre",
    challenge:
      "A well-equipped lab that almost no one could find online. Bookings were phone-only, results meant a second trip, and newer competitors owned every local search.",
    solution:
      "A conversion-focused website with online test booking, a secure results portal, and local SEO built around the searches patients actually type, backed by a claimed, optimised Google Business Profile.",
    before: "Invisible in search. Walk-ins and phone calls only.",
    after: "Ranks for local test searches. Patients book and pay online.",
    tech: ["Next.js", "Online Booking", "Local SEO", "WhatsApp API"],
    results: [
      { value: "+180%", label: "Enquiries in 90 days" },
      { value: "3×", label: "Online test bookings" },
      { value: "Page 1", label: "Local search ranking" },
    ],
  },
  {
    index: "02",
    name: "The Kuramo",
    sector: "Boutique Hotel",
    challenge:
      "A beautiful property renting its bookings from the travel platforms. Every reservation carried a commission, and the brand guests met online was not the one they met at the door.",
    solution:
      "A cinematic website with a direct booking engine, a refreshed identity, and a short brand film, so the hotel owns its story and keeps the margin on every stay.",
    before: "OTA-dependent. Up to 22% lost to commissions.",
    after: "Direct bookings lead. The brand carries the premium.",
    tech: ["Next.js", "Booking Engine", "Brand Identity", "Motion"],
    results: [
      { value: "40%", label: "Bookings now direct" },
      { value: "22%", label: "Commission recovered" },
      { value: "+65%", label: "Avg. session time" },
    ],
  },
  {
    index: "03",
    name: "Bright & Co. Dental",
    sector: "Dental Clinic",
    challenge:
      "A trusted practice with a website that undersold it. New patients bounced on mobile, there was no way to request an appointment, and none of the trust the clinic had earned showed up on screen.",
    solution:
      "A calm, modern site with clear treatment pages, online appointment requests, a real before-and-after gallery, and patient reviews placed where hesitation happens.",
    before: "Dated site. No booking path. Low trust signals.",
    after: "A new-patient engine that works on the phone in your hand.",
    tech: ["Website", "Appointments", "Branding", "Photography"],
    results: [
      { value: "2.4×", label: "Appointment requests" },
      { value: "+90%", label: "Mobile engagement" },
      { value: "4.9★", label: "Reviews, front and centre" },
    ],
  },
  {
    index: "04",
    name: "Anchor Realty",
    sector: "Real Estate",
    challenge:
      "Listings lived in WhatsApp broadcasts and Instagram grids. Serious buyers could not tell the agency apart from a middleman, and good leads went cold before anyone replied.",
    solution:
      "A listings platform with search, agent profiles, and instant lead capture, wrapped in a brand system and short property reels that make the agency look as established as it is.",
    before: "Scattered listings. Slow replies. Thin credibility.",
    after: "One listings hub. Qualified leads, answered fast.",
    tech: ["Next.js", "Listings CMS", "Lead Capture", "Motion"],
    results: [
      { value: "+150%", label: "Qualified leads" },
      { value: "<5 min", label: "Average response" },
      { value: "1 brand", label: "Across web and social" },
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="page theme-ink">
      <SectionBackdrop variant="orbit" />

      <PageHero
        title={
          <>
            Proof, not
            <br />
            portfolios.
          </>
        }
        lede="Screenshots show what a project looks like. Case studies show what it earns. Below are concept engagements, built to demonstrate exactly how we work, for the industries we help most."
      >
        <p className="page-hero-note">
          Concept projects, real methodology. Every result shown is illustrative
          of the outcomes this approach is designed to produce.
        </p>
      </PageHero>

      <div className="cases">
        {CASES.map((c) => (
          <section className="case shell" key={c.index}>
            <div className="case-head">
              <FadeIn className="case-index" y={16}>
                <span aria-hidden="true">{c.index}</span>
              </FadeIn>
              <FadeIn delay={0.05}>
                <p className="eyebrow">{c.sector}</p>
                <h2 className="headline case-name">{c.name}</h2>
                <span className="case-tag">Concept</span>
              </FadeIn>
            </div>

            <div className="case-body">
              <FadeIn className="case-block">
                <h3 className="case-label">Challenge</h3>
                <p className="case-text">{c.challenge}</p>
              </FadeIn>
              <FadeIn className="case-block" delay={0.08}>
                <h3 className="case-label">Our solution</h3>
                <p className="case-text">{c.solution}</p>
              </FadeIn>
            </div>

            <FadeIn className="case-ba" delay={0.05}>
              <div className="ba-panel ba-before">
                <span className="ba-tag">Before</span>
                <p>{c.before}</p>
              </div>
              <div className="ba-arrow" aria-hidden="true">
                <ArrowUpRight size={22} />
              </div>
              <div className="ba-panel ba-after">
                <span className="ba-tag">After</span>
                <p>{c.after}</p>
              </div>
            </FadeIn>

            <div className="case-foot">
              <FadeIn className="case-tech">
                <h3 className="case-label">Technologies</h3>
                <ul>
                  {c.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </FadeIn>

              <Stagger className="case-results" gap={0.1}>
                {c.results.map((r) => (
                  <StaggerItem className="case-stat" key={r.label}>
                    <span className="case-stat-value">{r.value}</span>
                    <span className="case-stat-label">{r.label}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        ))}
      </div>

      <section className="shell page-cta">
        <FadeIn>
          <h2 className="headline">Your project could be the next case study.</h2>
          <Link href="/contact" className="btn mt-8">
            Start a project <ArrowUpRight size={16} />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
