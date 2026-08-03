# 헷갈리는 말 테스트

한국인이 자주 헷갈리는 맞춤법과 표현을 짧은 퀴즈로 익히는 정적 웹 서비스입니다. 긴 문법 설명을 읽기 전에 문제를 풀고, 결과 화면에서 오답과 해설을 함께 확인할 수 있습니다.

**[서비스 바로가기](https://hetgalim-test-chi.vercel.app)**

## 주요 기능

- 표현별 10문제 객관식 퀴즈와 진행률 표시
- 점수 계산, 오답 모아보기, 문제별 해설
- 퀴즈별 10초 요약, 구분법, 실제 예문
- 관련 테스트 추천과 모바일 반응형 화면
- 정적 경로 생성, 동적 메타데이터, sitemap, robots.txt

## 설계

퀴즈 콘텐츠를 데이터 객체로 관리합니다. 새 퀴즈를 추가하면 메인 목록, 상세 페이지, 관련 테스트, 정적 경로와 sitemap에 자동으로 반영됩니다.

```text
src/app          라우팅과 메타데이터
src/f1_pages     페이지 구성
src/f2_widgets   퀴즈 진행과 결과 UI
src/f4_entities  퀴즈 데이터와 도메인 타입
src/f5_shared    공통 UI
```

## 기술

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## 로컬 실행

```bash
pnpm install
pnpm dev
```

검증 명령어:

```bash
pnpm build
pnpm lint
```

## 콘텐츠 추가

`src/f4_entities/quiz/quizzes.ts`에 `Quiz` 객체를 추가합니다. `slug`, `keyword`, `title`, `description`, `summary`, `tenSecondSummary`, `seoContent`, `examples`, `questions`가 필요합니다.

## 안내

이 사이트의 내용은 맞춤법 학습을 돕기 위한 참고 자료입니다. 중요한 문서는 국립국어원 또는 공식 사전을 함께 확인해주세요.
