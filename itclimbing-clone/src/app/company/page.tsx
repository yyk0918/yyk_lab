import PageBanner from "@/components/PageBanner";

export default function CompanyPage() {
  return (
    <>
      <PageBanner title="회사소개" subtitle="About Us" />

      {/* Mission */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block h-1 w-12 rounded-full bg-primary-light" />
            <h2 className="text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
              엔터프라이즈 AX의 정상으로 향하는 여정
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-gray">
              아이티클라이밍은 Microsoft Copilot & M365 AX 파트너로서,
              <br />
              기업의 AI 도입이 단순한 기술 구축에 그치지 않고
              <br />
              조직의 일하는 방식 변화와 현장 성과로 이어지도록 돕습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block h-1 w-12 rounded-full bg-primary-light" />
            <h2 className="text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
              핵심 가치
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "현장 중심",
                desc: "모든 솔루션은 실제 업무 현장에서의 효과를 최우선으로 설계합니다.",
              },
              {
                title: "데이터 기반",
                desc: "정량적 지표와 데이터 분석을 바탕으로 AX 전략을 수립하고 검증합니다.",
              },
              {
                title: "지속 가능성",
                desc: "일회성 구축이 아닌, 조직 내 자생적 AI 역량이 뿌리내리도록 함께합니다.",
              },
              {
                title: "One-Team 협업",
                desc: "컨설턴트, 강사, 엔지니어가 하나의 팀으로 유기적으로 협력합니다.",
              },
              {
                title: "기술 전문성",
                desc: "15년 이상의 M365 및 클라우드 인프라 경험을 보유하고 있습니다.",
              },
              {
                title: "고객 성공",
                desc: "고객의 비즈니스 성과가 곧 우리의 성과라는 신념으로 임합니다.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-text-dark">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-gray">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl">
            <div className="mb-16 text-center">
              <span className="mb-3 inline-block h-1 w-12 rounded-full bg-primary-light" />
              <h2 className="text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
                회사 정보
              </h2>
            </div>

            <dl className="divide-y divide-border">
              {[
                { label: "회사명", value: "아이티클라이밍(주)" },
                { label: "대표", value: "김영수" },
                { label: "주소", value: "서울 강남구 테헤란로79길 6, 3층 (제이에스타워)" },
                { label: "이메일", value: "sales@itclimbing.co.kr" },
                { label: "전화", value: "02-6951-1010" },
                { label: "팩스", value: "02-6455-3816" },
              ].map((info) => (
                <div
                  key={info.label}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-8"
                >
                  <dt className="w-24 shrink-0 text-sm font-semibold text-text-dark">
                    {info.label}
                  </dt>
                  <dd className="text-sm text-text-gray">{info.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
