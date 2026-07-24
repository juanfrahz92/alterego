import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NAV_ITEMS } from "@/lib/nav";
import { SITE } from "@/config/site";

/**
 * Pie de página global sobre fondo verde noche. Reúne el logotipo, la
 * navegación, las vías de contacto (con iconos), el claim y la nota legal.
 */
export function SiteFooter() {
  const year = 2026; // año fijo del proyecto; actualizar en cada convocatoria

  return (
    <footer className="bg-inverse-bg text-inverse">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Marca + claim */}
          <div className="max-w-sm">
            <Image
              src="/logos/footer-logo2-crema.png"
              alt="Alterego Academia"
              width={1734}
              height={826}
              className="h-24 w-auto md:h-28"
            />
            <p className="mt-6 text-body text-crema/80">{SITE.claim}</p>
            <Link
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 text-meta font-semibold text-oro underline decoration-verde-salvia decoration-1 underline-offset-4 transition-[text-decoration-color] duration-300 ease-editorial hover:decoration-oro"
            >
              Da el paso →
            </Link>
          </div>

          {/* Navegación */}
          <nav aria-label="Pie de página">
            <p className="text-overline uppercase text-oro">Navegación</p>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-meta text-crema/80 transition-colors duration-300 ease-editorial hover:text-crema"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto con iconos */}
          <div>
            <p className="text-overline uppercase text-oro">Contacto</p>
            <ul className="mt-5 space-y-4 text-meta text-crema/80">
              <li className="flex items-start gap-3">
                <PinIcon />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="transition-colors duration-300 ease-editorial hover:text-crema"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors duration-300 ease-editorial hover:text-crema"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon />
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 ease-editorial hover:text-crema"
                >
                  {SITE.social.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-verde-bosque pt-6 text-meta text-crema/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.name}. {SITE.tagline}.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/aviso-legal" className="hover:text-crema">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-crema">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-crema">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* --- Iconos (inline, heredan color con currentColor) ---------------------- */

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-oro"
    >
      <path
        d="M6.6 10.8a15.9 15.9 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.24 1L6.6 10.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-oro"
    >
      <path
        d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2L12 12l7.6-5H4.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-oro"
    >
      <path
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-oro"
    >
      <path
        d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.42 2.2 8.8 2.2 12 2.2Zm0 3.2A6.6 6.6 0 1 0 12 18.6 6.6 6.6 0 0 0 12 5.4Zm0 10.9A4.3 4.3 0 1 1 12 7.7a4.3 4.3 0 0 1 0 8.6Zm6.85-11.15a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
