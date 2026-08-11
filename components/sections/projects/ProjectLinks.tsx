interface ProjectLinksProps {
  title: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectLinks({
  liveUrl,
  githubUrl,
  title,
}: ProjectLinksProps) {
  if (!liveUrl && !githubUrl) {
    return null;
  }

  return (
    <div className="flex items-center gap-5">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-sm
            text-zinc-300
            transition-colors
            hover:text-white
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-zinc-400
            focus-visible:ring-offset-2
            focus-visible:ring-offset-zinc-950
          "
        >
          View Live
         <span
  aria-hidden="true"
  className="ml-1"
>
  ↗
</span>
        </a>
      )}

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-sm
            text-zinc-500
            transition-colors
            hover:text-zinc-300
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-zinc-400
            focus-visible:ring-offset-2
            focus-visible:ring-offset-zinc-950
          "
        >
          GitHub
         <span
  aria-hidden="true"
  className="ml-1"
>
  ↗
</span>
        </a>
      )}
    </div>
  );
}