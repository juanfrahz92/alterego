"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Revela su contenido con un fundido + desplazamiento sutil al entrar en
 * viewport. Respeta prefers-reduced-motion (globals.css anula la transición).
 *
 * Robustez: el contenido nunca queda oculto permanentemente. Si el elemento
 * ya está en pantalla al montar, se revela de inmediato; y un temporizador de
 * seguridad lo revela pase lo que pase, aunque el IntersectionObserver no
 * llegue a dispararse (p. ej. en algunos navegadores headless).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Ya visible en el primer paint (por encima del pliegue): revelar ya.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);

    // Seguridad: nunca dejar el contenido oculto de forma indefinida.
    const safety = window.setTimeout(() => setVisible(true), 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-editorial",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
