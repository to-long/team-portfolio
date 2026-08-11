"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "@/lib/i18n";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";

const navLinks = ["about", "services", "team", "blog"] as const;

export default function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--agency-white)] border-b border-[var(--agency-border)]">
      <div className="flex items-center justify-between gap-[16px] px-[20px] md:px-[40px] lg:px-[120px] h-[52px] md:h-[60px] max-w-[1200px] mx-auto">
        {/* Same TM mark as the favicon, drawn in markup rather than fetched —
            at this size an image request costs more than the element does. */}
        <a href="/" className="flex shrink-0 items-center gap-[8px]">
          <span
            aria-hidden
            className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[7px] bg-[var(--agency-blue)] text-[11px] font-bold tracking-[-0.5px] text-white"
          >
            TM
          </span>
          <span className="whitespace-nowrap text-[18px] md:text-[20px] font-bold text-[var(--agency-heading)]">
            Teamotion
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-[28px] h-full">
          {navLinks.map((l) => (
            <a
              key={l}
              href={`/#${l}`}
              className="whitespace-nowrap text-[14px] font-medium text-[var(--agency-body)] hover:text-[var(--agency-heading)] transition-colors"
            >
              {t[l]}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex shrink-0 items-center gap-[12px]">
          <LanguageSwitch />
          <ThemeToggle />
          <a
            href="/#contact"
            className="flex items-center justify-center whitespace-nowrap rounded-[4px] bg-[var(--agency-blue)] px-[20px] py-[8px] text-[13px] font-semibold text-white"
          >
            {t.contactCta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.closeMenu : t.openMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex lg:hidden items-center justify-center w-[34px] h-[34px] rounded-[8px] border border-[var(--agency-border)] text-[var(--agency-heading)]"
        >
          {open ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
        </button>
      </div>

      {open ? (
        <>
          <button
            type="button"
            tabIndex={-1}
            aria-hidden
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-[52px] md:top-[60px] z-40 cursor-default bg-[color-mix(in_srgb,var(--agency-dark)_35%,transparent)] lg:hidden"
          />
          <div
            id="mobile-menu"
            className="relative z-50 max-h-[calc(100vh-52px)] md:max-h-[calc(100vh-60px)] overflow-y-auto border-t border-[var(--agency-border)] bg-[var(--agency-white)] shadow-[0_24px_48px_-12px_rgba(9,14,52,0.25)] lg:hidden"
          >
            <div className="flex flex-col gap-[2px] px-[20px] md:px-[40px] py-[8px]">
              {navLinks.map((l) => (
                <a
                  key={l}
                  href={`/#${l}`}
                  onClick={() => setOpen(false)}
                  className="rounded-[6px] px-[10px] py-[7px] text-[14px] font-medium text-[var(--agency-body)] hover:bg-[var(--agency-blue-light)] hover:text-[var(--agency-heading)] transition-colors"
                >
                  {t[l]}
                </a>
              ))}
              <div className="flex items-center gap-[10px] px-[10px] pt-[8px] pb-[2px]">
                <LanguageSwitch />
                <ThemeToggle />
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="ml-auto flex items-center justify-center whitespace-nowrap rounded-[4px] bg-[var(--agency-blue)] px-[16px] py-[8px] text-[13px] font-semibold text-white"
                >
                  {t.contactCta}
                </a>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
