"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "./icons";
import { CONTACT } from "@/lib/site";

const SERVICES = [
  "Website Design & Development",
  "Business Solutions",
  "Branding & Graphic Design",
  "Video & Motion Graphics",
  "Barcode Registration",
  "Not sure yet",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();
  if (!name) errors.name = "Please tell us your name.";
  if (!email) errors.email = "We need an email to reply to.";
  else if (!EMAIL_RE.test(email))
    errors.email = "That email doesn't look right. Check for typos.";
  if (message.length < 10)
    errors.message = "A sentence or two about the goal helps us reply properly.";
  return errors;
}

/**
 * Contact form. With no backend attached, submitting opens the visitor's own
 * mail client with the message pre-filled — their action, their send button —
 * then moves them to /thank-you with the next steps. WhatsApp and email links
 * beside it are the faster paths for anyone who'd rather skip the form.
 */
export default function ContactForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    const name = String(data.get("name")).trim();
    const company = String(data.get("company") || "").trim();
    const body = [
      `Name: ${name}`,
      `Email: ${String(data.get("email")).trim()}`,
      company && `Company: ${company}`,
      `Service: ${data.get("service")}`,
    ]
      .filter(Boolean)
      .join("\n")
      .concat("\n\n", String(data.get("message")).trim());

    setSending(true);
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `New enquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    // Give the mail app a beat to open before moving on.
    window.setTimeout(() => router.push("/thank-you"), 900);
  };

  // Clear a field's error as soon as the visitor starts fixing it.
  const clear = (field: keyof Errors) => () =>
    errors[field] && setErrors((e) => ({ ...e, [field]: undefined }));

  const describe = (field: keyof Errors) =>
    errors[field] ? { "aria-invalid": true, "aria-describedby": `${field}-error` } : {};

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field" data-invalid={!!errors.name || undefined}>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          onInput={clear("name")}
          {...describe("name")}
        />
        {errors.name && (
          <p className="field-error" id="name-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="field-row">
        <div className="field" data-invalid={!!errors.email || undefined}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            onInput={clear("email")}
            {...describe("email")}
          />
          {errors.email && (
            <p className="field-error" id="email-error">
              {errors.email}
            </p>
          )}
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

      <div className="field" data-invalid={!!errors.message || undefined}>
        <label htmlFor="message">Tell us about the goal</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          onInput={clear("message")}
          {...describe("message")}
        />
        {errors.message && (
          <p className="field-error" id="message-error">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn contact-submit" disabled={sending}>
        {sending ? "Opening your email…" : "Send enquiry"}{" "}
        <ArrowUpRight size={16} />
      </button>
    </form>
  );
}
