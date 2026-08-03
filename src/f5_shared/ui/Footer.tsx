import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "사이트 소개" },
  { href: "/privacy", label: "개인정보 처리방침" },
  { href: "/terms", label: "이용약관" }
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#f8f9fb]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© 2026 헷갈리는 말 테스트. 학습 참고용 콘텐츠입니다.</p>
        <nav aria-label="푸터 메뉴">
          <ul className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-[var(--accent-strong)]" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
