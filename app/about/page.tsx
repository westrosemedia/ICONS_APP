import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import AboutStructuredData from "@/components/AboutStructuredData";

export const metadata: Metadata = {
  title: "About Stephanie Rose | Calgary Brand Photographer | West Rose Media",
  description: "Meet Stephanie Rose, Calgary's luxury brand photographer and founder of West Rose Media. Learn about her journey building a high-end content studio that serves entrepreneurs across Canada.",
  keywords: "Stephanie Rose, about Stephanie Rose, Calgary brand photographer, Calgary photographer, personal branding photographer, luxury photography Calgary, West Rose Media founder, brand photographer Calgary, content studio Calgary, photographer Calgary, business photography Calgary, personal brand strategist",
  authors: [{ name: "Stephanie Rose", url: "https://westrosemedia.com" }],
  creator: "Stephanie Rose",
  publisher: "West Rose Media",
  metadataBase: new URL('https://westrosemedia.com'),
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Stephanie Rose | Calgary Brand Photographer",
    description: "Meet Stephanie Rose, Calgary's luxury brand photographer and founder of West Rose Media. Learn about her journey building a high-end content studio for entrepreneurs.",
    url: 'https://westrosemedia.com/about',
    siteName: 'West Rose Media',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7',
        width: 1200,
        height: 630,
        alt: 'Stephanie Rose - Calgary Brand Photographer',
      },
    ],
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Stephanie Rose | Calgary Brand Photographer',
    description: 'Meet Stephanie Rose, Calgary\'s luxury brand photographer and founder of West Rose Media.',
    images: ['https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7'],
    creator: '@westrosemedia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black leading-tight">
                Hi, I’m
                <br />
                <span className="text-orange-500" style={{color: '#ff914d'}}>Stephanie Rose</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founder of West Rose Media, a high-end content studio for entrepreneurs who need a serious online presence and want it handled properly.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Based in Calgary and working regularly in Vancouver and Toronto, I create photography, video, and done-for-you content systems that build trust and drive inbound demand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/apply"
                  className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Work With Me
                </Link>
                <Link
                  href="/packages"
                  className="inline-block border-2 border-black text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-black hover:text-white transition-colors"
                >
                  View Packages
                </Link>
              </div>
            </div>
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7"
                alt="Stephanie Rose - Calgary Personal Branding Photographer"
                fill
                className="object-cover"
                title="Stephanie Rose | Calgary Personal Branding Photographer"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            My Story
          </h2>
          
          {/* Story Image */}
          <div className="mb-12">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_012.jpg?alt=media&token=d22f0bf0-f15c-458c-bcc7-421c4006bc28"
                alt="Stephanie Rose - Personal Branding Photographer Story"
                fill
                className="object-cover"
                title="Stephanie Rose | My Story - Building West Rose Media"
                sizes="(max-width: 768px) 100vw, 800px"
                loading="lazy"
                quality={85}
              />
            </div>
          </div>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              West Rose Media was built during a season of real, irreversible change. I built this business while leaving religion, getting divorced, coming out, and raising three kids on my own. Later, I met my partner and built a life that finally felt aligned. Through all of it, the business kept working.
            </p>
            <p>
              That experience fundamentally shaped how I see brand and business. A strong brand is not fragile. It does not depend on trends, platforms, or a single version of your life. It is built to hold you through change, growth, grief, reinvention, and expansion. West Rose Media survived Covid, personal upheaval, and massive transition because it was built on clarity, integrity, and execution, not noise.
            </p>
            <p>
              West Rose Media is deeply committed to the queer community, not as a positioning strategy, but as lived experience. I know what it means to rebuild your identity while still needing your business to be stable, visible, and profitable. The work we do is designed to support real people with real lives, not a polished persona that collapses under pressure.
            </p>
            <p>
              Clients come to West Rose Media because they want a brand that can grow with them. One that supports their family, their future, their visibility, and their income without requiring them to burn everything down every few years. This is content and positioning built to last. Built to create trust. Built to carry you forward, no matter what changes next.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            What I Do
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white border border-gray-200 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Photography and Video for Entrepreneurs</h3>
              <p className="text-gray-600 mb-6">
                High-end visuals that make a business look as credible as it actually is.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Personal brand shoots</li>
                <li>• Campaign and launch visuals</li>
                <li>• Event coverage and behind-the-scenes content</li>
                <li>• Reels and short-form video assets</li>
              </ul>
            </div>
            
            <div className="text-center p-8 bg-white border border-gray-200 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-black">The ICON Brand Partnership</h3>
              <p className="text-gray-600 mb-6">
                A done-for-you content operation for founders who want strategy, production, and publishing handled end to end.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Strategy and content direction</li>
                <li>• Monthly production (photo + video)</li>
                <li>• Copy support and publishing workflows</li>
                <li>• Consistent content that builds trust and drives inbound demand</li>
              </ul>
            </div>
            
            <div className="text-center p-8 bg-white border border-gray-200 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Event and Immersion Coverage</h3>
              <p className="text-gray-600 mb-6">
                Multi-day content capture for founders and teams who want the room, the energy, and the results documented and leveraged.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Event photo + video coverage</li>
                <li>• Same-day asset delivery options</li>
                <li>• Content built for immediate demand</li>
                <li>• Post-event content pipeline</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            My Philosophy
          </h2>
          
          <div className="space-y-8 text-lg text-white/90 leading-relaxed">
            <p className="text-2xl font-medium text-orange-500" style={{color: '#ff914d'}}>
              High-end content is not an aesthetic choice. It is a trust decision.
            </p>
            
            <p>
              When a founder’s online presence matches their real capability, the market responds faster. Better leads. Better opportunities. Cleaner sales conversations.
            </p>
            <p>
              West Rose Media is built for people who want to move. Clear direction, decisive execution, and content that looks like leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Today Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
            Today
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              West Rose Media is based in Calgary and works with clients across Canada, including Vancouver and Toronto. The work is designed for established entrepreneurs, consultants, and event-led brands who want their presence to match their level.
            </p>
            <p>
              Clients leave with assets that create demand now, and a content system that keeps working long after the shoot.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[4/3] rounded-lg shadow-2xl overflow-hidden">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_075.jpg?alt=media&token=ae30650a-5ad9-43ed-8723-a237d5b551a4"
              alt="Stephanie Rose - Calgary Brand Photographer and Social Media Strategist for Entrepreneurs"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              loading="lazy"
              quality={85}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
            Ready to Build Demand With Content That Matches Your Level?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's create the visual presence and strategic positioning that transforms your business and your life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Apply for the ICON Brand Partnership
            </Link>
            <Link
              href="/packages"
              className="inline-block text-white px-8 py-4 rounded-xl text-lg font-medium transition-colors hover:opacity-90"
              style={{backgroundColor: '#ff914d'}}
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>
      
      {/* Structured Data for SEO */}
      <AboutStructuredData />
    </div>
  );
}
