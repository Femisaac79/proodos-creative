import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal-page";
import { ADDRESS_LINE, CONTACT, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Proodos Creative Ltd collects, uses, and protects personal data, in line with the Nigeria Data Protection Act 2023.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      `${SITE_NAME} (${CONTACT.rc}) is a web design, branding, and digital services company based at ${ADDRESS_LINE}, Nigeria. We are the data controller for personal data collected through this website.`,
    ],
  },
  {
    heading: "What we collect",
    body: [
      "We only collect what you choose to give us, plus basic technical data:",
      [
        "Enquiry details: your name, email, business name, and message when you contact us by form, email, or WhatsApp.",
        "Newsletter: your email address if you subscribe.",
        "Usage data: anonymous page views, device type, and approximate country, used to understand how the site is used.",
      ],
    ],
  },
  {
    heading: "How we use it",
    body: [
      [
        "To reply to your enquiry and prepare quotes or proposals.",
        "To deliver and support work you have hired us for.",
        "To send our newsletter, only if you subscribed. Every email has an unsubscribe link.",
        "To improve this website.",
      ],
      "We do not sell your data, and we do not use it for anything you would not reasonably expect.",
    ],
  },
  {
    heading: "Legal basis",
    body: [
      "Under the Nigeria Data Protection Act 2023, we process your data on the basis of your consent (newsletter, optional cookies), steps you ask us to take before entering a contract (enquiries and quotes), and our legitimate interest in running and improving our business.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "The site works without cookies. We use privacy-friendly, cookie-free analytics to count visits. If marketing or advertising tools that set cookies are enabled, they only load after you accept them in the cookie banner, and you can change your choice at any time from the Cookie settings link in the footer.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "We use trusted service providers to run the business, such as our website host (Vercel), email (Google), and WhatsApp (Meta). Some of these store data outside Nigeria; where that happens we rely on providers with appropriate safeguards. We never share your data with anyone else unless the law requires it.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Enquiries are kept for up to two years so we can follow up on your project. Client records are kept as long as needed for tax and legal obligations. Newsletter data is kept until you unsubscribe.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can ask us to access, correct, delete, or stop using your personal data, or to give you a copy of it. You can withdraw consent at any time. If you are unhappy with how we handle your data, you can complain to the Nigeria Data Protection Commission (NDPC).",
    ],
  },
  {
    heading: "Contact",
    body: [
      `For any privacy question or request, email ${CONTACT.email} or call ${CONTACT.phoneDisplay}. We respond within 30 days, usually much sooner.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="19 October 2026"
      intro="Plain-English answers to what we collect, why, and what you can do about it."
      sections={SECTIONS}
    />
  );
}
