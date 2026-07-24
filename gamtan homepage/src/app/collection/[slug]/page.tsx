import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { ProductCard } from "@/components/home/ProductCard";
import { collections, products } from "@/lib/data";

// 컬렉션 slug → collection id 매핑
const slugToId: Record<string, number> = {
  gamtanbra: 1,
  jasebra: 2,
  junior: 3,
  mens: 4,
  sports: 5,
  oyat: 6,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = slugToId[slug];
  const collection = collections.find((c) => c.id === id);
  return {
    title: collection ? `${collection.title} - 감탄스토어` : "컬렉션",
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collectionId = slugToId[slug];

  if (!collectionId) {
    notFound();
  }

  const collection = collections.find((c) => c.id === collectionId)!;

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        {/* 컬렉션 헤더 */}
        <div
          className={`${collection.image} py-16 md:py-24 border-b border-[#ede8e2]`}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[#6b6b6b] hover:text-[#c9a88c] transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              홈으로
            </Link>
            <span className="inline-block text-xs font-bold text-[#a07850] bg-white/70 px-3 py-1 rounded-full mb-4">
              COLLECTION
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#2d2d2d] mb-3">
              {collection.title}
            </h1>
            <p className="text-lg text-[#6b6b6b] mb-8">{collection.subtitle}</p>
            <Link
              href={`/category/${slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a88c] text-white font-bold rounded-full hover:bg-[#a07850] transition-colors"
            >
              전체 상품 보기
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* 컬렉션 상품 */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <h2 className="text-xl font-extrabold text-[#2d2d2d] mb-8">
            {collection.title} 인기 상품
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* 컬렉션 목록으로 돌아가기 */}
        <div className="text-center pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#c9a88c] text-[#c9a88c] font-bold rounded-full hover:bg-[#c9a88c] hover:text-white transition-all"
          >
            모든 컬렉션 보기
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
