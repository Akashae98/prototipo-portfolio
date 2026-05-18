"use client";

import { motion } from "framer-motion";
import type { PortfolioContent } from "@/data/profile";

type DeveloperSignalsProps = {
  developerSignals: PortfolioContent["developerSignals"];
};

export function DeveloperSignals({ developerSignals }: DeveloperSignalsProps) {
  return (
    <section className="section-wrap pt-0" aria-labelledby="developer-signals">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="glass-panel overflow-hidden rounded-[2rem]"
      >
        <div className="grid gap-px bg-white/7 lg:grid-cols-[1.16fr_0.84fr]">
          <div className="bg-void/78 p-6 md:p-8">
            <p className="scan-label mb-4" id="developer-signals">
              {developerSignals.label}
            </p>
            <h2 className="max-w-2xl font-display text-2xl font-semibold leading-tight text-bone md:text-4xl">
              {developerSignals.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/63 md:text-lg">
              {developerSignals.intro}
            </p>
            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {developerSignals.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.15rem] border border-white/8 bg-white/[0.02] px-4 py-4"
                >
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/38">
                    {stat.label}
                  </p>
                  <p className="mt-2.5 text-sm leading-6 text-white/70">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.026),rgba(255,255,255,0.012))] p-6 md:p-8">
            <div className="rounded-[1.25rem] border border-white/9 bg-black/12 p-5">
              <p className="scan-label mb-3">{developerSignals.building.title}</p>
              <p className="text-base leading-7 text-white/70">{developerSignals.building.text}</p>
            </div>
            <div className="mt-3 rounded-[1.25rem] border border-white/9 bg-white/[0.025] p-5">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-softPink/66">
                {developerSignals.highlight.label}
              </p>
              <h3 className="mt-2.5 font-display text-xl font-semibold text-bone">
                {developerSignals.highlight.title}
              </h3>
              <p className="mt-2.5 text-sm leading-7 text-white/61">
                {developerSignals.highlight.text}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
