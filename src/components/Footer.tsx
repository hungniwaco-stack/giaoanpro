const SUPPORT_EMAIL = "hungniwaco@gmail.com";
const SUPPORT_PHONE = "0944 851719";
const ZALO_LINK = "https://zalo.me/0944851719";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/10 px-4 py-8 text-center text-xs text-ink-muted">
      <p>© {new Date().getFullYear()} Giáo Án Pro. Công cụ AI hỗ trợ soạn giáo án, không thay thế đánh giá chuyên môn của giáo viên.</p>
      <p className="mt-2">Biên soạn: Nguyễn Hữu Hùng</p>
      <p className="mt-2">
        Điện thoại/Zalo:{" "}
        <a href={ZALO_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-pine-dark">{SUPPORT_PHONE}</a>
        <span className="mx-2">·</span>
        <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-pine-dark">{SUPPORT_EMAIL}</a>
      </p>
    </footer>
  );
}
