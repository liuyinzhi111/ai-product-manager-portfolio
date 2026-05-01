import BackLink from "@/components/BackLink";

export const metadata = {
  title: "项目详情 · 刘盛瑞",
};

type Params = { slug: string };

export function generateStaticParams() {
  return [
    { slug: "ai-agent-demo" },
    { slug: "hr-policy-agent" },
    { slug: "license-plate-recognition" },
    { slug: "aigc-short-drama-research" },
  ];
}


export default function ProjectDetailPage({ params }: { params: Params }) {
  return (
    <section className="container-x mx-auto min-h-screen pb-24 pt-32 md:pt-40">
      <BackLink fallback="/projects" label="返回项目列表" />

      <p className="mt-12 num text-[14px] uppercase tracking-[0.2em] text-secondary">
        项目 · {params.slug}
      </p>

      <h1 className="mt-6 text-display-section text-balance text-primary">
        项目标题
      </h1>
      <p className="mt-6 max-w-xl text-body-md text-secondary md:text-body-lg">
        占位。MDX 驱动的项目详情模板将在此呈现。
      </p>
    </section>
  );
}
