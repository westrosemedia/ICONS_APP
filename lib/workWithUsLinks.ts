/** Shared nav targets for Work with Us (Spotlight / Immersion / ICON). */
export const SPOTLIGHT_BOOK_URL =
  "https://westrosemedia.sproutstudio.com/bookings";

export const STRATEGY_BOOK_URL =
  "https://westrosemedia.sproutstudio.com/lead/sprout5e21ffc3d9e0e9.21962433";

export type WorkWithUsItem = {
  label: string;
  href: string;
  external: boolean;
};

export const workWithUsItems: WorkWithUsItem[] = [
  {
    label: "Book a Spotlight Shoot",
    href: SPOTLIGHT_BOOK_URL,
    external: true,
  },
  { label: "Event Coverage", href: "/book/immersion", external: false },
  {
    label: "Apply for ICON Brand Partnership",
    href: "/apply",
    external: false,
  },
];
