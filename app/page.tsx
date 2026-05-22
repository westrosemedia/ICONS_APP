import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import HomepageStructuredData from "@/components/HomepageStructuredData";

const title = "West Rose Media | Brand Partnership, Content + Community for Women Founders | Calgary, Vancouver, Toronto";
const description =
  "West Rose Media builds the brand, content, and engaged community for accomplished women founders. The ICON Brand Partnership runs your entire content operation in house. The modern replacement for a PR firm. Based in Calgary, serving Vancouver, Toronto, and beyond.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "brand partnership for women founders, content strategy Calgary, personal brand photography Canada, West Rose Media, ICON Brand Partnership, brand photographer Calgary, event photographer Vancouver, Toronto brand photography, Stephanie Rose",
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
