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
              href="/content-challenge" 
              className="text-gray-600 hover:text-black transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Content Challenge
            </Link>
            <Link 
              href="/mastermind" 
              className="text-gray-600 hover:text-black transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mastermind
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
    </>
  );
}
