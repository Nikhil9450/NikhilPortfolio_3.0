import Image from "next/image";
import ProjectLinks from "./ProjectLinks";
interface ProjectRowProps {
    number: string;
    title: string;
    description: string;
    category: string;
    technologies: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
    reversed?: boolean;
}

export default function ProjectRow({
  number,
  title,
  description,
  category,
  technologies,
  image,
  liveUrl,
  githubUrl,
  reversed = false,
}: ProjectRowProps) {
  return (
    <article className="grid overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 lg:grid-cols-2">
      {/* Project Preview */}
      <div
        className={`relative aspect-[16/10] overflow-hidden bg-zinc-900 lg:aspect-auto ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="
            object-cover
            object-top
            transition-transform
            duration-500
            ease-out
            hover:scale-[1.02]
          "
        />
      </div>

      {/* Project Information */}
      <div
        className={`flex flex-col justify-center p-8 lg:p-12 ${
          reversed ? "lg:order-1" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-600">
            {number}
          </span>

          <span className="text-xs tracking-wide text-zinc-600">
            {category}
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-medium text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="text-sm text-zinc-500"
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-8">
            <ProjectLinks
                title={title}
                liveUrl={liveUrl}
                githubUrl={githubUrl}
            />
        </div>
      </div>
    </article>
  );
}