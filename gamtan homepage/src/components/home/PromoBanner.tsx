import Link from "next/link";
import { Ruler, Shirt, Droplets, Calendar } from "lucide-react";
import { guideCards } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Ruler: <Ruler size={22} />,
  Shirt: <Shirt size={22} />,
  Droplets: <Droplets size={22} />,
};

export function PromoBanner() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* 이벤트 프로모션 카드 */}
          <Link
            href="/category/anniversary"
            className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#f7f1eb] to-[#e8d5c4] p-8 md:p-10 flex flex-col justify-between min-h-[240px]"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a07850] bg-white/70 px-3 py-1 rounded-full mb-4">
                <Calendar size={12} />
                7.21 - 7.28
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#2d2d2d] mb-2">
                썸머 시즌 특가전
              </h3>
              <p className="text-sm text-[#6b6b6b]">
                인기 상품 최대 50% 할인 & 무료배송
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-[#a07850] group-hover:gap-2 transition-all">
              이벤트 참여하기 →
            </span>
          </Link>

          {/* 5주년 프로모션 */}
          <Link
            href="/category/anniversary"
            className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#f0e6e0] to-[#dcc8b8] p-8 md:p-10 flex flex-col justify-between min-h-[240px]"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a05050] bg-white/70 px-3 py-1 rounded-full mb-4">
                🎂 ONLY THIS WEEK
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#2d2d2d] mb-2">
                감탄스토어 5주년
              </h3>
              <p className="text-sm text-[#6b6b6b]">
                신규 가입 시 3,000원 적립금 + 10% 쿠폰팩
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-[#a05050] group-hover:gap-2 transition-all">
              혜택 받기 →
            </span>
          </Link>
        </div>

        {/* 유틸리티 서비스 3종 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {guideCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex items-center gap-5 p-6 rounded-2xl bg-[#faf8f5] border border-[#ede8e2] hover:border-[#c9a88c] hover:bg-white hover:shadow-lg hover:shadow-[#c9a88c]/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f7f1eb] flex items-center justify-center text-[#c9a88c] group-hover:bg-[#c9a88c] group-hover:text-white transition-colors shrink-0">
                {iconMap[card.icon]}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#2d2d2d] mb-1">
                  {card.title}
                </h4>
                <p className="text-xs text-[#999]">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
