export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sistemas", href: "/sistemas" },
  { label: "Agente IA", href: "/agente-ia" },
  { label: "Precios", href: "/precios" },
  { label: "Contacto", href: "/contacto" },
];

export const footerLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Sistemas", href: "/sistemas" },
  { label: "Agente IA", href: "/agente-ia" },
  { label: "Precios", href: "/precios" },
  { label: "Contacto", href: "/contacto" },
];

export type HomeService = {
  label: string;
  desc: string;
  benefit: string;
  href: string;
};

export const homeServices: HomeService[] = [
  {
    label: "Páginas Web",
    desc: "Landings de lujo y sitios a medida con diseño premium y performance impecable.",
    benefit: "Más consultas y ventas desde tu web",
    href: "/servicios",
  },
  {
    label: "CRM & Sistemas IA",
    desc: "Automatización, agentes de IA e integraciones que trabajan por vos 24/7.",
    benefit: "Ahorrás horas de trabajo manual",
    href: "/servicios",
  },
  {
    label: "E-commerce",
    desc: "Tiendas online que venden: experiencia de compra fluida y escalable.",
    benefit: "Vendés online sin fricción",
    href: "/servicios",
  },
  {
    label: "Demos en vivo",
    desc: "Probá nuestros sistemas reales antes de decidir. Sin promesas vacías.",
    benefit: "Ves el resultado antes de invertir",
    href: "/sistemas",
  },
];

export type WhyItem = {
  icon: "bolt" | "code" | "design" | "sat";
  tilt: string;
  title: string;
  desc: string;
};

export const why: WhyItem[] = [
  {
    icon: "bolt",
    tilt: "28deg",
    title: "Velocidad de entrega",
    desc: "De la idea al sistema en producción en semanas, no meses.",
  },
  {
    icon: "code",
    tilt: "-24deg",
    title: "Código limpio y escalable",
    desc: "Sistemas que crecen con tu negocio sin reescribir todo desde cero.",
  },
  {
    icon: "design",
    tilt: "36deg",
    title: "Diseño de otro nivel",
    desc: "Interfaces que impresionan a tus clientes antes de que usen una sola función.",
  },
  {
    icon: "sat",
    tilt: "-32deg",
    title: "Soporte real, no un ticket",
    desc: "Hablás directo con quien construyó tu sistema. Sin intermediarios.",
  },
];

export type Servicio = {
  glyph: string;
  title: string;
  desc: string;
  bullets: string[];
  href?: string;
  ctaLabel?: string;
};

export const servicios: Servicio[] = [
  {
    glyph: "01",
    title: "Sistemas a medida",
    desc: "Software hecho a medida para tu operación: paneles de gestión, automatizaciones y herramientas internas que se adaptan a cómo trabajás vos, no al revés.",
    bullets: ["Paneles de gestión", "Automatizaciones", "Integraciones a medida", "Herramientas internas"],
  },
  {
    glyph: "02",
    title: "Páginas web premium",
    desc: "Landings de lujo, sitios para inmobiliarias, concesionarias y otros rubros. Diseño cinematográfico, scroll reveals y carga ultra-rápida que convierte visitantes en clientes.",
    bullets: ["Landings premium", "Inmobiliarias", "Concesionarias", "SEO técnico"],
  },
  {
    glyph: "03",
    title: "E-commerce",
    desc: "Tiendas online completas: catálogo, carrito, checkout y panel de pedidos. Experiencia de compra premium pensada para escalar tu facturación.",
    bullets: ["Catálogo", "Checkout", "Pasarelas de pago", "Panel de pedidos"],
  },
  {
    glyph: "04",
    title: "CRM administrativo",
    desc: "Facturación, seguimiento de clientes y paneles financieros en un solo lugar. Control total de tu operación con reportes claros y en tiempo real.",
    bullets: ["Facturación", "Seguimiento de clientes", "Paneles financieros", "Reportes"],
  },
  {
    glyph: "05",
    title: "Agente IA (upsell opcional)",
    desc: "Un agente que responde en tu WhatsApp, califica leads y atiende consultas las 24 horas. Se suma como módulo opcional a cualquiera de los sistemas de arriba — no viene incluido por defecto.",
    bullets: ["Calificación de leads", "Atención 24/7", "Integración a WhatsApp", "Módulo opcional"],
    href: "/agente-ia",
    ctaLabel: "Conocé el Agente IA",
  },
];

export type Project = {
  slug: string;
  name: string;
  cat: string;
  desc: string;
  benefits: string[];
  thumbnail?: string;
  live: string | null;
  href?: string;
  ctaLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "inmobiliaria-altair",
    name: "Inmobiliaria Altair",
    cat: "INMOBILIARIA",
    desc: "Landing premium para inmobiliarias: catálogo de propiedades, recorrido por barrios y un agente que responde consultas al instante.",
    benefits: [
      "Nunca perdés una consulta fuera de horario",
      "El cliente encuentra su propiedad ideal más rápido",
      "Menos tiempo perdido con curiosos sin intención real",
    ],
    thumbnail: "/images/demo-thumbs/inmobiliaria.png",
    live: "/demos/inmobiliaria.html",
  },
  {
    slug: "concesionaria-vega",
    name: "Concesionaria Vega",
    cat: "CONCESIONARIA",
    desc: "Sitio para concesionarias de usados: stock, financiación y un agente que cotiza y agenda test drives solo.",
    benefits: [
      "Tu stock siempre visible, las 24 horas",
      "Financiación calculada al instante, sin esperar al vendedor",
      "Test drives agendados sin que nadie atienda el teléfono",
    ],
    thumbnail: "/images/demo-thumbs/concesionaria.png",
    live: "/demos/concesionaria.html",
  },
  {
    slug: "ecommerce-sirius",
    name: "E-commerce Sirius",
    cat: "E-COMMERCE",
    desc: "Tienda online completa con recomendaciones, seguimiento de pedidos y gestión de cambios atendida por un agente.",
    benefits: [
      "Atención de postventa sin sumar personal",
      "Menos carritos abandonados por falta de respuesta",
      "Tus clientes resuelven dudas al toque, a cualquier hora",
    ],
    thumbnail: "/images/demo-thumbs/ecommerce.png",
    live: "/demos/ecommerce.html",
  },
  {
    slug: "orbi-crm",
    name: "ORBI CRM",
    cat: "CRM / GESTIÓN",
    desc: "CRM tipo SaaS con pipeline visual, reportes en vivo y un copiloto de IA que ejecuta tareas por vos.",
    benefits: [
      "Tu equipo de ventas deja de perder oportunidades",
      "Reportes al día sin armar planillas a mano",
      "El copiloto hace el trabajo administrativo por vos",
    ],
    thumbnail: "/images/demo-thumbs/orbi-crm.png",
    live: "/demos/orbi-crm.html",
  },
  {
    slug: "sipe",
    name: "SIPE",
    cat: "CRM ACADÉMICO",
    desc: "Sistema de gestión académica en producción: alumnos, riesgo de abandono y seguimiento con copiloto de IA integrado.",
    benefits: [
      "Detectás alumnos en riesgo antes de que abandonen",
      "Tus asesores gestionan su cartera sin perder el hilo",
      "Todo el seguimiento queda registrado automáticamente",
    ],
    live: null,
    ctaLabel: "Acceso privado",
  },
  {
    slug: "agente-ia",
    name: "Agente IA",
    cat: "AGENTE DE IA",
    desc: "El mismo agente que calificás en las demos de arriba, listo para instalarse en tu WhatsApp en días, no meses.",
    benefits: [
      "Califica leads mientras vos dormís",
      "Se adapta al rubro de tu negocio",
      "Vos solo atendés a los que ya están listos para comprar",
    ],
    live: null,
    href: "/agente-ia",
  },
];

export type DemoDetail = {
  slug: string;
  who: string;
  developmentIncludes: string[];
  aiIntro: string;
  aiItems: string[];
};

export const demoDetails: DemoDetail[] = [
  {
    slug: "inmobiliaria-altair",
    who: "Landing premium pensada para inmobiliarias y agentes que venden o alquilan propiedades de alto valor. Ideal para equipos que quieren un sitio propio y confiable, sin depender solo de portales genéricos.",
    developmentIncludes: [
      "Diseño a medida con la identidad de tu marca",
      "Catálogo de propiedades con filtros por zona, precio y tipo",
      "Fichas de propiedad con galería de fotos e info clave",
      "Formulario de contacto y tasación",
      "Sitio optimizado para velocidad y SEO",
      "Hosting y dominio configurados",
    ],
    aiIntro:
      "El mismo agente que probás en la demo de Agente IA puede vivir directamente en el WhatsApp de tu inmobiliaria:",
    aiItems: [
      "Responde consultas sobre propiedades al instante, las 24 horas",
      "Agenda visitas y las confirma solo en tu calendario",
      "Califica leads según presupuesto y urgencia antes de pasarlos a un asesor",
      "Hace seguimiento a los que \"lo están pensando\" sin que nadie tenga que acordarse",
    ],
  },
  {
    slug: "concesionaria-vega",
    who: "Sitio pensado para concesionarias de autos usados o 0km que necesitan mostrar su stock actualizado, calcular financiación al instante y captar gente que quiere vender su auto.",
    developmentIncludes: [
      "Buscador de stock con filtros por marca, modelo, año y presupuesto",
      "Ficha de vehículo con fotos y ficha técnica",
      "Simulador de financiación",
      "Formulario \"vendé tu auto\"",
      "Sección de oportunidades y ofertas",
      "Integración con el WhatsApp de ventas",
    ],
    aiIntro: "El agente de IA puede atender tu concesionaria desde el primer mensaje:",
    aiItems: [
      "Cotiza vehículos y calcula financiación en el momento",
      "Agenda test drives y los confirma sin intervención humana",
      "Califica interesados según qué auto buscan y su presupuesto",
      "Hace seguimiento post-test drive para ayudar a cerrar la venta",
    ],
  },
  {
    slug: "ecommerce-sirius",
    who: "Tienda online completa para marcas que quieren vender directo al consumidor con una experiencia de compra premium, sin las limitaciones de un marketplace.",
    developmentIncludes: [
      "Catálogo de productos con categorías y filtros",
      "Carrito y checkout optimizados para conversión",
      "Fichas de producto con galería y variantes (talle, color)",
      "Gestión de envíos y devoluciones",
      "Panel de pedidos",
      "Integración con medios de pago",
    ],
    aiIntro: "El agente de IA puede atender a tus compradores en cada etapa de la compra:",
    aiItems: [
      "Recomienda productos según lo que el cliente está buscando",
      "Rastrea pedidos y responde \"¿dónde está mi pedido?\" al instante",
      "Atiende cambios y devoluciones sin que un humano tenga que intervenir",
      "Recupera carritos abandonados con un mensaje personalizado",
    ],
  },
  {
    slug: "orbi-crm",
    who: "CRM tipo SaaS para equipos de ventas que necesitan un pipeline visual, reportes en vivo y dejar de perder oportunidades en planillas sueltas.",
    developmentIncludes: [
      "Dashboard de KPIs de ventas",
      "Pipeline visual tipo Kanban",
      "Gestión de clientes y contactos",
      "Reportes automáticos",
      "Tareas y recordatorios",
      "Permisos por usuario y equipo",
    ],
    aiIntro: "Un copiloto de IA integrado al CRM que hace el trabajo administrativo por tu equipo:",
    aiItems: [
      "Crea tareas de seguimiento automáticamente según la actividad del cliente",
      "Resume el historial de un cliente en segundos, antes de una llamada",
      "Alerta vencimientos de facturas o negocios por cerrar",
      "Redacta borradores de mails o mensajes de seguimiento",
    ],
  },
  {
    slug: "sipe",
    who: "Sistema de gestión académica en producción, para institutos y academias que necesitan seguir a cientos de alumnos activos y detectar riesgo de abandono a tiempo.",
    developmentIncludes: [
      "Dashboard de gestión académica",
      "Panel de alumnos con historial y estado",
      "Alertas de riesgo de abandono",
      "Integración con WhatsApp para seguimiento",
      "Reportes por asesor y por cohorte",
      "Acceso por roles (admin, asesor)",
    ],
    aiIntro: "El agente de IA se integra al seguimiento de alumnos de SIPE:",
    aiItems: [
      "Detecta señales tempranas de abandono en la conversación con el alumno",
      "Responde consultas frecuentes (fechas, requisitos, pagos)",
      "Resume el estado de cada alumno para el asesor antes de contactarlo",
      "Alerta vencimientos de pagos o entregas pendientes",
    ],
  },
];

export type PriceProduct = {
  slug: string;
  name: string;
  tagline: string;
  basePriceUSD: number;
  basePriceARS: number;
  aiAddonUSD: number;
  aiAddonARS: number;
  features: string[];
};

export const priceProducts: PriceProduct[] = [
  {
    slug: "landing",
    name: "Página web / Landing",
    tagline: "Presencia digital profesional para tu marca o negocio.",
    basePriceUSD: 400,
    basePriceARS: 400000,
    aiAddonUSD: 300,
    aiAddonARS: 300000,
    features: ["Diseño premium responsive", "Formulario de contacto", "Optimización SEO básica"],
  },
  {
    slug: "ecommerce-sirius",
    name: "E-commerce Sirius",
    tagline: "Tienda online completa: catálogo, carrito y checkout.",
    basePriceUSD: 800,
    basePriceARS: 800000,
    aiAddonUSD: 400,
    aiAddonARS: 400000,
    features: ["Catálogo y carrito", "Checkout y pasarelas de pago", "Panel de pedidos"],
  },
  {
    slug: "orbi-crm",
    name: "ORBI CRM",
    tagline: "CRM con pipeline visual y reportes en tiempo real.",
    basePriceUSD: 1500,
    basePriceARS: 1500000,
    aiAddonUSD: 500,
    aiAddonARS: 500000,
    features: ["Pipeline visual", "Gestión de clientes", "Reportes automáticos"],
  },
  {
    slug: "sipe",
    name: "Sistema académico tipo SIPE",
    tagline: "Gestión académica en producción, a la medida de tu institución.",
    basePriceUSD: 3000,
    basePriceARS: 3000000,
    aiAddonUSD: 800,
    aiAddonARS: 800000,
    features: ["Panel de alumnos", "Alertas de riesgo de abandono", "Reportes por asesor"],
  },
];

export const CONTACT_EMAIL = "somos@somosastria.com.ar";
