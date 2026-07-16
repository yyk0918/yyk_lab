"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "회사소개", href: "/company" },
  { label: "컨설팅", href: "/consulting" },
  { label: "교육 서비스", href: "/education" },
  { label: "M365 서비스", href: "/m365" },
  { label: "문의하기", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-primary"
        >
          IT Climbing
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-text-gray transition-colors hover:bg-blue-50 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#"
            className="ml-3 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            회사소개서 다운로드
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="메뉴 열기"
        >
          <span
            className={`block h-0.5 w-6 rounded bg-text-dark transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-text-dark transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-text-dark transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 border-t border-border" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 bg-white px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-text-gray transition-colors hover:bg-blue-50 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#"
            className="mt-2 rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-primary-dark"
          >
            회사소개서 다운로드
          </a>
        </nav>
      </div>
    </header>
  );
}
