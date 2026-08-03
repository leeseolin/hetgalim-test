"use client";

import { useMemo, useState } from "react";
import type { Quiz } from "@/f4_entities/quiz/types";
import { ResultBox } from "./ResultBox";

type QuizPlayerProps = {
  quiz: Quiz;
};

export function QuizPlayer({ quiz }: QuizPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quiz.questions[currentIndex];
  const selectedAnswer = selectedAnswers[currentIndex];
  const progress = useMemo(
    () => Math.round(((isFinished ? quiz.questions.length : currentIndex + 1) / quiz.questions.length) * 100),
    [currentIndex, isFinished, quiz.questions.length]
  );

  const handleSelect = (choice: string) => {
    setSelectedAnswers((answers) => {
      const nextAnswers = [...answers];
      nextAnswers[currentIndex] = choice;
      return nextAnswers;
    });
  };

  const handleNext = () => {
    if (currentIndex === quiz.questions.length - 1) {
      setIsFinished(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setIsFinished(false);
  };

  if (isFinished) {
    return <ResultBox questions={quiz.questions} selectedAnswers={selectedAnswers} onRetry={handleRetry} />;
  }

  return (
    <section className="rounded-md border border-[var(--line)] bg-white p-5 shadow-sm sm:p-7" aria-labelledby="quiz-player-title">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 id="quiz-player-title" className="text-2xl font-bold">
          퀴즈 풀기
        </h2>
        <p className="text-sm font-semibold text-[var(--muted)]">
          {currentIndex + 1} / {quiz.questions.length}
        </p>
      </div>

      <div className="mt-5" aria-label={`진행률 ${progress}%`}>
        <div className="h-3 overflow-hidden rounded-full bg-[#e7e4dc]">
          <div className="h-full rounded-full bg-[var(--accent)] transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <fieldset className="mt-8">
        <legend className="text-xl font-bold leading-8">{currentQuestion.question}</legend>
        <div className="mt-5 grid gap-3">
          {currentQuestion.choices.map((choice) => {
            const isSelected = selectedAnswer === choice;

            return (
              <button
                key={choice}
                type="button"
                className={`min-h-14 rounded-md border px-4 text-left text-base font-bold transition ${
                  isSelected
                    ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                    : "border-[var(--line)] bg-white hover:border-[var(--accent)]"
                }`}
                aria-pressed={isSelected}
                onClick={() => handleSelect(choice)}
              >
                {choice}
              </button>
            );
          })}
        </div>
      </fieldset>

      <button
        className="primary-action mt-8 min-h-12 w-full rounded-md px-5 text-base font-bold sm:w-auto"
        type="button"
        disabled={!selectedAnswer}
        onClick={handleNext}
      >
        {currentIndex === quiz.questions.length - 1 ? "결과 보기" : "다음 문제"}
      </button>
    </section>
  );
}
