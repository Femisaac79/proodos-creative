"use client";

import { motion } from "framer-motion";
import { BARCODES } from "@/data/work-extra";

// Turn a numeric code into a barcode-like set of bars (visual only).
function bars(code: string): { x: number; w: number }[] {
  const out: { x: number; w: number }[] = [];
  let x = 0;
  const digits = code.split("");
  for (let i = 0; i < digits.length; i++) {
    const d = parseInt(digits[i], 10) || 0;
    // Each digit yields two bars of pseudo-random-but-stable widths.
    const w1 = 1 + (d % 3);
    const gap1 = 1 + ((d + 1) % 2);
    const w2 = 1 + ((d + 2) % 3);
    const gap2 = 1 + (d % 2);
    out.push({ x, w: w1 });
    x += w1 + gap1;
    out.push({ x, w: w2 });
    x += w2 + gap2;
  }
  return out;
}

function Barcode({ code }: { code: string }) {
  const b = bars(code);
  const width = b.length ? b[b.length - 1].x + b[b.length - 1].w : 100;
  return (
    <svg
      className="barcode-svg"
      viewBox={`0 0 ${width} 40`}
      preserveAspectRatio="none"
      role="img"
      aria-label={`Barcode ${code}`}
    >
      {b.map((bar, i) => (
        <rect key={i} x={bar.x} y={0} width={bar.w} height={40} />
      ))}
    </svg>
  );
}

export default function BarcodeShelf() {
  return (
    <div className="barcode-grid">
      {BARCODES.map((p, i) => (
        <motion.article
          key={p.id}
          className="barcode-card"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="barcode-label">
            <span className="barcode-cat">{p.category}</span>
            <h3 className="barcode-name">{p.name}</h3>
            <span className="barcode-brand">{p.brand}</span>
          </div>
          <div className="barcode-strip">
            <Barcode code={p.code} />
            <span className="barcode-digits">{p.code}</span>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
