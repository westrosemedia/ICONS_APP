export default function PodcastStructuredData() {
  const podcastSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "ICONS by West Rose Media",
    "description": "Icons is a podcast for women in business who are ready to elevate their brand, grow their income, and become unforgettable online. Hosted by Stephanie Rose, founder of West Rose Media, this show dives into the real strategies behind building a powerful personal brand that attracts high-paying clients, builds authority, and turns visibility into profit.",
    "url": "https://westrosemedia.com/podcast",
    "image": "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_080.jpg?alt=media&token=d485b703-9e16-48e0-baeb-09c3e7dc0f35",
    "author": {
      "@type": "Person",
      "name": "Stephanie Rose",
      "url": "https://westrosemedia.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "West Rose Media",
      "url": "https://westrosemedia.com"
    },
    "webFeed": "https://feeds.captivate.fm/icons-west-rose-media/",
    "category": {
      "@type": "Thing",
      "name": "Business"
    },
    "keywords": "business podcast, branding podcast, entrepreneur podcast, personal branding, business coaching, social media strategy, brand strategy, entrepreneur advice",
    "inLanguage": "en-CA",
    "copyrightHolder": {
      "@type": "Person",
      "name": "Stephanie Rose"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(podcastSchema),
      }}
    />
  );
}

