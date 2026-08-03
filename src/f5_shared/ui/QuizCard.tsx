import Link from "next/link";
import type { Quiz } from "@/f4_entities/quiz/types";

type QuizCardProps = {
  quiz: Quiz;
};

export function QuizCard({ quiz }: QuizCardProps) {
  return (
    <article className="quiz-card group flex h-full min-h-[18rem] flex-col rounded-xl p-6 transition">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="min-w-0 text-[1.45rem] font-black leading-tight tracking-normal text-[var(--foreground)]">{quiz.name}</h3>
        <span className="shrink-0 whitespace-nowrap rounded-full bg-[var(--accent-soft)] px-3 py-2 text-xs font-bold leading-none text-[var(--accent-strong)]">
          10문제
        </span>
      </div>
      <p className="text-base font-black text-[var(--accent-strong)]">{quiz.keyword}</p>
      <p className="mt-4 flex-1 text-base leading-7 text-[var(--muted)]">{quiz.summary}</p>
      <Link
        className="mt-6 flex items-center justify-between border-t border-[var(--line)] pt-4 text-sm font-bold text-[var(--accent-strong)]"
        href={`/quiz/${quiz.slug}`}
        aria-label={`${quiz.name} 풀기`}
      >
        테스트 풀기 <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
