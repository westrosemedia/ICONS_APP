import Link from "next/link";
import SocialMediaLinks from "@/components/SocialMediaLinks";

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-gray-200 mt-20" data-aos="fade-up">
      <div className="container-elegant py-12">
        <div className="mb-10 rounded-xl border border-gray-200 bg-gray-50 px-6 py-5 text-center md:text-left md:flex md:items-center md:justify-between md:gap-6">
          <p className="text-sm text-gray-700">
            Schedule smarter with Cadence by West Rose Media. One dashboard for 13 platforms.
          </p>
          <Link
            href="/cadence"
            className="mt-3 inline-flex shrink-0 items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-800 md:mt-0"
          >
            Get Started
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-elegant text-lg">West Rose Media</span>
          </div>
          <div className="text-center md:text-right">
            <div className="mb-4">
              <SocialMediaLinks />
            </div>
            <p className="text-gray-600 text-sm">
              <a href="tel:+15876095021" className="hover:text-black transition-colors">
                +1 (587) 609-5021
              </a>
            </p>
            <p className="text-gray-600 text-sm mt-1">© {new Date().getFullYear()} West Rose Media</p>
            <div className="flex flex-wrap gap-6 mt-2 justify-center md:justify-end">
              <Link href="/cadence" className="text-gray-500 hover:text-black text-sm transition-colors">
                Cadence
              </Link>
              <Link href="/case-studies" className="text-gray-500 hover:text-black text-sm transition-colors">
                Case studies
              </Link>
              <Link href="/blog" className="text-gray-500 hover:text-black text-sm transition-colors">
                Blog
              </Link>
              <Link href="/packages" className="text-gray-500 hover:text-black text-sm transition-colors">
                Packages
              </Link>
              <Link href="/podcast" className="text-gray-500 hover:text-black text-sm transition-colors">
                Podcast
              </Link>
              <Link href="/mastermind" className="text-gray-500 hover:text-black text-sm transition-colors">
                Mastermind
              </Link>
              <Link href="/faq" className="text-gray-500 hover:text-black text-sm transition-colors">
                FAQ
              </Link>
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
  );
}
