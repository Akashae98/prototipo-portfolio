import type { PortfolioContent } from "@/data/profile";

export const es: PortfolioContent = {
  metadata: {
    title: "Carol Vilar | Desarrolladora full-stack",
    description:
      "Portfolio de Carol Vilar, desarrolladora full-stack recién titulada en DAW con experiencia en frontend, backend y producto digital."
  },
  ui: {
    localeSwitcherLabel: "Selector de idioma"
  },
  profile: {
    name: "Carol Vilar",
    legalName: "Carolina Vilar Rodenas",
    role: "Desarrolladora full-stack",
    headline:
      "Desarrollo aplicaciones web full-stack, con experiencia en frontend, backend y APIs.",
    stackLine: "Angular / Laravel / Java / Spring Boot / SQL / APIs REST",
    email: "carolvr8@gmail.com",
    github: "https://github.com/Akashae98",
    linkedin: "https://www.linkedin.com/in/carolina-vilar-rodenas-/",
    cv: "/assets/CV-Carolina-Vilar-Rodenas.pdf"
  },
  navigation: [
    { label: "Perfil", href: "#about" },
    { label: "Tecnologías", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Experiencia", href: "#experience" },
    { label: "Contacto", href: "#contact" }
  ],
  sectionCopy: {
    hero: {
      label: "Web / SaaS / Producto",
      rightLabel: "Interfaz, lógica, datos",
      viewProjectsLabel: "Ver proyectos",
      downloadCvLabel: "Descargar CV",
      illustrationCaption: "Ilustración original, reinterpretada en 2026"
    },
    about: {
      label: "Perfil",
      title: "Me interesa entender cómo funcionan las cosas, no solo quedarme en la superficie.",
      intro:
        "Me muevo bien entre interfaz, lógica de negocio y datos según lo que pida el proyecto.",
      focusLabel: "Ahora mismo",
      focus:
        "Busco proyectos donde pueda entender bien el problema y construir soluciones sólidas."
    },
    skills: {
      label: "Tecnologías",
      title: "Herramientas con las que trabajo.",
      intro: "Tecnologías que ya he usado en proyectos reales y personales."
    },
    projects: {
      label: "Proyectos",
      title: "Proyectos que muestran cómo trabajo.",
      intro:
        "Tres proyectos distintos que muestran cómo pienso y cómo construyo."
    },
    experience: {
      label: "Experiencia",
      title: "Experiencia y formación.",
      intro:
        "Trabajo reciente en SaaS, formación técnica y una forma de aprender muy práctica."
    },
    contact: {
      label: "Contacto",
      title: "Abierta a nuevas oportunidades.",
      intro: "",
      body:
        "Me interesan los equipos donde pueda entender bien el problema, tocar varias partes de una aplicación y seguir mejorando como desarrolladora.",
      footer: "Hecho con Next.js, TypeScript y Tailwind CSS.",
      downloadCvLabel: "Descargar CV"
    }
  },
  about: [
    "He trabajado en producto SaaS y me he movido entre frontend, backend y datos en experiencia real, formación y proyectos propios. Me gusta entender bien qué está pasando antes de tocar código.",
    "La filosofía ha marcado bastante mi forma de trabajar: pensar con orden, comunicar con claridad y entender bien el problema antes de intentar resolverlo."
  ],
  currentLearning: {
    title: "Aprendiendo ahora",
    text: "Ahora estoy profundizando en Java, Spring Boot y diseño de sistemas para reforzar mi perfil full-stack desde la parte backend."
  },
  developerSignals: {
    label: "Foco Actual",
    title: "En qué estoy enfocándome ahora",
    intro:
      "Ahora mismo estoy enfocándome en arquitectura de software mientras trabajo con Next.js y Spring Boot, con la idea de construir aplicaciones más robustas y escalables.",
    focusPanel: {
      items: [
        "Arquitectura de software",
        "Next.js",
        "Spring Boot"
      ]
    },
    highlight: {
      label: "Proyecto destacado",
      title: "JavaFX Fish Simulation",
      text:
        "Combina arquitectura ECS, simulación en tiempo real y aleatoriedad cuántica vía ANU QRNG."
    }
  },
  skillGroups: [
    {
      title: "Frontend",
      iconKey: "code2",
      visualWeight: "primary",
      items: [
        { label: "Angular", emphasis: "primary" },
        { label: "TypeScript", emphasis: "primary" },
        { label: "JavaScript" },
        { label: "HTML" },
        { label: "CSS" },
        { label: "Responsive UI", kind: "concept" }
      ]
    },
    {
      title: "Backend",
      iconKey: "database",
      visualWeight: "primary",
      items: [
        { label: "Laravel", emphasis: "primary" },
        { label: "Java", emphasis: "primary" },
        { label: "PHP" },
        { label: "APIs REST", kind: "concept" },
        { label: "SQL" }
      ]
    },
    {
      title: "Bases de datos",
      iconKey: "network",
      visualWeight: "standard",
      items: [
        { label: "MySQL", emphasis: "primary" },
        { label: "PostgreSQL", emphasis: "primary" },
        { label: "Consultas SQL" },
        { label: "Relacionales", kind: "concept" },
        { label: "Diseño BD", kind: "concept" }
      ]
    },
    {
      title: "Intereses técnicos",
      iconKey: "sparkles",
      visualWeight: "feature",
      items: [
        { label: "Arquitectura ECS", kind: "concept", emphasis: "primary" },
        { label: "SaaS multi-tenant", kind: "concept", emphasis: "primary" },
        { label: "Generación procedural", kind: "concept" },
        { label: "RxJS + Interceptors", kind: "concept" },
        { label: "Laravel Sanctum", kind: "concept" }
      ]
    },
    {
      title: "Herramientas",
      iconKey: "terminal",
      visualWeight: "compact",
      items: [
        { label: "Git", emphasis: "primary" },
        { label: "GitHub", emphasis: "primary" },
        { label: "Visual Studio Code" },
        { label: "Docker" },
        { label: "Postman" },
        { label: "Codex" }
      ]
    }
  ],
  projects: [
    {
      title: "DevConnect",
      type: "Proyecto final de curso",
      description:
        "Red social tech desarrollada como proyecto final, con frontend Angular y backend Laravel por capas.",
      highlight:
        "Proyecto colaborativo donde trabajé una aplicación web completa, coordinando frontend, backend y flujos reales de producto.",
      bullets: [
        "Frontend en Angular, TypeScript y RxJS con interceptors.",
        "Backend en Laravel con Sanctum y cookies HTTP-only.",
        "SPA con PostgreSQL en Neon y despliegue en Vercel y Railway."
      ],
      tags: ["Angular", "Laravel", "PostgreSQL", "Neon", "Vercel", "Railway"],
      linkMode: "live-demo",
      status: "Proyecto final DAW",
      statusDetail: "Demo disponible en Vercel",
      media: {
        poster: "/assets/devconnect-login.png",
        posterAlt: "Pantalla de inicio de DevConnect con hero, llamada a la acción y formulario de acceso.",
        detailPanel: {
          title: "Cliente y servidor",
          items: [
            "Angular, RxJS e interceptors",
            "Laravel Sanctum y cookies HTTP-only",
            "Perfiles, comunidad y gamificación"
          ],
          note: "Proyecto de curso centrado en una aplicación web completa con cliente, servidor y flujos de comunidad."
        },
        frames: [
          {
            src: "/assets/devconnect-login.png",
            alt: "Pantalla de inicio de sesión de DevConnect con hero y formulario de acceso.",
            objectPosition: "center center",
            label: "Hero y login"
          },
          {
            src: "/assets/devconnect-feed.png",
            alt: "Feed principal de DevConnect con publicaciones y paneles laterales.",
            objectPosition: "center top",
            label: "Feed principal"
          }
        ]
      },
      actions: [
        {
          label: "GitHub",
          href: "https://github.com/jesusdev98/DevConnect-Frontend",
          variant: "ghost",
          external: true,
          iconKey: "github"
        },
        {
          label: "Ver demo",
          href: "https://devconnect-free.vercel.app/login",
          variant: "secondary",
          external: true,
          iconKey: "external"
        }
      ]
    },
    {
      title: "Interactive JavaFX Fish Simulation",
      type: "Proyecto técnico",
      description:
        "Simulación en JavaFX con ECS, generación procedural y comportamiento en tiempo real.",
      highlight:
        "En esta simulación utilizo aleatoriedad cuántica real para dar vida a los peces, con gráficos propios y variaciones en color, tamaño y apariencia visual.",
      bullets: [
        "Arquitectura ECS e inyección de dependencias para organizar entidades, componentes y sistemas.",
        "Gráficos ilustrados por mí e integración de aleatoriedad cuántica real con la API de ANU QRNG."
      ],
      tags: ["Java", "JavaFX", "Arquitectura ECS", "ANU QRNG"],
      linkMode: "desktop-download",
      status: "Release v0.1.2",
      statusDetail: "Descarga de escritorio disponible",
      media: {
        poster: "/assets/fish-sim-thumb.jpg",
        posterAlt: "Captura de la simulación en JavaFX con varios peces y burbujas.",
        video: "/assets/fish-sim-preview.mp4",
        badgeLabel: "Vista previa de la versión de escritorio",
        frames: [
          {
            src: "/assets/fish-sim-thumb.jpg",
            alt: "Captura amplia de la simulación con peces distribuidos por el acuario.",
            video: "/assets/fish-sim-entity-spread-2.mp4",
            objectPosition: "center top",
            label: "Distribución de entidades"
          },
          {
            src: "/assets/fish-sim-thumb.jpg",
            alt: "Grupos de peces en la zona media mostrando espaciado y movimiento.",
            video: "/assets/fish-sim-entity-spread.mp4",
            objectPosition: "center center",
            label: "Campo de movimiento"
          }
        ]
      },
      actions: [
        {
          label: "GitHub",
          href: "https://github.com/Akashae98/JavaFX-Fish-Simulation",
          variant: "ghost",
          external: true,
          iconKey: "github"
        },
        {
          label: "Descargar app",
          href: "https://github.com/Akashae98/JavaFX-Fish-Simulation/releases/tag/v0.1.2",
          variant: "secondary",
          external: true,
          iconKey: "download"
        }
      ]
    },
    {
      title: "Portfolio personal",
      type: "Proyecto web",
      description:
        "Portfolio en Next.js para presentar perfil, proyectos y criterio visual con una estructura clara.",
      highlight:
        "Lo construí para ordenar bien el contenido, con secciones reutilizables y una jerarquía visual clara, sin perder personalidad.",
      bullets: [
        "Implementado con Next.js App Router y TypeScript.",
        "Contenido estructurado con datos tipados y secciones reutilizables."
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      linkMode: "live-demo",
      status: "Proyecto activo",
      statusDetail: "Código disponible en GitHub",
      media: {
        poster: "/assets/portfolio-screenshot.png",
        posterAlt: "Captura de la hero del portfolio personal de Carol Vilar.",
        detailPanel: {
          title: "Sistema del portfolio",
          items: [
            "Next.js App Router",
            "Modelo de contenido tipado y secciones reutilizables",
            "Layout centrado en contenido con movimiento visual discreto"
          ],
          note: "Lo construí para que fuera legible, fácil de mantener y sencillo de ampliar con el tiempo."
        },
        frames: [
          {
            src: "/assets/portfolio-screenshot.png",
            alt: "Vista principal del portfolio con la hero y el sistema visual oscuro.",
            objectPosition: "center center",
            label: "Vista principal"
          }
        ]
      },
      actions: [
        {
          label: "GitHub",
          href: "https://github.com/Akashae98/prototipo-portfolio",
          variant: "ghost",
          external: true,
          iconKey: "github"
        }
      ]
    }
  ],
  timeline: [
    {
      title: "Desarrolladora full-stack",
      place: "Sinqro",
      date: "Feb 2026 - May 2026",
      iconKey: "cpu",
      details:
        "Desarrollé una plataforma SaaS multi-tenant de restauración, con storefront por cliente, pedidos online y renderizado SSR en Next.js.",
      bullets: [
        "Implementación de configuración por tenant: dominio, branding, themes, SEO y multilenguaje.",
        "Implementación y consumo de APIs REST para catálogo, checkout, tracking de pedidos y pagos.",
        "Optimización de la experiencia de compra y de los flujos de producto en un entorno multi-tenant."
      ]
    },
    {
      title: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
      place: "Instituto FOC",
      date: "2024 - 2026",
      iconKey: "code2",
      details: "Formación técnica en desarrollo web, bases de datos, backend, frontend y despliegue."
    },
    {
      title: "Recepcionista",
      place: "Oficinas El Triangle / Azertia",
      date: "2021 - 2025",
      iconKey: "briefcase",
      details:
        "Cuatro años gestionando incidencias, coordinación y autonomía en atención al público."
    },
    {
      title: "Grado en Filosofía",
      place: "UNED",
      date: "2019 - 2023",
      iconKey: "network",
      details: "Base sólida en pensamiento crítico, lógica formal y análisis de problemas complejos."
    },
    {
      title: "Certificaciones de Java",
      place: "Oracle Academy",
      date: "Formación adicional",
      iconKey: "code2",
      details: "Java Fundamentals y Java Foundations completados en Oracle Academy."
    }
  ],
  contactLinks: [
    {
      label: "Email",
      href: "mailto:carolvr8@gmail.com",
      value: "carolvr8@gmail.com",
      iconKey: "mail"
    },
    {
      label: "GitHub",
      href: "https://github.com/Akashae98",
      value: "github.com/Akashae98",
      iconKey: "github"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/carolina-vilar-rodenas-/",
      value: "linkedin.com/in/carolina-vilar-rodenas",
      iconKey: "linkedin"
    }
  ]
};
