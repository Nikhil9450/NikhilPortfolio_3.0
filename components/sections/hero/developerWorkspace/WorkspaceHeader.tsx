type WorkspaceHeaderProps = {
  environment: string;
  project: string;
  fileName: string;
};

export default function WorkspaceHeader({
  environment,
  project,
  fileName,
}: WorkspaceHeaderProps) {
  return (
    <header className="border-b border-zinc-800">
      {/* Workspace information */}
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          </div>

          <span className="text-xs text-zinc-400">
            {environment}
          </span>
        </div>

        <span className="text-xs font-medium text-zinc-400">
          {project}
        </span>
      </div>

      {/* Active file */}
      <div className="border-t border-zinc-800/60 px-5 py-2.5">
        <span className="text-xs text-zinc-300">
          {fileName}
        </span>
      </div>
    </header>
  );
}