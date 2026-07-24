"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Carrusel de reseñas de alumnos. Rota automáticamente y permite navegar con
 * flechas o puntos. Se pausa al pasar el ratón por encima.
 *
 * NOTA: las reseñas son de ejemplo. Sustituir por testimonios reales de
 * alumnos (nombre y resultado) cuando estén disponibles.
 */
const REVIEWS = [
  {
    texto:
      "Llegué sin saber por dónde empezar y, con el método de vueltas y repasos, todo cobró sentido. Aprobé a la primera.",
    nombre: "Javier M.",
    meta: "Guardia Civil desde 2024",
  },
  {
    texto:
      "La diferencia es entender el porqué de cada tema. Francisco explica el derecho como nadie y se te queda.",
    nombre: "Laura S.",
    meta: "Opositora",
  },
  {
    texto:
      "Los simulacros mensuales me quitaron el miedo al examen. Llegué al día clave con seguridad.",
    nombre: "Marta R.",
    meta: "Aprobada en 2024",
  },
  {
    texto:
      "Clases presenciales, trato cercano y respuestas cuando las necesitaba. Nunca me sentí un número.",
    nombre: "Andrés P.",
    meta: "Alumno de Alterego",
  },
  {
    texto:
      "Materiales claros y al día. Se nota que detrás hay alguien que domina de verdad la materia.",
    nombre: "Cristina G.",
    meta: "Opositora",
  },
];

const INTERVAL_MS = 6500;

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = REVIEWS.length;

  const go = useCallback(
    (delta: number) => setIndex((p) => (p + delta + total) % total),
    [total],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(
      () => setIndex((p) => (p + 1) % total),
      INTERVAL_MS,
    );
    return () => window.clearInterval(id);
  }, [paused, total]);

  const review = REVIEWS[index];

  return (
    <div
      className="relative mx-auto mt-12 max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="rounded-lg border border-hairline bg-surface p-8 text-center md:p-12">
        <div className="flex justify-center gap-1 text-oro" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} />
          ))}
        </div>
        <blockquote
          aria-live="polite"
          className="mt-6 text-lead text-balance text-foreground"
        >
          «{review.texto}»
        </blockquote>
        <p className="mt-6 text-h4 text-foreground">{review.nombre}</p>
        <p className="text-meta text-muted">{review.meta}</p>
      </div>

      {/* Controles */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Reseña anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-verde-200 text-foreground transition-colors duration-300 ease-editorial hover:border-verde-noche hover:bg-verde-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-bosque"
        >
          <Chevron dir="left" />
        </button>

        <div className="flex items-center gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir a la reseña ${i + 1}`}
              aria-current={i === index}
              className={cn(
                "h-2 w-2 rounded-full transition-colors duration-300 ease-editorial",
                i === index ? "bg-oro" : "bg-verde-200 hover:bg-verde-salvia",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Reseña siguiente"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-verde-200 text-foreground transition-colors duration-300 ease-editorial hover:border-verde-noche hover:bg-verde-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-bosque"
        >
          <Chevron dir="right" />
        </button>
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94L12 2.5Z" />
    </svg>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={dir === "left" ? "rotate-180" : undefined}
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
