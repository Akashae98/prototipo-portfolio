"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Cpu, Network } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { PortfolioContent, TimelineIconKey } from "@/data/profile";

const timelineIcons: Record<TimelineIconKey, typeof Briefcase> = {
  briefcase: Briefcase,
  code2: Code2,
  cpu: Cpu,
  network: Network
};

type ExperienceProps = {
  experienceCopy: PortfolioContent["sectionCopy"]["experience"];
  timeline: PortfolioContent["timeline"];
};

export function Experience({ experienceCopy, timeline }: ExperienceProps) {
  return (
    <section className="section-wrap" aria-labelledby="experience">
      <SectionHeader
        id="experience"
        label={experienceCopy.label}
        title={experienceCopy.title}
        intro={experienceCopy.intro}
      />
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/18 to-transparent md:block" />
        <div className="space-y-4">
          {timeline.map((item, index) => {
            const Icon = timelineIcons[item.iconKey];
            const isPrimary = index === 0;
            return (
              <motion.article
                key={`${item.title}-${item.date}`}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className={`glass-panel relative grid gap-4 p-5 md:ml-12 md:grid-cols-[0.82fr_1.18fr] ${
                  isPrimary ? "md:p-6" : "md:p-5"
                }`}
              >
                <div className="absolute -left-[3.25rem] top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-signalBlue/28 bg-void text-signalBlue shadow-blueGlow md:flex">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/42">
                    {item.date}
                  </p>
                  <h3
                    className={`mt-3 font-display font-semibold text-white ${
                      isPrimary ? "text-xl md:text-[1.72rem]" : "text-[1.15rem] md:text-[1.3rem]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-softPink/72">{item.place}</p>
                </div>
                <div>
                  <p
                    className={`text-white/64 ${
                      isPrimary ? "text-base leading-7" : "text-[0.96rem] leading-7"
                    }`}
                  >
                    {item.details}
                  </p>
                  {item.bullets ? (
                    <ul
                      className={`text-sm leading-6 text-white/56 ${
                        isPrimary ? "mt-4 space-y-2" : "mt-3 space-y-1.5"
                      }`}
                    >
                      {item.bullets.slice(0, isPrimary ? 4 : 3).map((bullet) => (
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
