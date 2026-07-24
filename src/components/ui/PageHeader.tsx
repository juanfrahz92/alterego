import { Container } from "@/components/ui/Container";
import { Overline } from "@/components/ui/Overline";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

/**
 * Encabezado estándar de las páginas interiores: overline + titular + entradilla.
 *   tone="light"  fondo crema suave (por defecto)
 *   tone="dark"   fondo verde noche con texto crema
 */
export function PageHeader({
  overline,
  title,
  lead,
  tone = "light",
}: {
  overline: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section
      className={cn(
        "border-b",
        dark
          ? "border-verde-bosque bg-inverse-bg text-inverse"
          : "border-hairline bg-surface",
      )}
    >
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl">
          <Reveal>
            <Overline tone={dark ? "dark" : "light"}>{overline}</Overline>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className={cn(
                "mt-6 text-h1 text-balance",
                dark ? "text-crema" : "text-foreground",
              )}
            >
              {title}
            </h1>
          </Reveal>
          {lead ? (
            <Reveal delay={160}>
              <p
                className={cn(
                  "mt-6 text-lead text-pretty",
                  dark ? "text-crema/80" : "text-muted",
                )}
              >
                {lead}
              </p>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
