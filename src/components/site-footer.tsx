import Link from "next/link";
import Wordmark from "./wordmark";
import { ADDRESS_LINE, CONTACT } from "@/lib/site";
import { ConsentSettingsLink } from "./consent-analytics";

const FOOTER_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="hairline footer-green">
      <div className="shell pt-16 pb-10 text-center">
        <Link href="/" aria-label="Proodos Creative home">
          <Wordmark className="footer-wordmark" />
        </Link>
        <p className="footer-lockup mt-2">Creative Ltd</p>

        <nav className="footer-nav mt-10" aria-label="Footer">
          {FOOTER_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="footer-nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="footer-meta mt-12 flex flex-col items-center justify-between gap-3 text-sm sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Proodos Creative Ltd</span>
          <a href={`mailto:${CONTACT.email}`} className="hover:underline">
            {CONTACT.email}
          </a>
          <span>{ADDRESS_LINE}</span>
          <span>{CONTACT.rc}</span>
        </div>

        <nav className="footer-legal mt-6" aria-label="Legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <ConsentSettingsLink />
        </nav>
      </div>
    </footer>
  );
}
