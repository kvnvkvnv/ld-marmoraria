import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Differentials } from "@/components/site/Differentials";
import { CtaBanner } from "@/components/site/CtaBanner";

const title = "Sobre | Marmoraria em Jacareí desde 2008 — LD Marmoraria";
const description =
  "A LD Marmoraria nasceu em São José dos Campos em 2008 e hoje está em Jacareí, especializada em mármores, granitos, importados e pedras decorativas.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Sobre a LD"
        title="Uma história construída"
        accent="em pedra."
        text="Desde 2008 transformando pedras naturais e superfícies nobres em elementos da arquitetura."
      />
      <Stats />
      <About />
      <Differentials />
      <CtaBanner />
    </main>
  );
}
