import PageBanner from "@/components/PageBanner";
import Link from "next/link";

const csapSteps = [
  {
    step: "01",
    title: "교육 (Course)",
    desc: "실무 중심의 AI 활용 교육을 통해 임직원의 디지털 역량을 강화합니다.",
    details: ["직무별 맞춤 커리큘럼", "Copilot / M365 Hands-on 실습", "온·오프라인 병행"],
  },
  {
    step: "02",
    title: "적용 (Application)",
    desc: "교육에서 배운 내용을 실제 업무에 적용하고 성과로 연결합니다.",
    details: ["업무 시나리오 기반 과제", "팀 단위 적용 워크숍", "베스트 프랙티스 공유"],
  },
  {
    step: "03",
    title: "챔피언 육성 (Champion)",
    desc: "조직 내 AI 활용을 주도할 내부 챔피언을 발굴하고 육성합니다.",
    details: ["챔피언 선발 및 심화 교육", "사내 커뮤니티 운영", "성과 발표회 정기 개최"],
  },
  {
    step: "04",
    title: "데이터 점검 (Data Check)",
    desc: "교육 효과와 AI 활용률을 데이터로 측정하고 지속적으로 개선합니다.",
    details: ["활용률 대시보드 제공", "만족도 및 효과성 조사", "정기 피드백 및 커리큘럼 개선"],
  },
];

export default function EducationPage() {
  return (
    <>
      <PageBanner title="교육 서비스" subtitle="Practical AI Education" />

      {/* CSAP intro */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block h-1 w-12 rounded-full bg-primary-light" />
            <h2 className="text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
              CSAP 교육 체계
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-gray">
              교육(Course) → 적용(Application) → 챔피언(Champion) → 데이터(Data)
              <br />
              체계적인 4단계 프로세스로 AI 활용 역량을 조직에 내재화합니다.
            </p>
          </div>
        </div>
      </section>

      {/* CSAP Steps */}
      <section className="bg-bg-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {csapSteps.map((s) => (
              <div
                key={s.step}
                className="flex gap-6 rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-lg"
              >
                <span className="shrink-0 text-6xl font-black text-blue-100">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-text-dark">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-gray">
                    {s.desc}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-text-gray"
                      >
                        <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary-light" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
            맞춤형 교육 프로그램을 설계해 드립니다
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-gray">
            교육 플랫폼 12개월 무상 케어 옵션을 제공합니다
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-primary px-10 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
          >
            교육 상담 신청
          </Link>
        </div>
      </section>
    </>
  );
}
