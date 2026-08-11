import { footerData } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          {/* Identity */}
          <div>
            <p className="text-sm font-medium text-white">
              {footerData.name}
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              {footerData.role}
            </p>

            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600">
              {footerData.description}
            </p>
          </div>

          {/* Links + Copyright */}
          <div className="flex flex-col gap-6 md:items-end">
            <div className="flex flex-wrap gap-6">
              {footerData.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
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
                <a
                    href="#home"
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
                    Back to top
                    <span className="ml-1">↑</span>
                </a>
            </div>

            <p className="text-xs text-zinc-700">
              {footerData.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}