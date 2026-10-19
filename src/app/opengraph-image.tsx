import { ImageResponse } from "next/og";
import OgMark from "@/components/og-mark";
import { loadGoogleFont } from "@/lib/og-font";

export const alt =
  "Proodos Creative Ltd: websites, branding and business solutions that turn strangers into customers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HEADLINE = ["WE TURN STRANGERS", "INTO CUSTOMERS."];
const GREEN = "#8fbe42";
const INK = "#0b0b0b";
const BRAND = "PROODOS CREATIVE LTD";
const SERVICES = "Websites · Branding · Video · Business Solutions · Barcodes — Lagos, Nigeria";

export default async function OpengraphImage() {
  const [display, body] = await Promise.all([
    loadGoogleFont("Unbounded", 800, HEADLINE.join("") + BRAND),
    loadGoogleFont("Jost", 500, SERVICES),
  ]);
  const fonts = [
    display && { name: "Unbounded", data: display, weight: 800 as const, style: "normal" as const },
    body && { name: "Jost", data: body, weight: 500 as const, style: "normal" as const },
  ].filter((f) => !!f);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: GREEN,
          color: INK,
          fontFamily: "Unbounded",
          position: "relative",
        }}
      >
        {/* Oversized broken ring, echoing the site's orbit backdrop */}
        <div
          style={{
            position: "absolute",
            right: -180,
            top: -120,
            width: 720,
            height: 720,
            borderRadius: 9999,
            border: "40px solid rgba(1,114,165,0.18)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <OgMark size={72} halo={GREEN} arrow="#ffffff" />
          <div style={{ display: "flex", fontSize: 30, letterSpacing: 2 }}>
            {BRAND}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.05 }}>
          {HEADLINE.map((line) => (
            <div key={line} style={{ display: "flex" }}>
              {line}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontFamily: "Jost",
            color: "rgba(11,11,11,0.78)",
          }}
        >
          {SERVICES}
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    },
  );
}
