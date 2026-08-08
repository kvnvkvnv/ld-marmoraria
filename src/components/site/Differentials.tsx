import { Reveal } from "./Reveal";
import { DIFFERENTIALS } from "@/data/content";

export function Differentials() {
  return (
    <section className="bg-ink py-24 sm:py-32 lg:py-40">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">06 — Diferenciais</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-8 font-display text-[2.1rem] leading-[1.06] tracking-tight text-ivory sm:text-5xl lg:text-[3.4rem]">
            Por que <span className="italic text-sand">LD Marmoraria?</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-x-16 gap-y-14 sm:grid-cols-2">
          {DIFFERENTIALS.map((d, i) => (
            <Reveal key={d.index} delay={i * 0.08}>
              <article className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-6 border-t border-border/60 pt-7">
                <span className="font-display text-5xl leading-none text-ivory/12">{d.index}</span>
                <div className="min-w-0">
                  <h3 className="text-[0.6875rem] tracking-[0.28em] uppercase text-ivory">
                    {d.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ivory/50">{d.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
