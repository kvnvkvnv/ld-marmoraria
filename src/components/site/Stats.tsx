import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

/**
 * NÚMEROS — apenas informações verificáveis.
 * O item "Projetos realizados" fica sem número até que a empresa confirme o dado.
 */
const STATS = [
  { value: <CountUp to={15} prefix="+" />, label: "Anos de experiência" },
  { value: <CountUp to={2008} />, label: "Ano de fundação" },
  { value: <span className="text-sand">*</span>, label: "Projetos realizados" },
  { value: <CountUp to={100} suffix="%" />, label: "Atenção aos detalhes" },
];

export function Stats() {
  return (
    <section className="border-y border-border/60 bg-ink py-16 sm:py-20">
      <div className="container-editorial grid grid-cols-2 gap-y-12 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="lg:border-l lg:border-border/60 lg:pl-8">
              <p className="font-display text-4xl tracking-tight text-ivory sm:text-5xl lg:text-6xl">
                {s.value}
              </p>
              <p className="mt-4 text-[0.625rem] tracking-[0.24em] uppercase text-ivory/45">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="container-editorial mt-12 text-[0.625rem] tracking-[0.18em] uppercase text-ivory/25">
        * Número de projetos a ser confirmado pela empresa.
      </p>
    </section>
  );
}
