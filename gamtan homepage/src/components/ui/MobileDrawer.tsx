"use client";

import Link from "next/link";
import { X, ChevronRight, ChevronDown, Sparkles } from "lucide-react";
import { navCategories, megaMenuSubCategories } from "@/lib/data";
import { useState } from "react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"menu" | "category">("menu");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#ede8e2]">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-[#c9a88c] flex items-center justify-center text-white text-xs font-extrabold">
              감
            </span>
            <span className="font-bold text-lg text-[#2d2d2d]">전체 메뉴</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#f5f0ea] rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* 탭 */}
        <div className="flex border-b border-[#ede8e2]">
          <button
            onClick={() => setActiveTab("menu")}
            className={`flex-1 py-3 text-sm font-bold transition-colors relative ${
              activeTab === "menu"
                ? "text-[#a07850] after:absolute after:bottom-0 after:left-1/4 after:right-1/4 after:h-0.5 after:bg-[#c9a88c] after:rounded-full"
                : "text-[#999]"
            }`}
          >
            메뉴
          </button>
          <button
            onClick={() => setActiveTab("category")}
            className={`flex-1 py-3 text-sm font-bold transition-colors relative ${
              activeTab === "category"
                ? "text-[#a07850] after:absolute after:bottom-0 after:left-1/4 after:right-1/4 after:h-0.5 after:bg-[#c9a88c] after:rounded-full"
                : "text-[#999]"
            }`}
          >
            카테고리
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-4">
            {activeTab === "menu" && (
              <ul className="space-y-1">
                {navCategories.map((cat) => (
                  <li key={cat.label}>
                    <Link
                      href={cat.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-[#faf8f5] transition-colors text-[#2d2d2d] font-medium group"
                    >
                      <span className="flex items-center gap-2">
                        {cat.label}
                        {cat.isNew && (
                          <span className="text-[10px] bg-[#e8c4c4] text-[#a05050] px-1.5 py-0.5 rounded-full font-bold">
                            NEW
                          </span>
                        )}
                      </span>
                      <ChevronRight
                        size={16}
                        className="text-[#ccc] group-hover:text-[#c9a88c] group-hover:translate-x-0.5 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "category" && (
              <div>
                {megaMenuSubCategories.map((group) => (
                  <div key={group.title} className="mb-1">
                    <button
                      onClick={() =>
                        setExpandedGroup(
                          expandedGroup === group.title ? null : group.title
                        )
                      }
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-all text-sm font-medium ${
                        expandedGroup === group.title
                          ? "bg-[#f7f1eb] text-[#a07850]"
                          : "hover:bg-[#faf8f5] text-[#a07850]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {/* 활성화된 그룹은 체크 표시 */}
                        {expandedGroup === group.title && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a88c]" />
                        )}
                        {group.title}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          expandedGroup === group.title ? "rotate-180 text-[#c9a88c]" : "text-[#ccc]"
                        }`}
                      />
                    </button>
                    {expandedGroup === group.title && (
                      <ul className="ml-4 pl-3 border-l-2 border-[#f0ece7] space-y-0.5 mb-2 animate-fade-in">
                        {group.items.map((item, idx) => (
                          <li key={item.name}>
                            <Link
                              href={`/category/${item.slug}`}
                              onClick={onClose}
                              className="flex items-center gap-2 p-2.5 text-sm text-[#6b6b6b] hover:text-[#c9a88c] hover:bg-[#faf8f5] rounded-lg transition-all"
                            >
                              <span className="text-[10px] text-[#ccc] w-4 text-center">
                                {idx + 1}
                              </span>
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#ede8e2] space-y-2">
          <Link
            href="#"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full text-center py-3 bg-[#c9a88c] text-white rounded-lg font-bold text-sm hover:bg-[#a07850] transition-colors"
          >
            <Sparkles size={15} />
            로그인 / 회원가입
          </Link>
          <div className="flex justify-center gap-3 text-[11px] text-[#999]">
            <Link href="#" onClick={onClose} className="hover:text-[#6b6b6b]">
              공지사항
            </Link>
            <span className="text-[#ddd]">|</span>
            <Link href="#" onClick={onClose} className="hover:text-[#6b6b6b]">
              고객센터
            </Link>
            <span className="text-[#ddd]">|</span>
            <Link href="#" onClick={onClose} className="hover:text-[#6b6b6b]">
              1:1 문의
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 300px;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
