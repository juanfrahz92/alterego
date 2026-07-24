"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Carrusel de fondo del hero. Cruza suavemente entre fotografías de la
 * Guardia Civil. Es puramente decorativo (aria-hidden): el contexto lo aporta
 * el <h1> del hero. Sobre las imágenes se aplican velos en verde noche para
 * garantizar que el texto sea siempre legible.
 */
const SLIDES = [
  { src: "/cabecera/cabecera-1.jpg", alt: "Guardias civiles en formación ante la bandera de España" },
  { src: "/cabecera/cabecera-2.jpg", alt: "Guardia civil junto a un vehículo patrulla" },
  { src: "/cabecera/cabecera-3.jpg", alt: "Guardia civil con un cachorro de la unidad canina" },
  { src: "/cabecera/cabecera-4.jpg", alt: "Helicóptero de la Guardia Civil en vuelo" },
  { src: "/cabecera/cabecera-5.jpg", alt: "Guardia civil de servicio" },
  { src: "/cabecera/cabecera-6.jpg", alt: "Agente de la Guardia Civil patrullando" },
  { src: "/cabecera/cabecera-7.jpg", alt: "Dos guardias civiles patrullando al atardecer" },
  { src: "/cabecera/cabecera-8.jpg", alt: "Agente de la Guardia Civil de servicio" },
] as const;

const INTERVAL_MS = 5500;

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setActive((prev) => (prev + 1) % SLIDES.length),
      INTERVAL_MS,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden bg-verde-noche"
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1400ms] ease-editorial motion-reduce:transition-none",
            i === active ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Velos en verde noche: lateral (para el texto a la izquierda) e inferior. */}
      <div className="absolute inset-0 bg-gradient-to-r from-verde-noche via-verde-noche/85 to-verde-noche/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-verde-noche/90 via-transparent to-verde-noche/20" />
    </div>
  );
}
