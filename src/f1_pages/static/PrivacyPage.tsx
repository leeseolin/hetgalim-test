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
          쿠키와 Google 광고 서비스
        </h2>
        <p className="mt-3">
          이 사이트는 Google AdSense 연결 및 사이트 심사를 위해 Google 광고 태그를 사용합니다. 광고가 표시되지 않는
          기간에도 광고 태그가 Google 서버에 연결될 수 있습니다. Google과 제3자 광고 사업자는 쿠키, 웹 비콘, IP 주소
          또는 이와 유사한 식별자를 사용하여 광고 제공, 부정 사용 방지, 성과 측정을 수행할 수 있습니다.
        </p>
      </section>
      <section aria-labelledby="ads" className="mt-8">
        <h2 id="ads" className="text-xl font-bold text-[var(--foreground)]">
          광고 개인 최적화와 선택권
        </h2>
        <p className="mt-3">
          Google은 사용자의 이 사이트 및 다른 웹사이트 방문 기록을 바탕으로 개인 맞춤 광고를 제공할 수 있습니다.
          사용자는 Google 광고 설정에서 개인 맞춤 광고를 끄거나 브라우저 설정에서 쿠키를 차단·삭제할 수 있습니다.
        </p>
        <ul className="mt-3 space-y-2 font-semibold text-[var(--accent-strong)]">
          <li><a href="https://adssettings.google.com/" target="_blank" rel="noreferrer">Google 광고 설정 ↗</a></li>
          <li><a href="https://policies.google.com/technologies/partner-sites?hl=ko" target="_blank" rel="noreferrer">Google 파트너 사이트의 데이터 사용 방식 ↗</a></li>
        </ul>
      </section>
      <section aria-labelledby="contact" className="mt-8">
        <h2 id="contact" className="text-xl font-bold text-[var(--foreground)]">문의 및 변경 안내</h2>
        <p className="mt-3">
          개인정보 또는 사이트 운영에 관한 문의는
          {" "}<a className="font-bold text-[var(--accent-strong)]" href="https://github.com/leeseolin/hetgalim-test/issues" target="_blank" rel="noreferrer">공개 이슈 페이지</a>를 이용해 주세요.
          정책 내용이 변경되면 이 페이지와 시행일을 함께 갱신합니다.
        </p>
        <p className="mt-3 text-sm">시행일: 2026년 8월 27일</p>
      </section>
    </StaticPageShell>
  );
}
