import Image from "next/image";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/ai-product-manager-portfolio" : "";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden pt-14"
    >
      <div className="container-x mx-auto grid min-h-[calc(100svh-3.5rem)] grid-cols-12 gap-x-6 pb-12 pt-10 md:gap-x-10 md:pb-12 md:pt-10">
        {/* LEFT: top stats + center hero word + bottom scroll hint */}
        <div className="col-span-12 flex flex-col justify-between md:col-span-7">
          {/* top spacer */}
          <div className="pt-3" />

          {/* center: hero word */}
          <div className="flex flex-1 flex-col justify-center py-12 md:py-14">
            <div className="w-fit">
              <h1 className="text-[clamp(100px,14.4vw,198px)] font-medium leading-[0.95] tracking-[-0.04em] text-balance text-primary">
                你好
              </h1>
              <p className="mt-10 text-center text-[19px] leading-[1.9] tracking-[-0.01em] text-secondary md:text-[23px] md:leading-[1.75]">
                我是刘盛瑞，一名 AI 产品经理
                <br className="hidden sm:block" />
                也在用 <span className="text-accent">AI Coding</span>
                <br className="hidden sm:block md:hidden" />
                把想法做成真实产品
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-[999px] bg-primary px-[22px] py-[9px] text-[14px] font-normal text-white transition-colors duration-300 ease-out-soft hover:bg-primary/90"
              >
                查看作品
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[999px] border border-line bg-transparent px-[22px] py-[9px] text-[14px] font-normal text-primary transition-colors duration-300 hover:border-primary/30 hover:text-primary/75"
              >
                联系我
              </a>
            </div>
          </div>

          {/* bottom: scroll hint */}
          <div className="pb-1">
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-[14px] text-secondary transition-colors hover:text-accent"
            >
              <span>向下滚动</span>
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>

        {/* RIGHT: portrait */}
        <div className="col-span-12 md:col-span-5">
          <FadeInOnScroll
            delay={0.1}
            className="relative h-[60vh] w-full overflow-hidden rounded-[24px] shadow-[0_8px_30px_-16px_rgba(0,0,0,0.10)] md:h-[calc(100svh-7rem)]"
          >
            <Image
              src={`${BASE_PATH}/images/profile.jpg`}
              alt="刘盛瑞"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              priority
              className="grayscale-photo object-cover"
            />
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
