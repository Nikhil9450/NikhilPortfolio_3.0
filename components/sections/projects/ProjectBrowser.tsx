import Image from "next/image";

interface ProjectBrowserProps {
  title: string;
  category: string;
  image: string;
}

export default function ProjectBrowser({
  title,
  category,
  image,
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

        <span className="text-xs text-zinc-600">
          {category}
        </span>
      </div>

      {/* Project Preview */}
      <div className="group relative aspect-[16/9] overflow-hidden bg-zinc-900">
        <Image
            src={image}
            alt={`${title} project preview`}
            fill
            className="
                object-cover
                object-top
                transition-transform
                duration-500
                ease-out
                group-hover:scale-[1.02]
            "
            sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>
    </div>
  );
}