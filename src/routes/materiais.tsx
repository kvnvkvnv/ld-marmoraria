import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal, ImageReveal } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { MATERIALS } from "@/data/content";

const title = "Materiais | Mármores, Granitos e Importados — LD Marmoraria";
const description =
  "Conheça os materiais da LD Marmoraria: mármores, granitos, importados e pedras decorativas para projetos personalizados em Jacareí e região.";

export const Route = createFileRoute("/materiais")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/materiais" },
    ],
    links: [{ rel: "canonical", href: "/materiais" }],
  }),
  component: MateriaisPage,
});

function MateriaisPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Materiais"
        title="A beleza começa"
        accent="na matéria."
        text="Materiais selecionados para projetos que exigem estética, resistência e personalidade."
      />

      <div className="surface-light py-20 sm:py-28">
        <div className="container-editorial space-y-24 sm:space-y-32">
          {MATERIALS.map((m, i) => (
            <article
              key={m.slug}
              id={m.slug}
              className={`grid scroll-mt-32 gap-10 lg:grid-cols-12 lg:items-center lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="lg:col-span-6">
                <ImageReveal
                  src={m.image}
                  alt={`${m.name} — ${m.description}`}
                  width={1000}
                  height={1250}
                  className="aspect-[4/5] w-full rounded-sm"
                />
              </figure>
              <div className="lg:col-span-6">
                <Reveal>
                  <span className="text-[0.625rem] tracking-[0.28em] text-accent">{m.index}</span>
                  <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-5xl">{m.name}</h2>
                  <p className="mt-4 text-sm tracking-wide text-muted-foreground italic">
                    {m.description}
                  </p>
                  <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                    {m.long}
                  </p>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </div>

      <CtaBanner />
    </main>
  );
}
