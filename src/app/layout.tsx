import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Jost, Unbounded } from "next/font/google";
import Nav from "@/components/nav";
import SiteFooter from "@/components/site-footer";
import WhatsAppButton from "@/components/whatsapp-button";
import ConsentAnalytics from "@/components/consent-analytics";
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

import { CONTACT, SITE_URL } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: "#8fbe42",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Proodos Creative Ltd · Website Design & Web Development in Nigeria",
    template: "%s · Proodos Creative Ltd",
  },
  description:
    "Proodos Creative is a web design and development agency in Lagos, Nigeria building premium websites for businesses across Nigeria, Ghana, and Africa. Branding, business solutions, video, and barcodes that earn trust and grow revenue.",
  keywords: [
    "website design Nigeria",
    "web development Nigeria",
    "website creation Nigeria",
    "web design agency Lagos",
    "website design Ghana",
    "web development Ghana",
    "website creation Africa",
    "affordable website design Nigeria",
    "business website Nigeria",
    "ecommerce website Nigeria",
    "branding agency Nigeria",
    "digital agency Lagos",
    "website designer Accra",
    "SEO Nigeria",
    "Proodos Creative",
  ],
  authors: [{ name: "Proodos Creative Ltd" }],
  creator: "Proodos Creative Ltd",
  publisher: "Proodos Creative Ltd",
  applicationName: "Proodos Creative",
  category: "Web Design & Development",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: "Proodos Creative Ltd",
    title: "Website Design & Web Development in Nigeria · Proodos Creative",
    description:
      "Premium websites, branding, and business solutions for companies across Nigeria, Ghana, and Africa. Designed to earn trust and turn visitors into customers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Web Development in Nigeria · Proodos Creative",
    description:
      "Premium websites, branding, and business solutions for businesses across Nigeria, Ghana, and Africa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// Structured data — helps Google understand the business, its service area
// (Nigeria, Ghana, and the wider African market), and surface it for local
// "website design near me / in <country>" style searches.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Proodos Creative Ltd",
      description:
        "Web design and development agency building premium websites, branding, and business solutions for companies across Nigeria, Ghana, and Africa.",
      url: SITE_URL,
      email: CONTACT.email,
      telephone: CONTACT.phone,
      priceRange: "$$",
      image: `${SITE_URL}/opengraph-image`,
      logo: `${SITE_URL}/icon.svg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${CONTACT.address.street}, ${CONTACT.address.area}`,
        addressLocality: CONTACT.address.city,
        addressRegion: "Lagos",
        addressCountry: CONTACT.address.country,
      },
      areaServed: [
        { "@type": "Country", name: "Nigeria" },
        { "@type": "Country", name: "Ghana" },
        { "@type": "Country", name: "Kenya" },
        { "@type": "Country", name: "South Africa" },
        { "@type": "Continent", name: "Africa" },
      ],
      knowsAbout: [
        "Website design",
        "Web development",
        "Brand identity",
        "Graphic design",
        "Motion and video production",
        "Product barcodes",
        "Search engine optimization",
      ],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Proodos Creative Ltd",
      publisher: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable} ${unbounded.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
        <SiteFooter />
        <WhatsAppButton />
        <ConsentAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
