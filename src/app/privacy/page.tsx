import type { Metadata } from "next";
import { PrivacyPage } from "@/f1_pages/static/PrivacyPage";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "헷갈리는 말 테스트의 개인정보처리방침과 쿠키, 광고, 분석 도구 사용 가능성을 안내합니다.",
  openGraph: {
    title: "개인정보처리방침 - 헷갈리는 말 테스트",
    description: "회원가입과 DB 저장 없이 운영되는 현재 정책 및 향후 광고·분석 도구 사용 가능성을 안내합니다."
  }
};

export default function Page() {
  return <PrivacyPage />;
}
