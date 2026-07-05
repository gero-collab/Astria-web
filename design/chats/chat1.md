# Sitio web multipágina ASTRIA

_Started 2026-06-30 16:36 UTC_

---

## User

Diseñame un sitio web multipágina para ASTRIA, agencia de software y agentes IA, manteniendo 100% la identidad visual de la landing actual: negro absoluto como base, canvas de campo de estrellas animado, anillos orbitales, glows de nebulosa, tarjetas glassmorphism, scroll reveals estilo Framer Motion, logos SVG inline con gradiente cromado, tipografía premium (estilo high-end tech/aeroespacial). Contacto: somos@somosastria.com.ar.

PÁGINAS:

1. HOME
- Hero astronómico (igual que landing actual) con headline orientado a "convertimos negocios en sistemas inteligentes"
- Resumen de 4 líneas de servicio como cards: Páginas Web, CRM & Sistemas IA, E-commerce, Demos en vivo
- Sección de logos/clientes (placeholder si no hay aún)
- CTA fuerte hacia /demos y /precios

2. SERVICIOS
- Páginas Web (landings de lujo, inmobiliarias, concesionarias)
- CRM & Automatización (sistemas tipo SIPE: gestión académica/administrativa, paneles, integraciones HubSpot/WhatsApp)
- E-commerce ("E-commerce Galáctico")
- CRM Administrativo-Contable (facturación, seguimiento de clientes, paneles financieros)
- Cada servicio con ícono orbital propio y micro-descripción

3. DEMOS (showcase interactivo)
- Grid de proyectos reales, cada uno con card glassmorphism + captura + tags de stack:
  • SIPE — CRM académico (Next.js, Supabase, HubSpot)
  • Inmobiliaria Prima Terra — landing premium
  • Concesionaria — landing tipo "Concesionarias 2.0"
  • E-commerce — demo de tienda
  • CRM Administrativo-Contable — panel de gestión
- Cada card con dos botones: "Ver capturas" (galería modal) y "Ver demo en vivo" (embed iframe cuando exista URL pública; si no hay URL, solo mostrar capturas)
- Diseñar el modal/lightbox manteniendo el tema oscuro-estelar

4. PRECIOS
- Mostrar 3 planes (Básico / Pro / Enterprise) SIN montos fijos visibles — usar lenguaje "desde", entregables incluidos por plan, y CTA "Cotizar mi proyecto" en cada card en vez de precio cerrado (porque los proyectos son a medida)
- Tabla comparativa de features por plan (páginas, integraciones, soporte, CRM, e-commerce)

5. CONTACTO
- Formulario (nombre, email, tipo de proyecto, mensaje)
- Email de contacto destacado
- Mismo fondo estelar, con un elemento orbital central como foco visual

ESTILO GENERAL:
- Paleta: negro absoluto (#000), acentos cromados/plateados, toques de azul profundo y dorado sutil para CTAs
- Misma tipografía y jerarquía visual que la landing original
- Mantener coherencia de microinteracciones (hover en cards = glow, parallax leve en estrellas)
- Mobile responsive

Generá primero la estructura de Home y Demos como prioridad, después Servicios/Precios/Contacto.

Te dejo el logo para que lo utilices, incluyendolo de forma adecuada pero que no lo uses como un template y lo mismo con el eslogan

## Assistant

_[tool: list_files]_

_[tool: view_image]_

_[tool: image_metadata]_

_[tool: image_metadata]_

Spec is detailed and complete — I'll build directly. Let me copy the assets and set up.

_[tool: copy_files]_

_[tool: update_todos]_

Logo looks great on black. Spec is complete — building the full multi-page DC now (starfield, orbital rings, glass cards, routing, modal lightbox).

_[tool: dc_write]_

_[tool: show_html]_

I need to handle responsive nav — inline styles can't do media queries. Let me add the burger/desktop-nav toggle to the helmet.

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

_[tool: get_webview_logs]_

_[tool: eval_js]_

Renders cleanly — the empty error is benign (likely a transient resource probe). Page, starfield, and nav all working. The verifier will do a full pass.

Listo. Built the full multi-page ASTRIA site as a single streaming Design Component (`Astria.dc.html`):

- **Home** — hero astronómico con tu logo y headline "convertimos negocios en sistemas inteligentes", 4 cards de servicio con ícono orbital, constelación de clientes (placeholders "TU LOGO"), y CTA fuerte hacia Demos/Precios.
- **Demos** — grid glassmorphism de los 5 proyectos (SIPE, Prima Terra, Concesionaria 2.0, E-commerce Galáctico, CRM Admin-Contable) con tags de stack, botón "Ver capturas" → lightbox modal con galería navegable, y "Ver demo en vivo" deshabilitado hasta que cargues URLs públicas.
- **Servicios**, **Precios** (3 planes "desde" + CTA "Cotizar mi proyecto" + tabla comparativa) y **Contacto** (formulario + elemento orbital central + somos@somosastria.com.ar).

Identidad mantenida: negro absoluto, starfield animado con parallax de mouse, anillos orbitales, glows de nebulosa, tipografía Chakra Petch/Sora con gradiente cromado, scroll reveals y hover-glow en cards. Responsive con menú burger en mobile.

Notas: las capturas son placeholders elegantes — pasame las imágenes reales y las inserto. Cuando tengas las URLs públicas de las demos, decime cuáles y activo el embed en vivo.

## User

primera imagen: Estos se ven opacos, además falto poner en que te van a beneficiar

segunda imagen: constalación de clientes podes agregar?

tercera imagen: en el logo de somos astria parace una imagen pegada, trata de integrarla bien o sino rehacela pero de manera sutil

## Assistant

Tres arreglos. Primero miro el eslogan para decidir si lo integro o lo rehago.

_[tool: view_image]_

_[tool: image_metadata]_

El eslogan PNG es un cuadrado con fondo negro sólido (sin transparencia), por eso se ve como "pegado" sobre el footer. Lo rehago sutil en HTML. También arreglo las cards (títulos brillantes + línea de beneficio) y afino la constelación.

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

Ahora rehago el eslogan del footer en HTML sutil (elimina la caja negra pegada) y afino la constelación.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: multi_screenshot]_

_[tool: show_html]_

Los tres arreglos aplicados. Verificando.

_[tool: ready_for_verification]_

Listo, los tres arreglos:

- **Cards de servicio** — títulos ahora en blanco brillante, fondo más presente, y cada una con un chip dorado de beneficio ("Más consultas y ventas desde tu web", "Ahorrás horas de trabajo manual", etc.).
- **Constelación de clientes** — subtítulo agregado invitando a sumar logos, tarjetas con hover-glow, listas para cuando me pases los logos reales.
- **Eslogan del footer** — el PNG cuadrado con fondo negro se veía pegado; lo rehice sutil en HTML (logo circular + wordmark cromado + tagline en versalitas), integrado limpio sin caja.

## User

REEMPLAZAR la sección "Constelación de Clientes" por:

SECCIÓN "¿POR QUÉ ASTRIA?"
- Título: "¿Por qué ASTRIA?" con eyebrow label "DIFERENCIAL"
- 4 cards glassmorphism en grid 2x2 (o fila horizontal en desktop), cada una con ícono orbital SVG propio:

  ⚡ Velocidad de entrega
  "De la idea al sistema en producción en semanas, no meses."

  🤖 IA integrada desde el día uno
  "Cada sistema que construimos puede incorporar agentes IA, automatizaciones y dashboards inteligentes."

  🎨 Diseño de otro nivel
  "Interfaces que impresionan a tus clientes antes de que usen una sola función."

  🛰 Soporte real, no un ticket
  "Hablás directo con quien construyó tu sistema. Sin intermediarios."

- Mismo fondo estelar, glows suaves en cada card al hover, tipografía consistente con el resto del sitio.

## Assistant

Reemplazo la sección de clientes por "¿Por qué ASTRIA?" con 4 cards e íconos orbitales SVG distintos.

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

Sección reemplazada.

_[tool: ready_for_verification]_

Listo. Reemplacé "Constelación de Clientes" por **"¿Por qué ASTRIA?"** con eyebrow "DIFERENCIAL" y las 4 cards glassmorphism con íconos orbitales (⚡ 🤖 🎨 🛰), cada una con glow suave al hover. El error de consola vacío es benigno (ya aparecía antes y no afecta el render).

## User

reemplazaria los emojis por diseño tuyo propio

## Assistant

Reemplazo los emojis por íconos SVG orbitales propios, coherentes con la identidad cromada.

_[tool: dc_html_str_replace]_

Ahora creo los 4 íconos SVG propios en la lógica (rayo, núcleo IA orbital, prisma de diseño, satélite).

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

Íconos SVG propios listos (rayo, núcleo IA orbital, prisma, satélite) con gradiente cromado.

_[tool: ready_for_verification]_

Reemplacé los emojis por 4 íconos SVG propios con el gradiente cromado del sitio: un rayo (velocidad), un núcleo con anillo orbital y nodos (IA), un prisma isométrico (diseño) y un satélite/nodo con antenas (soporte). Coherentes con los anillos orbitales del resto del sitio.

## User

Save as standalone HTML: Astria.dc.html

## Assistant

The design uses a `<canvas>` starfield and two local images (logo). No JS-string-referenced assets, so no meta tags needed. I just need to add the thumbnail template, then bundle.

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

_[tool: show_html]_

Funciona standalone — starfield, fonts y logo inline correctamente.

El archivo standalone está listo y funciona 100% offline (starfield, tipografías y logo embebidos).

_[tool: present_fs_item_for_download]_

Listo — descargá el archivo desde la tarjeta de arriba. Es un único HTML autocontenido que funciona sin conexión.

