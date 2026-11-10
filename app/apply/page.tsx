import SproutStudioLeadForm from "@/components/SproutStudioLeadForm";
 
 export default function ApplyPage() {
   return (
     <main className="min-h-screen bg-white text-black">
       <section className="section-padding">
         <div className="container-elegant max-w-3xl">
          <h1 className="text-hero text-black mb-4">Apply for the ICON Brand Partnership</h1>
          <p className="text-editorial text-gray-700 mb-6">
            ICON Brand Partnership is the West Rose Media inner system for the founder ready to scale past running a business and into being an icon in her industry. Known by name. Sought out by opportunity. Recognized as a leader in her category.
          </p>
          <p className="text-editorial text-gray-700 mb-6">
            The partnership delivers a complete content team inside her business without her having to hire one. Stephanie Rose leads strategic creative direction, brand and offer building, and business coaching. The West Rose Media team handles ongoing photography, video, social content, and launch assets. Aligned execution turns her decisions into work fast enough that every idea ships while it is still hot.
          </p>
          <p className="text-editorial text-gray-700 mb-10">
            ICON runs on a 6-month or 12-month commitment. Applications are reviewed carefully. Every applicant gets a response.
          </p>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Who should apply</h2>
            <div className="space-y-4 text-gray-700">
              <p>This partnership is best suited for founders who:</p>
              <ul className="space-y-2">
                <li>Are already generating consistent revenue</li>
                <li>See brand and visibility as a growth lever, not a nice to have</li>
                <li>Want a strategic partner to handle content end to end</li>
                <li>Are comfortable investing several thousand dollars per month in their brand</li>
              </ul>
              <p>If you are earlier in your business or looking for a single shoot, this will not be the right fit.</p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Location and logistics</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                West Rose Media works with founders across North America, with recurring work in Calgary, Vancouver, and Toronto.
              </p>
              <p>
                ICON Brand Partnership clients collaborate remotely on strategy and planning, with content captured through scheduled travel dates and intentional shoot days.
              </p>
              <p>You do not need to live in the same city to apply.</p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">The application process</h2>
            <div className="space-y-4 text-gray-700">
              <p>Applications are reviewed carefully.</p>
              <p>
                All applicants will receive a response. If the partnership is aligned, you will be contacted with next steps. If it is not the right fit at this time, you will still hear from us.
              </p>
            </div>
          </div>
 
          <SproutStudioLeadForm
            leadFormId="1860679"
            className="w-full flex justify-center"
          />
         </div>
       </section>
     </main>
   );
 }
