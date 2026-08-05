interface StatusBarProps {
  available: boolean;
  experience: string;
}

export default function StatusBar({
  available,
  experience,
}: StatusBarProps) {
  return (
    <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-6">
      <div className="flex items-center gap-2">
        <div className="relative flex h-2.5 w-2.5">
        {available && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        )}

        <span
            className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            available ? "bg-emerald-400" : "bg-red-400"
            }`}
        />
        </div>

        <span className="text-sm text-zinc-400">
          {available
            ? "Available for Work"
            : "Unavailable"}
        </span>
      </div>

      <span className="text-sm text-zinc-500">
        {experience}
      </span>
    </div>
  );
}