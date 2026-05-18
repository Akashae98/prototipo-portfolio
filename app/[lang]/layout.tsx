import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { getPortfolioContent, isLocale, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

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
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      type: "website"
    },
    alternates: {
      canonical: `/${params.lang}`,
      languages: {
        en: "/en",
        es: "/es"
      }
    }
  };
}

export default function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  if (!isLocale(params.lang)) {
    notFound();
  }

  const lang = params.lang as Locale;

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
