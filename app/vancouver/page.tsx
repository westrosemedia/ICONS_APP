import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Personal Branding & Photography for Online Coaches & Service Providers in Vancouver BC | West Rose Media",
  description: "Vancouver's premier luxury personal branding photographer and business coach for online coaches, service providers, and women in business. Professional photography, content creation, and mastermind retreats. Transform your brand with Stephanie Rose.",
  keywords: "Vancouver photographer, personal branding Vancouver, online coaches Vancouver, service providers Vancouver, business photography Vancouver, social media marketing Vancouver, luxury photography BC, business coach Vancouver, content creation Vancouver, mastermind retreat Vancouver, Stephanie Rose Vancouver, women in business Vancouver",
  openGraph: {
    title: "Luxury Personal Branding for Online Coaches & Service Providers in Vancouver BC",
    description: "Vancouver's premier luxury personal branding photographer and business coach for online coaches, service providers, and women in business.",
    type: "website",
    locale: "en_CA",
  },
};

export default function VancouverPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_037.jpg?alt=media&token=04a83038-59fe-447a-8f3b-99900c5db7f1"
            alt="Luxury Personal Branding Photography for Online Coaches and Service Providers in Vancouver BC Canada - Stephanie Rose West Rose Media"
            fill
            className="object-cover object-center"
            priority
            title="Vancouver Personal Branding Photographer | Online Coaches and Service Providers BC"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Vancouver's
            <br />
            <span className="text-[#38b6ff]">Luxury Personal Branding</span>
            <br />
            for Coaches, Entrepreneurs & Founders
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Professional photography, content creation, and business coaching for online coaches, service providers, and women in business across Vancouver, BC
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
              className="inline-block bg-[#38b6ff] text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-[#2a9ce6] transition-colors"
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
            Why Vancouver Online Coaches & Service Providers Choose West Rose Media
          </h2>
          
          {/* Image Showcase */}
          <div className="mb-16">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR7086.jpg?alt=media&token=6bf7e2b2-0eab-46cf-bc95-8a1729102797"
                alt="Luxury Personal Branding Photography Session in Vancouver BC - Professional Content Creation for Entrepreneurs"
                fill
                className="object-cover"
                title="Vancouver Brand Photography | Professional Content Creation"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Luxury Photography</h3>
              <p className="text-gray-600 mb-6">
                Professional personal branding photography that captures your authentic leadership and elevates your online presence.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Personal brand photography</li>
                <li>• Professional headshots</li>
                <li>• Content creation sessions</li>
                <li>• Social media assets</li>
              </ul>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Social Media Strategy</h3>
              <p className="text-gray-600 mb-6">
                Strategic content creation and social media marketing that converts followers into high-value clients.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Content strategy development</li>
                <li>• Social media management</li>
                <li>• Brand storytelling</li>
                <li>• Engagement optimization</li>
              </ul>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Business Coaching</h3>
              <p className="text-gray-600 mb-6">
                Exclusive mastermind retreats and coaching programs designed for ambitious online coaches, service providers, and women in business.
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
            Perfect for Online Coaches & Service Providers
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Based in Vancouver, serving ambitious online coaches, service providers, and women in business across BC and Canada
          </p>
          
          {/* Image Showcase */}
          <div className="mb-12">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR1262.jpg?alt=media&token=6c1ead01-d7f2-4d20-834a-2c64c0ccfdd5"
                alt="Professional Brand Photography for Vancouver Entrepreneurs - Luxury Content Creation and Business Coaching"
                fill
                className="object-cover"
                title="Vancouver Business Photography | Professional Brand Sessions"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#38b6ff]">Online Coaches</h3>
              <p className="text-white/80">
                Life coaches, business coaches, health coaches, and wellness professionals who need compelling visual content to attract and convert clients.
              </p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#38b6ff]">Service Providers</h3>
              <p className="text-white/80">
                Consultants, therapists, financial advisors, and other service-based professionals looking to build trust and authority through professional imagery.
              </p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#38b6ff]">Women in Business</h3>
              <p className="text-white/80">
                Female entrepreneurs, executives, and business leaders who want to elevate their personal brand and stand out in competitive markets.
              </p>
            </div>
          </div>
          
          <Link
            href="/packages"
            className="inline-block bg-[#38b6ff] text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-[#2a9ce6] transition-colors"
          >
            Book Your Vancouver Photography Session
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join hundreds of successful online coaches, service providers, and women in business who have elevated their brands with West Rose Media
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
    </div>
  );
}
