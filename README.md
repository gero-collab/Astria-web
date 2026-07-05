# ASTRIA — Sitio Web

Sitio multipágina para ASTRIA, agencia de software y agentes IA. Implementado en **Next.js 14 (App Router)**, **TypeScript** y **Tailwind CSS**, a partir del diseño exportado desde Claude Design (ver `design/`).

## Páginas

- `/` — Home
- `/servicios` — Servicios
- `/demos` — Demos & proyectos (con lightbox de capturas)
- `/precios` — Planes y comparativa de features
- `/contacto` — Formulario de contacto

## Stack

- Next.js 14 App Router + TypeScript
- Tailwind CSS 3
- Starfield animado en `<canvas>` + anillos orbitales con parallax de mouse (`src/components/BackgroundLayers.tsx`)
- Scroll reveals vía `IntersectionObserver` (`src/components/Reveal.tsx`)
- Envío de formulario de contacto vía [Resend](https://resend.com) (`src/app/api/contact/route.ts`)

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Copiá `.env.example` a `.env.local` y completá:

```
RESEND_API_KEY=       # API key de Resend, requerida para que /contacto envíe emails
CONTACT_FROM_EMAIL=   # remitente verificado en Resend (opcional mientras el dominio no esté verificado)
```

Sin `RESEND_API_KEY` configurada, el formulario de contacto muestra un mensaje de error pidiendo escribir directamente a somos@somosastria.com.ar.

## Deploy en Vercel

1. Importá el repo en Vercel.
2. Configurá `RESEND_API_KEY` (y `CONTACT_FROM_EMAIL` si aplica) en las variables de entorno del proyecto.
3. Deploy — no requiere configuración adicional (usa el build de Next.js por defecto).

## Contenido editable

Todo el contenido de texto (servicios, proyectos demo, planes, features) vive en `src/lib/data.ts`. Las capturas de los proyectos en `/demos` son placeholders (recuadro con patrón + texto) hasta que se agreguen imágenes reales; las URLs de "demo en vivo" están deshabilitadas (`live: null`) hasta contar con links públicos.

## Diseño original

La carpeta `design/` contiene el bundle de diseño exportado desde Claude Design (HTML/CSS/JS prototype, transcript del chat de diseño) que sirvió de referencia para esta implementación. No forma parte de la app.
