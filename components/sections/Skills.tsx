"use client";

import { motion } from "framer-motion";
import { Code2, Database, Network, Sparkles, Terminal } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type {
  PortfolioContent,
  SkillGroupIconKey,
  SkillGroupVisualWeight,
  SkillItem
} from "@/data/profile";

const skillIcons: Record<SkillGroupIconKey, typeof Code2> = {
  code2: Code2,
  database: Database,
  network: Network,
  sparkles: Sparkles,
  terminal: Terminal
};

const skillChipBaseClass =
  "rounded-full border px-3 py-1.5 text-[0.71rem] font-medium leading-5 transition-colors duration-200";

const skillChipClassNames = {
  technology: {
    primary:
      "border-signalBlue/30 bg-signalBlue/[0.09] text-white/88 hover:border-signalBlue/48 hover:bg-signalBlue/[0.14]",
    secondary:
      "border-white/10 bg-white/[0.03] text-white/62 hover:border-white/18 hover:text-white/76"
  },
  concept: {
    primary:
      "border-violetCore/16 bg-violetCore/[0.035] text-white/66 hover:border-violetCore/24 hover:text-white/76",
    secondary:
      "border-violetCore/12 bg-transparent text-white/46 hover:border-violetCore/18 hover:text-white/62"
  }
} as const;

const skillCardClassNames: Record<SkillGroupVisualWeight, string> = {
  primary: "lg:col-span-3 xl:col-span-4 px-5 py-5 md:px-6 md:py-6",
  standard:
    "lg:col-span-3 xl:col-span-4 px-5 py-4 md:px-5 md:py-5 bg-[linear-gradient(180deg,rgba(255,255,255,0.038),rgba(255,255,255,0.02))]",
  feature:
    "lg:col-span-6 xl:col-span-8 px-5 py-5 md:px-6 md:py-6 border-violetCore/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.052),rgba(255,255,255,0.024))]",
  compact:
    "lg:col-span-3 xl:col-span-4 px-5 py-4 bg-[linear-gradient(180deg,rgba(255,255,255,0.028),rgba(255,255,255,0.012))]"
};

const skillTitleClassNames: Record<SkillGroupVisualWeight, string> = {
  primary: "text-[1.32rem] md:text-[1.42rem]",
  standard: "text-[1.18rem]",
  feature: "text-[1.35rem] md:text-[1.55rem]",
  compact: "text-lg"
};

const skillIconClassNames: Record<SkillGroupVisualWeight, string> = {
  primary: "text-signalBlue",
  standard: "text-signalBlue",
  feature: "text-signalBlue",
  compact: "text-signalBlue"
};

const skillIconSizes: Record<SkillGroupVisualWeight, number> = {
  primary: 21,
  standard: 20,
  feature: 21,
  compact: 18
};

const skillChipGapClassNames: Record<SkillGroupVisualWeight, string> = {
  primary: "mt-4 gap-2.5",
  standard: "mt-4 gap-2",
  feature: "mt-5 gap-2.5 md:max-w-[44rem]",
  compact: "mt-3.5 gap-2"
};

const skillBodyClassNames: Record<SkillGroupVisualWeight, string> = {
  primary: "",
  standard: "",
  feature: "relative z-10 flex min-h-[8.5rem] flex-col justify-between",
  compact: "relative z-10 opacity-[0.94]"
};

function getSkillChipClassName(item: SkillItem) {
  const kind = item.kind ?? "technology";
  const emphasis = item.emphasis ?? "secondary";

  return `${skillChipBaseClass} ${skillChipClassNames[kind][emphasis]}`;
}

function getSkillCardClassName(visualWeight: SkillGroupVisualWeight) {
  return [
    "glass-panel group relative h-full overflow-hidden border-white/8 transition duration-300",
    "hover:-translate-y-1 hover:border-white/14 hover:shadow-[0_28px_80px_rgba(96,165,250,0.08)]",
    skillCardClassNames[visualWeight]
  ].join(" ");
}

type SkillsProps = {
  skillsCopy: PortfolioContent["sectionCopy"]["skills"];
  currentLearning: PortfolioContent["currentLearning"];
  skillGroups: PortfolioContent["skillGroups"];
};

export function Skills({ skillsCopy, currentLearning, skillGroups }: SkillsProps) {
  return (
    <section className="section-wrap" aria-labelledby="skills">
      <SectionHeader
        id="skills"
        label={skillsCopy.label}
        title={skillsCopy.title}
        intro={skillsCopy.intro}
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-12">
        {skillGroups.map((group, index) => {
          const Icon = skillIcons[group.iconKey];
          const visualWeight = group.visualWeight ?? "standard";

          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className={getSkillCardClassName(visualWeight)}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signalBlue/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              {visualWeight === "feature" ? (
                <>
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-[34%] bg-[radial-gradient(circle_at_70%_40%,rgba(96,165,250,0.08),transparent_58%)] opacity-80" />
                  <div className="pointer-events-none absolute bottom-0 left-[1.5rem] right-[1.5rem] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </>
              ) : null}
              <div className={skillBodyClassNames[visualWeight]}>
                <div className="mb-5 flex items-center">
                  <Icon
                    className={skillIconClassNames[visualWeight]}
                    size={skillIconSizes[visualWeight]}
                  />
                </div>
                <div
                  className={
                    visualWeight === "feature"
                      ? "max-w-[27rem]"
                      : visualWeight === "compact"
                        ? "max-w-[18rem]"
                        : undefined
                  }
                >
                  <h3
                    className={`font-display font-semibold leading-tight text-white ${skillTitleClassNames[visualWeight]}`}
                  >
                    {group.title}
                  </h3>
                  {visualWeight === "feature" ? (
                    <div className="mt-3 h-px w-20 bg-gradient-to-r from-signalBlue/28 via-white/12 to-transparent" />
                  ) : null}
                </div>
                <div className={`flex flex-wrap ${skillChipGapClassNames[visualWeight]}`}>
                  {group.items.map((item) => (
                    <span className={getSkillChipClassName(item)} key={item.label}>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
        className="glass-panel mt-5 flex flex-col gap-2.5 border-white/8 px-5 py-4 md:grid md:grid-cols-[11rem_minmax(0,1fr)] md:items-center md:gap-5"
      >
        <p className="scan-label text-[0.66rem] text-softPink/68">
          {currentLearning.title}
        </p>
        <p className="max-w-3xl text-[0.98rem] leading-7 text-white/72 md:justify-self-start">
          {currentLearning.text}
        </p>
      </motion.div>
    </section>
  );
}
