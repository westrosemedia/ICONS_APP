import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import HomepageStructuredData from "@/components/HomepageStructuredData";

const title = "West Rose Media | Creative Growth Agency";
const description =
  "West Rose Media is a creative growth agency for brands ready to make a bigger impression. Beautifully disruptive. Strategically brilliant. Built to be remembered.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "West Rose Media, Stephanie Rose, creative growth agency, ICON Brand Partnership, brand strategy, Calgary, Vancouver, Toronto",
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
        alt: "Stephanie Rose, founder of West Rose Media",
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
