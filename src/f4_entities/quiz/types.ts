export type QuizSlug =
  | "doe-dwae"
  | "an-ahn"
  | "waen-wen"
  | "eotteoke-eotteokhae"
  | "approval-payment"
  | "myeochil-myeotil"
  | "bara-barae"
  | "machida-matchuda"
  | "roseo-rosse"
  | "bandeusi-bandeusi"
  | "natda-nata"
  | "dae-de"
  | "deunji-deonji"
  | "yul-ryul"
  | "eyo-yeyo"
  | "boeyo-bwaeyo"
  | "itdaga-ittaga"
  | "itda-ilda"
  | "buchida-butchida"
  | "gachi-gati"
  | "hameuro-hamuro"
  | "oraenman-oraetman"
  | "geumse-geumsae"
  | "kkaekkeusi-kkaekkeushi"
  | "iriri-irirhi"
  | "gomgomi-gomgomhi"
  | "tongjjaero-tongchaero"
  | "huihan-huian"
  | "eoi-eoui"
  | "seolgeoji-seolgeoji";

export type QuizQuestion = {
  question: string;
  choices: string[];
  answer: string;
  explanation: string;
};

export type Quiz = {
  slug: QuizSlug;
  keyword: string;
  name: string;
  title: string;
  description: string;
  summary: string;
  tenSecondSummary: string;
  seoContent: string;
  examples: string[];
  questions: QuizQuestion[];
};

export type AdPosition = "top" | "middle" | "bottom";
