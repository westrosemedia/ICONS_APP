import type { Metadata } from "next";
import Image from "next/image";

const HERO_IMAGE_URL =
  "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Liz%20social%20proof%2FKAY_7513.jpg?alt=media&token=ad86ba86-ce77-4b6a-a02e-e21efea6c11f";
const PAYMENT_LINK = "https://buy.stripe.com/eVqfZgbx66z38LFcNn87K1d";

const MYSTERY_GUEST_PROOF_IMAGES = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Liz%20social%20proof%2FWhatsApp%20Image%202026-05-20%20at%2015.45.16%20(1).jpeg?alt=media&token=d76f1762-ed1c-4d3f-8ed1-e2921701966a",
    alt: "Social proof screenshot about a half day event result",
    caption: "Private client result.",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Liz%20social%20proof%2FWhatsApp%20Image%202026-05-20%20at%2015.45.16%20(2).jpeg?alt=media&token=de1551d8-5ed5-430a-9d10-a3f60b459ed4",
    alt: "Social proof screenshot about reaching a ten thousand dollar goal",
    caption: "Revenue goal reached.",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Liz%20social%20proof%2FWhatsApp%20Image%202026-05-20%20at%2015.45.17%20(1).jpeg?alt=media&token=ae268336-f268-4c49-91eb-eb439343444a",
    alt: "Social proof screenshot showing high social media engagement",
    caption: "High engagement content.",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Liz%20social%20proof%2FWhatsApp%20Image%202026-05-20%20at%2015.45.17%20(2).jpeg?alt=media&token=1b4df1c7-6ca6-49c3-8eca-def0a0449f5e",
    alt: "Social proof screenshot showing more than one million views",
    caption: "One million plus views.",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Liz%20social%20proof%2FWhatsApp%20Image%202026-05-20%20at%2015.45.17%20(9).jpeg?alt=media&token=9f87c23c-fbdf-40e5-be05-613f0c636a8e",
    alt: "Social proof screenshot about a client win",
    caption: "Press and visibility win.",
  },
];

export const metadata: Metadata = {
  title: "Un-Fuck Your Algorithm | West Rose Media",
  description:
    "A 3-day live intensive from West Rose Media to reset your feed, rebuild your reach, and get your algorithm working again.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function SecretPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center md:px-16">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9B99A] md:text-sm">
            West Rose Media presents
          </p>
          <h1 className="mb-8 font-heading text-5xl font-light leading-tight tracking-tight text-[#FAF7F2] md:text-7xl">
            Un-Fuck Your Algorithm
          </h1>
          <p className="mx-auto mb-8 max-w-3xl font-heading text-3xl font-light leading-snug text-[#FAF7F2] md:text-5xl">
            Your feed is broken. Your reach is buried. Both of those are algorithm problems, and both of
            them are fixable.
          </p>
          <div className="mx-auto mb-12 max-w-2xl space-y-5 text-left text-lg text-[#FAF7F2]/90">
            <p>
              This is a 3-day live intensive over the week of June 15-19. You get three calls, a full week
              in Telegram, and daily homework that actually changes things. By the end of the week, your
              algorithm has a new job.
            </p>
          </div>
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-none bg-[#FAF7F2] px-10 py-4 text-sm font-medium uppercase tracking-widest text-[#1C1917] transition-colors duration-300 hover:bg-[#E8E4DD]"
          >
            I&apos;m In
          </a>
          <p className="mt-8 font-heading text-xl font-light text-[#C9B99A]">
            June 15-19. $408 CAD. Three calls + a week of Telegram.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-elegant max-w-4xl">
          <h2 className="text-display text-black mb-8">What&apos;s actually Broken</h2>
          <div className="space-y-6 text-editorial text-gray-700">
            <p>
              At some point your feed turned into a job. You open the app and you&apos;re immediately
              exhausted. You&apos;re consuming content that makes you feel behind, uninspired, or just kind of
              gross. And then you&apos;re supposed to create from that?
            </p>
            <p>No wonder your posts feel flat.</p>
            <p>
              Meanwhile, the algorithm that distributes your content has decided you&apos;re not worth showing
              to anyone. Maybe you went quiet for a bit. Maybe you posted inconsistently. Maybe it just
              stopped working and you don&apos;t know why. Either way, you&apos;re creating into a void.
            </p>
            <p>
              Here&apos;s the thing: those two problems are connected. A rotted feed makes you a worse
              creator. A worse creator gets less reach. Less reach makes posting feel pointless. You open
              the app less. The algorithm buries you deeper.
            </p>
            <p>It&apos;s a cycle. And it&apos;s fixable.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-elegant max-w-4xl">
          <h2 className="text-display text-black mb-8">This is for you if.</h2>
          <div className="space-y-6 text-editorial text-gray-700">
            <p>
              You used to actually enjoy posting. You had an idea, you made the thing, you hit post, and
              people showed up. Now you draft captions and delete them. You film something and never publish
              it. You open the app looking for inspiration and close it twenty minutes later feeling worse
              than when you started.
            </p>
            <p>
              What looks like burnout is a broken algorithm. There&apos;s a difference, and fixing it is faster
              than you think.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-elegant max-w-4xl">
          <h2 className="text-display text-black mb-8">What happens inside.</h2>
          <div className="space-y-6 text-editorial text-gray-700">
            <p>
              Three live calls across the week of June 15-19. A full week of access in Telegram with me and
              one mystery guest. Daily homework drops that are specific and fast and actually do something.
            </p>
            <p>
              The homework matters. These are actions that send new signals to the algorithm in real time.
              You do the thing. The algorithm notices. We watch it move together, inside the room, before
              the week is over.
            </p>
            <p>
              You leave with a different algorithm because you changed it while you were in the room.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["3 live calls", "Telegram all week", "Daily homework"].map((item) => (
              <div key={item} className="border border-gray-200 bg-gray-50 p-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-elegant max-w-5xl">
          <h2 className="text-display text-black mb-10 text-center">
            Both sides of the algorithm are broken. We fix both.
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-gray-200 bg-white p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                What you see
              </p>
              <div className="space-y-5 text-editorial text-gray-700">
                <p>
                  Your feed is feeding you garbage. Comparison bait. Mediocre content. Stuff that makes you
                  feel behind. Your algorithm learned what you engage with, and it&apos;s been serving you
                  more of the same ever since. That has a direct effect on what you create and how you feel
                  when you sit down to post.
                </p>
                <p>
                  We reset that. You will actively teach your algorithm what you actually want to be
                  consuming. Your feed will look different by the end of the week.
                </p>
              </div>
            </div>
            <div className="border border-gray-200 bg-white p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                What they see of you
              </p>
              <div className="space-y-5 text-editorial text-gray-700">
                <p>
                  Your reach is buried because the algorithm has decided you&apos;re not worth distributing.
                  That&apos;s a signal problem, and signals can be changed.
                </p>
                <p>
                  The homework is designed to send the right ones, repeatedly, so the algorithm starts
                  moving your content again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black text-white">
        <div className="container-elegant max-w-4xl">
          <div className="border border-[#C9B99A]/40 bg-[#FAF7F2] p-8 text-[#1C1917] md:p-10">
            <h2 className="text-display text-[#1C1917] mb-8">The ghost.</h2>
            <div className="space-y-6 text-editorial text-[#3D3632]">
              <p>
                Someone joins this room who doesn&apos;t have a website. You can&apos;t Google her. You
                can&apos;t book her through a waitlist or a form. The only way to get in front of her is
                through someone who already works with her.
              </p>
              <p>
                She clocks a million views a day. She&apos;s scaled multiple channels to one to five million
                views a month. Her clients get booked on celebrity podcasts and featured in national
                magazines.
              </p>
              <p>
                She is the person other experts call when they need to go viral. She&apos;s in Telegram all
                week. She will look at your specific account and tell you exactly what&apos;s broken and
                exactly what to do about it.
              </p>
              <p>You will not get access to her like this again.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-elegant max-w-5xl">
          <h2 className="text-display text-black mb-8 text-center">The receipts.</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MYSTERY_GUEST_PROOF_IMAGES.map((image) => (
              <figure key={image.src} className="overflow-hidden border border-gray-200 bg-gray-50">
                <div className="relative min-h-[320px] bg-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="border-t border-gray-200 px-4 py-3 text-sm text-gray-600">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-elegant max-w-4xl">
          <h2 className="text-display text-black mb-8">By June 19.</h2>
          <ul className="space-y-5 text-editorial text-gray-700">
            <li className="flex gap-4">
              <span className="text-black">-</span>
              <span>Your feed has been deliberately broken and rebuilt. You know how to keep it clean.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-black">-</span>
              <span>Your reach is moving. You watched it happen in real time, inside the room.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-black">-</span>
              <span>
                You know exactly what to do the week after. The week after that. Going forward, on your own.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-black">-</span>
              <span>
                You have had a week of direct access to the person other experts call when they want to go
                viral.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-elegant max-w-4xl">
          <h2 className="text-display text-black mb-8">I&apos;ve been exactly where you are.</h2>
          <div className="space-y-6 text-editorial text-gray-700">
            <p>
              I&apos;ve hired the coaches who promised transformation and delivered hype. I sat through the
              calls, paid the invoices, and walked away with a highlight reel of affirmations and absolutely
              nothing I could actually use. I&apos;ve worked more hours than I should have on content that went
              nowhere. I&apos;ve opened the app and felt like everyone else was inside a room I wasn&apos;t invited
              to, some cool-girls club with an algorithm I couldn&apos;t crack and a confidence I couldn&apos;t fake.
            </p>
            <p>I built West Rose Media because I got tired of noise that didn&apos;t move anything.</p>
            <p>
              What I teach is real. It&apos;s specific. You can open your phone and do it today and watch
              something change. I don&apos;t do cheerleading. I don&apos;t do vague strategy frameworks you&apos;ll never
              implement. I show up, I tell you exactly what to do, and I stay in the room until you&apos;ve done
              it and seen the result.
            </p>
            <p>That&apos;s what this week is.</p>
          </div>
        </div>
      </section>

      <section
        className="relative min-h-[55vh] bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}
        aria-label="Un-Fuck Your Algorithm visual break"
      >
        <div className="absolute inset-0 bg-black/35" />
      </section>

      <section id="the-invitation" className="section-padding bg-white scroll-mt-24">
        <div className="container-elegant max-w-4xl text-center">
          <h2 className="text-display text-black mb-8">The details.</h2>
          <div className="grid gap-6 md:grid-cols-2 text-left">
            <div className="border border-gray-200 bg-gray-50 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Dates</p>
              <p className="text-3xl font-semibold text-black">June 15-19</p>
              <p className="mt-3 text-gray-700">Three live calls across the week.</p>
            </div>
            <div className="border border-gray-200 bg-gray-50 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Access</p>
              <p className="text-3xl font-semibold text-black">Telegram all week</p>
              <p className="mt-3 text-gray-700">
                Daily homework drops. Real-time feedback from me and the mystery guest.
              </p>
            </div>
            <div className="border border-gray-200 bg-gray-50 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Investment
              </p>
              <p className="text-3xl font-semibold text-black">$408 CAD</p>
            </div>
            <div className="border border-gray-200 bg-gray-50 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Availability
              </p>
              <p className="text-3xl font-semibold text-black">Live and personal</p>
              <p className="mt-3 text-gray-700">
                No hard seat cap, but the Telegram access is live and personal. This won&apos;t stay open.
              </p>
            </div>
          </div>
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-none bg-black px-10 py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:bg-gray-800"
          >
            I&apos;m In
          </a>
        </div>
      </section>

      <section className="section-padding bg-black text-white">
        <div className="container-elegant max-w-3xl text-center">
          <h2 className="text-display mb-6 text-white">
            Your algorithm has been running the wrong program for too long.
          </h2>
          <div className="mb-10 space-y-5 text-editorial text-white/85">
            <p>
              You know how this is supposed to feel. You remember when posting was something you actually
              wanted to do. It can feel like that again. It just needs a hard reset.
            </p>
            <p>Stop tolerating a broken feed.</p>
          </div>
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-none bg-[#FAF7F2] px-10 py-4 text-sm font-medium uppercase tracking-widest text-[#1C1917] transition-colors duration-300 hover:bg-[#E8E4DD]"
          >
            Un-Fuck Mine
          </a>
        </div>
      </section>
    </main>
  );
}
