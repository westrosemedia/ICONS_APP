import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";

const STRIPE_LINK = "https://buy.stripe.com/28E9ASgRq8Hb4vp14F87K15";
const STRIPE_PUBLISHABLE_KEY =
  "pk_live_51MSOJeCcsY3WjV3Q0h4k8hC7da1piQaQSHx6ukPgWe3hkxDR4GsmfEDah7RoIkH6k9Qln3ups7flMXSS3kuAMhdL005i3wmuav";
const STRIPE_PRICING_TABLE_ID = "prctbl_1T84PcCcsY3WjV3QWIBe5vOW";

const START_DATE = "August 28, 2026";
const PRESALE_END = "August 17, 2026";
const PRESALE_END_SHORT = "August 17";

const FIREBASE_IMAGES = {
  hero: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_6978.jpg?alt=media&token=6d0700c6-d2d3-45a7-b050-1b9d00782e64",
  whoThisIsFor:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_7161.jpg?alt=media&token=c52a1b11-e17e-4a08-9218-74a9a13f73b5",
  insideInfluence:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_7053.jpg?alt=media&token=dfb289d5-19ea-4068-8029-ca1829e3053c",
  proof:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_7090.jpg?alt=media&token=88d1e7aa-3ece-44b8-b5a7-8d8b392aecb3",
};

const META = {
  title: "INFLUENCE | Turn Your Story Into a Brand That Gets You Booked",
  description:
    "A three-month room for founders ready to turn their story into a brand that gets them booked. Begins August 28, 2026. Presale pricing ends August 17.",
};

export const revalidate = 0;

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  metadataBase: new URL("https://westrosemedia.com"),
  alternates: { canonical: "/influence" },
  openGraph: {
    title: META.title,
    description: META.description,
    url: "https://westrosemedia.com/influence",
  },
};

const ctaPrimary =
  "inline-block bg-[#FAF7F2] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#E8E4DD] transition-colors duration-300 rounded-none";
const ctaSecondary =
  "inline-block border border-[#FAF7F2] text-[#FAF7F2] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#FAF7F2] hover:text-[#1C1917] transition-colors duration-300 rounded-none";
const ctaDark =
  "inline-block bg-[#1C1917] text-[#FAF7F2] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300 rounded-none";
const ctaOutlineDark =
  "inline-block border border-[#1C1917] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#1C1917] hover:text-[#FAF7F2] transition-colors duration-300 rounded-none";

function BulletList({
  items,
  light = false,
}: {
  items: Array<string | { title: string; body: string }>;
  light?: boolean;
}) {
  const textClass = light ? "text-[#FAF7F2]/90" : "text-[#3D3632]";
  return (
    <ul className="space-y-6">
      {items.map((item) => {
        const key = typeof item === "string" ? item : item.title;
        return (
          <li key={key} className="flex gap-4 items-start">
            <span className="text-[#C9B99A] mt-1 shrink-0">•</span>
            {typeof item === "string" ? (
              <span className={textClass}>{item}</span>
            ) : (
              <span className={textClass}>
                <strong className={`font-medium ${light ? "text-[#FAF7F2]" : "text-[#1C1917]"}`}>
                  {item.title}
                </strong>{" "}
                {item.body}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

const faqItems = [
  {
    q: "When does INFLUENCE start?",
    a: `August 28, 2026. One cohort, twenty seats.`,
  },
  {
    q: "What if I am not sure I am ready?",
    a: "Readiness is the thing this program builds. If you have a real story and you know you have not done anything with it yet, that is enough. We build the readiness, the brand, and the plan inside the room, on the calls, in the reps.",
  },
  {
    q: "Is this about becoming an influencer?",
    a: "No. This is about becoming visible in a way that aligns with your integrity and your leadership. Authority, not algorithm.",
  },
  {
    q: "What if I am going through something personal right now?",
    a: "That is often exactly why this program works. Big life shifts create the most powerful stories. We make sure you share yours in a way that strengthens you, not in a way that bleeds in public.",
  },
  {
    q: "How much time does this require?",
    a: "Each live call runs 60 minutes. Group support between calls. Story and language work between sessions. The goal is integration, not overwhelm.",
  },
  {
    q: "What is the shoot day?",
    a: "In October 2026, the group meets in Calgary for one in-person day. You deliver your finished keynote live, on stage, in front of a room, and we film it. You also record a podcast episode, filmed. Both become the raw footage for your speaker reel. Travel and lodging to Calgary are on you; the production itself is included in your INFLUENCE investment.",
  },
  {
    q: "Will this help me speak on stages or grow my presence?",
    a: "Yes, specifically. We build the story that gets you booked, the language that lands in a pitch, a filmed keynote and podcast recording, a speaker reel, and the presence that makes a room remember you. Then we teach you how to pitch it and get booked, which most programs at any price point stop short of.",
  },
  {
    q: "What if I am scared of judgment?",
    a: "Everyone in the room understands that fear. Courage grows through repetition and support. By month three, the fear is still there and you have learned to walk past it, including on stage, on camera.",
  },
  {
    q: "What happens if I miss the August 17 presale deadline?",
    a: "The price moves from $3,200 CAD to $4,800 CAD. The August 28 start date and twenty-seat cap stay the same either way.",
  },
  {
    q: "Is there a payment plan?",
    a: "Through August 17: three monthly payments of $1,100 CAD or six monthly payments of $550 CAD. After August 17: three monthly payments of $1,650 CAD or six monthly payments of $825 CAD. All plans end before the program does. If you need a different structure, email admin@westrosemedia.com.",
  },
];

export default function InfluencePage() {
  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] min-h-screen">
      {/* SECTION 1 — HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${FIREBASE_IMAGES.hero}')` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 md:px-16 max-w-4xl mx-auto py-32">
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#C9B99A] mb-8">
            A three-month room for founders ready to turn their story into a brand
            that gets them booked.
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight tracking-tight text-[#FAF7F2] mb-12">
            Your story is the fastest path to the stages, the clients, and the life
            you actually want.
          </h1>
          <div className="text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto mb-12 space-y-5 text-left">
            <p>
              You already lived it. The reinvention, the risk, the thing you built
              from nothing. Most founders sit on that story instead of building with
              it. It stays a good anecdote at a dinner party instead of becoming the
              asset that gets you on stages, into podcasts, and in front of the
              clients who pay premium rates without blinking.
            </p>
            <p>
              I built West Rose Media on my story. It is the reason I stand on the
              stages I do. It is the reason clients choose me before I finish a
              sentence. I know exactly what it looks like to take a real story and
              turn it into a brand people book.
            </p>
            <p>
              INFLUENCE is where you do the same with yours. We build the brand,
              write and perfect the keynote, put you on a real stage and in front of
              a real mic to prove it, and then teach you how to get booked with it,
              again and again.
            </p>
            <p>
              This is not about processing what happened to you. It is about using
              it, on purpose, to build the life and the business you actually want.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#pricing" className={ctaPrimary}>
              Claim Your Spot
            </Link>
            <Link href="#who-this-is-for" className={ctaSecondary}>
              See If This Is You
            </Link>
          </div>
          <p className="text-[#C9B99A] font-heading text-xl font-light mt-8">
            Begins {START_DATE}. Presale pricing ends {PRESALE_END_SHORT}.
          </p>
        </div>
      </section>

      {/* SECTION 2 — NAMED ENEMY */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="enemy-heading"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="enemy-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10 text-center"
          >
            A great story sitting unused is not an asset. It is a missed booking.
          </h2>
          <p className="text-lg text-[#3D3632]">
            Most founders have a story worth building a brand on and no plan for
            what to do with it. It lives in the &quot;about me&quot; page nobody
            reads, in the version you tell at dinner but never on a stage, in the
            pitch you have not written because you do not know who to send it to.
          </p>
          <p className="text-lg text-[#3D3632]">
            That gap costs you the keynote invite. It costs you the podcast booking.
            It costs you the client who would have signed at twice the rate if she
            had heard the real story instead of the generic one on your website.
          </p>
          <p className="text-lg text-[#3D3632]">
            The market rewards founders who turn their story into a brand and then
            go get booked with it. INFLUENCE is the room where you do both.
          </p>
        </div>
      </section>

      {/* SECTION 3 — THIS IS FOR YOU IF */}
      <section
        id="who-this-is-for"
        className="relative bg-cover bg-no-repeat md:bg-fixed scroll-mt-24"
        style={{
          backgroundImage: `url('${FIREBASE_IMAGES.whoThisIsFor}')`,
          backgroundPosition: "center 33%",
        }}
        aria-labelledby="who-heading"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <h2
            id="who-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-12 text-center"
          >
            This is for you if
          </h2>
          <div className="max-w-2xl mx-auto">
            <BulletList
              light
              items={[
                "You have a real story. A reinvention, a risk you took, a version of your life you built on purpose. You know it is worth more than a highlight reel and you have not turned it into anything yet.",
                "You want to get on stages and podcasts, but you have no keynote, no reel, and no plan for how to get booked once you have them.",
                "You are building toward a book, a speaking career, a thought-leadership platform, and you need a brand and a story that can carry all three.",
                "Your current brand does not reflect the life or the business you are actually building toward. You want to step into the next version with a plan, not guesswork.",
                "You want the kind of authority that makes premium clients, collaborators, and stage opportunities come to you. You are done waiting for someone to notice.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT CHANGES */}
      <section
        id="the-shift"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto"
        aria-labelledby="shift-heading"
      >
        <h2
          id="shift-heading"
          className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-16 text-center"
        >
          What changes in three months
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1C1917] mb-6">
              Right now
            </h3>
            <BulletList
              items={[
                "You know your story is powerful and you have no idea how to turn it into a brand people book.",
                "You have no keynote, no speaker reel, no plan for pitching a stage or a podcast.",
                "Your brand does not reflect the business or the life you are actually building toward.",
                "You are playing a smaller public role than the one you are ready for.",
                "You want to write a book, pitch a stage, land a podcast. Right now none of it is built to book from.",
              ]}
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1C1917] mb-6">
              After INFLUENCE
            </h3>
            <BulletList
              items={[
                "You have a brand and a founder story that are sharp, specific, and built to open doors. Stages, podcasts, book deals, premium clients.",
                "You have a finished, rehearsed keynote you can pitch anywhere.",
                "You have delivered that keynote live, on stage, in front of a room, on film. You have a podcast recording that proves you can hold a mic.",
                "You have a speaker reel built from real footage, not a phone recording from the back of a room.",
                "You know exactly how to pitch that reel and get booked, on repeat, long after the program ends.",
                "You are running the brand and the business you actually want, not the smaller version you settled for.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 — INSIDE INFLUENCE */}
      <section
        id="what-you-get"
        className="relative bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${FIREBASE_IMAGES.insideInfluence}')` }}
        aria-labelledby="deliverables-heading"
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <h2
            id="deliverables-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-12 text-center"
          >
            Inside Influence
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-[#FAF7F2]/90">
              This is not a content course. There are no Instagram caption templates
              here.
            </p>
            <p className="text-lg text-[#FAF7F2]/90">
              This is a room for founders ready to do the real work of turning a
              story into a brand. Finding the version of it that is true, powerful,
              and built to last. Building the language that makes people lean in.
              Then proving it on a real stage, on film.
            </p>
            <p className="text-lg text-[#FAF7F2]/90">
              I built West Rose Media on the back of my own story. It got me on some
              of the biggest stages I have ever stood on. It built a brand that
              attracts clients who would follow me anywhere. It is the reason I am
              writing a book right now. That is what a story can do for your
              business when you build it into a brand on purpose, instead of leaving
              it in a drawer.
            </p>
            <p className="text-[#FAF7F2] font-heading text-2xl font-light italic pt-2">
              That is what we do here.
            </p>
            <h3 className="text-xs tracking-widest uppercase text-[#C9B99A] pt-6">
              What is included
            </h3>
            <div className="pt-4">
              <BulletList
                light
                items={[
                  {
                    title: "Live calls across three months.",
                    body: "Strategic working sessions where we excavate, refine, and pressure-test your story in real time.",
                  },
                  {
                    title: "Group support between calls.",
                    body: "Bring your drafts, your pitches, your speaker bios, your about pages, your moments of doubt. You will not figure this out alone.",
                  },
                  {
                    title: "A structured story mapping process.",
                    body: "We locate the moments that matter, decide what earns its place in your public narrative, and build a founder story that is both true and strategic.",
                  },
                  {
                    title: "Live hot seat refinement.",
                    body: 'Your language gets sharper every week. We work on how you introduce yourself, how you pitch a stage, how you open a keynote, how you answer "so what do you do" in a way that makes people lean in.',
                  },
                  {
                    title: "A written, rehearsed keynote.",
                    body: "By the end of month two, your keynote is not a draft. It is finished and pressure-tested.",
                  },
                  {
                    title: "An in-person shoot day in Calgary (October 2026).",
                    body: "You deliver your keynote live, on stage, in front of a room, and we film it. You also record a podcast episode, filmed. Travel and lodging to Calgary are on you; production is on us.",
                  },
                  {
                    title: "A speaker reel.",
                    body: "Built from real stage and podcast footage. The asset every pitch, every stage application, every podcast booking request starts with from now on.",
                  },
                  {
                    title: "The booking play.",
                    body: "After your keynote is written and your reel is cut, we teach you how to actually get booked with it. This is the piece almost every other program in this space, including the ones charging ten thousand dollars, stops short of.",
                  },
                  {
                    title: "A small, intentional room.",
                    body: "Everyone in the room is navigating real transformation. You are not hiding in the background here.",
                  },
                  {
                    title: "Calls are recorded.",
                    body: "Group support remains open for the full three months.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5.5 — THE PIECE OTHER PROGRAMS SKIP */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="booking-gap-heading"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="booking-gap-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10 text-center"
          >
            Writing the keynote was never the hard part.
          </h2>
          <p className="text-lg text-[#3D3632]">
            Every high-end program in this space will get you to a polished keynote.
            Some of them charge ten thousand dollars to do it. Almost none of them
            tell you what to do the day after.
          </p>
          <p className="text-lg text-[#3D3632]">
            A finished keynote with nowhere to go is a document on your laptop.
            INFLUENCE does not stop there. Once your story is written and your reel
            is cut, we teach you how to pitch it, who to pitch it to, and how to
            actually get booked on the stages and podcasts you built it for.
          </p>
          <p className="text-lg text-[#3D3632]">
            That is the difference between a founder with a great story and a
            founder with a calendar full of bookings.
          </p>
        </div>
      </section>

      {/* SECTION 6 — HOW IT WORKS */}
      <section
        id="how-it-works"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto border-t border-[#C9B99A]/20"
        aria-labelledby="how-heading"
      >
        <h2
          id="how-heading"
          className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-12 text-center"
        >
          How it works
        </h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <p className="text-lg text-[#3D3632] text-center">
            Three months. One small group. One clear through-line. Led by Stephanie
            Rose.
          </p>
          <ul className="space-y-8 pt-4">
            <li className="flex flex-col gap-3 md:flex-row md:gap-6 md:items-start">
              <span className="text-[#C9B99A] font-heading text-2xl font-light shrink-0 md:w-44">
                Month 1 — Excavate
              </span>
              <span className="text-[#3D3632] text-lg">
                Story excavation and identity mapping. We locate what has shifted,
                name it precisely, and find the through-line of your evolution that
                is true, powerful, and built to open doors.
              </span>
            </li>
            <li className="flex flex-col gap-3 md:flex-row md:gap-6 md:items-start">
              <span className="text-[#C9B99A] font-heading text-2xl font-light shrink-0 md:w-44">
                Month 2 — Architect
              </span>
              <span className="text-[#3D3632] text-lg">
                Narrative architecture and language refinement. We build the actual
                story, then write and pressure-test the keynote until it is airtight.
                The one you tell on a stage, in a podcast intro, in a book proposal,
                in a pitch.
              </span>
            </li>
            <li className="flex flex-col gap-3 md:flex-row md:gap-6 md:items-start">
              <span className="text-[#C9B99A] font-heading text-2xl font-light shrink-0 md:w-44">
                Month 3 — Step Into It
              </span>
              <span className="text-[#3D3632] text-lg">
                Public positioning and presence. You travel to Calgary for our
                in-person shoot day, deliver your keynote live on stage, and record a
                podcast episode, both filmed. You walk away with a speaker reel built
                from that footage, and we teach you how to pitch it and get booked
                with it. Your return is deliberate, powerful, and entirely yours.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 7 — WHO IS LEADING THIS ROOM */}
      <section
        className="relative bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${FIREBASE_IMAGES.proof}')` }}
        aria-labelledby="leader-heading"
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-3xl mx-auto">
          <h2
            id="leader-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-10"
          >
            Who is leading this room
          </h2>
          <div className="space-y-6 text-[#FAF7F2]/85 leading-relaxed text-lg">
            <p>
              Stephanie Rose is the founder and creative director of West Rose Media.
              She took her own story, the reinvention, the risk, the life she
              rebuilt, and turned it into the brand that got her booked on the stages
              she stands on today.
            </p>
            <p>
              The story is the reason clients choose her before she finishes a
              sentence. It is the spine of the book she is writing now. It is proof,
              not theory, that this works.
            </p>
            <p className="text-[#FAF7F2] font-heading text-2xl font-light italic pt-4">
              INFLUENCE is the room where she teaches founders to do the same with
              their own story: build the brand, get on the stage, and get booked
              again after.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — JOIN / PRICING */}
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
            Join INFLUENCE
          </h2>
          <p className="text-[#C9B99A] font-heading text-xl font-light mb-4">
            Begins {START_DATE}. One cohort. Twenty seats.
          </p>
          <p className="text-lg text-[#3D3632] mb-10">
            Presale pricing runs through {PRESALE_END}. After that, price moves to
            standard. The August 28 start is fixed.
          </p>

          <div className="grid gap-6 md:grid-cols-2 text-left mb-10">
            <div className="border border-[#C9B99A]/40 bg-white/60 p-6 md:p-8">
              <h3 className="text-xs tracking-widest uppercase text-[#9C8E82] mb-2 text-center">
                Presale
              </h3>
              <p className="text-center text-sm text-[#3D3632] mb-5">
                Through {PRESALE_END}
              </p>
              <ul className="space-y-3 text-[#3D3632] text-lg">
                <li className="flex gap-3">
                  <span className="text-[#C9B99A]">•</span>
                  <span>One payment of $3,200 CAD.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C9B99A]">•</span>
                  <span>Three payments of $1,100 CAD (paid monthly).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C9B99A]">•</span>
                  <span>Six payments of $550 CAD (paid monthly).</span>
                </li>
              </ul>
            </div>
            <div className="border border-[#C9B99A]/40 bg-white/60 p-6 md:p-8">
              <h3 className="text-xs tracking-widest uppercase text-[#9C8E82] mb-2 text-center">
                Standard
              </h3>
              <p className="text-center text-sm text-[#3D3632] mb-5">
                From August 18, 2026
              </p>
              <ul className="space-y-3 text-[#3D3632] text-lg">
                <li className="flex gap-3">
                  <span className="text-[#C9B99A]">•</span>
                  <span>One payment of $4,800 CAD.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C9B99A]">•</span>
                  <span>Three payments of $1,650 CAD (paid monthly).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C9B99A]">•</span>
                  <span>Six payments of $825 CAD (paid monthly).</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 text-[#3D3632] text-lg mb-10 text-left">
            <h3 className="text-xs tracking-widest uppercase text-[#9C8E82] text-center">
              What you get when you join
            </h3>
            <p>
              The program begins {START_DATE}. That is when access opens. Before
              then, onboarding materials and preliminary story work will arrive so
              you do not walk into the first call cold. By the time the program
              begins, you will already have started.
            </p>
            <p>
              Travel and lodging to Calgary for the October shoot day are the
              participant&apos;s responsibility and are not included in the program
              price.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href={STRIPE_LINK} className={ctaDark}>
              Claim My Seat
            </Link>
            <Link href="#payment-options" className={ctaOutlineDark}>
              Choose Payment Plan
            </Link>
          </div>

          <div id="payment-options" className="scroll-mt-24">
            <Script
              async
              src="https://js.stripe.com/v3/pricing-table.js"
              strategy="afterInteractive"
            />
            {/* @ts-expect-error stripe-pricing-table is a custom web component */}
            <stripe-pricing-table
              pricing-table-id={STRIPE_PRICING_TABLE_ID}
              publishable-key={STRIPE_PUBLISHABLE_KEY}
            />
          </div>

          <p className="text-sm text-[#9C8E82] mt-8">
            Presale pricing ends {PRESALE_END_SHORT}. After that, the price is $4,800
            CAD.
          </p>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section
        id="faq"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            id="faq-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-12 text-center"
          >
            Frequently asked questions
          </h2>
          <ul className="space-y-4 list-none p-0 m-0">
            {faqItems.map(({ q, a }) => (
              <li key={q}>
                <details className="group border border-[#C9B99A]/30 bg-[#FAF7F2] overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-[#1C1917] hover:bg-[#F5F2ED] transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                    {q}
                    <span
                      className="shrink-0 text-[#9C8E82] group-open:rotate-180 transition-transform"
                      aria-hidden
                    >
                      ▼
                    </span>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-[#3D3632] border-t border-[#C9B99A]/20">
                    {a}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 10 — CLOSING CTA */}
      <section
        id="final-cta"
        className="bg-[#1C1917] text-[#FAF7F2]"
        aria-labelledby="final-cta-heading"
      >
        <div className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <h2
            id="final-cta-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-6"
          >
            You already have the story. Now build the brand that gets you booked
            with it.
          </h2>
          <p className="text-lg text-[#FAF7F2]/90 max-w-xl mx-auto mb-4">
            The life you want is on the other side of a brand built on your actual
            story and a real plan to get booked. INFLUENCE is the room where you
            build both.
          </p>
          <p className="text-[#C9B99A] font-heading text-xl font-light mb-2">
            Begins {START_DATE}.
          </p>
          <p className="text-[#C9B99A] font-heading text-xl font-light mb-10">
            Presale pricing ends {PRESALE_END}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#pricing" className={ctaPrimary}>
              I&apos;m Ready. Secure My Spot.
            </Link>
            <Link href="#pricing" className={ctaSecondary}>
              Claim Your Spot
            </Link>
          </div>
          <p className="text-sm text-[#FAF7F2]/60 mt-4">
            Presale pricing ends {PRESALE_END_SHORT}. Price is $4,800 CAD after.
          </p>
        </div>
      </section>

      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#FAF7F2] border-t border-[#C9B99A]/30 md:hidden"
        aria-label="Mobile call to action"
      >
        <Link
          href="#pricing"
          className="block w-full py-4 text-center rounded-none bg-[#1C1917] text-[#FAF7F2] text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300"
        >
          Claim My Seat
        </Link>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}
