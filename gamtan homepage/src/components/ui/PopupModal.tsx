"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 오늘 하루 열지 않기 쿠키 체크
    const hidePopup = document.cookie.includes("popup-closed=1");
    if (!hidePopup) {
      const timer = setTimeout(() => setIsOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const closeForToday = () => {
    // 오늘 하루 동안 열지 않기 (쿠키 설정 - 자정까지)
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const expires = midnight.toUTCString();
    document.cookie = `popup-closed=1; expires=${expires}; path=/`;
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closePopup}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in">
        {/* 이미지 영역 */}
        <div className="bg-gradient-to-br from-[#f7f1eb] via-[#faf5f0] to-[#e8d5c4] h-48 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm font-bold text-[#a07850] mb-2">
              🎂 감탄스토어 5주년
            </p>
            <p className="text-3xl font-extrabold text-[#c9a88c] mb-2">
              WELCOME
            </p>
            <p className="text-sm text-[#6b6b6b]">
              신규 가입 시 3,000원 적립금 증정!
            </p>
          </div>
        </div>

        {/* 컨텐츠 */}
        <div className="p-6 text-center">
          <h3 className="text-lg font-extrabold text-[#2d2d2d] mb-2">
            지금 가입하고 혜택 받기
          </h3>
          <p className="text-sm text-[#999] mb-4">
            가입 즉시 사용 가능한 3,000원 적립금과
            <br />
            10% 할인 쿠폰팩을 드려요!
          </p>
          <a
            href="/category/anniversary"
            className="block w-full py-3 bg-[#c9a88c] text-white font-bold rounded-xl hover:bg-[#a07850] transition-colors mb-3"
            onClick={closePopup}
          >
            회원가입 하러가기
          </a>
        </div>

        {/* 하단 버튼 */}
        <div className="flex border-t border-[#ede8e2]">
          <button
            onClick={closeForToday}
            className="flex-1 py-3 text-xs text-[#999] hover:bg-[#faf8f5] transition-colors"
          >
            오늘 하루 동안 열지 않기
          </button>
          <div className="w-px bg-[#ede8e2]" />
          <button
            onClick={closePopup}
            className="flex items-center justify-center gap-1 flex-1 py-3 text-xs text-[#6b6b6b] hover:bg-[#faf8f5] transition-colors"
          >
            <X size={12} />
            닫기
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
