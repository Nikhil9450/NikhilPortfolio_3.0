import { heroData } from "@/data/hero";

import EditorHeader from "./EditorHeader";
import CodePreview from "./CodePreview";
import StatusBar from "./StatusBar";

export default function DeveloperCard() {
  const { developer } = heroData;

  return (
    <div className="
        relative
        w-full
        max-w-sm
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/70
        p-10
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-zinc-700
        hover:shadow-2xl
        ">
      <EditorHeader fileName={developer.fileName} />

      <CodePreview code={developer.code} />

      <StatusBar
        available={developer.available}
        experience={developer.experience}
      />
    </div>
  );
}