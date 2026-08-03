import { StaticPageShell } from "./StaticPageShell";

export function AboutPage() {
  return (
    <StaticPageShell
      title="사이트 소개"
      description="헷갈리는 한국어 표현을 퀴즈로 빠르게 확인하는 사이트입니다."
    >
      <section aria-labelledby="purpose">
        <h2 id="purpose" className="text-xl font-bold text-[var(--foreground)]">
          목적
        </h2>
        <p className="mt-3">
          헷갈리는 말 테스트는 한국인이 자주 틀리는 맞춤법과 표현 차이를 짧은 문제로 확인할 수 있도록 만든 학습
          참고용 사이트입니다. 긴 설명보다 먼저 직접 풀어 보고, 틀린 문제의 해설을 통해 기억에 남도록 구성합니다.
        </p>
      </section>
      <section aria-labelledby="usage" className="mt-8">
        <h2 id="usage" className="text-xl font-bold text-[var(--foreground)]">
          사용 방법
        </h2>
        <p className="mt-3">
          메인 화면에서 원하는 테스트를 선택하고 객관식 문제를 순서대로 풀면 됩니다. 결과 화면에서는 점수, 결과 문구,
          틀린 문제 해설을 확인할 수 있습니다.
        </p>
      </section>
      <section aria-labelledby="direction" className="mt-8">
        <h2 id="direction" className="text-xl font-bold text-[var(--foreground)]">
          콘텐츠 방향
        </h2>
        <p className="mt-3">
          앞으로 되/돼, 안/않처럼 검색 수요가 높은 맞춤법뿐 아니라 직장 생활, 학교생활, 일상 대화에서 자주 쓰는
          표현을 계속 추가할 예정입니다.
        </p>
      </section>
    </StaticPageShell>
  );
}
