import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "@/data/content";

export function Testimonials() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;
  const item = total > 0 ? TESTIMONIALS[i] : null;

  return (
    <section className="surface-light py-24 sm:py-32">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">07 — Depoimentos</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-8 max-w-2xl font-display text-[2.1rem] leading-[1.06] tracking-tight sm:text-5xl">
            Quem vive o resultado, <span className="italic text-accent">recomenda.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          {item ? (
            <figure className="mt-16 max-w-3xl">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: item.stars }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-7 font-display text-2xl leading-snug sm:text-3xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 text-[0.625rem] tracking-[0.24em] uppercase text-muted-foreground">
                {item.name} — {item.project}
              </figcaption>

              {total > 1 && (
                <div className="mt-10 flex items-center gap-4">
                  <button
                    type="button"
                    aria-label="Depoimento anterior"
                    onClick={() => setI((p) => (p - 1 + total) % total)}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Próximo depoimento"
                    onClick={() => setI((p) => (p + 1) % total)}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <span className="text-[0.625rem] tracking-[0.24em] uppercase text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                </div>
              )}
            </figure>
          ) : (
            /* Espaço reservado: insira depoimentos reais em src/data/content.ts (TESTIMONIALS). */
            <div className="mt-16 max-w-2xl rounded-sm border border-dashed border-border p-10">
              <p className="text-[0.625rem] tracking-[0.24em] uppercase text-muted-foreground">
                Espaço reservado
              </p>
              <p className="mt-4 font-display text-2xl leading-snug">
                Os depoimentos reais de clientes da LD Marmoraria serão exibidos aqui.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Cada depoimento exibe texto, nome, tipo de projeto e avaliação em estrelas.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
