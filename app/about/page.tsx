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
                <span className="text-[#c1ff72]">Stephanie Rose</span>
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
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6951.jpg?alt=media&token=9100f358-a2f9-4848-b995-2eee1ff3b285"
                alt="Stephanie Rose - Calgary Personal Branding Photographer and Business Coach for Female Entrepreneurs"
                fill
                className="object-cover"
                title="Stephanie Rose | Calgary Personal Branding Photographer"
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
              I wasn't always the photographer and business coach you see today. Like many ambitious women, I started in the corporate world, climbing ladders that weren't mine to climb, building someone else's dream while mine sat quietly in the corner.
            </p>
            
            <p>
              But here's what I learned: <strong>brilliant entrepreneurs get overlooked every single day</strong>. Not because they lack talent, vision, or drive, but because they lack the visual presence and strategic positioning that makes the world sit up and take notice.
            </p>
            
            <p>
              That's when I realized my calling wasn't just to take beautiful photos – it was to <strong>amplify the voices of women who are changing the world</strong>. To help them build brands that are as magnetic as they are, as strategic as they are smart, and as unforgettable as their impact.
            </p>
            
            <p>
              Today, based in Calgary and serving ambitious women across Canada, I've had the privilege of working with hundreds of female entrepreneurs who've gone from invisible to iconic. From six-figure launches to seven-figure exits, from local recognition to international influence.
            </p>
            
            <p>
              <strong>My clients don't hire me for photos. They partner with me to become the leader they already are.</strong>
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
                Professional personal branding photography that captures your authentic leadership and elevates your online presence.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Personal brand photography</li>
                <li>• Professional headshots</li>
                <li>• Content creation sessions</li>
                <li>• Social media assets</li>
              </ul>
            </div>
            
            <div className="text-center p-8 bg-white border border-gray-200 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Business Coaching</h3>
              <p className="text-gray-600 mb-6">
                Strategic business coaching and mastermind programs designed for ambitious female entrepreneurs ready to scale.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Mastermind retreats</li>
                <li>• 1:1 business coaching</li>
                <li>• Content strategy</li>
                <li>• Brand positioning</li>
              </ul>
            </div>
            
            <div className="text-center p-8 bg-white border border-gray-200 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Brand Strategy</h3>
              <p className="text-gray-600 mb-6">
                Complete brand transformation that positions you as the leader in your industry and attracts your ideal clients.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Brand messaging</li>
                <li>• Visual identity</li>
                <li>• Content strategy</li>
                <li>• Market positioning</li>
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
            <p className="text-2xl font-medium text-[#c1ff72]">
              "You don't need more to-do's. You need a partner who gets it, owns it, and delivers."
            </p>
            
            <p>
              I believe that every ambitious woman deserves to be seen, heard, and paid what she's worth. Not through hustle culture or burnout, but through strategic positioning, authentic storytelling, and visual presence that commands respect.
            </p>
            
            <p>
              My approach isn't about creating a facade – it's about <strong>revealing the leader you already are</strong>. Through luxury photography, strategic content, and business coaching, I help you build a brand that's as powerful as your vision.
            </p>
            
            <p>
              Because when you look, sound, and feel like the leader you are, the world has no choice but to follow.
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
              className="inline-block bg-[#c1ff72] text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-[#a8e65a] transition-colors"
            >
              Join the Mastermind
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
