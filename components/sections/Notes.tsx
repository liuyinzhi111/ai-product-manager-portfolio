import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function Notes() {
  return (
    <section
      id="notes"
      className="border-t border-line bg-white py-24 md:py-32"
    >
      <div className="container-x mx-auto">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-x-10">
          {/* LEFT: title + intro */}
          <FadeInOnScroll className="col-span-12 md:col-span-6">
            <h2 className="text-[clamp(56px,7vw,96px)] font-medium leading-[1.0] tracking-[-0.04em] text-primary">
              知识库
            </h2>
            <p className="mt-10 max-w-[32rem] text-[16px] leading-[1.7] text-secondary md:text-[17px]">
              我把 AI 产品学习笔记与项目复盘整理在独立的知识库中，覆盖 AI Agent、RAG、AIGC、企业智能体与 AI 编码工具的真实使用过程。
            </p>
          </FadeInOnScroll>

          {/* RIGHT: CTA card */}
          <FadeInOnScroll
            delay={0.1}
            className="col-span-12 md:col-span-6 md:pt-6"
          >
            <a
              href="#"
              className="group block rounded-[24px] border border-line bg-[#FDFBF7] p-10 transition-colors duration-300 hover:border-accent md:p-12"
            >
              <p className="text-[13px] tracking-[0.04em] text-secondary">
                外部链接
              </p>
              <p className="mt-3 text-[24px] font-medium leading-tight tracking-tight text-primary md:text-[28px]">
                访问 AI 产品知识库
              </p>
              <p className="mt-4 max-w-[26rem] text-[14px] leading-[1.7] text-secondary md:text-[15px]">
                持续更新中，包含项目复盘、学习笔记、产品方法整理与 AI 编码工具实践记录。
              </p>
              <span className="mt-8 inline-flex items-center gap-3 text-[14px] tracking-tight text-primary transition-colors duration-300 group-hover:text-accent">
                前往知识库
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </a>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
