/**
 * Artículos del blog de Alterego. Cada artículo tiene su cuerpo en bloques
 * sencillos (párrafo, subtítulo o lista) que la página /blog/[slug] renderiza.
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
  cuerpo: ArticleBlock[];
};

export const ARTICLES: Article[] = [
  {
    slug: "por-que-la-base-juridica-lo-cambia-todo",
    categoria: "Base jurídica",
    titulo: "Por qué la base jurídica lo cambia todo en la oposición",
    extracto:
      "La mayor parte del bloque de conocimientos es derecho. Entender cómo funciona una norma —y no solo memorizarla— es lo que marca la diferencia el día del examen.",
    fecha: "Julio de 2026",
    lectura: "4 min",
    cuerpo: [
      {
        type: "p",
        text: "Mira el temario de conocimientos de la Guardia Civil: Constitución, derecho penal, procesal, seguridad ciudadana, extranjería, protección de datos, violencia de género. La mayor parte de lo que te van a preguntar es derecho.",
      },
      {
        type: "p",
        text: "Cuando entiendes cómo se construye una norma —de dónde sale, qué protege y cómo se relaciona con las demás— dejas de memorizar artículos sueltos y empiezas a entender un sistema. Y eso tiene consecuencias muy prácticas.",
      },
      { type: "h2", text: "Lo que consigues cuando entiendes la norma" },
      {
        type: "ul",
        items: [
          "Retienes mucho más y durante más tiempo, porque cada tema se apoya en el anterior.",
          "Resuelves las preguntas trampa, esas en las que dos respuestas parecen igual de válidas.",
          "No te quedas en blanco ante un enunciado formulado de una forma que no habías visto.",
          "Te adaptas a las reformas: cuando cambia una ley, sabes qué ha cambiado y por qué.",
        ],
      },
      { type: "h2", text: "Por qué el perfil de abogado marca la diferencia" },
      {
        type: "p",
        text: "No es lo mismo haberse estudiado el derecho una vez que trabajar con él. Conocer la norma aplicada permite explicar el porqué de cada precepto, y no solo su contenido. Y el porqué es justo lo que hace que un tema se quede.",
      },
      {
        type: "p",
        text: "Para el bloque de conocimientos, donde se juegan la mayoría de los puntos y donde más gente se queda fuera, esa es nuestra especialidad. A eso le sumamos haber vivido la oposición desde dentro.",
      },
    ],
  },
  {
    slug: "sistema-de-vueltas-y-repasos",
    categoria: "Método",
    titulo: "El sistema de vueltas y repasos: estudiar sin que el temario se te caiga",
    extracto:
      "Estudiar linealmente lleva a diciembre sin recordar lo de septiembre. Te contamos el método que usamos, el mismo de las grandes oposiciones jurídicas.",
    fecha: "Julio de 2026",
    lectura: "4 min",
    cuerpo: [
      {
        type: "p",
        text: "El error más común al opositar no es estudiar poco: es estudiar linealmente. Avanzas tema a tema y, cuando llegas al final, ya no recuerdas el principio. Por eso trabajamos con un sistema de vueltas y repasos, el mismo que se utiliza en oposiciones jurídicas como judicatura.",
      },
      { type: "h2", text: "Cómo funciona" },
      {
        type: "p",
        text: "No intentamos aprenderlo todo de una vez. En la primera vuelta fijamos lo esencial de cada tema. En las siguientes vamos añadiendo detalle sobre una base que ya está sujeta. Así el temario no se te cae por el camino.",
      },
      { type: "h2", text: "Los simulacros, desde el primer mes" },
      {
        type: "p",
        text: "Hacemos simulacros con los tiempos y la estructura del examen oficial desde el principio, por dos razones: el examen también es una prueba de gestión del tiempo y de nervios —y eso se entrena—, y cada simulacro te da datos reales de dónde estás fallando, no una sensación.",
      },
      {
        type: "ul",
        items: [
          "Clases presenciales intensivas y repasos exprés sobre lo que más se repite.",
          "Test por temas con retroalimentación: cada fallo explicado, para que cada error sume.",
          "Clases grabadas para volver a lo que necesites, cuando lo necesites.",
        ],
      },
      {
        type: "p",
        text: "Y por encima de todo, atención personalizada. Aquí no eres un número en una lista.",
      },
    ],
  },
  {
    slug: "ortografia-y-gramatica-las-pruebas-que-eliminan",
    categoria: "Las pruebas",
    titulo: "Ortografía y gramática: las pruebas que no suman, pero eliminan",
    extracto:
      "No aportan nota, pero cada año dejan fuera a aspirantes bien preparados de temario. Por qué conviene tomárselas en serio desde el primer día.",
    fecha: "Julio de 2026",
    lectura: "3 min",
    cuerpo: [
      {
        type: "p",
        text: "Dentro de la prueba de conocimientos teórico-prácticos hay dos ejercicios que despistan a mucha gente: ortografía y gramática. No suman puntos a la nota final, pero funcionan como filtro: con seis o más respuestas erróneas, quedas excluido.",
      },
      { type: "h2", text: "Por qué se llevan por delante a gente preparada" },
      {
        type: "p",
        text: "Es fácil volcar toda la energía en el temario y llegar al examen confiado, sin haber practicado estos ejercicios. Y ahí está la trampa: puedes dominar el derecho constitucional y quedarte fuera por unas faltas que se entrenan en unas semanas.",
      },
      {
        type: "ul",
        items: [
          "Ortografía: 5 frases con palabras subrayadas; hay que señalar las que tienen falta.",
          "Gramática: 20 frases; hay que detectar las incorrectas morfológica o sintácticamente.",
          "En ambas, seis errores suponen la exclusión.",
        ],
      },
      { type: "h2", text: "La conclusión" },
      {
        type: "p",
        text: "Estas pruebas se preparan, y se preparan pronto. Integrarlas en el estudio desde el principio evita el disgusto de caer eliminado por algo perfectamente evitable.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
