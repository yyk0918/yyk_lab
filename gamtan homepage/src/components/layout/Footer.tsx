import Link from "next/link";
import { Phone, Mail, Award, Shield } from "lucide-react";
import { footerLinks, companyInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-[#ccc] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* 상단: 링크 & CS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* 브랜드 스토리 */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-lg bg-[#c9a88c] flex items-center justify-center text-white text-xs font-extrabold">
                감
              </span>
              <span className="text-white font-bold text-lg">감탄스토어</span>
            </div>
            <p className="text-sm text-[#999] mb-6 leading-relaxed">
              당신의 매일을 더 편안하게,
              <br />
              감탄하는 순간을 선사합니다.
            </p>
            {/* CS 정보 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Phone size={16} className="text-[#c9a88c]" />
                {companyInfo.csNumber}
              </div>
              <p className="text-xs text-[#999]">{companyInfo.csHours}</p>
              <p className="text-xs text-[#999]">{companyInfo.csWeekend}</p>
              <Link
                href={`mailto:${companyInfo.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-[#c9a88c] hover:underline mt-1"
              >
                <Mail size={12} />
                {companyInfo.email}
              </Link>
            </div>
          </div>

          {/* 링크 그룹 */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="text-white font-bold text-sm mb-4">
                {key === "company"
                  ? "회사"
                  : key === "help"
                  ? "고객센터"
                  : "정책"}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`text-xs hover:text-white transition-colors ${
                        "bold" in link && link.bold
                          ? "text-white font-bold"
                          : "text-[#999]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 인증 뱃지 */}
        <div className="flex flex-wrap gap-4 mb-8 py-6 border-t border-[#444]">
          <div className="flex items-center gap-2 bg-[#3a3a3a] px-4 py-2 rounded-lg">
            <Award size={16} className="text-[#c9a88c]" />
            <span className="text-xs text-white font-medium">
              KLPGA 공식 파트너
            </span>
          </div>
          <div className="flex items-center gap-2 bg-[#3a3a3a] px-4 py-2 rounded-lg">
            <Shield size={16} className="text-[#c9a88c]" />
            <span className="text-xs text-white font-medium">
              2024 소비자 브랜드 대상 수상
            </span>
          </div>
        </div>

        {/* 하단: 회사 정보 */}
        <div className="pt-6 border-t border-[#444]">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-[#777] mb-4">
            <span>{companyInfo.companyName}</span>
            <span className="text-[#555]">|</span>
            <span>{companyInfo.ceo}</span>
            <span className="text-[#555]">|</span>
            <span>{companyInfo.businessNumber}</span>
            <span className="text-[#555]">|</span>
            <span>{companyInfo.salesReport}</span>
            <span className="text-[#555]">|</span>
            <span>{companyInfo.address}</span>
          </div>
          <p className="text-[10px] text-[#555]">
            © {new Date().getFullYear()} GAMTANSTORE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
