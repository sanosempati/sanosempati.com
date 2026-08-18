"use client";

import type { Locale } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`inline-flex rounded-full border border-black/[0.08] bg-white/70 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {(["en", "id"] as Locale[]).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.06em] transition-colors ${
              active
                ? "bg-dh-dark text-white"
                : "text-dh-dark/60 hover:text-dh-dark"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
