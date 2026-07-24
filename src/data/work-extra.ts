// Data for the non-website work categories on /work.
// Flyers and barcode products are placeholders styled to look like real work —
// drop in real artwork later by adding an `image` to a flyer and swapping the
// generated barcode for a product photo.

export type Flyer = {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  tag: string;
  from: string; // gradient start
  to: string; // gradient end
  image?: string; // optional real artwork (public path)
};

export const FLYERS: Flyer[] = [
  {
    id: "grand-opening",
    title: "Grand Opening",
    subtitle: "Launch campaign flyer",
    client: "Debinco Aesthetic Clinic",
    tag: "Event Flyer",
    from: "#0f766e",
    to: "#052e2b",
  },
  {
    id: "detty-december",
    title: "Detty December",
    subtitle: "Festive season promo",
    client: "Bellefood",
    tag: "Social Campaign",
    from: "#b91c1c",
    to: "#450a0a",
  },
  {
    id: "black-friday",
    title: "Black Friday",
    subtitle: "Up to 50% off",
    client: "Xbaz Solutions",
    tag: "Sales Flyer",
    from: "#111827",
    to: "#000000",
  },
  {
    id: "menu-reveal",
    title: "New Menu",
    subtitle: "Seasonal dishes drop",
    client: "My Food by Hilda",
    tag: "Menu Design",
    from: "#c2410c",
    to: "#431407",
  },
  {
    id: "health-week",
    title: "Health Week",
    subtitle: "Free screening days",
    client: "Multi-Ray Diagnostics",
    tag: "Awareness Flyer",
    from: "#1d4ed8",
    to: "#0b1e4a",
  },
  {
    id: "logo-system",
    title: "Identity System",
    subtitle: "Logo & brand marks",
    client: "Sunshine Guard",
    tag: "Logo Design",
    from: "#0e7490",
    to: "#083344",
  },
  {
    id: "seminar",
    title: "Growth Seminar",
    subtitle: "Speaker line-up flyer",
    client: "Top Class Consulting",
    tag: "Event Flyer",
    from: "#4d7c0f",
    to: "#1a2e05",
  },
  {
    id: "spa-day",
    title: "Spa Day",
    subtitle: "Treatment bundle promo",
    client: "Emplatnum Medspa",
    tag: "Promo Flyer",
    from: "#9d174d",
    to: "#3f0620",
  },
  {
    id: "brand-refresh",
    title: "Brand Refresh",
    subtitle: "Visual identity rollout",
    client: "Proodos Studio",
    tag: "Brand Identity",
    from: "#7c3aed",
    to: "#2e1065",
  },
];

export type BarcodeProduct = {
  id: string;
  name: string;
  brand: string;
  category: string;
  code: string; // 13 digits, EAN-13 style (visual)
};

export const BARCODES: BarcodeProduct[] = [
  {
    id: "b1",
    name: "Cold-Pressed Palm Oil",
    brand: "Hilda Foods",
    category: "FMCG · Food",
    code: "6150421000017",
  },
  {
    id: "b2",
    name: "Shea Body Butter 200g",
    brand: "Emplatnum Care",
    category: "Cosmetics",
    code: "6150421000024",
  },
  {
    id: "b3",
    name: "Safety Gloves (Pair)",
    brand: "Xbaz Solutions",
    category: "Industrial PPE",
    code: "6150421000031",
  },
  {
    id: "b4",
    name: "Chin-Chin Classic 150g",
    brand: "Bellefood",
    category: "FMCG · Snacks",
    code: "6150421000048",
  },
  {
    id: "b5",
    name: "Herbal Wellness Tea",
    brand: "Multi-Ray Health",
    category: "Health Product",
    code: "6150421000055",
  },
  {
    id: "b6",
    name: "Solar Lantern Mini",
    brand: "Xbaz Energy",
    category: "Renewable Energy",
    code: "6150421000062",
  },
];
