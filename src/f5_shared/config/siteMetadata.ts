export const siteName = "헷갈리는 말 테스트";
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hetgalim-test-chi.vercel.app"
);

export const siteOpenGraph = {
  siteName,
  locale: "ko_KR",
  type: "website" as const,
  images: [{
    url: "/opengraph-image.png",
    width: 1200,
    height: 630,
    alt: "헷갈리는 말 테스트 — 되/돼, 안/않을 퀴즈와 해설로 익히는 한국어 맞춤법 테스트"
  }]
};
