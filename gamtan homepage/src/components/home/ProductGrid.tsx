import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { products } from "@/lib/data";

export function ProductGrid() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#a07850] uppercase">
            NEW ARRIVALS
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d2d2d] mt-2 mb-3">
            지금 가장 인기 있는 신상품
          </h2>
          <p className="text-sm text-[#999] max-w-md mx-auto">
            감탄스토어가 엄선한 이번 시즌 베스트 셀러를 만나보세요
          </p>
        </div>

        {/* 상품 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* 더보기 */}
        <div className="text-center mt-12">
          <Link
            href="/category/best"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#c9a88c] text-[#c9a88c] font-bold rounded-full hover:bg-[#c9a88c] hover:text-white transition-all duration-300"
          >
            전체 상품 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
