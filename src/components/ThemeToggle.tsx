"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";
import { useTranslations } from "@/lib/i18n";

export const THEME_STORAGE_KEY = "teamotion-theme";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const t = useTranslations("theme");
  const [isDark, setIsDark] = useState(false);

  // The inline script in layout.tsx already set the class before hydration;
  // mirror it into React state so the knob starts in the right position.
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const next: Theme = isDark ? "light" : "dark";
    const root = document.documentElement;
    root.style.setProperty("--theme-x", `${e.clientX}px`);
    root.style.setProperty("--theme-y", `${e.clientY}px`);

    const run = () => {
      applyTheme(next);
      setIsDark(next === "dark");
    };

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => {
        ready: Promise<void>;
        finished: Promise<void>;
        updateCallbackDone: Promise<void>;
      };
    };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (doc.startViewTransition && !reduceMotion) {
      // A transition can be aborted (e.g. toggling again while one is running).
      // The theme still applies, so swallow the rejections instead of letting
      // them surface as unhandled.
      const transition = doc.startViewTransition(run);
      const ignore = () => {};
      transition.ready.catch(ignore);
      transition.finished.catch(ignore);
      transition.updateCallbackDone.catch(ignore);
    } else {
      run();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={t.toggle}
      aria-pressed={isDark}
      className={`relative flex shrink-0 cursor-pointer items-center rounded-full border border-[var(--agency-border)] bg-[var(--agency-white)] p-[3px] ${className}`}
    >
      <span
        aria-hidden
        className="absolute top-[3px] left-[3px] h-[22px] w-[22px] rounded-full bg-[var(--agency-blue)] transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${isDark ? 22 : 0}px)` }}
      />
      <span
        className={`relative z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full transition-colors ${
          isDark ? "text-[var(--agency-body)]" : "text-white"
        }`}
      >
        <Sun className="w-[14px] h-[14px]" />
      </span>
      <span
        className={`relative z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full transition-colors ${
          isDark ? "text-white" : "text-[var(--agency-body)]"
        }`}
      >
        <Moon className="w-[14px] h-[14px]" />
      </span>
    </button>
  );
}
