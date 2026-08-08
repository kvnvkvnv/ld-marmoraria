import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { Architects } from "@/components/site/Architects";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";

const title = "Serviços | Bancadas, Revestimentos e Peças sob Medida — LD Marmoraria";
const description =
  "Serviços da LD Marmoraria: peças sob medida em mármore, granito, importados e pedras decorativas para cozinhas, banheiros, escadas e áreas gourmet.";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicosPage,
});

const SERVICES = [
  {
    index: "01",
    title: "Bancadas e ilhas",
    text: "Bancadas de cozinha, ilhas e rodabancadas produzidas sob medida, com acabamento definido junto ao projeto.",
  },
  {
    index: "02",
    title: "Banheiros e lavabos",
    text: "Tampos, cubas esculpidas, nichos e revestimentos em mármore, granito e materiais importados.",
  },
  {
    index: "03",
    title: "Escadas e soleiras",
    text: "Degraus, espelhos, soleiras e peitoris executados de acordo com as medidas do ambiente.",
  },
  {
    index: "04",
    title: "Áreas gourmet e externas",
    text: "Superfícies pensadas para o uso intenso, unindo resistência e estética no ambiente de convívio.",
  },
  {
    index: "05",
    title: "Revestimentos decorativos",
    text: "Aplicação de pedras decorativas em paredes e detalhes que dão textura e caráter ao ambiente.",
  },
  {
    index: "06",
    title: "Projetos especiais",
    text: "Peças específicas desenvolvidas a partir de especificações de arquitetos e designers.",
  },
];

function ServicosPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Serviços"
        title="Peças executadas"
        accent="sob medida."
        text="Produzimos peças em mármores, granitos, materiais importados e pedras decorativas de acordo com as especificações de cada projeto."
      />

      <section className="surface-light py-20 sm:py-28">
        <div className="container-editorial grid gap-x-16 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.index} delay={(i % 3) * 0.08}>
              <article className="border-t border-border pt-7">
                <span className="font-display text-4xl text-foreground/12">{s.index}</span>
                <h2 className="mt-4 text-[0.6875rem] tracking-[0.28em] uppercase">{s.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Process />
      <Architects />
      <FaqSection />
      <CtaBanner />
    </main>
  );
}
