import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Stephanie Rose | Calgary Personal Branding Photographer & Business Coach",
  description: "Meet Stephanie Rose, Calgary's premier luxury personal branding photographer and business coach for female entrepreneurs. Learn about her journey from corporate to helping ambitious women build iconic brands across Canada.",
  keywords: "Stephanie Rose, Calgary photographer, personal branding photographer, business coach Calgary, female entrepreneur coach, luxury photography Calgary, West Rose Media founder, about Stephanie Rose",
  openGraph: {
    title: "About Stephanie Rose | Calgary Personal Branding Photographer",
    description: "Meet Stephanie Rose, Calgary's premier luxury personal branding photographer and business coach for female entrepreneurs.",
    type: "website",
    locale: "en_CA",
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
                Hi, I'm
                <br />
                <span className="text-orange-500" style={{color: '#ff914d'}}>Stephanie Rose</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Calgary's premier luxury personal branding photographer and business coach for female entrepreneurs who are ready to build iconic brands that command attention and convert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/packages"
                  className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Work With Me
                </Link>
                <Link
                  href="/mastermind"
                  className="inline-block border-2 border-black text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-black hover:text-white transition-colors"
                >
                  Join the Mastermind
                </Link>
              </div>
            </div>
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7"
                alt="Stephanie Rose - Calgary Personal Branding Photographer and Business Coach for Entrepreneurs"
                fill
                className="object-cover"
                title="Stephanie Rose | Calgary Personal Branding Photographer"
                priority
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
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              I did not inherit this business. I built it from the ground up after burning my old life to the ground.
            </p>
            
            <p>
              I walked away from a marriage that kept me small. I came out in my thirties and finally claimed who I am. I raised three kids on my own while building a company with nothing but my camera, my vision, and an unshakable belief that life could be bigger.
            </p>
            
            <p>
              That is why West Rose Media exists. It is not just about photos. It is about proof that you can rewrite everything and rise higher than you ever imagined. My work is born from that fire. I help leaders step into their own power, show the world who they really are, and become unforgettable.
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
              <h3 className="text-2xl font-bold mb-4 text-black">Luxury Photography</h3>
              <p className="text-gray-600 mb-6">
                High end photography that makes your audience stop scrolling and take you seriously.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Branding sessions</li>
                <li>• High impact headshots</li>
                <li>• Content days and reels</li>
                <li>• Social media visuals</li>
              </ul>
            </div>
            
            <div className="text-center p-8 bg-white border border-gray-200 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Brand Partnership</h3>
              <p className="text-gray-600 mb-6">
                Ongoing collaboration that keeps your vision alive without you chasing it.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Strategy and execution</li>
                <li>• Content management</li>
                <li>• Storytelling that feels like you</li>
                <li>• Consistency that scales your revenue</li>
              </ul>
            </div>
            
            <div className="text-center p-8 bg-white border border-gray-200 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Intensives and Retreats</h3>
              <p className="text-gray-600 mb-6">
                Spaces designed for bold leaders who want more visibility, more influence, and more money.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Strategic intensives</li>
                <li>• Luxury retreats</li>
                <li>• Masterclasses and workshops</li>
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
              "You do not need another course. You do not need a million to do lists. You need a partner who understands your vision and makes it real."
            </p>
            
            <p>
              My work is not about creating an illusion. It is about building a brand that mirrors the power you already hold. When you look, sound, and move like the leader you are, the market responds.
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
              From my home base in Calgary, I partner with leaders across Canada who are scaling past six and seven figures. They do not hire me for photos. They hire me because I think like a strategist, create like a visionary, and deliver like a machine.
            </p>
            <p>
              My clients walk away with more than content. They walk away with a brand that commands attention, fuels growth, and builds legacy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
            Ready to Build Your Iconic Brand?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's create the visual presence and strategic positioning that transforms your business and your life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              View Photography Packages
            </Link>
            <Link
              href="/mastermind"
              className="inline-block text-white px-8 py-4 rounded-xl text-lg font-medium transition-colors"
              style={{backgroundColor: '#ff914d'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e67e22'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#ff914d'}
            >
              Join the Mastermind
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
