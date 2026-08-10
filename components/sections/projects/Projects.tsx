import { projectsData } from "@/data/projects";
import ProjectBrowser from "./ProjectBrowser";

export default function Projects() {
  const featuredProject = projectsData.projects.find(
    (project) => project.featured
  );

  if (!featuredProject) return null;

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm tracking-[0.25em] text-zinc-500">
            {projectsData.label}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {projectsData.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {projectsData.description}
          </p>
        </div>

        {/* Featured Project */}
        <div className="mt-16">
          <ProjectBrowser
            title={featuredProject.title}
            category={featuredProject.category}
          />

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm text-zinc-600">
                {featuredProject.number}
              </p>

              <h3 className="mt-2 text-2xl font-medium text-white">
                {featuredProject.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {featuredProject.description}
              </p>
            </div>

            <div className="flex max-w-md flex-wrap gap-x-4 gap-y-2 md:justify-end">
              {featuredProject.technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="text-sm text-zinc-500"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}