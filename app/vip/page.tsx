import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Experiences",
  description:
    "VIP Day or Weekend: brand strategy, messaging, and content in one focused container. Clarity, direction, and content that reflects where you are going. Limited spots each year.",
};

export default function VipPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant text-center">
          <h1 className="text-hero text-black mb-6">
            The fastest way to upgrade how your business is perceived.
          </h1>
          <p className="text-editorial text-gray-700 max-w-4xl mx-auto mb-10">
            A VIP Day or Weekend where brand strategy, messaging, and content creation happen together in one focused container so you leave with clarity, direction, and content that reflects where you are actually going.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://westrosemedia.sproutstudio.com/book/67883caf9df9e7.28270695"
              className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Book a VIP Experience
            </a>
            <Link
              href="#options"
              className="inline-block border-2 border-black text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-black hover:text-white transition-colors"
            >
              See the Options
            </Link>
          </div>
        </div>
      </section>

      {/* Proof Shift */}
      <section className="section-padding">
        <div className="container-elegant max-w-4xl">
          <h2 className="text-display text-black mb-8">
            You have built something worth showing up for.
          </h2>
          <p className="text-editorial text-gray-700 mb-6">
            You are not figuring it out anymore. You have clients, you have results, and you have a clear sense of where you are headed. What you do not have is a brand that communicates all of that the moment someone finds you.
          </p>
          <p className="text-editorial text-gray-700 mb-6">
            Your work is strong. The way it is represented online is not keeping up. And the founders who are getting the opportunities, the speaking invitations, the high-level collaborations and referrals that should be coming to you, they are not necessarily doing better work. They just have a brand that signals they are ready for those rooms.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant max-w-5xl">
          <h2 className="text-display text-black mb-8">
            Scattered pieces are costing you more than you realize.
          </h2>
          <p className="text-editorial text-gray-700 mb-6">
            When your visuals, messaging, and content are not moving together, the people who could be your next clients or your next big opportunity cannot quite get a read on you. They land on your page and feel something is off. They cannot articulate it, but they do not reach out. They move on.
          </p>
          <p className="text-editorial text-gray-700">
            Every post you put out with a brand that does not reflect your actual level is quietly teaching people to underestimate you. That is a brand problem, and it compounds every single day you leave it unresolved.
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding">
        <div className="container-elegant max-w-5xl">
          <h2 className="text-display text-black mb-8">
            You have already invested in pieces of this.
          </h2>
          <p className="text-editorial text-gray-700 mb-6">
            You have worked with coaches who gave you powerful strategic clarity that faded within weeks because nothing changed visually. You have hired photographers who delivered great images with no brand context behind them. You have done the brand exercises, filled out the workbooks, and had the breakthroughs, and then gone home and posted the same content as before because nothing was actually built.
          </p>
          <p className="text-editorial text-gray-700">
            The problem has never been the quality of the people you work with. Strategy, visuals, and execution have never been in the same room at the same time.
          </p>
        </div>
      </section>

      {/* Scarcity Block */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant max-w-4xl">
          <h2 className="text-display text-black mb-6">What this produces.</h2>
          <div className="space-y-6 text-editorial text-gray-700">
            <p>
              After a VIP experience, your brand communicates your level before you say a word. People understand your value the moment they land on your page. Trust builds faster. The right clients reach out already convinced. The opportunities that were quietly going to someone else start coming to you instead.
            </p>
          </div>
        </div>
      </section>

      {/* Choose Your Level of Access */}
      <section id="options" className="section-padding bg-gray-50">
        <div className="container-elegant">
          <h2 className="text-display text-black mb-10">Choose your level of access.</h2>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">VIP Day</h3>
              <p className="text-editorial text-gray-700 mb-6">
                One full day. In-person brand and messaging deep dive with photo and video across multiple locations. You arrive with questions and leave with clarity, content, and a strategy plan to roll out everything created.
              </p>
              <p className="text-editorial text-gray-700 mb-6">
                Coaching support included. Paid in full at booking: six months. Deposit to book: four months.
              </p>
              <div className="text-lg font-medium text-gray-900 mb-6">$5,200 CAD</div>
              <a
                href="https://westrosemedia.sproutstudio.com/book/67883caf9df9e7.28270695"
                className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Book a VIP Day
              </a>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Weekend Immersion</h3>
              <p className="text-editorial text-gray-700 mb-6">
                Two full days. Deep brand, business, and messaging strategy with live decisions made in real time. High-level photo and video creation. A full content and messaging strategy tied to your revenue. An execution plan and ongoing refinement as the business scales.
              </p>
              <p className="text-editorial text-gray-700 mb-6">
                Paid in full at booking: one full year of coaching. Deposit to book: six months.
              </p>
              <div className="text-lg font-medium text-gray-900 mb-6">$10,200 CAD</div>
              <a
                href="https://westrosemedia.sproutstudio.com/book/67883caf9df9e7.28270695"
                className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Book a Weekend Immersion
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="section-padding">
        <div className="container-elegant max-w-4xl">
          <p className="text-editorial text-gray-700">
            I book a small number of VIP experiences each year so every client receives my full attention and creative leadership. When spots are filled, booking closes.
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
