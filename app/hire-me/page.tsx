import BackLink from "@/components/BackLink";

export const metadata = {
  title: "致面试官 · 刘盛瑞",
};

export default function HireMePage() {
  return (
    <section className="container-x mx-auto min-h-screen pb-24 pt-32 md:pt-40">
      <BackLink fallback="/#contact" label="返回" />

      <h1 className="mt-12 text-display-section text-balance text-primary">
        致面试官
      </h1>
      <p className="mt-6 max-w-xl text-body-md text-secondary md:text-body-lg">
        占位。一段写给面试官的简短自述将在此呈现。
      </p>
    </section>
  );
}
