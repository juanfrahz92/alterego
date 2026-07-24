/**
 * Une clases condicionalmente sin dependencias externas.
 * Uso: cn("base", condición && "extra", className)
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
