import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900">
      {/* Decorative background blobs */}
      <div className="absolute -left-20 -top-20 size-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 size-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="mb-4 animate-fade-in text-sm font-semibold uppercase tracking-widest text-blue-300">
            Microsoft Copilot &amp; M365 AX Partner
          </p>

          <h1 className="animate-fade-in-up text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI 도입을
            <br />
            <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
              현장의 성과로 연결합니다
            </span>
          </h1>

          <p className="mt-6 animate-fade-in-up delay-200 max-w-xl text-lg leading-relaxed text-slate-300">
            단순 구축이 아닌 조직의 일하는 방식 변화로
            <br />
            진정한 디지털 트랜스포메이션을 실현합니다
          </p>

          <div className="mt-10 flex animate-fade-in-up delay-300 flex-wrap gap-4">
            <Link
              href="/consulting"
              className="rounded-xl bg-white px-8 py-4 text-sm font-bold text-primary transition-all hover:bg-blue-50 hover:shadow-xl"
            >
              서비스 보기
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/30 px-8 py-4 text-sm font-bold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              문의하기
            </Link>
          </div>

          {/* Keyword strip */}
          <div className="mt-16 flex animate-fade-in-up delay-500 flex-wrap gap-4 sm:gap-8">
            {[
              { title: "진단", desc: "AI 도입 현황을 데이터로 분석합니다" },
              { title: "교육", desc: "실무 중심의 AI 활용 역량을 키웁니다" },
              { title: "운영", desc: "안정적인 M365 환경을 24/7 지원합니다" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex-1 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm sm:min-w-[180px]"
              >
                <div className="text-xl font-black text-blue-300">
                  {item.title}
                </div>
                <div className="mt-1 text-sm text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
