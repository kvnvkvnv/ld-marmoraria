import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import heroImg from "@/assets/hero.jpg";
import { SplitWords, Magnetic } from "./motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      raf = requestAnimationFrame(() => setOffset(window.scrollY * 0.14));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Cozinha contemporânea com ilha monolítica em mármore branco e iluminação natural"
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
          className="h-[112%] w-full object-cover"
          style={{ transform: `translate3d(0, ${offset}px, 0)` }}
          initial={reduced ? false : { scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="container-editorial pb-16 sm:pb-20">
        <motion.p
          className="eyebrow text-ivory/60"
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
        >
          LD Marmoraria
        </motion.p>

        <h1 className="mt-6 max-w-4xl font-display text-[2.65rem] leading-[1.02] tracking-tight text-ivory sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
          <SplitWords text="Pedras que transformam" delay={0.35} className="block" />
          <SplitWords
            text="espaços em experiências."
            delay={0.55}
            italicFrom={0}
            className="block"
          />
        </h1>

        <motion.p
          className="mt-7 max-w-lg text-[0.95rem] leading-relaxed text-ivory/65"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease }}
        >
          Mármores, granitos e superfícies selecionadas para projetos que valorizam cada detalhe.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row"
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease }}
        >
          <Magnetic>
            <Button asChild variant="solid" size="xl">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                Solicitar orçamento <ArrowRight />
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild variant="line" size="xl" className="text-ivory">
              <a href="#projetos">Ver projetos</a>
            </Button>
          </Magnetic>
        </motion.div>

        <motion.div
          className="mt-14 flex items-end justify-between gap-6 border-t border-ivory/12 pt-6"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          <a
            href="#manifesto"
            className="group flex items-center gap-3 text-[0.625rem] tracking-[0.28em] uppercase text-ivory/50 transition-colors hover:text-ivory"
          >
            Scroll
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          </a>
          <p className="text-right text-[0.625rem] leading-relaxed tracking-[0.28em] uppercase text-ivory/50">
            Desde 2008
            <br />
            Jacareí • SP
          </p>
        </motion.div>
      </div>
    </section>
  );
}
