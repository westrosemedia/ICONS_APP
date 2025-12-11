import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MobileNavigation from "@/components/MobileNavigation";
import StructuredData from "@/components/StructuredData";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import PinterestVerification from "@/components/PinterestVerification";
import PodcastBanner from "@/components/PodcastBanner";
import DeferredAnalytics from "@/components/DeferredAnalytics";

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
  title: "West Rose Media | Luxury Brand Photographer & Business Coach | Calgary, Toronto, Vancouver",
  description: "West Rose Media provides luxury personal branding photography, content strategy, and business coaching for female entrepreneurs across Canada. Founded by Stephanie Rose in Calgary, Alberta. Transform your brand with professional photography, social media strategy, mastermind retreats, and the ICONS podcast. Serving Calgary, Toronto, Vancouver, and nationwide.",
  keywords: "Stephanie Rose, brand photographer Calgary, luxury brand photography, social media strategist, personal branding photographer, business photography Calgary, content creation, brand strategy, entrepreneur photography, Calgary photographer, Toronto photographer, Vancouver photographer, social media help, brand photoshoot, professional headshots Calgary, business branding, content marketing, luxury lifestyle photography, Canadian entrepreneurs, West Rose Media, ICON Society, mastermind retreats, ICONS podcast, business coach Canada, personal branding Canada",
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
    title: "West Rose Media | Luxury Brand Photographer & Business Coach | Canada",
    description: "Luxury personal branding photography, content strategy, and business coaching for female entrepreneurs across Canada. Professional brand photography, social media strategy, mastermind retreats, and the ICONS podcast.",
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
    title: 'Stephanie Rose | Luxury Brand Photographer & Social Media Strategist',
    description: 'Calgary\'s premier luxury brand photographer and social media strategist. Professional brand photography and content strategy for entrepreneurs.',
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

const SHOW_NAV = true; // set to false to hide the top bar

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full w-full ${dmSans.variable} ${cormorantGaramond.variable}`}>
      <body 
        className="min-h-screen w-full bg-white text-black font-sans antialiased"
        suppressHydrationWarning={true}
      >
        {SHOW_NAV ? (
          <header className="w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
            <div className="container-elegant py-4 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 group">
                <span className="text-elegant text-xl tracking-wide">West Rose Media</span>
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <Link href="/about" className="text-gray-600 hover:text-black transition-colors duration-200">
                  About
                </Link>
                <Link href="/packages" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Packages
                </Link>
                <Link href="/podcast" className="text-gray-600 hover:text-black transition-colors duration-200 font-semibold relative group">
                  Podcast
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full opacity-75 group-hover:opacity-100"></span>
                </Link>
                <Link href="/mastermind" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Mastermind
                </Link>
                <Link href="/vault" className="text-gray-600 hover:text-black transition-colors duration-200 font-bold">
                  Vault
                </Link>
                <Link href="/login" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Login
                </Link>
                <Link href="/packages" className="btn btn-sm">
                  Book now
                </Link>
              </nav>

              {/* Mobile Navigation */}
              <MobileNavigation />
            </div>
          </header>
        ) : null}

        <main className="w-full">{children}</main>

        <footer className="w-full border-t border-gray-200 mt-20">
          <div className="container-elegant py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                      <div className="flex items-center gap-3">
                        <span className="text-elegant text-lg">West Rose Media</span>
                      </div>
              <div className="text-center md:text-right">
                <div className="mb-4">
                  <SocialMediaLinks />
                </div>
                <p className="text-gray-600 text-sm">
                  © {new Date().getFullYear()} West Rose Media
                </p>
                <div className="flex gap-6 mt-2">
                  <Link href="/privacy" className="text-gray-500 hover:text-black text-sm transition-colors">
                    Privacy
                  </Link>
                  <Link href="/terms" className="text-gray-500 hover:text-black text-sm transition-colors">
                    Terms
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
        <StructuredData />
        <PinterestVerification />
        <PerformanceMonitor />
        <Analytics />
        <SpeedInsights />
        <PodcastBanner />
        {/* Defer non-critical analytics to load after user interaction */}
        <DeferredAnalytics />
      </body>
    </html>
  );
}
// Force deployment update - Mon Sep 29 15:18:35 MDT 2025
