"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { sectionCopy, timeline } from "@/data/profile";

export function Experience() {
  return (
    <section className="section-wrap" aria-labelledby="experience">
      <SectionHeader
        id="experience"
        label={sectionCopy.experience.label}
        title={sectionCopy.experience.title}
        intro={sectionCopy.experience.intro}
      />
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/18 to-transparent md:block" />
        <div className="space-y-4">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={`${item.title}-${item.date}`}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className="glass-panel relative grid gap-5 p-5 md:ml-12 md:grid-cols-[0.8fr_1.2fr] md:p-6"
              >
                <div className="absolute -left-[3.25rem] top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-signalBlue/28 bg-void text-signalBlue shadow-blueGlow md:flex">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/42">
                    {item.date}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-softPink/72">{item.place}</p>
                </div>
                <div>
                  <p className="text-base leading-8 text-white/64">{item.details}</p>
                  {item.bullets ? (
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-white/56">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-softPink/70" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
