import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import MastermindStructuredData from "@/components/MastermindStructuredData";

export const metadata: Metadata = {
  title: "Manifesting & Marketing Mastermind | Luxury Business Coaching for Female Entrepreneurs in Canada",
  description: "Join Canada's most exclusive 6-month Manifesting & Marketing Mastermind combining marketing strategy that converts + manifestation that moves money. Luxury retreat in the Canadian Rockies October 2026. Stephanie Rose and Jackie McDonald.",
  keywords: "mastermind retreat Canada, luxury business coaching, female entrepreneurs mastermind, manifesting marketing mastermind, tapping therapy business, Canadian Rockies retreat, luxury business retreat, Canadian female entrepreneurs, business mastermind, luxury coaching, Manifesting & Marketing Mastermind, Stephanie Rose mastermind, business coaching Canada, entrepreneur retreat, brand strategy mastermind",
  authors: [{ name: "Stephanie Rose", url: "https://westrosemedia.com" }],
  creator: "Stephanie Rose",
  publisher: "West Rose Media",
  metadataBase: new URL('https://westrosemedia.com'),
  alternates: {
    canonical: '/mastermind',
  },
  openGraph: {
    title: "Manifesting & Marketing Mastermind | Luxury Business Coaching",
    description: "Join Canada's most exclusive 6-month Manifesting & Marketing Mastermind. Marketing strategy that converts. Manifestation that moves money. Luxury retreat in the Canadian Rockies October 2026.",
    url: 'https://westrosemedia.com/mastermind',
    siteName: 'West Rose Media',
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6951.jpg?alt=media&token=9100f358-a2f9-4848-b995-2eee1ff3b285',
        width: 1200,
        height: 630,
        alt: 'Manifesting & Marketing Mastermind',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manifesting & Marketing Mastermind | Luxury Business Coaching",
    description: "Join Canada's most exclusive 6-month Manifesting & Marketing Mastermind. Marketing strategy that converts. Manifestation that moves money. Luxury retreat in the Canadian Rockies October 2026.",
    creator: '@westrosemedia',
    images: ['https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6951.jpg?alt=media&token=9100f358-a2f9-4848-b995-2eee1ff3b285'],
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

export default function MastermindPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6951.jpg?alt=media&token=9100f358-a2f9-4848-b995-2eee1ff3b285"
            alt="Luxury Content Creation Photography and Social Media Mastermind Retreat for Female Entrepreneurs in Calgary Alberta Canada - Stephanie Rose West Rose Media Photographer"
            fill
            className="object-cover object-center"
            priority
            title="Manifesting & Marketing Mastermind | Luxury Business Coaching for Female Entrepreneurs in Canada"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            This is your year.
            <br />
            <span className="text-[#c1ff72]">And you already know it.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Stephanie and Jackie are two of the best in their industries and they are building something that has never existed before. Marketing strategy that converts. Manifestation that actually moves money. One room. Six months.
          </p>
          <Link
            href="#apply"
            className="inline-block bg-white text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/90 transition-colors"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* This is for you if */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            This is for you if
          </h2>
          <ul className="text-left space-y-4 text-lg text-white/90">
            <li>• You have a real offer and a real mission and you are tired of watching women with less talent out-earn you.</li>
            <li>• You know your mindset is the ceiling and you are ready to blow the roof off.</li>
            <li>• You have tried the courses, the coaches, the strategies and something is still missing.</li>
            <li>• You are ready to be in a room that matches where you are going, not where you have been.</li>
          </ul>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What You'll Get
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Luxury Weekend Retreat</h3>
              <p className="text-lg text-white/80">
                October 2026 in the Canadian Rockies. Fly into YYC. This is not a conference room and a lanyard. This is an immersive experience designed to shift who you are and how you show up. The women who attend our retreats do not leave the same.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6965.jpg?alt=media&token=9f791e83-44d3-4022-bb61-8f3bd5a1def0"
                alt="Luxury Manifesting & Marketing Mastermind Retreat in the Canadian Rockies - West Rose Media"
                fill
                className="object-cover"
                title="Luxury Retreat for Female Entrepreneurs | Canadian Rockies"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6981.jpg?alt=media&token=9d18b961-5a37-4d16-9056-598f854480eb"
                alt="Weekly Coaching Calls - Manifesting & Marketing Mastermind - Stephanie Rose West Rose Media"
                fill
                className="object-cover"
                title="Weekly Business Coaching for Female Entrepreneurs"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-6">Weekly Coaching Calls</h3>
              <p className="text-lg text-white/80">
                Every Wednesday at 1pm PST / 2pm MST. Stephanie brings the marketing. Jackie brings the energetics. You bring your business and we work on it together. Live, every week, for six months.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-20">
            <h3 className="text-3xl font-bold mb-6">Personal Tapping Sessions</h3>
            <p className="text-lg text-white/80">
              This is what most masterminds are not doing and it is why most masterminds do not work. Your nervous system is running your business whether you know it or not. We fix the strategy and the inner world that has to hold it.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-20">
            <h3 className="text-3xl font-bold mb-6">A Room That Raises Your Standard</h3>
            <p className="text-lg text-white/80">
              The women in this mastermind are building real things. Being around them will change what you think is possible for you.
            </p>
          </div>

          {/* Additional Image Section */}
          <div className="mt-20">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR7086.jpg?alt=media&token=6bf7e2b2-0eab-46cf-bc95-8a1729102797"
                alt="Exclusive Mastermind Experience for Female Entrepreneurs in Calgary Alberta Canada - West Rose Media Business Coaching"
                fill
                className="object-cover"
                title="Exclusive Mastermind Experience | Female Entrepreneurs Calgary Alberta"
              />
            </div>
          </div>

          {/* Final Image Section */}
          <div className="mt-20">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6644.jpg?alt=media&token=78c2fc79-1d50-427a-9acd-2acc82681c8c"
                alt="Luxury Business Retreat Setting for Female Entrepreneurs in Calgary Alberta Canada - Stephanie Rose West Rose Media"
                fill
                className="object-cover"
                title="Luxury Business Retreat | Female Entrepreneurs Calgary Alberta Canada"
              />
            </div>
          </div>

          {/* Additional Image */}
          <div className="mt-20">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_5030.jpg?alt=media&token=b368dc0e-7747-4683-a5f7-be87484155ae"
                alt="Manifesting & Marketing Mastermind Experience for Female Entrepreneurs - West Rose Media"
                fill
                className="object-cover"
                title="Manifesting & Marketing Mastermind | Female Entrepreneurs"
              />
            </div>
          </div>

          {/* Additional Image */}
          <div className="mt-20">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_4681.jpg?alt=media&token=8cc8ddf0-418e-4209-b50f-ead983ab1981"
                alt="Manifesting & Marketing Mastermind Experience for Female Entrepreneurs - West Rose Media"
                fill
                className="object-cover"
                title="Manifesting & Marketing Mastermind | Female Entrepreneurs"
              />
            </div>
          </div>

          {/* DJI_0012 */}
          <div className="mt-20">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FDJI_0012.jpg?alt=media"
                alt="Manifesting & Marketing Mastermind Experience for Female Entrepreneurs - West Rose Media"
                fill
                className="object-cover"
                title="Manifesting & Marketing Mastermind | Female Entrepreneurs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Investment
          </h2>
          <div className="space-y-8">
            <div className="bg-black/50 rounded-2xl p-8 border border-white/10 text-left">
              <h3 className="text-2xl font-bold mb-2">Mastermind only — $12,000</h3>
              <p className="text-white/80">
                Six months of weekly coaching, personal tapping sessions, and a room full of women who are actually doing it.
              </p>
            </div>
            <div className="bg-black/50 rounded-2xl p-8 border border-white/10 text-left">
              <h3 className="text-2xl font-bold mb-2">Mastermind + Luxury Retreat — $20,000</h3>
              <p className="text-white/80">
                Everything above plus your spot in the Canadian Rockies this October. First women to join get priority rooms.
              </p>
            </div>
            <p className="text-lg text-white/80 italic">
              The women who join this mastermind in Q1 will be unrecognizable by Q4. The ones who wait will still be thinking about it.
            </p>
          </div>
        </div>
      </section>

      {/* Ready to Join Section */}
      <section id="apply" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Join?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            This is for the woman who is done playing small and done pretending she does not know exactly what she is capable of.
          </p>
          <p className="text-lg text-white/80 mb-12">
            You have been building toward this. The mission is real. The drive is real. Now you need the room, the strategy, and the two people who can help you make it all the way there.
          </p>
          <p className="text-white/70 mb-8">
            Spots are limited. The retreat fills first.
          </p>
          <Link
            href="https://jackie-mcdonald.mykajabi.com/offers/gbLLJg4v/checkout"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/90 transition-colors"
          >
            Apply for the Manifesting & Marketing Mastermind
          </Link>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="relative w-full bg-black overflow-hidden">
        <video
          className="w-full h-auto object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%20Reel%202_1.mp4?alt=media&token=e093c1dc-3441-4573-9f81-ce7dfa29efce"
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            width: '100%',
            height: 'auto',
            minHeight: '50vh',
            maxHeight: '80vh',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg leading-tight">
            See the Mastermind Experience
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-2xl drop-shadow-lg">
            Behind the scenes of what we create together
          </p>
        </div>
      </section>
      
      {/* Structured Data for SEO */}
      <MastermindStructuredData />
    </div>
  );
}
