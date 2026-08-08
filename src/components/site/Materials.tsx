import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { MATERIALS } from "@/data/content";

export function Materials() {
  return (
    <section id="materiais" className="bg-ink py-24 sm:py-32 lg:py-40">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">02 — Materiais</p>
        </Reveal>
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal delay={0.06} className="lg:col-span-7">
            <h2 className="font-display text-[2.1rem] leading-[1.06] tracking-tight text-ivory sm:text-5xl lg:text-[3.4rem]">
              A beleza começa <span className="italic text-sand">na matéria.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="max-w-md text-sm leading-relaxed text-ivory/55">
              Materiais selecionados para projetos que exigem estética, resistência e personalidade.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {MATERIALS.map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.07}>
              <Link
                to="/materiais"
                hash={m.slug}
                className="group relative flex h-full min-h-[24rem] flex-col justify-end overflow-hidden bg-ink p-7 lg:min-h-[32rem]"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  decoding="async"
                  width={1000}
                  height={1250}
                  className="absolute inset-0 h-full w-full object-cover opacity-55 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent transition-opacity duration-700 group-hover:from-ink/95" />
                <div className="relative">
                  <span className="text-[0.625rem] tracking-[0.28em] text-sand">{m.index}</span>
                  <h3 className="mt-3 font-display text-2xl text-ivory">{m.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ivory/55">{m.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.625rem] tracking-[0.24em] uppercase text-ivory opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Explorar
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
