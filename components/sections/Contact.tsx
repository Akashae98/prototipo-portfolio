"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ContactIconKey, PortfolioContent } from "@/data/profile";

const contactIcons: Record<ContactIconKey, typeof Mail> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail
};

type ContactProps = {
  contactCopy: PortfolioContent["sectionCopy"]["contact"];
  contactLinks: PortfolioContent["contactLinks"];
  profile: PortfolioContent["profile"];
};

export function Contact({ contactCopy, contactLinks, profile }: ContactProps) {
  return (
    <section className="section-wrap pb-16" aria-labelledby="contact">
      <SectionHeader
        id="contact"
        label={contactCopy.label}
        title={contactCopy.title}
        intro={contactCopy.intro}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.24 }}
        transition={{ duration: 0.62 }}
        className="glass-panel overflow-hidden rounded-[2rem]"
      >
        <div className="grid gap-px bg-white/10 md:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = contactIcons[link.iconKey];
            return (
              <a
                key={link.label}
                href={link.href}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                className="focus-ring bg-void/72 p-6 transition hover:bg-white/[0.055]"
              >
                <Icon className="mb-5 text-signalBlue" size={23} />
                <p className="scan-label mb-2">{link.label}</p>
                <p className="break-words text-sm text-white/72">{link.value}</p>
              </a>
            );
          })}
        </div>
        <div className="border-t border-white/8 bg-black/[0.05]">
          <div className="flex flex-col items-start justify-between gap-5 p-6 md:flex-row md:items-center md:p-8">
            <p className="max-w-2xl text-base leading-8 text-white/64">
              {contactCopy.body}
            </p>
            <ButtonLink href={profile.cv} download variant="primary">
              <Download size={17} />
              {contactCopy.downloadCvLabel}
            </ButtonLink>
          </div>
        </div>
      </motion.div>
      <footer className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
        <span>&copy; 2026 {profile.name}</span>
        <span className="font-mono text-xs tracking-[0.08em] text-white/34">
          {contactCopy.footer}
        </span>
      </footer>
    </section>
  );
}
