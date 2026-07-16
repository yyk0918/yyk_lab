import PageBanner from "@/components/PageBanner";
import Link from "next/link";

const services = [
  {
    icon: "🛡️",
    title: "보안 관리",
    desc: "Microsoft 365 환경의 보안 위협을 사전에 탐지하고 대응합니다.",
    items: ["위협 탐지 및 대응", "정보 보호 정책 수립", "컴플라이언스 관리", "보안 감사 리포트"],
  },
  {
    icon: "💾",
    title: "백업 및 복구",
    desc: "중요 비즈니스 데이터를 안전하게 보호하고 신속하게 복구합니다.",
    items: ["자동 백업 구성", "데이터 복구 훈련", "보존 정책 관리", "재해 복구 계획"],
  },
  {
    icon: "🔧",
    title: "기술 지원",
    desc: "3단계 에스컬레이션 체계로 신속하고 정확한 기술 지원을 제공합니다.",
    items: ["1차: 헬프데스크", "2차: 전문 엔지니어", "3차: 아키텍트 레벨", "24/7 긴급 대응"],
  },
  {
    icon: "📊",
    title: "운영 관리",
    desc: "M365 환경의 전 주기를 체계적으로 관리하고 최적화합니다.",
    items: ["사용자 및 라이선스 관리", "성능 모니터링", "업데이트 및 패치 관리", "월간 운영 리포트"],
  },
];

export default function M365Page() {
  return (
    <>
      <PageBanner title="M365 서비스" subtitle="M365 Managed Service" />

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block h-1 w-12 rounded-full bg-primary-light" />
            <h2 className="text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
              안정적인 M365 환경을
              <br />
              전 주기로 관리합니다
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-gray">
              보안, 백업, 기술 지원, 운영 관리까지
              <br />
              M365 환경의 모든 측면을 통합 관리하여
              <br />
              고객이 비즈니스에 집중할 수 있도록 돕습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Service grid */}
      <section className="bg-bg-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-lg"
              >
                <span className="text-4xl">{s.icon}</span>
                <h3 className="mt-4 text-xl font-bold text-text-dark">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-gray">
                  {s.desc}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-text-gray"
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary-light" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
            M365 관리, 전문가에게 맡기세요
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-gray">
            지금 무료 진단 상담을 신청하세요
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-primary px-10 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
          >
            무료 진단 신청
          </Link>
        </div>
      </section>
    </>
  );
}
