"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NAV_ITEMS } from "@/lib/nav";
import { SITE } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Cabecera global. A la izquierda el logotipo; a la derecha el botón fijo
 * "Aula Virtual" (presente en toda la web, según brief) y el menú hamburguesa
 * que abre un overlay de navegación a pantalla completa.
 *
 * Accesibilidad:
 * - Botón con aria-expanded / aria-controls; overlay como role="dialog" modal.
 * - Cierre con Escape, bloqueo de scroll del body y focus trap en el overlay.
 * - Restaura el foco al botón al cerrar.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const openBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = overlayRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      openBtnRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-hairline bg-background/95 backdrop-blur-sm">
      <Container className="flex items-center justify-between py-4 md:py-5">
        <Link href="/" aria-label="Alterego Academia, inicio" className="shrink-0">
          <Logo variant="wordmark" tone="light" priority className="h-9 md:h-11" />
        </Link>

        <div className="flex items-center gap-5 md:gap-7">
          <Link
            href={SITE.aulaVirtualUrl}
            className="hidden items-center gap-2 rounded-full border border-verde-200 px-4 py-2 text-overline uppercase text-foreground transition-colors duration-300 ease-editorial hover:border-verde-noche hover:bg-verde-100 sm:inline-flex"
          >
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-oro"
            />
            Campus Online
          </Link>

          <button
            ref={openBtnRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="menu-overlay"
            className="group flex items-center gap-3"
          >
            <span className="text-overline uppercase text-foreground transition-colors duration-300 ease-editorial group-hover:text-verde-bosque">
              Menú
            </span>
            <span className="flex flex-col gap-[5px]" aria-hidden="true">
              <span className="block h-px w-6 bg-foreground" />
              <span className="block h-px w-6 bg-foreground" />
              <span className="block h-px w-6 bg-foreground" />
            </span>
          </button>
        </div>
      </Container>
      </header>

      {/* Overlay de navegación a pantalla completa (verde noche) */}
      <div
        id="menu-overlay"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navegación principal"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-50 bg-inverse-bg text-inverse transition-opacity duration-500 ease-editorial",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex h-full flex-col">
          <Container className="flex items-center justify-between py-4 md:py-5">
            <Link href="/" onClick={() => setOpen(false)} aria-label="Inicio">
              <Logo variant="wordmark" tone="dark" className="h-9 md:h-11" />
            </Link>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="group flex items-center gap-3"
            >
              <span className="text-overline uppercase text-oro transition-colors duration-300 ease-editorial group-hover:text-crema">
                Cerrar
              </span>
              <span className="relative block h-6 w-6" aria-hidden="true">
                <span className="absolute left-0 top-1/2 block h-px w-6 -translate-y-1/2 rotate-45 bg-crema" />
                <span className="absolute left-0 top-1/2 block h-px w-6 -translate-y-1/2 -rotate-45 bg-crema" />
              </span>
            </button>
          </Container>

          <Container className="flex flex-1 flex-col justify-center py-12">
            <nav aria-label="Principal">
              <ul>
                {NAV_ITEMS.map((item, i) => (
                  <li
                    key={item.href}
                    className="border-t border-verde-bosque last:border-b"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-5 py-5 md:py-6"
                    >
                      <span className="w-8 shrink-0 text-meta tabular-nums text-oro">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-h2 text-crema transition-colors duration-300 ease-editorial group-hover:text-oro">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>

          <Container className="py-8">
            <div className="flex flex-col gap-3 border-t border-verde-bosque pt-6 md:flex-row md:items-center md:justify-between">
              <Link
                href={SITE.aulaVirtualUrl}
                onClick={() => setOpen(false)}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-oro px-5 py-2.5 text-meta font-semibold text-verde-noche transition-colors duration-300 ease-editorial hover:bg-crema"
              >
                Entrar al Campus Online
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="text-meta text-crema/80 underline decoration-verde-salvia decoration-1 underline-offset-4 transition-[text-decoration-color] duration-300 ease-editorial hover:decoration-oro"
              >
                {SITE.email}
              </a>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
