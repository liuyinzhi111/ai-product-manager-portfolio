"use client";

import FadeInOnScroll from "@/components/FadeInOnScroll";

type FooterLink = { label: string; href: string; external?: boolean };

const NAV_LINKS: FooterLink[] = [
  { label: "关于我", href: "#about" },
  { label: "能力栈", href: "#stack" },
  { label: "构建流程", href: "#build" },
  { label: "精选项目", href: "#projects" },
  { label: "知识库", href: "#notes" },
  { label: "联系我", href: "#contact" },
];

const PROJECT_LINKS: FooterLink[] = [
  { label: "AI 对话 Agent Demo", href: "/projects/ai-agent-demo" },
  { label: "HR 规章制度智能体", href: "/projects/hr-policy-assistant" },
  { label: "AIGC 短剧出海需求调研", href: "/projects/aigc-short-drama-research" },
  { label: "查看全部项目", href: "/projects" },
];

const CAPABILITY_LINKS: FooterLink[] = [
  { label: "AI 编码工具", href: "#stack" },
  { label: "AI 产品技术", href: "#stack" },
  { label: "计算机视觉", href: "#stack" },
  { label: "产品方法", href: "#stack" },
  { label: "业务调研", href: "#build" },
];

const RESOURCE_LINKS: FooterLink[] = [
  { label: "AI 产品知识库", href: "#notes" },
  { label: "项目复盘", href: "#notes" },
  { label: "学习笔记", href: "#notes" },
  { label: "简历 PDF", href: "/resume.pdf", external: true },
  { label: "邮箱联系", href: "mailto:2499694881@qq.com" },
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h4 className="text-[13px] font-medium tracking-[0.04em] text-primary">
        {title}
      </h4>
      <ul className="mt-6 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              {...(l.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-block text-[14px] leading-[1.6] text-secondary transition-all duration-300 hover:translate-x-0.5 hover:text-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Contact() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-line bg-white text-primary"
    >
      <div className="container-x mx-auto">
        {/* LAYER 1: top contact CTA */}
        <FadeInOnScroll className="grid grid-cols-12 gap-x-6 gap-y-8 pt-20 md:gap-x-10 md:pt-28">
          <div className="col-span-12 md:col-span-7">
            <h2 className="text-[clamp(40px,5.5vw,72px)] font-medium leading-[1.05] tracking-[-0.03em] text-primary">
              联系我
            </h2>
            <p className="mt-8 max-w-[34rem] text-[16px] leading-[1.7] text-secondary md:text-[17px]">
              如果你正在寻找一名懂 AI 产品、也能用 AI 编码工具快速落地的人，
              <br />
              欢迎和我聊聊。
            </p>
          </div>
          <div className="col-span-12 flex md:col-span-5 md:items-end md:justify-end">
            <a
              href="mailto:2499694881@qq.com"
              className="num group inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 text-[15px] tracking-tight text-primary transition-colors duration-300 hover:border-accent hover:text-accent md:text-[16px]"
            >
              2499694881@qq.com
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>
        </FadeInOnScroll>

        {/* LAYER 2: middle brand + 4-column nav */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-14 pb-16 pt-14 md:gap-x-10 md:pb-20 md:pt-20">
          {/* LEFT: brand */}
          <FadeInOnScroll className="col-span-12 md:col-span-4">
            <p className="text-[26px] font-medium leading-tight tracking-tight text-primary md:text-[28px]">
              刘盛瑞
            </p>
            <p className="mt-3 text-[14px] tracking-tight text-secondary">
              AI 产品经理
            </p>
            <p className="mt-6 max-w-[20rem] text-[14px] leading-[1.7] text-secondary">
              用 AI 编码工具把想法做成真实产品。
            </p>
            <a
              href="mailto:2499694881@qq.com"
              className="num mt-6 inline-block text-[14px] text-primary transition-colors duration-300 hover:text-accent"
            >
              2499694881@qq.com
            </a>
            <div className="mt-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[12px] tracking-tight text-accent">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                开放 AI 产品方向机会
              </span>
            </div>
          </FadeInOnScroll>

          {/* RIGHT: 4 columns of links */}
          <FadeInOnScroll
            delay={0.1}
            className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-10 md:col-span-8 md:grid-cols-4 md:gap-x-8"
          >
            <FooterColumn title="站内导航" links={NAV_LINKS} />
            <FooterColumn title="精选项目" links={PROJECT_LINKS} />
            <FooterColumn title="能力方向" links={CAPABILITY_LINKS} />
            <FooterColumn title="资源入口" links={RESOURCE_LINKS} />
          </FadeInOnScroll>
        </div>

        {/* LAYER 3: bottom copyright */}
        <div className="flex flex-col gap-3 border-t border-line py-8 text-[13px] text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 刘盛瑞。保留所有权利。</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p>使用 Cursor + Windsurf + Next.js 构建</p>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-accent"
            >
              回到顶部
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
