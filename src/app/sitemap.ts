import type { MetadataRoute } from "next";
import { quizzes } from "@/f4_entities/quiz/quizzes";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hetgalim-quiz.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/privacy", "/terms"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.6
  }));

  const quizRoutes = quizzes.map((quiz) => ({
    url: `${siteUrl}/quiz/${quiz.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  return [...staticRoutes, ...quizRoutes];
}
