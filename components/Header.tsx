"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "关于我", href: "/#about" },
  { label: "能力栈", href: "/#stack" },
  { label: "构建流程", href: "/#build" },
  { label: "项目", href: "/#projects" },
  { label: "知识库", href: "/#notes" },
  { label: "联系", href: "/#contact" },
];

const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/ai-product-manager-portfolio" : "";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        "backdrop-blur-md",
        scrolled
          ? "bg-white/70 border-b border-line/80"
          : "bg-white/35 border-b border-transparent"
      )}
    >
      <nav className="container-x mx-auto flex h-14 items-center justify-between">
        <a
          href={`${BASE_PATH}/resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="查看并下载简历 PDF"
          className="group mt-6 inline-flex items-center gap-2 rounded-full border border-[#D8D2C8] bg-[rgba(255,255,255,0.55)] px-[18px] py-[10px] text-[14px] font-medium text-primary backdrop-blur-sm transition-all duration-300 ease-out-soft hover:border-primary hover:bg-primary hover:text-[#F7F5F1]"
        >
          下载简历 PDF
          <span
            aria-hidden
            className="text-[12px] leading-none transition-transform duration-300 group-hover:translate-y-0.5"
          >
            ↓
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[13px] tracking-[0.04em] text-primary/80 transition-colors duration-300 hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* mobile: simple compact menu (anchor list scroll, no dropdown for skeleton) */}
        <ul className="flex items-center gap-4 md:hidden">
          {NAV_ITEMS.slice(0, 3).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[12px] tracking-[0.03em] text-secondary transition-colors duration-300 hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
