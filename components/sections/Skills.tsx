"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { currentLearning, sectionCopy, skillGroups } from "@/data/profile";

export function Skills() {
  return (
    <section className="section-wrap" aria-labelledby="skills">
      <SectionHeader
        id="skills"
        label={sectionCopy.skills.label}
        title={sectionCopy.skills.title}
        intro={sectionCopy.skills.intro}
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="glass-panel group min-h-[260px] p-5 transition duration-300 hover:-translate-y-1 hover:border-violetCore/35"
            >
              <div className="mb-8 flex items-center justify-between">
                <Icon className="text-signalBlue" size={22} />
                <span className="font-mono text-xs text-white/36">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                {group.title}
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-white/64 transition group-hover:border-white/16 group-hover:text-white/78"
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
        <p className="max-w-3xl text-base leading-7 text-white/68">
          {currentLearning.text}
        </p>
      </motion.div>
    </section>
  );
}
