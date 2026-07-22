import type { Metadata } from "next";
import { Jost, Unbounded } from "next/font/google";
import Nav from "@/components/nav";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

// Stand-in for "Gobold" (a commercial Fenotype font we can't license/embed
// here) — Unbounded at 800 is a free, geometric, ultra-bold Google Font with
// a similarly blocky/rounded heavy character, used for all-caps headers.
const unbounded = Unbounded({
  variable: "--font-unbounded",
  weight: ["800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proodos Creative Ltd · Designed to Earn Trust",
  description:
    "We help businesses build credibility, attract customers, and grow through premium websites, branding, video production, business solutions, and barcode services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable} ${unbounded.variable}`}>
      <body>
        <Nav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
