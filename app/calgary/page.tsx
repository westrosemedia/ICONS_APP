import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Personal Branding & Photography for Female Entrepreneurs in Calgary Alberta | West Rose Media",
  description: "Calgary's premier luxury personal branding photographer and business coach for female entrepreneurs. Professional photography, content creation, and mastermind retreats. Transform your brand with Stephanie Rose.",
  keywords: "Calgary photographer, personal branding Calgary, female entrepreneurs Calgary, business photography Calgary, social media marketing Calgary, luxury photography Alberta, business coach Calgary, content creation Calgary, mastermind retreat Calgary, Stephanie Rose Calgary",
  openGraph: {
    title: "Luxury Personal Branding for Female Entrepreneurs in Calgary Alberta",
    description: "Calgary's premier luxury personal branding photographer and business coach for female entrepreneurs.",
    type: "website",
    locale: "en_CA",
  },
};

export default function CalgaryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6951.jpg?alt=media&token=9100f358-a2f9-4848-b995-2eee1ff3b285"
            alt="Luxury Personal Branding Photography for Female Entrepreneurs in Calgary Alberta Canada - Stephanie Rose West Rose Media"
            fill
            className="object-cover object-center"
            priority
            title="Calgary Personal Branding Photographer | Female Entrepreneurs Alberta"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Calgary's Premier
            <br />
            <span className="text-[#c1ff72]">Luxury Personal Branding</span>
            <br />
            for Female Entrepreneurs
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Professional photography, content creation, and business coaching for ambitious women in Calgary, Alberta
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
              className="inline-block bg-[#c1ff72] text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-[#a8e65a] transition-colors"
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
            Why Calgary Female Entrepreneurs Choose West Rose Media
          </h2>
          
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
                Exclusive mastermind retreats and coaching programs designed for ambitious female entrepreneurs.
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

      {/* Local SEO Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Serving Female Entrepreneurs Across Alberta
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Based in Calgary, serving ambitious women across Alberta and Canada
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Calgary Areas We Serve:</h3>
              <ul className="text-white/80 space-y-2">
                <li>• Downtown Calgary</li>
                <li>• Beltline</li>
                <li>• Kensington</li>
                <li>• Mission</li>
                <li>• Inglewood</li>
                <li>• Mount Royal</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Alberta Cities:</h3>
              <ul className="text-white/80 space-y-2">
                <li>• Edmonton</li>
                <li>• Red Deer</li>
                <li>• Lethbridge</li>
                <li>• Medicine Hat</li>
                <li>• Grande Prairie</li>
                <li>• Airdrie</li>
              </ul>
            </div>
          </div>
          
          <Link
            href="/packages"
            className="inline-block bg-white text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Book Your Calgary Photography Session
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
            Join hundreds of successful female entrepreneurs who have elevated their brands with West Rose Media
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
