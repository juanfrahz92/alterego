import { Container } from "@/components/ui/Container";
import { SITE } from "@/config/site";

/**
 * Barra superior de utilidad (sobre la navegación), en verde noche.
 * Muestra los datos de contacto a la izquierda y las redes sociales a la
 * derecha. No es sticky: se desplaza al hacer scroll y deja fija solo la
 * cabecera de navegación.
 */
export function TopBar() {
  return (
    <div className="bg-verde-noche text-crema/85">
      <Container className="flex h-9 items-center justify-between gap-4 text-[0.78rem] tracking-wide md:h-10">
        {/* Contacto */}
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href={`tel:${SITE.phoneHref}`}
            className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-oro"
          >
            <PhoneIcon />
            <span>{SITE.phone}</span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="hidden items-center gap-1.5 transition-colors duration-200 hover:text-oro sm:inline-flex"
          >
            <MailIcon />
            <span>{SITE.email}</span>
          </a>
        </div>

        {/* Ubicación + redes */}
        <div className="flex items-center gap-4 md:gap-5">
          <span className="hidden items-center gap-1.5 text-crema/70 md:inline-flex">
            <PinIcon />
            {SITE.city}
          </span>
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${SITE.social.instagramHandle}`}
            className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-oro"
          >
            <InstagramIcon />
            <span className="hidden sm:inline">{SITE.social.instagramHandle}</span>
          </a>
        </div>
      </Container>
    </div>
  );
}

/* --- Iconos (inline, 14px, heredan color) --------------------------------- */

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8a15.9 15.9 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.24 1L6.6 10.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2L12 12l7.6-5H4.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.42 2.2 8.8 2.2 12 2.2Zm0 3.2A6.6 6.6 0 1 0 12 18.6 6.6 6.6 0 0 0 12 5.4Zm0 10.9A4.3 4.3 0 1 1 12 7.7a4.3 4.3 0 0 1 0 8.6Zm6.85-11.15a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
