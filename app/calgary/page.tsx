import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stephanie Rose | Best Brand Photographer in Calgary AB | Luxury Brand Photography for Entrepreneurs",
  description: "Stephanie Rose is Calgary's #1 luxury brand photographer and social media strategist for entrepreneurs. Professional brand photography, content strategy, and social media help in Calgary AB. Book your luxury brand photoshoot today - content that drives sales and photos that make you unforgettable.",
  keywords: "Stephanie Rose Calgary, Calgary brand photographer, Calgary branding photography, Calgary brand strategist and photographer, Calgary personal brand photography, Calgary entrepreneur branding photoshoot, Calgary content photographer for entrepreneurs, Calgary brand videography, Calgary content strategy and photography, luxury brand photographer Calgary, Calgary business branding photoshoot, best brand photographer in Calgary for entrepreneurs, Calgary content photography for coaches and consultants, where to book a brand photoshoot in Calgary, how to get luxury brand photos in Calgary, personal brand photography packages Calgary, social media content creator Calgary, corporate branding photographer Calgary AB, entrepreneur photoshoot Calgary, professional photos for coaches in Calgary, social media help Calgary, photographer Calgary, Okotoks, Airdrie, Cochrane, Canmore, Banff, Southern Alberta, West Rose Media",
  authors: [{ name: "Stephanie Rose", url: "https://westrosemedia.com" }],
  creator: "Stephanie Rose",
  publisher: "West Rose Media",
  metadataBase: new URL('https://westrosemedia.com'),
  alternates: {
    canonical: '/calgary',
  },
  openGraph: {
    title: "Stephanie Rose | Best Brand Photographer in Calgary AB | Luxury Brand Photography for Entrepreneurs",
    description: "Calgary's #1 luxury brand photographer and social media strategist for entrepreneurs. Professional brand photography and content strategy in Calgary AB.",
    url: 'https://westrosemedia.com/calgary',
    siteName: 'West Rose Media',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_038.jpg?alt=media&token=93446e09-e15f-4253-add9-a4ba78f05bdf',
        width: 1200,
        height: 630,
        alt: 'Stephanie Rose - Best Brand Photographer in Calgary AB for Entrepreneurs',
      },
    ],
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stephanie Rose | Best Brand Photographer in Calgary AB',
    description: 'Calgary\'s #1 luxury brand photographer and social media strategist for entrepreneurs. Professional brand photography and content strategy.',
    images: ['https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_038.jpg?alt=media&token=93446e09-e15f-4253-add9-a4ba78f05bdf'],
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

export default function CalgaryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_038.jpg?alt=media&token=93446e09-e15f-4253-add9-a4ba78f05bdf"
            alt="Best brand photographer in Calgary AB for entrepreneurs - luxury brand photography and content strategy by Stephanie Rose West Rose Media"
            fill
            className="object-cover object-center"
            priority
            title="Calgary Brand Photographer | Luxury Brand Photography for Entrepreneurs in Calgary AB"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Calgary's
            <br />
            <span className="text-[#fbf5a6]">Luxury Personal Branding</span>
            <br />
            for Coaches, Entrepreneurs & Founders
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            From Calgary photoshoot to consistent brand presence. Strategic brand photography and content that drives sales for entrepreneurs, coaches, and consultants in Calgary AB and Southern Alberta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="inline-block bg-white text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              View Photography Packages
            </Link>
            <Link
              href="/mastermind"
              className="inline-block bg-[#fbf5a6] text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-[#f0e68c] transition-colors"
            >
              Join the Mastermind
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            Why Calgary Entrepreneurs Choose the Best Brand Photographer in Calgary AB
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Luxury Brand Photography Calgary</h3>
              <p className="text-gray-600 mb-6">
                Professional brand photography that captures your authentic leadership and elevates your online presence. Photos that make you unforgettable in Calgary AB.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Personal brand photography</li>
                <li>• Professional headshots</li>
                <li>• Content creation sessions</li>
                <li>• Social media assets</li>
              </ul>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Calgary Content Strategy & Photography</h3>
              <p className="text-gray-600 mb-6">
                Strategic content creation and social media marketing that converts followers into high-value clients. Content that drives sales for Calgary entrepreneurs.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Content strategy development</li>
                <li>• Social media management</li>
                <li>• Brand storytelling</li>
                <li>• Engagement optimization</li>
              </ul>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Calgary Brand Strategist & Photographer</h3>
              <p className="text-gray-600 mb-6">
                Exclusive mastermind retreats and coaching programs designed for ambitious entrepreneurs, coaches, and consultants in Calgary AB.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Mastermind retreats</li>
                <li>• 1:1 business coaching</li>
                <li>• Group programs</li>
                <li>• Accountability support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Calgary Brand Photography for Entrepreneurs, Coaches & Consultants
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Based in Calgary AB, serving ambitious entrepreneurs, coaches, and consultants across Calgary, Okotoks, Airdrie, Cochrane, Canmore, Banff, and Southern Alberta
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#fbf5a6]">Calgary Content Photography for Coaches</h3>
              <p className="text-white/80">
                Life coaches, business coaches, health coaches, and wellness professionals in Calgary AB who need compelling visual content to attract and convert clients.
              </p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#fbf5a6]">Corporate Branding Photographer Calgary AB</h3>
              <p className="text-white/80">
                Consultants, therapists, financial advisors, and other service-based professionals in Calgary looking to build trust and authority through professional imagery.
              </p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#fbf5a6]">Entrepreneur Photoshoot Calgary</h3>
              <p className="text-white/80">
                Entrepreneurs, executives, and business leaders in Calgary AB who want to elevate their personal brand and stand out in competitive markets.
              </p>
            </div>
          </div>
          
          <Link
            href="/packages"
            className="inline-block bg-[#fbf5a6] text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-[#f0e68c] transition-colors"
          >
            Where to Book a Brand Photoshoot in Calgary
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-black">How much does brand photography cost in Calgary?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Brand photography packages in Calgary start at $2,500 for a comprehensive session including professional photography, content strategy, and social media assets. Investment varies based on session type, location, and deliverables needed.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-black">Where to book a brand photoshoot in Calgary?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                You can book your Calgary brand photoshoot directly through West Rose Media. We offer both studio and on-location sessions throughout Calgary, including luxury venues, outdoor locations, and your business premises.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-black">What is included in a brand photography package?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our Calgary brand photography packages include professional photography, content strategy consultation, edited high-resolution images, social media assets, and usage rights. We also provide guidance on how to use your photos for maximum business impact.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-black">How to get luxury brand photos in Calgary?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To get luxury brand photos in Calgary, work with a professional brand photographer who understands your business goals. We specialize in creating high-end, editorial-style photography that elevates your brand and attracts your ideal clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
            How to Get Luxury Brand Photos in Calgary
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join hundreds of successful entrepreneurs, coaches, and consultants in Calgary AB who have elevated their brands with strategic photography and content that drives sales
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/mastermind"
              className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Join the Mastermind
            </Link>
            <Link
              href="/packages"
              className="inline-block border-2 border-black text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-black hover:text-white transition-colors"
            >
              View Photography Packages
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does brand photography cost in Calgary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Brand photography packages in Calgary start at $2,500 for a comprehensive session including professional photography, content strategy, and social media assets. Investment varies based on session type, location, and deliverables needed."
                }
              },
              {
                "@type": "Question",
                "name": "Where to book a brand photoshoot in Calgary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can book your Calgary brand photoshoot directly through West Rose Media. We offer both studio and on-location sessions throughout Calgary, including luxury venues, outdoor locations, and your business premises."
                }
              },
              {
                "@type": "Question",
                "name": "What is included in a brand photography package?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our Calgary brand photography packages include professional photography, content strategy consultation, edited high-resolution images, social media assets, and usage rights. We also provide guidance on how to use your photos for maximum business impact."
                }
              },
              {
                "@type": "Question",
                "name": "How to get luxury brand photos in Calgary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To get luxury brand photos in Calgary, work with a professional brand photographer who understands your business goals. We specialize in creating high-end, editorial-style photography that elevates your brand and attracts your ideal clients."
                }
              }
            ]
          }),
        }}
      />
    </div>
  );
}
