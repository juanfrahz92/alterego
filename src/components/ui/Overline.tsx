import { cn } from "@/lib/cn";

/**
 * Etiqueta superior (eyebrow) para introducir secciones.
 * Solo texto en mayúsculas, muy tracked; sin línea decorativa.
 */
export function Overline({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block text-overline uppercase",
        tone === "dark" ? "text-oro" : "text-accent-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
