import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectGrid } from "@/components/site/Projects";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PROJECTS, PROJECT_FILTERS } from "@/data/content";

const title = "Projetos | Galeria de Trabalhos — LD Marmoraria";
const description =
  "Galeria de projetos da LD Marmoraria: cozinhas, banheiros, áreas gourmet, escadas e bancadas em mármore, granito e materiais importados.";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projetos" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: ProjetosPage,
});

const MAIN = ["Cozinhas", "Banheiros", "Áreas gourmet", "Escadas", "Bancadas"];

function ProjetosPage() {
  const [filter, setFilter] = useState<string>("Todos");

  const items = useMemo(() => {
    if (filter === "Todos") return PROJECTS;
    if (filter === "Outros") return PROJECTS.filter((p) => !MAIN.includes(p.category));
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <main>
      <PageHeader
        eyebrow="Projetos"
        title="Projetos que"
        accent="falam por si."
        text="Conheça alguns dos trabalhos realizados pela LD Marmoraria. As imagens desta galeria são substituíveis pelos registros reais dos projetos."
      />

      <section className="surface-light py-16 sm:py-24">
        <div className="container-editorial">
          <div className="flex flex-wrap gap-2 border-b border-border pb-8">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-sm border px-4 py-2 text-[0.625rem] tracking-[0.2em] uppercase transition-colors ${
                  filter === f
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-12">
            {items.length > 0 ? (
              <ProjectGrid items={items} />
            ) : (
              <p className="py-20 text-center text-sm text-muted-foreground">
                Nenhum projeto nesta categoria por enquanto.
              </p>
            )}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
