import FadeInOnScroll from "@/components/FadeInOnScroll";

const STEPS: { title: string; desc: string }[] = [
  {
    title: "发现问题",
    desc: "从用户访谈、业务流程或重复性工作中识别高频痛点。",
  },
  {
    title: "定义场景",
    desc: "明确目标用户、核心任务、使用边界和成功指标。",
  },
  {
    title: "设计方案",
    desc: "输出功能流程、Prompt 策略、知识库结构或原型方案。",
  },
  {
    title: "快速验证",
    desc: "用 Cursor / Windsurf / Coze 快速搭建 MVP。",
  },
  {
    title: "效果评估",
    desc: "关注回答准确率、任务完成率、用户反馈和效率提升。",
  },
  {
    title: "迭代优化",
    desc: "根据真实反馈调整提示词、知识库、交互流程和功能边界。",
  },
];

export default function HowIBuild() {
  return (
    <section
      id="build"
      className="border-t border-line bg-tertiary py-24 md:py-32"
    >
      <div className="container-x mx-auto">
        <FadeInOnScroll>
          <p className="mb-8 text-[12px] uppercase tracking-[0.25em] text-secondary md:mb-10">
            How I Build
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <h2 className="mb-6 text-display-section text-balance text-primary">
            我的构建流程
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.05}>
          <p className="mb-16 max-w-2xl text-body-md text-secondary md:mb-24 md:text-body-lg">
            从问题到 Demo，我用六步验证一个 AI 产品想法。
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-4">
          {STEPS.map((step, i) => (
            <FadeInOnScroll key={step.title} delay={i * 0.06}>
              <div className="flex h-full flex-col border-t border-primary pt-5">
                <p className="num text-[14px] tracking-tight text-secondary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[22px] font-medium leading-tight tracking-tight text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-body-sm text-secondary">{step.desc}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
