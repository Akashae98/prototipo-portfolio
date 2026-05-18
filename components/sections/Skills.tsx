"use client";

import { motion } from "framer-motion";
import { Code2, Database, Network, Sparkles, Terminal } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { PortfolioContent, SkillGroupIconKey } from "@/data/profile";

const skillIcons: Record<SkillGroupIconKey, typeof Code2> = {
  code2: Code2,
  database: Database,
  network: Network,
  sparkles: Sparkles,
  terminal: Terminal
};

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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {skillGroups.map((group, index) => {
          const Icon = skillIcons[group.iconKey];
          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="glass-panel group min-h-[252px] p-5 transition duration-300 hover:-translate-y-1 hover:border-violetCore/28"
            >
              <div className="mb-7 flex items-center justify-between">
                <Icon className="text-signalBlue/90" size={21} />
                <span className="font-mono text-xs text-white/36">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    className="rounded-full border border-white/9 bg-white/[0.03] px-3 py-1.5 text-[0.72rem] font-medium leading-5 text-white/62 transition group-hover:border-white/14 group-hover:text-white/76"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
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
        className="glass-panel mt-5 flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between"
      >
        <p className="scan-label">{currentLearning.title}</p>
        <p className="max-w-3xl text-base leading-7 text-white/64">
          {currentLearning.text}
        </p>
      </motion.div>
    </section>
  );
}
