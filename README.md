# Portfolio | Carolina Vilar Ródenas

Portfolio personal desarrollado con Next.js, TypeScript y Tailwind CSS. El proyecto presenta una experiencia visual minimalista, profesional y con una estética futurista sobria, centrada en mostrar perfil, habilidades, experiencia, proyectos y vías de contacto.

## Stack

- Next.js con App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Canvas 2D para la pecera cuántica ambiental

## Scripts

```bash
npm install
npm run dev
npm run build
npm run start
```

## Funcionalidades

- Rutas localizadas para español e inglés.
- Secciones de perfil, habilidades, proyectos, experiencia y contacto.
- Animaciones suaves con Framer Motion.
- Fondo ambiental interactivo con Canvas 2D.
- Contenido centralizado y fácil de editar desde `data/`.
- Recursos estáticos en `public/assets/`, incluyendo imagen principal, vídeos de proyectos y CV descargable.

## GitHub Snapshot

La página principal puede mostrar una señal ligera de GitHub usando la API oficial de usuarios.

- Fuente oficial: `https://api.github.com/users/{username}`
- Datos mostrados: repositorios públicos y fecha de alta
- Caché: revalidación server-side cada 6 horas
- Token opcional: `GITHUB_TOKEN` para aumentar el límite de peticiones
- Si la llamada falla, el panel mantiene una narrativa visual curada

## Estructura

```text
app/                         Layout, estilos globales y páginas localizadas
components/sections/          Hero, About, Skills, Projects, Experience y Contact
components/quantum-aquarium/  Canvas ambiental de la pecera cuántica
components/ui/                Componentes reutilizables
data/                         Contenido editable e internacionalización
public/assets/                Imagen hero, vídeos, previews y CV descargable
```

## Dirección visual

El diseño combina una base oscura, detalles glassmorphism, movimiento atmosférico y una interfaz clara. La pecera cuántica funciona como elemento ambiental secundario: acompaña la navegación sin competir con los proyectos ni con el contenido principal.

