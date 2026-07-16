import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-black tracking-tight">
              IT Climbing
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              엔터프라이즈 AX의 정상으로 향하는 여정,
              <br />
              아이티클라이밍이 함께합니다
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/consulting" className="transition-colors hover:text-white">
                  컨설팅
                </Link>
              </li>
              <li>
                <Link href="/education" className="transition-colors hover:text-white">
                  교육 서비스
                </Link>
              </li>
              <li>
                <Link href="/m365" className="transition-colors hover:text-white">
                  M365 서비스
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>서울 강남구 테헤란로79길 6, 3층</li>
              <li>제이에스타워 브이 744</li>
              <li>
                <a
                  href="mailto:sales@itclimbing.co.kr"
                  className="transition-colors hover:text-white"
                >
                  sales@itclimbing.co.kr
                </a>
              </li>
              <li>
                <a
                  href="tel:02-6951-1010"
                  className="transition-colors hover:text-white"
                >
                  02-6951-1010
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          IT CLIMBING © {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
