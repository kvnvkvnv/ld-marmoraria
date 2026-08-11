import { useState } from "react";
import { z } from "zod";
import { ArrowRight, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { SITE, whatsappLink } from "@/lib/site";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome.").max(100, "Nome muito longo."),
  whatsapp: z
    .string()
    .trim()
    .min(10, "Informe um telefone válido com DDD.")
    .max(20, "Telefone muito longo.")
    .regex(/^[0-9()\-+\s]+$/, "Use apenas números e símbolos de telefone."),
  email: z.string().trim().email("E-mail inválido.").max(255, "E-mail muito longo."),
  tipo: z.string().trim().min(1, "Selecione o tipo de projeto."),
  mensagem: z.string().trim().min(10, "Conte um pouco mais sobre o projeto.").max(1000, "Máximo de 1000 caracteres."),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const PROJECT_TYPES = [
  "Cozinha",
  "Banheiro / Lavabo",
  "Área gourmet",
  "Escada",
  "Bancadas",
  "Revestimento / Decorativo",
  "Outro",
];

const fieldClass =
  "w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      nome: String(fd.get("nome") ?? ""),
      whatsapp: String(fd.get("whatsapp") ?? ""),
      email: String(fd.get("email") ?? ""),
      tipo: String(fd.get("tipo") ?? ""),
      mensagem: String(fd.get("mensagem") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const v = parsed.data;
    const message = `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${v.nome}\nWhatsApp: ${v.whatsapp}\nE-mail: ${v.email}\nTipo de projeto: ${v.tipo}\n\n${v.mensagem}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="bg-ink py-24 sm:py-32 lg:py-40">
      <div className="container-editorial grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="font-display text-[2.1rem] leading-[1.06] tracking-tight text-ivory sm:text-5xl">
              Vamos transformar sua ideia <span className="italic text-sand">em realidade?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/55">
              Fale com nossa equipe e descubra as possibilidades para o seu projeto.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={whatsappLink("Olá, quero fazer um orçamento!")}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-sand px-7 py-4 text-sm font-semibold text-ink transition-all hover:bg-ivory"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.87 9.87 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.02h-.01c-1.5 0-2.98-.4-4.27-1.17l-.31-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.15 8.24z" />
              </svg>
              Fale no WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.14}>
            <address className="mt-12 space-y-5 not-italic">
              <p className="text-[0.625rem] tracking-[0.28em] uppercase text-sand">LD Marmoraria</p>
              <p className="flex gap-3 text-sm text-ivory/65">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.city} — {SITE.address.state}
                </span>
              </p>
              <p className="flex gap-3 text-sm text-ivory/65">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
                <a href={SITE.phoneHref} className="link-underline hover:text-ivory">
                  {SITE.phone}
                </a>
              </p>
              <p className="flex gap-3 text-sm text-ivory/65">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
                <a href={`mailto:${SITE.email}`} className="link-underline break-all hover:text-ivory">
                  {SITE.email}
                </a>
              </p>
            </address>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="line" size="pill" className="text-ivory">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="line" size="pill" className="text-ivory">
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram /> Instagram
                </a>
              </Button>
              <Button asChild variant="line" size="pill" className="text-ivory">
                <a href={SITE.maps} target="_blank" rel="noopener noreferrer">
                  Como chegar
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="grid gap-8 sm:grid-cols-2">
              <Field label="Nome" name="nome" error={errors.nome}>
                <input name="nome" type="text" maxLength={100} placeholder="Seu nome" className={fieldClass} />
              </Field>
              <Field label="WhatsApp" name="whatsapp" error={errors.whatsapp}>
                <input
                  name="whatsapp"
                  type="tel"
                  maxLength={20}
                  placeholder="(00) 00000-0000"
                  className={fieldClass}
                />
              </Field>
              <Field label="E-mail" name="email" error={errors.email}>
                <input
                  name="email"
                  type="email"
                  maxLength={255}
                  placeholder="voce@email.com"
                  className={fieldClass}
                />
              </Field>
              <Field label="Tipo de projeto" name="tipo" error={errors.tipo}>
                <select name="tipo" defaultValue="" className={`${fieldClass} text-ivory/90`}>
                  <option value="" disabled className="bg-ink">
                    Selecione
                  </option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-ink">
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Mensagem" name="mensagem" error={errors.mensagem}>
                  <textarea
                    name="mensagem"
                    rows={4}
                    maxLength={1000}
                    placeholder="Conte-nos sobre o ambiente, as medidas aproximadas e o material desejado."
                    className={`${fieldClass} resize-none`}
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" variant="solid" size="xl" className="w-full sm:w-auto">
                  Enviar solicitação <ArrowRight />
                </Button>
                <p className="mt-4 text-[0.625rem] tracking-[0.18em] uppercase text-ivory/30">
                  A solicitação é encaminhada pelo WhatsApp da LD Marmoraria.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[0.625rem] tracking-[0.28em] uppercase text-ivory/45"
      >
        {label}
      </label>
      <div className="mt-2 text-ivory">{children}</div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
