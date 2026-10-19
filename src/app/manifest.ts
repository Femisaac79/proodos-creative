import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Proodos Creative Ltd",
    short_name: "Proodos",
    description:
      "Websites, branding, video, and business solutions for businesses in Nigeria and across Africa.",
    start_url: "/",
    display: "standalone",
    background_color: "#8fbe42",
    theme_color: "#8fbe42",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
