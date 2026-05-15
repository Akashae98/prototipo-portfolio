"use client";

import { MouseEvent } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Waves } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, sectionCopy } from "@/data/profile";

function notifyAquariumTarget(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  window.dispatchEvent(
    new CustomEvent("quantum-target", {
      detail: {
        x: rect.left + rect.width * 0.72,
        y: rect.top + rect.height * 0.28
      }
    })
  );
}

function clearAquariumTarget() {
  window.dispatchEvent(new CustomEvent("quantum-target-clear"));
}

export function Projects() {
  return (
    <section className="section-wrap" aria-labelledby="projects">
      <SectionHeader
        id="projects"
        label={sectionCopy.projects.label}
        title={sectionCopy.projects.title}
        intro={sectionCopy.projects.intro}
      />
      <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.62, delay: index * 0.08 }}
            onMouseEnter={notifyAquariumTarget}
            onMouseLeave={clearAquariumTarget}
            className="glass-panel group relative min-h-[430px] overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-signalBlue/35 md:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signalBlue/60 to-transparent" />
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violetCore/12 blur-3xl transition group-hover:bg-violetCore/18" />
            <div className="relative mb-10 flex min-h-40 items-center justify-center border border-white/10 bg-black/18">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-signalBlue/24 bg-signalBlue/8 shadow-blueGlow">
                <Waves className="text-signalBlue" size={40} />
              </div>
            </div>
            <p className="scan-label mb-4">{project.type}</p>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h3 className="max-w-xl font-display text-2xl font-semibold leading-tight text-white md:text-3xl">
                {project.title}
              </h3>
              <span className="rounded-full border border-violetCore/30 bg-violetCore/10 px-3 py-1.5 text-xs font-medium text-softPink">
                {project.status}
              </span>
            </div>
            <p className="mt-5 text-base leading-8 text-white/64">
              {project.description}
            </p>
            <p className="mt-4 border-l border-signalBlue/35 pl-4 text-sm leading-7 text-white/72">
              {project.highlight}
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-6 text-white/58">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signalBlue/70" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-white/62"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={project.github} target="_blank" rel="noreferrer" variant="ghost">
                <Github size={16} />
                GitHub
              </ButtonLink>
              <ButtonLink href={project.demo} variant="secondary">
                <ExternalLink size={16} />
                Contact
              </ButtonLink>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
