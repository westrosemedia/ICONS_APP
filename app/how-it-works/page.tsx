import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const heroImage =
  "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR4185.jpg?alt=media&token=28bf6bd2-861b-459b-bc13-59381159cc0c";
const iconAboutImage =
  "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR5995.jpg?alt=media&token=8cd7762e-a067-4110-a205-295bd51b99fa";
const sectionImages = [
  "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8802.jpg?alt=media&token=4d2ceab7-b80b-4d87-bcb7-e074f4893700",
  "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8772.jpg?alt=media&token=ec7967fe-a5bb-4911-b537-5ae53ac3d342"
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-black">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="West Rose Media founder portrait"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="container-elegant relative z-10 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl rounded-3xl border border-white/70 bg-white/90 p-8 sm:p-10 lg:p-12 shadow-xl backdrop-blur">
            <h1 className="text-hero text-black mb-4">How the ICON Brand Partnership works</h1>
            <p className="text-editorial text-gray-700 mb-6">
              This page is for founders who want to understand how the ICON Brand Partnership works and whether it makes sense for where their business is right now.
            </p>
            <p className="text-editorial text-gray-700">
              West Rose Media partners with established founders who are already generating revenue and want their brand to create more authority, opportunities, and income without managing content themselves.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="group">
                <Link href="/packages">Work with Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-elegant">
          <div className="relative mb-12 h-[55vh] min-h-[360px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={iconAboutImage}
              alt="ICON Brand Partnership creative direction and content team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          <div className="space-y-12">
            <section className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-4 text-gray-700">
                  <h2 className="text-2xl font-semibold text-black">Who the ICON Brand Partnership is built for</h2>
                  <p>
                    The ICON Brand Partnership is designed for founders who are no longer trying to get their first clients.
                  </p>
                  <p>
                    Most founders we partner with are already generating consistent revenue and feel capped by how fragmented or time consuming content has become. They know visibility matters, but it is not compounding into the level of recognition or opportunity they want.
                  </p>
                  <p>This typically looks like:</p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Monthly revenue in the 20k to 50k range and pushing for the next level</li>
                    <li>Strong offers that sell, but inconsistent or disjointed content</li>
                    <li>Too much time spent managing content instead of scaling the business</li>
                    <li>A desire for more inbound opportunities, authority, and recognition</li>
                  </ul>
                  <p>
                    If you are still building fundamentals, this partnership will feel premature. If you are scaling, it will feel relieving.
                  </p>
                </div>
                <div className="relative aspect-[3/4] max-w-sm w-full mx-auto overflow-hidden rounded-2xl">
                  <Image
                    src={sectionImages[0]}
                    alt="West Rose Media partnership visual"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="relative aspect-[3/4] max-w-sm w-full mx-auto overflow-hidden rounded-2xl lg:order-2">
                  <Image
                    src={sectionImages[1]}
                    alt="West Rose Media content strategy visual"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="space-y-4 text-gray-700 lg:order-1">
                  <h2 className="text-2xl font-semibold text-black">Why content becomes the bottleneck at this stage</h2>
                  <p>
                    At this level of business, content stops being about creativity and starts being about leverage.
                  </p>
                  <p>
                    When content is fragmented across multiple people or tools, momentum stalls. Visibility becomes inconsistent. Opportunities slow down.
                  </p>
                  <p>
                    Founders get stuck not because they lack ideas, but because content is not owned end to end.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="space-y-4 text-gray-700">
                <h2 className="text-2xl font-semibold text-black">How ICON Brand Partnership solves that.</h2>
                <p>
                  ICON compounds a founder into an icon while it compounds her audience into pre-converted buyers. The same system does both. She stays in the seat that grows the business. Stephanie and the West Rose Media team hold the seat that builds the icon and activates the audience.
                </p>
                <p>
                  This is what an entire content team looks like operating inside her business: a creative director, a brand strategist, a photographer, a videographer, a social content producer, a launch asset team, and a business coach, all running as one unit. She gets the output of seven roles without hiring, onboarding, or managing seven people. One contract. One team. One creative direction.
                </p>
                <div className="space-y-4 pt-2">
                  <h3 className="text-xl font-semibold text-black">What every ICON Brand Partnership includes:</h3>
                  <div>
                    <h4 className="font-semibold text-black">A complete content engine.</h4>
                    <p>
                      Ongoing photography, video, social content, and launch assets, custom-built around her brand and her offers. The team handles every part of production: direction, shoots, editing, asset organization, repurposing. Every shoot is built to activate the right viewer and repel the wrong one, so the audience that gathers around her brand is already aligned to buy at her level.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Strategic creative direction from Stephanie.</h4>
                    <p>
                      Stephanie leads the creative direction. The team executes against it. Every shoot, every campaign, every visual decision runs through one creative lens. Consistency is what makes the audience activation compound. A founder whose brand looks like the same person across two years of content is a founder her industry starts referencing.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Strategic brand and offer building plus business coaching.</h4>
                    <p>
                      Stephanie leads ongoing strategic conversations on offer architecture, positioning, launch strategy, and the business decisions driving what the brand is communicating. The brand activates the audience. The strategy makes the activation profitable. She is the creative director and the business coach in one engagement.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Aligned execution.</h4>
                    <p>
                      When she makes a decision, the team moves on it. Ideas translate into shoots, content, and assets fast enough that every campaign feels new. Every idea ships while it is still hot. Every launch looks fresh because the work is being made in real time. This is the part most agencies cannot do, and it is the part that makes ICON members compound results across both the founder and the audience at once.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">The Collective.</h4>
                    <p>
                      ICON is a small room. Members get access to the rest of the room: mastermind-style dinners, joint content days where members shoot alongside each other, and an annual in-person intensive. The conversations, referrals, and relationships that come out of this room are part of what membership delivers.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="space-y-4 text-gray-700">
                <h2 className="text-2xl font-semibold text-black">Investment.</h2>
                <p>
                  ICON Brand Partnership starts at $5,000 CAD per month. The final monthly investment is custom-built per member based on production cadence, location coverage, and engagement scope.
                </p>
                <p>
                  ICON runs on a 6-month or 12-month commitment. The work compounds across quarters, not weeks, and the partnership only delivers what it is built to deliver if both sides are committed across enough time for the brand to take hold.
                </p>
                <p>
                  Founders at this level who try to assemble the same capability piece by piece typically spend two to five times more across separate hires: a creative director, a brand strategist, a photographer, a videographer, a social content producer, a launch asset team, a business coach. ICON gives her the output of all of those roles inside one engagement, run as one team, without the cost or the management overhead of seven separate contracts.
                </p>
                <p>
                  Members invest at this level because they are scaling something they intend to outlast them. ICON is not a marketing experiment. It is the brand and content infrastructure of a business being built to fund decades, not quarters.
                </p>
              </div>
            </section>
          </div>

          <section className="mt-16 rounded-3xl border border-black/10 bg-white p-8 sm:p-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-black">Next steps</h2>
            <p className="text-editorial text-gray-700 mb-8">
              Applications for the ICON Brand Partnership are reviewed carefully. If the partnership is aligned, you will hear from us with next steps. For Spotlight or Immersion, start on the packages page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/packages">Work with Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <Link href="/apply">Apply for ICON Brand Partnership</Link>
              </Button>
            </div>
            <Button asChild size="lg" variant="ghost" className="group mt-4">
              <Link href="/case-studies">View case studies</Link>
            </Button>
          </section>
        </div>
      </section>
    </main>
  );
}
