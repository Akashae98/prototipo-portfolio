"use client";

import { motion } from "framer-motion";
import type { PortfolioContent } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";

type AboutProps = {
  aboutCopy: PortfolioContent["sectionCopy"]["about"];
  about: PortfolioContent["about"];
};

export function About({ aboutCopy, about }: AboutProps) {
  return (
    <section className="section-wrap" aria-labelledby="about">
      <SectionHeader
        id="about"
        label={aboutCopy.label}
        title={aboutCopy.title}
        intro={aboutCopy.intro}
      />
      <div className="grid gap-6 md:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-6 md:p-7"
        >
          <p className="scan-label mb-6">{aboutCopy.focusLabel}</p>
          <p className="max-w-[22rem] font-display text-2xl leading-tight text-white md:text-[2rem]">
            {aboutCopy.focus}
          </p>
        </motion.div>
        <div className="space-y-4">
          {about.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.42 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="border-l border-white/8 pl-5 text-base leading-7 text-white/66 md:text-[1.05rem] md:leading-8"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
