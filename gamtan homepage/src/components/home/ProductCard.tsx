"use client";

import Link from "next/link";
import { Star, Heart } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group">
      <Link href={`/product/${product.id}`} className="block">
        {/* 상품 이미지 */}
        <div
          className={`relative aspect-[3/4] rounded-2xl overflow-hidden ${product.image} mb-3`}
        >
          {/* Zoom 효과용 overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* 태그 */}
          <span className="absolute top-3 left-3 text-[10px] font-bold bg-white/90 backdrop-blur-sm text-[#a07850] px-2 py-0.5 rounded-full">
            {product.tag}
          </span>

          {/* 찜 버튼 */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            className="absolute top-3 right-3 p-1.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            <Heart
              size={15}
              className={liked ? "fill-[#e74c3c] text-[#e74c3c]" : "text-[#999]"}
            />
          </button>

          {/* 할인율 */}
          <span className="absolute bottom-3 right-3 text-xs font-extrabold bg-[#e74c3c] text-white px-2 py-0.5 rounded-full">
            {product.discountRate}%
          </span>
        </div>

        {/* 상품 정보 */}
        <div className="px-1">
          <h3 className="text-sm font-medium text-[#2d2d2d] line-clamp-2 leading-snug group-hover:text-[#c9a88c] transition-colors mb-1.5">
            {product.name}
          </h3>

          {/* 가격 */}
          <div className="flex items-baseline gap-2 mb-1.5">
            <span className="text-xs text-[#ccc] line-through">
              {product.originalPrice.toLocaleString()}원
            </span>
            <span className="text-lg font-extrabold text-[#2d2d2d]">
              {product.salePrice.toLocaleString()}
              <span className="text-sm font-normal">원</span>
            </span>
          </div>

          {/* 별점 & 리뷰 */}
          <div className="flex items-center gap-1 text-xs text-[#6b6b6b]">
            <Star size={12} className="fill-[#f4b740] text-[#f4b740]" />
            <span className="font-bold text-[#2d2d2d]">{product.rating}</span>
            <span className="text-[#ccc]">|</span>
            <span>리뷰 {product.reviewCount.toLocaleString()}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
