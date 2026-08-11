import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
        variant === "primary"
          ? "bg-white text-black hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)] hover:bg-zinc-200"
          : "border border-zinc-700 bg-transparent text-white hover:-translate-y-1 hover:border-zinc-400 hover:bg-zinc-900/50",
        className
      )}
    >
      {children}
    </Link>
  );
}