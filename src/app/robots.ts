import type { MetadataRoute } from "next";

// www là domain thật sự phục vụ trang (apex 308-redirect sang www).
const SITE_URL = "https://www.giaoanpro.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Trang là tài nguyên miễn phí, mục tiêu là được AI trích dẫn/giới thiệu
      // càng nhiều càng tốt — nên cho phép cả bot huấn luyện lẫn bot tra cứu
      // thời gian thực của AI, không chặn cái nào.
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
