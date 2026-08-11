/**
 * CONFIGURAÇÃO CENTRAL DO SITE — LD MARMORARIA
 * Edite aqui os dados de contato, redes sociais e textos institucionais.
 */

/** Número do WhatsApp (apenas dígitos, com DDI + DDD). Contato oficial da empresa. */
export const WHATSAPP_NUMBER = "551239668079";

/** Mensagem padrão enviada ao abrir o WhatsApp. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Gostaria de solicitar um orçamento com a LD Marmoraria.";

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE = {
  name: "LD Marmoraria",
  tagline: "Pedras que transformam espaços.",
  foundedYear: 2008,
  address: {
    street: "Rua Harold Barnsley Holland, 1151",
    city: "Jacareí",
    state: "SP",
    country: "BR",
  },
  phone: "(12) 3966-8079",
  phoneHref: "tel:+551239668079",
  email: "ldmarmoraria@hotmail.com",
  /** EDITÁVEL: confirme o perfil oficial antes de publicar. */
  instagram: "https://www.instagram.com/ldmarmoraria/",
  maps: "https://maps.app.goo.gl/zfyVXbjWyN37fnMF7",
} as const;

export const NAV_LINKS = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Materiais", to: "/materiais" },
  { label: "Projetos", to: "/projetos" },
  { label: "Serviços", to: "/servicos" },
  { label: "Contato", to: "/contato" },
] as const;
