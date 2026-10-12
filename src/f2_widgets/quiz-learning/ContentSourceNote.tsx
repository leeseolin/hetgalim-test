import { contentReviewedAt } from "@/f4_entities/quiz/learningNotes";

export function ContentSourceNote() {
  return (
    <aside className="mt-10 rounded-md border border-[var(--line)] bg-[#fbfbf8] p-5 text-sm leading-7 text-[var(--muted)]" aria-labelledby="source-note-title">
      <h2 id="source-note-title" className="text-base font-bold text-[var(--foreground)]">콘텐츠 검수 기록</h2>
      <p className="mt-2">
        검토일: <time dateTime={contentReviewedAt}>2026년 10월 12일</time>. 핵심 퀴즈 100문항과 가이드 연습 100문항의 선택지·정답·완성 문장·해설을 대조했습니다.
        종합 테스트는 가이드 문항 20개를 재사용합니다.
      </p>
      <p className="mt-2">
        배웅 문항의 활용과 중복 음절을 수정하고, 줄임말·정보 출처·의무와 모양처럼 복수 해석이 가능한 조건을 명시했습니다.
        각 표현에 오답 이유와 비교 예문을 보완했습니다. 되/돼 8번의 ‘설명이 되었다’와 10번의 ‘해결될 것이다’는 기존 정답을 유지했습니다.
      </p>
      <p className="mt-2">
        확인한 국립국어원 상세 답변과 사전 표제어는 해당 설명 옆에 연결했습니다. 설명과 예문은 자체 작성한 학습 자료입니다.
        공식 상세 근거를 아직 확인하지 못한 표현은 개별 설명에 표시합니다.
      </p>
      <a className="mt-3 inline-block font-semibold text-[var(--accent-strong)] underline underline-offset-4" href="https://github.com/leeseolin/hetgalim-test/issues" target="_blank" rel="noreferrer">오류 제보 ↗</a>
    </aside>
  );
}
