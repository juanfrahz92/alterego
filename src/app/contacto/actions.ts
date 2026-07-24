"use server";

/**
 * Acción de servidor del formulario de contacto.
 *
 * De momento valida los datos y devuelve el resultado. La ENTREGA del mensaje
 * (email) está pendiente de conectar un proveedor: Resend, SMTP/Nodemailer,
 * Formspree, etc. Ver el TODO más abajo.
 */

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<
    Record<"nombre" | "email" | "telefono" | "punto" | "mensaje" | "privacidad", string>
  >;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const nombre = String(formData.get("nombre") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telefono = String(formData.get("telefono") ?? "").trim();
  const punto = String(formData.get("punto") ?? "").trim();
  const mensaje = String(formData.get("mensaje") ?? "").trim();
  const privacidad = formData.get("privacidad") === "on";

  const errors: ContactState["errors"] = {};
  if (!nombre) errors.nombre = "Indica tu nombre.";
  if (!email) errors.email = "Indica tu correo electrónico.";
  else if (!EMAIL_RE.test(email)) errors.email = "El correo no es válido.";
  if (!mensaje) errors.mensaje = "Cuéntanos tu caso.";
  if (!privacidad)
    errors.privacidad = "Debes aceptar la política de privacidad.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      errors,
    };
  }

  // TODO: enviar el email con un proveedor (p. ej. Resend con RESEND_API_KEY).
  // De momento se registra en el servidor para no perder el mensaje en dev.
  console.log("[contacto] nuevo mensaje", {
    nombre,
    email,
    telefono,
    punto,
    mensaje,
  });

  return {
    status: "success",
    message:
      "Gracias por escribirnos. Te respondo lo antes posible. Aquí hablamos de tú a tú.",
  };
}
