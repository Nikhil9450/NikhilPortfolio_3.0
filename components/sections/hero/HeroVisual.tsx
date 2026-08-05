import DeveloperCard from "./developer-card/DeveloperCard";
import { motion } from "framer-motion";
export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow */}
        <motion.div
            className="absolute h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-3xl"
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
        <div className="absolute h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-3xl" />
      {/* Card */}
        <div className="relative z-10">
            <DeveloperCard />
        </div>
    </div>
  );
}