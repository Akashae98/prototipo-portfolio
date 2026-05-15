"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";
import { navigation, profile } from "@/data/profile";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition duration-300 ${
        scrolled
          ? "border-white/10 bg-void/72 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <a
          href="#hero"
          className="focus-ring font-mono text-xs uppercase tracking-[0.22em] text-white/78 transition hover:text-white"
        >
          CVR
        </a>
        <div className="flex max-w-[68vw] items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.035] p-1 backdrop-blur-xl md:max-w-none">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-white/64 transition hover:bg-white/8 hover:text-white md:px-4"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <a
            aria-label="GitHub"
            className="focus-ring rounded-full border border-white/10 bg-white/[0.035] p-2 text-white/65 transition hover:border-violetCore/50 hover:text-white"
            href={profile.github}
            rel="noreferrer"
            target="_blank"
          >
            <Github size={18} />
          </a>
          <a
            aria-label="LinkedIn"
            className="focus-ring rounded-full border border-white/10 bg-white/[0.035] p-2 text-white/65 transition hover:border-signalBlue/50 hover:text-white"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
