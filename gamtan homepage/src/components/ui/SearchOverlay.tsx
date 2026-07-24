"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const hotKeywords = [
  "감탄브라", "에어쿨", "여름 인견", "노와이어", "주니어 브라",
  "스포츠 브라", "맨즈 드로즈", "오얏 컬렉션", "26SS 신상", "세트 할인",
];

const recentSearches = ["인견쿨 브라", "여름 홈웨어", "노와이어 추천"];

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="absolute left-0 right-0 top-full bg-white border-b border-[#ede8e2] shadow-xl z-40 animate-slide-down">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* 검색 입력창 */}
        <div className="relative mb-6">
          <input
            ref={inputRef}
            type="text"
            placeholder="어떤 상품을 찾으시나요?"
            className="w-full h-12 px-5 pr-12 rounded-xl border-2 border-[#c9a88c] text-sm outline-none focus:shadow-lg focus:shadow-[#c9a88c]/15 transition-shadow"
          />
          <button
            onClick={onClose}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-[#f5f0ea] rounded-full"
          >
            <X size={16} className="text-[#999]" />
          </button>
        </div>

        {/* 최근 검색어 */}
        {recentSearches.length > 0 && (
          <div className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-[#2d2d2d]">최근 검색어</h4>
              <button className="text-[10px] text-[#999] hover:text-[#6b6b6b]">
                전체 삭제
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((keyword) => (
                <button
                  key={keyword}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f7f1eb] text-xs text-[#6b6b6b] rounded-full hover:bg-[#e8d5c4] hover:text-[#a07850] transition-colors"
                >
                  {keyword}
                  <X size={10} className="text-[#ccc]" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 인기 검색어 */}
        <div>
          <h4 className="text-xs font-bold text-[#2d2d2d] mb-3">인기 검색어</h4>
          <div className="flex flex-wrap gap-2">
            {hotKeywords.map((keyword, i) => (
              <Link
                key={keyword}
                href={`/category/best`}
                onClick={onClose}
                className={`px-3 py-1.5 text-xs rounded-full transition-colors ${
                  i < 3
                    ? "bg-[#c9a88c] text-white font-bold hover:bg-[#a07850]"
                    : "bg-[#faf8f5] text-[#6b6b6b] hover:bg-[#f0ece7]"
                }`}
              >
                <span className="mr-1 text-[10px] font-extrabold">{i + 1}</span>
                {keyword}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
