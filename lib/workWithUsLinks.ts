/** Booking URLs that older flows still call. Public nav uses workWithUsItems. */
export const SPOTLIGHT_BOOK_URL =
  "https://westrosemedia.sproutstudio.com/bookings";

export const STRATEGY_BOOK_URL =
  "https://westrosemedia.sproutstudio.com/book/64f0d4124d2469.52916980";

export type WorkWithUsItem = {
  label: string;
  href: string;
  external: boolean;
};

export const workWithUsItems: WorkWithUsItem[] = [
  { label: "ICON Brand Partnership", href: "/icon", external: false },
  { label: "Private 1:1 Coaching", href: "/coaching", external: false },
  { label: "Hot & Viral", href: "/hot-and-viral", external: false },
];
