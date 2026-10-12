import type { LearningNote as LearningNoteModel } from "@/f4_entities/quiz/learningNotes";

export function LearningNote({ note }: { note: LearningNoteModel | undefined }) {
  if (!note) return null;
  return (
    <aside className="mt-5 rounded-md border border-[var(--line)] bg-[#fbfbf8] p-5 text-sm leading-7">
      <h4 className="font-bold">헷갈리는 예외와 비교</h4>
      <p className="mt-2 text-[var(--muted)]">{note.caution}</p>
      <p className="mt-3 font-semibold text-[var(--accent-strong)]">{note.comparison}</p>
      <ul className="mt-3 space-y-1 text-[var(--muted)]">
        {note.sources.map((source) => (
          <li key={source.url}><a className="underline underline-offset-4" href={source.url} target="_blank" rel="noreferrer">공식 근거: {source.label} ↗</a></li>
        ))}
      </ul>
      {note.sources.length === 0 && <p className="mt-3 text-[var(--muted)]">공식 상세 근거 링크는 추가 확인 중입니다.</p>}
    </aside>
  );
}
