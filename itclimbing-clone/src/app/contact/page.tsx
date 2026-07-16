import PageBanner from "@/components/PageBanner";

export default function ContactPage() {
  return (
    <>
      <PageBanner title="문의하기" subtitle="Contact Us" />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-black tracking-tight text-text-dark sm:text-3xl">
                문의사항을 남겨주세요
              </h2>
              <p className="mt-2 text-sm text-text-gray">
                담당자가 확인 후 24시간 이내에 연락드리겠습니다.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-text-dark"
                    >
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary-light focus:ring-2 focus:ring-blue-100"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-sm font-semibold text-text-dark"
                    >
                      회사명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary-light focus:ring-2 focus:ring-blue-100"
                      placeholder="회사명을 입력하세요"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-text-dark"
                    >
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary-light focus:ring-2 focus:ring-blue-100"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-semibold text-text-dark"
                    >
                      연락처
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary-light focus:ring-2 focus:ring-blue-100"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-1.5 block text-sm font-semibold text-text-dark"
                  >
                    관심 분야
                  </label>
                  <select
                    id="interest"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary-light focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">선택해 주세요</option>
                    <option value="consulting">컨설팅</option>
                    <option value="education">교육 서비스</option>
                    <option value="m365">M365 서비스</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-text-dark"
                  >
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary-light focus:ring-2 focus:ring-blue-100"
                    placeholder="문의하실 내용을 자유롭게 작성해 주세요"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl sm:w-auto sm:px-12"
                >
                  문의 보내기
                </button>
              </form>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl bg-bg-light p-8 lg:sticky lg:top-28">
                <h3 className="text-xl font-bold text-text-dark">
                  직접 연락하기
                </h3>

                <dl className="mt-8 space-y-6">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-text-light">
                      전화
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="tel:02-6951-1010"
                        className="text-lg font-bold text-text-dark transition-colors hover:text-primary"
                      >
                        02-6951-1010
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-text-light">
                      이메일
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="mailto:sales@itclimbing.co.kr"
                        className="text-lg font-bold text-text-dark transition-colors hover:text-primary"
                      >
                        sales@itclimbing.co.kr
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-text-light">
                      팩스
                    </dt>
                    <dd className="mt-1 text-lg font-bold text-text-dark">
                      02-6455-3816
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-text-light">
                      주소
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-text-gray">
                      서울 강남구 테헤란로79길 6, 3층
                      <br />
                      제이에스타워 브이 744
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-text-light">
                      운영 시간
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-text-gray">
                      평일 09:00 — 18:00
                      <br />
                      주말·공휴일 휴무
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
