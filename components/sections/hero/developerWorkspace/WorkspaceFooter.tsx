interface WorkspaceFooterProps {
  available: boolean;
}

export default function WorkspaceFooter({
  available,
}: WorkspaceFooterProps) {
  return (
    <footer className="border-t border-zinc-800 px-6 py-4">
      <div className="flex items-center gap-2 text-sm">
        <span
          className={`h-2 w-2 rounded-full ${
            available
              ? "bg-emerald-400"
              : "bg-zinc-500"
          }`}
        />

        <span className="text-zinc-300">
          {available
            ? "Available for Work"
            : "Currently Unavailable"}
        </span>
      </div>

      <div className="mt-3 text-xs text-zinc-500">
        ✓ Build Passed
      </div>
    </footer>
  );
}