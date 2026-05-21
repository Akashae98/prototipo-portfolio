"use client";

import { type MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ExternalLink, Github } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { PortfolioContent, ProjectAction, ProjectActionIconKey } from "@/data/profile";

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

function ActionIcon({ iconKey }: { iconKey: ProjectActionIconKey }) {
  if (iconKey === "github") return <Github size={16} />;
  if (iconKey === "download") return <Download size={16} />;
  return <ExternalLink size={16} />;
}

function PortfolioStructurePreview({
  project
}: {
  project: PortfolioContent["projects"][number];
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0a0d16]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_38%)]" />
      <div className="absolute inset-[1px] rounded-[1.55rem] border border-white/6" />
      <div className="relative p-4 md:p-5">
        <div className="flex h-full flex-col rounded-[1.35rem] border border-white/10 bg-[#0c1019]/86 p-4 shadow-[0_18px_48px_rgba(0,0,0,0.22)]">
          <div className="flex items-center justify-between border-b border-white/8 pb-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
            </div>
            <div className="flex gap-2 text-[0.58rem] font-mono uppercase tracking-[0.16em] text-white/42">
              <span className="rounded-full border border-white/10 px-2 py-1">Profile</span>
              <span className="rounded-full border border-white/10 px-2 py-1">Projects</span>
              <span className="rounded-full border border-white/10 px-2 py-1">Contact</span>
            </div>
          </div>

          <div className="mt-4 grid items-start gap-3 md:grid-cols-[1.14fr_0.86fr]">
            <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-softPink/70">
                Layout structure
              </p>
              <div className="mt-3 space-y-2.5">
                <div className="h-12 rounded-[1rem] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]" />
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <div className="h-14 rounded-[1rem] border border-white/8 bg-white/[0.025]" />
                  <div className="h-14 rounded-[1rem] border border-white/8 bg-white/[0.025]" />
                </div>
                <div className="h-9 rounded-[1rem] border border-white/8 bg-white/[0.02]" />
              </div>
            </div>

            <div className="flex h-full flex-col gap-3">
              <div>
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-signalBlue/68">
                  App structure
                </p>
                <div className="mt-3 space-y-2">
                  {project.media.detailPanel?.items.slice(0, 2).map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-white/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectMediaBlock({
  project,
  highlighted
}: {
  project: PortfolioContent["projects"][number];
  highlighted: boolean;
}) {
  if (project.linkMode === "in-progress" && project.media.detailPanel && !project.media.frames) {
    return <PortfolioStructurePreview project={project} />;
  }

  if (project.media.video) {
    return (
      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#081019]">
        <div className="absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[#081019]/75 to-transparent" />
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={project.media.poster}
          className="h-[180px] w-full object-cover object-center sm:h-[210px] md:h-[290px]"
        >
          <source src={project.media.video} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%),linear-gradient(180deg,rgba(8,16,25,0.06),rgba(8,16,25,0.58))] md:inset-0" />
        <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/32 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/72">
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          {project.media.badgeLabel}
        </div>
        <div className="grid gap-2 border-t border-white/8 bg-[#0b1621]/92 p-4 md:absolute md:bottom-4 md:left-4 md:right-4 md:z-20 md:border-t-0 md:bg-transparent md:p-0 md:backdrop-blur-0 sm:grid-cols-3">
          {project.media.frames?.map((frame) => (
            <div
              key={frame.label}
              className="rounded-2xl border border-white/10 bg-[#07111a]/78 p-2 backdrop-blur"
            >
              <div className="relative h-14 overflow-hidden rounded-xl border border-white/8 sm:h-16">
                {frame.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={frame.src}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: frame.objectPosition ?? "center center" }}
                  >
                    <source src={frame.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    sizes="160px"
                    className="object-cover"
                    style={{ objectPosition: frame.objectPosition ?? "center center" }}
                  />
                )}
              </div>
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.12em] text-white/56">
                {frame.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.media.frames && project.media.detailPanel) {
    const isDevConnect = project.title === "DevConnect";

    return (
      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0a0d16]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.14),transparent_36%)]" />
        <div className="absolute inset-[1px] rounded-[1.55rem] border border-white/6" />
        <div className="relative p-4 md:p-5">
          <div className="relative aspect-[16/8.6] overflow-hidden rounded-[1.3rem] border border-white/10 bg-black/20">
            <Image
              src={project.media.poster}
              alt={project.media.posterAlt}
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className={`object-cover ${isDevConnect ? "scale-[1.08]" : ""}`}
              style={{ objectPosition: isDevConnect ? "center 46%" : "center center" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,17,0.03),rgba(8,10,17,0.18))]" />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {project.media.detailPanel.items.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-white/62"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.media.frames.slice(1).map((frame) => (
              <div
                key={frame.label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-2"
              >
                <div className="relative h-24 overflow-hidden rounded-xl border border-white/8">
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    sizes="260px"
                    className="object-cover"
                    style={{ objectPosition: frame.objectPosition ?? "center center" }}
                  />
                </div>
                <p className="mt-2 text-[0.64rem] uppercase tracking-[0.12em] text-white/52">
                  {frame.label}
                </p>
              </div>
            ))}
            {project.media.frames.length > 1 && project.media.detailPanel.note ? (
                <div
                  className="rounded-2xl border border-violetCore/18 bg-violetCore/[0.07] px-4 py-3 text-sm leading-6 text-white/64"
                >
                  {project.media.detailPanel.note}
                </div>
              ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0a0d16]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.14),transparent_36%)]" />
      <div className="absolute inset-[1px] rounded-[1.55rem] border border-white/6" />
      <div className="relative grid min-h-[250px] gap-4 p-5 md:min-h-[290px] md:grid-cols-[0.9fr_1.1fr] md:p-6">
        <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/18">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#080a11] via-[#0d1120]/82 to-transparent" />
          <Image
            src={project.media.poster}
            alt={project.media.posterAlt}
            fill
            sizes="(min-width: 768px) 260px, 100vw"
            className={`object-cover ${highlighted ? "opacity-70" : "opacity-82"}`}
          />
        </div>
        <div className="relative z-10 flex flex-col justify-between">
          {project.media.detailPanel ? (
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signalBlue/70">
                {project.media.detailPanel.title}
              </p>
              <div className="mt-4 space-y-3">
                {project.media.detailPanel.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white/72"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {project.media.detailPanel ? (
            <div className="mt-5 rounded-2xl border border-violetCore/18 bg-violetCore/[0.07] px-4 py-3 text-sm leading-6 text-white/64">
              {project.media.detailPanel.note}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

type ProjectsProps = {
  projectsCopy: PortfolioContent["sectionCopy"]["projects"];
  projects: PortfolioContent["projects"];
};

export function Projects({ projectsCopy, projects }: ProjectsProps) {
  return (
    <section className="section-wrap" aria-labelledby="projects">
      <SectionHeader
        id="projects"
        label={projectsCopy.label}
        title={projectsCopy.title}
        intro={projectsCopy.intro}
      />
      <div className="grid items-start gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.62, delay: index * 0.08 }}
            onMouseEnter={notifyAquariumTarget}
            onMouseLeave={clearAquariumTarget}
            className="glass-panel group relative self-start overflow-hidden rounded-[2rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-signalBlue/28 md:p-6"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signalBlue/60 to-transparent" />
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violetCore/8 blur-3xl transition group-hover:bg-violetCore/12" />

            <ProjectMediaBlock project={project} highlighted={index === 1} />

            <div className="mt-7 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="scan-label mb-4">{project.type}</p>
                <h3 className="max-w-xl font-display text-2xl font-semibold leading-tight text-white md:text-3xl">
                  {project.title}
                </h3>
              </div>
              <div className="flex flex-col items-start gap-2">
                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                    index === 0
                      ? "border border-violetCore/30 bg-violetCore/10 text-softPink"
                      : "border border-white/10 bg-white/[0.04] text-white/66"
                  }`}
                >
                  {project.status}
                </span>
                <span className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-white/40">
                  {project.statusDetail}
                </span>
              </div>
            </div>

            <p className="mt-5 text-base leading-7 text-white/66">
              {index === 0
                ? project.description
                : project.description.replace(
                    " to present my profile and projects with a clear technical structure.",
                    " with a clear technical structure."
                  )}
            </p>
            <p className="mt-4 border-l border-signalBlue/24 pl-4 text-sm leading-7 text-white/72">
              {project.highlight}
            </p>

            <ul className="mt-5 space-y-2 text-sm leading-6 text-white/58">
              {project.bullets.slice(0, index === 0 ? 4 : 2).map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signalBlue/70" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.slice(0, index === 0 ? 5 : 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.actions.map((action) => (
                <ButtonLink
                  key={action.label}
                  href={action.href}
                  rel={action.external ? "noreferrer" : undefined}
                  target={action.external ? "_blank" : undefined}
                  variant={action.variant ?? "ghost"}
                >
                  <ActionIcon iconKey={action.iconKey} />
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
