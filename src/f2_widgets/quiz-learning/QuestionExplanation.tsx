import type { QuizQuestion } from "@/f4_entities/quiz/types";
import { completeQuestion } from "@/f4_entities/quiz/completeQuestion";

export function QuestionExplanation({ question }: { question: QuizQuestion }) {
  return (
    <div className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)]">
      <p><strong className="text-[var(--foreground)]">완성 문장:</strong> {completeQuestion(question)}</p>
      <p><strong className="text-[var(--foreground)]">정답의 이유:</strong> {question.explanation}</p>
      {question.wrongExplanation && <p><strong className="text-[var(--foreground)]">다른 선택지는?</strong> {question.wrongExplanation}</p>}
    </div>
  );
}
