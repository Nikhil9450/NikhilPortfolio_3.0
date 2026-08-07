"use client";

import { motion } from "framer-motion";

export default function AnimatedGlow() {
  return (
    <motion.div
      className="absolute h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-3xl"
      animate={{
        opacity: [0.15, 0.3, 0.15],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}