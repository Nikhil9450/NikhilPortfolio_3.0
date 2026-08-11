import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { techStack,heroData } from "@/data/hero";
import TechIcon from "@/components/ui/TechIcon";
export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center">
      {/* Eyebrow */}
      <span className="text-sm font-medium tracking-wide text-zinc-400">
        {heroData.greeting}
      </span>

      {/* Identity */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold xl:text-3xl tracking-wide text-zinc-100">
          {heroData.name}
        </h2>

        <h1
          className="
            max-w-[22ch]
            text-2xl
            font-bold
            leading-tight
            tracking-tight
            text-white
            sm:text-4xl
            xl:text-5xl
          "
        >
        {heroData.headline}
        </h1>
      </div>

      {/* Description */}
      <p
        className="
          mt-4
          max-w-lg
          text-lg
          leading-8
          text-zinc-300
        "
      >
        {heroData.description}
      </p>

      {/* Actions */}
      <div className="mt-4 flex flex-col gap-4 sm:flex-row">
        <Button href="#contact">
          Hire Me
        </Button>

        <Button
          href="#projects"
          variant="secondary"
        >
          View Projects
        </Button>
      </div>

      {/* Tech Stack */}
      <div className="mt-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Tech Stack
        </p>

        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <Badge key={tech}>
              <TechIcon tech={tech} />
              <span>{tech}</span>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}