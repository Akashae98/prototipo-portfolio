"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contactLinks, profile, sectionCopy } from "@/data/profile";

export function Contact() {
  return (
    <section className="section-wrap pb-16" aria-labelledby="contact">
      <SectionHeader
        id="contact"
        label={sectionCopy.contact.label}
        title={sectionCopy.contact.title}
        intro={sectionCopy.contact.intro}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.24 }}
        transition={{ duration: 0.62 }}
        className="glass-panel overflow-hidden"
      >
        <div className="grid gap-px bg-white/10 md:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = link.icon;
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
        <div className="flex flex-col items-start justify-between gap-5 p-6 md:flex-row md:items-center md:p-8">
          <p className="max-w-2xl text-base leading-8 text-white/64">
            {sectionCopy.contact.body}
          </p>
          <ButtonLink href={profile.cv} download variant="primary">
            <Download size={17} />
            Download CV
          </ButtonLink>
        </div>
      </motion.div>
      <footer className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
        <span>© 2026 {profile.name}</span>
        <span className="font-mono text-xs uppercase tracking-[0.16em]">
          {sectionCopy.contact.footer}
        </span>
      </footer>
    </section>
  );
}
