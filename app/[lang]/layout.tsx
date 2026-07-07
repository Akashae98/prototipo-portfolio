import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { getPortfolioContent, isLocale, locales, type Locale } from "@/lib/i18n";

/* Layout.js is the envelope that prepares SEO metadata and the HTML structure of the page 
  based on the provided language parameter.*/

// Next function at build time: The generateStaticParams function generates static 
// parameters for each supported locale.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// The generateMetadata function generates metadata like title, description, and Open Graph
//  information for the page based on the provided language parameter.
export function generateMetadata({
  params
}: {
  params: { lang: string };
}): Metadata {
  if (!isLocale(params.lang)) {
    notFound();
  }

  const content = getPortfolioContent(params.lang);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    // The openGraph property defines Open Graph metadata for social media sharing.
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      type: "website"
    },
    // The alternates property defines alternate language versions of the page.
    alternates: {
      canonical: `/${params.lang}`,
      languages: {
        en: "/en",
        es: "/es"
      }
    }
  };
}

// The LocaleLayout component is a layout component that wraps the page content 
// with the appropriate HTML structure based on the provided language parameter.
export default function LocaleLayout({
  //
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  // Check if the provided language parameter is a valid locale. If not, return a 404 page.
  if (!isLocale(params.lang)) {
    notFound();
  }
// Cast the language parameter to the Locale type.
  const lang = params.lang as Locale;

  return (
    // The lang attribute of the HTML element is set to the provided language parameter.
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
