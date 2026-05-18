import { en } from "@/data/i18n/en";
import { es } from "@/data/i18n/es";
import type { PortfolioContent } from "@/data/profile";

export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return locale === "es" ? es : en;
}
