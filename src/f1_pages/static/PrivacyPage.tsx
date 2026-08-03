import { StaticPageShell } from "./StaticPageShell";

export function PrivacyPage() {
  return (
    <StaticPageShell
      title="개인정보처리방침"
      description="현재 회원가입, 로그인, 데이터베이스 저장 없이 운영되는 사이트입니다."
    >
      <section aria-labelledby="no-account">
        <h2 id="no-account" className="text-xl font-bold text-[var(--foreground)]">
          수집하는 개인정보
        </h2>
        <p className="mt-3">
          현재 헷갈리는 말 테스트는 회원가입, 로그인, 댓글, 결제 기능을 제공하지 않으며 사용자의 이름, 이메일,
          비밀번호 같은 개인정보를 직접 저장하지 않습니다. 퀴즈 결과도 서버나 데이터베이스에 저장하지 않습니다.
        </p>
      </section>
      <section aria-labelledby="cookies" className="mt-8">
        <h2 id="cookies" className="text-xl font-bold text-[var(--foreground)]">
          쿠키 사용 가능성
        </h2>
        <p className="mt-3">
          향후 서비스 개선, 방문 통계 확인, 광고 운영을 위해 쿠키가 사용될 수 있습니다. 브라우저 설정을 통해 쿠키
          저장을 거부하거나 삭제할 수 있습니다.
        </p>
      </section>
      <section aria-labelledby="ads" className="mt-8">
        <h2 id="ads" className="text-xl font-bold text-[var(--foreground)]">
          광고 및 분석 도구
        </h2>
        <p className="mt-3">
          추후 Google AdSense, Google Analytics 같은 광고 및 분석 도구를 사용할 수 있습니다. 이 경우 해당 도구가
          쿠키, 기기 정보, 방문 기록 등 비식별 정보를 처리할 수 있으며, 관련 정책은 각 서비스의 개인정보 보호정책을
          따릅니다.
        </p>
      </section>
    </StaticPageShell>
  );
}
