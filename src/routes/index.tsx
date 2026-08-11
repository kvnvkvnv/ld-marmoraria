import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Stats } from "@/components/site/Stats";
import { Materials } from "@/components/site/Materials";
import { Projects } from "@/components/site/Projects";
import { Process } from "@/components/site/Process";
import { Architects } from "@/components/site/Architects";
import { Differentials } from "@/components/site/Differentials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { FaqSection } from "@/components/site/FaqSection";
import { Contact } from "@/components/site/Contact";
import { Marquee } from "@/components/site/motion";

const title = "LD Marmoraria | Mármores, Granitos e Projetos em Jacareí";
const description =
  "LD Marmoraria — Mármores, granitos, materiais importados e pedras decorativas para projetos personalizados em Jacareí e região.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Stats />
      <section className="border-y border-border/60 bg-ink py-8">
        <Marquee
          items={[
            "Mármores",
            "Granitos",
            "Quartzitos",
            "Importados",
            "Pedras decorativas",
            "Projetos sob medida",
          ]}
        />
      </section>
      <Materials />
      <Projects />
      <Process />
      <Architects />
      <Differentials />
      <CtaBanner />
      <About />
      <Testimonials />
      <FaqSection />
      <Contact />
    </main>
  );
}
