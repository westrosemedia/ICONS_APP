import { PackageSummary } from "@/types/package";
import { immersionCopy } from "@/content/immersion";
import { iconCopy } from "@/content/icon";

export const PACKAGE_SUMMARIES: PackageSummary[] = [
  {
    key: "spotlight",
    title: "Spotlight",
    blurb:
      "A focused 90 minute shoot that delivers scroll stopping content fast. Calgary, Vancouver, and Toronto calendars are live. Other cities by quote.",
    priceLabel: "$1,200 CAD",
    highlights: [
      { label: "20 photos and 3 vertical videos" },
      { label: "Photos in 1 week, video in 10 days" },
      { label: "City calendars: Calgary, Vancouver, Toronto" }
    ],
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5932.jpg?alt=media&token=980dbfd2-d3d7-4517-9830-686f3a9b53d0",
    ctaHref: "/book/spotlight"
  },
  {
    key: "lite",
    title: "WRM Lite",
    blurb:
      "Your monthly partner in visibility. We take the weight of content off your shoulders and replace it with a system that keeps you top of mind and in demand.",
    priceLabel: "$2,400 CAD per month",
    highlights: [
      { label: "Two posts each week created, written, and scheduled for you" },
      { label: "A monthly strategy call that aligns content to your revenue goals" },
      { label: "Fresh footage captured every other month so your visuals never go stale" }
    ],
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5003.jpg?alt=media&token=8f0d5362-b07d-496e-b418-95b55af18dc8",
    ctaHref: "/book/wrm_lite"
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
  },
  {
    key: "ppb",
    title: "Powerful Personal Brand",
    blurb: "Signature West Rose Media program. Build a brand that carries you through every season.",
    priceLabel: "Presale: $2,000 | Regular: $3,000",
    highlights: [
      { label: "8 week live course" },
      { label: "October 27 start or save your January seat" },
      { label: "Signature program of West Rose Media" }
    ],
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR4732.jpg?alt=media&token=01261972-fb22-47b0-b772-1fd2a6817369",
    ctaHref: "/powerfulpersonalbrand"
  }
];