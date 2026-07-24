import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Overline } from "@/components/ui/Overline";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroCarousel } from "@/components/layout/HeroCarousel";
import { CtaSection } from "@/components/layout/CtaSection";
import { SITE } from "@/config/site";

const PILARES = [
  {
    n: "01",
    titulo: "Base jurídica de verdad",
    texto:
      "Sabemos el porqué de cada tema y por dónde suelen ir las preguntas. Es la diferencia entre estudiar un temario y comprenderlo.",
  },
  {
    n: "02",
    titulo: "Un método propio",
    texto:
      "Qué estudiar, en qué orden y dónde concentrar el esfuerzo. No un temario suelto: un camino trazado.",
  },
  {
    n: "03",
    titulo: "Preparación desde dentro",
    texto:
      "Enseñamos habiendo vivido la oposición de primera mano. Sabemos qué se siente al estar al otro lado.",
  },
  {
    n: "04",
    titulo: "Acompañamiento real",
    texto:
      "Correcciones, dudas resueltas y atención cercana. Aquí nadie es un número: cada alumno tiene nombre.",
  },
];

const CONTACTO = [
  {
    icon: "phone" as const,
    label: "Llámanos",
    value: SITE.phone,
    href: `tel:${SITE.phoneHref}`,
  },
  {
    icon: "mail" as const,
    label: "Escríbenos",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: "instagram" as const,
    label: "Síguenos",
    value: SITE.social.instagramHandle,
    href: SITE.social.instagram,
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ---- Hero con carrusel de fondo ----------------------------------- */}
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
        <HeroCarousel />
        <Container className="py-24 md:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <Overline tone="dark">
                Academia de oposiciones a Guardia Civil · Almería
              </Overline>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-display text-balance text-crema">
                Conviértete en <span className="text-oro">Guardia Civil</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-lead font-light text-crema/80 text-pretty">
                Preparación presencial de la fase teórica, impartida desde una
                base jurídica sólida.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 max-w-2xl text-h2 font-semibold text-balance text-crema">
                Tu plaza no depende del talento.{" "}
                <span className="text-oro">Depende del trabajo.</span>
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/contacto" variant="inverse">
                  Empieza a preparar tu plaza
                </Button>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="inline-flex items-center gap-2 text-meta font-semibold text-crema underline decoration-verde-salvia decoration-1 underline-offset-4 transition-[text-decoration-color] duration-300 ease-editorial hover:decoration-oro"
                >
                  Llámanos: {SITE.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---- Qué es Alterego (posicionamiento) ---------------------------- */}
      <Section tone="surface">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <Overline>Qué es Alterego</Overline>
            <h2 className="mt-5 text-h1 text-balance text-foreground">
              La academia que prepara tu plaza en la Guardia Civil, en Almería.
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-body text-muted">
            <p>
              No somos una academia más ni una fábrica de temarios. Aquí no hay
              alguien que se ha leído el temario:{" "}
              <strong className="font-semibold text-foreground">
                hay dominio real de la materia y de la base legal que la sustenta.
              </strong>{" "}
              De ahí sale todo lo demás.
            </p>
            <p>
              Clases presenciales en Almería y un campus online de apoyo, con un
              método claro y acompañamiento real hasta el día del examen.
            </p>
            <ul className="flex flex-wrap gap-2 pt-2">
              {["Almería", "Presencial + Online", "Base jurídica"].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-verde-200 bg-background px-4 py-1.5 text-meta font-medium text-verde-600"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ---- Dos formas de prepararte ------------------------------------- */}
      <Section>
        <Reveal>
          <Overline>Cómo puedes prepararte</Overline>
          <h2 className="mt-5 max-w-2xl text-h1 text-balance text-foreground">
            Dos formas de avanzar hacia tu plaza.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Presencial */}
          <Reveal className="group flex flex-col overflow-hidden rounded-lg border border-hairline bg-background">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/academia/cabecera-bg.jpg"
                alt="Clase presencial de Alterego Academia en Almería"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <span className="text-overline uppercase text-accent-ink">
                Presencial · Almería
              </span>
              <h3 className="mt-3 text-h3 text-foreground">Clases presenciales</h3>
              <p className="mt-3 flex-1 text-body text-muted">
                Preparación de la fase teórica en grupos reducidos, con método
                propio y atención directa. La modalidad más completa.
              </p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="flex items-baseline gap-1.5">
                  <span className="text-h3 font-bold tabular-nums text-foreground">
                    120 €
                  </span>
                  <span className="text-meta text-muted">/mes</span>
                </p>
                <Button href="/academia">Reserva tu clase</Button>
              </div>
            </div>
          </Reveal>

          {/* Online */}
          <Reveal
            delay={120}
            className="group flex flex-col overflow-hidden rounded-lg border border-hairline bg-background"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/cabecera/cabecera-2.jpg"
                alt="Guardia civil de servicio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <span className="text-overline uppercase text-accent-ink">
                A tu ritmo
              </span>
              <h3 className="mt-3 text-h3 text-foreground">Campus online</h3>
              <p className="mt-3 flex-1 text-body text-muted">
                Test por temas, simulacros, clases grabadas y temario impreso.
                Materiales de calidad para avanzar desde donde estés.
              </p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="flex items-baseline gap-1.5">
                  <span className="text-h3 font-bold tabular-nums text-foreground">
                    79,99 €
                  </span>
                  <span className="text-meta text-muted">/mes</span>
                </p>
                <Button href="/academia" variant="secondary">
                  Ver la tienda
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---- Base jurídica con un abogado (Francisco) --------------------- */}
      <Section tone="dark">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16">
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/quien-somos/fran.jpg"
                alt="Francisco Ureña, fundador de Alterego"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Overline tone="dark">La diferencia Alterego</Overline>
            <h2 className="mt-5 text-h1 text-balance text-crema">
              La mayor parte del examen es derecho. Prepáralo con un abogado.
            </h2>
            <p className="mt-6 text-body text-crema/80">
              El bloque de conocimientos es donde se juegan la mayoría de los
              puntos y donde más gente se queda fuera. Entender la norma —y no
              solo memorizarla— es lo que hace que un tema se te quede y que
              resuelvas las preguntas trampa.
            </p>
            <div className="mt-9">
              <Button href="/quien-somos" variant="inverse">
                Conoce a Francisco
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---- La convocatoria 2026 (gancho oposición) --------------------- */}
      <Section tone="surface">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <Reveal>
            <Overline>Convocatoria 2026</Overline>
            <p className="mt-6 text-[clamp(3.5rem,9vw,6rem)] font-bold leading-none tabular-nums text-accent-ink">
              1.704
            </p>
            <h2 className="mt-3 text-h2 text-balance text-foreground">
              plazas de acceso libre para entrar en la Guardia Civil.
            </h2>
            <p className="mt-5 max-w-md text-body text-muted">
              3.240 plazas convocadas en total: una de las ofertas más altas de
              los últimos años. El momento de empezar es ahora.
            </p>
            <div className="mt-8">
              <Button href="/oposiciones">Conoce la oposición</Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-hairline">
              <Image
                src="/oposiciones/cabecera.jpg"
                alt="Guardias civiles en formación ante la bandera de España"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---- Por qué elegir Alterego (pilares) --------------------------- */}
      <Section>
        <Reveal>
          <Overline>Por qué elegir Alterego</Overline>
          <h2 className="mt-5 max-w-2xl text-h1 text-balance text-foreground">
            El fondo desde el que preparamos marca la diferencia.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2">
          {PILARES.map((p, i) => (
            <Reveal key={p.n} delay={i * 80} className="bg-background p-8 md:p-10">
              <span className="text-h2 font-bold tabular-nums text-verde-200">
                {p.n}
              </span>
              <h3 className="mt-4 text-h3 text-foreground">{p.titulo}</h3>
              <p className="mt-3 text-body text-muted">{p.texto}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- Puntos de contacto ------------------------------------------ */}
      <Section tone="surface">
        <Reveal>
          <Overline>Hablemos</Overline>
          <h2 className="mt-5 max-w-2xl text-h1 text-balance text-foreground">
            ¿Tienes dudas? Estamos a un mensaje.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {CONTACTO.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 80}
              className="group rounded-lg border border-hairline bg-background p-8"
            >
              <a
                href={c.href}
                {...(c.icon === "instagram"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-verde-100 text-verde-bosque transition-colors duration-300 ease-editorial group-hover:bg-oro group-hover:text-verde-noche">
                  <ContactIcon name={c.icon} />
                </span>
                <span>
                  <span className="block text-overline uppercase text-faint">
                    {c.label}
                  </span>
                  <span className="mt-1 block text-body font-semibold text-foreground">
                    {c.value}
                  </span>
                </span>
              </a>
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

/* --- Iconos de contacto --------------------------------------------------- */

function ContactIcon({ name }: { name: "phone" | "mail" | "instagram" }) {
  if (name === "phone") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.6 10.8a15.9 15.9 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.24 1L6.6 10.8Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (name === "mail") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2L12 12l7.6-5H4.4Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.42 2.2 8.8 2.2 12 2.2Zm0 3.2A6.6 6.6 0 1 0 12 18.6 6.6 6.6 0 0 0 12 5.4Zm0 10.9A4.3 4.3 0 1 1 12 7.7a4.3 4.3 0 0 1 0 8.6Zm6.85-11.15a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
