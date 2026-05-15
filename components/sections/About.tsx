"use client";

import { motion } from "framer-motion";
import { about, sectionCopy } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section className="section-wrap" aria-labelledby="about">
      <SectionHeader
        id="about"
        label={sectionCopy.about.label}
        title={sectionCopy.about.title}
        intro={sectionCopy.about.intro}
      />
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-6 md:p-8"
        >
          <p className="scan-label mb-6">{sectionCopy.about.focusLabel}</p>
          <p className="font-display text-2xl leading-tight text-white md:text-3xl">
            {sectionCopy.about.focus}
          </p>
        </motion.div>
        <div className="space-y-5">
          {about.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.42 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="border-l border-white/10 pl-5 text-base leading-8 text-white/68 md:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
