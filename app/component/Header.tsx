"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiSearch, FiHelpCircle } from "react-icons/fi";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";

const ICON_BTN =
  "h-10 w-10 rounded-lg flex items-center justify-center transition-colors text-[#2F3B34] hover:text-[#417360] bg-transparent";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [lang, setLang] = useState("en");
  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }

  function changeLang(l: string) {
    setLang(l);
    localStorage.setItem("lang", l);
  }

  return (
    <header className="ml-17 h-16 bg-[#FAFFFA] fixed top-0 right-0 left-0 px-6 border-b border-gray-200 flex items-center justify-between z-20">
      <div className="flex items-center gap-3">
        <div>
          <h1 className="text-[#282E29] font-bold leading-none">Dua & Ruqyah</h1>
          <div className="text-xs text-[#6B6F6B] -mt-0.5">Hisnul Muslim</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <button
          aria-label="Search"
          className={ICON_BTN}
          onClick={() => setSearchOpen(true)}
          title="Search"
        >
          <FiSearch className="h-5 w-5" />
        </button>

        {/* Theme */}
        <button
          aria-label="Toggle theme"
          className={ICON_BTN}
          onClick={toggleTheme}
          title="Toggle theme"
        >
          {theme === "light" ? (
            <HiOutlineMoon className="h-5 w-5" />
          ) : (
            <HiOutlineSun className="h-5 w-5" />
          )}
        </button>

        {/* Language with small badge */}
        <div className="relative">
          <button
            aria-label="Language"
            className={ICON_BTN}
            onClick={() => changeLang(lang === "en" ? "ar" : "en")}
            title="Language"
          >
            <FaGlobe className="h-5 w-5" />
          </button>
          <span className="absolute -top-1 -right-1 min-w-[1.2rem] px-1 text-[10px] leading-none rounded-full bg-white border text-[#2F3B34]">
            {lang.toUpperCase()}
          </span>
        </div>

        {/* Support */}
        <a
          href="mailto:support@example.com"
          className={`${ICON_BTN}`}
          title="Support"
        >
          <FiHelpCircle className="h-5 w-5" />
        </a>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-start justify-center z-30 p-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="mt-20 w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <FiSearch className="h-5 w-5 text-gray-500" />
              <input
                ref={searchRef}
                placeholder="Search..."
                className="w-full bg-transparent outline-none text-gray-900 dark:text-gray-100"
              />
              <button
                className="ml-2 px-3 py-1 rounded bg-[#417360] text-white"
                onClick={() => setSearchOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}