import "./globals.css";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "@/components/StructuredData";
import PinterestVerification from "@/components/PinterestVerification";
import DeferredAnalytics from "@/components/DeferredAnalytics";
import AosInit from "@/components/AosInit";
import SiteChrome from "@/components/SiteChrome";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant-garamond",
  display: "swap",
  preload: true,
});


export const metadata = {
  title: "West Rose Media | Brand Photography + Event Coverage | Calgary, Vancouver, Toronto",
  description: "West Rose Media produces brand photography and video for established founders across Canada. Book a one-time Spotlight shoot or bring us to your next mastermind or conference event. Based in Calgary, serving Vancouver, Toronto, and beyond.",
  keywords: "Stephanie Rose, brand photographer Calgary, event photographer Vancouver, Toronto brand photography, personal branding photographer, mastermind content coverage, West Rose Media, ICON Brand Partnership, Canadian founders",
  authors: [{ name: "Stephanie Rose", url: "https://westrosemedia.com" }],
  creator: "Stephanie Rose",
  publisher: "West Rose Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://westrosemedia.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "West Rose Media | Brand Photography + Event Coverage | Canada",
    description: "Brand photography and video for established founders. Spotlight shoots, Immersion event coverage, and ICON Brand Partnership. Calgary, Vancouver, Toronto.",
    url: 'https://westrosemedia.com',
    siteName: 'West Rose Media',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7',
        width: 1200,
        height: 630,
        alt: 'Stephanie Rose - Calgary Luxury Brand Photographer and Social Media Strategist',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'West Rose Media | Brand Photography + Event Coverage',
    description: 'Brand photography and video for established founders across Canada. Calgary, Vancouver, Toronto.',
    images: ['https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7'],
    creator: '@westrosemedia',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to add your actual verification code
  },
  other: {
    'p:domain_verify': '12b6f42affb7537b4f78a6f420394653',
  },
};
// Force deployment update - latest changes

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full w-full ${dmSans.variable} ${cormorantGaramond.variable}`}>
      <body 
        className="min-h-screen w-full bg-white text-black font-sans antialiased"
        suppressHydrationWarning={true}
      >
        <AosInit />
        <SiteChrome>{children}</SiteChrome>

        <StructuredData />
        <PinterestVerification />
        <PerformanceMonitor />
        <Analytics />
        <SpeedInsights />
        {/* Defer non-critical analytics to load after user interaction */}
        <DeferredAnalytics />
      </body>
    </html>
  );
}
// Force deployment update - Mon Sep 29 15:18:35 MDT 2025
