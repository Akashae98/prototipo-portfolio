import type { PortfolioContent } from "@/data/profile";

export const es: PortfolioContent = {
  metadata: {
    title: "Carol Vilar | Portfolio de Desarrolladora Full-Stack",
    description:
      "Portfolio de Carol Vilar, desarrolladora Full-Stack centrada en backend, APIs y aplicaciones web."
  },
  ui: {
    localeSwitcherLabel: "Selector de idioma"
  },
  profile: {
    name: "Carol Vilar",
    legalName: "Carolina Vilar Rodenas",
    role: "Desarrolladora Full-Stack Junior",
    headline: "Desarrolladora orientada a backend, APIs y aplicaciones web.",
    stackLine: "Angular / Laravel / Java / SQL / APIs REST",
    email: "carolvr8@gmail.com",
    github: "https://github.com/Akashae98",
    linkedin: "https://www.linkedin.com/in/carolina-vilar-rodenas-/",
    cv: "/assets/CV-Carolina-Vilar-Rodenas.pdf"
  },
  navigation: [
    { label: "Perfil", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Experiencia", href: "#experience" },
    { label: "Contacto", href: "#contact" }
  ],
  sectionCopy: {
    hero: {
      label: "Backend / APIs / SaaS",
      rightLabel: "Sistemas Full-Stack",
      viewProjectsLabel: "Ver proyectos",
      downloadCvLabel: "Descargar CV",
      illustrationCaption: "Ilustración original, reinterpretada en 2026"
    },
    about: {
      label: "Perfil",
      title: "Pensamiento analítico, software claro.",
      intro:
        "Aprendo rápido, me interesa entender cómo funcionan los productos y me gusta trabajar con cuidado sobre código ya existente.",
      focusLabel: "En qué estoy enfocada",
      focus:
        "Seguir creciendo como desarrolladora Full-Stack en un equipo donde pueda construir software útil, escribir código claro y seguir mejorando en backend y frontend."
    },
    skills: {
      label: "Skills",
      title: "Herramientas con las que construyo aplicaciones web.",
      intro:
        "Tecnologías base para desarrollo web Full-Stack, junto con proyectos técnicos que muestran arquitectura, implementación y resolución de problemas."
    },
    projects: {
      label: "Proyectos",
      title: "Proyectos que muestran cómo construyo y cómo pienso.",
      intro:
        "Una selección de trabajo centrada en arquitectura, decisiones de implementación y desarrollo práctico."
    },
    experience: {
      label: "Experiencia",
      title: "Experiencia reciente y habilidades transferibles.",
      intro:
        "Experiencia en SaaS, formación en desarrollo web y una base analítica aplicada al trabajo con software."
    },
    contact: {
      label: "Contacto",
      title: "Abierta a oportunidades de desarrollo Full-Stack.",
      intro:
        "Disponible para prácticas, puestos junior y equipos que construyen productos web sólidos.",
      body:
        "Abierta a prácticas, puestos junior de Full-Stack y equipos que construyen productos web útiles y bien resueltos.",
      footer: "Hecho con Next.js, TypeScript y Tailwind CSS.",
      downloadCvLabel: "Descargar CV"
    }
  },
  about: [
    "Desarrolladora Full-Stack con experiencia práctica construyendo funcionalidades para productos SaaS y una base sólida en desarrollo web, backend y bases de datos.",
    "Mi formación en filosofía ha marcado mi forma de trabajar con software: pensamiento estructurado, comunicación clara y la costumbre de entender bien los problemas antes de resolverlos.",
    "Me interesan especialmente los sistemas backend, las APIs y los proyectos técnicos donde importan la arquitectura y la mantenibilidad."
  ],
  currentLearning: {
    title: "Aprendiendo ahora",
    text: "Arquitectura backend, diseño de sistemas, Spring Boot y profundización en Java."
  },
  developerSignals: {
    label: "Developer Signals",
    title: "En qué estoy centrada ahora mismo.",
    intro:
      "Una vista rápida de lo que estoy construyendo y de la dirección técnica en la que quiero seguir creciendo.",
    building: {
      title: "Construyendo ahora",
      text:
        "Refinamiento del portfolio, profundización en Java y aprendizaje de Spring Boot como parte de mi crecimiento como desarrolladora Full-Stack."
    },
    highlight: {
      label: "Proyecto destacado",
      title: "Release de JavaFX Fish Simulation",
      text:
        "Simulación de escritorio con comportamiento procedural de peces, estructura ECS, sistemas de colisión e integración con ANU QRNG."
    },
    stats: [
      { label: "Repositorios", value: "Trabajo de producción y aprendizaje" },
      { label: "Tecnologías", value: "Angular / Laravel / Java / SQL / APIs REST" },
      { label: "Foco actual", value: "Crecimiento Full-Stack, Java y Spring Boot" }
    ]
  },
  skillGroups: [
    {
      title: "Frontend",
      iconKey: "code2",
      items: ["Angular", "TypeScript", "HTML", "CSS", "Responsive UI"]
    },
    {
      title: "Backend",
      iconKey: "database",
      items: ["Laravel", "Java", "PHP", "APIs REST", "SQL"]
    },
    {
      title: "Bases de datos",
      iconKey: "network",
      items: ["MySQL", "PostgreSQL", "Bases de datos relacionales", "Consultas SQL", "Diseño de base de datos"]
    },
    {
      title: "Herramientas",
      iconKey: "terminal",
      items: ["Git", "GitHub", "Docker", "Postman"]
    },
    {
      title: "Proyectos técnicos",
      iconKey: "sparkles",
      items: [
        "JavaFX",
        "Arquitectura ECS",
        "Simulación interactiva",
        "Integración con APIs externas",
        "Generación procedural"
      ]
    }
  ],
  projects: [
    {
      title: "Interactive JavaFX Fish Simulation",
      type: "Proyecto técnico",
      description:
        "Simulación interactiva en JavaFX construida con arquitectura ECS, generación procedural de entidades, sistemas de colisión e integración con aleatoriedad cuántica real a través de la API de ANU QRNG.",
      highlight:
        "El foco está en arquitectura, sistemas de simulación e interacción en tiempo real, más que en un diseño CRUD tradicional.",
      bullets: [
        "Diseño de una arquitectura Entity Component System.",
        "Implementación de generación procedural de peces y su lógica de movimiento.",
        "Construcción de sistemas de colisión e interacción en JavaFX.",
        "Integración de aleatoriedad cuántica real mediante la API de ANU QRNG."
      ],
      tags: [
        "Java",
        "JavaFX",
        "Arquitectura ECS",
        "Generación procedural",
        "Sistemas de colisión",
        "ANU QRNG"
      ],
      linkMode: "desktop-download",
      status: "Release v0.1.2",
      statusDetail: "Descarga de escritorio disponible",
      media: {
        poster: "/assets/fish-sim-thumb.jpg",
        posterAlt: "Captura de la simulación en JavaFX con varios peces y burbujas.",
        video: "/assets/fish-sim-preview.mp4",
        badgeLabel: "Preview de la build de escritorio",
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
            objectPosition: "center center",
            label: "Campo de movimiento"
          },
          {
            src: "/assets/fish-sim-thumb.jpg",
            alt: "Zona inferior de la simulación con peces y partículas de burbujas.",
            objectPosition: "center bottom",
            label: "Ambiente en ejecución"
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
          label: "Release de escritorio",
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
        "Portfolio personal construido con Next.js, TypeScript y Tailwind CSS para presentar mi perfil y proyectos con una estructura técnica clara.",
      highlight:
        "Centrado en jerarquía de contenido, secciones reutilizables y un sistema visual contenido en lugar de complejidad decorativa.",
      bullets: [
        "Implementado con Next.js App Router y TypeScript.",
        "Contenido estructurado mediante objetos reutilizables y componentes por sección.",
        "Construido como una experiencia responsive con motion refinado."
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      linkMode: "in-progress",
      status: "Build actual",
      statusDetail: "Codebase en refinamiento activo",
      media: {
        poster: "/assets/hero-carolina.png",
        posterAlt: "Preview estructural del layout y del sistema de secciones del portfolio.",
        detailPanel: {
          title: "Estructura de la app",
          items: [
            "Next.js App Router",
            "Modelo de contenido tipado y secciones reutilizables",
            "Layout centrado en contenido con movimiento contenido"
          ],
          note: "Construido para mantener la interfaz legible, estructurada y fácil de evolucionar."
        }
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
      title: "Full-Stack Developer Intern",
      place: "Sinqro",
      date: "Feb 2026 - May 2026",
      iconKey: "cpu",
      details:
        "Trabajo en una plataforma SaaS multi-tenant para restauración, contribuyendo a sistemas configurables de frontend, soporte multidioma, ajustes SEO y flujos de pedido.",
      bullets: [
        "Desarrollo de funcionalidades para una plataforma SaaS multi-tenant del sector restauración.",
        "Trabajo sobre arquitectura frontend configurable, branding y theming.",
        "Implementación de soporte multidioma y configuración SEO.",
        "Colaboración en flujos de pedido y gestión."
      ]
    },
    {
      title: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
      place: "Instituto FOC",
      date: "2024 - 2026",
      iconKey: "code2",
      details:
        "Formación en programación, bases de datos, desarrollo backend, desarrollo frontend y despliegue de aplicaciones web."
    },
    {
      title: "Recepcionista",
      place: "Oficinas El Triangle / Azertia",
      date: "2021 - 2025",
      iconKey: "briefcase",
      details:
        "Desarrollo de habilidades de comunicación, autonomía, resolución de incidencias y coordinación en un entorno de atención al público."
    },
    {
      title: "Grado en Filosofía",
      place: "UNED",
      date: "2019 - 2023",
      iconKey: "network",
      details:
        "Enfoque en pensamiento crítico, lógica formal, argumentación y análisis de problemas complejos."
    },
    {
      title: "Certificaciones de Java",
      place: "Oracle Academy",
      date: "Formación adicional",
      iconKey: "code2",
      details:
        "Award of Course Completion in Java Fundamentals y Award of Achievement in Java Foundations."
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
