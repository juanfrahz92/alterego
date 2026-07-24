/**
 * Artículos del blog de Alterego. Cada artículo tiene su imagen de portada y
 * su cuerpo en bloques sencillos (párrafo, subtítulo o lista) que la página
 * /blog/[slug] renderiza.
 */
export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  categoria: string;
  titulo: string;
  extracto: string;
  fecha: string;
  lectura: string;
  imagen: string;
  imagenAlt: string;
  cuerpo: ArticleBlock[];
};

export const ARTICLES: Article[] = [
  {
    slug: "miles-de-plazas-guardia-civil-que-significa",
    categoria: "Actualidad",
    titulo:
      "Se habla de hasta 27.000 plazas: qué significa de verdad para ti",
    extracto:
      "La Guardia Civil encara una de sus mayores oleadas de incorporación de los últimos años. Te lo contamos sin humo: qué implica para quien quiere opositar y por qué el momento de empezar es ahora.",
    fecha: "Julio de 2026",
    lectura: "4 min",
    imagen: "/cabecera/cabecera-1.jpg",
    imagenAlt: "Guardias civiles en formación ante la bandera de España",
    cuerpo: [
      {
        type: "p",
        text: "En los últimos meses se ha adelantado que la Guardia Civil prevé incorporar en torno a 27.000 efectivos en los próximos años. Sería una de las mayores oleadas de acceso de su historia reciente y, para quien está pensando en opositar, una noticia enorme. Pero conviene leerla bien.",
      },
      { type: "h2", text: "Más plazas no significa más fácil" },
      {
        type: "p",
        text: "Es la primera idea que hay que tener clara. Que se convoquen más plazas es una gran oportunidad —más gente entra—, pero también anima a más aspirantes a presentarse. La plaza no la reparte el número de convocatorias: la marca la nota. Y la nota la consigue quien llega mejor preparado.",
      },
      { type: "h2", text: "Dónde se decide de verdad" },
      {
        type: "p",
        text: "El bloque de conocimientos sigue siendo el gran filtro. La mayor parte es derecho, y ahí es donde más gente se queda fuera. Entender la norma —y no solo memorizarla— es lo que te permite resolver las preguntas trampa y no quedarte en blanco ante un enunciado que no habías visto.",
      },
      { type: "h2", text: "Por qué empezar ahora" },
      {
        type: "ul",
        items: [
          "Tienes por delante el margen idóneo: un curso completo para preparar el temario con cabeza, no a la carrera.",
          "Los idiomas y otros méritos suman antes del examen; cuanto antes empieces, más ventaja acumulas.",
          "La preparación seria se construye con vueltas y repasos, no en las últimas semanas.",
        ],
      },
      {
        type: "p",
        text: "Si llevas tiempo dándole vueltas, este es un buen momento para dar el paso. En Alterego preparamos la oposición desde una base jurídica sólida, con un método propio y acompañamiento real, en Almería y online. Cuéntanos en qué punto estás y te decimos por dónde empezar.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
