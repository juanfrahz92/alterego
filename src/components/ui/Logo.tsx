import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Logotipo de Alterego. `tone="light"` para fondos claros (versión verde);
 * `tone="dark"` para fondos oscuros/verde noche (versión crema).
 * `variant="wordmark"` (horizontal) o `variant="lockup"` (emblema + texto).
 */
export function Logo({
  tone = "light",
  variant = "wordmark",
  className,
  priority,
}: {
  tone?: "light" | "dark";
  variant?: "wordmark" | "lockup" | "isotipo";
  className?: string;
  priority?: boolean;
}) {
  const map = {
    wordmark: {
      light: { src: "/logos/logo-horizontal.svg", w: 2552, h: 545 },
      dark: { src: "/logos/logo-horizontal-crema.svg", w: 2552, h: 545 },
    },
    lockup: {
      light: { src: "/logos/logo-lockup.svg", w: 2552, h: 1482 },
      dark: { src: "/logos/logo-lockup.svg", w: 2552, h: 1482 },
    },
    isotipo: {
      light: { src: "/logos/isotipo.svg", w: 543, h: 520 },
      dark: { src: "/logos/isotipo-crema.svg", w: 543, h: 520 },
    },
  } as const;

  const { src, w, h } = map[variant][tone];

  return (
    <Image
      src={src}
      alt="Alterego Academia"
      width={w}
      height={h}
      priority={priority}
      className={cn("w-auto", className)}
    />
  );
}
