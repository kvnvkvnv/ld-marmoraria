import matMarmores from "@/assets/mat-marmores.jpg";
import matGranitos from "@/assets/mat-granitos.jpg";
import matImportados from "@/assets/mat-importados.jpg";
import matDecorativas from "@/assets/mat-decorativas.jpg";
import ld01 from "@/assets/projetos/ld-01.json";
import ld02 from "@/assets/projetos/ld-02.json";
import ld03 from "@/assets/projetos/ld-03.json";
import ld04 from "@/assets/projetos/ld-04.json";
import ld05 from "@/assets/projetos/ld-05.json";
import ld06 from "@/assets/projetos/ld-06.json";
import ld07 from "@/assets/projetos/ld-07.json";
import ld08 from "@/assets/projetos/ld-08.json";
import ld09 from "@/assets/projetos/ld-09.json";
import ld10 from "@/assets/projetos/ld-10.json";
import ld11 from "@/assets/projetos/ld-11.json";
import ld12 from "@/assets/projetos/ld-12.json";
import ld13 from "@/assets/projetos/ld-13.json";
import ld14 from "@/assets/projetos/ld-14.json";
import ld15 from "@/assets/projetos/ld-15.json";
import ld16 from "@/assets/projetos/ld-16.json";
import ld17 from "@/assets/projetos/ld-17.json";
import ld18 from "@/assets/projetos/ld-18.json";
import ld19 from "@/assets/projetos/ld-19.json";
import ld20 from "@/assets/projetos/ld-20.json";
import ld21 from "@/assets/projetos/ld-21.json";
import ld22 from "@/assets/projetos/ld-22.json";
import ld23 from "@/assets/projetos/ld-23.json";
import ld24 from "@/assets/projetos/ld-24.json";
import ld25 from "@/assets/projetos/ld-25.json";
import ld26 from "@/assets/projetos/ld-26.json";
import ld27 from "@/assets/projetos/ld-27.json";
import ld28 from "@/assets/projetos/ld-28.json";
import ld29 from "@/assets/projetos/ld-29.json";
import ld30 from "@/assets/projetos/ld-30.json";
import ld31 from "@/assets/projetos/ld-31.json";
import ld32 from "@/assets/projetos/ld-32.json";
import ld33 from "@/assets/projetos/ld-33.json";
import ld34 from "@/assets/projetos/ld-34.json";
import ld35 from "@/assets/projetos/ld-35.json";

export type Material = {
  slug: string;
  index: string;
  name: string;
  description: string;
  long: string;
  image: string;
};

/** MATERIAIS — imagens ilustrativas. Substitua por fotos reais das chapas da LD. */
export const MATERIALS: Material[] = [
  {
    slug: "marmores",
    index: "01",
    name: "Mármores",
    description: "Elegância natural em cada veio",
    long: "Superfícies clássicas e atemporais, com veios únicos em cada chapa. Indicadas para bancadas, lavabos, revestimentos e detalhes de destaque.",
    image: matMarmores,
  },
  {
    slug: "granitos",
    index: "02",
    name: "Granitos",
    description: "Resistência com personalidade",
    long: "Alta resistência para o uso diário, com grande variedade de tonalidades e texturas. Muito utilizados em cozinhas, áreas gourmet e áreas externas.",
    image: matGranitos,
  },
  {
    slug: "importados",
    index: "03",
    name: "Importados",
    description: "Superfícies exclusivas para projetos únicos",
    long: "Materiais selecionados de origem importada, para projetos que pedem exclusividade e um desenho de veios marcante.",
    image: matImportados,
  },
  {
    slug: "pedras-decorativas",
    index: "04",
    name: "Pedras decorativas",
    description: "Texturas que transformam ambientes",
    long: "Revestimentos e detalhes decorativos em pedra natural, que dão textura, profundidade e caráter à arquitetura.",
    image: matDecorativas,
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  material: string;
  location?: string;
  image: string;
  /** Proporção usada no grid editorial. */
  span: "tall" | "wide" | "square";
};

/**
 * PROJETOS — placeholders visuais.
 * Para publicar os projetos reais: troque `image` pelo arquivo em src/assets
 * e ajuste título, categoria, material e localização.
 */
export const PROJECTS: Project[] = [
  {
    id: "ld01",
    title: "Cozinha com ilha em mármore claro",
    category: "Cozinhas",
    material: "Mármore",
    image: ld01.url,
    span: "tall",
  },
  {
    id: "ld02",
    title: "Cozinha planejada em marcenaria clara",
    category: "Cozinhas",
    material: "Granito",
    image: ld02.url,
    span: "tall",
  },
  {
    id: "ld03",
    title: "Ilha com frontão em mármore",
    category: "Cozinhas",
    material: "Mármore",
    image: ld03.url,
    span: "tall",
  },
  {
    id: "ld04",
    title: "Escada em granito preto",
    category: "Escadas",
    material: "Granito",
    image: ld04.url,
    span: "wide",
  },
  {
    id: "ld05",
    title: "Escada estruturada em granito",
    category: "Escadas",
    material: "Granito",
    image: ld05.url,
    span: "tall",
  },
  {
    id: "ld06",
    title: "Bancada em granito preto com cooktop",
    category: "Cozinhas",
    material: "Granito",
    image: ld06.url,
    span: "tall",
  },
  {
    id: "ld07",
    title: "Bancada com cuba e rodabancada",
    category: "Bancadas",
    material: "Granito",
    image: ld07.url,
    span: "tall",
  },
  {
    id: "ld08",
    title: "Ilha branca em cozinha integrada",
    category: "Cozinhas",
    material: "Mármore",
    image: ld08.url,
    span: "square",
  },
  {
    id: "ld09",
    title: "Cozinha com bancada escura e cuba",
    category: "Cozinhas",
    material: "Granito",
    image: ld09.url,
    span: "square",
  },
  {
    id: "ld10",
    title: "Ilha central com coifa",
    category: "Cozinhas",
    material: "Mármore",
    image: ld10.url,
    span: "tall",
  },
  {
    id: "ld11",
    title: "Lavabo com bancada escura",
    category: "Banheiros",
    material: "Granito",
    image: ld11.url,
    span: "tall",
  },
  {
    id: "ld12",
    title: "Área gourmet com ilha e bancos",
    category: "Áreas gourmet",
    material: "Mármore",
    image: ld12.url,
    span: "wide",
  },
  {
    id: "ld13",
    title: "Guarda-corpo de vidro em escada",
    category: "Escadas",
    material: "Mármore",
    image: ld13.url,
    span: "tall",
  },
  {
    id: "ld14",
    title: "Cozinha com bancada clara",
    category: "Cozinhas",
    material: "Mármore",
    image: ld14.url,
    span: "wide",
  },
  {
    id: "ld15",
    title: "Lavabo com cuba de apoio",
    category: "Banheiros",
    material: "Granito",
    image: ld15.url,
    span: "tall",
  },
  {
    id: "ld16",
    title: "Cozinha com ilha e iluminação embutida",
    category: "Cozinhas",
    material: "Mármore",
    image: ld16.url,
    span: "tall",
  },
  {
    id: "ld17",
    title: "Bancada preta com detalhe reto",
    category: "Bancadas",
    material: "Granito",
    image: ld17.url,
    span: "tall",
  },
  {
    id: "ld18",
    title: "Bancada branca com cuba embutida",
    category: "Bancadas",
    material: "Mármore",
    image: ld18.url,
    span: "square",
  },
  {
    id: "ld19",
    title: "Cozinha em tons de madeira",
    category: "Cozinhas",
    material: "Mármore",
    image: ld19.url,
    span: "wide",
  },
  {
    id: "ld20",
    title: "Bancada com cuba e escorredor",
    category: "Bancadas",
    material: "Mármore",
    image: ld20.url,
    span: "square",
  },
  {
    id: "ld21",
    title: "Ambiente integrado com ilha",
    category: "Áreas gourmet",
    material: "Mármore",
    image: ld21.url,
    span: "square",
  },
  {
    id: "ld22",
    title: "Cozinha com bancada e cooktop",
    category: "Cozinhas",
    material: "Mármore",
    image: ld22.url,
    span: "square",
  },
  {
    id: "ld23",
    title: "Ilha com painel ripado",
    category: "Cozinhas",
    material: "Mármore",
    image: ld23.url,
    span: "square",
  },
  {
    id: "ld24",
    title: "Área gourmet com bancada escura",
    category: "Áreas gourmet",
    material: "Granito",
    image: ld24.url,
    span: "square",
  },
  {
    id: "ld25",
    title: "Bancada em L em granito escuro",
    category: "Bancadas",
    material: "Granito",
    image: ld25.url,
    span: "square",
  },
  {
    id: "ld26",
    title: "Escada com guarda-corpo de vidro",
    category: "Escadas",
    material: "Mármore",
    image: ld26.url,
    span: "tall",
  },
  {
    id: "ld27",
    title: "Bancada preta com cuba esculpida",
    category: "Bancadas",
    material: "Granito",
    image: ld27.url,
    span: "wide",
  },
  {
    id: "ld28",
    title: "Bancada preta com cooktop",
    category: "Bancadas",
    material: "Granito",
    image: ld28.url,
    span: "square",
  },
  {
    id: "ld29",
    title: "Cozinha com bancada escura e ilha",
    category: "Cozinhas",
    material: "Granito",
    image: ld29.url,
    span: "tall",
  },
  {
    id: "ld30",
    title: "Detalhe de guarda-corpo e revestimento",
    category: "Escadas",
    material: "Mármore",
    image: ld30.url,
    span: "tall",
  },
  {
    id: "ld31",
    title: "Ilha em pedra escura com pendentes",
    category: "Cozinhas",
    material: "Granito",
    image: ld31.url,
    span: "tall",
  },
  {
    id: "ld32",
    title: "Área gourmet com bancada e bancos",
    category: "Áreas gourmet",
    material: "Mármore",
    image: ld32.url,
    span: "wide",
  },
  {
    id: "ld33",
    title: "Ilha em mármore com iluminação",
    category: "Cozinhas",
    material: "Mármore",
    image: ld33.url,
    span: "tall",
  },
  {
    id: "ld34",
    title: "Área gourmet com bancada preta",
    category: "Áreas gourmet",
    material: "Granito",
    image: ld34.url,
    span: "square",
  },
  {
    id: "ld35",
    title: "Cozinha ampla com ilha central",
    category: "Cozinhas",
    material: "Mármore",
    image: ld35.url,
    span: "square",
  },
];

export const PROJECT_FILTERS = [
  "Todos",
  "Cozinhas",
  "Banheiros",
  "Áreas gourmet",
  "Escadas",
  "Bancadas",
  "Outros",
] as const;

export const PROCESS = [
  {
    index: "01",
    title: "Conversa",
    text: "Entendemos seu projeto, suas necessidades e seu estilo.",
  },
  {
    index: "02",
    title: "Escolha",
    text: "Ajudamos você a encontrar o material ideal para o ambiente.",
  },
  {
    index: "03",
    title: "Precisão",
    text: "Cada peça é produzida respeitando medidas e especificações do projeto.",
  },
  {
    index: "04",
    title: "Instalação",
    text: "Finalizamos o projeto com atenção aos detalhes.",
  },
];

export const DIFFERENTIALS = [
  { index: "01", title: "Experiência", text: "Atuação no segmento desde 2008." },
  {
    index: "02",
    title: "Materiais selecionados",
    text: "Pedras escolhidas para cada necessidade e projeto.",
  },
  { index: "03", title: "Precisão", text: "Atenção aos detalhes em cada etapa." },
  { index: "04", title: "Atendimento", text: "Atendimento próximo e personalizado." },
];

export const FAQ = [
  {
    q: "Quais tipos de pedras vocês trabalham?",
    a: "Trabalhamos com mármores, granitos, materiais importados e pedras decorativas, com peças produzidas sob medida para cada projeto.",
  },
  {
    q: "Vocês fazem projetos personalizados?",
    a: "Sim. Todas as peças são produzidas de acordo com as medidas e especificações do seu projeto.",
  },
  {
    q: "Atendem arquitetos e designers?",
    a: "Sim. Trabalhamos junto a arquitetos, designers e profissionais da construção na execução das especificações de cada projeto.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Você pode nos enviar as informações do ambiente pelo WhatsApp, telefone ou formulário do site. Nossa equipe retorna com as possibilidades de material e o orçamento.",
  },
  {
    q: "Vocês realizam medição?",
    a: "Consulte nossa equipe sobre a medição para o seu projeto. Entre em contato pelo telefone (12) 3966-8079 para confirmar as condições.",
  },
  {
    q: "Em quais regiões vocês atendem?",
    a: "Estamos localizados em Jacareí, São Paulo, e atendemos a cidade e a região. Consulte nossa equipe sobre o atendimento no seu endereço.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  project: string;
  stars: number;
};

/**
 * DEPOIMENTOS — a lista está vazia propositalmente.
 * Insira aqui depoimentos reais de clientes; a seção exibe automaticamente
 * o slider quando houver ao menos um item.
 */
export const TESTIMONIALS: Testimonial[] = [];
