import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { PopupModal } from "@/components/ui/PopupModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "감탄스토어 - 당신의 매일을 더 편안하게",
  description:
    "감탄스토어 - 감탄브라, 자세브라, 오얏, 주니어, 맨즈, 스포츠 등 다양한 속옷 라인업. 당신의 매일을 더 편안하게, 감탄하는 순간.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#faf8f5] text-[#2d2d2d]">
        {children}
        <PopupModal />
      </body>
    </html>
  );
}
