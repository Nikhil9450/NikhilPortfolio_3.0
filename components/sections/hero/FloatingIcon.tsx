"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingIconProps {
  children: ReactNode;
  className?: string;
}

export default function FloatingIcon({
  children,
  className,
}: FloatingIconProps) {
  return (
    <motion.div
      animate={{
        x: [0, 8, -6, 0],
        y: [0, -10, 6, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}