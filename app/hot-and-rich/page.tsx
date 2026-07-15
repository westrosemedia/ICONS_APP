import Link from "next/link";
import type { Metadata } from "next";

const PRESALE_LINK = "https://buy.stripe.com/bIY15Yg9K4zofW8fZ7";
const REGULAR_LINK = "https://buy.stripe.com/8x2eVc0Ss2iN8LFbJj87K1e";
const YOUTUBE_EMBED = "https://www.youtube.com/embed/HTRDxi8J5KA?si=URp8MB-mUJpCAZ5y";

const IMAGES = {
  hero: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/car%2FS%26K_ENGAGEMENT_FINALS_47.jpg?alt=media&token=0596c414-5c23-483c-837c-54c3c79a51fd",
  story: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/car%2FS%26K_ENGAGEMENT_FINALS_29.jpg?alt=media&token=f8526ad2-3e66-4dd4-a263-b5df4189e922",
  inside: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/car%2FS%26K_ENGAGEMENT_FINALS_29.jpg?alt=media&token=f8526ad2-3e66-4dd4-a263-b5df4189e922",
  proof: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/car%2FS%26K_ENGAGEMENT_FINALS_30.jpg?alt=media&token=aa72939d-a43c-4743-affc-05f4fd9e669d",
};

const META = {
  title: "Hot and Rich Mastermind | West Rose Media",
  description:
    "Four months to build an audience and revenue system sturdy enough that losing a platform becomes a setback instead of a funeral. Presale $1,250 CAD through July 15.",
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

function BulletList({
  items,
  light = false,
}: {
  items: string[];
  light?: boolean;
}) {
  const textClass = light ? "text-[#FAF7F2]/90" : "text-[#3D3632]";
  return (
    <ul className="space-y-6">
      {items.map((item) => (
        <li key={item} className="flex gap-4 items-start">
          <span className="text-[#C9B99A] mt-1 shrink-0">•</span>
          <span className={textClass}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CheckoutButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "outline-light";
}) {
  const classes = {
    primary:
      "inline-block bg-[#1C1917] text-[#FAF7F2] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300 rounded-none",
    secondary:
      "inline-block border border-[#1C1917] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#1C1917] hover:text-[#FAF7F2] transition-colors duration-300 rounded-none",
    light:
      "inline-block bg-[#FAF7F2] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#E8E4DD] transition-colors duration-300 rounded-none",
    "outline-light":
      "inline-block border border-[#FAF7F2] text-[#FAF7F2] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#FAF7F2] hover:text-[#1C1917] transition-colors duration-300 rounded-none",
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes[variant]}>
      {children}
    </a>
  );
}

export default function HotAndRichPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] min-h-screen">
      {/* Presale banner */}
      <div className="bg-[#1C1917] text-[#FAF7F2] text-center py-3 px-4 text-xs sm:text-sm tracking-wide">
        Presale: $1,250 CAD ends midnight MST July 15 — then $3,050 CAD.
      </div>

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${IMAGES.hero}')` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 md:px-16 max-w-4xl mx-auto py-32">
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#C9B99A] mb-8">
            West Rose Media presents
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight tracking-tight text-[#FAF7F2] mb-12">
            Hot and Rich Mastermind
          </h1>
          <p className="font-heading text-2xl md:text-4xl font-light leading-snug text-[#FAF7F2]/95 mb-10">
            The skill that rebuilt it in 30 days is the asset. Not the followers. Not the
            algorithm&apos;s mood that week. The skill.
          </p>
          <div className="text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto mb-12 space-y-5 text-left">
            <p>
              They deleted seven years of my life in four seconds. No warning. No appeal. Just
              gone. Thirty days later I had a brand new account sitting at 7,249 followers and
              482,828 views, built from nothing, without a single one of those seven years behind
              it.
            </p>
            <p>
              I&apos;m going to show you exactly how, because you&apos;re about to need this more
              than you think.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CheckoutButton href={PRESALE_LINK} variant="light">
              Join Hot and Rich — $1,250 CAD
            </CheckoutButton>
            <Link
              href="#what-happened"
              className="inline-block border border-[#FAF7F2] text-[#FAF7F2] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#FAF7F2] hover:text-[#1C1917] transition-colors duration-300 rounded-none"
            >
              Read the Story
            </Link>
          </div>
          <p className="text-[#C9B99A] font-heading text-xl font-light mt-8">
            Presale closes midnight MST, July 15.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto" aria-labelledby="problem-heading">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="problem-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10 text-center"
          >
            You&apos;re good at what you do. That was never the problem.
          </h2>
          <p className="text-lg text-[#3D3632]">
            You know your craft. You&apos;re showing up, posting, doing the work. What&apos;s
            missing is being found for it: the followers, the inquiries, the DMs that turn into
            paying clients. You&apos;ve watched people with less experience than you pull ahead of
            you, and it&apos;s started to feel less like bad luck and more like a secret you
            weren&apos;t let in on.
          </p>
          <p className="text-lg text-[#3D3632]">
            There isn&apos;t a secret. There&apos;s a mechanism, and right now you don&apos;t have
            it yet.
          </p>
          <p className="text-lg text-[#3D3632]">
            Here&apos;s what I don&apos;t think you&apos;ve let yourself think about: everything
            you&apos;re building right now lives on a platform you don&apos;t own, that runs on
            rules you don&apos;t get to see, enforced by a system that doesn&apos;t have a human on
            the other end of it. Which means it can all disappear before you finish reading this
            sentence.
          </p>
          <p className="text-lg text-[#3D3632] font-medium">
            I know because it happened to me on a Monday night.
          </p>
        </div>
      </section>

      {/* What actually happened */}
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
              I built West Rose Media&apos;s Instagram for seven years. Birth photography, then
              family photography, then the version of me that came out at 31 and lost 11,000
              followers in a single day because I stopped playing a role I&apos;d been cast in since
              childhood. I kept building anyway. Divorced, broke, full custody of three kids, no
              income history in my own name because every account was in his. I rebuilt from that
              too.
            </p>
            <p>
              Thirty days ago, I was telling that story on Instagram, the short version, the kind you
              tell in a reel. It started moving. Thirty thousand views, then climbing. Then the
              comments turned. A coordinated wave of people who&apos;d found my account specifically
              because I said I was gay and I&apos;d left religion, mass-reporting everything
              I&apos;d ever posted.
            </p>
            <p>
              No human reviewed it. Meta&apos;s system doesn&apos;t work that way anymore. Enough
              reports trip the AI and it acts on its own: account deactivated, no chance for
              appeal, seven years gone in the time it takes to read that sentence. Every post. Every
              piece of proof I used to point new clients to when they said &quot;I could never get
              where you are.&quot; I used to tell them: scroll to the beginning, watch the whole
              climb. That receipt is gone now.
            </p>
            <p>I cried the whole drive home. Then I opened my laptop and started a brand new account that night.</p>
            <p className="text-[#C9B99A] font-heading text-xl font-light pt-2">
              Watch me tell the whole thing, in real time, the week it happened:
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto" aria-label="Story video">
        <div className="aspect-video w-full overflow-hidden bg-black shadow-xl">
          <iframe
            className="h-full w-full"
            src={YOUTUBE_EMBED}
            title="Stephanie Rose tells the story of rebuilding after account deletion"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      {/* Thirty days later */}
      <section
        id="results"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-24"
        aria-labelledby="results-heading"
      >
        <h2
          id="results-heading"
          className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-16 text-center"
        >
          Thirty days later
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1C1917] mb-6">
              New Instagram account
            </h3>
            <BulletList
              items={[
                "7,249 followers",
                "482,828 views",
                "162,553 accounts reached",
                "All from an account that didn't exist a month ago",
              ]}
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1C1917] mb-6">
              At the same time, on TikTok
            </h3>
            <BulletList
              items={[
                "3,460 followers",
                "310,900 views in the last 28 days alone",
                "Profile views up over 7,000%",
                "Revenue tracing straight back to the new account — close to $20K this month",
              ]}
            />
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-12 space-y-6 text-lg text-[#3D3632] text-center">
          <p>
            I&apos;m making more in a month right now than I used to make in a year.
          </p>
          <p className="font-heading text-2xl font-light text-[#1C1917]">
            I&apos;m not telling you this so you feel sorry for me.
          </p>
        </div>
      </section>

      {/* The account was never the asset */}
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
            The account was never the asset
          </h2>
          <div className="space-y-6 text-[#FAF7F2]/85 leading-relaxed text-lg">
            <p>
              The skill that rebuilt it in 30 days is the asset. That&apos;s what generated 7,249
              followers and 482,828 views from nothing. That&apos;s what&apos;s about to close me
              another five-figure month. And that&apos;s the one thing that cannot be
              mass-reported, deactivated, or erased without appeal.
            </p>
            <p>
              Everyone else who&apos;s lost an account this way is starting from zero with no idea
              what to do next. I started from zero and had a plan before I got home. That gap,
              between having a plan and not having one, is the entire mastermind.
            </p>
          </div>
        </div>
      </section>

      {/* The exact mechanism */}
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
            The exact mechanism, not the vibes
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-[#FAF7F2]/90">
              Four months. How to build an audience and a revenue system fast enough and sturdy
              enough that losing a platform becomes a setback instead of a funeral. The same moves
              that took me from zero to 7,249 followers and a five-figure month in 30 days, taught
              live, with me in the room, in real time, as I run it on my own account.
            </p>
            <h3 className="text-xs tracking-widest uppercase text-[#C9B99A] pt-6">
              What you get for four months
            </h3>
            <ul className="space-y-6 pt-4 text-lg">
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1 shrink-0">•</span>
                <span className="text-[#FAF7F2]/90">Biweekly live calls with me</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1 shrink-0">•</span>
                <span className="text-[#FAF7F2]/90">
                  Text support inside the group, three days a week
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1 shrink-0">•</span>
                <span className="text-[#FAF7F2]/90">
                  Direct access to the exact strategy I&apos;m running right now
                </span>
              </li>
            </ul>
            <p className="text-lg text-[#FAF7F2]/90 pt-4">
              I&apos;m not going to promise you a number. I&apos;m going to hand you the system that
              just took me from zero to 7,249 followers, 482,828 views, and a near-$20K month, in
              30 days, and put you in the room with me for four.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-24"
        aria-labelledby="pricing-heading"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="pricing-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-4"
          >
            The price
          </h2>
          <p className="text-[#C9B99A] font-heading text-xl font-light mb-8">
            Presale closes midnight MST, July 15.
          </p>
          <p className="text-lg text-[#3D3632] mb-10">
            Presale is $1,250 CAD. That ends at midnight MST on July 15. After that it&apos;s $3,050
            CAD, permanently. A payment plan is available if you want to split it.
          </p>
          <div className="border border-[#C9B99A]/40 bg-white/60 p-6 md:p-8 text-left mb-10">
            <h3 className="text-xs tracking-widest uppercase text-[#9C8E82] mb-5 text-center">
              Pricing
            </h3>
            <ul className="space-y-3 text-[#3D3632] text-lg">
              <li className="flex gap-3">
                <span className="text-[#C9B99A]">•</span>
                <span>
                  <strong>Presale:</strong> $1,250 CAD — live until midnight MST July 15
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C9B99A]">•</span>
                <span>
                  <strong>Regular price:</strong> $3,050 CAD — after the deadline
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C9B99A]">•</span>
                <span>Payment plan available at checkout</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <CheckoutButton href={PRESALE_LINK}>Join Presale — $1,250 CAD</CheckoutButton>
            <CheckoutButton href={REGULAR_LINK} variant="secondary">
              Regular Price — $3,050 CAD
            </CheckoutButton>
          </div>
          <p className="text-sm text-[#9C8E82]">
            Presale checkout is live until midnight MST July 15. Regular price checkout goes live
            after the deadline.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="bg-[#1C1917] text-[#FAF7F2]" aria-labelledby="final-cta-heading">
        <div className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <h2
            id="final-cta-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-6"
          >
            If you&apos;ve been waiting for a sign
          </h2>
          <p className="text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto mb-4">
            You&apos;ve done the identity work already. You&apos;re not confused about who you are or
            what you&apos;re capable of. What you don&apos;t have yet is a brand that gets you found
            as fast and as consistently as you deserve to be, on your terms, not at the mercy of an
            algorithm that can erase you overnight.
          </p>
          <p className="text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto mb-4">
            I rebuilt mine in 30 days with nothing but the skill. Imagine what she builds with four
            months and me in the room the entire time.
          </p>
          <p className="text-[#C9B99A] font-heading text-xl font-light mb-10">
            Presale closes midnight MST, July 15. $1,250 CAD. Then it&apos;s $3,050 CAD.
          </p>
          <CheckoutButton href={PRESALE_LINK} variant="light">
            Join Hot and Rich — $1,250 CAD Presale
          </CheckoutButton>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#FAF7F2] border-t border-[#C9B99A]/30 md:hidden"
        aria-label="Mobile call to action"
      >
        <a
          href={PRESALE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 text-center rounded-none bg-[#1C1917] text-[#FAF7F2] text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300"
        >
          Join — $1,250 CAD Presale
        </a>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}
