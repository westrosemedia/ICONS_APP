"use client";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
  title: "West Rose Media",
  description: "ICONS by West Rose Media",
};
// Force deployment update - latest changes

const SHOW_NAV = true; // set to false to hide the top bar

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                <Link href="/packages" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Packages
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

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden border-t border-gray-200 bg-white">
                <nav className="container-elegant py-4 flex flex-col gap-4">
                  <Link 
                    href="/packages" 
                    className="text-gray-600 hover:text-black transition-colors duration-200 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Packages
                  </Link>
                  <Link 
                    href="/vault" 
                    className="text-gray-600 hover:text-black transition-colors duration-200 font-bold py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Vault
                  </Link>
                  <Link 
                    href="/login" 
                    className="text-gray-600 hover:text-black transition-colors duration-200 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    href="/packages" 
                    className="btn btn-sm w-fit"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book now
                  </Link>
                </nav>
              </div>
            )}
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
        
        <PerformanceMonitor />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
