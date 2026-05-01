import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import FadeInOnScroll from "@/components/FadeInOnScroll";

type Item = {
  index: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  cover: string;
};

const ITEMS: Item[] = [
  {
    index: "01",
    title: "AI 对话 Agent Demo",
    slug: "project-01",
    description:
      "把 Prompt、RAG、Function Calling 和流式输出整合成一个有场景感的对话产品。",
    tags: ["AI Agent", "RAG", "Function Calling", "SSE"],
    cover: "https://picsum.photos/seed/proj-01/1200/800",
  },
  {
    index: "02",
    title: "HR 规章制度智能体",
    slug: "project-02",
    description:
      "将企业制度内容整理为知识库，让员工通过自然语言快速查询考勤、请假、报销等流程。",
    tags: ["Coze", "知识库问答", "企业智能体"],
    cover: "https://picsum.photos/seed/proj-02/1200/800",
  },
  {
    index: "03",
    title: "低分辨率车牌识别系统",
    slug: "project-03",
    description:
      "在低清场景下，通过深度学习方法提升车牌识别效果，完成从算法到系统界面的实现。",
    tags: ["计算机视觉", "CNN-BiLSTM", "CTC", "OpenCV"],
    cover: "https://picsum.photos/seed/proj-03/1200/800",
  },
  {
    index: "04",
    title: "AIGC 短剧出海需求调研",
    slug: "project-04",
    description:
      "从创作者真实业务链路中分析 AIGC 的效率提升机会，而不是从技术热点反推产品。",
    tags: ["AIGC", "用户研究", "产品分析"],
    cover: "https://picsum.photos/seed/proj-04/1200/800",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-line bg-white py-24 md:py-32"
    >
      <div className="container-x mx-auto">
        <FadeInOnScroll>
          <p className="mb-8 text-[12px] uppercase tracking-[0.25em] text-secondary md:mb-10">
            Selected Projects
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <h2 className="mb-6 text-display-section text-balance text-primary">
            精选项目
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.05}>
          <p className="mb-16 max-w-2xl text-body-md text-secondary md:mb-24 md:text-body-lg">
            四个方向的 AI 项目实践，覆盖 Agent、企业智能体、计算机视觉和 AIGC 调研。
          </p>
        </FadeInOnScroll>

        <ul className="flex flex-col">
          {ITEMS.map((item, i) => (
            <FadeInOnScroll key={item.slug} delay={i * 0.05}>
              <li className="border-t border-line last:border-b">
                <Link
                  href={`/projects/${item.slug}`}
                  className="group block py-6 transition-transform duration-300 ease-out-soft will-change-transform hover:-translate-y-1 md:py-10"
                >
                  <div className="grid grid-cols-12 items-center gap-x-6 gap-y-4">
                    {/* big project name */}
                    <div className="col-span-12 md:col-span-7">
                      <div className="flex items-baseline gap-4">
                        <span className="num text-[14px] tracking-tight text-secondary">
                          {item.index}
                        </span>
                        <h3 className="text-[26px] font-medium leading-tight tracking-tight text-primary md:text-[36px] lg:text-[48px]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-5 max-w-md text-body-md text-secondary">
                        {item.description}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={tag}
                            className="text-body-sm text-secondary"
                          >
                            {tag}
                            {idx < item.tags.length - 1 ? (
                              <span aria-hidden className="ml-3 text-line">
                                ·
                              </span>
                            ) : null}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* cover */}
                    <div className="col-span-12 md:col-span-4">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-card">
                        <Image
                          src={item.cover}
                          alt={`${item.title} 封面占位`}
                          fill
                          sizes="(min-width: 768px) 30vw, 100vw"
                          className="grayscale-photo object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>

                    {/* arrow */}
                    <div className="col-span-12 hidden items-center justify-end md:col-span-1 md:flex">
                      <span
                        aria-hidden
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-primary opacity-0 transition-all duration-300 ease-out-soft group-hover:opacity-100 group-hover:bg-primary group-hover:text-white"
                      >
                        <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            </FadeInOnScroll>
          ))}
        </ul>

        <FadeInOnScroll className="mt-12">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-body-md text-primary transition-colors hover:text-accent"
          >
            查看全部项目
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
