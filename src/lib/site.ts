// Single source of truth for business details used across pages, metadata,
// structured data, robots and sitemap. Change the domain here once
// proodoscreative.com is live (or set NEXT_PUBLIC_SITE_URL in Vercel).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://proodos-creative-ltd.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Proodos Creative Ltd";

export const CONTACT = {
  email: "proodoscreative@gmail.com",
  phoneDisplay: "+234 806 057 5360",
  phone: "+2348060575360",
  whatsapp: "2348060575360",
  rc: "RC 9136559",
  address: {
    street: "18 Alice Olatoun Street",
    area: "Alakuko",
    city: "Lagos",
    country: "NG",
  },
};

export const ADDRESS_LINE = `${CONTACT.address.street}, ${CONTACT.address.area}, ${CONTACT.address.city}`;

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${ADDRESS_LINE}, Nigeria`,
)}`;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
