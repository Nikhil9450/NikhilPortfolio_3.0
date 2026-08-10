import { ReactNode } from "react";

interface CodeLineProps {
  number: number;
  children: ReactNode;
  active?: boolean;
}

export default function CodeLine({
  active = false,
  number,
  children,
}: CodeLineProps) {
  return (
    <div className="group flex items-start gap-4">
      <span
        className="
          w-6
          select-none
          text-right
          text-xs
          text-zinc-600
          transition-colors
          group-hover:text-zinc-400
        "
      >
        {number}
      </span>

      <div
        className={`
          flex-1
          rounded-sm
          ${
            active
              ? "border-l border-indigo-400/70 bg-white/[0.05] pl-1"
              : ""
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}