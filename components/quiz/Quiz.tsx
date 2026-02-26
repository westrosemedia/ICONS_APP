/* Do not change copy without explicit written approval from Stephanie. No em dashes anywhere. */
"use client";
import React, { useState } from "react";
import { quizIntro, quizQuestions, QuizResult, priorityOrder } from "./quizData";
import ResultRenderer from "./ResultRenderer";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(QuizResult | null)[]>(Array(quizQuestions.length).fill(null));
  const [ppbSignals, setPpbSignals] = useState<boolean[]>(Array(quizQuestions.length).fill(false));
  const [final, setFinal] = useState<{ result: QuizResult; ppbSuggested: boolean } | null>(null);

  const select = (optionIndex: number) => {
    const opt = quizQuestions[currentQuestion].options[optionIndex];
    const nextAnswers = [...answers];
    const nextSignals = [...ppbSignals];
    nextAnswers[currentQuestion] = opt.result;
    nextSignals[currentQuestion] = Boolean(opt.ppbSignal);
    setAnswers(nextAnswers);
    setPpbSignals(nextSignals);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete, calculate results
      const tally: Record<QuizResult, number> = { spotlight: 0, immersion: 0, icon: 0 };
      answers.forEach(r => { if (r) tally[r] += 1; });

      let best: QuizResult = "spotlight";
      let bestScore = -1;
      (Object.keys(tally) as QuizResult[]).forEach(key => {
        if (tally[key] > bestScore) { best = key; bestScore = tally[key]; }
        else if (tally[key] === bestScore) {
          const currentIdx = priorityOrder.indexOf(best);
          const challengerIdx = priorityOrder.indexOf(key);
          if (challengerIdx > -1 && currentIdx > -1 && challengerIdx < currentIdx) best = key;
        }
      });

      // PPB suggestion rule: true if 3 or more ppbSignals are selected, or if Q7 selected the learn framework option
      const ppbCount = ppbSignals.filter(Boolean).length;
      const q7 = quizQuestions.findIndex(q => q.id === "q7_path");
      const q7PpbChosen = q7 >= 0 && ppbSignals[q7] === true;

      const ppbSuggested = ppbCount >= 3 || q7PpbChosen;

      setFinal({ result: best, ppbSuggested });
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (final) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-10">
        <ResultRenderer result={final.result} ppbSuggested={final.ppbSuggested} />
      </section>
    );
  }

  const currentQ = quizQuestions[currentQuestion];
  const hasAnswer = answers[currentQuestion] !== null;

  return (
    <section className="w-full px-4 sm:px-6 py-6 sm:py-10 space-y-4 sm:space-y-8">
      <div className="text-center">
        <p className="text-lg sm:text-xl">{quizIntro}</p>
      </div>

      <div className="w-full bg-white rounded-2xl p-4 sm:p-8 shadow-lg">
        <h3 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-black">{currentQ.prompt}</h3>
        <div className="space-y-2 sm:space-y-4">
          {currentQ.options.map((opt, i) => {
            const id = `${currentQ.id}_${i}`;
            return (
              <label key={id} className="flex items-start gap-3 sm:gap-4 cursor-pointer p-3 sm:p-4 rounded-lg hover:bg-gray-100 transition-colors">
                <input
                  type="radio"
                  name={currentQ.id}
                  checked={answers[currentQuestion] === opt.result}
                  onChange={() => select(i)}
                  className="mt-1"
                />
                <span className="text-base sm:text-lg text-black">{opt.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center px-2">
        <button
          onClick={goBack}
          disabled={currentQuestion === 0}
          className="px-4 sm:px-6 py-2 sm:py-3 text-gray-600 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
        >
          Back
        </button>

        <button
          onClick={nextQuestion}
          disabled={!hasAnswer}
          className="px-6 sm:px-8 py-2 sm:py-3 bg-black text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors text-sm sm:text-base"
        >
          {currentQuestion === quizQuestions.length - 1 ? "See my result" : "Next"}
        </button>
      </div>
    </section>
  );
}
