"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

type FadeInOnScrollProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  /** y offset in px */
  y?: number;
  /** amount of element that must be visible to trigger; 0..1 */
  amount?: number;
  /** trigger only once */
  once?: boolean;
};

/**
 * Reusable scroll-in animation:
 *  translateY(30px) -> 0 + opacity 0 -> 1, 700ms ease-out (per design spec)
 */
export default function FadeInOnScroll({
  children,
  delay = 0,
  y = 30,
  amount = 0.2,
  once = true,
  className,
  ...rest
}: FadeInOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
