import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Experiences",
  description:
    "High touch VIP brand experiences combining strategy, creative direction, and content creation. Limited availability.",
};

export default function VipPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant text-center">
          <h1 className="text-hero text-black mb-6">
            The fastest way to upgrade how your business is perceived
          </h1>
          <p className="text-editorial text-gray-700 max-w-4xl mx-auto mb-6">
            A high level VIP Day or weekend that combines an in person brand deep
            dive with photo and video creation across multiple locations so your
            business looks and feels like its next level.
          </p>
          <p className="text-editorial text-gray-700 max-w-4xl mx-auto mb-10">
            In one day or one weekend, we clarify your brand, create content that
            reflects where you are going, and position you to step into a bigger
            level of visibility and trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://westrosemedia.sproutstudio.com/book/67883caf9df9e7.28270695"
              className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Book a VIP experience
            </a>
            <Link
              href="#options"
              className="inline-block border-2 border-black text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-black hover:text-white transition-colors"
            >
              See the options
            </Link>
          </div>
        </div>
      </section>

      {/* Proof Shift */}
      <section className="section-padding">
        <div className="container-elegant max-w-4xl">
          <p className="text-editorial text-gray-700 mb-6">
            Momentum is not built by collecting ideas or waiting for clarity to
            appear. It is built by making decisions, committing to them, and
            executing with intention. The longer your brand lives in pieces, the
            harder it is for people to trust where you are going.
          </p>
          <p className="text-editorial text-gray-700">
            When your visuals, messaging, and content move together, growth starts
            to compound.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant max-w-5xl">
          <h2 className="text-display text-black mb-8">WHO THIS IS FOR</h2>
          <ul className="space-y-3 text-editorial text-gray-700">
            <li>• You are growing a business that means more to you than just money</li>
            <li>• You want your brand to reflect who you actually are</li>
            <li>• You know your work is strong but your content is underselling you</li>
            <li>• You are tired of watching other people get opportunities you deserve</li>
            <li>• You feel the gap between your vision and how your brand shows up</li>
            <li>• You are ready to stop circling decisions and start moving with intention</li>
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding">
        <div className="container-elegant max-w-5xl">
          <h2 className="text-display text-black mb-8">OUTCOMES</h2>
          <ul className="space-y-3 text-editorial text-gray-700">
            <li>• People immediately understand your value and direction</li>
            <li>• Your content builds trust before a conversation starts</li>
            <li>• Your brand opens doors to bigger opportunities and aligned clients</li>
            <li>• Your visuals and messaging feel cohesive everywhere you show up</li>
            <li>• Selling feels natural because your brand supports you</li>
            <li>• Your business looks like it is moving forward even when you are offline</li>
          </ul>
        </div>
      </section>

      {/* Scarcity Block */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant max-w-4xl">
          <h2 className="text-display text-black mb-6">
            Why waiting costs you more than you think
          </h2>
          <div className="space-y-6 text-editorial text-gray-700">
            <p>
              Every time you post with a brand that no longer reflects your level,
              you teach people to hesitate.
            </p>
            <p>
              Potential clients scroll past.
              <br />
              Collaborators stay unsure.
              <br />
              Opportunities quietly move to someone else.
            </p>
            <p>
              When organizers consider speakers, they look you up.
              <br />
              When brands consider partnerships, they check your page.
              <br />
              When clients decide who to trust, your content makes the call before
              you ever speak.
            </p>
            <p>The moment you book, that shift starts reversing.</p>
            <p>
              Your brand stops pushing people away and starts pulling them closer.
              <br />
              Trust builds faster.
              <br />
              Decisions happen sooner.
              <br />
              Momentum compounds instead of stalling.
            </p>
            <p>
              Waiting does not keep you safe.
              <br />
              It keeps you invisible at the exact moments it matters.
            </p>
          </div>
        </div>
      </section>

      {/* Choose Your Level of Access */}
      <section id="options" className="section-padding bg-gray-50">
        <div className="container-elegant">
          <h2 className="text-display text-black mb-10">CHOOSE YOUR LEVEL OF ACCESS</h2>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">VIP Day</h3>
              <div className="text-lg text-gray-700 mb-6">Price: CA$5,200</div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
                Includes:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• One full VIP Day</li>
                <li>• In person brand and messaging deep dive</li>
                <li>• Photo and video across multiple locations</li>
                <li>• Clear positioning tied to sales</li>
                <li>• Strategy plan to roll out everything created</li>
              </ul>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
                Coaching support:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Paid in full at booking</li>
                <li>• 6 months of coaching</li>
                <li>50 percent deposit to book</li>
                <li>• 4 months of coaching</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">Weekend Immersion</h3>
              <div className="text-lg text-gray-700 mb-6">Price: CA$10,200</div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
                Includes:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Two full days of VIP access</li>
                <li>• Deep brand, business, and messaging strategy</li>
                <li>• Live decisions made in real time</li>
                <li>• High level photo and video creation</li>
                <li>• Full content and messaging strategy tied to revenue</li>
                <li>• Execution and rollout plan</li>
                <li>• Ongoing refinement as the business scales</li>
              </ul>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
                Coaching support:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Paid in full at booking</li>
                <li>• One full year of coaching</li>
                <li>Deposit to book</li>
                <li>• Six months of coaching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="section-padding">
        <div className="container-elegant max-w-4xl">
          <h2 className="text-display text-black mb-6">WHY THIS WORKS</h2>
          <p className="text-editorial text-gray-700 mb-6">
            When strategy, messaging, and content are handled together, decisions
            happen faster and execution is cleaner. These experiences compress months
            of work into a focused container where clarity is made live and backed by
            action.
          </p>
          <p className="text-editorial text-gray-700">
            Your brand shows up confident, cohesive, and active in the market.
          </p>
        </div>
      </section>

      {/* Logistics */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant max-w-5xl">
          <h2 className="text-display text-black mb-8">LOGISTICS</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Locations:</h3>
              <p className="text-editorial text-gray-700">
                Calgary, Vancouver, Toronto
                <br />
                Other locations available with travel quoted by destination
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Turnaround:</h3>
              <p className="text-editorial text-gray-700">
                Photos delivered within one week
                <br />
                Video delivered within ten days
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Booking:</h3>
              <p className="text-editorial text-gray-700">
                Dates are secured with full payment or deposit
                <br />
                Remaining balance due on shoot date
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Preparation:</h3>
              <p className="text-editorial text-gray-700">
                Client completes a short intake
                <br />
                All creative direction and structure is led by West Rose Media
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-black text-white">
        <div className="container-elegant text-center max-w-4xl">
          <p className="text-editorial text-white/90 mb-6">
            I only book a small number of VIP experiences each year so every client
            receives my full attention and creative leadership.
          </p>
          <p className="text-editorial text-white/90 mb-10">
            Once spots are filled, booking closes.
          </p>
          <Link
            href="https://westrosemedia.sproutstudio.com/book/67883caf9df9e7.28270695"
            className="inline-block bg-[#fbf5a6] text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-[#f0e68c] transition-colors"
          >
            Book your VIP experience
          </Link>
        </div>
      </section>
    </main>
  );
}
