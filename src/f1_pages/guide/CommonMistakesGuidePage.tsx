import { additionalQuizzes, commonMistakesQuiz } from "@/f4_entities/quiz/additionalQuizzes";
import { QuizPlayer } from "@/f2_widgets/quiz-player/QuizPlayer";
import { ContentSourceNote } from "@/f2_widgets/quiz-learning/ContentSourceNote";
import { learningNotes } from "@/f4_entities/quiz/learningNotes";
import { LearningNote } from "@/f2_widgets/quiz-learning/LearningNote";
import { QuestionExplanation } from "@/f2_widgets/quiz-learning/QuestionExplanation";
import { AdSenseScript } from "@/f5_shared/ui/AdSenseScript";
import Link from "next/link";

export function CommonMistakesGuidePage() {
  return (
    <main>
      <AdSenseScript />
      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="border-b border-[var(--line)] pb-8">
          <p className="text-sm font-bold text-[var(--accent-strong)]">20개 표현 · 20문제 종합 테스트</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">자주 틀리는 맞춤법 20개 총정리</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            짧은 설명만 따로 외우지 않고, 실제 문장에서 의미를 판단하도록 구성했습니다. 먼저 종합 테스트로 실력을 확인한 뒤 틀린 표현만 골라 복습해 보세요.
          </p>
        </header>

        <nav aria-labelledby="expression-index-title" className="mt-8 rounded-xl border border-[var(--line)] bg-white p-5 sm:p-7">
          <h2 id="expression-index-title" className="text-xl font-bold">표현 바로 찾기</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-xs sm:text-sm lg:grid-cols-4">
            {additionalQuizzes.map((quiz, index) => (
              <li key={quiz.slug}>
                <a className="block rounded-md px-3 py-2 font-semibold text-[var(--muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-strong)]" href={`#${quiz.slug}`}>
                  {String(index + 1).padStart(2, "0")}. {quiz.name.replace(" 테스트", "")}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="mixed-quiz" aria-labelledby="mixed-quiz-title" className="mt-10 scroll-mt-24">
          <div className="mb-5">
            <p className="text-sm font-bold text-[var(--accent-strong)]">먼저 풀어보기</p>
            <h2 id="mixed-quiz-title" className="mt-2 text-2xl font-bold">20문제 종합 테스트</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">표현마다 한 문제씩 출제됩니다. 정답을 고른 단서가 무엇이었는지도 함께 생각해 보세요.</p>
          </div>
          <QuizPlayer quiz={commonMistakesQuiz} />
        </section>

        <section aria-labelledby="expression-guide-title" className="mt-14">
          <div className="border-b border-[var(--line)] pb-6">
            <p className="text-sm font-bold text-[var(--accent-strong)]">틀린 표현 복습하기</p>
            <h2 id="expression-guide-title" className="mt-2 text-3xl font-black">표현별 구분법과 예문</h2>
          </div>

          <div className="divide-y divide-[var(--line)]">
            {additionalQuizzes.map((quiz, index) => (
              <section id={quiz.slug} key={quiz.slug} className="scroll-mt-24 py-10" aria-labelledby={`${quiz.slug}-title`}>
                <p className="text-sm font-bold text-[var(--accent-strong)]">{String(index + 1).padStart(2, "0")}</p>
                <h3 id={`${quiz.slug}-title`} className="mt-2 text-2xl font-black">{quiz.name.replace(" 테스트", "")}</h3>
                <p className="mt-3 text-lg font-bold leading-8">{quiz.tenSecondSummary}</p>
                <p className="mt-4 leading-8 text-[var(--muted)]">{quiz.seoContent}</p>
                {learningNotes[quiz.slug] && <LearningNote note={learningNotes[quiz.slug]} />}
                <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold text-[var(--accent-strong)]">
                  <a href="#mixed-quiz">이 표현이 나오는 종합 테스트 풀기 ↑</a>
                  {learningNotes[quiz.slug]?.relatedQuizSlug && (
                    <Link href={`/quiz/${learningNotes[quiz.slug]?.relatedQuizSlug}#start`}>관련 규칙의 10문제 퀴즈 풀기 →</Link>
                  )}
                </div>

                <div className="mt-6 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="rounded-md bg-[var(--accent-soft)] p-5">
                    <h4 className="font-bold text-[var(--accent-strong)]">바른 예문</h4>
                    <ul className="mt-3 space-y-2 leading-7 text-[var(--muted)]">
                      {quiz.examples.map((example) => <li key={example}>• {example}</li>)}
                    </ul>
                  </div>

                  <details className="rounded-md border border-[var(--line)] bg-white p-5">
                    <summary className="cursor-pointer font-bold">연습 문제 5개와 해설 보기</summary>
                    <ol className="mt-4 space-y-4">
                      {quiz.questions.map((question, questionIndex) => (
                        <li key={`${questionIndex}-${question.question}`} className="border-t border-[var(--line)] pt-4 first:border-0 first:pt-0">
                          <p className="font-semibold leading-7">{questionIndex + 1}. {question.question}</p>
                          <p className="mt-1 text-sm text-[var(--muted)]">선택지: {question.choices.join(" / ")}</p>
                          <p className="mt-2 text-sm font-bold text-[var(--accent-strong)]">정답: {question.answer}</p>
                          <QuestionExplanation question={question} />
                        </li>
                      ))}
                    </ol>
                  </details>
                </div>
              </section>
            ))}
          </div>
        </section>

        <ContentSourceNote />
      </article>
    </main>
  );
}
