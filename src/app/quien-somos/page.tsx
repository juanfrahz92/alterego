import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Overline } from "@/components/ui/Overline";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaSection } from "@/components/layout/CtaSection";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Quién somos",
  description:
    "Detrás de Alterego está Francisco Ureña: abogado, opositor y preparador que conoce de primera mano lo que significa preparar la oposición a la Guardia Civil.",
};

const ROLES = ["Abogado", "Opositor", "Preparador"];

const BASE_JURIDICA = [
  {
    n: "01",
    titulo: "Retienes más y durante más tiempo",
    texto:
      "Cuando entiendes cómo se construye una norma dejas de memorizar artículos sueltos y empiezas a entender un sistema.",
  },
  {
    n: "02",
    titulo: "Resuelves las preguntas trampa",
    texto:
      "Esas en las que dos respuestas parecen igual de válidas y el enunciado está pensado para hacerte dudar.",
  },
  {
    n: "03",
    titulo: "No te quedas en blanco",
    texto:
      "Aunque el enunciado esté formulado de una forma que no habías visto, sabes de dónde sale y hacia dónde va.",
  },
  {
    n: "04",
    titulo: "Te adaptas a las reformas",
    texto:
      "El temario cambia cada año. Quien entiende la norma sabe qué ha cambiado, por qué y qué preguntas nuevas puede generar esa reforma.",
  },
];

const VALORES = [
  {
    titulo: "Constancia",
    texto:
      "El esfuerzo sostenido por encima del arranque fuerte. Gana quien se mantiene.",
  },
  {
    titulo: "Compromiso",
    texto:
      "Nos implicamos en cada plaza como si fuera propia, del primer día al examen.",
  },
  {
    titulo: "Honestidad",
    texto:
      "No prometemos aprobar a la primera ni caminos fáciles. Contamos la verdad, también cuando es exigente.",
  },
  {
    titulo: "Cercanía",
    texto: "Hablamos claro y de tú a tú. Cada alumno tiene nombre, no número.",
  },
  {
    titulo: "Rigor",
    texto:
      "Preparación seria y actualizada, con criterio y un alto conocimiento de la materia y su base jurídica.",
  },
];

export default function QuienSomosPage() {
  return (
    <main>
      {/* ================================================================= */}
      {/* Cabecera en verde noche, con marca de agua del isotipo            */}
      {/* ================================================================= */}
      <section className="relative isolate overflow-hidden bg-inverse-bg text-inverse">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-24 -z-10 opacity-[0.07] md:-right-10"
        >
          <Image
            src="/logos/isotipo-crema.svg"
            alt=""
            width={543}
            height={520}
            className="h-[26rem] w-auto md:h-[34rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-verde-noche via-verde-noche/70 to-transparent"
        />

        <Container className="py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <Reveal>
              <h1 className="text-display text-balance text-crema">
                Detrás de Alterego hay una persona que sabe exactamente lo que
                estás viviendo.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-7 max-w-2xl text-lead text-crema/80 text-pretty">
                No una gran empresa: un preparador que ha pasado por las mismas
                dudas, el mismo estrés y las mismas horas de estudio que vives tú.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-9 flex flex-wrap gap-3">
                {ROLES.map((r) => (
                  <li
                    key={r}
                    className="rounded-full border border-verde-bosque bg-verde-noche/40 px-4 py-1.5 text-meta font-medium text-crema"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================================================================= */}
      {/* Francisco Ureña: retrato + relato con cita destacada             */}
      {/* ================================================================= */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          {/* Retrato de Francisco Ureña */}
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-inverse-bg">
              <Image
                src="/quien-somos/fran.jpg"
                alt="Francisco Ureña, fundador de Alterego"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <blockquote className="text-h2 text-balance text-foreground">
              «Quería crear el lugar que a mí me habría gustado tener cuando
              empecé.»
            </blockquote>
            <div className="mt-8 space-y-5 text-body text-muted">
              <p>
                Soy Francisco Ureña: abogado, opositor y, sobre todo, alguien que
                conoce muy bien lo que significa preparar una oposición.
              </p>
              <p>
                No trabajo con el derecho porque me lo estudiara una vez: trabajo
                con él. Conozco la norma aplicada, no solo el texto, y por eso
                puedo explicarte el porqué de cada precepto, no solo su contenido.
                Y el porqué es exactamente lo que hace que un tema se te quede.
              </p>
              <p>
                Para el bloque de conocimientos —donde se juegan la mayoría de los
                puntos y donde más gente se queda fuera— mi especialidad es justo
                esa. Y a eso le sumo haber estado al otro lado: sé lo que es
                levantarse a las seis, dudar a mitad de curso y sostener el estudio
                cuando ya no queda motivación.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* Base jurídica: por qué lo cambia todo                             */}
      {/* ================================================================= */}
      <Section tone="surface">
        <Reveal>
          <Overline>La base jurídica</Overline>
          <h2 className="mt-5 max-w-2xl text-h1 text-balance text-foreground">
            La mayor parte de lo que te van a preguntar es derecho.
          </h2>
          <p className="mt-6 max-w-2xl text-body text-muted">
            Constitución, derecho penal, procesal, seguridad ciudadana,
            extranjería, protección de datos, violencia de género… El bloque de
            conocimientos es, sobre todo, derecho. Y entender cómo se construye
            una norma —de dónde sale, qué protege y cómo se relaciona con las
            demás— lo cambia todo el día del examen.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {BASE_JURIDICA.map((d, i) => (
            <Reveal
              key={d.n}
              delay={i * 80}
              className="flex gap-5 rounded-lg border border-hairline bg-background p-8 md:p-10"
            >
              <span className="text-display font-bold leading-none tabular-nums text-verde-100">
                {d.n}
              </span>
              <div>
                <h3 className="text-h4 text-foreground">{d.titulo}</h3>
                <p className="mt-3 text-body text-muted">{d.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================================================================= */}
      {/* Cómo trabajamos · sistema de vueltas y repasos                    */}
      {/* ================================================================= */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal>
            <Overline>Cómo trabajamos</Overline>
            <h2 className="mt-5 text-h1 text-balance text-foreground">
              Un sistema de vueltas y repasos.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-body text-muted">
              <p>
                Trabajo con un sistema de vueltas y repasos, el mismo que se
                utiliza en oposiciones jurídicas como judicatura. No intentamos
                aprenderlo todo de una vez: en la primera vuelta fijamos lo
                esencial de cada tema y en las siguientes vamos añadiendo detalle
                sobre una base que ya está sujeta. Así el temario no se te cae por
                el camino, que es lo que pasa cuando se estudia linealmente y
                llegas a diciembre sin recordar lo de septiembre.
              </p>
              <p>
                Desde el primer mes hacemos simulacros con los tiempos y la
                estructura del examen oficial. Porque el examen también es una
                prueba de gestión del tiempo y de nervios —y eso se entrena, no se
                improvisa—, y porque cada simulacro te da datos reales de dónde
                estás fallando, no una sensación.
              </p>
              <p>
                A eso se suman las clases presenciales intensivas, los repasos
                exprés y las sesiones centradas en los contenidos que más se
                repiten: no todo el temario pesa lo mismo, y saber dónde están los
                puntos es parte del método. En el campus tienes test por temas con
                retroalimentación —cada fallo explicado—, pack de simulacros y
                clases grabadas para volver a lo que necesites.
              </p>
              <p className="font-medium text-foreground">
                Y por encima de todo, atención personalizada. Aquí resuelvo tus
                dudas yo. No eres un número en una lista.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* Valores: cifras grandes sobre verde noche                         */}
      {/* ================================================================= */}
      <Section tone="dark">
        <Reveal>
          <Overline tone="dark">Nuestros valores</Overline>
          <h2 className="mt-5 max-w-2xl text-h1 text-balance text-crema">
            Cinco principios que sostienen cada preparación.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-verde-bosque bg-verde-bosque sm:grid-cols-2 lg:grid-cols-3">
          {VALORES.map((v, i) => (
            <Reveal
              key={v.titulo}
              delay={i * 70}
              className="bg-inverse-bg p-8 md:p-10"
            >
              <span className="text-h2 font-bold tabular-nums text-oro">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-h4 text-crema">{v.titulo}</h3>
              <p className="mt-2 text-body text-crema/75">{v.texto}</p>
            </Reveal>
          ))}
          {/* Celda de cierre con el claim + CTA, ocupa la última posición */}
          <Reveal
            delay={VALORES.length * 70}
            className="flex flex-col justify-center gap-6 bg-verde-bosque p-8 md:p-10"
          >
            <p className="text-lead text-crema">{SITE.claim}</p>
            <Button href="/contacto" variant="inverse" className="w-fit">
              Habla conmigo
            </Button>
          </Reveal>
        </div>
      </Section>

      <CtaSection
        title="Detrás de cada plaza hay un método y una persona."
        subtitle="Si quieres prepararte con quien domina la base jurídica y conoce la oposición por dentro, este es tu sitio. Cuéntame en qué punto estás y empezamos."
        primaryLabel="Habla conmigo"
        secondaryHref="/academia"
        secondaryLabel="Ver cómo preparamos"
      />
    </main>
  );
}
