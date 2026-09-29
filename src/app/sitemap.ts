import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";

// www là domain thật sự phục vụ trang (apex 308-redirect sang www) — dùng URL này
// trong sitemap để Googlebot không phải đi qua một lượt chuyển hướng cho mỗi URL.
const SITE_URL = "https://www.giaoanpro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blog", "/mien-phi", "/dieu-khoan", "/chinh-sach-hoan-tien", "/danh-muc-sgk", "/tro-ly-hoc-tap"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
  const postRoutes = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));
  return [...staticRoutes, ...postRoutes];
}
