import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Bloque de llamada a la acción, sobre verde noche. Se usa al cierre de las
 * páginas para invitar a empezar la preparación. Todos los textos y destinos
 * tienen valores por defecto, pero pueden personalizarse por página.
 */
export function CtaSection({
  title = "Tu plaza empieza el día que empiezas a prepararla.",
  subtitle = "Quien empieza a prepararse ahora tiene por delante el margen idóneo para llegar al examen con garantías. Con método, base jurídica y acompañamiento real hasta el día de la prueba.",
  primaryHref = "/contacto",
  primaryLabel = "Empieza a preparar tu plaza",
  secondaryHref = "/academia",
  secondaryLabel = "Ver cómo preparamos",
}: {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string | null;
  secondaryLabel?: string;
}) {
  return (
    <Section tone="dark">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-display text-balance text-crema">{title}</h2>
          <p className="mt-6 text-lead text-crema/80 text-pretty">{subtitle}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={primaryHref} variant="inverse">
              {primaryLabel}
            </Button>
            {secondaryHref ? (
              <Link
                href={secondaryHref}
                className="text-meta font-semibold text-crema underline decoration-verde-salvia decoration-1 underline-offset-4 transition-[text-decoration-color] duration-300 ease-editorial hover:decoration-oro"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
