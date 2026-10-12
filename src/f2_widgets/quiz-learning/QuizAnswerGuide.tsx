import type { QuizQuestion } from "@/f4_entities/quiz/types";
import { QuestionExplanation } from "./QuestionExplanation";

type QuizAnswerGuideProps = {
  questions: QuizQuestion[];
};

export function QuizAnswerGuide({ questions }: QuizAnswerGuideProps) {
  return (
    <section aria-labelledby="answer-guide-title" className="mt-10">
      <div className="border-b border-[var(--line)] pb-5">
        <p className="text-sm font-bold text-[var(--accent-strong)]">풀이 노트</p>
        <h2 id="answer-guide-title" className="mt-2 text-2xl font-bold">
          전체 정답과 해설
        </h2>
        <p className="mt-3 leading-7 text-[var(--muted)]">
          퀴즈를 마친 뒤 헷갈렸던 문장을 다시 펼쳐 보세요. 정답뿐 아니라 그 표현을 골라야 하는 이유까지 확인할 수 있습니다.
        </p>
      </div>

      <ol className="divide-y divide-[var(--line)] border-b border-[var(--line)]">
        {questions.map((question, index) => (
          <li id={`answer-${index + 1}`} className="scroll-mt-24" key={`${index}-${question.question}`}>
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-bold leading-7 marker:content-none">
                <span className="mr-3 text-sm text-[var(--accent-strong)]">{index + 1}</span>
                {question.question}
                <span className="float-right text-[var(--muted)] transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="ml-8 mt-4 rounded-md bg-[#fbfbf8] p-4 leading-7">
                <p className="font-bold text-[var(--accent-strong)]">정답: {question.answer}</p>
                <QuestionExplanation question={question} />
              </div>
            </details>
          </li>
        ))}
      </ol>
    </section>
  );
}
