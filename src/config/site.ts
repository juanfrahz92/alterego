/**
 * Configuración global del sitio Alterego Academia.
 * Datos tomados del brief de marca y de contacto.
 * Los marcados como TODO están pendientes de confirmar con Francisco.
 */
export const SITE = {
  name: "Alterego Academia",
  shortName: "Alterego",
  tagline: "Preparación para la oposición a la Guardia Civil",
  claim: "Paso firme, honestidad y acompañamiento hasta la meta.",

  /** Dominio para metadata/OG. */
  url: "https://alteregoacademia.es", // TODO: confirmar dominio real

  /** Contacto */
  city: "Almería",
  address: "C. Luis de Baeza, 2 · 04009 Almería",
  email: "alteregopolgc@gmail.com",
  phone: "605 07 23 67",
  phoneHref: "+34605072367",
  schedule: "24/7", // TODO: confirmar si se mantiene el reclamo 24/7

  /** Redes sociales */
  social: {
    instagram: "https://instagram.com/alter_ego_pol",
    instagramHandle: "@alter_ego_pol",
  },

  /** Aula Virtual (campus del alumno) — TODO: URL real de la plataforma */
  aulaVirtualUrl: "#aula-virtual",
} as const;
