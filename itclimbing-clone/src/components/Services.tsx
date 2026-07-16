import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Consulting",
    subtitle: "Enterprise AX Consulting",
    desc: "조직의 업무 프로세스를 진단하고, AI 도입을 위한 변화관리 전략과 ROI 평가 프레임워크를 제공합니다.",
    href: "/consulting",
    color: "from-blue-600 to-blue-700",
  },
  {
    num: "02",
    title: "Education",
    subtitle: "Practical AI Education",
    desc: "CSAP 체계(교육→적용→챔피언 육성→데이터 점검)로 현장에서 바로 활용 가능한 AI 교육을 제공합니다.",
    href: "/education",
    color: "from-indigo-600 to-indigo-700",
  },
  {
    num: "03",
    title: "Managed Service",
    subtitle: "M365 Managed Service",
    desc: "보안, 백업, 기술 지원을 포함한 M365 전 주기 관리 서비스로 안정적인 클라우드 환경을 운영합니다.",
    href: "/m365",
    color: "from-sky-600 to-sky-700",
  },
];

export default function Services() {
  return (
    <section className="bg-bg-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="mb-3 inline-block h-1 w-12 rounded-full bg-primary-light" />
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-text-light">
            What We Do
          </p>
          <h2 className="text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
            필요한 AX 실행 항목을
            <br />
            명확하게 구분합니다
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.num}
              href={s.href}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Number */}
              <span className={`inline-block bg-gradient-to-br ${s.color} bg-clip-text text-7xl font-black text-transparent/10`}>
                {s.num}
              </span>

              <div className="mt-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-light">
                  {s.title}
                </p>
                <h3 className="mt-2 text-xl font-bold text-text-dark group-hover:text-primary transition-colors">
                  {s.subtitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-gray">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                자세히 보기
                <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
