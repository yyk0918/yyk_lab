import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-bg-light py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="mb-3 inline-block h-1 w-12 rounded-full bg-primary-light" />
        <h2 className="text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
          AX 전환을 지금 논의하세요
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-gray">
          투자 가치가 현장에 남도록 진단, 교육, 운영 관점에서
          <br />
          필요한 항목을 함께 정리합니다
        </p>

        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-xl bg-primary px-10 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
          >
            문의하기
          </Link>
          <a
            href="tel:02-6951-1010"
            className="text-lg font-bold text-text-dark transition-colors hover:text-primary"
          >
            02-6951-1010
          </a>
        </div>
      </div>
    </section>
  );
}
