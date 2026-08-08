import { Reveal } from "@/components/site/Reveal";

export function PageHeader({
  eyebrow,
  title,
  accent,
  text,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  text?: string;
}) {
  return (
    <header className="bg-ink pt-40 pb-16 sm:pt-48 sm:pb-24">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-8 max-w-4xl font-display text-[2.4rem] leading-[1.04] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
            {title} {accent && <span className="italic text-sand">{accent}</span>}
          </h1>
        </Reveal>
        {text && (
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-ivory/55">{text}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
