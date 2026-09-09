export interface TroLyItem {
  label: string;
  geminiUrl: string;
}

export interface TroLySubject {
  subjectLabel: string;
  items: TroLyItem[];
}

export interface TroLyCap {
  capLabel: string;
  subjects: TroLySubject[];
}

export const TRO_LY_CATALOG: TroLyCap[] = [
  {
    capLabel: "Cấp 2 — THCS",
    subjects: [
      {
        subjectLabel: "Địa lí",
        items: [
          { label: "Trợ lý học tập tích hợp Lịch sử và Địa lí — Lớp 6", geminiUrl: "https://gemini.google.com/gem/1ozTGbqu6HY75-CNaezWdwxPIOEvjKSRQ?usp=sharing" },
          { label: "Trợ lý học tập tích hợp Lịch sử và Địa lí — Lớp 7", geminiUrl: "https://gemini.google.com/gem/12FaAhN9MUAj1llSjUEw_zhl8tBFU5_fp?usp=sharing" },
          { label: "Trợ lý học tập tích hợp Lịch sử và Địa lí — Lớp 8", geminiUrl: "https://gemini.google.com/gem/1LE3-oosyWYcDSbQPCj_AtmY441MW4wdX?usp=sharing" },
          { label: "Trợ lý học tập tích hợp Lịch sử và Địa lí — Lớp 9", geminiUrl: "https://gemini.google.com/gem/1zTMGUWVUCzu_Byf_MV8TZOvoN9MLYqE_?usp=sharing" },
        ],
      },
    ],
  },
];
