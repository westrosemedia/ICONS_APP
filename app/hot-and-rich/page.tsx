import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

const STRIPE_PUBLISHABLE_KEY =
  "pk_live_51MSOJeCcsY3WjV3Q0h4k8hC7da1piQaQSHx6ukPgWe3hkxDR4GsmfEDah7RoIkH6k9Qln3ups7flMXSS3kuAMhdL005i3wmuav";
const STRIPE_PRICING_TABLE_ID = "prctbl_1UPRdeCcsY3WjV3Qs3D0QsoQ";
const YOUTUBE_EMBED = "https://www.youtube.com/embed/HTRDxi8J5KA?si=URp8MB-mUJpCAZ5y";
const WILDLY_WEALTHY_LIVE_URL = "https://www.wildlywealthywomanlive.com/";

const IMAGES = {
  hero: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/car%2FS%26K_ENGAGEMENT_FINALS_47.jpg?alt=media&token=0596c414-5c23-483c-837c-54c3c79a51fd",
  story: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/car%2FS%26K_ENGAGEMENT_FINALS_29.jpg?alt=media&token=f8526ad2-3e66-4dd4-a263-b5df4189e922",
  inside: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/car%2FS%26K_ENGAGEMENT_FINALS_30.jpg?alt=media&token=aa72939d-a43c-4743-affc-05f4fd9e669d",
  proof: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/car%2FS%26K_ENGAGEMENT_FINALS_29.jpg?alt=media&token=f8526ad2-3e66-4dd4-a263-b5df4189e922",
};

const META = {
  title: "Hot and Rich Mastermind | West Rose Media",
  description:
    "A new round of Hot and Rich starts November 15. Early bird $6,000 CAD through October 13, then $7,500 CAD. Includes a ticket to Wildly Wealthy Woman Live.",
};

export const revalidate = 0;

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  metadataBase: new URL("https://westrosemedia.com"),
  alternates: { canonical: "/hot&rich" },
  openGraph: {
    title: META.title,
    description: META.description,
    url: "https://westrosemedia.com/hot&rich",
  },
};

const ctaLinkClass =
  "inline-block bg-[#FAF7F2] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#E8E4DD] transition-colors duration-300 rounded-none";

function JoinNowButton({ className }: { className?: string }) {
  return (
    <Link href="#pricing" className={className ?? ctaLinkClass}>
      Join Now
    </Link>
  );
}

function StripePricingTable() {
  return (
    <>
      <Script async src="https://js.stripe.com/v3/pricing-table.js" strategy="afterInteractive" />
      {/* @ts-expect-error stripe-pricing-table is a custom web component */}
      <stripe-pricing-table
        pricing-table-id={STRIPE_PRICING_TABLE_ID}
        publishable-key={STRIPE_PUBLISHABLE_KEY}
      />
    </>
  );
}

export default function HotAndRichPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] min-h-screen">
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${IMAGES.hero}')` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 md:px-16 max-w-4xl mx-auto py-32">
          <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight tracking-tight text-[#FAF7F2] mb-12">
            Hot and Rich Mastermind
          </h1>
          <div className="text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto mb-12 space-y-5 text-left">
            <p>
              Not to freak you out, but women usually find my account right before they do
              something REALLY big.
            </p>
            <p>
              I posted that sentence and it brought me 6,022 new followers on Instagram and 10,000
              on TikTok. If you just found me, I&apos;d bet you&apos;re one of those women.
            </p>
            <p>
              Every problem in your business comes down to two things: clarity and views. Everything
              I used to rebuild my account is built on exactly those two things.
            </p>
            <p>
              Meta deleted seven years of my work in four seconds and gave me nowhere to appeal.
              118 days later, the new account has 23,500 followers and 4 million views, built from
              nothing.
            </p>
            <p>
              A new round of Hot and Rich starts November 15. I&apos;m going to show you exactly how
              I did it, because you&apos;re about to need this more than you think.
            </p>
          </div>
          <JoinNowButton />
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="for-you-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            id="for-you-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10 text-center"
          >
            This is for you if
          </h2>
          <p className="text-lg text-[#3D3632]">
            You have the offer. You have the expertise and the big idea. You haven&apos;t hit a
            six-figure month yet, and you&apos;re still figuring out how to make people see what
            you&apos;ve built. You know you&apos;re capable of more than your account shows right
            now, and you&apos;re ready to be the name people find first.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto" aria-labelledby="problem-heading">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="problem-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10 text-center"
          >
            You&apos;re good at what you do. Now you need to be found for it.
          </h2>
          <p className="text-lg text-[#3D3632]">
            You know your craft. You&apos;re showing up, posting, doing the work. What&apos;s
            missing is the followers, the inquiries, and the DMs that turn into paying clients.
            You&apos;ve watched people with less experience pull ahead of you, and it&apos;s started
            to feel like everyone else got let in on a secret.
          </p>
          <p className="text-lg text-[#3D3632]">
            What they have is a mechanism, and you&apos;re about to get it.
          </p>
          <p className="text-lg text-[#3D3632]">
            Here&apos;s the part you probably haven&apos;t let yourself think about. Everything
            you&apos;re building lives on a platform someone else owns, runs on rules you&apos;ll
            never get to see, and is enforced by software with zero humans checking its work. It can
            all disappear before you finish scrolling this page.
          </p>
          <p className="text-lg text-[#3D3632] font-medium">
            I know because it happened to me on a Monday night.
          </p>
        </div>
      </section>

      <section
        id="what-happened"
        className="relative bg-cover bg-no-repeat md:bg-fixed scroll-mt-24"
        style={{
          backgroundImage: `url('${IMAGES.story}')`,
          backgroundPosition: "center 33%",
        }}
        aria-labelledby="story-heading"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <h2
            id="story-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-12 text-center"
          >
            What actually happened
          </h2>
          <div className="max-w-2xl mx-auto space-y-6 text-lg text-[#FAF7F2]/90">
            <p>
              I went from trad wife to rich lesbian. I built West Rose Media&apos;s Instagram for
              seven years. Birth photography, then family photography, then the version of me that
              came out at 31 and lost 11,000 followers in a single day because I stopped playing a
              role I&apos;d been cast in since childhood. I kept building anyway. Divorced, broke,
              full custody of three kids, and no income history in my own name because every account
              was in his. I rebuilt from that too.
            </p>
            <p>
              On June 15, I was telling that story on Instagram, the short version, the kind you
              tell in a reel. It started moving. Thirty thousand views, then climbing. Then the
              comments turned. A coordinated wave of people who&apos;d found my account specifically
              because I said I was gay and I&apos;d left religion started mass-reporting everything
              I&apos;d ever posted.
            </p>
            <p>
              Meta&apos;s system runs on automation now. Enough reports trip the AI and it acts on
              its own: account deactivated, appeal button gone, seven years erased in the time it
              takes to read that sentence. Every post. Every piece of proof I used to point new
              clients to when they said &quot;I could never get where you are.&quot; I used to tell
              them to scroll to the beginning and watch the whole climb. That receipt is gone now.
            </p>
            <p>
              I cried the whole drive home. Then I opened my laptop and started a brand new account
              that night.
            </p>
            <p className="text-[#C9B99A] font-heading text-xl font-light pt-2">
              Watch me tell the whole thing, in real time, the week it happened:
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto" aria-label="Story video">
        <div className="aspect-video w-full overflow-hidden bg-black shadow-xl">
          <iframe
            className="h-full w-full"
            src={YOUTUBE_EMBED}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section
        id="results"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-24"
        aria-labelledby="results-heading"
      >
        <h2
          id="results-heading"
          className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-16 text-center"
        >
          Where it stands, 118 days later
        </h2>
        <div className="max-w-2xl mx-auto space-y-6 text-lg text-[#3D3632]">
          <p>On June 15, the new account had zero followers.</p>
          <p>Today, 118 days in, it has 23,500 followers and 4 million views on Instagram.</p>
          <p>On TikTok, I&apos;m at 17,500 followers and 2 million views.</p>
          <p className="font-heading text-2xl font-light text-[#1C1917] text-center pt-4">
            That&apos;s what the skill does when you keep running it.
          </p>
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="speed-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            id="speed-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10 text-center"
          >
            How fast it moves with the right strategy
          </h2>
          <p className="text-lg text-[#3D3632]">
            When I post now, people follow me, download my freebie and buy my high-ticket offers,
            all within 12 hours. Anyone who tells you this has to take forever just doesn&apos;t
            know how.
          </p>
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="proof-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            id="proof-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-12 text-center"
          >
            Proof from my clients
          </h2>
          <div className="space-y-6 text-lg text-[#3D3632] mb-12">
            <p>
              When one of my Hot and Rich members came to me, she was posting four times a day and
              getting 9 views per post. Every post lost her followers. Her membership had held the
              same 3 clients for years.
            </p>
            <p>Now she posts once a day and gets 60,000 views. She just sold 4 new people into her membership.</p>
            <p>Here&apos;s what she sent me:</p>
          </div>
          <blockquote className="mb-12 text-center">
            <p className="font-heading text-2xl md:text-3xl font-light leading-snug text-[#1C1917] mb-6">
              &quot;You&apos;ve challenged me, stretched me, made me laugh, made me scream, and made
              me question myself (in the BEST way). Thank you for never letting me settle for
              beautifully boring crappy content and hooks. You&apos;ve pushed me to remove the crutch
              ChatGPT has been for the last several years and to truly step into this season of
              growth.&quot;
            </p>
            <footer className="text-sm tracking-widest uppercase text-[#9C8E82]">
              Hot and Rich Mastermind member
            </footer>
          </blockquote>
          <blockquote className="mb-12 text-center">
            <p className="font-heading text-2xl md:text-3xl font-light leading-snug text-[#1C1917] mb-6">
              &quot;Every single time I work with Stephanie, I make more money.&quot;
            </p>
            <footer className="text-sm tracking-widest uppercase text-[#9C8E82]">
              Cheryl, online coach
            </footer>
          </blockquote>
          <p className="text-lg text-[#3D3632]">
            One client started with a brand-new account at zero followers. She&apos;s now sitting on
            consistent $10K months.
          </p>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${IMAGES.proof}')` }}
        aria-labelledby="asset-heading"
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-3xl mx-auto">
          <h2
            id="asset-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-10"
          >
            The skill is the asset
          </h2>
          <div className="space-y-6 text-[#FAF7F2]/85 leading-relaxed text-lg">
            <p>
              The skill that rebuilt my account is the asset. Clarity on what I offer, and enough
              views that people see it. That&apos;s what took the account from zero to 23,500 in 118
              days. A skill stays with you after any account is gone.
            </p>
            <p>
              Most people who lose an account this way start over with no idea what to do next. I
              started over with a plan before I got home. Hot and Rich hands you that plan.
            </p>
          </div>
        </div>
      </section>

      <section
        id="what-you-get"
        className="relative bg-cover bg-center bg-no-repeat md:bg-fixed scroll-mt-24"
        style={{ backgroundImage: `url('${IMAGES.inside}')` }}
        aria-labelledby="mechanism-heading"
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <h2
            id="mechanism-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-12 text-center"
          >
            The exact mechanism
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-[#FAF7F2]/90">
              Four months of building an audience and a revenue system strong enough to survive
              losing a platform. You&apos;ll learn the exact moves I&apos;m using on my own account
              right now, taught live, with me in the room.
            </p>
            <h3 className="text-xs tracking-widest uppercase text-[#C9B99A] pt-6">
              What you get for four months
            </h3>
            <ul className="space-y-6 pt-4 text-lg">
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1 shrink-0">-</span>
                <span className="text-[#FAF7F2]/90">Biweekly live calls with me</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1 shrink-0">-</span>
                <span className="text-[#FAF7F2]/90">
                  Text support inside the group, three days a week
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1 shrink-0">-</span>
                <span className="text-[#FAF7F2]/90">
                  Direct access to the exact strategy I&apos;m running right now
                </span>
              </li>
            </ul>
            <p className="text-lg text-[#FAF7F2]/90 pt-4">
              I&apos;m going to hand you the system that took me from zero to 23,500 followers in
              118 days, and put you in the room with me for four months.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="ticket-heading"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="ticket-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10 text-center"
          >
            Your ticket to Wildly Wealthy Woman Live is included
          </h2>
          <p className="text-lg text-[#3D3632]">
            Every Hot and Rich member gets a ticket to Wildly Wealthy Woman Live at the Banff
            Springs Hotel in March 2027. I&apos;m co-hosting it with Jackie McDonald and Melissa of
            The Retreat Alchemist. It&apos;s a gathering for mothers, daughters, sisters, friends and
            chosen family, with sessions on money, health, motherhood, visibility, grief and legacy,
            and fireside conversations in the mountains in winter.
          </p>
          <p className="text-lg text-[#3D3632]">
            You&apos;ll spend four months building your audience with me, then walk into Banff and
            meet me in person.
          </p>
          <p className="text-lg text-[#3D3632]">
            Details:{" "}
            <a
              href={WILDLY_WEALTHY_LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#1C1917]"
            >
              wildlywealthywomanlive.com
            </a>
          </p>
        </div>
      </section>

      <section
        id="pricing"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-24"
        aria-labelledby="pricing-heading"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2
            id="pricing-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10"
          >
            The price
          </h2>
          <div className="space-y-4 text-lg text-[#3D3632] mb-10">
            <p>Early bird: $6,000 CAD, October 11 to 13.</p>
            <p>Regular price: $7,500 CAD.</p>
            <p>The new round starts November 15.</p>
            <p>Includes your ticket to Wildly Wealthy Woman Live, Banff, March 2027.</p>
          </div>
          <StripePricingTable />
        </div>
      </section>

      <section id="final-cta" className="bg-[#1C1917] text-[#FAF7F2]" aria-labelledby="final-cta-heading">
        <div className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <h2
            id="final-cta-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-6"
          >
            If you&apos;ve been waiting for a sign
          </h2>
          <p className="text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto mb-4">
            You&apos;ve done the identity work already. You know who you are and what you&apos;re
            capable of. What you need now is clarity on what you offer and enough views for people
            to see it, on your own terms, protected from an algorithm that can erase you overnight.
          </p>
          <p className="text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto mb-6">
            I rebuilt mine from zero with the skill alone, and it&apos;s kept climbing for 118 days
            straight. You get four months of that skill with me in the room the entire time, then a
            seat in Banff at Wildly Wealthy Woman Live.
          </p>
          <p className="text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto mb-10">
            Early bird pricing ends October 13.
          </p>
          <JoinNowButton />
        </div>
      </section>

      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#FAF7F2] border-t border-[#C9B99A]/30 md:hidden"
        aria-label="Mobile call to action"
      >
        <JoinNowButton className="block w-full py-4 text-center rounded-none bg-[#1C1917] text-[#FAF7F2] text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300" />
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}
