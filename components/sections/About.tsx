import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-line bg-white py-24 md:py-32"
    >
      <div className="container-x mx-auto">
        {/* asymmetric three columns: title+intro / big number / capabilities */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-14 md:gap-x-10">
          {/* LEFT: title + short intro */}
          <FadeInOnScroll className="col-span-12 md:col-span-4">
            <h2 className="text-[clamp(56px,7vw,96px)] font-medium leading-[1.0] tracking-[-0.04em] text-primary">
              关于我
            </h2>
            <p className="mt-10 max-w-[28rem] text-[16px] leading-[1.7] text-secondary md:text-[17px]">
              我本科背景是信息工程，做过计算机视觉、AI Agent、企业智能体和 AIGC 调研项目。相比单纯追技术热点，我更关注 AI 能不能进入真实业务流程，并被用户真正使用。
            </p>
          </FadeInOnScroll>

          {/* MIDDLE: big-number editorial card, sunken */}
          <FadeInOnScroll
            delay={0.1}
            className="col-span-12 md:col-span-4 md:pt-24"
          >
            <div className="relative rounded-[24px] border border-line bg-[#FDFBF7] p-10 md:p-12">
              <span
                aria-hidden
                className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-accent"
              />
              <p className="num text-[120px] font-medium leading-none tracking-[-0.04em] text-primary md:text-[160px]">
                4
              </p>
              <p className="mt-10 text-[18px] leading-[1.4] text-primary md:text-[20px]">
                AI 项目实践
              </p>
              <p className="mt-3 text-[14px] leading-[1.7] text-secondary md:text-[15px]">
                覆盖计算机视觉 / AI Agent / 企业智能体 / AIGC 调研
              </p>
            </div>
          </FadeInOnScroll>

          {/* RIGHT: two capability paragraphs, slight offset */}
          <FadeInOnScroll
            delay={0.2}
            className="col-span-12 md:col-span-4 md:pt-10"
          >
            <ul className="space-y-12">
              <li>
                <p className="flex items-baseline gap-3 text-[20px] font-medium leading-tight tracking-tight text-primary md:text-[22px]">
                  <span aria-hidden className="text-accent">✦</span>
                  <span>能理解技术逻辑</span>
                </p>
                <p className="mt-4 max-w-[26rem] text-[16px] leading-[1.7] text-secondary md:text-[17px]">
                  具备计算机视觉、Prompt、RAG、AI Agent 等基础理解，能和技术团队进行有效沟通。
                </p>
              </li>
              <li>
                <p className="flex items-baseline gap-3 text-[20px] font-medium leading-tight tracking-tight text-primary md:text-[22px]">
                  <span aria-hidden className="text-accent">✦</span>
                  <span>能快速做出 Demo</span>
                </p>
                <p className="mt-4 max-w-[26rem] text-[16px] leading-[1.7] text-secondary md:text-[17px]">
                  使用 Cursor、Windsurf、Coze 等工具，从需求拆解到原型验证快速跑通。
                </p>
              </li>
            </ul>
          </FadeInOnScroll>
        </div>

        {/* faint decorative hairline */}
        <div
          aria-hidden
          className="mt-24 h-px w-full bg-line/70 md:mt-32"
        />
      </div>
    </section>
  );
}
