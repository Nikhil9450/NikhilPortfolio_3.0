interface EditorHeaderProps {
  fileName: string;
}

export default function EditorHeader({
  fileName,
}: EditorHeaderProps) {
  return (
<div className="mb-6 flex items-center justify-between border-b border-zinc-800 pb-4">
  <div className="flex items-center gap-2">
    <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
    <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
  </div>

  <span className="text-sm text-zinc-500">
    {fileName}
  </span>

  <div className="w-10" />
</div>
  );
}