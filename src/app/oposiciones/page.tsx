import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Overline } from "@/components/ui/Overline";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaSection } from "@/components/layout/CtaSection";

export const metadata: Metadata = {
  title: "Oposiciones",
  description:
    "La oposición a Guardia Civil 2026: 1.704 plazas de acceso libre. Requisitos, proceso, pruebas y temario, explicados paso a paso. Prepárate desde una base jurídica sólida.",
};

/** Plazas reservadas de la convocatoria 2026 (la de acceso libre va aparte, destacada). */
const PLAZAS = [
  { n: "1.296", label: "Reservadas a militares profesionales de tropa y marinería." },
  { n: "240", label: "Alumnos del Colegio de Guardias Jóvenes." },
];

const REQUISITOS = [
  { titulo: "Nacionalidad", texto: "Tener la nacionalidad española." },
  {
    titulo: "Edad",
    texto:
      "18 años cumplidos en el año de la convocatoria y no cumplir 41 durante ese año.",
  },
  {
    titulo: "Titulación",
    texto:
      "No se exige Bachillerato: basta el nivel de acceso a FP de Grado Medio (Graduado en ESO o equivalente).",
  },
  { titulo: "Permiso de conducir", texto: "Estar en posesión del permiso de la clase B." },
  {
    titulo: "Situación jurídica",
    texto:
      "Sin antecedentes penales, sin estar privado de derechos civiles ni incurso en procedimiento por delito doloso.",
  },
  {
    titulo: "Compromiso de armas",
    texto:
      "Comprometerse a portar armas y, en su caso, utilizarlas conforme a los principios de congruencia, oportunidad y proporcionalidad.",
  },
  {
    titulo: "Aptitud psicofísica",
    texto:
      "Superar el reconocimiento médico y las pruebas físicas previstas en la convocatoria.",
  },
  {
    titulo: "Tatuajes y estética",
    texto:
      "Se permiten tatuajes visibles salvo los contrarios a los valores constitucionales, las autoridades o las virtudes militares.",
  },
];

const MERITOS = [
  {
    titulo: "Méritos académicos",
    tope: "Hasta 27 pts",
    texto:
      "El grueso está en los idiomas: 9 pts por un C2, 7 por un C1 y 5 por un B2, por cada idioma acreditado. La titulación aporta solo 2 pts.",
  },
  {
    titulo: "Méritos profesionales",
    tope: "Hasta 13,5 pts",
    texto:
      "0,90 pts por cada año completo de servicio en la Administración General del Estado.",
  },
  {
    titulo: "Otros méritos",
    tope: "Hasta 4,5 pts",
    texto:
      "Permisos de conducir superiores (A, A2, C+E, D+E…) y la condición de deportista de alto nivel.",
  },
];

const CONOCIMIENTOS = [
  {
    ejercicio: "Ortografía",
    formato: "5 frases con palabras subrayadas; señalar las que tienen falta.",
    calif: "Apto / no apto · 6 errores excluyen",
  },
  {
    ejercicio: "Gramática",
    formato: "20 frases; señalar las incorrectas morfológica o sintácticamente.",
    calif: "Apto / no apto · 6 errores excluyen",
  },
  {
    ejercicio: "Conocimientos generales",
    formato: "100 preguntas tipo test del temario oficial, con penalización por error.",
    calif: "0–100 · mínimo 50",
  },
  {
    ejercicio: "Lengua inglesa",
    formato: "20 preguntas tipo test de nivel ESO, con penalización por error.",
    calif: "0–20 · mínimo 8",
  },
];

const FISICAS = [
  { prueba: "Resistencia · 2.000 m lisos", h: "9 min 25 s", m: "11 min 14 s" },
  { prueba: "Circuito de agilidad y coordinación", h: "14,00 s", m: "16,00 s" },
  { prueba: "Extensiones de brazos", h: "16", m: "11" },
  { prueba: "Soltura acuática · 50 m libres", h: "70,00 s", m: "81,00 s" },
];

const BLOQUE_I = [
  "Derechos Humanos",
  "Igualdad",
  "Prevención de Riesgos Laborales",
  "Derecho Constitucional",
  "Derecho de la Unión Europea",
  "Instituciones Internacionales",
  "Derecho Civil",
  "Derecho Penal",
  "Derecho Procesal Penal",
  "Derecho Administrativo",
  "Protección de Datos",
  "Extranjería e Inmigración",
  "Seguridad Pública y Privada",
  "Ministerio del Interior y de Defensa",
  "Fuerzas y Cuerpos de Seguridad. Guardia Civil",
];

export default function OposicionesPage() {
  return (
    <main>
      {/* ================================================================= */}
      {/* Hero con foto de fondo                                            */}
      {/* ================================================================= */}
      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Image
            src="/oposiciones/cabecera.jpg"
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
          <div className="max-w-3xl">
            <Reveal>
              <Overline tone="dark">
                La oposición a Guardia Civil · Convocatoria 2026
              </Overline>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-display text-balance text-crema">
                Ser Guardia Civil es una gran decisión.{" "}
                <span className="text-oro">
                  Prepararla bien es la mitad del camino.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lead text-crema/85 text-pretty">
                3.240 plazas convocadas en 2026, con 1.704 de acceso libre: una
                de las ofertas más altas de los últimos años.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9">
                <Button href="/contacto" variant="inverse">
                  Empieza a preparar tu plaza
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================================================================= */}
      {/* Las plazas 2026 · acceso libre destacada                          */}
      {/* ================================================================= */}
      <Section>
        <Reveal>
          <Overline>Convocatoria 2026</Overline>
          <p className="mt-5 max-w-2xl text-lead text-muted text-pretty">
            3.240 plazas convocadas en 2026. La Guardia Civil es un cuerpo de
            naturaleza militar y su acceso es un concurso-oposición: una parte de
            la nota son exámenes y otra, méritos que ya traes contigo.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {/* Acceso libre — la vía que nos interesa */}
          <Reveal className="flex flex-col gap-6 rounded-lg border border-oro bg-inverse-bg p-8 text-inverse md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <p className="text-h3 text-crema">Plazas de acceso libre</p>
              <p className="mt-1 text-meta text-crema/70">
                Abierta a cualquier aspirante que cumpla los requisitos.
              </p>
            </div>
            <p className="text-[clamp(3.5rem,9vw,6rem)] font-bold leading-none tabular-nums text-oro">
              1.704
            </p>
          </Reveal>

          {/* Plazas reservadas */}
          <div className="grid gap-6 sm:grid-cols-2">
            {PLAZAS.map((p, i) => (
              <Reveal
                key={p.n}
                delay={i * 80}
                className="flex items-baseline gap-5 rounded-lg border border-hairline bg-surface p-8"
              >
                <span className="text-h1 font-bold tabular-nums text-accent-ink">
                  {p.n}
                </span>
                <span className="text-body text-muted">{p.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* Requisitos                                                        */}
      {/* ================================================================= */}
      <Section tone="surface">
        <Reveal>
          <Overline>Requisitos</Overline>
          <h2 className="mt-5 max-w-2xl text-h1 text-balance text-foreground">
            Lo que necesitas para presentarte.
          </h2>
          <p className="mt-6 max-w-2xl text-body text-muted">
            Deben cumplirse al cerrar el plazo de instancias y mantenerse durante
            todo el proceso.
          </p>
        </Reveal>

        {/* Caja verde: no se exige Bachillerato */}
        <Reveal
          delay={80}
          className="mt-10 rounded-lg border border-verde-bosque bg-inverse-bg p-6 text-inverse md:p-8"
        >
          <p className="text-body text-crema/90">
            <strong className="font-semibold text-crema">
              No necesitas Bachillerato.
            </strong>{" "}
            Para la Escala de Cabos y Guardias el nivel exigido es el de acceso a
            FP de Grado Medio. El Bachillerato puntúa como mérito, pero no es un
            requisito.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {REQUISITOS.map((r, i) => (
            <Reveal
              key={r.titulo}
              delay={i * 60}
              className="bg-background p-7 md:p-8"
            >
              <h3 className="text-h4 text-foreground">{r.titulo}</h3>
              <p className="mt-2 text-meta leading-relaxed text-muted">
                {r.texto}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================================================================= */}
      {/* Estructura del proceso                                            */}
      {/* ================================================================= */}
      <Section>
        <Reveal>
          <Overline>Estructura del proceso</Overline>
          <h2 className="mt-5 max-w-2xl text-h1 text-balance text-foreground">
            Dos fases que suman: concurso y oposición.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-h3 text-foreground">
              Fase de concurso — los méritos que ya tienes
            </h3>
            <span className="text-overline uppercase text-accent-ink">
              Hasta 45 puntos
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-body text-muted">
            Se alegan en la inscripción, puntúan antes de examinarte y suman a la
            nota final.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {MERITOS.map((m, i) => (
            <Reveal
              key={m.titulo}
              delay={i * 80}
              className="rounded-lg border border-hairline bg-surface p-8"
            >
              <span className="text-overline uppercase text-accent-ink">
                {m.tope}
              </span>
              <h4 className="mt-3 text-h4 text-foreground">{m.titulo}</h4>
              <p className="mt-2 text-meta leading-relaxed text-muted">
                {m.texto}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={80}
          className="mt-6 rounded-lg border border-verde-bosque bg-inverse-bg p-6 text-inverse md:p-8"
        >
          <p className="text-body text-crema/90">
            <strong className="font-semibold text-crema">
              Los idiomas son la palanca real de la fase de concurso.
            </strong>{" "}
            Puntúan por cada idioma, así que con dos o tres certificados de nivel
            C se alcanza el tope: una ventaja difícil de recuperar para quien no
            los tiene.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-14">
          <h3 className="text-h3 text-foreground">
            Fase de oposición — los exámenes
          </h3>
          <p className="mt-3 max-w-2xl text-body text-muted">
            Se compone de tres bloques: conocimientos teórico-prácticos,
            psicotécnica y aptitud psicofísica.
          </p>
        </Reveal>
      </Section>

      {/* ================================================================= */}
      {/* Conocimientos teórico-prácticos                                   */}
      {/* ================================================================= */}
      <Section tone="surface">
        <Reveal>
          <Overline>Las pruebas de conocimientos</Overline>
          <h2 className="mt-5 max-w-2xl text-h1 text-balance text-foreground">
            Conocimientos teórico-prácticos.
          </h2>
          <p className="mt-6 max-w-2xl text-body text-muted">
            140 minutos y cuatro ejercicios seguidos. Es donde se juega la mayoría
            de los puntos y donde marca la diferencia dominar el temario.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[38rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-verde-200 text-overline uppercase text-faint">
                <th className="py-3 pr-4 font-semibold">Ejercicio</th>
                <th className="py-3 pr-4 font-semibold">Formato</th>
                <th className="py-3 font-semibold">Calificación</th>
              </tr>
            </thead>
            <tbody>
              {CONOCIMIENTOS.map((c) => (
                <tr key={c.ejercicio} className="border-b border-hairline align-top">
                  <td className="py-4 pr-4 text-h4 text-foreground">
                    {c.ejercicio}
                  </td>
                  <td className="py-4 pr-4 text-meta text-muted">{c.formato}</td>
                  <td className="py-4 text-meta font-medium text-foreground">
                    {c.calif}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal
          delay={80}
          className="mt-6 rounded-lg border border-oro bg-oro/10 p-6 md:p-8"
        >
          <p className="text-body text-foreground">
            Ortografía y gramática{" "}
            <strong className="font-semibold">no suman nota: solo eliminan.</strong>{" "}
            Cada año dejan fuera a aspirantes bien preparados de temario.
          </p>
        </Reveal>
      </Section>

      {/* ================================================================= */}
      {/* El temario · lo que preparamos contigo                            */}
      {/* ================================================================= */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <Reveal>
            <Overline>El temario</Overline>
            <h2 className="mt-5 text-h1 text-balance text-foreground">
              25 temas en tres bloques.
            </h2>
            <p className="mt-6 text-body text-muted">
              El grueso es{" "}
              <strong className="font-semibold text-foreground">derecho</strong>:
              por eso la base jurídica marca la diferencia el día del examen. Es
              justo el bloque que preparamos contigo con más profundidad.
            </p>
          </Reveal>

          <Reveal delay={120} className="space-y-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-h4 text-accent-ink">Bloque I</span>
                <span className="text-overline uppercase text-faint">
                  Ciencias Jurídicas
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {BLOQUE_I.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-verde-200 bg-surface px-3 py-1.5 text-meta text-verde-600"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-hairline p-6">
                <span className="text-h4 text-accent-ink">Bloque II</span>
                <p className="mt-2 text-h4 text-foreground">
                  Materias Socio-Culturales
                </p>
                <p className="mt-2 text-meta text-muted">
                  Protección Civil, Desarrollo Sostenible y Eficiencia Energética,
                  junto con cultura general.
                </p>
              </div>
              <div className="rounded-lg border border-hairline p-6">
                <span className="text-h4 text-accent-ink">Bloque III</span>
                <p className="mt-2 text-h4 text-foreground">
                  Materias Técnico-Científicas
                </p>
                <p className="mt-2 text-meta text-muted">
                  TIC y ciberseguridad, topografía, matemáticas y materias afines.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* Las demás pruebas · psicotécnica, físicas y entrevista            */}
      {/* ================================================================= */}
      <Section tone="surface">
        <Reveal>
          <Overline>Las demás pruebas</Overline>
          <h2 className="mt-5 max-w-2xl text-h1 text-balance text-foreground">
            Psicotécnica, físicas y entrevista.
          </h2>
        </Reveal>

        {/* Psicotécnica */}
        <Reveal delay={80} className="mt-12">
          <h3 className="text-h3 text-foreground">Prueba psicotécnica</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-hairline bg-background p-7">
              <span className="text-overline uppercase text-accent-ink">
                0–30 · mínimo 12
              </span>
              <h4 className="mt-3 text-h4 text-foreground">
                Aptitudes intelectuales
              </h4>
              <p className="mt-2 text-meta text-muted">
                80 preguntas en 55 minutos, incluida la lectura de instrucciones.
              </p>
            </div>
            <div className="rounded-lg border border-hairline bg-background p-7">
              <span className="text-overline uppercase text-accent-ink">
                Apoyo a la entrevista
              </span>
              <h4 className="mt-3 text-h4 text-foreground">
                Perfil de personalidad
              </h4>
              <p className="mt-2 text-meta text-muted">
                Tests de personalidad, actitud y motivación que después se usan
                como apoyo en la entrevista personal.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Corte intermedio */}
        <Reveal
          delay={80}
          className="mt-6 rounded-lg border border-verde-bosque bg-inverse-bg p-6 text-inverse md:p-8"
        >
          <p className="text-body text-crema/90">
            <strong className="font-semibold text-crema">Corte intermedio.</strong>{" "}
            Se suman concurso y oposición, y solo{" "}
            <strong className="font-semibold text-crema">
              1,5 aspirantes por cada plaza
            </strong>{" "}
            pasan a las pruebas de aptitud psicofísica. Aquí se decide de verdad
            quién continúa.
          </p>
        </Reveal>

        {/* Pruebas físicas */}
        <Reveal delay={80} className="mt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-h3 text-foreground">Pruebas físicas</h3>
            <span className="text-overline uppercase text-accent-ink">
              Apto / no apto · una elimina
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-body text-muted">
            No superar una sola supone la exclusión inmediata. Marcas para menores
            de 35 años; a partir de esa edad los mínimos se relajan ligeramente.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-verde-200 text-overline uppercase text-faint">
                <th className="py-3 pr-4 font-semibold">Prueba</th>
                <th className="py-3 pr-4 font-semibold tabular-nums">Hombres</th>
                <th className="py-3 font-semibold tabular-nums">Mujeres</th>
              </tr>
            </thead>
            <tbody>
              {FISICAS.map((f) => (
                <tr key={f.prueba} className="border-b border-hairline">
                  <td className="py-4 pr-4 text-body text-foreground">
                    {f.prueba}
                  </td>
                  <td className="py-4 pr-4 text-body tabular-nums text-muted">
                    {f.h}
                  </td>
                  <td className="py-4 text-body tabular-nums text-muted">{f.m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Entrevista y médico */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Reveal className="rounded-lg border border-hairline bg-background p-7">
            <h3 className="text-h4 text-foreground">Entrevista personal</h3>
            <p className="mt-2 text-meta text-muted">
              Semiestructurada, con un psicólogo presente. Valora adecuación a las
              normas, responsabilidad, espíritu de sacrificio, autocontrol,
              habilidades sociales y capacidad de adaptación.
            </p>
          </Reveal>
          <Reveal delay={80} className="rounded-lg border border-hairline bg-background p-7">
            <h3 className="text-h4 text-foreground">Reconocimiento médico</h3>
            <p className="mt-2 text-meta text-muted">
              El resultado puede ser apto, no apto o no apto circunstancial, con
              vía de revisión ante una Junta Médica.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* Qué ocurre después de aprobar                                     */}
      {/* ================================================================= */}
      <Section>
        <Reveal>
          <Overline>Después de aprobar</Overline>
          <h2 className="mt-5 max-w-2xl text-h1 text-balance text-foreground">
            De la academia a tu empleo de Guardia Civil.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal className="rounded-lg border border-hairline bg-surface p-8">
            <span className="text-h2 font-bold tabular-nums text-verde-200">01</span>
            <h3 className="mt-4 text-h4 text-foreground">Incorporación</h3>
            <p className="mt-2 text-meta text-muted">
              Academia de Cabos y Guardias en Baeza (Jaén) o Colegio de Guardias
              Jóvenes en Valdemoro (Madrid).
            </p>
          </Reveal>
          <Reveal delay={80} className="rounded-lg border border-hairline bg-surface p-8">
            <span className="text-h2 font-bold tabular-nums text-verde-200">02</span>
            <h3 className="mt-4 text-h4 text-foreground">Primer curso</h3>
            <p className="mt-2 text-meta text-muted">
              Presencial en el centro docente: 1.141 horas de formación, incluido
              el módulo de Instrucción y Adiestramiento.
            </p>
          </Reveal>
          <Reveal delay={160} className="rounded-lg border border-hairline bg-surface p-8">
            <span className="text-h2 font-bold tabular-nums text-verde-200">03</span>
            <h3 className="mt-4 text-h4 text-foreground">Segundo curso</h3>
            <p className="mt-2 text-meta text-muted">
              40 semanas de prácticas en unidades. Al superar el plan de estudios,
              te incorporas con el empleo de Guardia Civil.
            </p>
          </Reveal>
        </div>
      </Section>

      <CtaSection />
    </main>
  );
}
