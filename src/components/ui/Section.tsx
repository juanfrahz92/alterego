import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

/**
 * Bloque de sección con padding vertical consistente y variantes de fondo.
 *   tone="default"  fondo base (blanco cálido)
 *   tone="surface"  fondo crema suave
 *   tone="dark"     fondo verde noche con texto crema
 */
export function Section({
  children,
  tone = "default",
  className,
  containerClassName,
  id,
}: {
  children: React.ReactNode;
  tone?: "default" | "surface" | "dark";
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        tone === "surface" && "bg-surface",
        tone === "dark" && "bg-inverse-bg text-inverse",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
