import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";

const SITE_URL = "https://giaoanpro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blog", "/dieu-khoan", "/chinh-sach-hoan-tien"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
  const postRoutes = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));
  return [...staticRoutes, ...postRoutes];
}
