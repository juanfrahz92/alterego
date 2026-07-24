import { cn } from "@/lib/cn";

/**
 * Contenedor central del sitio. Fija el ancho máximo y los márgenes
 * laterales generosos (mobile-first) que definen la retícula.
 *
 * Ancho máximo: 1280px. Márgenes: 24px móvil → 40px tablet → 64px escritorio.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-16",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
