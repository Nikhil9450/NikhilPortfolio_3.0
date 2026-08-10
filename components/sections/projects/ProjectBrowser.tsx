interface ProjectBrowserProps {
  title: string;
  category: string;
}

export default function ProjectBrowser({
  title,
  category,
}: ProjectBrowserProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
      {/* Browser Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>

        <div className="text-xs text-zinc-600">
          {category}
        </div>
      </div>

      {/* Preview */}
      <div className="flex min-h-[420px] items-center justify-center bg-zinc-900/60">
        <div className="text-center">
          <p className="text-sm text-zinc-600">
            Project Preview
          </p>

          <p className="mt-2 text-lg text-zinc-500">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}