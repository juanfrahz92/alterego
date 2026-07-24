import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-meta font-semibold tracking-wide transition-colors duration-300 ease-editorial focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  // Verde noche sólido con texto crema — CTA principal.
  primary:
    "bg-verde-noche text-crema hover:bg-verde-bosque focus-visible:outline-verde-bosque",
  // Contorno verde sobre fondo claro — acción secundaria.
  secondary:
    "border border-verde-200 bg-transparent text-foreground hover:border-verde-noche hover:bg-verde-100 focus-visible:outline-verde-bosque",
  // Sin fondo, con subrayado sutil.
  ghost:
    "px-2 py-1 text-foreground underline decoration-verde-200 decoration-1 underline-offset-4 hover:decoration-verde-noche",
  // Oro sobre fondo oscuro — CTA en secciones invertidas.
  inverse:
    "bg-oro text-verde-noche hover:bg-crema focus-visible:outline-crema",
};

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

/**
 * Botón/enlace de acción. Si recibe `href` renderiza un <Link> (interno) o
 * <a> (externo/anclas); si no, un <button>.
 */
export function Button({
  children,
  variant = "primary",
  className,
  href,
  external,
  ...rest
}: CommonProps &
  (
    | ({ href: string; external?: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined; external?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  )) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    const isInternal = href.startsWith("/") && !external;
    if (isInternal) {
      return (
        <Link href={href} className={classes} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
