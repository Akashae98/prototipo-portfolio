# CVR — Portfolio

Portfolio personal construido con Next.js, TypeScript y Tailwind CSS.

No quería un portfolio genérico. Quería algo oscuro, técnico y con una identidad visual; una interfaz que se sintiera más cercana a un sistema real que a una plantilla de portfolio. Parte de esa identidad nace de una ilustración original del 2017 que he reinterpretado para el proyecto!

El fondo ambiental y el sistema de motion están construidos para acompañar la navegación de forma sutil, sin competir con el contenido.

→ [prototipo-portfolio-rho.vercel.app/en](https://prototipo-portfolio-rho.vercel.app/en)

---

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Canvas 2D** — fondo ambiental
- **Lucide React**

---

## Lo que tiene

**Routing bilingüe** — `/en` y `/es` sin librerías externas de i18n, con contenido tipado y rutas localizadas.

**Canvas ambiental** — el fondo no es un GIF ni un vídeo. Es una pieza construida con Canvas 2D para acompañar la interfaz sin competir con el contenido.

**Arquitectura modular** — el contenido está separado de la presentación. Cambiar textos o ajustar secciones no implica tocar la lógica visual.

**Motion contenido** — las animaciones están para guiar, no para distraer. Sin parallax agresivo ni efectos puestos porque sí.

**Responsive orientado a desktop** — funciona en móvil, pero está pensado para lucir especialmente bien en pantalla grande.

---

## Desarrollo

```bash
npm install
npm run dev
```

```text
http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

---

## Estructura

```text
app/                          Routing y páginas localizadas
components/sections/          Secciones del portfolio
components/quantum-aquarium/  Lógica del Canvas ambiental
components/ui/                Componentes reutilizables
data/                         Contenido e i18n
public/assets/                Media y CV descargable
```

---

## Notas

El objetivo del proyecto era construir algo con coherencia visual de principio a fin que me gustara y que cargara rápido.


