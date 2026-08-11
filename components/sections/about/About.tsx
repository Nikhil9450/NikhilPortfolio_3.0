import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section id="about" className=" py-25">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm tracking-[0.25em] text-zinc-500">
            {aboutData.label}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {aboutData.title}
          </h2>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Introduction */}
          <div className="space-y-6">
            {aboutData.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-2xl text-lg leading-8 text-zinc-400"
              >
                {paragraph}
              </p>
            ))}

            {/* Facts */}
            <div className="grid gap-8 border-t border-zinc-800 pt-8 sm:grid-cols-3">
              {aboutData.facts.map((fact) => (
                <div key={fact.label}>
                  <p className="text-2xl font-medium text-white">
                    {fact.value}
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Principles */}
          <div className="divide-y divide-zinc-800">
            {aboutData.principles.map((principle) => (
                <div
                key={principle.number}
                className="
                    group
                    py-6
                    first:pt-0
                    last:pb-0
                "
                >
                <div className="flex gap-6">
                    <span
                    className="
                        text-sm
                        text-zinc-600
                        transition-colors
                        duration-200
                        group-hover:text-indigo-400
                    "
                    >
                    {principle.number}
                    </span>

                    <div>
                    <h3
                        className="
                        text-lg
                        font-medium
                        text-white
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                        "
                    >
                        {principle.title}
                    </h3>

                    <p
                        className="
                        mt-2
                        leading-7
                        text-zinc-500
                        transition-colors
                        duration-200
                        group-hover:text-zinc-400
                        "
                    >
                        {principle.description}
                    </p>
                    </div>
                </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}