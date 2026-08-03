import type { AdPosition } from "@/f4_entities/quiz/types";

type AdPlaceholderProps = {
  position: AdPosition;
};

const labels: Record<AdPosition, string> = {
  top: "상단 광고 영역",
  middle: "중간 광고 영역",
  bottom: "하단 광고 영역"
};

export function AdPlaceholder({ position }: AdPlaceholderProps) {
  return (
    <aside
      className="my-8 grid min-h-24 place-items-center rounded-md border border-dashed border-[#c8c6bf] bg-[#eeeeea] px-4 py-6 text-sm text-[var(--muted)]"
      aria-label={labels[position]}
    >
      광고 영역
    </aside>
  );
}
