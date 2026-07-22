import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import SectionBackdrop from "@/components/section-backdrop";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services · Proodos Creative Ltd",
  description:
    "Website design and development, business solutions, branding and graphic design, video and motion graphics, and GS1 barcode registration. Everything a business needs to be chosen.",
};

const SERVICES = [
  {
    num: "01",
    name: "Website Design & Development",
    summary:
      "Premium, fast websites built to turn visitors into customers, not just to look good.",
    includes: [
      "Conversion-focused design",
      "Next.js builds, built for speed",
      "Booking, enquiry & payment flows",
      "Local SEO & Google Business setup",
    ],
  },
  {
    num: "02",
    name: "Business Solutions",
    summary:
      "Digital tools that streamline how you operate, from bookings to customer records.",
    includes: [
      "Booking & scheduling systems",
      "Customer & lead management",
      "WhatsApp & payment integrations",
      "Dashboards and automation",
    ],
  },
  {
    num: "03",
    name: "Branding & Graphic Design",
    summary:
      "Identity systems that make a new business look established and a growing one look serious.",
    includes: [
      "Logo & visual identity",
      "Brand guidelines",
      "Social & marketing graphics",
      "Print, signage & packaging",
    ],
  },
  {
    num: "04",
    name: "Video & Motion Graphics",
    summary:
      "Stories told in motion, from brand films to product explainers and social ads.",
    includes: [
      "Brand & promo films",
      "Explainer & product videos",
      "Motion graphics & animation",
      "Social-first edits",
    ],
  },
  {
    num: "05",
    name: "Barcode Registration",
    summary:
      "Genuine GS1 barcodes that get your products scan-ready and shelf-ready for retail.",
    includes: [
      "GS1-registered barcodes",
      "Retail & export compliance",
      "Artwork-ready barcode files",
      "Product data setup",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="page theme-green">
      <SectionBackdrop variant="drift" />

      <PageHero
        title="Everything a business needs to be chosen."
        lede="Five services, one goal: make your business easier to find, quicker to trust, and simpler to buy from. Take one, or take the set that grows together."
      />

      <div className="shell">
        <Stagger className="svc-list">
          {SERVICES.map((s) => (
            <StaggerItem className="svc" key={s.num}>
              <div className="svc-top">
                <span className="svc-num" aria-hidden="true">
                  {s.num}
                </span>
                <div className="svc-head">
                  <h2 className="svc-name">{s.name}</h2>
                  <p className="svc-summary">{s.summary}</p>
                </div>
                <ArrowUpRight size={26} />
              </div>
              <ul className="svc-includes">
                {s.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <section className="shell page-cta">
        <FadeIn>
          <p className="eyebrow">Not sure where to start?</p>
          <h2 className="headline mt-6">
            Tell us the goal. We&apos;ll tell you the service.
          </h2>
          <Link href="/contact" className="btn mt-8">
            Book a discovery call <ArrowUpRight size={16} />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
