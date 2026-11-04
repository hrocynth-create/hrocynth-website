import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({ children, className = "", delay = 0 }: {
  children: ReactNode; className?: string; delay?: number;
}) {
  const props: MotionProps = {
    initial: { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.14 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  };
  return <motion.div {...props} className={className}>{children}</motion.div>;
}
