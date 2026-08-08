import { ArrowRight } from "lucide-react";
import { Reveal, ImageReveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import architectsImg from "@/assets/architects.jpg";

export function Architects() {
  return (
    <section className="surface-light py-24 sm:py-32 lg:py-40">
      <div className="container-editorial grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
        <div className="lg:col-span-6">
          <ImageReveal
            src={architectsImg}
            alt="Arquiteto analisando uma amostra de pedra sobre pranchas técnicas de projeto"
            width={1400}
            height={1200}
            className="aspect-[7/6] w-full rounded-sm"
          />
        </div>
        <div className="lg:col-span-6 lg:pl-6">
          <Reveal>
            <p className="eyebrow">05 — Para arquitetos</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-8 font-display text-[2.1rem] leading-[1.06] tracking-tight sm:text-5xl">
              Arquitetura exige <span className="italic text-accent">precisão.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              Trabalhamos lado a lado com arquitetos, designers e profissionais da construção para
              transformar especificações em peças executadas com precisão.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <Button asChild variant="ink" size="xl" className="mt-10">
              <a
                href={whatsappLink(
                  "Olá! Sou arquiteto(a)/designer e gostaria de falar sobre um projeto com a LD Marmoraria.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com a LD Marmoraria <ArrowRight />
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
