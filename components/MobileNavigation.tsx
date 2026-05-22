"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const PHOTO_GALLERIES_URL = "https://westrosemedia.sproutstudio.com/galleries";

export default function MobileNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container-elegant py-4 flex flex-col gap-4">
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-black transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/packages" 
              className="text-gray-600 hover:text-black transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Packages
            </Link>
            <Link 
              href="/cadence" 
              className="text-gray-600 hover:text-black transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cadence
            </Link>
            <Link 
              href="/mastermind" 
              className="text-gray-600 hover:text-black transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mastermind
            </Link>
            <Link 
              href="/case-studies" 
              className="text-gray-600 hover:text-black transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case studies
            </Link>
            <a
              href={PHOTO_GALLERIES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              View Photo Galleries
            </a>
            <Link
              href="/apply"
              className="inline-flex w-fit items-center justify-center rounded-lg border border-black px-5 py-2.5 text-sm font-medium text-black transition-colors duration-300 hover:bg-black hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply for ICON Brand Partnership
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
