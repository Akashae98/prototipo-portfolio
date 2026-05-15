"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Github, Linkedin } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { profile, sectionCopy } from "@/data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-12 px-4 pb-20 pt-10 md:grid-cols-[0.48fr_0.52fr] md:px-8 md:pb-24 md:pt-16"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12, delayChildren: 0.08 }}
        className="relative z-10 max-w-3xl"
      >
        <motion.p variants={fadeUp} className="scan-label mb-5">
          {sectionCopy.hero.label}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl font-semibold leading-[0.98] text-bone md:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg font-medium text-gradient md:text-2xl"
        >
          {profile.role}
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-2xl text-base leading-8 text-white/70 md:text-lg"
        >
          {profile.headline}
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl font-mono text-sm text-white/58 md:text-base"
        >
          {profile.stackLine}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#projects">
            View Projects
            <ArrowDownRight size={17} />
          </ButtonLink>
          <ButtonLink href={profile.cv} download variant="secondary">
            Download CV
            <Download size={17} />
          </ButtonLink>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="mt-8 flex items-center gap-3 text-sm text-white/54"
        >
          <a
            className="focus-ring inline-flex items-center gap-2 transition hover:text-white"
            href={profile.github}
            rel="noreferrer"
            target="_blank"
          >
            <Github size={17} />
            GitHub
          </a>
          <span className="h-px w-8 bg-white/16" />
          <a
            className="focus-ring inline-flex items-center gap-2 transition hover:text-white"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin size={17} />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative min-h-[420px] md:min-h-[650px]"
      >
        <div className="absolute inset-x-0 top-[8%] mx-auto h-[74%] w-[82%] rounded-full bg-violetCore/20 blur-3xl" />
        <div className="absolute right-[4%] top-[10%] h-40 w-40 rounded-full border border-signalBlue/20 bg-signalBlue/8 blur-sm" />
        <div className="absolute bottom-[18%] left-[4%] h-52 w-52 rounded-full border border-violetCore/16 bg-violetCore/8 blur-md" />
        <div className="relative mx-auto flex h-full max-w-[650px] items-center justify-center">
          <div className="absolute inset-8 rounded-[2rem] border border-white/8 bg-white/[0.025] backdrop-blur-[2px]" />
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -12, 0], opacity: [0.65, 0.9, 0.65] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-6 rounded-[40%] bg-[radial-gradient(circle_at_52%_42%,rgba(139,92,246,0.22),rgba(96,165,250,0.12)_36%,transparent_68%)] blur-2xl"
          />
          <Image
            priority
            quality={100}
            sizes="(min-width: 768px) 650px, calc(100vw - 32px)"
            src="/assets/hero-carolina.png"
            alt="Original illustration by Carol Vilar integrated into the portfolio hero"
            width={1305}
            height={1205}
            className="relative z-10 h-auto w-full max-w-[650px] object-contain drop-shadow-[0_0_34px_rgba(139,92,246,0.32)] [backface-visibility:hidden]"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 border-y border-white/8" />
        <div className="pointer-events-none absolute right-4 top-10 hidden w-36 border-t border-signalBlue/35 pt-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-signalBlue/70 md:block">
          {sectionCopy.hero.rightLabel}
        </div>
      </motion.div>
    </section>
  );
}
