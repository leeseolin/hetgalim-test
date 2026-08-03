import type { Metadata } from "next";
import { AboutPage } from "@/f1_pages/static/AboutPage";

export const metadata: Metadata = {
  title: "사이트 소개",
  description: "헷갈리는 말 테스트는 헷갈리는 한국어 표현을 퀴즈로 빠르게 확인하는 사이트입니다.",
  openGraph: {
    title: "사이트 소개 - 헷갈리는 말 테스트",
    description: "맞춤법과 표현 차이를 짧은 퀴즈와 해설로 확인하는 사이트의 목적과 사용 방법을 안내합니다."
  }
};

export default function Page() {
  return <AboutPage />;
}
