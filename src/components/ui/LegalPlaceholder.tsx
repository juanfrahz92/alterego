import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

/**
 * Plantilla provisional para las páginas legales (aviso legal, privacidad,
 * cookies). Pendiente de redactar con los datos legales reales de Francisco
 * (razón social, CIF/NIF, dirección fiscal).
 */
export function LegalPlaceholder({ titulo }: { titulo: string }) {
  return (
    <main>
      <PageHeader overline="Información legal" title={titulo} />
      <Section>
        <div className="max-w-2xl rounded-lg border border-dashed border-verde-200 bg-verde-100/60 p-8">
          <p className="text-body text-verde-600">
            Este contenido está pendiente de redactar con los datos legales
            reales (razón social, CIF/NIF y dirección fiscal). Para dudas, puedes
            escribirnos a través de la página de contacto.
          </p>
        </div>
      </Section>
    </main>
  );
}
