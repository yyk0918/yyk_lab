"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Link from "next/link";

const slides = [
  {
    id: 1,
    bg: "bg-gradient-to-br from-[#f7f1eb] via-[#faf5f0] to-[#f0e6d8]",
    tagline: "2026 SUMMER COLLECTION",
    title: "손예진의 감탄",
    subtitle: "여름엔 감탄하세요",
    buttonText: "컬렉션 보기",
    href: "/collection/gamtanbra",
  },
  {
    id: 2,
    bg: "bg-gradient-to-br from-[#f0e6e0] via-[#f5ece6] to-[#e8d5c9]",
    tagline: "5TH ANNIVERSARY",
    title: "감탄스토어 5주년",
    subtitle: "최대 50% 특별 할인",
    buttonText: "쇼핑하러 가기",
    href: "/category/anniversary",
  },
  {
    id: 3,
    bg: "bg-gradient-to-br from-[#e8f0e8] via-[#f0f5ee] to-[#dce8da]",
    tagline: "NEW ARRIVAL",
    title: "에어쿨 메쉬 컬렉션",
    subtitle: "시원하게, 가볍게, 편안하게",
    buttonText: "신상품 보기",
    href: "/category/gamtanbra",
  },
];

export function HeroSection() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`${slide.bg} h-[500px] md:h-[600px] flex items-center`}>
              <div className="max-w-7xl mx-auto px-8 w-full">
                <div className="max-w-lg">
                  <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#a07850] uppercase mb-4 bg-white/60 px-3 py-1 rounded-full">
                    {slide.tagline}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-extrabold text-[#2d2d2d] mb-3 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-[#6b6b6b] mb-8">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.href}
                    className="inline-block px-8 py-3 bg-[#c9a88c] text-white font-bold rounded-full hover:bg-[#a07850] transition-all duration-300 shadow-lg shadow-[#c9a88c]/25 hover:shadow-xl hover:shadow-[#a07850]/30 hover:-translate-y-0.5"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
