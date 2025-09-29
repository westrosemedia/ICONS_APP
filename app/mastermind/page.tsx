import Image from "next/image";
import Link from "next/link";

export default function MastermindPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6951.jpg?alt=media&token=9100f358-a2f9-4848-b995-2eee1ff3b285"
            alt="Luxury Content Mastermind"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Content & Tapping
            <br />
            <span className="text-[#c1ff72]">Mastermind + Retreat</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Become the woman whose brand is seen, felt, and followed without burning out or playing small
          </p>
          <Link
            href="#apply"
            className="inline-block bg-white text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/90 transition-colors"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What You'll Get
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Luxury Weekend Retreat</h3>
              <p className="text-lg text-white/80 mb-6">
                Immerse yourself in a transformative weekend experience designed to elevate your content creation and personal growth.
              </p>
              <ul className="space-y-3 text-white/70">
                <li>• Exclusive access to premium content strategies</li>
                <li>• Hands-on workshops with industry experts</li>
                <li>• Luxury accommodations and dining</li>
                <li>• Networking with like-minded entrepreneurs</li>
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6965.jpg?alt=media&token=9f791e83-44d3-4022-bb61-8f3bd5a1def0"
                alt="Luxury retreat experience"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6981.jpg?alt=media&token=9d18b961-5a37-4d16-9056-598f854480eb"
                alt="Weekly support and mentorship"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-6">Weekly Support & Mentorship</h3>
              <p className="text-lg text-white/80 mb-6">
                Ongoing guidance and support to ensure your continued growth and success long after the retreat.
              </p>
              <ul className="space-y-3 text-white/70">
                <li>• Weekly group coaching calls</li>
                <li>• 1:1 mentorship sessions</li>
                <li>• Exclusive community access</li>
                <li>• Content strategy implementation support</li>
              </ul>
            </div>
          </div>

          {/* Additional Image Section */}
          <div className="mt-20">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR7086.jpg?alt=media&token=6bf7e2b2-0eab-46cf-bc95-8a1729102797"
                alt="Mastermind experience"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Final Image Section */}
          <div className="mt-20">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6644.jpg?alt=media&token=78c2fc79-1d50-427a-9acd-2acc82681c8c"
                alt="Luxury retreat setting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Investment
          </h2>
          <div className="bg-black/50 rounded-2xl p-8 border border-white/10">
            <div className="text-6xl md:text-7xl font-bold mb-4">$12,000</div>
            <p className="text-xl text-white/80 mb-4">
              $2,000 deposit + 6 monthly payments of $1,666
            </p>
            <p className="text-lg text-white/70 mb-8">
              6-month mastermind experience with luxury retreat included
            </p>
            <div className="text-sm text-white/60 mb-8">
              <p>• Luxury Content Retreat: March 6-9th in Kelowna BC, Canada</p>
              <p>• Weekly calls every Wednesday at 1pm PST/2pm MST</p>
              <p>• Personal tapping sessions with Jackie & Stephanie</p>
            </div>
            <Link
              href="https://jackie-mcdonald.mykajabi.com/offers/gbLLJg4v/checkout?fbclid=PAQ0xDSwMN6OZleHRuA2FlbQIxMAABp3v1UbwJ-bwikGOANEc48MEpfLirOZWyfQkatqEM11B1ne-TZkRX_wa4ni6y_aem_41lUrn27GEzuKv7uYmNlcA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/90 transition-colors"
            >
              Join the Mastermind
            </Link>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Join?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            This is for the woman with a powerful message who's done the inner work, but still feels stuck spinning her wheels, second-guessing herself, and hiding online.
          </p>
          
          <div className="bg-black/50 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">This is for you if you:</h3>
            <ul className="text-left space-y-3 text-white/80 mb-8">
              <li>• Have a powerful mission but feel stuck in cycles of burnout and second-guessing</li>
              <li>• Know you need content but feel overwhelmed showing up online consistently</li>
              <li>• Have big goals but struggle to hold the energy or attention span to reach them</li>
              <li>• Want to be seen, paid, and respected as the leader you already are</li>
            </ul>
            
            <Link
              href="https://jackie-mcdonald.mykajabi.com/offers/gbLLJg4v/checkout?fbclid=PAQ0xDSwMN6OZleHRuA2FlbQIxMAABp3v1UbwJ-bwikGOANEc48MEpfLirOZWyfQkatqEM11B1ne-TZkRX_wa4ni6y_aem_41lUrn27GEzuKv7uYmNlcA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/90 transition-colors"
            >
              Join the Mastermind Now
            </Link>
            
            <p className="text-sm text-white/60 mt-4">
              The first people to join will have priority bedrooms at the luxury content retreat!
            </p>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="relative w-full bg-black overflow-hidden">
        <video
          className="w-full h-auto object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%20Reel%202_1.mp4?alt=media&token=e093c1dc-3441-4573-9f81-ce7dfa29efce"
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            width: '100%',
            height: 'auto',
            minHeight: '50vh',
            maxHeight: '80vh',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg leading-tight">
            See the Mastermind Experience
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-2xl drop-shadow-lg">
            Behind the scenes of what we create together
          </p>
        </div>
      </section>
    </div>
  );
}
