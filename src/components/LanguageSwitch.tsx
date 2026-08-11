"use client";

import { useLocale, useTranslations } from "@/lib/i18n";
import { LOCALES } from "@/lib/translations";

const BUTTON_W = 30;

export default function LanguageSwitch({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const t = useTranslations("language");
  const activeIndex = LOCALES.findIndex((l) => l.code === locale);

  return (
    <div
      role="tablist"
      aria-label={t.label}
      className={`relative flex shrink-0 items-center rounded-full border border-[var(--agency-border)] bg-[var(--agency-white)] p-[3px] ${className}`}
    >
      <span
        aria-hidden
        className="absolute top-[3px] bottom-[3px] left-[3px] rounded-full bg-[var(--agency-blue)] transition-transform duration-300 ease-out"
        style={{ width: BUTTON_W, transform: `translateX(${activeIndex * BUTTON_W}px)` }}
      />
      {LOCALES.map((option) => {
        const active = option.code === locale;
        return (
          <button
            key={option.code}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => setLocale(option.code)}
            style={{ width: BUTTON_W }}
            className={`relative z-10 flex h-[22px] shrink-0 cursor-pointer items-center justify-center rounded-full text-[11px] font-semibold tracking-wide transition-colors ${
              active
                ? "text-white"
                : "text-[var(--agency-body)] hover:text-[var(--agency-heading)]"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
