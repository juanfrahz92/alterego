# Alterego Academia — Web

Web corporativa de Alterego Academia (preparación para la oposición a la
Guardia Civil). Next.js 16 + React 19 + Tailwind v4 + TypeScript.

## Desarrollo (Docker)

```bash
docker compose up --build   # levanta la web en http://localhost:3003
docker compose down         # para y limpia
```

Hot-reload activo: el código está montado como volumen. El puerto del host es
el **3003** (el 3000/3001/3002 los usan otros proyectos ZAO).

## Desarrollo (local, sin Docker)

```bash
npm install
npm run dev                 # http://localhost:3000
```

## Estructura

- `src/app/` — rutas (App Router): inicio, oposiciones, academia, quien-somos,
  blog, contacto y páginas legales.
- `src/components/` — `layout/` (header, footer), `ui/` (Button, Container,
  Section, Overline, Reveal, Logo, PageHeader…), `contact/` (formulario).
- `src/config/site.ts` — datos globales (contacto, redes, claim).
- `src/lib/` — utilidades (`cn`, `nav`).
- `src/data/` — contenido (artículos del blog).
- `public/logos/` — logotipos (verde e variantes crema para fondos oscuros).

## Marca

- Paleta: verde noche `#192B18`, verde bosque `#2D4F2B`, verde salvia
  `#718A58`, oro `#E0B93F`, crema `#FFF2CB`. Tokens en `src/app/globals.css`.
- Tipografía: Montserrat (`next/font`).

## Pendiente de cerrar con Francisco (cliente)

- Modalidades y **precios** exactos (solo temarios vs. preparación completa).
- **Datos legales** (razón social, CIF/NIF, dirección fiscal) → aviso legal,
  privacidad, cookies.
- **URL real del Aula Virtual** (`SITE.aulaVirtualUrl` en `config/site.ts`).
- **Dominio real** (`SITE.url`).
- **Foto/vídeo de Francisco** para "Quién somos".
- Confirmar si se mantiene el reclamo de **horario 24/7**.
- Pruebas sociales (testimonios/cifras), si las hay.
- Conectar el **envío de email** del formulario (Resend/SMTP) — ahora solo se
  registra en el log del servidor (`src/app/contacto/actions.ts`).
- Redactar los **artículos del blog** (ahora son ideas «próximamente»).
