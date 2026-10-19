import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal-page";
import { CONTACT, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms that apply when you use the Proodos Creative website and work with Proodos Creative Ltd.",
  alternates: { canonical: "/terms" },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "About these terms",
    body: [
      `These terms apply to your use of this website and to services provided by ${SITE_NAME} (${CONTACT.rc}). By using the site or hiring us, you agree to them. Each project also has its own written proposal or agreement; where the two differ, the project agreement wins.`,
    ],
  },
  {
    heading: "Using this website",
    body: [
      "The content on this site is for general information. We work to keep it accurate but cannot guarantee it is always complete or current. Please do not copy our designs, text, or case studies without permission, or use the site in any unlawful way.",
    ],
  },
  {
    heading: "Quotes and payment",
    body: [
      [
        "Every project starts with a written, fixed quote. Quotes are valid for 30 days.",
        "Work begins once the deposit stated in the quote is paid. The balance is due before launch or handover, unless agreed otherwise in writing.",
        "Prices are in Naira unless stated. Third-party costs such as domains, hosting, paid plugins, stock media, and barcode registration fees are billed at cost and listed in the quote.",
      ],
    ],
  },
  {
    heading: "Your responsibilities",
    body: [
      "You agree to provide content, feedback, and approvals on time, and confirm you have the right to use any material you give us (logos, photos, text). Delays on your side can move the timeline.",
    ],
  },
  {
    heading: "Revisions and changes",
    body: [
      "Each quote includes a set number of revision rounds. Work outside the agreed scope is quoted separately before we start it.",
    ],
  },
  {
    heading: "Ownership",
    body: [
      "Once the project is paid in full, you own the final designs, website content, and deliverables made specifically for you. We keep ownership of our own tools, code libraries, and know-how, and you get a permanent licence to use them as part of your project. We may show the finished work in our portfolio unless you ask us not to.",
    ],
  },
  {
    heading: "Support after launch",
    body: [
      "Launch includes a short support period, stated in your quote, for fixing defects. Ongoing maintenance, updates, and hosting management are available as a separate plan.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "We do our work with care, but we are not liable for indirect losses such as lost profit or data, or for problems caused by third-party services (hosting providers, payment gateways, social platforms). Our total liability for any project is limited to the amount you paid us for it.",
    ],
  },
  {
    heading: "Cancellation",
    body: [
      "Either side can end a project in writing. You pay for work completed up to that point; deposits cover work already started and are non-refundable once work begins.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of the Federal Republic of Nigeria. We will always try to resolve any disagreement by talking first.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about these terms? Email ${CONTACT.email} or call ${CONTACT.phoneDisplay}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="19 October 2026"
      intro="The ground rules for using this site and working with us, kept short and readable."
      sections={SECTIONS}
    />
  );
}
