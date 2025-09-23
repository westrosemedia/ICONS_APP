"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import quizConfig from "@/data/quiz-config.json";

interface QuizAnswer {
  questionId: string;
  answerId: string;
}

interface QuizScores {
  spotlight: number;
  lite: number;
  immersion: number;
  icon: number;
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showTieBreaker, setShowTieBreaker] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const questions = quizConfig.questions;
  const currentQ = questions[currentQuestion];

  const calculateScores = (): QuizScores => {
    const scores: QuizScores = { spotlight: 0, lite: 0, immersion: 0, icon: 0 };
    
    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      const option = question?.options.find(opt => opt.id === answer.answerId);
      
      if (option?.scores) {
        Object.entries(option.scores).forEach(([packageName, score]) => {
          scores[packageName as keyof QuizScores] += score;
        });
      }
    });

    return scores;
  };

  const getTopPackages = (scores: QuizScores): string[] => {
    const sorted = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .map(([packageName]) => packageName);
    
    const topScore = scores[sorted[0] as keyof QuizScores];
    return sorted.filter(pkg => scores[pkg as keyof QuizScores] === topScore);
  };

  const handleAnswer = (answerId: string) => {
    const newAnswer: QuizAnswer = {
      questionId: currentQ.id,
      answerId
    };

    const updatedAnswers = [...answers.filter(a => a.questionId !== currentQ.id), newAnswer];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete, calculate results
      const scores = calculateScores();
      const topPackages = getTopPackages(scores);
      
      if (topPackages.length > 1) {
        setShowTieBreaker(true);
      } else {
        setResult(topPackages[0]);
        setIsComplete(true);
      }
    }
  };

  const handleTieBreaker = (preference: string) => {
    setResult(preference);
    setIsComplete(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowTieBreaker(false);
    setResult(null);
    setIsComplete(false);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (isComplete && result) {
    const resultData = quizConfig.results[result as keyof typeof quizConfig.results];
    
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full text-center"
        >
          <div className="mb-8">
            <h1 className="text-hero text-black mb-4">{resultData.title}</h1>
            <p className="text-display text-gray-600 mb-6">{resultData.subtitle}</p>
            <p className="text-editorial max-w-xl mx-auto">{resultData.description}</p>
          </div>
          
          <div className="space-y-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={resultData.ctaHref}>{resultData.cta}</a>
            </Button>
            <Button variant="ghost" onClick={resetQuiz} className="w-full sm:w-auto">
              Take quiz again
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (showTieBreaker) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full"
        >
          <div className="text-center mb-8">
            <h1 className="text-hero text-black mb-4">One more question</h1>
            <p className="text-editorial">{quizConfig.tieBreaker.question}</p>
          </div>
          
          <div className="space-y-4">
            {quizConfig.tieBreaker.options.map((option) => (
              <motion.button
                key={option.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleTieBreaker(option.preference)}
                className="w-full p-6 text-left border-2 border-gray-200 hover:border-black transition-colors duration-200 bg-white"
              >
                <p className="text-lg font-medium">{option.text}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="max-w-2xl w-full"
      >
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-caption">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-caption">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 h-1">
            <motion.div
              className="bg-black h-1"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-12">
          <h1 className="text-display text-black mb-6">{currentQ.question}</h1>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          <AnimatePresence>
            {currentQ.options.map((option, index) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(option.id)}
                className="w-full p-6 text-left border-2 border-gray-200 hover:border-black transition-all duration-200 bg-white group"
              >
                <p className="text-lg font-medium group-hover:text-black transition-colors">
                  {option.text}
                </p>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={goBack}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          
          <div className="text-sm text-gray-500">
            {answers.find(a => a.questionId === currentQ.id) ? "Answered" : "Choose an option"}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
