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

// The Home component is the main entry point for the portfolio page, which renders various sections based on the provided language parameter.
export default function Home({
  params
}: {
  params: { lang: string };
}) {
  // Check if the provided language parameter is a valid locale. If not, return a 404 Not Found response.
  if (!isLocale(params.lang)) {
    notFound();
  }
// Cast the language parameter to the Locale type for further processing.
  const lang = params.lang as Locale;
  // Retrieve the portfolio content based on the specified language.
  const content = getPortfolioContent(lang);

  return (
    // The main container for the portfolio page, with components and styling for layout and background.
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
        <About aboutCopy={content.sectionCopy.about} about={content.about} />
        <Skills
          skillsCopy={content.sectionCopy.skills}
          currentLearning={content.currentLearning}
          skillGroups={content.skillGroups}
        />
        <Projects projectsCopy={content.sectionCopy.projects} projects={content.projects} />
        <Experience experienceCopy={content.sectionCopy.experience} timeline={content.timeline} />
        <DeveloperSignals developerSignals={content.developerSignals} />
        <Contact
          contactCopy={content.sectionCopy.contact}
          contactLinks={content.contactLinks}
          profile={content.profile}
        />
      </div>
    </main>
  );
}
