import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Overline } from "@/components/ui/Overline";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaSection } from "@/components/layout/CtaSection";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Academia",
  description:
    "Clases presenciales en Almería para la oposición a la Guardia Civil y venta de productos digitales: test, preparación online completa, temario impreso y simulacros.",
};

/** Ventajas de la modalidad presencial (parte superior). */
const PRESENCIAL = [
  "Clases presenciales en Almería, en grupos reducidos.",
  "Fase teórica impartida desde una base jurídica sólida.",
  "Método propio: qué estudiar, en qué orden y dónde concentrar el esfuerzo.",
  "Dudas resueltas en el aula y acompañamiento directo hasta el examen.",
];

/** Catálogo de la tienda de productos digitales (parte inferior). */
const PRODUCTOS = [
  {
    nombre: "Alterego Test",
    precio: "19,90 €",
    periodo: "/mes",
    imagen: "/academia/test.jpg",
    descripcion:
      "Miles de preguntas tipo test, corregidas y actualizadas a la convocatoria. Practica como en el examen desde tu campus online.",
  },
  {
    nombre: "Alterego Online Completo",
    precio: "79,90 €",
    periodo: "/mes",
    imagen: "/academia/online.jpg",
    descripcion:
      "La preparación completa a distancia: temario, test, simulacros y acompañamiento con el método propio de Alterego.",
    destacado: true,
  },
  {
    nombre: "Temario impreso",
    precio: "189 €",
    periodo: "pago único",
    imagen: "/academia/temario.jpg",
    descripcion:
      "El temario completo en papel, claro y actualizado. Para estudiar sin pantallas, subrayar y llevártelo a cualquier parte.",
  },
  {
    nombre: "Pack de simulacros de conocimientos",
    precio: "39,90 €",
    periodo: "pago único",
    imagen: "/academia/simulacros.jpg",
    descripcion:
      "Simulacros de examen cronometrados para medir tu nivel real y llegar con seguridad al día clave.",
  },
] as const;

/** Método de trabajo de las clases presenciales (sistema de vueltas y repasos). */
const METODO = [
  {
    titulo: "Vueltas y repasos",
    texto:
      "Un sistema parecido al de oposiciones jurídicas como judicatura: avanzamos poco a poco, empezando por lo más importante de cada tema y llegando después a los detalles más concretos.",
  },
  {
    titulo: "Simulacros cada mes",
    texto:
      "Desde el inicio del curso, con los mismos tiempos y una estructura muy parecida a la del examen oficial. Así te acostumbras a gestionar el tiempo y a enfrentarte a la prueba con seguridad.",
  },
  {
    titulo: "Intensivas y repasos exprés",
    texto:
      "Sesiones centradas en los contenidos que más aparecen en los exámenes, con atención cercana y personalizada. La parte de conocimientos es nuestra principal especialidad.",
  },
];

/** Contenido de la plataforma online (Alterego Online Completo). */
const PLATAFORMA = [
  "Test por temas, retroalimentados de conocimientos.",
  "Ortografía, gramática, inglés y psicotécnicos.",
  "Pack de simulacros de examen similar al oficial.",
  "Clases grabadas sobre los diversos bloques del temario.",
];

export default function AcademiaPage() {
  return (
    <main>
      {/* ================================================================= */}
      {/* Parte 1 · Clases presenciales (cabecera con foto real del aula)   */}
      {/* ================================================================= */}
      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden border-b border-verde-bosque">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Image
            src="/academia/cabecera-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-verde-noche via-verde-noche/85 to-verde-noche/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-verde-noche/85 via-transparent to-verde-noche/30" />
        </div>
        <Container className="py-24 md:py-28">
          <div className="max-w-2xl">
            <Reveal>
              <Overline tone="dark">Clases presenciales · Almería</Overline>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-display text-balance text-crema">
                Prepárate en el aula, junto a quien ya ha vivido la oposición.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-lead text-crema/85 text-pretty">
                Preparación presencial de la fase teórica en Almería, en grupos
                reducidos y desde una base jurídica sólida.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-8 space-y-3">
                {PRESENCIAL.map((item, i) => (
                  <li key={i} className="flex gap-3 text-body text-crema/90">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-oro"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <Button href="/contacto" variant="inverse">
                  Reserva tu clase
                </Button>
                <p className="flex items-baseline gap-1.5">
                  <span className="text-h1 font-bold tabular-nums text-crema">
                    120 €
                  </span>
                  <span className="text-body text-crema/70">/mes</span>
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================================================================= */}
      {/* Parte 2 · Tienda de productos digitales                           */}
      {/* ================================================================= */}
      <Section>
        <Reveal>
          <Overline>Tienda</Overline>
          <h2 className="mt-5 max-w-2xl text-h1 text-balance text-foreground">
            Productos digitales y materiales de estudio.
          </h2>
          <p className="mt-6 max-w-2xl text-body text-muted">
            ¿Prefieres avanzar a tu ritmo? Elige lo que necesitas y empieza hoy,
            con acceso inmediato desde tu campus online.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTOS.map((p, i) => {
            const destacado = "destacado" in p && p.destacado;
            return (
              <Reveal
                key={p.nombre}
                delay={i * 80}
                as="article"
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-lg border bg-background transition-shadow duration-300 ease-editorial hover:shadow-md",
                  destacado
                    ? "border-oro ring-1 ring-oro"
                    : "border-hairline",
                )}
              >
                {/* Imagen del producto */}
                <div className="relative aspect-[4/5] overflow-hidden bg-white">
                  <Image
                    src={p.imagen}
                    alt={p.nombre}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.03]"
                  />
                  {destacado ? (
                    <span className="absolute left-3 top-3 rounded-full bg-oro px-3 py-1 text-overline uppercase text-verde-noche">
                      Recomendado
                    </span>
                  ) : null}
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-h4 text-foreground">{p.nombre}</h3>
                  <p className="mt-2 flex-1 text-meta leading-relaxed text-muted">
                    {p.descripcion}
                  </p>

                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="text-h3 font-bold tabular-nums text-foreground">
                      {p.precio}
                    </span>
                    <span className="text-meta text-muted">{p.periodo}</span>
                  </div>

                  <div className="mt-5">
                    <Button
                      href="/contacto"
                      variant={destacado ? "inverse" : "primary"}
                      className="w-full"
                    >
                      Lo quiero
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Qué incluye la plataforma (debajo de las opciones de compra) */}
        <Reveal
          delay={80}
          className="mt-6 overflow-hidden rounded-lg border border-verde-bosque bg-inverse-bg p-8 text-inverse md:p-10"
        >
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {PLATAFORMA.map((f) => (
              <li key={f} className="flex gap-3 text-body text-crema/90">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-oro"
                />
                {f}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-8">
          <p className="text-meta text-muted">
            ¿No sabes cuál elegir?{" "}
            <a
              href="/contacto"
              className="font-semibold text-accent-ink underline decoration-verde-200 decoration-1 underline-offset-4 transition-[text-decoration-color] hover:decoration-verde-noche"
            >
              Cuéntanos tu caso
            </a>{" "}
            y te orientamos sin compromiso.
          </p>
        </Reveal>
      </Section>

      {/* ================================================================= */}
      {/* Parte 3 · Cómo trabajamos (método de las clases presenciales)      */}
      {/* ================================================================= */}
      <Section tone="surface">
        <Reveal>
          <Overline>Cómo trabajamos</Overline>
          <h2 className="mt-5 max-w-2xl text-h1 text-balance text-foreground">
            Un método de vueltas y repasos, como en las grandes oposiciones.
          </h2>
          <p className="mt-6 max-w-2xl text-body text-muted">
            Nuestra forma de trabajar se basa en un sistema de vueltas y repasos,
            parecido al que se utiliza en oposiciones jurídicas como judicatura.
            Avanzamos poco a poco, de lo más importante de cada tema a los
            detalles más concretos.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {METODO.map((m, i) => (
            <Reveal
              key={m.titulo}
              delay={i * 80}
              className="rounded-lg border border-hairline bg-background p-8"
            >
              <span className="text-h1 font-bold tabular-nums text-verde-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-h4 text-foreground">{m.titulo}</h3>
              <p className="mt-3 text-meta leading-relaxed text-muted">
                {m.texto}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Empieza tu preparación con quien domina la materia."
        subtitle="Clases presenciales en Almería y campus online de apoyo. Elige la modalidad que mejor se adapta a ti y da el primer paso hacia tu plaza."
        primaryLabel="Reserva tu clase"
        secondaryHref="/oposiciones"
        secondaryLabel="Conoce la oposición"
      />
    </main>
  );
}
