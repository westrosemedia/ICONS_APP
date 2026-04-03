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
      "You are not losing clients because your work is not good enough. You are losing them before they ever reach out. Here is how your brand photos shape high-ticket decisions, and what to do about it.",
    publishedAt: "2026-04-02",
    heroImage: P.hero,
    heroImageAlt: "Founder in a professional brand photography session",
    intro: [
      "You are not losing clients because your work is not good enough. You are losing them before they ever reach out.",
      "The decision to contact you, book a call, or send that DM happens in seconds. Before anyone reads your bio, your credentials, your testimonials, or your offer. It happens the moment they see your photo. And if that photo does not match the level of work you actually do, the client who was seconds away from reaching out keeps scrolling instead.",
    ],
    blocks: [
      {
        type: "body",
        paragraphs: [
          "You have been in business long enough to know your work is strong. Your clients get results. Your referrals are consistent. You show up prepared, you deliver, and the people who work with you know they made the right decision.",
          "But somewhere between how you show up in a room and how you show up online, something gets lost. The photos on your website are from two years ago, or five. They were fine when you took them. They just do not capture the version of you that is running this business at the level you are running it now. And every day you leave them up, you are being underestimated by people who would have hired you if the photo had told the right story.",
        ],
      },
      {
        type: "pullquote",
        quote:
          "High-ticket buyers are not just buying your service. They are buying their confidence in you.",
      },
      {
        type: "body",
        paragraphs: [
          "They are buying the feeling that you are the kind of person who belongs in their world, who operates at their level, who will represent them well. Your brand photos either confirm that or they create doubt. There is no neutral.",
          "A photo that looks like a headshot from a corporate event sends one signal. A photo that looks almost professional but somehow generic sends the most dangerous signal of all: that you are trying, but not quite there. High-ticket clients are pattern matchers. They have seen enough brands to know the difference instantly, even if they cannot articulate it. The moment your photo gives them pause, you have lost them to someone whose visual presence said yes before they even had to ask.",
        ],
      },
      { type: "imageBreak", imageUrl: P.break1, alt: "Brand photography session" },
      {
        type: "body",
        paragraphs: [
          "Most founders know their photos are not great and they do something about it. They book a session with a local photographer. They invest in a headshot day. They show up, get a handful of decent images, post the best one, and wonder why nothing really changed.",
          "The photos look fine. Professional, even. But they do not move anything. Inquiries stay flat. The brand still feels like it is slightly behind where the business actually is.",
        ],
      },
      {
        type: "body",
        paragraphs: [
          "The problem is not the quality of the photographer. It is that a good photo and a strategic brand photo are completely different things. One captures what you look like. The other captures who you are, who you serve, and why you are the obvious choice. That second thing requires someone who understands your brand, your positioning, and exactly what your ideal client needs to feel before they reach out.",
        ],
      },
      { type: "imageBreak", imageUrl: P.break2, alt: "Creative direction during a brand shoot" },
      {
        type: "body",
        paragraphs: [
          "The Spotlight shoot is built for founders who are done with photos that look fine and do nothing. Before we shoot, we align on your positioning, your ideal client, and what your content needs to communicate. Every frame is intentional. The creative direction, the locations, the way you are positioned in each image are all chosen to speak directly to the person you are trying to attract.",
          "You walk away with a library of content that makes your authority visible before you say a word. Photos that stop the scroll. Images that make your ideal client feel like they found exactly who they were looking for.",
        ],
      },
      { type: "imageBreak", imageUrl: P.break3, alt: "Brand content for web and social" },
      {
        type: "body",
        paragraphs: [
          "When your brand photos match your actual level, the inquiries that come in are already warmer. Clients arrive having seen your page and decided they want to work with you before the first conversation. You stop being the best-kept secret and start being the obvious choice.",
        ],
      },
    ],
    cta: {
      headline: "Spotlight sessions are available now in Calgary, Vancouver, and Toronto.",
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
