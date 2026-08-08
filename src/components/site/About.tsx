import { Reveal, ImageReveal } from "./Reveal";
import workshopImg from "@/assets/workshop.jpg";

export function About() {
  return (
    <section id="sobre" className="surface-light py-24 sm:py-32 lg:py-40">
      <div className="container-editorial grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">09 — Sobre a LD</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-8 font-display text-[2.1rem] leading-[1.06] tracking-tight sm:text-5xl">
              Uma história construída <span className="italic text-accent">em pedra.</span>
            </h2>
          </Reveal>
          {/* Substituível: imagem real da empresa, equipe ou oficina. */}
          <ImageReveal
            src={workshopImg}
            alt="Chapas de mármore e granito armazenadas na marmoraria"
            width={1400}
            height={1200}
            className="mt-12 hidden aspect-[7/6] w-full rounded-sm lg:block"
          />
        </div>

        <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7 lg:pt-20">
          <Reveal>
            <p className="text-foreground">
              A LD Marmoraria nasceu em São José dos Campos em 2008 e atualmente está localizada em
              Jacareí. Somos especializados em peças produzidas em mármores, granitos, materiais
              importados e pedras decorativas.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p>
              Ao longo desses anos, construímos nosso trabalho sobre uma base simples: entender o
              projeto antes de cortar a primeira peça. A escolha da matéria-prima acontece junto ao
              cliente, considerando o ambiente, o uso e o desenho que cada chapa carrega.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              O acabamento é onde a diferença aparece. Cada encaixe, cada borda e cada emenda é
              tratada com atenção, porque é esse detalhe que permanece visível todos os dias no
              ambiente construído.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p>
              Atendemos clientes finais, arquitetos e profissionais da construção com projetos
              totalmente personalizados — do primeiro contato à instalação final.
            </p>
          </Reveal>
          <ImageReveal
            src={workshopImg}
            alt="Chapas de mármore e granito armazenadas na marmoraria"
            width={1400}
            height={1200}
            className="mt-10 aspect-[7/6] w-full rounded-sm lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}
