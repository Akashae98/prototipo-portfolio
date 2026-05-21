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
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-55 md:opacity-70"
    >
      <div className="absolute bottom-[-30%] right-[-17%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.11),rgba(96,165,250,0.05)_36%,transparent_68%)] blur-3xl" />
      <div className="absolute bottom-[-3%] right-[-1%] h-[360px] w-[360px] rounded-full border border-white/[0.032] bg-white/[0.01] blur-[1px]" />

      <motion.div
        className="absolute bottom-[-22%] right-[-10%] h-[430px] w-[430px] md:bottom-[-24%] md:right-[-7%] md:h-[520px] md:w-[520px]"
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

      <div className="absolute bottom-[20%] right-[-5%] hidden w-[55%] min-w-[440px] rotate-[-3deg] md:block">
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
        <div className="relative z-10 grid gap-px bg-white/7 lg:grid-cols-[1.16fr_0.84fr]">
          <div className="relative bg-void/78 p-6 md:p-8">
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

          <div className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.026),rgba(255,255,255,0.012))] p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_76%,rgba(216,180,254,0.045),transparent_48%)]" />
            <div className="relative z-10 rounded-[1.25rem] border border-white/9 bg-black/20 p-5 backdrop-blur-[2px]">
              <p className="scan-label mb-3">{developerSignals.building.title}</p>
              <p className="text-base leading-7 text-white/70">{developerSignals.building.text}</p>
            </div>
            <div className="relative z-10 mt-3 rounded-[1.25rem] border border-white/9 bg-white/[0.04] p-5 shadow-[0_18px_58px_rgba(0,0,0,0.16)] backdrop-blur-[3px]">
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
