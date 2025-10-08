import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MobileNavigation from "@/components/MobileNavigation";
import StructuredData from "@/components/StructuredData";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import StickyBanner from "@/components/StickyBanner";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});


export const metadata = {
  title: "Stephanie Rose | Luxury Brand Photographer & Social Media Strategist | Calgary AB",
  description: "Stephanie Rose is Calgary's premier luxury brand photographer and social media strategist. Transform your business with professional brand photography, content strategy, and personal branding for entrepreneurs across Canada. Book your luxury brand photoshoot today.",
  keywords: "Stephanie Rose, brand photographer Calgary, luxury brand photography, social media strategist, personal branding photographer, business photography Calgary, content creation, brand strategy, entrepreneur photography, Calgary photographer, social media help, brand photoshoot, professional headshots Calgary, business branding, content marketing, luxury lifestyle photography, Canadian entrepreneurs, West Rose Media, ICON Society, mastermind retreats",
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
    title: "Stephanie Rose | Luxury Brand Photographer & Social Media Strategist | Calgary AB",
    description: "Calgary's premier luxury brand photographer and social media strategist. Professional brand photography and content strategy for entrepreneurs across Canada.",
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
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/icons%20logo%20.png?alt=media"
                  alt="ICONS"
                  width={32}
                  height={32}
                  priority
                  className="group-hover:scale-105 transition-transform duration-200"
                />
                <span className="text-elegant text-xl tracking-wide">ICONS</span>
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <Link href="/about" className="text-gray-600 hover:text-black transition-colors duration-200">
                  About
                </Link>
                <Link href="/packages" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Packages
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
                        <Image
                          src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/icons%20logo%20.png?alt=media"
                          alt="ICONS"
                          width={24}
                          height={24}
                        />
                        <span className="text-elegant text-lg">ICONS</span>
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
        <StickyBanner />
        <PerformanceMonitor />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
// Force deployment update - Mon Sep 29 15:18:35 MDT 2025
