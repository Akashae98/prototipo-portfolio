"use client";

import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Navigation } from "@/components/sections/Navigation";
import { Projects } from "@/components/sections/Projects";
import { QuantumAquarium } from "@/components/quantum-aquarium/QuantumAquarium";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-void text-bone">
      <QuantumAquarium />
      <div className="site-shell">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
