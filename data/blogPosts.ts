import type { BlogPost } from "@/types/blog";
import { SPOTLIGHT_BOOK_URL } from "@/lib/workWithUsLinks";

/** Placeholder images (Unsplash). Replace with Firebase URLs in this file when ready. */
const P = {
  hero:
    "https://images.unsplash.com/photo-1554048612-b6c48267d351?w=1920&q=80&auto=format&fit=crop",
  break1:
    "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=1920&q=80&auto=format&fit=crop",
  break2:
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80&auto=format&fit=crop",
  break3:
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80&auto=format&fit=crop",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-brand-photos-cost-high-ticket-clients",
    title: "Why Your Brand Photos Are Costing You High-Ticket Clients",
    description:
      "When your visuals do not match your results, high-value buyers quietly choose someone who looks ready for the room. Here is what that costs you and how to fix it.",
    publishedAt: "2026-04-02",
    heroImage: P.hero,
    heroImageAlt: "Founder in a professional brand photography session",
    intro: [
      "You already do work that justifies premium pricing. The problem is not your offer, your testimonials, or your work ethic. The problem is that the first impression you make online does not communicate that level before a single sales conversation happens.",
      "High-ticket clients are not looking for the cheapest option. They are looking for the safest bet. And safety, at that price point, shows up as visual authority, cohesion, and clarity long before you ever get on a call.",
    ],
    blocks: [
      {
        type: "body",
        paragraphs: [
          "Most founders assume their brand photos are “good enough” if they are in focus and on-brand in a loose sense. But “good enough” reads as uncertain to buyers who are deciding whether to trust you with five figures or more. They are scanning for proof that you operate at the level they need. When your imagery feels generic, dated, or disconnected from the transformation you sell, you do not read as risky. You read as small. And high-ticket buyers do not take that gamble.",
          "This is why two founders with similar offers can have wildly different close rates. One looks like the obvious choice before the call. The other has to work twice as hard in the DMs to prove what their visuals should have already established.",
        ],
      },
      { type: "imageBreak", imageUrl: P.break1, alt: "Brand photography behind the scenes" },
      {
        type: "body",
        paragraphs: [
          "The hidden cost is not just missed inquiries. It is the wrong conversations. You attract price shoppers and tire-kickers because your positioning looks accessible in a way that does not filter for serious buyers. You spend time explaining your value instead of moving qualified leads toward a decision. Your calendar fills with calls that were never going to convert at the level you want.",
          "Meanwhile, the premium segment of your market is booking someone whose brand looks expensive, intentional, and dialed in on the first scroll. Not because that person is more talented, but because their visuals did the pre-selling for them.",
        ],
      },
      {
        type: "pullquote",
        quote:
          "High-ticket clients are not buying your service first. They are buying your signal. If the signal is weak, the sale is uphill before you say hello.",
      },
      { type: "imageBreak", imageUrl: P.break2, alt: "Portrait during a brand shoot" },
      {
        type: "body",
        paragraphs: [
          "Fixing this is not about chasing trends or posting more often. It is about aligning how you look with how you operate. That means strategy-led photography and video where creative direction, messaging, and execution are built together, not patched together from separate vendors who never shared a room.",
          "When your brand finally looks like the business you have already built, the right people stop hesitating. They self-select in. They show up to calls pre-sold on your level. That is the shift from “busy” to “booked with the clients you actually want.”",
        ],
      },
      {
        type: "pullquote",
        quote:
          "Your work deserves to be seen at the level it actually performs. Anything less is leaving revenue on the table.",
      },
      { type: "imageBreak", imageUrl: P.break3, alt: "Founder content for web and social" },
      {
        type: "body",
        paragraphs: [
          "If you are serious about high-ticket, start where your buyers start: the moment they land on your page. Upgrade the signal. Make the decision easy. Then watch who starts raising their hand.",
        ],
      },
    ],
    cta: {
      headline: "Ready for brand content that matches your level?",
      buttonLabel: "Book a Spotlight Shoot",
      href: SPOTLIGHT_BOOK_URL,
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
