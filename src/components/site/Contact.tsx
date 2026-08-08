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
            <p className="eyebrow">10 — Contato</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-8 font-display text-[2.1rem] leading-[1.06] tracking-tight text-ivory sm:text-5xl">
              Vamos transformar sua ideia <span className="italic text-sand">em realidade?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-ivory/55">
              Fale com nossa equipe e descubra as possibilidades para o seu projeto.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
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
