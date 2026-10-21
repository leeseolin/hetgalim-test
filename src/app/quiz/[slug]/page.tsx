import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { QuizDetailPage } from "@/f1_pages/quiz-detail/QuizDetailPage";
import { additionalQuizzes } from "@/f4_entities/quiz/additionalQuizzes";
import { getQuizBySlug, quizzes } from "@/f4_entities/quiz/quizzes";
import type { QuizSlug } from "@/f4_entities/quiz/types";
import { siteOpenGraph } from "@/f5_shared/config/siteMetadata";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return quizzes.map((quiz) => ({
    slug: quiz.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug as QuizSlug);

  if (!quiz) {
    return {
      title: "테스트를 찾을 수 없습니다",
      robots: { index: false, follow: true }
    };
  }

  return {
    title: quiz.title,
    description: quiz.description,
    keywords: [quiz.keyword, "맞춤법 테스트", "한국어 퀴즈", "헷갈리는 말"],
    alternates: {
      canonical: `/quiz/${quiz.slug}`
    },
    openGraph: {
      ...siteOpenGraph,
      title: quiz.title,
      description: quiz.description,
      type: "article"
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug as QuizSlug);

  if (!quiz) {
    const guideEntry = additionalQuizzes.find((entry) => entry.slug === slug);

    if (guideEntry) {
      permanentRedirect(`/guide/common-mistakes#${guideEntry.slug}`);
    }

    notFound();
  }

  return <QuizDetailPage quiz={quiz} />;
}
