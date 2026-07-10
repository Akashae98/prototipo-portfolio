"use client";

import { type PointerEvent, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowDownRight, Download, Github, Linkedin } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { PortfolioContent } from "@/data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

type HeroProps = {
  profile: PortfolioContent["profile"];
  heroCopy: PortfolioContent["sectionCopy"]["hero"];
};

// The Hero component renders the hero section of the portfolio page, which includes 
// the user's name, role, headline, stack line, and links to projects and CV. It also features an 
// interactive illustration with motion effects based on pointer movement.
export function Hero({ profile, heroCopy }: HeroProps) {
  const reducedMotion = useReducedMotion();
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  // Motion values for rotation, shift, and glow position based on pointer movement.
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rawShiftX = useMotionValue(0);
  const rawShiftY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(42);

  // The useSpring hook is used to create smooth spring animations for the rotation and shift values,
  const rotateX = useSpring(rawRotateX, { stiffness: 132, damping: 20, mass: 0.68 });
  const rotateY = useSpring(rawRotateY, { stiffness: 132, damping: 20, mass: 0.68 });
  const shiftX = useSpring(rawShiftX, { stiffness: 112, damping: 22, mass: 0.78 });
  const shiftY = useSpring(rawShiftY, { stiffness: 112, damping: 22, mass: 0.78 });
  const reactiveLight = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(216, 180, 254, 0.11), rgba(96, 165, 250, 0.05) 26%, transparent 56%)`;

  // The useEffect hook is used to detect if the user's device supports pointer input (e.g., mouse or touch) and updates the isPointerDevice state accordingly. It also listens for changes in the media query to update the state when the device capabilities change.
  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setIsPointerDevice(media.matches && !reducedMotion);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [reducedMotion]);

  function resetCardMotion() {
    rawRotateX.set(0);
    rawRotateY.set(0);
    rawShiftX.set(0);
    rawShiftY.set(0);
    glowX.set(50);
    glowY.set(42);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!isPointerDevice) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const offsetX = x - 0.5;
    const offsetY = y - 0.5;

    rawRotateX.set(offsetY * -3.4);
    rawRotateY.set(offsetX * 4.2);
    rawShiftX.set(offsetX * 4.5);
    rawShiftY.set(offsetY * 5.5);
    glowX.set(x * 100);
    glowY.set(y * 100);
  }

  return (
    <section
      id="hero"
      className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-start gap-8 px-4 pb-10 pt-4 sm:pb-12 sm:pt-6 md:grid-cols-[0.57fr_0.43fr] md:items-center md:px-8 md:pb-16 md:pt-10"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12, delayChildren: 0.08 }}
        className="relative z-10 max-w-3xl pr-2 pt-4 sm:pt-10 md:-translate-y-5 md:pt-0"
      >
        <motion.p variants={fadeUp} className="scan-label mb-5">
          {heroCopy.label}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl font-semibold leading-[0.98] text-bone md:text-[5.5rem] lg:text-[6.4rem]"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-xl text-lg font-medium text-gradient md:text-[1.7rem]"
        >
          {profile.role}
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-[34rem] text-base leading-7 text-white/68 sm:leading-8 md:text-lg"
        >
          {profile.headline}
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl font-mono text-sm text-white/56 md:text-[0.95rem]"
        >
          {profile.stackLine}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
          <ButtonLink href="#projects">
            {heroCopy.viewProjectsLabel}
            <ArrowDownRight size={17} />
          </ButtonLink>
          <ButtonLink href={profile.cv} download variant="secondary">
            {heroCopy.downloadCvLabel}
            <Download size={17} />
          </ButtonLink>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/54 sm:mt-8"
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
        className="relative min-h-[320px] pt-2 sm:min-h-[380px] sm:pt-0 md:min-h-[580px]"
      >
        <div className="absolute inset-x-8 top-[16%] h-[54%] rounded-[44%] bg-[radial-gradient(circle,rgba(139,92,246,0.12),rgba(96,165,250,0.06)_42%,transparent_72%)] blur-3xl" />
        <div className="absolute right-[10%] top-[14%] h-28 w-28 rounded-full border border-signalBlue/10 bg-signalBlue/[0.035] blur-md" />
        <div className="absolute bottom-[18%] left-[10%] h-32 w-32 rounded-full border border-violetCore/10 bg-violetCore/[0.035] blur-lg" />
        <div className="relative mx-auto flex h-full max-w-[580px] items-center justify-center">
          <motion.div
            onPointerMove={handlePointerMove}
            onPointerLeave={resetCardMotion}
            onHoverEnd={resetCardMotion}
            className="group relative w-full [perspective:1200px]"
            style={isPointerDevice ? { x: shiftX, y: shiftY } : undefined}
          >
            <motion.div
              className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] px-4 pb-5 pt-6 shadow-[0_22px_72px_rgba(6,8,18,0.34)] backdrop-blur-[4px]"
              style={isPointerDevice ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
            >
              <div className="absolute inset-0 rounded-[2.25rem] border border-white/6" />
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-[1px] rounded-[2.2rem] opacity-60"
                style={{ background: reactiveLight }}
              />
              <div className="pointer-events-none absolute inset-x-6 top-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#090b12] via-[#090b12]/20 to-transparent" />
              <div className="pointer-events-none absolute inset-[10px] rounded-[1.8rem] border border-white/6" />
              <motion.div
                aria-hidden="true"
                animate={reducedMotion ? { opacity: 0.35 } : { y: [0, -6, 0], opacity: [0.28, 0.42, 0.28] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-8 rounded-[38%] bg-[radial-gradient(circle_at_50%_38%,rgba(139,92,246,0.08),rgba(96,165,250,0.04)_38%,transparent_70%)] blur-2xl"
              />
              <Image
                priority
                quality={100}
                sizes="(min-width: 768px) 580px, calc(100vw - 44px)"
                src="/assets/hero-carolina-outfit.png"
                alt="Original illustration by Carol Vilar integrated into the portfolio hero"
                width={1305}
                height={1205}
                className="relative z-10 mx-auto h-auto w-full max-w-[520px] object-contain drop-shadow-[0_0_14px_rgba(139,92,246,0.12)] [backface-visibility:hidden]"
              />
            </motion.div>
          </motion.div>
        </div>
        <p className="pointer-events-none absolute bottom-5 right-5 z-20 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-white/26 md:bottom-6 md:right-6">
          {heroCopy.illustrationCaption}
        </p>
        <div className="pointer-events-none absolute inset-0 border-y border-white/8" />
        <div className="pointer-events-none absolute right-4 top-8 hidden w-40 border-t border-signalBlue/24 pt-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-signalBlue/62 md:block">
          {heroCopy.rightLabel}
        </div>
      </motion.div>
    </section>
  );
}
