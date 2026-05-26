"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PortfolioContent } from "@/data/profile";

type DeveloperSignalsProps = {
  developerSignals: PortfolioContent["developerSignals"];
};

function AmbientSignalField() {
  const reducedMotion = useReducedMotion();
  const ribbonCells = Array.from({ length: 18 }, (_, index) => index);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-38 md:opacity-62"
    >
      <div className="absolute right-[-18%] top-[2%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08),rgba(96,165,250,0.04)_36%,transparent_70%)] blur-3xl md:right-[-14%] md:top-[-1%] md:h-[540px] md:w-[540px]" />
      <div className="absolute right-[0%] top-[16%] hidden h-[300px] w-[300px] rounded-full border border-white/[0.03] bg-white/[0.01] blur-[1px] md:block md:right-[2%] md:top-[12%] md:h-[380px] md:w-[380px]" />

      <motion.div
        className="absolute right-[-18%] top-[8%] hidden h-[410px] w-[410px] md:block md:right-[-6%] md:top-[1%] md:h-[500px] md:w-[500px]"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      >
        <svg
          className="h-full w-full overflow-visible"
          fill="none"
          role="presentation"
          viewBox="0 0 520 520"
        >
          <defs>
            <linearGradient id="developer-signal-orbit" x1="74" x2="446" y1="118" y2="402">
              <stop stopColor="rgba(245,245,245,0)" />
              <stop offset="0.36" stopColor="rgba(245,245,245,0.36)" />
              <stop offset="0.68" stopColor="rgba(216,180,254,0.28)" />
              <stop offset="1" stopColor="rgba(96,165,250,0)" />
            </linearGradient>
            <linearGradient id="developer-signal-spiral" x1="136" x2="414" y1="106" y2="420">
              <stop stopColor="rgba(96,165,250,0)" />
              <stop offset="0.46" stopColor="rgba(96,165,250,0.24)" />
              <stop offset="0.82" stopColor="rgba(216,180,254,0.18)" />
              <stop offset="1" stopColor="rgba(245,245,245,0)" />
            </linearGradient>
            <filter id="developer-signal-node-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>

          <motion.g
            animate={reducedMotion ? undefined : { rotate: -360 }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          >
            <ellipse
              cx="260"
              cy="260"
              rx="192"
              ry="74"
              stroke="url(#developer-signal-orbit)"
              strokeWidth="0.75"
              transform="rotate(-31 260 260)"
            />
            <ellipse
              cx="260"
              cy="260"
              rx="150"
              ry="52"
              stroke="rgba(245,245,245,0.09)"
              strokeDasharray="1 12"
              strokeLinecap="round"
              strokeWidth="1"
              transform="rotate(21 260 260)"
            />
          </motion.g>

          <motion.path
            animate={
              reducedMotion
                ? undefined
                : { pathLength: [0.7, 1, 0.7], opacity: [0.36, 0.62, 0.36] }
            }
            d="M158 333C112 258 151 155 236 141C333 125 415 204 391 288C370 362 272 394 217 347C181 316 184 251 225 229C272 204 333 229 336 278C339 323 281 344 250 314"
            stroke="url(#developer-signal-spiral)"
            strokeLinecap="round"
            strokeWidth="0.9"
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {[
            { cx: 354, cy: 181, fill: "rgba(216,180,254,0.58)", delay: 0 },
            { cx: 167, cy: 306, fill: "rgba(96,165,250,0.5)", delay: 1.6 },
            { cx: 292, cy: 335, fill: "rgba(245,245,245,0.48)", delay: 3.2 },
            { cx: 224, cy: 221, fill: "rgba(216,180,254,0.34)", delay: 4.8 }
          ].map((node) => (
            <motion.g
              key={`${node.cx}-${node.cy}`}
              animate={
                reducedMotion
                  ? undefined
                  : { opacity: [0.44, 0.92, 0.44], scale: [0.92, 1.18, 0.92] }
              }
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              transition={{
                delay: node.delay,
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <circle
                cx={node.cx}
                cy={node.cy}
                fill={node.fill}
                filter="url(#developer-signal-node-glow)"
                r="10"
              />
              <circle cx={node.cx} cy={node.cy} fill={node.fill} r="2.2" />
            </motion.g>
          ))}
        </svg>
      </motion.div>

      <div className="absolute bottom-[34%] right-[-2%] hidden w-[55%] min-w-[440px] rotate-[-3deg] lg:block">
        <div className="h-px bg-gradient-to-r from-transparent via-white/22 to-transparent" />
        <div className="mt-[-3px] flex items-center gap-2 pl-[18%]">
          {ribbonCells.map((cell) => (
            <motion.span
              key={cell}
              animate={
                reducedMotion
                  ? undefined
                  : { opacity: [0.16, 0.5, 0.16], scaleX: [0.62, 1, 0.62] }
              }
              className="h-[3px] w-4 rounded-full bg-gradient-to-r from-white/10 via-signalBlue/28 to-softPink/18"
              transition={{
                delay: cell * 0.22,
                duration: 5.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function DeveloperSignals({ developerSignals }: DeveloperSignalsProps) {
  const reducedMotion = useReducedMotion();
  const hasFocusTitle = Boolean(developerSignals.focusPanel.title);

  return (
    <section className="section-wrap pt-0" aria-labelledby="developer-signals">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="glass-panel relative overflow-hidden rounded-[2rem]"
      >
        <AmbientSignalField />
        <div className="relative z-10 grid gap-px bg-white/7 lg:grid-cols-[1.14fr_0.86fr]">
          <div className="relative bg-void/78 p-6 md:p-8">
            <p className="scan-label mb-4" id="developer-signals">
              {developerSignals.label}
            </p>
            <h2 className="max-w-2xl font-display text-2xl font-semibold leading-tight text-bone md:text-4xl">
              {developerSignals.title}
            </h2>
            <p className="mt-4 max-w-[36rem] text-base leading-7 text-white/68 md:text-lg md:leading-8">
              {developerSignals.intro}
            </p>
            <div className="relative mt-7 max-w-[30rem]">
              <div className="relative h-px max-w-[9rem] bg-gradient-to-r from-white/12 via-white/6 to-transparent">
                <motion.span
                  aria-hidden="true"
                  animate={reducedMotion ? undefined : { x: ["-12%", "118%"] }}
                  className="absolute left-0 top-0 h-px w-14 bg-gradient-to-r from-transparent via-signalBlue/42 to-transparent"
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <div className="relative pt-3">
                {hasFocusTitle ? (
                  <p className="font-mono text-[0.67rem] tracking-[0.045em] text-white/58">
                    {developerSignals.focusPanel.title}
                  </p>
                ) : null}
                <div className={`relative pl-5 ${hasFocusTitle ? "mt-3.5" : "mt-1.5"}`}>
                  <div className="absolute bottom-1 left-[3px] top-1 w-px bg-gradient-to-b from-white/14 via-white/5 to-transparent" />
                  <div className="space-y-3">
                    {developerSignals.focusPanel.items.map((item, index) => (
                      <div key={item} className="flex items-start gap-3.5">
                      <motion.span
                        aria-hidden="true"
                        animate={
                          reducedMotion
                            ? undefined
                            : { opacity: [0.24, 0.54, 0.24], scale: [0.98, 1.03, 0.98] }
                        }
                        className="relative mt-[0.53rem] h-[6px] w-[6px] shrink-0 rounded-full border border-softPink/18 bg-[#151722] shadow-[0_0_6px_rgba(216,180,254,0.06)]"
                        transition={{
                          delay: index * 0.45,
                          duration: 6.1,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <span className="absolute inset-[1px] rounded-full bg-softPink/54" />
                      </motion.span>
                      <span className="text-sm leading-[1.65] text-white/70">{item}</span>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.026),rgba(255,255,255,0.012))] p-6 md:p-8 lg:flex lg:items-start">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_76%,rgba(216,180,254,0.045),transparent_48%)]" />
            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : {
                      boxShadow: [
                        "0 18px 48px rgba(0,0,0,0.16)",
                        "0 20px 54px rgba(0,0,0,0.2)",
                        "0 18px 48px rgba(0,0,0,0.16)"
                      ]
                    }
              }
              className="relative z-10 mt-3 max-w-[25rem] rounded-[1.25rem] border border-white/9 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.03))] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.16)] backdrop-blur-[3px] md:mt-4 md:p-7 lg:ml-auto lg:mr-2 lg:mt-[4rem] lg:translate-y-2"
              transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                aria-hidden="true"
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: [0.18, 0.3, 0.18],
                        x: [0, 8, 0],
                        y: [0, -4, 0]
                      }
                }
                className="pointer-events-none absolute inset-[1px] rounded-[1.18rem] bg-[radial-gradient(circle_at_72%_34%,rgba(216,180,254,0.12),transparent_24%),radial-gradient(circle_at_34%_72%,rgba(96,165,250,0.08),transparent_28%)]"
                transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/38">
                {developerSignals.highlight.label}
              </p>
              <p className="mt-2 text-xl font-display font-semibold text-bone">
                {developerSignals.highlight.title}
              </p>
              <p className="mt-2.5 max-w-[18.5rem] text-sm leading-7 text-white/64">
                {developerSignals.highlight.text}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
