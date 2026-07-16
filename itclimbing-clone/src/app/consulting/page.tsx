import PageBanner from "@/components/PageBanner";
import Link from "next/link";

const offerings = [
  {
    title: "AX 전략 수립",
    desc: "조직의 비전과 업무 프로세스를 분석하여 AI 도입의 우선순위와 단계별 로드맵을 설계합니다.",
    items: ["현황 진단 및 갭 분석", "AI 도입 우선순위 도출", "로드맵 및 KPI 설계"],
  },
  {
    title: "변화관리 컨설팅",
    desc: "AI 도입 성공의 핵심은 기술이 아닌 사람의 변화입니다. 체계적인 변화관리 전략을 수립합니다.",
    items: ["이해관계자 분석", "커뮤니케이션 전략", "변화 수용도 측정 및 피드백"],
  },
  {
    title: "ROI 평가",
    desc: "AI 투자의 정량적·정성적 기대 효과를 측정하고, 도입 후 성과를 추적할 수 있는 프레임워크를 제공합니다.",
    items: ["투자 대비 효과(ROI) 모델링", "생산성 지표 설계", "정기 성과 리뷰"],
  },
];

export default function ConsultingPage() {
  return (
    <>
      <PageBanner title="컨설팅" subtitle="Enterprise AX Consulting" />

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block h-1 w-12 rounded-full bg-primary-light" />
            <h2 className="text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
              조직에 맞는 AX 실행 전략을 설계합니다
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-gray">
              단순한 기술 도입이 아닌, 조직의 업무 방식과 문화를 함께 바꾸는
              <br />
              전략적 접근으로 AI 트랜스포메이션의 실질적 성과를 창출합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Service details */}
      <section className="bg-bg-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-text-dark">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-gray">
                  {o.desc}
                </p>
                <ul className="mt-6 space-y-2">
                  {o.items.map((item) => (
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
            AX 전환, 지금 시작하세요
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-gray">
            귀사에 최적화된 AX 전략을 함께 고민합니다
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-primary px-10 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
          >
            문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
