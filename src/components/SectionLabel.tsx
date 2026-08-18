"use client";

import type { Bilingual } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export function SectionLabel({
  children,
  bilingual,
  tone = "dark",
}: {
  children?: string;
  bilingual?: Bilingual;
  tone?: "dark" | "light";
}) {
  const { t } = useLanguage();
  const color = tone === "light" ? "text-white" : "text-dh-dark";
  const labelText = bilingual ? t(bilingual).toLowerCase() : children;

  return (
    <div className={`mb-10 flex items-center gap-2 md:mb-14 ${color}`}>
      <span
        className={`inline-block size-2.5 shrink-0 ${
          tone === "light" ? "bg-white" : "bg-dh-dark"
        }`}
        aria-hidden
      />
      <span className="text-[0.8125rem] font-medium uppercase tracking-[0.08em] md:text-sm">
        {labelText}
      </span>
    </div>
  );
}
