import BackLink from "@/components/BackLink";

export const metadata = {
  title: "项目 · 刘盛瑞",
};

export default function ProjectsIndexPage() {
  return (
    <section className="container-x mx-auto min-h-screen pb-24 pt-32 md:pt-40">
      <BackLink fallback="/#projects" label="返回" />

      <h1 className="mt-12 text-display-section text-balance text-primary">
        全部项目
      </h1>
      <p className="mt-6 max-w-xl text-body-md text-secondary md:text-body-lg">
        占位。完整的项目档案将在此呈现。
      </p>
    </section>
  );
}
