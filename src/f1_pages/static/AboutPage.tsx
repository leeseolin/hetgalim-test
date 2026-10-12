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
          콘텐츠 작성과 검수 기준
        </h2>
        <p className="mt-3">
          모든 설명은 단순히 정답만 제시하지 않고, 문장 안에서 구분할 수 있는 기준과 실제 예문을 함께 제공합니다.
          확인한 국립국어원 상세 답변과 사전 표제어를 각 설명에 연결합니다. 문항의 정답·선택지·완성 문장을 함께 대조하고,
          공식 상세 근거를 확인하지 못한 항목은 해당 설명에 표시합니다.
        </p>
      </section>
      <section aria-labelledby="operator" className="mt-8">
        <h2 id="operator" className="text-xl font-bold text-[var(--foreground)]">
          운영 정보와 오류 제보
        </h2>
        <p className="mt-3">
          헷갈리는 말 테스트는 한국어 표현을 실제 문장으로 연습할 수 있도록 개인이 운영하는 학습 프로젝트입니다.
          잘못된 정답, 설명이 모호한 문항, 접근성 문제를 발견했다면 아래 공개 저장소의 이슈로 알려주세요. 확인 후 수정 내역을
          사이트에 반영합니다.
        </p>
        <p className="mt-3">
          <a className="font-bold text-[var(--accent-strong)] underline underline-offset-4" href="https://github.com/leeseolin/hetgalim-test/issues" target="_blank" rel="noreferrer">
            오류 및 개선 의견 보내기 ↗
          </a>
        </p>
        <p className="mt-3 text-sm">콘텐츠 검토일: 2026년 10월 12일 — 핵심 퀴즈 100문항과 가이드 연습 100문항 대조, 오답 이유·비교 예문 보완, 모호한 출제 조건 수정.</p>
      </section>
    </StaticPageShell>
  );
}
