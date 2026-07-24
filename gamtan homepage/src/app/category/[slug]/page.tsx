import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Filter, ChevronDown } from "lucide-react";
import { ProductCard } from "@/components/home/ProductCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { products } from "@/lib/data";

// 카테고리별 slug → 한글 이름 매핑
const categoryMap: Record<string, string> = {
  bra: "브라",
  panty: "팬티",
  lifewear: "라이프웨어",
  mens: "맨즈",
  best: "베스트",
  gamtanbra: "감탄브라",
  jasebra: "자세브라",
  oyat: "오얏",
  junior: "주니어",
  sports: "스포츠",
  event: "이벤트",
  anniversary: "5주년",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = categoryMap[slug] || slug;
  return { title: `${name} - 감탄스토어` };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoryName = categoryMap[slug];

  if (!categoryName) {
    notFound();
  }

  // 필터링된 상품 (실제로는 slug 기반 필터링)
  const filteredProducts =
    slug === "best"
      ? products.filter((p) => p.reviewCount > 8000)
      : slug === "gamtanbra"
      ? products.filter((p) => p.name.includes("감탄"))
      : slug === "mens"
      ? products.filter((p) => p.name.includes("맨즈"))
      : slug === "sports"
      ? products.filter((p) => p.name.includes("스포츠") || p.tag === "써머")
      : products;

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        {/* 카테고리 헤더 */}
        <div className="bg-[#faf8f5] border-b border-[#ede8e2]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[#999] hover:text-[#c9a88c] transition-colors mb-4"
            >
              <ArrowLeft size={14} />
              홈으로
            </Link>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#2d2d2d] mb-2">
              {categoryName}
            </h1>
            <p className="text-sm text-[#999]">
              {filteredProducts.length}개의 상품
            </p>
          </div>
        </div>

        {/* 상품 그리드 */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          {/* 필터 바 */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#ede8e2] text-sm font-medium text-[#2d2d2d] hover:bg-[#faf8f5] transition-colors">
                <Filter size={14} />
                필터
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#ede8e2] text-sm text-[#6b6b6b] hover:bg-[#faf8f5] transition-colors">
                인기순
                <ChevronDown size={12} />
              </button>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg font-bold text-[#2d2d2d] mb-2">
                아직 준비 중이에요
              </p>
              <p className="text-sm text-[#999] mb-6">
                이 카테고리의 상품을 준비하고 있습니다.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#c9a88c] text-white font-bold rounded-full hover:bg-[#a07850] transition-colors"
              >
                홈으로 돌아가기
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
