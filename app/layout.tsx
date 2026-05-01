import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "刘盛瑞 · AI 产品经理 候选人",
  description:
    "刘盛瑞的个人作品集。AI 产品经理候选人，也在用 AI Coding 把想法做成真实产品。覆盖 Agent、企业智能体、计算机视觉与 AIGC 调研。",
  metadataBase: new URL("https://shengrui.dev"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="min-h-screen bg-white text-primary antialiased">
        <ScrollProgress />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
