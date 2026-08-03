import Link from "next/link";

const navItems = [
  { href: "/", label: "테스트" },
  { href: "/about", label: "소개" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold" aria-label="헷갈리는 말 테스트 홈">
          <span className="brand-mark grid size-9 place-items-center rounded-lg text-base">ㅎ</span>
          <span className="text-lg sm:text-xl">헷갈리는 말 테스트</span>
        </Link>
        <nav aria-label="주요 메뉴">
          <ul className="flex items-center gap-3 text-sm font-semibold text-[var(--muted)] sm:gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-[var(--accent-strong)]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
