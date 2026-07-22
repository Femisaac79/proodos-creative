"use client";

import { useState } from "react";
import { ArrowUpRight } from "./icons";

const SERVICES = [
  "Website Design & Development",
  "Business Solutions",
  "Branding & Graphic Design",
  "Video & Motion Graphics",
  "Barcode Registration",
  "Not sure yet",
];

/**
 * Contact form. With no backend attached, submitting opens the visitor's own
 * mail client with the message pre-filled — their action, their send button —
 * rather than posting anywhere. WhatsApp and email links beside it are the
 * faster paths for anyone who'd rather skip the form.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company && `Company: ${company}`,
      `Service: ${service}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const href = `mailto:hello@proodoscreative.com?subject=${encodeURIComponent(
      `New enquiry from ${name}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
        <div className="field">
          <label htmlFor="company">Business (optional)</label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="service">What do you need?</label>
        <select id="service" name="service" defaultValue={SERVICES[0]}>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Tell us about the goal</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      <button type="submit" className="btn contact-submit">
        Send enquiry <ArrowUpRight size={16} />
      </button>

      {sent && (
        <p className="contact-sent" role="status">
          Opening your email app with the message ready, just hit send. Prefer
          not to? Reach us on WhatsApp or email instead.
        </p>
      )}
    </form>
  );
}
