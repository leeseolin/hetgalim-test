import { siteName, siteUrl } from "@/f5_shared/config/siteMetadata";

export function WebsiteStructuredData() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: "헷갈리는말테스트",
    url: siteUrl.href,
    inLanguage: "ko-KR"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(website).replace(/</g, "\\u003c")
      }}
    />
  );
}
