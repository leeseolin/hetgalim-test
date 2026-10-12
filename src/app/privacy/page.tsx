import type { Metadata } from "next";
import { PrivacyPage } from "@/f1_pages/static/PrivacyPage";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "헷갈리는 말 테스트의 개인정보처리방침과 Google 광고 쿠키, 데이터 사용 및 광고 설정 방법을 안내합니다.",
  alternates: {
    canonical: "/privacy"
  },
  openGraph: {
    title: "개인정보처리방침 - 헷갈리는 말 테스트",
    description: "회원가입과 DB 저장 없이 운영되는 현재 정책 및 Google 광고 서비스의 데이터 사용 방식을 안내합니다."
  }
};

export default function Page() {
  return <PrivacyPage />;
}
