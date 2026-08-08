import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Lightbox } from "./Lightbox";
import { Button } from "@/components/ui/button";
import { PROJECTS, type Project } from "@/data/content";

const spanClass: Record<Project["span"], string> = {
  tall: "sm:row-span-2 aspect-[3/4]",
  wide: "sm:col-span-2 aspect-[16/10]",
  square: "aspect-square",
};

export function ProjectGrid({ items }: { items: Project[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="grid auto-rows-min grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {items.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.08} className={spanClass[p.span]}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block h-full w-full overflow-hidden rounded-sm text-left"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[0.625rem] tracking-[0.28em] uppercase text-sand">{p.category}</p>
                <h3 className="mt-2 font-display text-xl text-ivory">{p.title}</h3>
                <p className="mt-1 text-[0.6875rem] tracking-wide text-ivory/50">
                  {p.material}
                  {p.location ? ` • ${p.location}` : ""}
                </p>
              </div>
              <span className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full border border-ivory/25 text-ivory opacity-0 transition-all duration-500 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="surface-light py-24 sm:py-32 lg:py-40">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">03 — Projetos</p>
        </Reveal>
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal delay={0.06} className="lg:col-span-7">
            <h2 className="font-display text-[2.1rem] leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Projetos que <span className="italic text-accent">falam por si.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Conheça alguns dos trabalhos realizados pela LD Marmoraria.
            </p>
          </Reveal>
        </div>

        <div className="mt-16">
          <ProjectGrid items={PROJECTS} />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <Button asChild variant="ink" size="xl">
              <Link to="/projetos">
                Ver galeria completa <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
