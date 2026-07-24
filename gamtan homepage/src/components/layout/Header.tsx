"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { navCategories, megaMenuSubCategories } from "@/lib/data";
import { MobileDrawer } from "@/components/ui/MobileDrawer";
import { SearchOverlay } from "@/components/ui/SearchOverlay";
import { UserDropdown } from "@/components/ui/UserDropdown";
import { CartDropdown } from "@/components/ui/CartDropdown";

export function Header() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 각 아이콘별 드롭다운 상태
  const [activeDropdown, setActiveDropdown] = useState<
    "search" | "user" | "cart" | null
  >(null);

  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // === Mega Menu handlers ===
  const openMegaMenu = useCallback((label: string) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setActiveCategory(label);
    setShowMegaMenu(true);
  }, []);

  const closeMegaMenu = useCallback(() => {
    hideTimeout.current = setTimeout(() => {
      setShowMegaMenu(false);
      setActiveCategory(null);
    }, 200);
  }, []);

  const handleCategoryClick = useCallback(
    (label: string, e: React.MouseEvent) => {
      // 이미 열려있고 같은 카테고리면 닫기 (토글)
      if (showMegaMenu && activeCategory === label) {
        e.preventDefault();
        setShowMegaMenu(false);
        setActiveCategory(null);
      } else {
        e.preventDefault();
        openMegaMenu(label);
      }
    },
    [showMegaMenu, activeCategory, openMegaMenu]
  );

  // === Icon dropdown handlers ===
  const toggleDropdown = useCallback(
    (name: "search" | "user" | "cart") => {
      setActiveDropdown((prev) => (prev === name ? null : name));
      // 아이콘 드롭다운 열 때 메가메뉴는 닫기
      if (showMegaMenu) {
        setShowMegaMenu(false);
        setActiveCategory(null);
      }
    },
    [showMegaMenu]
  );

  const closeAllDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#ede8e2]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* 좌측: 로고 */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl tracking-tight text-[#c9a88c] shrink-0"
              onClick={closeAllDropdowns}
            >
              <span className="w-8 h-8 rounded-lg bg-[#c9a88c] flex items-center justify-center text-white text-sm font-extrabold">
                감
              </span>
              감탄스토어
            </Link>

            {/* 중앙: GNB (데스크톱) */}
            <nav
              className="hidden lg:flex items-center gap-1"
              onMouseLeave={closeMegaMenu}
            >
              {navCategories.map((cat) => (
                <div
                  key={cat.label}
                  className="relative"
                  onMouseEnter={() => openMegaMenu(cat.label)}
                >
                  <Link
                    href={cat.href}
                    onClick={(e) => handleCategoryClick(cat.label, e)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative
                      ${
                        activeCategory === cat.label
                          ? "text-[#a07850] bg-[#f7f1eb] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-[#c9a88c] after:rounded-full"
                          : "text-[#2d2d2d] hover:bg-[#f7f1eb] hover:text-[#a07850]"
                      }`}
                  >
                    {cat.label}
                    {cat.isNew && (
                      <span className="text-[10px] bg-[#e8c4c4] text-[#a05050] px-1.5 py-0.5 rounded-full font-bold leading-none">
                        NEW
                      </span>
                    )}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        activeCategory === cat.label
                          ? "rotate-180 text-[#c9a88c]"
                          : "text-[#999]"
                      }`}
                    />
                  </Link>

                  {/* 활성 카테고리 아래 작은 점 인디케이터 */}
                  {activeCategory === cat.label && (
                    <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-5 h-[2px] bg-[#c9a88c] rounded-full z-50" />
                  )}
                </div>
              ))}
            </nav>

            {/* 우측: 아이콘 */}
            <div className="flex items-center gap-1">
              {/* 검색 */}
              <button
                onClick={() => toggleDropdown("search")}
                className={`relative p-2 rounded-full transition-all duration-200 ${
                  activeDropdown === "search"
                    ? "bg-[#f7f1eb] text-[#c9a88c]"
                    : "hover:bg-[#f5f0ea] text-[#6b6b6b]"
                }`}
                aria-label="검색"
              >
                <Search size={20} />
              </button>

              {/* 마이페이지 */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("user")}
                  className={`relative p-2 rounded-full transition-all duration-200 ${
                    activeDropdown === "user"
                      ? "bg-[#f7f1eb] text-[#c9a88c]"
                      : "hover:bg-[#f5f0ea] text-[#6b6b6b]"
                  }`}
                  aria-label="마이페이지"
                >
                  <User size={20} />
                </button>
                <UserDropdown
                  isOpen={activeDropdown === "user"}
                  onClose={closeAllDropdowns}
                />
              </div>

              {/* 장바구니 */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("cart")}
                  className={`relative p-2 rounded-full transition-all duration-200 ${
                    activeDropdown === "cart"
                      ? "bg-[#f7f1eb] text-[#c9a88c]"
                      : "hover:bg-[#f5f0ea] text-[#6b6b6b]"
                  }`}
                  aria-label="장바구니"
                >
                  <ShoppingBag size={20} />
                  <span className="absolute -top-0 -right-0 w-4 h-4 bg-[#c9a88c] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    2
                  </span>
                </button>
                <CartDropdown
                  isOpen={activeDropdown === "cart"}
                  onClose={closeAllDropdowns}
                />
              </div>

              {/* 햄버거 (모바일) */}
              <button
                className="lg:hidden p-2 hover:bg-[#f5f0ea] rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="메뉴"
              >
                <Menu size={20} className="text-[#6b6b6b]" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        {showMegaMenu && (
          <div
            className="absolute left-0 right-0 bg-white border-b border-[#ede8e2] shadow-lg z-40 animate-slide-down"
            onMouseEnter={() => {
              if (hideTimeout.current) clearTimeout(hideTimeout.current);
            }}
            onMouseLeave={closeMegaMenu}
          >
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-bold text-[#a07850] bg-[#f7f1eb] px-3 py-1 rounded-full">
                  {activeCategory}
                </span>
                <span className="text-xs text-[#999]">
                  카테고리별 인기 상품을 확인해보세요
                </span>
              </div>

              <div className="grid grid-cols-4 gap-8">
                {megaMenuSubCategories.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-sm font-bold text-[#a07850] mb-3 pb-2 border-b border-[#f0ece7]">
                      {group.title}
                    </h4>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={`/category/${item.slug}`}
                            className="text-sm text-[#6b6b6b] hover:text-[#c9a88c] hover:translate-x-1 transition-all duration-150 inline-block"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {/* 배너 */}
                <div className="col-span-1">
                  <div className="bg-gradient-to-br from-[#f7f1eb] to-[#e8d5c4] rounded-xl p-6 text-center h-full flex flex-col justify-center">
                    <p className="text-sm font-bold text-[#a07850] mb-2">
                      감탄스토어 5주년
                    </p>
                    <p className="text-2xl font-extrabold text-[#c9a88c] mb-1">
                      ~50%
                    </p>
                    <p className="text-xs text-[#6b6b6b]">
                      베스트 셀러 특가
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Overlay */}
        <SearchOverlay
          isOpen={activeDropdown === "search"}
          onClose={closeAllDropdowns}
        />
      </header>

      {/* 모바일 드로어 */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-6px);
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
    </>
  );
}
