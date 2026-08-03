import Link from "next/link";
import { quizzes } from "@/f4_entities/quiz/quizzes";
import { QuizCard } from "@/f5_shared/ui/QuizCard";

export function HomePage() {
  const popularQuizzes = quizzes.slice(0, 6);
  const featuredQuiz = quizzes[0];

  return (
    <main>
      <section className="home-hero">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:py-24">
          <div>
            <p className="home-eyebrow">3분 맞춤법 점검</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.08] tracking-[-0.055em] sm:text-7xl">
              헷갈렸던 표현,<br />퀴즈로 확실하게.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              되와 돼, 안과 않처럼 쓸 때마다 망설여지는 표현을 짧은 문제와 해설로 익혀보세요.
              회원가입 없이 바로 시작할 수 있습니다.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link className="primary-action inline-flex min-h-12 items-center justify-center rounded-lg px-6 font-bold" href={`/quiz/${featuredQuiz.slug}`}>
                첫 테스트 시작하기
              </Link>
              <a className="text-sm font-bold text-[var(--muted)] underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--accent-strong)]" href="#all-tests">
                전체 테스트 보기
              </a>
            </div>
          </div>

          <aside className="quick-rule" aria-label="오늘의 맞춤법">
            <p>오늘의 빠른 구분</p>
            <strong>{featuredQuiz.name}</strong>
            <span>{featuredQuiz.tenSecondSummary}</span>
            <Link href={`/quiz/${featuredQuiz.slug}`}>문제로 확인하기 <i aria-hidden="true">→</i></Link>
          </aside>
        </div>
      </section>

      <section id="all-tests" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24" aria-labelledby="test-list-title">
        <div className="section-intro">
          <div>
            <p className="home-eyebrow">전체 테스트</p>
            <h2 id="test-list-title" className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">자주 틀리는 표현부터</h2>
          </div>
          <p>각 테스트는 10문제로 구성되어 있으며, 결과에서 틀린 문제의 해설을 바로 확인할 수 있습니다.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularQuizzes.map((quiz) => <QuizCard key={quiz.slug} quiz={quiz} />)}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:py-16">
          <div className="service-note"><span>01</span><strong>먼저 풀어보기</strong><p>긴 설명을 읽기 전에 문제를 풀며 내가 헷갈리는 지점을 확인합니다.</p></div>
          <div className="service-note"><span>02</span><strong>짧은 기준 익히기</strong><p>10초 요약과 실제 예문으로 두 표현의 차이를 빠르게 정리합니다.</p></div>
          <div className="service-note"><span>03</span><strong>틀린 문제 복습하기</strong><p>결과 화면에서 오답과 해설을 함께 확인해 기억에 남깁니다.</p></div>
        </div>
      </section>

      {quizzes.length > popularQuizzes.length && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="more-tests-title">
          <h2 id="more-tests-title" className="text-2xl font-black tracking-[-0.03em]">더 많은 테스트</h2>
          <ul className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {quizzes.slice(popularQuizzes.length).map((quiz) => (
              <li key={quiz.slug}>
                <Link className="group grid gap-2 py-5 sm:grid-cols-[1fr_1.5fr_auto] sm:items-center" href={`/quiz/${quiz.slug}`}>
                  <strong>{quiz.name}</strong>
                  <span className="text-sm text-[var(--muted)]">{quiz.summary}</span>
                  <span className="text-sm transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
