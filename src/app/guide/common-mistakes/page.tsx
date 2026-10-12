import type { Metadata } from "next";
import { CommonMistakesGuidePage } from "@/f1_pages/guide/CommonMistakesGuidePage";

export const metadata: Metadata = {
  title: "자주 틀리는 맞춤법 20개 총정리와 종합 테스트",
  description: "낫다/낳다, 든지/던지, 에요/예요처럼 자주 틀리는 맞춤법 20개를 예문과 해설, 종합 테스트로 익혀보세요.",
  alternates: {
    canonical: "/guide/common-mistakes"
  },
  openGraph: {
    title: "자주 틀리는 맞춤법 20개 총정리",
    description: "일상에서 자주 틀리는 표현 20개를 한 번에 점검하고 표현별 예문으로 복습합니다.",
    type: "article"
  }
};

export default function Page() {
  return <CommonMistakesGuidePage />;
}
