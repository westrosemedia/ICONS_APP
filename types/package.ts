export type PackageId = "spotlight" | "immersion" | "icon";

export interface PackageSummary {
  key: PackageId;
  title: string;
  blurb: string;
  priceLabel: string;
  highlights: Array<{ label: string }>;
  imageUrl: string;
  ctaHref: string;
}

export interface Package {
  id: PackageId;
  name: string;
  type: "one_time" | "subscription" | "event";
  basePrice: number;         // in cents for Stripe math
  stripePriceId?: string;    // for subscriptions or one time where fixed
  calendars?: {
    calgary?: string;        // embed url or internal availability key
    vancouver?: string;
    toronto?: string;
  };
  options?: {
    participantPrice?: number;  // 100000 for 1000 CAD
    maxParticipants?: number;   // 10
    addOnImagePrice?: number;   // 3500 for 35 CAD (post shoot)
  };
  description: string;
  includes: string[];
  cta: string;
  active: boolean;
}

// Legacy types for backward compatibility
export type LegacyPackageId = "vip-day" | "vip-day-2mo" | "vip-4mo" | "starter-4mo";

export interface LegacyPackage {
  id: LegacyPackageId;
  name: string;
  tagline: string;
  priceCad: number;        // per month or flat, set with priceType
  priceType: "flat" | "monthly";
  durationMonths?: number; // only for coaching bundles
  includes: string[];
  cta: string;             // CTA label
  stripePriceId?: string;  // set after Stripe is ready
  active: boolean;
}
