import Link from "next/link";
import { FAQS } from "@/lib/faq";

// <details> gốc của trình duyệt: mở/đóng không cần JavaScript, đọc được bằng bàn phím.
export default function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 pb-20">
      <h2 className="font-display text-2xl font-semibold text-ink">Câu hỏi thường gặp</h2>
      <div className="mt-6 divide-y divide-ink/10 overflow-hidden rounded-2xl border border-ink/10 bg-paper-card">
        {FAQS.map((item) => (
          <details key={item.question} className="group px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink [&::-webkit-details-marker]:hidden">
              {item.question}
              <span aria-hidden="true" className="shrink-0 text-lg text-pine transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.answer}</p>
            {item.link && (
              <Link href={item.link.href} className="mt-2 inline-block text-sm font-medium text-pine hover:text-pine-dark">
                {item.link.label} →
              </Link>
            )}
          </details>
        ))}
      </div>
    </section>
  );
}
