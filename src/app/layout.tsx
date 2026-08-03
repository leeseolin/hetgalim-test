import type { Metadata } from "next";
import { Footer } from "@/f5_shared/ui/Footer";
import { Header } from "@/f5_shared/ui/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://hetgalim-quiz.vercel.app"),
  title: {
    default: "헷갈리는 말 테스트",
    template: "%s | 헷갈리는 말 테스트"
  },
  description: "한국인이 자주 헷갈리는 맞춤법과 표현을 짧은 퀴즈로 확인하는 사이트입니다.",
  other: {
    "google-adsense-account": "ca-pub-5220732377881882"
  },
  verification: {
    other: {
      "naver-site-verification": "37ba0bde148f902a4bbcd1c9dc3ae4ebf746b3c7"
    }
  },
  openGraph: {
    title: "헷갈리는 말 테스트",
    description: "되/돼, 안/않, 왠/웬처럼 헷갈리는 한국어 표현을 퀴즈로 확인해보세요.",
    siteName: "헷갈리는 말 테스트",
    locale: "ko_KR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
