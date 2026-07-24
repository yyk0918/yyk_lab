"use client";

import Link from "next/link";
import { User, Heart, Package, Settings, LogOut } from "lucide-react";

interface UserDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: User, label: "마이페이지", href: "/category/best" },
  { icon: Package, label: "주문내역", href: "/category/best" },
  { icon: Heart, label: "찜한 상품", href: "/product/1", badge: "12" },
  { icon: Settings, label: "회원정보 수정", href: "/category/best" },
];

export function UserDropdown({ isOpen, onClose }: UserDropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-30" onClick={onClose} />

      {/* Dropdown */}
      <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-[#ede8e2] z-40 py-2 animate-scale-in origin-top-right">
        {/* 로그인 전 */}
        <div className="px-4 py-3 border-b border-[#f0ece7]">
          <p className="text-xs text-[#999] mb-2">로그인하고 더 많은 혜택을 누려보세요!</p>
          <Link
            href="/category/anniversary"
            onClick={onClose}
            className="block w-full text-center py-2 bg-[#c9a88c] text-white rounded-lg text-sm font-bold hover:bg-[#a07850] transition-colors"
          >
            로그인
          </Link>
          <div className="flex justify-center gap-2 mt-2">
            <Link
              href="#"
              onClick={onClose}
              className="text-[11px] text-[#999] hover:text-[#6b6b6b]"
            >
              회원가입
            </Link>
            <span className="text-[11px] text-[#ddd]">|</span>
            <Link
              href="/category/event"
              onClick={onClose}
              className="text-[11px] text-[#999] hover:text-[#6b6b6b]"
            >
              아이디 찾기
            </Link>
            <span className="text-[11px] text-[#ddd]">|</span>
            <Link
              href="/category/event"
              onClick={onClose}
              className="text-[11px] text-[#999] hover:text-[#6b6b6b]"
            >
              비밀번호 찾기
            </Link>
          </div>
        </div>

        {/* 메뉴 */}
        <div className="py-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between px-4 py-2.5 text-sm text-[#2d2d2d] hover:bg-[#faf8f5] transition-colors"
            >
              <span className="flex items-center gap-3">
                <item.icon size={16} className="text-[#999]" />
                {item.label}
              </span>
              {item.badge && (
                <span className="text-[10px] font-bold text-[#c9a88c] bg-[#f7f1eb] px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* 로그아웃 */}
        <div className="border-t border-[#f0ece7] pt-1">
          <button
            onClick={onClose}
            className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-[#999] hover:bg-[#faf8f5] transition-colors"
          >
            <LogOut size={16} />
            로그아웃
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.15s ease-out;
        }
      `}</style>
    </>
  );
}
