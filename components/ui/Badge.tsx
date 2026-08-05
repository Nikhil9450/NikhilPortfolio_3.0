import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white",
        className
      )}
    >
      {children}
    </span>
  );
}