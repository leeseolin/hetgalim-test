import type { Metadata } from "next";
import { HomePage } from "@/f1_pages/home/HomePage";

export const metadata: Metadata = {
  title: "헷갈리는 말 테스트 - 한국어 맞춤법 퀴즈",
  description: "되/돼, 안/않, 왠/웬 등 한국인이 자주 헷갈리는 맞춤법을 빠르게 테스트하고 해설을 확인하세요.",
  openGraph: {
    title: "헷갈리는 말 테스트",
    description: "자주 헷갈리는 한국어 표현을 짧은 퀴즈로 확인하는 정적 SEO형 맞춤법 테스트 사이트입니다."
  }
};

export default function Page() {
  return <HomePage />;
}
