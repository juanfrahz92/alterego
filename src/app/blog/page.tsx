import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaSection } from "@/components/layout/CtaSection";
import { ARTICLES } from "@/data/articles";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos claros y útiles sobre la oposición a la Guardia Civil: la base jurídica, el método de estudio y las pruebas, explicados sin humo.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        overline="Blog"
        title="Aprende, resuelve dudas y prepárate mejor."
        lead="Conocimiento real explicado con claridad. Sin humo y sin promesas fáciles: contenido pensado para orientarte y ayudarte a decidir con información fiable."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal
              key={a.slug}
              delay={(i % 3) * 80}
              as="article"
              className="group relative flex flex-col rounded-lg border border-hairline bg-background p-8 transition-shadow duration-300 ease-editorial hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-overline uppercase text-accent-ink">
                  {a.categoria}
                </span>
                <span className="text-meta text-faint">{a.lectura}</span>
              </div>
              <h2 className="mt-4 text-h3 text-balance text-foreground">
                <Link
                  href={`/blog/${a.slug}`}
                  className="transition-colors duration-300 ease-editorial group-hover:text-verde-bosque after:absolute after:inset-0"
                >
                  {a.titulo}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-body text-muted">{a.extracto}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-meta font-semibold text-accent-ink">
                Leer artículo →
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        secondaryHref="/oposiciones"
        secondaryLabel="Conoce la oposición"
      />
    </main>
  );
}
