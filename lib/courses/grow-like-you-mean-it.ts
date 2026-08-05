export const GROW_LIKE_YOU_MEAN_IT = {
  id: "grow-like-you-mean-it",
  title: "Grow Like You Mean It",
  description:
    "You're already posting. You just don't know what to say. A self-paced video series on brand foundation and growing your social media consistently.",
  heroImage:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_6978.jpg?alt=media&token=6d0700c6-d2d3-45a7-b050-1b9d00782e64",
  insideImage:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_003.jpg?alt=media&token=62172af0-d2ad-4af1-a500-eb8a48d795a3",
  thumbnailUrl: "/courses/grow-like-you-mean-it-preview.png",
  stripePriceId: "price_1TwlUeCcsY3WjV3QC5cbBxl9",
  priceAmount: 47,
  priceCurrency: "CAD",
  totalLessons: 5,
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
