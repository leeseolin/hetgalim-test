"use client";

import type { QuizQuestion } from "@/f4_entities/quiz/types";

type ResultBoxProps = {
  questions: QuizQuestion[];
  selectedAnswers: string[];
  onRetry: () => void;
};

function getResultMessage(score: number) {
  if (score <= 40) {
    return "카톡 보내기 전 한 번 더 확인 필요";
  }

  if (score <= 70) {
    return "일상 대화는 가능하지만 아직 헷갈림";
  }

  if (score <= 90) {
    return "맞춤법 상위권";
  }

  return "인간 맞춤법 검사기";
}

export function ResultBox({ questions, selectedAnswers, onRetry }: ResultBoxProps) {
  const correctCount = questions.filter((question, index) => question.answer === selectedAnswers[index]).length;
  const score = Math.round((correctCount / questions.length) * 100);
  const wrongQuestions = questions
    .map((question, index) => ({
      question,
      selectedAnswer: selectedAnswers[index],
      index
    }))
    .filter((item) => item.question.answer !== item.selectedAnswer);

  return (
    <section className="rounded-md border border-[var(--line)] bg-white p-5 shadow-sm sm:p-7" aria-live="polite">
      <p className="text-sm font-bold text-[var(--accent-strong)]">결과</p>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-5xl font-black text-[var(--foreground)]">{score}점</p>
          <p className="mt-2 text-lg font-bold">{getResultMessage(score)}</p>
        </div>
        <p className="text-sm text-[var(--muted)]">
          {questions.length}문제 중 {correctCount}문제 정답
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold">틀린 문제 해설</h3>
        {wrongQuestions.length === 0 ? (
          <p className="mt-4 rounded-md bg-[var(--accent-soft)] p-4 font-semibold text-[var(--accent-strong)]">
            틀린 문제가 없습니다.
          </p>
        ) : (
          <ul className="mt-4 space-y-4">
            {wrongQuestions.map(({ question, selectedAnswer, index }) => (
              <li key={question.question} className="rounded-md border border-[var(--line)] bg-[#fbfbf8] p-4">
                <p className="text-sm font-bold text-[var(--muted)]">{index + 1}번 문제</p>
                <p className="mt-2 font-semibold">{question.question}</p>
                <p className="mt-3 text-sm text-[var(--danger)]">내 답: {selectedAnswer}</p>
                <p className="mt-1 text-sm text-[var(--accent-strong)]">정답: {question.answer}</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">{question.explanation}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        className="primary-action mt-8 min-h-12 w-full rounded-md px-5 text-base font-bold sm:w-auto"
        type="button"
        onClick={onRetry}
      >
        다시 풀기
      </button>
    </section>
  );
}
