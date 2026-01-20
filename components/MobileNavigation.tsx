"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
              href="/how-it-works" 
              className="text-gray-600 hover:text-black transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it works
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-black transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/apply" 
              className="btn btn-sm w-fit"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply for the ICON Brand Partnership
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
