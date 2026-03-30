import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import HomepageStructuredData from "@/components/HomepageStructuredData";

const title = "West Rose Media | Brand Photography + Event Coverage | Calgary, Vancouver, Toronto";
const description =
  "West Rose Media produces brand photography and video for established founders across Canada. Book a one-time Spotlight shoot or bring us to your next mastermind or conference event. Based in Calgary, serving Vancouver, Toronto, and beyond.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "brand photographer Calgary, event photographer Vancouver, Toronto brand photography, West Rose Media, personal brand photography Canada, mastermind content coverage, Stephanie Rose",
  openGraph: {
    title,
    description,
    url: "https://westrosemedia.com",
    siteName: "West Rose Media",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7",
        width: 1200,
        height: 630,
        alt: "West Rose Media brand photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7",
    ],
    creator: "@westrosemedia",
  },
};

export default function HomePage() {
  return (
    <>
      <HomepageStructuredData />
      <HomePageClient />
    </>
  );
}
