/**
 * Estructura de navegación principal del sitio.
 * Fuente única para el overlay del menú y el pie de página.
 */
export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Oposiciones", href: "/oposiciones" },
  { label: "Academia", href: "/academia" },
  { label: "Quién somos", href: "/quien-somos" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];
