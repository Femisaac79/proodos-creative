"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

// Cookie-setting trackers (GA4, Meta Pixel) only load after the visitor
// accepts. Set the IDs in Vercel → Settings → Environment Variables; with
// neither set, no banner shows at all (Vercel Analytics is cookie-free).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const KEY = "proodos-consent";

type Choice = "granted" | "denied" | null;

const readChoice = (): Choice => {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
};

/** Opens the banner again — wired to the footer's "Cookie settings" link. */
export const OPEN_CONSENT_EVENT = "proodos:open-consent";

export default function ConsentAnalytics() {
  const [choice, setChoice] = useState<Choice>(null);
  const [open, setOpen] = useState(false);
  const enabled = Boolean(GA_ID || META_PIXEL_ID);

  useEffect(() => {
    if (!enabled) return;
    const c = readChoice();
    setChoice(c);
    setOpen(c === null);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, [enabled]);

  if (!enabled) return null;

  const decide = (c: Exclude<Choice, null>) => {
    try {
      localStorage.setItem(KEY, c);
    } catch {}
    // Withdrawing consent after scripts loaded needs a reload to unload them.
    if (choice === "granted" && c === "denied") window.location.reload();
    setChoice(c);
    setOpen(false);
  };

  return (
    <>
      {choice === "granted" && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {choice === "granted" && META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}

      {open && (
        <div className="consent" role="dialog" aria-live="polite" aria-label="Cookie preferences">
          <p className="consent-copy">
            We use optional cookies to measure our ads and improve the site.
            Nothing loads unless you say yes.{" "}
            <a href="/privacy" className="consent-link">
              Privacy policy
            </a>
          </p>
          <div className="consent-actions">
            <button type="button" className="consent-btn" onClick={() => decide("denied")}>
              Decline
            </button>
            <button
              type="button"
              className="consent-btn consent-btn-primary"
              onClick={() => decide("granted")}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/** Footer link that re-opens the banner. Renders nothing when no trackers are configured. */
export function ConsentSettingsLink() {
  if (!GA_ID && !META_PIXEL_ID) return null;
  return (
    <button
      type="button"
      className="footer-legal-btn"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
    >
      Cookie settings
    </button>
  );
}
