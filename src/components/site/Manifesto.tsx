import { Reveal, ImageReveal } from "./Reveal";
import marbleMacro from "@/assets/marble-macro.jpg";

export function Manifesto() {
  return (
    <section id="manifesto" className="surface-light py-24 sm:py-32 lg:py-40">
      <div className="container-editorial grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">01 — Manifesto</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 font-display text-[2.1rem] leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              Mais do que pedra.
              <br />
              <span className="italic text-accent">Criamos espaços que permanecem.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-9 max-w-xl text-base leading-relaxed text-muted-foreground">
              Cada projeto começa com uma escolha. A escolha de um material, de um acabamento, de uma
              textura. Na LD Marmoraria, transformamos pedras naturais e superfícies nobres em
              elementos que fazem parte da arquitetura.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <ImageReveal
            src={marbleMacro}
            alt="Detalhe macro de uma superfície de mármore branco com veios acinzentados"
            width={1200}
            height={1504}
            className="aspect-[4/5] w-full rounded-sm"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-[0.625rem] leading-relaxed tracking-[0.28em] uppercase text-muted-foreground">
              A matéria-prima
              <br />
              encontra a arquitetura.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
