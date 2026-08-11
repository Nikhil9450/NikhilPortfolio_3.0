"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationData } from "@/data/navigation";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY + 160;

        const sections = navigationData
        .map((item) => {
            const id = item.href.replace("#", "");
            const element = document.getElementById(id);

            if (!element) return null;

            return {
            id,
            top:
                element.getBoundingClientRect().top +
                window.scrollY,
            };
        })
        .filter(
            (
            section
            ): section is { id: string; top: number } =>
            section !== null
        ).sort((a, b) => a.top - b.top);

        let currentSection = "home";

        for (const section of sections) {
        if (scrollPosition >= section.top) {
            currentSection = section.id;
        } else {
            break;
        }
        }
        // console.log(
        // "Active:",
        // currentSection,
        // "Sections:",
        // sections
        // );
        setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
        passive: true,
    });

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);
    const activeFile =
        navigationData.find(
            (item) =>
            item.href.slice(1) === activeSection
        )?.fileName ?? "home.tsx";
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-4 sm:px-6">
        <nav
            aria-label="Main navigation"
            className="
                overflow-hidden
                rounded-2xl
                border
                border-zinc-800/80
                bg-zinc-950/80
                shadow-2xl
                backdrop-blur-xl
            "
        >
          {/* Desktop Header */}
          <div className="hidden h-12 items-stretch md:flex">
            {/* Logo */}
            <Link
              href="#home"
              className="
                flex
                w-14
                shrink-0
                items-center
                justify-center
                border-r
                border-zinc-800
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-zinc-900
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-zinc-400
                focus-visible:ring-inset
              "
            >
              N
            </Link>

            {/* File Tabs */}
            <div className="flex min-w-0 flex-1">
              {navigationData.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group
                    flex
                    relative
                    min-w-0
                    items-center
                    gap-2
                    border-r
                    border-zinc-800
                    px-5
                    text-sm
                    text-zinc-500
                    transition-colors
                    hover:bg-zinc-900
                    hover:text-zinc-200
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-zinc-400
                    focus-visible:ring-inset
                    ${
                        activeSection === item.href.slice(1)
                        ? "bg-zinc-900 text-zinc-200"
                        : "text-zinc-500"
                    }
                  `}
                >
                    {activeSection === item.href.slice(1) && (
                        <span
                            className="
                            absolute
                            inset-x-0
                            top-0
                            h-px
                            bg-zinc-400
                            "
                        />
                    )}
                  <span className="truncate">
                    {item.fileName}
                  </span>

                  {/* <span className="text-xs text-zinc-700 transition-colors group-hover:text-zinc-500">
                    ×
                  </span> */}
                </Link>
              ))}
            </div>

            {/* Status */}
            <div className="flex shrink-0 items-center gap-2 px-5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-xs text-zinc-500">
                available
              </span>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="flex h-12 items-center justify-between md:hidden">
            <Link
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="
                group
                relative
                flex
                h-full
                w-14
                items-center
                justify-center
                border-r
                border-zinc-800
                text-sm
                font-semibold
                text-white
              "
            >
              N
            </Link>

            <div className="flex min-w-0 flex-1 items-center px-4">
            <span className="truncate font-mono text-xs text-zinc-400 transition-colors">
               {activeFile}
            </span>
            </div>

            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() =>
                setMenuOpen((open) => !open)
              }
              className="
                flex
                h-full
                w-14
                items-center
                justify-center
                border-l
                border-zinc-800
                text-lg
                text-zinc-400
                transition-colors
                hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-zinc-400
                focus-visible:ring-inset
              "
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
              mt-2
              overflow-hidden
              rounded-2xl
              border
              border-zinc-800/80
              bg-zinc-950/95
              shadow-2xl
              backdrop-blur-xl
              md:hidden
            "
          >
            {navigationData.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`
                flex
                items-center
                gap-4
                border-b
                border-zinc-800/70
                px-5
                py-4
                transition-colors
                last:border-b-0
                hover:bg-zinc-900
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-zinc-400
                focus-visible:ring-inset
                ${
                    activeSection === item.href.slice(1)
                    ? "bg-zinc-900 text-zinc-200"
                    : ""
                }
                `}
              >
                <span className="font-mono text-xs text-zinc-700">
                  {String(index).padStart(2, "0")}
                </span>

                <span className="font-mono text-sm text-zinc-400">
                  {item.fileName}
                </span>
                {activeSection === item.href.slice(1) && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}