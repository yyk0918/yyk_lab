const steps = [
  {
    num: "01",
    en: "Direction",
    ko: "방향 설계",
    desc: "조직의 목표와 업무 흐름을 분석하여 AX 추진의 우선순위와 로드맵을 도출합니다.",
  },
  {
    num: "02",
    en: "Awareness",
    ko: "공감대 형성",
    desc: "리더와 사용자 대상으로 변화의 필요성과 기대 효과를 공유하고 참여를 설계합니다.",
  },
  {
    num: "03",
    en: "Readiness",
    ko: "실행 준비",
    desc: "직무별 AI 활용 시나리오, 보안 기준, 운영 역할을 구체화하여 실행 기반을 마련합니다.",
  },
  {
    num: "04",
    en: "Enhancement",
    ko: "정착 관리",
    desc: "사용률, 만족도, ROI 지표를 지속 추적하며 조직 내 AI 활용을 내재화합니다.",
  },
];

export default function Process() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="mb-3 inline-block h-1 w-12 rounded-full bg-primary-light" />
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-text-light">
            Change Management
          </p>
          <h2 className="text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
            도입 이후의 정착까지
            <br />
            단계별로 관리합니다
          </h2>
        </div>

        {/* Process steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="group relative">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(100%+0.5rem)] top-10 hidden h-0.5 w-6 bg-gradient-to-r from-blue-200 to-transparent lg:block" />
              )}

              <div className="rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg">
                <span className="text-5xl font-black text-blue-100 transition-colors group-hover:text-blue-200">
                  {step.num}
                </span>
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-light">
                    {step.en}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-text-dark">
                    {step.ko}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-gray">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
