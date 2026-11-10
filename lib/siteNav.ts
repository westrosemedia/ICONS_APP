import { GOOGLE_REVIEWS_URL } from "@/lib/siteLinks";

/** Sticky bar. Hot & Viral pins its countdown with top-[73px]. Keep this height. */
export const SITE_HEADER_HEIGHT_PX = 73;

export const PHOTO_GALLERIES_URL = "https://westrosemedia.sproutstudio.com/galleries";

export type SiteLink = {
  href: string;
  label: string;
  external?: boolean;
};

/** Routes already in the header. Do not point these at pages that do not exist. */
export const primaryNav: SiteLink[] = [
  { href: "/about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/cadence", label: "Cadence" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/login", label: "Sign in" },
];

/** Routes already in the footer, in the same order. */
export const footerLinks: SiteLink[] = [
  { href: "/cadence", label: "Cadence" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/blog", label: "Blog" },
  { href: "/packages", label: "Packages" },
  { href: "/podcast", label: "Podcast" },
  { href: "/mastermind", label: "Mastermind" },
  { href: "/faq", label: "FAQ" },
  { href: GOOGLE_REVIEWS_URL, label: "Google Reviews", external: true },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];
