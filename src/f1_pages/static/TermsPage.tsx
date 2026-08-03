import { StaticPageShell } from "./StaticPageShell";

export function TermsPage() {
  return (
    <StaticPageShell title="이용 안내" description="헷갈리는 말 테스트를 이용하기 전 확인할 기본 안내입니다.">
      <section aria-labelledby="reference">
        <h2 id="reference" className="text-xl font-bold text-[var(--foreground)]">
          학습 참고용 콘텐츠
        </h2>
        <p className="mt-3">
          사이트의 퀴즈와 해설은 학습 참고용으로 제공됩니다. 정확성을 높이기 위해 노력하지만 오류가 있을 수 있으며,
          공식 문서 작성이나 시험 준비 등 중요한 상황에서는 국립국어원 자료 등 공신력 있는 자료를 함께 확인해 주세요.
        </p>
      </section>
      <section aria-labelledby="copyright" className="mt-8">
        <h2 id="copyright" className="text-xl font-bold text-[var(--foreground)]">
          무단 복제 금지
        </h2>
        <p className="mt-3">
          사이트의 문항, 해설, 페이지 구성을 허락 없이 대량 복제하거나 재배포하는 행위를 금지합니다. 개인 학습을 위한
          링크 공유는 가능합니다.
        </p>
      </section>
      <section aria-labelledby="changes" className="mt-8">
        <h2 id="changes" className="text-xl font-bold text-[var(--foreground)]">
          서비스 변경
        </h2>
        <p className="mt-3">
          사이트 구조, 콘텐츠, 광고 영역, 정책 페이지 내용은 운영 상황에 따라 변경될 수 있습니다. 기능 추가나 정책
          변경이 필요한 경우 관련 페이지에 반영합니다.
        </p>
      </section>
    </StaticPageShell>
  );
}
