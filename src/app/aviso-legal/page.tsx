import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/ui/LegalPlaceholder";

export const metadata: Metadata = {
  title: "Aviso legal",
  robots: { index: false },
};

export default function AvisoLegalPage() {
  return <LegalPlaceholder titulo="Aviso legal" />;
}
