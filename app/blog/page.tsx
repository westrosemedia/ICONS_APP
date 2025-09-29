import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Personal Branding Blog | Tips for Female Entrepreneurs in Canada",
  description: "Expert insights on luxury personal branding, content creation, and business growth for ambitious female entrepreneurs in Canada. Transform your brand with West Rose Media.",
  keywords: "personal branding blog, female entrepreneurs Canada, luxury branding tips, content creation advice, business growth strategies, Canadian entrepreneurs blog",
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Luxury Brand Strategy Every Female Entrepreneur Needs in 2024",
      excerpt: "Discover how to build a magnetic personal brand that attracts high-value clients and positions you as the leader in your industry.",
      slug: "luxury-brand-strategy-female-entrepreneurs-2024",
      date: "2024-01-15",
      category: "Brand Strategy"
    },
    {
      title: "Why Canadian Female Entrepreneurs Are Choosing Luxury Content Over Generic Marketing",
      excerpt: "Learn why premium content creation is the secret weapon of successful female entrepreneurs across Canada.",
      slug: "luxury-content-vs-generic-marketing-canadian-entrepreneurs",
      date: "2024-01-10",
      category: "Content Strategy"
    },
    {
      title: "The Psychology of Luxury: How to Price Your Services Like a Premium Brand",
      excerpt: "Master the art of premium pricing and positioning that makes clients excited to invest in your expertise.",
      slug: "psychology-luxury-pricing-premium-brand",
      date: "2024-01-05",
      category: "Business Strategy"
    },
    {
      title: "From Burnout to Breakthrough: How Tapping Transformed My Business",
      excerpt: "Discover the emotional mastery techniques that help female entrepreneurs scale without sacrificing their wellbeing.",
      slug: "tapping-transformed-business-female-entrepreneurs",
      date: "2024-01-01",
      category: "Mindset"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container-elegant py-20">
        <div className="text-center mb-16">
          <h1 className="text-hero text-black mb-6">
            Luxury Personal Branding Blog
          </h1>
          <p className="text-editorial max-w-3xl mx-auto">
            Expert insights on building magnetic personal brands, creating premium content, and scaling your business as a female entrepreneur in Canada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <span className="text-sm text-gray-500 uppercase tracking-wide">{post.category}</span>
                <span className="text-sm text-gray-400 mx-2">•</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-black mb-4 leading-tight">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-black font-medium hover:underline"
              >
                Read More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-gray-600 mb-6">
              Join Canada's most exclusive community of ambitious female entrepreneurs.
            </p>
            <Link 
              href="/mastermind"
              className="inline-block bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Join the Mastermind
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
