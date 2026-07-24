import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Overline } from "@/components/ui/Overline";
import { Reveal } from "@/components/ui/Reveal";
import { CtaSection } from "@/components/layout/CtaSection";
import { ARTICLES, getArticle } from "@/data/articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: article.titulo, description: article.extracto };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main>
      {/* Cabecera del artículo (verde noche) */}
      <section className="border-b border-verde-bosque bg-inverse-bg text-inverse">
        <Container className="py-16 md:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Link
                href="/blog"
                className="text-meta text-crema/70 transition-colors hover:text-oro"
              >
                ← Volver al blog
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-overline uppercase text-oro">
                <span>{article.categoria}</span>
                <span aria-hidden="true" className="text-crema/40">·</span>
                <span className="text-crema/70">{article.fecha}</span>
                <span aria-hidden="true" className="text-crema/40">·</span>
                <span className="text-crema/70">{article.lectura} de lectura</span>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <h1 className="mt-5 text-h1 text-balance text-crema">
                {article.titulo}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lead text-crema/80 text-pretty">
                {article.extracto}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Imagen de portada */}
      <Container className="-mt-8 md:-mt-12">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-hairline shadow-sm">
            <Image
              src={article.imagen}
              alt={article.imagenAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>

      {/* Cuerpo del artículo */}
      <Section>
        <Reveal className="mx-auto max-w-2xl">
          <div className="space-y-6">
            {article.cuerpo.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="pt-4 text-h3 text-balance text-foreground"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-3">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-body text-muted">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-verde-salvia"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-body text-muted">
                  {block.text}
                </p>
              );
            })}
          </div>
        </Reveal>
      </Section>

      <CtaSection
        secondaryHref="/oposiciones"
        secondaryLabel="Conoce la oposición"
      />
    </main>
  );
}
