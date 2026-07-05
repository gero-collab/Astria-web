export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Demos", href: "/demos" },
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
    href: "/demos",
  },
];

export type WhyItem = {
  icon: "bolt" | "ai" | "design" | "sat";
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
    icon: "ai",
    tilt: "-24deg",
    title: "IA integrada desde el día uno",
    desc: "Cada sistema que construimos puede incorporar agentes IA, automatizaciones y dashboards inteligentes.",
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
};

export const servicios: Servicio[] = [
  {
    glyph: "01",
    title: "Páginas Web",
    desc: "Landings de lujo, sitios para inmobiliarias y concesionarias. Diseño cinematográfico, scroll reveals y carga ultra-rápida que convierte visitantes en clientes.",
    bullets: ["Landings premium", "Inmobiliarias", "Concesionarias 2.0", "SEO técnico"],
  },
  {
    glyph: "02",
    title: "CRM & Automatización IA",
    desc: "Sistemas tipo SIPE: gestión académica y administrativa, paneles en tiempo real, agentes de IA e integraciones con HubSpot y WhatsApp para que nada se te escape.",
    bullets: ["Paneles en vivo", "Agentes IA", "HubSpot", "WhatsApp API", "Integraciones"],
  },
  {
    glyph: "03",
    title: "E-commerce Galáctico",
    desc: "Tiendas online completas: catálogo, carrito, checkout y panel de pedidos. Experiencia de compra premium pensada para escalar tu facturación.",
    bullets: ["Catálogo", "Checkout", "Pasarelas de pago", "Panel de pedidos"],
  },
  {
    glyph: "04",
    title: "CRM Administrativo-Contable",
    desc: "Facturación, seguimiento de clientes y paneles financieros en un solo lugar. Control total de tu operación con reportes claros y en tiempo real.",
    bullets: ["Facturación", "Seguimiento de clientes", "Paneles financieros", "Reportes"],
  },
];

export type Project = {
  slug: string;
  name: string;
  cat: string;
  desc: string;
  tags: string[];
  shots: string[];
  live: string | null;
};

export const projects: Project[] = [
  {
    slug: "sipe",
    name: "SIPE",
    cat: "CRM ACADÉMICO",
    desc: "Sistema integral de gestión académica y administrativa: paneles en tiempo real, automatizaciones e integraciones con HubSpot y WhatsApp.",
    tags: ["Next.js", "Supabase", "HubSpot", "WhatsApp API"],
    shots: ["Dashboard de gestión", "Panel de alumnos", "Integración WhatsApp"],
    live: null,
  },
  {
    slug: "prima-terra",
    name: "Inmobiliaria Prima Terra",
    cat: "LANDING PREMIUM",
    desc: "Landing de lujo para inmobiliaria: storytelling visual, catálogo de propiedades y captación de leads con animaciones de alta gama.",
    tags: ["Next.js", "Framer Motion", "CMS"],
    shots: ["Hero inmersivo", "Catálogo de propiedades", "Detalle de propiedad"],
    live: null,
  },
  {
    slug: "concesionaria-2-0",
    name: "Concesionaria 2.0",
    cat: "LANDING AUTOMOTRIZ",
    desc: 'Experiencia tipo "Concesionarias 2.0": showroom digital, configurador visual y agenda de test drives.',
    tags: ["React", "Tailwind", "Animaciones 3D"],
    shots: ["Showroom digital", "Ficha de vehículo", "Agenda test drive"],
    live: null,
  },
  {
    slug: "ecommerce-galactico",
    name: "E-commerce Galáctico",
    cat: "TIENDA ONLINE",
    desc: "Demo de tienda completa: catálogo, carrito, checkout y panel de pedidos con micro-interacciones premium.",
    tags: ["Next.js", "Stripe", "Supabase"],
    shots: ["Home de tienda", "Producto + carrito", "Checkout"],
    live: null,
  },
  {
    slug: "crm-administrativo-contable",
    name: "CRM Administrativo-Contable",
    cat: "PANEL DE GESTIÓN",
    desc: "Panel de gestión financiera: facturación, seguimiento de clientes y reportes con paneles de control en vivo.",
    tags: ["React", "PostgreSQL", "Dashboards"],
    shots: ["Panel financiero", "Facturación", "Seguimiento de clientes"],
    live: null,
  },
];

export type Plan = {
  name: string;
  tagline: string;
  from: string;
  featured: boolean;
  bg: string;
  border: string;
  ctaBg: string;
  ctaColor: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Básico",
    tagline: "Para arrancar con presencia digital profesional.",
    from: "1 página",
    featured: false,
    bg: "linear-gradient(160deg,rgba(255,255,255,.06),rgba(255,255,255,.015))",
    border: "rgba(255,255,255,.1)",
    ctaBg: "rgba(255,255,255,.08)",
    ctaColor: "#e9ecf1",
    features: [
      "Landing o sitio de hasta 3 secciones",
      "Diseño premium responsive",
      "Formulario de contacto",
      "Optimización SEO básica",
      "1 ronda de revisiones",
    ],
  },
  {
    name: "Pro",
    tagline: "El punto justo para negocios en crecimiento.",
    from: "sistema completo",
    featured: true,
    bg: "linear-gradient(160deg,rgba(50,68,140,.3),rgba(255,255,255,.02))",
    border: "rgba(240,213,158,.4)",
    ctaBg: "linear-gradient(180deg,#f6dca6,#cda552)",
    ctaColor: "#1a1405",
    features: [
      "Sitio multipágina a medida",
      "CRM + automatizaciones IA",
      "Integración HubSpot / WhatsApp",
      "E-commerce opcional",
      "Soporte prioritario",
      "Revisiones ilimitadas",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Sistemas complejos y a gran escala.",
    from: "plataforma a medida",
    featured: false,
    bg: "linear-gradient(160deg,rgba(255,255,255,.06),rgba(255,255,255,.015))",
    border: "rgba(255,255,255,.1)",
    ctaBg: "rgba(255,255,255,.08)",
    ctaColor: "#e9ecf1",
    features: [
      "Plataforma & CRM completo",
      "Agentes IA personalizados",
      "Integraciones ilimitadas",
      "Paneles financieros y reportes",
      "Infraestructura escalable",
      "Soporte dedicado & SLA",
    ],
  },
];

export type ComparisonRow = {
  label: string;
  basic: string;
  pro: string;
  ent: string;
};

export const comparison: ComparisonRow[] = [
  { label: "Páginas / secciones", basic: "Hasta 3", pro: "Ilimitadas", ent: "A medida" },
  { label: "CRM & paneles", basic: "—", pro: "Incluido", ent: "Avanzado" },
  { label: "Agentes IA & automatización", basic: "—", pro: "Básico", ent: "Personalizado" },
  { label: "Integraciones (HubSpot/WhatsApp)", basic: "—", pro: "✓", ent: "Ilimitadas" },
  { label: "E-commerce", basic: "Opcional", pro: "✓", ent: "✓" },
  { label: "Soporte", basic: "Estándar", pro: "Prioritario", ent: "Dedicado + SLA" },
];

export const CONTACT_EMAIL = "somos@somosastria.com.ar";
