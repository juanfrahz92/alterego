import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/ui/LegalPlaceholder";

export const metadata: Metadata = {
  title: "Política de cookies",
  robots: { index: false },
};

export default function CookiesPage() {
  return <LegalPlaceholder titulo="Política de cookies" />;
}
