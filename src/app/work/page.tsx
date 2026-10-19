import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import SectionBackdrop from "@/components/section-backdrop";
import { FadeIn } from "@/components/motion";
import { ArrowUpRight } from "@/components/icons";
import CategoryNav from "@/components/work/category-nav";
import GraphicsSpiral from "@/components/work/graphics-spiral";
import BarcodeShelf from "@/components/work/barcode-shelf";

export const metadata: Metadata = {
  title: "Our Work · Websites, Graphics & Barcodes",
  description:
    "The work of Proodos Creative — websites, flyers and logo designs, and retail-ready product barcodes for businesses in Nigeria and across Africa. Diagnostic centres, medspas, security firms, restaurants, food brands, and consulting firms.",
  alternates: { canonical: "/work" },
};

type Project = {
  index: string;
  name: string;
  sector: string;
  location?: string;
  overview: string;
  build: string;
  deliverables: string[];
  tech: string[];
  url?: string;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    name: "Top Class Business Consulting",
    sector: "Business Consulting",
    overview:
      "A business consulting firm working on the principle that business growth begins with people.",
    build:
      "A polished corporate website that presents the firm's services and approach, builds authority, and turns visitors into consultation enquiries.",
    deliverables: ["Website Design & Development", "SEO", "Brand Styling"],
    tech: ["Next.js", "React", "Tailwind CSS"],
    url: "https://www.topclassbusinessconsult.com",
  },
  {
    index: "02",
    name: "Multi-Ray Diagnostic Centre",
    sector: "Diagnostics & Healthcare",
    overview:
      "A modern diagnostic centre offering laboratory tests, ultrasound, X-ray, ECG, health screening, and home sample collection, with a promise of accurate diagnostics patients can trust.",
    build:
      "A multi-page website with a full service catalogue, curated health-check packages, online test booking, and home sample-collection requests, structured so patients can find the right test and book it in a couple of taps.",
    deliverables: ["Website Design & Development", "Online Booking", "SEO"],
    tech: ["Next.js", "React", "Tailwind CSS"],
    url: "https://taupe-kulfi-c22e9f.netlify.app/",
  },
  {
    index: "03",
    name: "Xbaz Solutions",
    sector: "Procurement & Supplies",
    overview:
      "A B2B procurement partner bringing premium personal protective equipment, security solutions, renewable energy products, and electrical accessories together under one trusted brand.",
    build:
      "A multi-page corporate website with solutions and industries sections and a request-a-quote flow, plus a built-in blog CMS and admin dashboard so the team can publish insights and manage content themselves.",
    deliverables: ["Website Design & Development", "CMS & Admin Dashboard", "SEO"],
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    index: "04",
    name: "Sunshine Guard Services Ltd",
    sector: "Security Services",
    overview:
      "A security services company that needed to look as serious and dependable as the protection it provides.",
    build:
      "An award-style corporate website with bold motion and a confident identity, presenting the company's services and credibility to win larger, trust-sensitive contracts.",
    deliverables: ["Website Design & Development", "Brand Identity", "Motion"],
    tech: ["Next.js", "React", "Framer Motion"],
    url: "https://www.sunshineguardservices.com",
  },
  {
    index: "05",
    name: "Debinco Aesthetic Clinic & Spa",
    sector: "Aesthetic Clinic & Spa",
    location: "Ojodu Berger, Lagos",
    overview:
      "An aesthetic clinic and spa offering skincare, beauty, and wellness treatments to clients in Lagos.",
    build:
      "An elegant, calming website with clear treatment pages, a booking path, and a gallery, designed to convey premium care and turn browsers into booked appointments.",
    deliverables: ["Website Design & Development", "Booking", "Brand Styling"],
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    index: "06",
    name: "Bellefood",
    sector: "Restaurant",
    overview:
      "A restaurant with a simple promise — good food, great vibes — that needed a landing page with the same energy.",
    build:
      "A bold, dark landing page with the menu, atmosphere, and contact details up front, built to make first-time visitors want to come in.",
    deliverables: ["Website Design", "Brand Styling"],
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    index: "07",
    name: "Emplatnum Aesthetics Medspa",
    sector: "Laser & Medspa",
    location: "Lagos, Nigeria",
    overview:
      "A premium laser and medspa positioning itself among Lagos' high-end aesthetic destinations.",
    build:
      "A premium, editorial website with detailed treatment and laser service pages, consultation enquiries, and SEO built around the treatments clients search for.",
    deliverables: ["Website Design & Development", "SEO", "Brand Styling"],
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    index: "08",
    name: "My Food by Hilda",
    sector: "Food & Catering",
    overview:
      "A food brand built around food made with passion, serving home-style meals and catering.",
    build:
      "A 13-page website with a menu, ordering and catering enquiries, and a warm, appetite-driven brand, giving the business a proper home beyond social media.",
    deliverables: ["Website Design & Development", "Brand Identity"],
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
];

export default function WorkPage() {
  return (
    <div className="page theme-ink">
      <SectionBackdrop variant="orbit" />

      <PageHero
        title={
          <>
            The work,
            <br />
            not the talk.
          </>
        }
        lede="Websites, graphics and logo designs, and retail-ready product barcodes — the full range of what we make for the businesses we work with. Explore each below."
      >
        <p className="page-hero-note">
          Three disciplines, one studio. Every piece here was delivered end to
          end by Proodos Creative.
        </p>
      </PageHero>

      <CategoryNav />

      <section id="websites" className="cat-section">
        <FadeIn className="shell cat-header">
          <h2 className="cat-title">Websites we&apos;ve built</h2>
          <p className="cat-lede">
            Full websites, designed and developed end to end for real
            businesses across Nigeria and beyond.
          </p>
        </FadeIn>

      <div className="cases">
        {PROJECTS.map((p) => (
          <section className="case shell" key={p.index}>
            <div className="case-head">
              <FadeIn className="case-index" y={16}>
                <span aria-hidden="true">{p.index}</span>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h2 className="headline case-name">{p.name}</h2>
                <span className="case-tag">
                  {p.location ? `${p.sector} · ${p.location}` : p.sector}
                </span>
              </FadeIn>
            </div>

            <div className="case-body">
              <FadeIn className="case-block">
                <h3 className="case-label">Overview</h3>
                <p className="case-text">{p.overview}</p>
              </FadeIn>
              <FadeIn className="case-block" delay={0.08}>
                <h3 className="case-label">What we built</h3>
                <p className="case-text">{p.build}</p>
              </FadeIn>
            </div>

            <div className="case-foot">
              <FadeIn className="case-tech">
                <h3 className="case-label">What we delivered</h3>
                <ul>
                  {p.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn className="case-tech" delay={0.08}>
                <h3 className="case-label">Built with</h3>
                <ul>
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <FadeIn className="case-visit" delay={0.05}>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Visit live site <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="case-soon">Live site coming soon</span>
              )}
            </FadeIn>
          </section>
        ))}
      </div>
      </section>

      <section id="graphics" className="cat-section cat-section-graphics">
        <FadeIn className="shell cat-header">
          <h2 className="cat-title">Flyers, campaigns &amp; identities</h2>
          <p className="cat-lede">
            Scroll to unwind the reel — flyers, promos, menus, and logo systems
            we&apos;ve designed, one turn at a time.
          </p>
        </FadeIn>
        <GraphicsSpiral />
      </section>

      <section id="barcodes" className="cat-section">
        <FadeIn className="shell cat-header">
          <h2 className="cat-title">Retail-ready product barcodes</h2>
          <p className="cat-lede">
            Registered, GS1-style barcodes that get products scanning, tracked,
            and shelf-ready for retail and export.
          </p>
        </FadeIn>
        <div className="shell">
          <BarcodeShelf />
        </div>
      </section>

      <section className="shell page-cta">
        <FadeIn>
          <h2 className="headline">Your business could be next on this list.</h2>
          <Link href="/contact" className="btn mt-8">
            Start a project <ArrowUpRight size={16} />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
