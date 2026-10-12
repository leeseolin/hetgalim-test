import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

function loadEntity(file) {
  const source = readFileSync(new URL(`../src/f4_entities/quiz/${file}.ts`, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
  const exports = {};
  runInNewContext(outputText, { exports });
  return exports;
}

const { quizzes } = loadEntity("quizzes");
const { additionalQuizzes, commonMistakesQuiz } = loadEntity("additionalQuizzes");
const { completeQuestion } = loadEntity("completeQuestion");
const { learningNotes } = loadEntity("learningNotes");
assert.equal(quizzes.length, 10);
assert.equal(additionalQuizzes.length, 20);
assert.equal(commonMistakesQuiz.questions.length, 20);

for (const quiz of [...quizzes, ...additionalQuizzes]) {
  assert.equal(quiz.questions.length, quizzes.includes(quiz) ? 10 : 5, quiz.slug);
  assert.ok(learningNotes[quiz.slug], `Missing learning note: ${quiz.slug}`);
  for (const question of quiz.questions) {
    assert.ok(question.choices.includes(question.answer), question.question);
    assert.equal(new Set(question.choices).size, question.choices.length);
    assert.match(question.question, /_{2,}/);
    assert.doesNotMatch(completeQuestion(question), /_{2,}|이로로|바래다다|성공 률|합격 률|경쟁 률/);
    assert.ok(question.explanation && question.wrongExplanation && question.reviewHref);
  }
}

function question(slug, number) {
  const quiz = [...quizzes, ...additionalQuizzes].find((entry) => entry.slug === slug);
  assert.ok(quiz, slug);
  return quiz.questions[number - 1];
}

const completions = [
  ["doe-dwae", 8, "이 정도면 충분히 설명이 되었다."],
  ["doe-dwae", 10, "이 문제는 곧 해결될 것이다."],
  ["bara-barae", 8, "밤길이 어두워서 친구를 집까지 바래다주었다."],
  ["machida-matchuda", 10, "선생님은 학생에게 수수께끼의 정답을 알아맞혀 보라고 했다."],
  ["roseo-rosse", 8, "이로써 모든 절차가 마무리되었습니다."],
  ["deunji-deonji", 1, "먹든지 말든지 마음대로 해."],
  ["yul-ryul", 1, "성공률이 높다."],
  ["eyo-yeyo", 2, "그 사람은 의사예요."],
  ["boeyo-bwaeyo", 5, "시간 괜찮으시면 오늘 봬요."]
];
for (const [slug, number, sentence] of completions) {
  assert.equal(completeQuestion(question(slug, number)), sentence, `${slug} ${number}`);
}

for (const [slug, number] of [["eyo-yeyo", 2], ["eyo-yeyo", 5], ["boeyo-bwaeyo", 5]]) {
  assert.match(question(slug, number).question, /줄여/);
}
for (const number of [2, 4, 6, 8, 10]) {
  assert.match(question("bandeusi-bandeusi", number).question, /모양을 뜻/);
}
for (const [index, item] of commonMistakesQuiz.questions.entries()) {
  const original = additionalQuizzes[index].questions[index % 5];
  assert.equal(item.question, original.question);
  assert.equal(item.answer, original.answer);
  assert.equal(item.reviewHref, `/guide/common-mistakes#${additionalQuizzes[index].slug}`);
}

console.log("PASS: 200 unique questions, 20 mixed questions, completed sentences and ambiguity regressions");
