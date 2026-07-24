import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaSection } from "@/components/layout/CtaSection";
import { ARTICLES } from "@/data/articles";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Actualidad y claves de la oposición a la Guardia Civil, explicadas desde Alterego.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        overline="Blog"
        title="Actualidad de la oposición a la Guardia Civil."
      />

      <Section>
        <div className="grid gap-8">
          {ARTICLES.map((a, i) => (
            <Reveal
              key={a.slug}
              delay={i * 80}
              as="article"
              className="group relative grid overflow-hidden rounded-lg border border-hairline bg-background transition-shadow duration-300 ease-editorial hover:shadow-md lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <Image
                  src={a.imagen}
                  alt={a.imagenAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-overline uppercase">
                  <span className="text-accent-ink">{a.categoria}</span>
                  <span aria-hidden="true" className="text-hairline">·</span>
                  <span className="text-faint">{a.fecha}</span>
                  <span aria-hidden="true" className="text-hairline">·</span>
                  <span className="text-faint">{a.lectura}</span>
                </div>
                <h2 className="mt-4 text-h2 text-balance text-foreground">
                  <Link
                    href={`/blog/${a.slug}`}
                    className="transition-colors duration-300 ease-editorial group-hover:text-verde-bosque after:absolute after:inset-0"
                  >
                    {a.titulo}
                  </Link>
                </h2>
                <p className="mt-4 text-body text-muted">{a.extracto}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-meta font-semibold text-accent-ink">
                  Leer artículo →
                </span>
              </div>
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
