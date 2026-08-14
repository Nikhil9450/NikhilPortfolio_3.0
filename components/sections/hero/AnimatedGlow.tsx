"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

export default function AnimatedGlow() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        z-0
        h-[420px]
        w-[420px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-indigo-400
        blur-3xl
      "
      animate={
        shouldReduceMotion
          ? undefined
          : {
              opacity: [0.5, 0.14, 0.5],
              scale: [1, 1.04, 1],
            }
      }
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    />
  );
}