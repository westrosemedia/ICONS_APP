/* Do not change copy without explicit written approval from Stephanie. No em dashes anywhere. */
import React from "react";
import { resultCopy, QuizResult } from "./quizData";
export default function ResultRenderer({
  result
}: {
  result: QuizResult;
}) {
  const r = resultCopy[result];

  // Different images for each result
  const resultImages = {
    spotlight: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR3352.jpg?alt=media",
    immersion: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5983.jpg?alt=media",
    icon: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8747.jpg?alt=media"
  };

  return (
    <div className="space-y-8">
      <div
        className="relative rounded-2xl overflow-hidden p-8 min-h-[600px] flex flex-col justify-center"
        style={{
          backgroundImage: `url('${resultImages[result]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-black text-center">{r.title}</h2>
            <div className="space-y-6 text-lg leading-relaxed text-black">
              {r.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="text-center mt-8">
              <a 
                className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors" 
                href={result === "spotlight" ? "https://westrosemedia.sproutstudio.com/bookings" : `/book/${result}`}
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
