import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className=" py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm tracking-[0.25em] text-zinc-500">
            {experienceData.label}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {experienceData.title}
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative mt-16">
        {/* Timeline line */}
        <div
            className="
            absolute
            left-[228px]
            top-4
            bottom-4
            hidden
            w-px
            bg-zinc-800
            lg:block
            "
        />

        {experienceData.entries.map((entry, index) => {
            const isCurrent = index === 0;
            return(
            
            <article
            key={`${entry.company}-${entry.period}`}
            className="
                group
                relative
                grid
                gap-8
                border-t
                border-zinc-800
                py-10
                lg:grid-cols-[220px_1fr]
            "
            >
            {/* Date */}
            <div>
                <p
                className={`text-sm ${
                    isCurrent
                    ? "text-zinc-300"
                    : "text-zinc-500"
                }`}
                >
                {entry.period}
                </p>
            </div>

            {/* Timeline marker + Content */}
            <div className="relative">
                {/* Timeline dot */}
                <span
                    className={`
                            absolute
                            -left-[8px]
                            top-2
                            hidden
                            h-3.5
                            w-3.5
                            rounded-full
                            border
                            bg-zinc-950
                            group-hover:scale-110
                            lg:block
                            ${
                            isCurrent
                                ? "border-indigo-400/70"
                                : "border-zinc-700"
                            }
                        `}
                        />

                <div className="max-w-3xl px-6">
                <h3
                    className="
                        text-xl
                        font-medium
                        text-white
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                    "
                >
                    {entry.role}
                </h3>

                <p
                    className="
                        mt-2
                        text-zinc-400
                        transition-colors
                        duration-200
                        group-hover:text-zinc-300
                    "
                >
                    {entry.company}
                </p>

                <p className="mt-1 text-sm text-zinc-600">
                    {entry.location}
                </p>

                <p className="mt-6 leading-7 text-zinc-400">
                    {entry.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                    {entry.technologies.map((technology) => (
                    <span
                    key={technology}
                    className={`text-sm ${
                        isCurrent
                        ? "text-zinc-400"
                        : "text-zinc-500"
                    }`}
                    >
                    {technology}
                    </span>
                    ))}
                </div>
                </div>
            </div>
            </article>
        )})}
        </div>
      </div>
    </section>
  );
}