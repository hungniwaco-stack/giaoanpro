export interface AppInfo {
  slug: string;
  name: string;
  grades: string;
  description: string;
  href: string;
  status: "live" | "soon";
}

// ponytail: cập nhật href sang subdomain thật khi DNS đã trỏ xong.
export const APPS: AppInfo[] = [
  {
    slug: "cap1",
    name: "Giáo Án Pro — Cấp 1",
    grades: "Tiểu học · Lớp 1–5",
    description: "Soạn giáo án chuẩn chương trình Tiểu học, xuất Word/PowerPoint ngay.",
    href: "https://cap1.giaoanpro.com",
    status: "soon",
  },
  {
    slug: "cap2",
    name: "Giáo Án Pro — Cấp 2",
    grades: "THCS · Lớp 6–9",
    description: "Soạn giáo án chuẩn Công văn 5512, sách Kết nối tri thức, xuất Word/PowerPoint.",
    href: "https://cap2.giaoanpro.com",
    status: "live",
  },
  {
    slug: "cap3",
    name: "Giáo Án Pro — Cấp 3",
    grades: "THPT · Lớp 10–12",
    description: "Soạn giáo án chuẩn chương trình THPT, xuất Word/PowerPoint ngay.",
    href: "https://cap3.giaoanpro.com",
    status: "soon",
  },
];
