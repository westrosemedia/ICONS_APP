import Link from "next/link";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import { footerLinks, PHOTO_GALLERIES_URL } from "@/lib/siteNav";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-paper text-black" data-aos="fade-up">
      <div className="container-elegant py-14 md:py-20">
        <div className="flex flex-col gap-8 border-b border-black/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-heading text-[2.35rem] font-medium leading-none tracking-[-0.03em] text-black sm:text-[2.75rem]">
              West Rose Media
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-black/70">
              Schedule smarter with Cadence by West Rose Media. One dashboard for 13 platforms.
            </p>
          </div>
          <Link href="/cadence#pricing" className="nav-button w-fit">
            Get Started
          </Link>
        </div>

        <div className="grid gap-12 pt-10 md:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)] md:gap-16">
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-1 sm:grid-cols-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link inline-flex py-2 text-black/60 hover:text-black"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="nav-link inline-flex py-2 text-black/60 hover:text-black">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start gap-6">
            <a href={PHOTO_GALLERIES_URL} target="_blank" rel="noopener noreferrer" className="nav-button w-fit">
              View Photo Galleries
            </a>
            <SocialMediaLinks />
            <div>
              <a href="tel:+15876095021" className="text-sm text-black/70 transition-colors hover:text-black">
                +1 (587) 609-5021
              </a>
              <p className="mt-2 text-sm text-black/70">© {new Date().getFullYear()} West Rose Media</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
