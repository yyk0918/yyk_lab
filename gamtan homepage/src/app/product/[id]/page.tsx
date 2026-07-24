import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, Heart, Share2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { ProductCard } from "@/components/home/ProductCard";
import { products } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  return { title: product ? `${product.name} - 감탄스토어` : "상품 없음" };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
          {/* 뒤로가기 */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[#999] hover:text-[#c9a88c] transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            계속 쇼핑하기
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* 상품 이미지 */}
            <div
              className={`aspect-[3/4] rounded-2xl ${product.image} flex items-center justify-center`}
            >
              <span className="text-6xl">📦</span>
            </div>

            {/* 상품 정보 */}
            <div>
              {/* 태그 */}
              <span className="inline-block text-[11px] font-bold bg-[#f7f1eb] text-[#a07850] px-2.5 py-1 rounded-full mb-3">
                {product.tag}
              </span>

              {/* 상품명 */}
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#2d2d2d] mb-4">
                {product.name}
              </h1>

              {/* 별점 */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(product.rating)
                          ? "fill-[#f4b740] text-[#f4b740]"
                          : "text-[#ddd]"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-[#2d2d2d]">
                  {product.rating}
                </span>
                <span className="text-sm text-[#999]">
                  | 리뷰 {product.reviewCount.toLocaleString()}건
                </span>
              </div>

              {/* 가격 */}
              <div className="border-t border-b border-[#ede8e2] py-6 mb-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-sm text-[#ccc] line-through">
                    {product.originalPrice.toLocaleString()}원
                  </span>
                  <span className="text-2xl font-extrabold text-[#e74c3c]">
                    {product.discountRate}%
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#2d2d2d]">
                    {product.salePrice.toLocaleString()}
                  </span>
                  <span className="text-lg text-[#2d2d2d]">원</span>
                </div>
              </div>

              {/* 액션 버튼 */}
              <div className="flex gap-3 mb-8">
                <button className="flex-1 py-3.5 bg-[#c9a88c] text-white font-bold rounded-xl hover:bg-[#a07850] transition-colors flex items-center justify-center gap-2 text-sm">
                  <ShoppingBag size={18} />
                  구매하기
                </button>
                <button className="p-3.5 border border-[#ede8e2] rounded-xl hover:bg-[#faf8f5] transition-colors">
                  <Heart size={20} className="text-[#999]" />
                </button>
                <button className="p-3.5 border border-[#ede8e2] rounded-xl hover:bg-[#faf8f5] transition-colors">
                  <Share2 size={20} className="text-[#999]" />
                </button>
              </div>

              {/* 배송 정보 */}
              <div className="bg-[#faf8f5] rounded-xl p-5 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#999]">배송비</span>
                  <span className="font-bold text-[#2d2d2d]">무료배송</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#999]">배송 예정일</span>
                  <span className="text-[#2d2d2d]">주문 후 1~2일 이내</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#999]">교환/반품</span>
                  <span className="text-[#2d2d2d]">무료 (7일 이내)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단: 다른 상품 추천 */}
        <div className="bg-[#faf8f5] py-16 mt-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-xl font-extrabold text-[#2d2d2d] mb-8 text-center">
              함께 보면 좋은 상품
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {products
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
