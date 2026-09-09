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
        subjectLabel: "Lịch sử & Địa lí",
        items: [
          { label: "Trợ lý học tập tích hợp Lịch sử và Địa lí — Lớp 6", geminiUrl: "https://gemini.google.com/gem/1ozTGbqu6HY75-CNaezWdwxPIOEvjKSRQ?usp=sharing" },
          { label: "Trợ lý học tập tích hợp Lịch sử và Địa lí — Lớp 7", geminiUrl: "https://gemini.google.com/gem/12FaAhN9MUAj1llSjUEw_zhl8tBFU5_fp?usp=sharing" },
          { label: "Trợ lý học tập tích hợp Lịch sử và Địa lí — Lớp 8", geminiUrl: "https://gemini.google.com/gem/1LE3-oosyWYcDSbQPCj_AtmY441MW4wdX?usp=sharing" },
          { label: "Trợ lý học tập tích hợp Lịch sử và Địa lí — Lớp 9", geminiUrl: "https://gemini.google.com/gem/1zTMGUWVUCzu_Byf_MV8TZOvoN9MLYqE_?usp=sharing" },
        ],
      },
      {
        subjectLabel: "Công nghệ",
        items: [
          { label: "Trợ lý học tập môn Công nghệ — Lớp 6", geminiUrl: "https://gemini.google.com/gem/1nfrGWNMQArIcZTF4yf2ME3Th-Ik8gpGy?usp=sharing" },
          { label: "Trợ lý học tập môn Công nghệ — Lớp 7", geminiUrl: "https://gemini.google.com/gem/17D8xNZXOf-w1zNrXAy6GscoN-nyHqHuu?usp=sharing" },
          { label: "Trợ lý học tập môn Công nghệ — Lớp 8", geminiUrl: "https://gemini.google.com/gem/14LNW-KHz9aB8EuMzYfkGCT0Eoce0YBTC?usp=sharing" },
          { label: "Trợ lý học tập môn Công nghệ — Lớp 9", geminiUrl: "https://gemini.google.com/gem/1mTuxTMe5Mgp9c99E5dr2udBIo2H0LpwJ?usp=sharing" },
        ],
      },
    ],
  },
];
