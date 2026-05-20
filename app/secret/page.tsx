import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE_URL =
  "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_0428.jpg?alt=media&token=ea7f180f-5440-4344-85b8-97ea13bf6662";
const STEPHANIE_IMAGE_URL =
  "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_7053.jpg?alt=media&token=dfb289d5-19ea-4068-8029-ca1829e3053c";
const PAYMENT_LINK = "https://buy.stripe.com/5kQcN4cBa2iN0f97t387K1c";
const MYSTERY_GUEST_PROOF_IMAGES = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Liz%20social%20proof%2FWhatsApp%20Image%202026-05-20%20at%2015.45.16%20(1).jpeg?alt=media&token=d76f1762-ed1c-4d3f-8ed1-e2921701966a",
    alt: "Social proof screenshot about a half day event result",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Liz%20social%20proof%2FWhatsApp%20Image%202026-05-20%20at%2015.45.16%20(2).jpeg?alt=media&token=de1551d8-5ed5-430a-9d10-a3f60b459ed4",
    alt: "Social proof screenshot about reaching a ten thousand dollar goal",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Liz%20social%20proof%2FWhatsApp%20Image%202026-05-20%20at%2015.45.17%20(1).jpeg?alt=media&token=ae268336-f268-4c49-91eb-eb439343444a",
    alt: "Social proof screenshot showing high social media engagement",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Liz%20social%20proof%2FWhatsApp%20Image%202026-05-20%20at%2015.45.17%20(2).jpeg?alt=media&token=1b4df1c7-6ca6-49c3-8eca-def0a0449f5e",
    alt: "Social proof screenshot showing more than one million views",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Liz%20social%20proof%2FWhatsApp%20Image%202026-05-20%20at%2015.45.17%20(9).jpeg?alt=media&token=9f87c23c-fbdf-40e5-be05-613f0c636a8e",
    alt: "Social proof screenshot about a client win",
  },
];

export const metadata: Metadata = {
  title: "Walk in First | West Rose Media",
  description:
    "A 3-day live intensive for established founders ready to build a brand presence that walks in before they do.",
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
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center md:px-16">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9B99A] md:text-sm">
            Walk in First
          </p>
          <h1 className="mb-12 font-heading text-5xl font-light leading-tight tracking-tight text-[#FAF7F2] md:text-7xl">
            You don&apos;t need to find your voice. You need to stop editing it out.
          </h1>
          <div className="mx-auto mb-12 max-w-2xl space-y-5 text-left text-lg text-[#FAF7F2]/90">
            <p>
              A 3-day live intensive. You leave knowing how to build a brand presence that walks in before
              you do.
            </p>
            <p>28 seats. Once.</p>
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-none bg-[#FAF7F2] px-10 py-4 text-sm font-medium uppercase tracking-widest text-[#1C1917] transition-colors duration-300 hover:bg-[#E8E4DD]"
            >
              Claim Your Seat
            </a>
            <Link
              href="#the-invitation"
              className="inline-block rounded-none border border-[#FAF7F2] px-10 py-4 text-sm font-medium uppercase tracking-widest text-[#FAF7F2] transition-colors duration-300 hover:bg-[#FAF7F2] hover:text-[#1C1917]"
            >
              See the Details
            </Link>
          </div>
          <p className="mt-8 font-heading text-xl font-light text-[#C9B99A]">
            June 10-12. Replays only for those who sign up before June 10.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-elegant grid items-center gap-10 lg:grid-cols-[0.75fr_1fr]">
          <div className="relative min-h-[420px] overflow-hidden bg-gray-200 shadow-sm">
            <Image
              src={STEPHANIE_IMAGE_URL}
              alt="Stephanie Rose of West Rose Media"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover object-[center_33%]"
            />
          </div>
          <div>
            <h2 className="text-display text-black mb-8">Hey, I&apos;m Stephanie.</h2>
            <div className="space-y-6 text-editorial text-gray-700">
              <p>
                I build brands for founders who are done performing a smaller version of themselves.
              </p>
              <p>
                My job in this room is simple. I find your voice for you, I tell you exactly how to show up,
                and I do not let you shrink.
              </p>
              <p>
                Founders who spend three days with me tend to walk straight into the version of their brand
                they have been circling for two years.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-elegant max-w-4xl">
          <h2 className="text-display text-black mb-8">Who this is for.</h2>
          <div className="space-y-6 text-editorial text-gray-700">
            <p>
              This is for the established founder whose brand is two years behind who she actually is.
            </p>
            <p>
              You are good at what you do. You know there is a bigger, louder, more visible version of you
              that you keep trimming down before you hit post.
            </p>
            <p>
              You do not need to be fixed. You need to show up.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-elegant max-w-4xl">
          <div className="space-y-6 text-editorial text-gray-700">
            <p>
              You keep waiting to feel ready. To find the words. To get the brand colors right.
            </p>
            <p>
              None of that is the thing standing between you and being seen. The thing is the quiet
              decision you make every day to show up smaller than you are.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-elegant max-w-4xl">
          <div className="space-y-6 text-editorial text-gray-700">
            <p>
              Three days from now you will know how to walk in front of a camera and direct yourself.
            </p>
            <p>
              You will know how to make a clean, consistent visual at home, on your own, again and again.
            </p>
            <p>
              You will stop apologizing before you post. Your presence will start doing the work your
              captions used to beg for.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black text-white">
        <div className="container-elegant max-w-4xl">
          <h2 className="text-display mb-8 text-white">What you get.</h2>
          <div className="space-y-6 text-editorial text-white/80">
            <p>
              Three live sessions from Stephanie and a mystery guest. Someone the internet does not get
              access to.
            </p>
            <p>
              You leave with the skill, not just the inspiration.
            </p>
            <p>
              A guest joins the room. She has no website. You cannot book her. The only way in is through
              someone who already works with her.
            </p>
            <p>
              She is the person other experts call when they need to go viral. Inside these three days, she
              gives you live algorithm and content strategy for your specific channels.
            </p>
            <p>
              You will not get access to her like this again.
            </p>
          </div>
          <div className="mt-12">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
              Social Proof
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {MYSTERY_GUEST_PROOF_IMAGES.map((image) => (
                <div
                  key={image.src}
                  className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-sm"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="the-invitation" className="section-padding bg-gray-50 scroll-mt-24">
        <div className="container-elegant max-w-4xl text-center">
          <h2 className="text-display text-black mb-8">The invitation.</h2>
          <div className="grid gap-6 md:grid-cols-4 text-left">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Dates
              </p>
              <p className="text-3xl font-semibold text-black">June 10-12</p>
              <p className="mt-3 text-gray-700">Three live sessions.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Investment
              </p>
              <p className="text-3xl font-semibold text-black">$500 CAD</p>
              <p className="mt-3 text-gray-700">Per seat.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Capacity
              </p>
              <p className="text-3xl font-semibold text-black">28 seats</p>
              <p className="mt-3 text-gray-700">That is the real cap.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Availability
              </p>
              <p className="text-3xl font-semibold text-black">One time</p>
              <p className="mt-3 text-gray-700">This is not an evergreen program.</p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm">
            <p className="text-editorial text-gray-700">
              Replays are available only for those who sign up before June 10. This will never be offered
              again.
            </p>
          </div>
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-none bg-black px-10 py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:bg-gray-800"
          >
            Claim Your Seat
          </a>
        </div>
      </section>
    </main>
  );
}
