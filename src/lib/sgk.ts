export interface SgkGrade {
  label: string;
  driveUrl: string | null;
}

export interface SgkCap {
  capLabel: string;
  grades: SgkGrade[];
}

export const SGK_CATALOG: SgkCap[] = [
  {
    capLabel: "Cấp 1 — Tiểu học",
    grades: [
      { label: "SGK Lớp 1", driveUrl: "https://drive.google.com/drive/folders/1U9T7I3zY8mRCx2_L4tNLsbMnND8JEwmL?usp=sharing" },
      { label: "SGK Lớp 2", driveUrl: "https://drive.google.com/drive/folders/1PGiaZGt-fPYOuGlejRkV8rWLz_crh7rr?usp=sharing" },
      { label: "SGK Lớp 3", driveUrl: "https://drive.google.com/drive/folders/1SoXlJharWtdHUUJvXlF_JWWrqEDLy3ae?usp=sharing" },
      { label: "SGK Lớp 4", driveUrl: "https://drive.google.com/drive/folders/1FZldG2jXLu8fxPdORRJpRsnPpQN7wGI-?usp=sharing" },
      { label: "SGK Lớp 5", driveUrl: "https://drive.google.com/drive/folders/1pTk9IegQOCkL4As9cRvyX-FZjluchr4R?usp=sharing" },
    ],
  },
  {
    capLabel: "Cấp 2 — THCS",
    grades: [
      { label: "SGK Lớp 6", driveUrl: "https://drive.google.com/drive/folders/1hxk3Z4mvdwGDCUmjDKDvzZn0njg8MNXQ?usp=sharing" },
      { label: "SGK Lớp 7", driveUrl: "https://drive.google.com/drive/folders/1TXep3yv9HdAij4AxLoFilrosTTx4rnmk?usp=sharing" },
      { label: "SGK Lớp 8", driveUrl: "https://drive.google.com/drive/folders/1j9igSs_zto1xsBYnvmr-zx3rkvqD-T1R?usp=sharing" },
      { label: "SGK Lớp 9", driveUrl: "https://drive.google.com/drive/folders/1RozSQZeCIiKyWIqs4KOkWCKU9r97CC6V?usp=sharing" },
    ],
  },
  {
    capLabel: "Cấp 3 — THPT",
    grades: [
      { label: "SGK Lớp 10", driveUrl: null },
      { label: "SGK Lớp 11", driveUrl: null },
      { label: "SGK Lớp 12", driveUrl: "https://drive.google.com/drive/folders/1ihOhlCtwg56L1MRtrdEfili-4FLiJizx?usp=sharing" },
    ],
  },
];
