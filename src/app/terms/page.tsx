import type { Metadata } from "next";
import { TermsPage } from "@/f1_pages/static/TermsPage";

export const metadata: Metadata = {
  title: "이용 안내",
  description: "헷갈리는 말 테스트의 이용 안내, 학습 참고용 고지, 콘텐츠 복제 금지, 서비스 변경 가능성을 안내합니다.",
  openGraph: {
    title: "이용 안내 - 헷갈리는 말 테스트",
    description: "퀴즈와 해설 이용 시 알아야 할 기본 안내를 제공합니다."
  }
};

export default function Page() {
  return <TermsPage />;
}
