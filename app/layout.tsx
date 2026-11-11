import "./globals.css";
import { DM_Sans, Cormorant_Garamond, Bodoni_Moda } from "next/font/google";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "@/components/StructuredData";
import DeferredAnalytics from "@/components/DeferredAnalytics";
import AosInit from "@/components/AosInit";
import SiteChrome from "@/components/SiteChrome";
import StaleCacheCleanup from "@/components/StaleCacheCleanup";

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

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-wrm-display",
  display: "swap",
  preload: false,
});


export const metadata = {
  title: "West Rose Media | Creative Growth Agency",
  description: "West Rose Media is Stephanie Rose’s studio for high-end photography for social media. Photography, video, and strategy. Based in Calgary.",
  keywords: "high-end photography for social media, Stephanie Rose, West Rose Media, photography, video, social content, Calgary",
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
    title: "High-End Photography for Social Media | West Rose Media",
    description: "West Rose Media is Stephanie Rose’s studio for high-end photography for social media. Photography, video, and strategy. Based in Calgary.",
    url: 'https://westrosemedia.com',
    siteName: 'West Rose Media',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7',
        width: 1200,
        height: 630,
        alt: 'Stephanie Rose, founder of West Rose Media',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High-End Photography for Social Media | West Rose Media',
    description: 'West Rose Media is Stephanie Rose’s studio for high-end photography for social media. Based in Calgary.',
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
};
// Force deployment update - latest changes

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full w-full ${dmSans.variable} ${cormorantGaramond.variable} ${bodoniModa.variable}`}>
      <head>
        <meta name="p:domain_verify" content="12b6f42affb7537b4f78a6f420394653" />
      </head>
      <body 
        className="min-h-screen w-full bg-white text-black font-sans antialiased"
        suppressHydrationWarning={true}
      >
        <AosInit />
        <StaleCacheCleanup />
        <SiteChrome>{children}</SiteChrome>

        <StructuredData />
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
