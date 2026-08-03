import type { Quiz } from "@/f4_entities/quiz/types";
import { getRelatedQuizzes } from "@/f4_entities/quiz/quizzes";
import { QuizPlayer } from "@/f2_widgets/quiz-player/QuizPlayer";
import { RelatedQuizzes } from "@/f5_shared/ui/RelatedQuizzes";

type QuizDetailPageProps = {
  quiz: Quiz;
};

export function QuizDetailPage({ quiz }: QuizDetailPageProps) {
  const relatedQuizzes = getRelatedQuizzes(quiz.slug);

  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="mb-8 border-b border-[var(--line)] pb-8">
          <p className="text-sm font-bold text-[var(--accent-strong)]">{quiz.keyword}</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{quiz.name}</h1>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{quiz.description}</p>
        </header>

        <section aria-labelledby="quick-summary" className="rounded-xl border border-[var(--line)] bg-[var(--accent-soft)] p-5 sm:p-7">
          <h2 id="quick-summary" className="text-2xl font-bold">
            10초 요약
          </h2>
          <p className="mt-3 text-lg leading-8 text-[var(--muted)]">{quiz.tenSecondSummary}</p>
        </section>

        <section aria-labelledby="quiz-description" className="mt-8">
          <h2 id="quiz-description" className="text-2xl font-bold">
            헷갈리는 이유와 구분법
          </h2>
          <p className="mt-4 whitespace-pre-line leading-8 text-[var(--muted)]">{quiz.seoContent}</p>
        </section>

        <section aria-labelledby="examples" className="mt-8 rounded-md border border-[var(--line)] bg-[#fbfbf8] p-5 sm:p-7">
          <h2 id="examples" className="text-2xl font-bold">
            예문
          </h2>
          <ul className="mt-4 grid gap-3">
            {quiz.examples.map((example) => (
              <li key={example} className="rounded-md bg-white p-4 leading-7">
                {example}
              </li>
            ))}
          </ul>
        </section>

        <section id="start" aria-labelledby="start-title" className="mt-8">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="start-title" className="text-2xl font-bold">
                퀴즈 시작
              </h2>
              <p className="mt-2 text-[var(--muted)]">답을 고른 뒤 다음 문제 버튼을 눌러 진행하세요.</p>
            </div>
          </div>
          <QuizPlayer quiz={quiz} />
        </section>

        <RelatedQuizzes quizzes={relatedQuizzes} />
      </article>
    </main>
  );
}
