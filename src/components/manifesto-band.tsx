"use client";

import { useEffect, useRef } from "react";
import LogoMark from "@/components/logo-mark";

const PARAGRAPH =
  "We help businesses build credibility, attract customers, and grow through premium websites, branding, video production, business solutions, and barcode services.";
const PARAGRAPH_WORDS = PARAGRAPH.split(" ");

// The pin's scroll progress (0–1) is split into three stretches: the wave
// text travels across and fully exits, a brief crossfade, then the
// paragraph reveals word by word for the remainder — the pin only
// releases once the last word has lit up.
const WAVE_END = 0.38;
const READ_START = 0.46;

// The path (see below) is a long, gentle sine wave — wide enough in
// wavelength that a full period never fits inside the viewBox at once —
// with long straight offscreen stretches on either side. These two
// absolute startOffset values (SVG px units, not percent) are measured
// directly against the path/text geometry (getTotalLength /
// getComputedTextLength) so the text is fully clear of the viewBox at
// both extremes.
const ENTRY_OFFSET = 5950;
const EXIT_OFFSET = 950;

export default function ManifestoBand() {
  const wrapperRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const pathTextRef = useRef<SVGTextPathElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const readRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    const pathText = pathTextRef.current;
    const wave = waveRef.current;
    const read = readRef.current;
    if (!wrapper || !sticky || !pathText || !wave || !read) return;

    const words = Array.from(
      read.querySelectorAll<HTMLSpanElement>(".para-word")
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      pathText.setAttribute(
        "startOffset",
        `${(ENTRY_OFFSET + EXIT_OFFSET) / 2}`
      );
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = wrapper.getBoundingClientRect();
      const scrollable = rect.height - sticky.getBoundingClientRect().height;
      const progress =
        scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;

      // Stretch 1 — the wave travels right to left and fully exits.
      const waveProgress = Math.min(1, progress / WAVE_END);
      const startOffset =
        ENTRY_OFFSET - waveProgress * (ENTRY_OFFSET - EXIT_OFFSET);
      pathText.setAttribute("startOffset", `${startOffset}`);

      const waveOpacity =
        progress <= WAVE_END
          ? 1
          : progress >= READ_START
          ? 0
          : 1 - (progress - WAVE_END) / (READ_START - WAVE_END);
      wave.style.opacity = `${waveOpacity}`;

      // Crossfade into the paragraph.
      const readOpacity =
        progress <= WAVE_END
          ? 0
          : progress >= READ_START
          ? 1
          : (progress - WAVE_END) / (READ_START - WAVE_END);
      read.style.opacity = `${readOpacity}`;

      // Stretch 2 — words light up one by one as you scroll/read; the pin
      // holds until the last word is lit (readProgress reaches 1).
      const readProgress =
        progress <= READ_START
          ? 0
          : Math.min(1, (progress - READ_START) / (1 - READ_START));
      const litCount = Math.floor(readProgress * words.length + 1e-6);
      words.forEach((el, i) => {
        el.classList.toggle("is-lit", i < litCount);
        el.classList.toggle("is-current", i === litCount && readProgress < 1);
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="manifesto" ref={wrapperRef}>
      <div className="manifesto-sticky" ref={stickyRef}>
        <div className="shell manifesto-head">
          <LogoMark className="manifesto-mark" />
        </div>

        <div className="manifesto-flow" aria-hidden="true" ref={waveRef}>
          <svg viewBox="0 0 1600 460" preserveAspectRatio="xMidYMid meet">
            <path
              id="manifesto-path"
              d="M -3800,230 L -300,230 Q 250,60 800,230 Q 1350,400 1900,230 Q 2450,60 3000,230 L 6600,230"
              fill="none"
            />
            <text className="manifesto-text">
              <textPath
                ref={pathTextRef}
                href="#manifesto-path"
                startOffset="3500"
              >
                WHERE BUSINESS MEETS DESIGN.
              </textPath>
            </text>
          </svg>
        </div>

        <p className="sr-only">Where business meets design.</p>

        <div className="manifesto-read" ref={readRef}>
          <p className="manifesto-read-inner">
            {PARAGRAPH_WORDS.map((word, i) => (
              <span key={i}>
                <span className="para-word">{word}</span>
                {i < PARAGRAPH_WORDS.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
