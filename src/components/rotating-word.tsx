"use client";

import { useEffect, useState } from "react";

const HOLD_MS = 2200;
// Generous enough to cover the longest word's full letter-by-letter
// stagger PLUS its per-letter delay jitter (see --letter-leave-* and the
// dust vars below / in globals.css) without cutting the animation short
// mid-flow. Longest word "credibility." (12 letters): 780ms dur +
// 11×20ms stagger + up to 150ms jitter ≈ 1150ms, safely under 1200.
const LEAVE_MS = 1200;
const ENTER_MS = 1100;

// Deterministic pseudo-random (stable across SSR/client so hydration
// matches) — seeds the per-letter dust scatter. Same (letter index, word)
// always yields the same drift, so the "blown out" direction is varied
// letter-to-letter but not jittery frame-to-frame.
const rand = (seed: number) => {
  const x = Math.sin(seed) * 43758.5453;
  return x - Math.floor(x);
};

type Phase = "visible" | "leaving" | "entering";

/**
 * Cycles through the outcomes named in the hero copy, forever. Each word is
 * split into individual letters. The outgoing word is blown out like dust —
 * each letter drifts off on its own randomized gust and crumbles into blur;
 * the incoming word waves in — each letter rises from below and bobs into
 * place — rather than the whole word moving as one rigid block.
 */
export default function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || words.length < 2) return;

    let cancelled = false;
    let holdTimer: ReturnType<typeof setTimeout>;
    let leaveTimer: ReturnType<typeof setTimeout>;
    let enterTimer: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      holdTimer = setTimeout(() => {
        if (cancelled) return;
        setPhase("leaving");
        leaveTimer = setTimeout(() => {
          if (cancelled) return;
          setIndex((i) => (i + 1) % words.length);
          setPhase("entering");
          enterTimer = setTimeout(() => {
            if (cancelled) return;
            setPhase("visible");
            runCycle();
          }, ENTER_MS);
        }, LEAVE_MS);
      }, HOLD_MS);
    };

    runCycle();

    return () => {
      cancelled = true;
      clearTimeout(holdTimer);
      clearTimeout(leaveTimer);
      clearTimeout(enterTimer);
    };
  }, [words.length]);

  const word = words[index];
  const letters = Array.from(word);

  return (
    <span className={`word-cycle word-cycle-${phase}`}>
      <span className="sr-only">{word}</span>
      <span aria-hidden="true">
        {letters.map((ch, i) => {
          // Bias the drift up and to the right (a gust carrying it off)
          // but scatter each letter's exact direction, spin, shrink, and
          // start time so the word disperses like dust, not a rigid slide.
          const s = i * 1.37 + word.length * 0.91;
          const style = {
            "--i": i,
            "--dx": `${(0.45 + rand(s + 0.1) * 1.15).toFixed(3)}em`,
            "--dy": `${(-(0.25 + rand(s + 3.7) * 1.15)).toFixed(3)}em`,
            "--rot": `${((rand(s + 8.2) - 0.5) * 46).toFixed(1)}deg`,
            "--dscale": (0.55 + rand(s + 15.9) * 0.25).toFixed(3),
            "--dj": Math.round(rand(s + 21.3) * 150),
          } as React.CSSProperties;
          return (
            <span key={i} className="word-letter" style={style}>
              {ch === " " ? " " : ch}
            </span>
          );
        })}
      </span>
    </span>
  );
}
