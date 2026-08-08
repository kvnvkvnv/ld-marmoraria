import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/data/content";

export function FaqSection() {
  return (
    <section id="faq" className="bg-ink py-24 sm:py-32 lg:py-40">
      <div className="container-editorial grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow">08 — Dúvidas</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-8 font-display text-[2.1rem] leading-[1.06] tracking-tight text-ivory sm:text-4xl">
              Perguntas <span className="italic text-sand">frequentes.</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <AccordionItem value={`item-${i}`} className="border-border/60">
                  <AccordionTrigger className="py-6 text-left font-display text-lg text-ivory hover:no-underline sm:text-xl">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl pb-7 text-sm leading-relaxed text-ivory/55">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
