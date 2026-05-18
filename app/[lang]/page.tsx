import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { DeveloperSignals } from "@/components/sections/DeveloperSignals";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Navigation } from "@/components/sections/Navigation";
import { Projects } from "@/components/sections/Projects";
import { QuantumAquarium } from "@/components/quantum-aquarium/QuantumAquarium";
import { Skills } from "@/components/sections/Skills";
import { getPortfolioContent, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function Home({
  params
}: {
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) {
    notFound();
  }

  const lang = params.lang as Locale;
  const content = getPortfolioContent(lang);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-void text-bone">
      <QuantumAquarium />
      <div className="site-shell">
        <Navigation
          locale={lang}
          ui={content.ui}
          navigation={content.navigation}
          profile={content.profile}
        />
        <Hero profile={content.profile} heroCopy={content.sectionCopy.hero} />
        <DeveloperSignals developerSignals={content.developerSignals} />
        <About aboutCopy={content.sectionCopy.about} about={content.about} />
        <Skills
          skillsCopy={content.sectionCopy.skills}
          currentLearning={content.currentLearning}
          skillGroups={content.skillGroups}
        />
        <Projects projectsCopy={content.sectionCopy.projects} projects={content.projects} />
        <Experience experienceCopy={content.sectionCopy.experience} timeline={content.timeline} />
        <Contact
          contactCopy={content.sectionCopy.contact}
          contactLinks={content.contactLinks}
          profile={content.profile}
        />
      </div>
    </main>
  );
}
