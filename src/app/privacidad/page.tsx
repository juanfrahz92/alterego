import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/ui/LegalPlaceholder";

export const metadata: Metadata = {
  title: "Política de privacidad",
  robots: { index: false },
};

export default function PrivacidadPage() {
  return <LegalPlaceholder titulo="Política de privacidad" />;
}
