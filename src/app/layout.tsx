import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SITE } from "@/config/site";
import { TopBar } from "@/components/layout/TopBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

/**
 * Montserrat como única tipografía del sitio (brandboard), cargada con
 * next/font. Se expone como variable CSS (--font-montserrat) que el sistema
 * de diseño mapea a --font-sans en globals.css. Fuente variable: todos los
 * pesos disponibles sin peticiones extra.
 */
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Academia de preparación para la oposición a la Guardia Civil desde una base jurídica sólida, un método claro y acompañamiento real hasta el día del examen.",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "es_ES",
    url: SITE.url,
  },
  // TODO: añadir imagen Open Graph (og:image) cuando exista material gráfico.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full`}>
      {/* suppressHydrationWarning: algunas extensiones del navegador inyectan
          clases/atributos en <body> antes de la hidratación. */}
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased"
      >
        {/* Enlace de salto para accesibilidad por teclado */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:border focus:border-foreground focus:bg-background focus:px-4 focus:py-2 focus:text-meta"
        >
          Saltar al contenido
        </a>
        <TopBar />
        <SiteHeader />
        <div id="contenido" className="flex flex-1 flex-col">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
