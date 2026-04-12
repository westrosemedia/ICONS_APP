import type { Metadata } from "next";
import CadencePageClient from "@/components/cadence/CadencePageClient";
import CadenceStructuredData from "@/components/cadence/CadenceStructuredData";
import { CADENCE_IMAGES } from "@/lib/cadence";

const title = "Cadence by West Rose Media | Social Media Scheduling for Serious Founders";
const description =
  "Schedule across 13 platforms from one dashboard. Cadence is a professional social media scheduling platform by West Rose Media. Canva and Dropbox integration, native TikTok publishing, and the WRM Telegram community. Plans from $29 USD/month.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "Cadence, West Rose Media, social media scheduler, schedule Instagram, TikTok scheduling, Canva integration, content calendar",
  authors: [{ name: "West Rose Media", url: "https://westrosemedia.com" }],
  metadataBase: new URL("https://westrosemedia.com"),
  alternates: {
    canonical: "/cadence",
  },
  openGraph: {
    title,
    description,
    url: "https://westrosemedia.com/cadence",
    siteName: "West Rose Media",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: CADENCE_IMAGES.hero,
        width: 1920,
        height: 1080,
        alt: "Cadence by West Rose Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [CADENCE_IMAGES.hero],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CadencePage() {
  return (
    <>
      <CadenceStructuredData />
      <CadencePageClient />
    </>
  );
}
