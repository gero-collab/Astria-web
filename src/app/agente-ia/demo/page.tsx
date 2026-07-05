"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

type PlatformKey = "inmobiliaria" | "concesionaria" | "ecommerce" | "crm" | "sipe";
type ChatMessage = { role: "user" | "assistant"; content: string };
type FieldDef = { key: string; label: string };
type ActionDef = { key: string; title: string; detail: string; svg: string };

type PlatformConfig = {
  label: string;
  color: string;
  bannerIconSvg: string;
  bannerTitle: string;
  bannerSub: string;
  chatEyebrow: string;
  chatTitle: string;
  chatSub: string;
  panelEyebrow: string;
  panelTitle: string;
  panelSub: string;
  fieldsCardTitle: string;
  panelNote: string;
  quickActions: string[];
  fields: FieldDef[];
  actions: ActionDef[];
  greeting: string;
  system: string;
  extract: string;
};

const PLATFORM_ORDER: PlatformKey[] = ["inmobiliaria", "concesionaria", "ecommerce", "crm", "sipe"];

const PLATFORMS: Record<PlatformKey, PlatformConfig> = {
  inmobiliaria: {
    label: "Inmobiliaria",
    color: "#FF6B4A",
    bannerIconSvg: `<svg viewBox="0 0 20 20" fill="none"><path d="M3 8.5L10 3l7 5.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V8.5z" stroke="#FF6B4A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 18V12h6v6" stroke="#FF6B4A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    bannerTitle: "Agente de la inmobiliaria",
    bannerSub: "Atiende consultas de propiedades, agenda visitas y califica leads — sin intervención humana.",
    chatEyebrow: "Vista del cliente · WhatsApp",
    chatTitle: "Hablá con el agente de la inmobiliaria",
    chatSub: "Preguntá por una propiedad como lo haría un cliente real.",
    panelEyebrow: "Vista interna · CRM Inmobiliario",
    panelTitle: "Lo que registra el sistema",
    panelSub: "Perfil del interesado capturado automáticamente.",
    fieldsCardTitle: "Perfil del interesado",
    panelNote:
      "El agente registra el perfil, filtra propiedades compatibles y notifica al asesor con un resumen listo para actuar.",
    quickActions: [
      "¿Tienen departamentos de 3 ambientes?",
      "Busco casa con jardín hasta USD 200.000",
      "¿Cuándo puedo visitar la propiedad?",
      "Quiero alquilar en la zona centro",
    ],
    fields: [
      { key: "operacion", label: "Operación" },
      { key: "zona", label: "Zona / Barrio" },
      { key: "presupuesto", label: "Presupuesto" },
      { key: "tipo", label: "Tipo de propiedad" },
      { key: "visita", label: "Visita agendada" },
    ],
    actions: [
      {
        key: "zona",
        title: "Filtrar propiedades compatibles",
        detail: "Según zona y presupuesto del interesado",
        svg: `<svg viewBox="0 0 14 14" fill="none"><path d="M2 4h10M4 7h6M6 10h2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
      },
      {
        key: "visita",
        title: "Agendar visita en el calendario",
        detail: "Notificación al asesor con resumen",
        svg: `<svg viewBox="0 0 14 14" fill="none"><rect x="2" y="3" width="10" height="9" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M2 6h10M5 2v2M9 2v2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
      },
      {
        key: "presupuesto",
        title: "Notificar al asesor asignado",
        detail: "Resumen del lead listo para cerrar",
        svg: `<svg viewBox="0 0 14 14" fill="none"><circle cx="7" cy="5" r="2.5" stroke="currentColor" stroke-width="1.3"/><path d="M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
      },
    ],
    greeting:
      "¡Hola! Soy el asistente de la inmobiliaria. ¿Estás buscando comprar, alquilar o tenés alguna consulta sobre propiedades?",
    system: `Sos el agente IA de una inmobiliaria argentina atendiendo por WhatsApp.
Tono cálido y profesional, voseo argentino. Mensajes cortos: 2-3 líneas máximo.
Ayudás al cliente a encontrar la propiedad ideal: respondés consultas, informás sobre zonas donde trabajan, agendás visitas.
No inventés propiedades ni precios específicos — si preguntan detalles, decís que un asesor confirma.
Para agendar visita, pedí nombre y teléfono.
Una sola pregunta por mensaje.`,
    extract: `Analizá la conversación y devolvé SOLO JSON sin texto extra:
{"operacion":string|null,"zona":string|null,"presupuesto":string|null,"tipo":string|null,"visita":string|null}
- operacion: "compra" o "alquiler" si se mencionó
- zona: zona o barrio mencionado
- presupuesto: monto o rango
- tipo: "departamento","casa","oficina",etc
- visita: "Solicitada" si quiere visitar, o null`,
  },

  concesionaria: {
    label: "Concesionaria",
    color: "#E8C27A",
    bannerIconSvg: `<svg viewBox="0 0 20 20" fill="none"><path d="M3 12l2-5h10l2 5" stroke="#E8C27A" stroke-width="1.4" stroke-linecap="round"/><rect x="2" y="12" width="16" height="4" rx="1" stroke="#E8C27A" stroke-width="1.4"/><circle cx="6" cy="16" r="1.5" fill="#E8C27A"/><circle cx="14" cy="16" r="1.5" fill="#E8C27A"/></svg>`,
    bannerTitle: "Agente de la concesionaria",
    bannerSub:
      "Consulta stock, calcula financiación, agenda test drives y gestiona toma de usados — todo sin vendedor.",
    chatEyebrow: "Vista del cliente · WhatsApp",
    chatTitle: "Hablá con el agente de la concesionaria",
    chatSub: "Preguntá por un auto, precio o financiación como un cliente real.",
    panelEyebrow: "Vista interna · Sistema de concesionaria",
    panelTitle: "Lo que registra el sistema",
    panelSub: "Perfil del comprador y acciones generadas.",
    fieldsCardTitle: "Perfil del comprador",
    panelNote:
      "El agente consulta stock, calcula cuotas según anticipo y agenda el test drive en la agenda del vendedor.",
    quickActions: [
      "¿Tienen Hilux SRV disponible?",
      "¿Cuánto sale financiado un Tracker?",
      "Quiero agendar un test drive para el sábado",
      "¿Hacen toma de mi auto usado?",
    ],
    fields: [
      { key: "modelo", label: "Modelo de interés" },
      { key: "condicion", label: "0km / Usado" },
      { key: "pago", label: "Forma de pago" },
      { key: "testdrive", label: "Test drive" },
      { key: "tomausado", label: "Toma de usado" },
    ],
    actions: [
      {
        key: "modelo",
        title: "Verificar stock del modelo",
        detail: "Disponibilidad y versiones",
        svg: `<svg viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.3"/><path d="M7 4v3l2 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
      },
      {
        key: "pago",
        title: "Calcular plan de financiación",
        detail: "Cuotas según anticipo del cliente",
        svg: `<svg viewBox="0 0 14 14" fill="none"><rect x="2" y="3" width="10" height="8" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M5 7h4M7 5v4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
      },
      {
        key: "testdrive",
        title: "Agendar test drive",
        detail: "Confirmar fecha y modelo con el vendedor",
        svg: `<svg viewBox="0 0 14 14" fill="none"><rect x="2" y="3" width="10" height="9" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M2 6h10M5 2v2M9 2v2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
      },
    ],
    greeting:
      "¡Hola! Bienvenido a la concesionaria. ¿Estás buscando un auto nuevo, un usado, o querés información sobre financiación?",
    system: `Sos el agente IA de una concesionaria argentina atendiendo por WhatsApp.
Tono dinámico y profesional, voseo. Mensajes cortos: 2-3 líneas.
Ayudás al cliente a elegir su auto: informás sobre modelos, opciones de financiación (anticipo + cuotas), agendás test drives, gestionás toma de usados.
No inventés precios exactos ni stock específico sin datos reales. Decís que el precio exacto lo confirma el vendedor.
Para test drive: pedí nombre, modelo y día preferido.`,
    extract: `Analizá la conversación de una concesionaria y devolvé SOLO JSON:
{"modelo":string|null,"condicion":string|null,"pago":string|null,"testdrive":string|null,"tomausado":string|null}
- modelo: auto o modelo mencionado
- condicion: "0km" o "usado"
- pago: "contado","financiado","plan de ahorro"
- testdrive: "Solicitado" si quiere probar, o null
- tomausado: descripción del auto que quiere dar si mencionó, o null`,
  },

  ecommerce: {
    label: "E-commerce",
    color: "#63B3ED",
    bannerIconSvg: `<svg viewBox="0 0 20 20" fill="none"><path d="M2 3h2l2.4 9.6A2 2 0 008.4 14h7.2a2 2 0 001.96-1.6L18.8 7H5" stroke="#63B3ED" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="17" r="1.5" fill="#63B3ED"/><circle cx="15" cy="17" r="1.5" fill="#63B3ED"/></svg>`,
    bannerTitle: "Agente de la tienda online",
    bannerSub:
      "Recomienda productos, rastrea pedidos, gestiona cambios y devoluciones — atención 24/7 sin operador.",
    chatEyebrow: "Vista del cliente · Chat del sitio",
    chatTitle: "Hablá con el agente de la tienda",
    chatSub: "Preguntá por un producto, tu pedido o una devolución como cliente real.",
    panelEyebrow: "Vista interna · Plataforma e-commerce",
    panelTitle: "Lo que registra el sistema",
    panelSub: "Interacción y acciones ejecutadas en la tienda.",
    fieldsCardTitle: "Datos de la interacción",
    panelNote:
      "El agente recomienda productos, verifica stock, informa el estado del envío y escala a un humano solo cuando es necesario.",
    quickActions: [
      "¿Tienen talles grandes en camperas de invierno?",
      "¿Dónde está mi pedido #4821?",
      "Quiero cambiar una compra que hice la semana pasada",
      "¿Tienen descuento para primera compra?",
    ],
    fields: [
      { key: "producto", label: "Producto buscado" },
      { key: "pedido", label: "N° de pedido" },
      { key: "gestion", label: "Gestión solicitada" },
      { key: "resolucion", label: "Resolución" },
      { key: "descuento", label: "Descuento aplicado" },
    ],
    actions: [
      {
        key: "producto",
        title: "Verificar stock y talles",
        detail: "Disponibilidad en tiempo real",
        svg: `<svg viewBox="0 0 14 14" fill="none"><rect x="2" y="4" width="10" height="8" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M5 4V3a2 2 0 014 0v1" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
      },
      {
        key: "pedido",
        title: "Rastrear estado del envío",
        detail: "Consulta al sistema de logística",
        svg: `<svg viewBox="0 0 14 14" fill="none"><path d="M2 10l3-6h4l3 6H2zM9 4l1 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "gestion",
        title: "Iniciar cambio o devolución",
        detail: "Genera ticket de postventa",
        svg: `<svg viewBox="0 0 14 14" fill="none"><path d="M2 7a5 5 0 019.9-1M12 7a5 5 0 01-9.9 1M2 6v2M12 6v2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
      },
    ],
    greeting:
      "¡Hola! Soy el asistente de la tienda. ¿Buscás algún producto, querés saber el estado de tu pedido o necesitás ayuda con un cambio?",
    system: `Sos el agente IA de una tienda de ropa online argentina, atendiendo por chat del sitio.
Tono amigable y servicial, voseo. Mensajes cortos: 2-3 líneas.
Podés: recomendar productos según lo que busca el cliente, verificar disponibilidad de talles, informar sobre el estado de pedidos (usá datos inventados realistas), gestionar cambios y devoluciones, aplicar descuento de bienvenida del 10% con código NUEVO10 para nuevos clientes.
Para pedidos, pedí el número de orden.
Si no hay stock del producto exacto, ofrecé alternativas similares.`,
    extract: `Analizá la conversación de una tienda online y devolvé SOLO JSON:
{"producto":string|null,"pedido":string|null,"gestion":string|null,"resolucion":string|null,"descuento":string|null}
- producto: producto o categoría buscada
- pedido: número de pedido mencionado
- gestion: "cambio","devolución","consulta de envío",etc
- resolucion: si se resolvió algo ("cambio iniciado","descuento aplicado",etc)
- descuento: si se ofreció o aplicó un descuento`,
  },

  crm: {
    label: "ORBI CRM",
    color: "#B794F4",
    bannerIconSvg: `<svg viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="6" height="6" rx="1" stroke="#B794F4" stroke-width="1.4"/><rect x="11" y="3" width="6" height="6" rx="1" stroke="#B794F4" stroke-width="1.4"/><rect x="3" y="11" width="6" height="6" rx="1" stroke="#B794F4" stroke-width="1.4"/><path d="M14 11v6M11 14h6" stroke="#B794F4" stroke-width="1.4" stroke-linecap="round"/></svg>`,
    bannerTitle: "Copiloto dentro de ORBI CRM",
    bannerSub:
      "El vendedor describe lo que necesita y el agente lo ejecuta: crea tareas, agenda reuniones, resume clientes, alerta vencimientos.",
    chatEyebrow: "Vista del usuario · Dentro del CRM",
    chatTitle: "Pedile tareas al copiloto del CRM",
    chatSub: "Probalo como si fueras un vendedor o coordinador operando el sistema.",
    panelEyebrow: "Vista interna · ORBI CRM",
    panelTitle: "Acciones ejecutadas en el sistema",
    panelSub: "El agente actúa directamente sobre la base de datos.",
    fieldsCardTitle: "Contexto de la operación",
    panelNote:
      "En vez de navegar menús, el usuario describe lo que necesita en lenguaje natural y el agente lo ejecuta en el sistema en segundos.",
    quickActions: [
      "Resumime el cliente Construcciones Del Valle",
      "Creá una tarea urgente de seguimiento para mañana",
      "¿Qué facturas están vencidas esta semana?",
      "Agendá una reunión con Tech Norte para el jueves 10 hs",
    ],
    fields: [
      { key: "cliente", label: "Cliente referenciado" },
      { key: "accion", label: "Acción solicitada" },
      { key: "fecha", label: "Fecha / Prioridad" },
      { key: "resultado", label: "Resultado ejecutado" },
      { key: "alerta", label: "Alerta generada" },
    ],
    actions: [
      {
        key: "accion",
        title: "Ejecutar acción en el sistema",
        detail: "Tarea, nota o reunión creada",
        svg: `<svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "fecha",
        title: "Agendar en el calendario",
        detail: "Invitación enviada al equipo",
        svg: `<svg viewBox="0 0 14 14" fill="none"><rect x="2" y="3" width="10" height="9" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M2 6h10M5 2v2M9 2v2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
      },
      {
        key: "alerta",
        title: "Notificar al equipo",
        detail: "Alerta con contexto completo",
        svg: `<svg viewBox="0 0 14 14" fill="none"><path d="M7 2a4 4 0 00-4 4v2l-1 2h10l-1-2V6a4 4 0 00-4-4zM5.5 10a1.5 1.5 0 003 0" stroke="currentColor" stroke-width="1.3"/></svg>`,
      },
    ],
    greeting:
      "¡Hola! Soy tu copiloto en ORBI CRM. Decime qué necesitás hacer y lo ejecuto: crear tareas, agendar reuniones, buscar clientes, revisar vencimientos...",
    system: `Sos el copiloto IA integrado en el CRM ORBI para empresas en Argentina.
El usuario es un vendedor o coordinador que te pide ejecutar tareas del CRM en lenguaje natural.
Podés: crear notas y tareas en clientes, agendar reuniones, resumir la actividad de un cliente, alertar sobre facturas vencidas, buscar información de clientes.
Clientes ficticios disponibles: "Construcciones Del Valle SA", "Tech Norte SAS", "Agro Sur SA", "Servicios Patagonia SRL", "Mayorista Oeste SRL".
Cuando ejecutés algo, confirmá de forma concisa: "Listo — tarea creada en Construcciones Del Valle para mañana 10 hs, prioridad alta."
Tono eficiente y directo. El usuario quiere resultados en segundos.`,
    extract: `Analizá la conversación dentro de un CRM y devolvé SOLO JSON:
{"cliente":string|null,"accion":string|null,"fecha":string|null,"resultado":string|null,"alerta":string|null}
- cliente: nombre del cliente mencionado
- accion: qué pidió hacer ("crear tarea","agendar reunión","ver facturas",etc)
- fecha: fecha, hora o prioridad mencionada
- resultado: si se ejecutó ("tarea creada","reunión agendada",etc)
- alerta: si se generó una alerta o notificación`,
  },

  sipe: {
    label: "SIPE Académico",
    color: "#3FD6B0",
    bannerIconSvg: `<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3" stroke="#3FD6B0" stroke-width="1.4"/><path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#3FD6B0" stroke-width="1.4" stroke-linecap="round"/><path d="M15 3l1.5 1.5L13 8" stroke="#3FD6B0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    bannerTitle: "Copiloto del asesor académico en SIPE",
    bannerSub:
      "El asesor busca alumnos, registra intervenciones, evalúa riesgo de abandono y crea tareas de seguimiento — todo por texto.",
    chatEyebrow: "Vista del asesor académico · Dentro de SIPE",
    chatTitle: "Pedile al copiloto que opere en SIPE",
    chatSub: "Probalo como si fueras un asesor académico gestionando su cartera de alumnos.",
    panelEyebrow: "Vista interna · SIPE CRM Académico",
    panelTitle: "Acciones ejecutadas en SIPE",
    panelSub: "El agente opera directamente sobre el sistema de gestión académica.",
    fieldsCardTitle: "Contexto de la operación",
    panelNote:
      "El asesor describe la situación en lenguaje natural y el agente registra la intervención, actualiza el estado del alumno y genera alertas de seguimiento automáticamente.",
    quickActions: [
      "¿Cuántos alumnos míos no se reinscribieron este cuatrimestre?",
      "Registrá una intervención con Martín García: habló, quedó en regularizar materias",
      "Mostrame los alumnos en riesgo alto de mi cartera",
      "Agendá un seguimiento para todos los alumnos sin contacto en 30 días",
    ],
    fields: [
      { key: "alumno", label: "Alumno referenciado" },
      { key: "accion", label: "Acción solicitada" },
      { key: "estado", label: "Estado / Riesgo" },
      { key: "intervencion", label: "Intervención registrada" },
      { key: "seguimiento", label: "Próximo seguimiento" },
    ],
    actions: [
      {
        key: "intervencion",
        title: "Registrar intervención en el expediente",
        detail: "Con tipo, resultado y fecha",
        svg: `<svg viewBox="0 0 14 14" fill="none"><path d="M2 12V4l3-2h5l2 2v8H2z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 7h4M5 9h2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
      },
      {
        key: "estado",
        title: "Evaluar riesgo académico",
        detail: "Según historial y actividad del alumno",
        svg: `<svg viewBox="0 0 14 14" fill="none"><path d="M7 2v4l3 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.3"/></svg>`,
      },
      {
        key: "seguimiento",
        title: "Crear tarea de seguimiento",
        detail: "En el calendario del asesor",
        svg: `<svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
    ],
    greeting:
      "¡Hola! Soy tu copiloto en SIPE. Podés pedirme buscar alumnos, registrar intervenciones, revisar riesgo de abandono o crear tareas de seguimiento. ¿Con qué empezamos?",
    system: `Sos el copiloto IA integrado en SIPE, el CRM académico para asesores de una universidad argentina.
El usuario es un asesor académico que gestiona una cartera de alumnos.
Podés: buscar alumnos por nombre o estado, registrar intervenciones (tipo: llamada/mensaje/reunión + resultado), actualizar el estado de riesgo de un alumno, crear tareas de seguimiento, mostrar alumnos sin contacto reciente, alertar sobre reinscripción vencida.
Alumnos ficticios disponibles: "Martín García" (riesgo alto, sin reinscribir), "Valentina López" (al día), "Carlos Pérez" (sin contacto 45 días), "Lucía Rodríguez" (riesgo medio).
Cuando ejecutés algo, confirmá brevemente: "Intervención registrada en el expediente de Martín García — tipo: llamada, resultado: comprometió regularizar, próximo contacto: en 15 días."
Usá terminología académica argentina: cuatrimestre, materias, reinscripción, asesor, legajo, intervención.`,
    extract: `Analizá la conversación de un CRM académico y devolvé SOLO JSON:
{"alumno":string|null,"accion":string|null,"estado":string|null,"intervencion":string|null,"seguimiento":string|null}
- alumno: nombre del alumno referenciado
- accion: qué pidió ("registrar intervención","ver riesgo","buscar alumnos",etc)
- estado: estado o riesgo del alumno si se mencionó ("riesgo alto","sin reinscribir",etc)
- intervencion: si se registró una intervención, descripción breve
- seguimiento: si se creó una tarea de seguimiento, descripción`,
  },
};

function emptyFields(cfg: PlatformConfig): Record<string, string | null> {
  const o: Record<string, string | null> = {};
  cfg.fields.forEach((f) => (o[f.key] = null));
  return o;
}

async function callProxy(messages: ChatMessage[], system: string, maxTokens?: number): Promise<string> {
  const res = await fetch("/api/claude-proxy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, system, maxTokens: maxTokens || 800 }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.text || "";
}

export default function AgenteIADemoPage() {
  const [platform, setPlatform] = useState<PlatformKey>("inmobiliaria");
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [typing, setTyping] = useState(false);
  const [extracted, setExtracted] = useState<Record<string, string | null>>({});
  const messagesRef = useRef<HTMLDivElement>(null);

  const cfg = PLATFORMS[platform];

  useEffect(() => {
    resetConversation("inmobiliaria");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [history, typing]);

  function resetConversation(p: PlatformKey) {
    const c = PLATFORMS[p];
    setHistory([{ role: "assistant", content: c.greeting }]);
    setExtracted(emptyFields(c));
  }

  function switchPlatform(p: PlatformKey) {
    setPlatform(p);
    resetConversation(p);
  }

  async function extractData(nextHistory: ChatMessage[], c: PlatformConfig) {
    const transcript = nextHistory.map((m) => (m.role === "user" ? "Usuario: " : "Agente: ") + m.content).join("\n");
    try {
      const raw = await callProxy([{ role: "user", content: transcript }], c.extract, 300);
      const clean = raw.replace(/```json|```/g, "").trim();
      return JSON.parse(clean);
    } catch {
      return emptyFields(c);
    }
  }

  async function sendMessage(overrideText?: string) {
    const text = (overrideText ?? input).trim();
    if (!text || sending) return;
    setInput("");
    setSending(true);

    const nextHistory: ChatMessage[] = [...history, { role: "user", content: text }];
    setHistory(nextHistory);
    setTyping(true);

    try {
      const reply = await callProxy(nextHistory, cfg.system, 350);
      const withReply: ChatMessage[] = [...nextHistory, { role: "assistant", content: reply }];
      setHistory(withReply);
      setTyping(false);

      const data = await extractData(withReply, cfg);
      setExtracted(data);
    } catch (err) {
      setTyping(false);
      setHistory((h) => [...h, { role: "assistant", content: "Error de conexión. Intentá de nuevo." }]);
      console.error(err);
    }

    setSending(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="font-agente-inter text-[#EDEDF2]">
      {/* HEADER */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute -right-[140px] -top-[140px] h-[340px] w-[340px] rounded-full border border-white/[0.06]"
          style={{ animation: "spin 50s linear infinite" }}
        />
        <div
          className="pointer-events-none absolute -right-[80px] -top-[80px] h-[220px] w-[220px] rounded-full border border-[#3FD6B0]/10"
          style={{ animation: "spin-r 34s linear infinite" }}
        />
        <Reveal>
          <div className="relative flex flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-8">
            <div className="flex items-center gap-2.5 font-urbanist text-base font-extrabold">
              ASTRIA<span className="text-[#FF6B4A]">·</span>
              <span className="rounded-full border border-[#3FD6B0]/30 bg-[#3FD6B0]/10 px-2.5 py-[3px] text-[10px] font-semibold uppercase tracking-[1.5px] text-[#3FD6B0]">
                Agente IA
              </span>
            </div>
            <div className="flex flex-wrap gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-[3px]">
              {PLATFORM_ORDER.map((p) => (
                <button
                  key={p}
                  onClick={() => switchPlatform(p)}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    platform === p ? "bg-white/[0.08] text-[#EDEDF2]" : "text-[#9A9AA8] hover:text-white/65"
                  }`}
                >
                  <span className="h-[2px] w-4 rounded-full" style={{ background: PLATFORMS[p].color }} />
                  {PLATFORMS[p].label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* MAIN */}
      <main className="mx-auto grid max-w-[1320px] grid-cols-1 md:grid-cols-[1.25fr_1fr]">
        {/* CHAT COL */}
        <div className="flex min-h-0 flex-col border-white/10 md:border-r">
          <div className="px-6 pt-5">
            <Reveal key={platform + "-banner"}>
              <div className="flex items-start gap-3.5 rounded-xl border border-white/[0.08] bg-white/[0.04] p-3.5">
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[9px] border border-white/[0.08] bg-white/[0.04]"
                  dangerouslySetInnerHTML={{ __html: cfg.bannerIconSvg }}
                />
                <div>
                  <div className="mb-0.5 text-[13px] font-bold">{cfg.bannerTitle}</div>
                  <div className="text-xs leading-[1.5] text-[#9A9AA8]">{cfg.bannerSub}</div>
                </div>
              </div>
            </Reveal>
            <div className="mb-0 mt-4">
              <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-[2px] text-[#FF6B4A]">
                {cfg.chatEyebrow}
              </div>
              <h2 className="font-urbanist text-[17px] font-bold">{cfg.chatTitle}</h2>
              <p className="mt-0.5 text-xs text-[#9A9AA8]">{cfg.chatSub}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 px-6 pt-3">
            {cfg.quickActions.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                disabled={sending}
                className="whitespace-nowrap rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-[#9A9AA8] transition-colors hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-[#EDEDF2] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>

          <div
            ref={messagesRef}
            className="flex min-h-[320px] max-h-[48vh] flex-1 flex-col gap-2 overflow-y-auto px-6 py-4"
          >
            {history.map((m, i) => (
              <div
                key={i}
                className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-[1.6] ${
                  m.role === "user"
                    ? "self-end rounded-br-[4px] bg-gradient-to-br from-[#FF6B4A] to-[#D45030] text-white"
                    : "self-start rounded-bl-[4px] border border-white/[0.08] bg-white/[0.05]"
                }`}
              >
                {m.content}
              </div>
            ))}
            {typing && <div className="self-start text-xs italic text-[#4A4A58]">escribiendo...</div>}
          </div>

          <div className="border-t border-white/10 px-6 py-4">
            <div className="flex gap-2">
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribí tu mensaje..."
                className="flex-1 resize-none rounded-[10px] border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-[13px] text-[#EDEDF2] focus:border-[#FF6B4A]/50 focus:outline-none"
              />
              <button
                onClick={() => sendMessage()}
                disabled={sending}
                className="whitespace-nowrap rounded-[10px] bg-[#FF6B4A] px-[18px] font-urbanist text-[13px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-35"
              >
                Enviar
              </button>
            </div>
            <div className="mt-[7px] flex justify-between">
              <span
                onClick={() => resetConversation(platform)}
                className="cursor-pointer text-[11px] text-[#4A4A58] transition-colors hover:text-[#9A9AA8]"
              >
                ↺ Nueva conversación
              </span>
              <span className="text-[11px] text-[#4A4A58]">Enter para enviar · Shift+Enter nueva línea</span>
            </div>
          </div>
        </div>

        {/* PANEL COL */}
        <div className="flex flex-col overflow-y-auto">
          <div className="border-b border-white/10 px-5 py-4">
            <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-[2px] text-[#3FD6B0]">
              {cfg.panelEyebrow}
            </div>
            <h2 className="font-urbanist text-base font-bold">{cfg.panelTitle}</h2>
            <p className="mt-0.5 text-xs text-[#9A9AA8]">{cfg.panelSub}</p>
          </div>

          <div className="border-b border-white/10 px-5 py-4">
            <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04]">
              <div className="border-b border-white/[0.06] px-3.5 py-2.5 text-[10px] font-bold uppercase tracking-[1.5px] text-[#4A4A58]">
                {cfg.fieldsCardTitle}
              </div>
              {cfg.fields.map((f, i) => (
                <div
                  key={f.key}
                  className={`flex flex-col gap-[3px] px-3.5 py-2.5 ${
                    i < cfg.fields.length - 1 ? "border-b border-white/[0.06]" : ""
                  }`}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#4A4A58]">
                    {f.label}
                  </div>
                  <div
                    className={`text-[13px] ${
                      extracted[f.key] ? "font-medium text-[#3FD6B0]" : "italic text-[#4A4A58]"
                    }`}
                  >
                    {extracted[f.key] || "—"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-white/10 px-5 py-4">
            <div className="mb-2.5 text-[10px] font-bold uppercase tracking-[1.5px] text-[#4A4A58]">
              Acciones generadas
            </div>
            <div className="flex flex-col gap-1.5">
              {cfg.actions.map((a) => {
                const done = !!extracted[a.key];
                return (
                  <div
                    key={a.key}
                    className={`flex items-center gap-3 rounded-[10px] border p-2.5 transition-all duration-300 ${
                      done ? "border-[#3FD6B0]/[0.18] bg-[#3FD6B0]/[0.04]" : "border-white/[0.06] bg-white/[0.02]"
                    }`}
                  >
                    <div
                      className={`flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${
                        done ? "border-[#3FD6B0]/30 bg-[#3FD6B0]/10 text-[#3FD6B0]" : "border-white/[0.06] bg-white/[0.04] text-[#4A4A58]"
                      }`}
                      dangerouslySetInnerHTML={{ __html: a.svg }}
                    />
                    <div className="flex-1">
                      <div className={`text-xs font-semibold ${done ? "text-[#EDEDF2]" : "text-white/50"}`}>
                        {a.title}
                      </div>
                      <div className={`mt-px text-[11px] ${done ? "text-[#9A9AA8]" : "text-[#4A4A58]"}`}>
                        {done ? extracted[a.key] : a.detail}
                      </div>
                    </div>
                    <div
                      className={`flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        done ? "border-[#3FD6B0] bg-[#3FD6B0]" : "border-white/[0.08]"
                      }`}
                    >
                      {done && (
                        <svg viewBox="0 0 10 10" fill="none" className="h-2.5 w-2.5">
                          <path d="M2 5l2.5 2.5L8 3" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="px-5 py-4">
            <div className="rounded-[10px] border border-white/[0.06] bg-white/[0.02] p-3.5 text-xs leading-[1.65] text-[#4A4A58]">
              {cfg.panelNote}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
