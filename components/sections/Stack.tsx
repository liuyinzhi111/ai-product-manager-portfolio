import FadeInOnScroll from "@/components/FadeInOnScroll";

type StackGroup = {
  title: string;
  description: string;
  tags: string[];
  /** column height in tailwind classes, descending */
  height: string;
};

const GROUPS: StackGroup[] = [
  {
    title: "AI 编码工具",
    description:
      "用 AI 编码工具完成从需求拆解、页面搭建到 Demo 验证的完整流程。",
    tags: ["Cursor", "Windsurf", "CodeX", "Claude Code", "ChatGPT"],
    height: "min-h-[520px] md:min-h-[640px]",
  },
  {
    title: "AI 产品技术",
    description:
      "理解大模型应用中的提示词、知识检索、工具调用和流式交互设计。",
    tags: ["Prompt", "RAG", "Function Calling", "SSE", "AI Agent", "知识库问答"],
    height: "min-h-[460px] md:min-h-[560px]",
  },
  {
    title: "智能体搭建",
    description:
      "围绕真实业务场景搭建智能体 Demo，验证问答准确率、任务完成率和使用体验。",
    tags: ["Coze", "知识库配置", "工作流设计", "Prompt 调试", "效果测试"],
    height: "min-h-[400px] md:min-h-[480px]",
  },
  {
    title: "产品方法",
    description:
      "从真实业务问题出发，判断 AI 是否适合介入，并用最小 Demo 快速验证。",
    tags: ["需求调研", "用户访谈", "业务流程梳理", "PRD", "原型设计", "竞品分析"],
    height: "min-h-[340px] md:min-h-[400px]",
  },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="border-t border-line bg-white py-24 md:py-32"
    >
      <div className="container-x mx-auto">
        <FadeInOnScroll>
          <h2 className="mb-6 text-display-section text-balance text-primary">
            能力栈
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.05}>
          <p className="mb-16 max-w-2xl text-body-md text-secondary md:mb-24 md:text-body-lg">
            把产品想法变成可验证 Demo 的工具箱。
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:items-end">
          {GROUPS.map((group, i) => (
            <FadeInOnScroll
              key={group.title}
              delay={i * 0.08}
              className={group.height}
            >
              <div className="flex h-full flex-col rounded-card bg-tertiary p-6 transition-all duration-300 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)] md:p-8">
                <div className="flex items-start justify-between">
                  <p className="num text-[14px] tracking-tight text-secondary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <span className="text-body-sm text-secondary">
                    共 {group.tags.length} 项
                  </span>
                </div>

                <h3 className="mt-6 text-card-title text-primary md:text-card-title-lg">
                  {group.title}
                </h3>

                <p className="mt-4 max-w-[24rem] text-[14px] leading-[1.7] text-secondary md:text-[15px]">
                  {group.description}
                </p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-10">
                  {group.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line bg-white px-3 py-1 text-body-sm text-primary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
