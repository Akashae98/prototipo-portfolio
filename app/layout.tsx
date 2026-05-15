import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carol Vilar | Full-Stack Developer Portfolio",
  description:
    "Portfolio of Carol Vilar, a full-stack developer focused on backend systems, APIs and scalable web applications.",
  openGraph: {
    title: "Carol Vilar | Full-Stack Developer Portfolio",
    description:
      "Full-stack developer focused on backend systems, APIs and scalable web applications.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
