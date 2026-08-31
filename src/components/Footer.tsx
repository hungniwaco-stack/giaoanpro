const SUPPORT_EMAIL = "hotro@example.com"; // ponytail: thay bằng email hỗ trợ thật
const ZALO_LINK = "https://zalo.me/"; // ponytail: thay bằng link Zalo thật

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/10 px-4 py-8 text-center text-xs text-ink-muted">
      <p>© {new Date().getFullYear()} Giáo Án Pro. Công cụ AI hỗ trợ soạn giáo án, không thay thế đánh giá chuyên môn của giáo viên.</p>
      <p className="mt-2">
        <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-pine-dark">{SUPPORT_EMAIL}</a>
        <span className="mx-2">·</span>
        <a href={ZALO_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-pine-dark">Zalo</a>
      </p>
    </footer>
  );
}
