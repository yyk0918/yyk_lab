"use client";

import Link from "next/link";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

// 목업 카트 아이템
const cartItems = [
  {
    id: 1,
    name: "26SS 감탄 인견쿨 스트랩 브라팬티",
    option: "블랙 / 75A",
    price: 40120,
    qty: 1,
    image: "bg-gradient-to-br from-pink-100 to-rose-200",
  },
  {
    id: 2,
    name: "에어쿨 메쉬 노와이어 감탄브라",
    option: "스킨 / 80A",
    price: 32400,
    qty: 2,
    image: "bg-gradient-to-br from-amber-50 to-orange-100",
  },
];

export function CartDropdown({ isOpen, onClose }: CartDropdownProps) {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-30" onClick={onClose} />

      {/* Dropdown */}
      <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-[#ede8e2] z-40 animate-scale-in origin-top-right">
        {/* 헤더 */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#f0ece7]">
          <h4 className="text-sm font-bold text-[#2d2d2d]">
            장바구니 <span className="text-[#c9a88c]">{cartItems.length}</span>
          </h4>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#f5f0ea] rounded-full transition-colors"
          >
            <X size={14} className="text-[#999]" />
          </button>
        </div>

        {/* 아이템 리스트 */}
        {cartItems.length > 0 ? (
          <>
            <div className="max-h-72 overflow-y-auto px-4 py-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 py-3 border-b border-[#faf8f5] last:border-0"
                >
                  {/* 이미지 */}
                  <div
                    className={`w-16 h-16 rounded-lg shrink-0 ${item.image}`}
                  />
                  {/* 정보 */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${item.id}`}
                      onClick={onClose}
                      className="text-xs font-medium text-[#2d2d2d] line-clamp-2 hover:text-[#c9a88c] transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-[10px] text-[#999] mt-0.5">{item.option}</p>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-xs font-extrabold text-[#2d2d2d]">
                        {(item.price * item.qty).toLocaleString()}원
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button className="p-0.5 rounded border border-[#ede8e2] hover:bg-[#faf8f5]">
                          <Minus size={10} />
                        </button>
                        <span className="text-xs font-bold w-5 text-center">
                          {item.qty}
                        </span>
                        <button className="p-0.5 rounded border border-[#ede8e2] hover:bg-[#faf8f5]">
                          <Plus size={10} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 하단 */}
            <div className="px-4 py-3 border-t border-[#f0ece7]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[#6b6b6b]">합계</span>
                <span className="text-sm font-extrabold text-[#2d2d2d]">
                  {totalPrice.toLocaleString()}원
                </span>
              </div>
              <Link
                href="/category/best"
                onClick={onClose}
                className="block w-full text-center py-2.5 bg-[#c9a88c] text-white rounded-lg text-sm font-bold hover:bg-[#a07850] transition-colors"
              >
                주문하기
              </Link>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <ShoppingBag size={32} className="text-[#ddd] mb-3" />
            <p className="text-sm text-[#999]">장바구니가 비어있습니다</p>
          </div>
        )}
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
