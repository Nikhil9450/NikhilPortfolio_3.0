export default function DeveloperCard() {
  return (
    <div
        className="
            relative
            w-full
            max-w-md
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-900/70
            p-10
            backdrop-blur-xl
        "
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="mb-6 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />

                <span className="ml-4 text-sm text-zinc-500">
                    developer.ts
                </span>
            </div>
            <p className="text-sm text-zinc-400">
              Full Stack Developer
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Nikhil Kushwaha
            </h3>
          </div>

          <div className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>

        <div className="rounded-2xl bg-black/40 p-6">
            <pre className="overflow-x-auto rounded-2xl bg-black/40 p-6 text-sm text-zinc-300">
            <code>{`const developer = {
            name: "Nikhil",
            frontend: true,
            performance: true,
            };`}</code>
            </pre>
            <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-6">
                <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                    <span className="text-sm text-zinc-400">
                    Available for Work
                    </span>
                </div>
                <span className="text-sm text-zinc-500">
                    3+ Years Experience
                </span>
            </div>            
        </div>
      </div>
    </div>
  );
}