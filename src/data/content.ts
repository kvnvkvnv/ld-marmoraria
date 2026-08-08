import matMarmores from "@/assets/mat-marmores.jpg";
import matGranitos from "@/assets/mat-granitos.jpg";
import matImportados from "@/assets/mat-importados.jpg";
import matDecorativas from "@/assets/mat-decorativas.jpg";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";
import proj4 from "@/assets/proj-4.jpg";
import proj5 from "@/assets/proj-5.jpg";
import proj6 from "@/assets/proj-6.jpg";

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
    id: "p1",
    title: "Banheiro em mármore claro",
    category: "Banheiros",
    material: "Mármore",
    location: "Jacareí • SP",
    image: proj1,
    span: "tall",
  },
  {
    id: "p2",
    title: "Área gourmet integrada",
    category: "Áreas gourmet",
    material: "Granito",
    image: proj2,
    span: "wide",
  },
  {
    id: "p3",
    title: "Escada revestida em pedra",
    category: "Escadas",
    material: "Mármore",
    image: proj3,
    span: "tall",
  },
  {
    id: "p4",
    title: "Detalhe de bancada e rodabancada",
    category: "Bancadas",
    material: "Importado",
    image: proj4,
    span: "square",
  },
  {
    id: "p5",
    title: "Lavabo com cuba esculpida",
    category: "Lavabos",
    material: "Mármore",
    image: proj5,
    span: "tall",
  },
  {
    id: "p6",
    title: "Cozinha com ilha em granito",
    category: "Cozinhas",
    material: "Granito",
    image: proj6,
    span: "wide",
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
