import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ICONS by West Rose Media | Podcast",
  description: "Icons is the podcast where bold entrepreneurs learn to look like money, lead with power, and turn their brand into influence that pays.",
  keywords: "ICONS podcast, business podcast, branding podcast, entrepreneur podcast, West Rose Media podcast, personal branding, business coaching",
  openGraph: {
    title: "ICONS by West Rose Media | Podcast",
    description: "Icons is the podcast where bold entrepreneurs learn to look like money, lead with power, and turn their brand into influence that pays.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICONS by West Rose Media | Podcast",
    description: "Icons is the podcast where bold entrepreneurs learn to look like money, lead with power, and turn their brand into influence that pays.",
  },
};

const episodes = [
  {
    number: 6,
    title: "Navigating the Future: Embracing AI in Marketing Strategies",
    date: "November 13, 2025",
    url: "https://icons-west-rose-media.captivate.fm/",
  },
  {
    number: 5,
    title: "Tap In. Show Up. Sell Out.",
    date: "November 5, 2025",
    url: "https://icons-west-rose-media.captivate.fm/",
  },
  {
    number: 0,
    title: "Manifest your DREAM Life - Live with Jackie McDonald",
    date: "November 3, 2025",
    url: "https://icons-west-rose-media.captivate.fm/",
  },
  {
    number: 5,
    title: "From Chaos to Creativity: Christine Blosdale's Journey of Reinvention",
    date: "October 28, 2025",
    url: "https://icons-west-rose-media.captivate.fm/",
  },
  {
    number: 4,
    title: "From Loss to Reproductive Justice- Aditi's story.",
    date: "October 2, 2025",
    url: "https://icons-west-rose-media.captivate.fm/",
  },
];

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6951.jpg?alt=media&token=9100f358-a2f9-4848-b995-2eee1ff3b285"
          alt="ICONS by West Rose Media Podcast"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            ICONS by West Rose Media
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Where bold entrepreneurs learn to look like money, lead with power, and turn their brand into influence that pays.
          </p>
        </div>
      </section>

      {/* Latest Episode Player */}
      <section className="section-padding border-b border-gray-200">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Latest Episode</h2>
            <div className="w-full mb-8 rounded-lg overflow-hidden shadow-sm" style={{ height: "200px" }}>
              <iframe
                style={{ width: "100%", height: "200px", border: "none" }}
                frameBorder="0"
                scrolling="no"
                allow="clipboard-write"
                seamless
                src="https://player.captivate.fm/show/04e67684-d3b9-4e5b-a75a-c0919acaf7d4/latest/"
                title="ICONS by West Rose Media Podcast Player"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About the Podcast */}
      <section className="section-padding border-b border-gray-200">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Podcast</h2>
            <div className="text-editorial space-y-4">
              <p>
                Icons is the podcast where bold entrepreneurs learn to look like money, lead with power, and turn their brand into influence that pays.
              </p>
              <p>
                Icons is a podcast for women in business who are ready to elevate their brand, grow their income, and become unforgettable online. Hosted by Stephanie Rose, founder of West Rose Media, this show dives into the real strategies behind building a powerful personal brand that attracts high-paying clients, builds authority, and turns visibility into profit. Each episode gives you practical advice, confidence-building insights, and behind-the-scenes branding tips that help you look like money and get paid what you're worth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Episodes */}
      <section className="section-padding border-b border-gray-200">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Previous Episodes</h2>
            <div className="space-y-6">
              {episodes.map((episode, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        Episode {episode.number}
                      </h3>
                      <h4 className="text-lg md:text-xl mb-2">
                        <a 
                          href={episode.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 hover:text-black underline transition-colors"
                        >
                          {episode.title}
                        </a>
                      </h4>
                      <p className="text-sm text-gray-600">
                        Published on: {episode.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Your Host */}
      <section className="section-padding">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Your Host</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative w-full md:w-64 h-64 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7"
                  alt="Stephanie Rose"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Stephanie Rose</h3>
                <div className="text-editorial space-y-4">
                  <p>
                    Stephanie Rose is the founder of West Rose Media, an international branding and content agency that helps entrepreneurs look like money and get paid like icons. With over 15 years of experience in business and creative direction, she specializes in turning personal brands into high-earning powerhouses through strategy, storytelling, and visuals that convert.
                  </p>
                  <p>
                    Stephanie hosts the Icons podcast, where she teaches women in business how to build influence, attract premium clients, and grow their income with confidence.
                  </p>
                  <p>
                    <a href="https://westrosemedia.com" className="text-black underline hover:no-underline">
                      westrosemedia.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

