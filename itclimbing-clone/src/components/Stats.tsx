const stats = [
  {
    value: "15년+",
    label: "M365 및 클라우드\n인프라 경험",
  },
  {
    value: "3단계",
    label: "기술 지원\n에스컬레이션 체계",
  },
  {
    value: "12개월",
    label: "교육 플랫폼\n무상 케어 옵션",
  },
  {
    value: "One-Team",
    label: "강사진 · 컨설턴트 ·\n엔지니어 협업",
  },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-br from-primary-dark to-slate-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block h-1 w-12 rounded-full bg-blue-400/50" />
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            경험, 지원, 케어를
            <br />
            하나의 팀으로 연결합니다
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="text-4xl font-black text-white sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
