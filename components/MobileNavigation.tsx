"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { workWithUsItems } from "@/lib/workWithUsLinks";

export default function MobileNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workWithUsOpen, setWorkWithUsOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) setWorkWithUsOpen(false);
  }, [mobileMenuOpen]);

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
              href="/packages" 
              className="text-gray-600 hover:text-black transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Packages
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
            <Link 
              href="/blog" 
              className="text-gray-600 hover:text-black transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                className="btn btn-sm w-fit inline-flex items-center gap-1"
                aria-expanded={workWithUsOpen}
                onClick={() => setWorkWithUsOpen((v) => !v)}
              >
                Work with Us
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform ${workWithUsOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {workWithUsOpen ? (
                <div className="flex flex-col gap-2 border-l-2 border-gray-200 pl-3 ml-1">
                  {workWithUsItems.map((item) =>
                    item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-black py-1"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setWorkWithUsOpen(false);
                        }}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-black py-1"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setWorkWithUsOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
                </div>
              ) : null}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
