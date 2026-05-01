"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type Props = {
  /**
   * 返回的目标路径，可以带 hash（例如 "/#projects"）。
   * 这里**不**用 router.back()，因为浏览器原生的 scroll restoration
   * 会先渲染到顶部再异步滚动到旧位置，视觉上像"先到 hero 再滑下来"。
   * 改为直接 push 到目标 hash，由浏览器原生 anchor 即时定位。
   */
  fallback?: string;
  label?: string;
};

export default function BackLink({
  fallback = "/",
  label = "返回",
}: Props) {
  const router = useRouter();

  const handleClick = () => {
    // 临时关闭 smooth scroll，让 hash anchor 瞬时落点（不带过渡动画）。
    // 跳转完成后恢复，全站内导航的 smooth scroll 不受影响。
    if (typeof document !== "undefined") {
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.setTimeout(() => {
        html.style.scrollBehavior = prev;
      }, 300);
    }
    router.push(fallback);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-body-sm text-secondary transition-colors hover:text-accent"
    >
      <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
      {label}
    </button>
  );
}
