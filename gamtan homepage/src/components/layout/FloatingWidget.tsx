"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";

export function FloatingWidget() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 md:right-8 bottom-6 md:bottom-10 z-50 flex flex-col gap-3">
      {/* 최상단 이동 버튼 */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-white border border-[#ede8e2] shadow-lg flex items-center justify-center text-[#6b6b6b] hover:bg-[#faf8f5] hover:text-[#c9a88c] hover:border-[#c9a88c] transition-all animate-fade-in"
          aria-label="최상단으로 이동"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* 카카오톡 1:1 상담 */}
      <a
        href="https://pf.kakao.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-[#fae100] shadow-lg flex items-center justify-center text-[#3a1d1d] hover:bg-[#ffe812] hover:scale-110 transition-all"
        aria-label="카카오톡 1:1 상담"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
