import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Overline } from "@/components/ui/Overline";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Listo para dar el paso? Cuéntame en qué punto estás y te digo por dónde empezar. Sin compromiso y sin humo.",
};

export default function ContactoPage() {
  return (
    <main>
      <PageHeader
        tone="dark"
        overline="Contacto"
        title="¿Listo para dar el paso? Hablemos."
        lead="Cuéntame en qué punto estás y te digo por dónde empezar. Sin compromiso y sin humo: la verdad, aunque sea exigente."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Datos de contacto */}
          <Reveal>
            <Overline>Datos de contacto</Overline>
            <dl className="mt-6 space-y-6">
              <div>
                <dt className="text-overline uppercase text-faint">Dirección</dt>
                <dd className="mt-1 text-body text-foreground">
                  {SITE.address}
                </dd>
              </div>
              <div>
                <dt className="text-overline uppercase text-faint">Teléfono</dt>
                <dd className="mt-1 text-body text-foreground">
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="underline decoration-verde-200 decoration-1 underline-offset-4 hover:decoration-verde-noche"
                  >
                    {SITE.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-overline uppercase text-faint">Email</dt>
                <dd className="mt-1 text-body text-foreground">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="underline decoration-verde-200 decoration-1 underline-offset-4 hover:decoration-verde-noche"
                  >
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-overline uppercase text-faint">Instagram</dt>
                <dd className="mt-1 text-body text-foreground">
                  <a
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-verde-200 decoration-1 underline-offset-4 hover:decoration-verde-noche"
                  >
                    {SITE.social.instagramHandle}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
