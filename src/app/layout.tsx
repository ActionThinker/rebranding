import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "rebranding｜品牌升级咨询、品牌识别系统设计与网站内容规划",
  description:
    "rebranding 聚焦品牌升级咨询、品牌识别系统设计与网站内容规划，帮助成长型企业把复杂业务讲清楚，并建立更有说服力的品牌系统。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className={`${geist.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
