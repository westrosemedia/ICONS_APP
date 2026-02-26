import { PackageSummary } from "@/types/package";
import { immersionCopy } from "@/content/immersion";
import { iconCopy } from "@/content/icon";

export const PACKAGE_SUMMARIES: PackageSummary[] = [
  {
    key: "spotlight",
    title: "Spotlight",
    blurb:
      "A focused 90 minute shoot that delivers scroll stopping content fast. Calgary, Vancouver, and Toronto calendars are live. Other cities by quote.",
    priceLabel: "$1,821 CAD",
    highlights: [
      { label: "20 photos and 3 vertical videos" },
      { label: "Photos in 1 week, video in 10 days" },
      { label: "City calendars: Calgary, Vancouver, Toronto" }
    ],
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5932.jpg?alt=media&token=980dbfd2-d3d7-4517-9830-686f3a9b53d0",
    ctaHref: "https://westrosemedia.sproutstudio.com/bookings"
  },
  {
    key: "immersion",
    title: immersionCopy.heroTitle,
    blurb: immersionCopy.intro,
    priceLabel: "Starting at $6,000 CAD for 2 days",
    highlights: immersionCopy.bullets.map(bullet => ({ label: bullet })),
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6175.jpg?alt=media&token=0733ba88-1b27-4ca2-be4d-924b8c175e74",
    ctaHref: "/book/immersion"
  },
  {
    key: "icon",
    title: iconCopy.heroTitle,
    blurb: iconCopy.intro,
    priceLabel: "From $5,000 CAD per month",
    highlights: iconCopy.bullets.map(bullet => ({ label: bullet })),
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR1984.jpg?alt=media&token=f12f7493-bda1-48ff-a343-31502519d648",
    ctaHref: "/book/icon"
  }
];