"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FLYERS } from "@/data/work-extra";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function GraphicsSpiral() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  // Only the 1-based index of the flyer in focus lives in React state, so
  // scrolling re-renders once per flyer rather than on every frame.
  const [current, setCurrent] = useState(1);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useGSAP(
    () => {
      if (reduced) return;
      const stage = stageRef.current;
      if (!stage) return;
      const flyers = gsap.utils.toArray<HTMLElement>(".flyer", stage);
      const count = flyers.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: () => "+=" + count * window.innerHeight,
          scrub: 1,
          pin: stage,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const next = Math.min(count, Math.round(self.progress * (count - 1)) + 1);
            setCurrent((c) => (c === next ? c : next));
          },
        },
      });

      const focus = {
        xPercent: 0,
        yPercent: 0,
        rotate: 0,
        scale: 1,
        autoAlpha: 1,
      };
      const entry = {
        xPercent: 62,
        yPercent: 66,
        rotate: 34,
        scale: 0.42,
        autoAlpha: 0,
      };
      const exit = {
        xPercent: -66,
        yPercent: -72,
        rotate: -30,
        scale: 0.44,
        autoAlpha: 0,
      };

      // No blur in these states: animating `filter` on large, shadowed cards
      // repaints every scrubbed frame and stutters on phones. Scale + fade +
      // the spiral arc carry the depth on the compositor alone.

      flyers.forEach((el, i) => {
        const isFirst = i === 0;

        // First flyer is already in focus at scroll-top; the rest swing in
        // along the spiral arc as they reach their slot. Every flyer —
        // including the last — swings back out, so the stage is empty by
        // the time the next section scrolls in.
        gsap.set(el, { ...(isFirst ? focus : entry), zIndex: i });

        if (!isFirst) {
          tl.to(el, { ...focus, duration: 0.55, ease: "power3.out" }, i);
        }
        tl.to(el, { ...exit, duration: 0.55, ease: "power3.in" }, i + 0.62);
      });

      // As the final flyer leaves, dissolve the rings, counter and hint too,
      // so the pinned stage clears to black before the Barcodes section
      // arrives — one graphics moment, cleanly handed off.
      const tail = count - 1 + 0.62;
      const chrome = [
        ringsRef.current,
        stage.querySelector(".spiral-counter"),
        stage.querySelector(".spiral-hint"),
      ].filter(Boolean);
      if (chrome.length) {
        tl.to(chrome, { autoAlpha: 0, duration: 0.55, ease: "power1.out" }, tail);
      }

      // Background rings rotate continuously through the whole scroll —
      // the literal "spiral" the flyers travel along.
      if (ringsRef.current) {
        tl.to(ringsRef.current, { rotate: 220, ease: "none", duration: count }, 0);
      }

      // Note: we deliberately do NOT force extra ScrollTrigger.refresh()
      // calls on a timer here. A refresh recalculates every trigger's
      // measurements, and if one fires while the user is already scrolling
      // through this pinned section, it can momentarily clamp/desync the
      // scroll position and break the pin mid-scroll. This site uses
      // next/font (no FOUT/CLS), so the initial measurement is reliable —
      // invalidateOnRefresh plus GSAP's built-in resize handling is enough.
    },
    { scope: wrapRef, dependencies: [reduced] },
  );

  const count = FLYERS.length;

  return (
    <div ref={wrapRef} className={`spiral${reduced ? " is-static" : ""}`}>
      <div ref={stageRef} className="spiral-stage">
        <div ref={ringsRef} className="spiral-rings" aria-hidden="true">
          {[0, 1, 2, 3].map((r) => (
            <span key={r} className={`spiral-ring r${r}`} />
          ))}
        </div>

        {!reduced && (
          <div className="spiral-counter" aria-hidden="true">
            <span className="spiral-counter-now">
              {String(current).padStart(2, "0")}
            </span>
            <span className="spiral-counter-sep">/</span>
            <span className="spiral-counter-total">
              {String(count).padStart(2, "0")}
            </span>
          </div>
        )}

        <div className="spiral-deck">
          {FLYERS.map((f) => (
            <article
              key={f.id}
              className="flyer"
              style={{
                background: f.image
                  ? undefined
                  : `linear-gradient(155deg, ${f.from}, ${f.to})`,
              }}
            >
              {f.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={f.image} alt={`${f.title} — ${f.client}`} />
              ) : (
                <div className="flyer-art">
                  <span className="flyer-tag">{f.tag}</span>
                  <div className="flyer-mid">
                    <h3 className="flyer-title">{f.title}</h3>
                    <p className="flyer-sub">{f.subtitle}</p>
                  </div>
                  <div className="flyer-foot">
                    <span className="flyer-client">{f.client}</span>
                    <span className="flyer-mark">Proodos</span>
                  </div>
                  <span className="flyer-shine" aria-hidden="true" />
                </div>
              )}
            </article>
          ))}
        </div>

        {!reduced && (
          <p className="spiral-hint" aria-hidden="true">
            Scroll to unwind the reel
          </p>
        )}
      </div>
    </div>
  );
}
