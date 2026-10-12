import { QuizCard } from "@/f5_shared/ui/QuizCard";
import type { Quiz } from "@/f4_entities/quiz/types";

type RelatedQuizzesProps = {
  quizzes: Quiz[];
};

export function RelatedQuizzes({ quizzes }: RelatedQuizzesProps) {
  return (
    <section aria-labelledby="recommended-quizzes" className="mt-12">
      <h2 id="recommended-quizzes" className="text-2xl font-bold">
        다음 추천 테스트
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.slug} quiz={quiz} />
        ))}
      </div>
    </section>
  );
}
