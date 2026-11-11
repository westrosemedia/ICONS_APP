import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import HomepageStructuredData from "@/components/HomepageStructuredData";

const title = "High-End Photography for Social Media | West Rose Media";
const description =
  "West Rose Media is Stephanie Rose’s studio for high-end photography for social media. Photography, video, and the strategy behind the posts. Based in Calgary.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "high-end photography for social media, West Rose Media, Stephanie Rose, photography, video, social content, Calgary, Vancouver, Toronto",
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
