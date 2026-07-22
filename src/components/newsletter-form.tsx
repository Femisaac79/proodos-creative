"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";

type State = "idle" | "loading" | "ok" | "error";

/**
 * Newsletter signup. Posts to /api/subscribe, which validates and stores the
 * email. Shows real inline states for loading, success (including "already on
 * the list"), and error, and never loses the field on failure.
 */
export default function NewsletterForm({ source = "site" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setState("ok");
        setMessage(
          data.status === "already_subscribed"
            ? "You are already on the list. Nothing more to do."
            : "You are in. Watch your inbox for the next one."
        );
        setEmail("");
      } else if (res.status === 422) {
        setState("error");
        setMessage("That email does not look right. Mind checking it?");
      } else {
        setState("error");
        setMessage("Something went wrong on our end. Please try again.");
      }
    } catch {
      setState("error");
      setMessage("Could not reach the server. Please try again.");
    }
  };

  return (
    <form className="newsletter-form" onSubmit={onSubmit} noValidate>
      <div className="newsletter-field">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@business.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state !== "idle") setState("idle");
          }}
          required
          aria-invalid={state === "error"}
        />
        <button type="submit" className="btn" disabled={state === "loading"}>
          {state === "loading" ? "Joining…" : "Get notified"}
          {state !== "loading" && <ArrowRight size={16} />}
        </button>
      </div>

      {message && (
        <p
          className={`newsletter-msg${state === "error" ? " is-error" : " is-ok"}`}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
