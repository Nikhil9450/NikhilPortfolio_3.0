import { contactData } from "@/data/contact";

export default function Contact() {
  return (
    <section id="contact" className=" py-25">
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="border-t border-zinc-800 pt-16">
          {/* Section Label */}
          <p className="text-sm tracking-[0.25em] text-zinc-500">
            {contactData.label}
          </p>

          {/* Main CTA */}
          <div className="mt-8 max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {contactData.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              {contactData.description}
            </p>
          </div>

          {/* Contact Actions */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <a
            href={`mailto:${contactData.email}`}
            className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                lg:text-lg
                font-medium
                text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-zinc-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-zinc-950
                "
            >
            <span className="relative">
                {contactData.email}

                <span
                className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-full
                    origin-left
                    scale-x-0
                    bg-indigo-400
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-zinc-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-zinc-950
                "
                />
            </span>

            <span
                className="
                transition-transform
                duration-200
                group-hover:translate-x-1
                group-hover:-translate-y-1
                "
            >
                ↗
            </span>
            </a>

            <div className="flex items-center gap-6">
              {contactData.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm
                    text-zinc-500
                    transition-colors
                    hover:text-zinc-200
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-zinc-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-zinc-950
                  "
                >
                  {link.label}
                 <span
  aria-hidden="true"
  className="ml-1"
>
  ↗
</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}