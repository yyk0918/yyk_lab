"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { announcements } from "@/lib/data";

export function AnnouncementBar() {
  const [current, setCurrent] = useState(0);
  const total = announcements.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // 자동 롤링
  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="bg-[#e8d5c4] text-[#5d4030] text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center h-10 px-4">
        <button
          onClick={prev}
          className="absolute left-4 p-0.5 hover:bg-[#d4c0a8] rounded-full transition-colors"
          aria-label="이전"
        >
          <ChevronLeft size={14} />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {announcements.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="w-full flex-shrink-0 text-center font-medium tracking-tight hover:underline whitespace-nowrap px-8"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-4 p-0.5 hover:bg-[#d4c0a8] rounded-full transition-colors"
          aria-label="다음"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
