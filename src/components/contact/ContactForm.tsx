"use client";

import { useActionState, useId } from "react";
import { submitContact, type ContactState } from "@/app/contacto/actions";
import { SITE } from "@/config/site";
import { cn } from "@/lib/cn";

const INITIAL: ContactState = { status: "idle" };

const inputBase =
  "w-full rounded-md border bg-background px-4 py-3 text-body text-foreground transition-colors duration-300 ease-editorial placeholder:text-faint focus:border-verde-noche focus:outline-none";

/**
 * Formulario de contacto accesible.
 * - Validación en servidor vía Server Action (useActionState).
 * - Errores indicados con texto + borde reforzado. aria-invalid + aria-describedby.
 */
export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, INITIAL);
  const ids = {
    nombre: useId(),
    email: useId(),
    telefono: useId(),
    punto: useId(),
    mensaje: useId(),
    privacidad: useId(),
  };
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-verde-200 bg-verde-100/60 p-8 text-body text-foreground"
      >
        <p className="font-semibold">¡Mensaje enviado!</p>
        <p className="mt-2 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-7">
      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="rounded-md border border-oro-oscuro/40 bg-oro/10 px-4 py-3 text-meta text-foreground"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-7 sm:grid-cols-2">
        <Field id={ids.nombre} name="nombre" label="Nombre" required error={errors.nombre} />
        <Field
          id={ids.email}
          name="email"
          type="email"
          label="Correo electrónico"
          required
          error={errors.email}
        />
        <Field id={ids.telefono} name="telefono" type="tel" label="Teléfono" error={errors.telefono} />

        {/* ¿En qué punto estás? */}
        <div className="flex flex-col gap-2">
          <label htmlFor={ids.punto} className="text-overline uppercase text-faint">
            ¿En qué punto estás?
          </label>
          <select
            id={ids.punto}
            name="punto"
            defaultValue=""
            className={cn(inputBase, "border-hairline")}
          >
            <option value="" disabled>
              Elige una opción
            </option>
            <option value="pensandomelo">Estoy pensándomelo</option>
            <option value="opositando">Ya estoy opositando</option>
            <option value="empezar-ya">Quiero empezar ya</option>
          </select>
        </div>
      </div>

      {/* Mensaje */}
      <div className="flex flex-col gap-2">
        <label htmlFor={ids.mensaje} className="text-overline uppercase text-faint">
          Cuéntame tu caso <span aria-hidden="true">*</span>
        </label>
        <textarea
          id={ids.mensaje}
          name="mensaje"
          rows={5}
          required
          aria-required="true"
          aria-invalid={errors.mensaje ? true : undefined}
          aria-describedby={errors.mensaje ? `${ids.mensaje}-error` : undefined}
          className={cn(inputBase, "resize-y", errors.mensaje ? "border-oro-oscuro" : "border-hairline")}
        />
        {errors.mensaje ? (
          <p id={`${ids.mensaje}-error`} className="text-meta text-accent-ink">
            {errors.mensaje}
          </p>
        ) : null}
      </div>

      {/* Privacidad */}
      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 text-meta text-muted">
          <input
            type="checkbox"
            name="privacidad"
            aria-invalid={errors.privacidad ? true : undefined}
            aria-describedby={errors.privacidad ? `${ids.privacidad}-error` : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 accent-verde-bosque"
          />
          <span>
            He leído y acepto la{" "}
            <a
              href="/privacidad"
              className="underline decoration-verde-200 decoration-1 underline-offset-4 hover:decoration-verde-noche"
            >
              política de privacidad
            </a>
            .
          </span>
        </label>
        {errors.privacidad ? (
          <p id={`${ids.privacidad}-error`} className="text-meta text-accent-ink">
            {errors.privacidad}
          </p>
        ) : null}
      </div>

      {/* Envío */}
      <div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-verde-noche px-8 py-3 text-meta font-semibold text-crema transition-colors duration-300 ease-editorial hover:bg-verde-bosque disabled:cursor-not-allowed disabled:opacity-50"
        >
          {pending ? "Enviando…" : "Enviar mensaje"}
        </button>
        <p className="mt-4 text-meta text-faint">
          Te respondo lo antes posible. Aquí hablamos de tú a tú. También puedes
          escribirme a{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="underline decoration-verde-200 decoration-1 underline-offset-4 hover:decoration-verde-noche"
          >
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </form>
  );
}

/** Campo de texto de una sola línea con label y error. */
function Field({
  id,
  name,
  label,
  type = "text",
  required = false,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-overline uppercase text-faint">
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(inputBase, error ? "border-oro-oscuro" : "border-hairline")}
      />
      {error ? (
        <p id={`${id}-error`} className="text-meta text-accent-ink">
          {error}
        </p>
      ) : null}
    </div>
  );
}
