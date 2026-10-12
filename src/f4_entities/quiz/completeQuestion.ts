import type { QuizQuestion } from "./types";

export function completeQuestion(question: QuizQuestion): string {
  return question.question.split(" (")[0].replace(/_{2,}/g, question.answer);
}
