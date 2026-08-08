import { Reveal } from "./Reveal";
import { PROCESS } from "@/data/content";

export function Process() {
  return (
    <section id="processo" className="bg-ink py-24 sm:py-32 lg:py-40">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">04 — Experiência LD</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-8 max-w-3xl font-display text-[2.1rem] leading-[1.06] tracking-tight text-ivory sm:text-5xl lg:text-[3.4rem]">
            Do primeiro traço ao <span className="italic text-sand">acabamento final.</span>
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute top-[0.4375rem] left-0 hidden h-px w-full bg-border lg:block" />
          <div className="absolute top-0 bottom-0 left-[0.4375rem] w-px bg-border lg:hidden" />

          <ol className="grid gap-12 lg:grid-cols-4 lg:gap-10">
            {PROCESS.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.1}>
                <li className="relative pl-10 lg:pt-10 lg:pl-0">
                  <span className="absolute top-1 left-0 h-3.5 w-3.5 rounded-full border border-sand bg-ink lg:top-0 lg:left-0" />
                  <span className="font-display text-3xl text-sand/70">{step.index}</span>
                  <h3 className="mt-3 text-[0.6875rem] tracking-[0.28em] uppercase text-ivory">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/50">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
