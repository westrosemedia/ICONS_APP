/** Shared nav targets for Work with Us (Spotlight / Immersion / ICON). */
export const SPOTLIGHT_BOOK_URL =
  "https://westrosemedia.sproutstudio.com/bookings";

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
    label: "ICON Partnership (September)",
    href: "/apply",
    external: false,
  },
];
