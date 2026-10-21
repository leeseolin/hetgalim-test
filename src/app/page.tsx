import type { Metadata } from "next";
import { HomePage } from "@/f1_pages/home/HomePage";
import { siteOpenGraph } from "@/f5_shared/config/siteMetadata";

const title = "헷갈리는 말 테스트 — 맞춤법 퀴즈와 정답 해설";
const description = "되/돼, 안/않 등 헷갈리는 맞춤법을 10문제씩 풀어보세요. 회원가입 없이 정답·해설과 20문제 종합 테스트를 제공합니다.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    ...siteOpenGraph,
    url: "/",
    title,
    description
  }
};

export default function Page() {
  return <HomePage />;
}
