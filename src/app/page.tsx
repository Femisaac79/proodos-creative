import Link from "next/link";
import LogoMark from "@/components/logo-mark";
import ManifestoBand from "@/components/manifesto-band";
import Reveal from "@/components/reveal";
import RotatingWord from "@/components/rotating-word";
import SectionBackdrop from "@/components/section-backdrop";
import { ArrowUpRight } from "@/components/icons";

const HERO_WORDS = ["customers.", "bookings.", "regulars.", "revenue."];

const SOLVES = [
  "Get found by the people already searching for you",
  "Look credible before you say a word",
  "Turn your story into design and video that sells",
  "Run smoother with digital tools built around you",
  "Get products shelf-ready with registered barcodes",
];

const SOLUTIONS = [
  {
    name: "Websites",
    note: "Premium sites that turn visitors into customers",
  },
  {
    name: "Business Solutions",
    note: "Digital tools that streamline how you operate",
  },
  {
    name: "Brand Identity",
    note: "Identity systems that make you look established",
  },
  {
    name: "Graphics",
    note: "Design for everything your business puts out",
  },
  {
    name: "Motion & Video",
    note: "Stories told in motion, from ads to explainers",
  },
  {
    name: "Product Barcodes",
    note: "Registered barcodes that get products retail-ready",
  },
];

const OUTCOMES = [
  {
    title: "Faster customer trust",
    copy: "First impressions happen fast. We make sure yours lands in your favour.",
  },
  {
    title: "Better first impressions",
    copy: "Every touchpoint looks like a business worth choosing.",
  },
  {
    title: "Stronger brand consistency",
    copy: "One coherent identity across web, print, and video.",
  },
  {
    title: "More enquiries",
    copy: "Clear messaging and design that move people to reach out.",
  },
  {
    title: "Business-ready assets",
    copy: "Files, formats, and barcodes ready for wherever business happens.",
  },
  {
    title: "Long-term support",
    copy: "We stay with you as your business grows and changes.",
  },
];

export default function Home() {
  return (
    <div id="top">
      <main>
        {/* Hero */}
        <section className="hero">
          <video
            className="hero-video"
            src="/media/hero-glass.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="shell hero-stack">
            <div className="hero-copy">
              <h1 className="display rise" style={{ animationDelay: "120ms" }}>
                We turn strangers
                <br />
                into <RotatingWord words={HERO_WORDS} />
              </h1>
              <div className="hero-mark-row rise" style={{ animationDelay: "300ms" }}>
                <LogoMark className="hero-mark" />
                <Link href="/contact" className="play-cta">
                  Let&apos;s connect
                </Link>
              </div>
              <div
                className="rise mt-10 flex flex-wrap items-center gap-8"
                style={{ animationDelay: "420ms" }}
              >
                <Link href="/contact" className="btn">
                  Start a project
                </Link>
                <Link href="/work" className="link">
                  See our work <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ManifestoBand />

        {/* What we solve */}
        <section className="section section-green">
          <SectionBackdrop variant="drift" />
          <div className="shell">
            <Reveal>
              <p className="eyebrow">What we solve</p>
              <h2 className="headline mt-6 max-w-3xl">
                We help businesses&hellip;
              </h2>
            </Reveal>
            <div className="mt-14">
              {SOLVES.map((item, i) => (
                <Reveal key={item} delay={i * 60}>
                  <div className="row">
                    <span className="row-title">{item}</span>
                    <ArrowUpRight size={26} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="section section-green" id="solutions">
          <SectionBackdrop variant="orbit" />
          <div className="shell">
            <Reveal>
              <p className="eyebrow">Solutions</p>
              <h2 className="headline mt-6 max-w-3xl">
                From first pixel to product barcode.
              </h2>
            </Reveal>
            <div className="mt-14">
              {SOLUTIONS.map((s, i) => (
                <Reveal key={s.name} delay={i * 60}>
                  <div className="row">
                    <span className="row-title">{s.name}</span>
                    <span className="row-note">{s.note}</span>
                    <ArrowUpRight size={26} />
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <Link href="/services" className="link mt-10">
                See all services in detail <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Why work with us */}
        <section className="section section-green">
          <SectionBackdrop variant="rise" />
          <div className="shell">
            <Reveal>
              <p className="eyebrow">Why work with us</p>
              <h2 className="headline mt-6 max-w-3xl">
                We measure our work by what it earns you.
              </h2>
            </Reveal>
            <div className="outcomes mt-14">
              {OUTCOMES.map((o, i) => (
                <Reveal key={o.title} delay={(i % 2) * 80}>
                  <div className="outcome">
                    <h3 className="outcome-title">{o.title}</h3>
                    <p className="outcome-copy">{o.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section section-green" id="contact">
          <SectionBackdrop variant="pulse" />
          <div className="shell text-center">
            <Reveal>
              <h2 className="display mx-auto max-w-5xl">
                Your next customer is already searching. Let&apos;s give them a
                reason to ch
                <LogoMark className="inline-mark" />
                <span className="sr-only">o</span>ose you.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                <Link href="/contact" className="btn">
                  Start a project <ArrowUpRight size={16} />
                </Link>
                <Link href="/work" className="link">
                  See the results first <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
