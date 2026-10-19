import type { Metadata } from "next";
import Link from "next/link";
import SectionBackdrop from "@/components/section-backdrop";
import PageHero from "@/components/page-hero";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const SUGGESTIONS = [
  { href: "/work", label: "See our work" },
  { href: "/services", label: "What we do" },
  { href: "/insights", label: "Read insights" },
  { href: "/contact", label: "Talk to us" },
];

export default function NotFound() {
  return (
    <div className="page theme-green">
      <SectionBackdrop variant="orbit" />
      <PageHero
        title={
          <>
            This page took
            <br />a wrong turn.
          </>
        }
        lede="The link may be old, or the page may have moved. Here are some good places to pick up from."
      >
        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-5">
          <Link href="/" className="btn">
            Back to home <ArrowUpRight size={16} />
          </Link>
          {SUGGESTIONS.map((s) => (
            <Link key={s.href} href={s.href} className="link">
              {s.label} <ArrowUpRight size={16} />
            </Link>
          ))}
        </div>
      </PageHero>
    </div>
  );
}
