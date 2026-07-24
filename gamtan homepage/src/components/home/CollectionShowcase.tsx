import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collections } from "@/lib/data";

export function CollectionShowcase() {
  return (
    <section className="py-16 md:py-20 bg-[#f5f0ea]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#a07850] uppercase">
            COLLECTIONS
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d2d2d] mt-2 mb-3">
            당신을 위한 라인업
          </h2>
          <p className="text-sm text-[#999] max-w-md mx-auto">
            다양한 스타일과 핏으로 일상의 편안함을 경험하세요
          </p>
        </div>

        {/* 컬렉션 카드 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.href}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5]"
            >
              {/* 배경 */}
              <div className={`absolute inset-0 ${collection.image}`} />

              {/* 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-300" />

              {/* 컨텐츠 */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-extrabold text-white mb-1">
                  {collection.title}
                </h3>
                <p className="text-sm text-white/80 mb-3">
                  {collection.subtitle}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-white/90 group-hover:gap-2 transition-all">
                  자세히 보기 <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
