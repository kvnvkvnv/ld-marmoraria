import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";
import { FaqSection } from "@/components/site/FaqSection";

const title = "Contato | Orçamento de Mármores e Granitos — LD Marmoraria";
const description =
  "Fale com a LD Marmoraria em Jacareí — SP. Solicite orçamento de bancadas, revestimentos e peças em mármore, granito e materiais importados.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contato"
        title="Vamos transformar sua ideia"
        accent="em realidade?"
        text="Fale com nossa equipe e descubra as possibilidades para o seu projeto."
      />
      <Contact />
      <FaqSection />
    </main>
  );
}
