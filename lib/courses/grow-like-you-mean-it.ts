export const GROW_LIKE_YOU_MEAN_IT = {
  id: "grow-like-you-mean-it",
  title: "Grow Like You Mean It",
  description:
    "Eight self-paced video lessons to help you show up consistently, grow with intention, and build momentum that actually sticks.",
  stripePriceId: "price_1TwlUeCcsY3WjV3QC5cbBxl9",
  priceAmount: 47,
  priceCurrency: "CAD",
  totalLessons: 8,
  selfPaced: true,
  salesPath: "/grow-like-you-mean-it",
  coursePath: "/courses/grow-like-you-mean-it",
} as const;

export function formatCoursePrice(amount: number, currency: string) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
