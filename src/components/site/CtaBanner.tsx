import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import ctaImg from "@/assets/cta.jpg";

export function CtaBanner() {
  const reduced = useReducedMotion();
  return (
    <section className="relative flex min-h-[85svh] items-center overflow-hidden bg-ink">
      <motion.img
        src={ctaImg}
        alt="Cozinha de alto padrão com parede em pedra natural iluminada"
        loading="lazy"
        decoding="async"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
        initial={reduced ? false : { scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-ink/72" />

      <div className="container-editorial relative py-24">
        <h2 className="max-w-3xl font-display text-[2.3rem] leading-[1.04] tracking-tight text-ivory sm:text-5xl lg:text-[4rem]">
          Seu projeto começa
          <br />
          <span className="italic text-sand">com uma boa escolha.</span>
        </h2>
        <p className="mt-7 max-w-md text-sm leading-relaxed text-ivory/60">
          Conte-nos o que você está imaginando.
        </p>
        <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild variant="solid" size="xl">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Solicitar orçamento <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="line" size="xl" className="text-ivory">
            <Link to="/projetos">
              Ver projetos <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
