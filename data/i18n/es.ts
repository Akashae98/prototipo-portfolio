import type { PortfolioContent } from "@/data/profile";

export const es: PortfolioContent = {
  metadata: {
    title: "Carol Vilar | Desarrolladora web junior",
    description:
      "Portfolio de Carol Vilar, desarrolladora web junior con experiencia práctica en frontend, backend y producto digital."
  },
  ui: {
    localeSwitcherLabel: "Selector de idioma"
  },
  profile: {
    name: "Carol Vilar",
    legalName: "Carolina Vilar Rodenas",
    role: "Desarrolladora web junior",
    headline: "Desarrollo aplicaciones web. Me muevo entre frontend y backend y me gusta entender bien lo que construyo.",
    stackLine: "Angular / Laravel / Java / SQL / APIs REST",
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
      title: "Me gusta entender cómo funcionan las cosas.",
      intro:
        "Aprendo rápido, me gusta entender cómo están hechas las cosas y me siento cómoda moviéndome entre interfaz, lógica y datos según lo que el proyecto necesite.",
      focusLabel: "Ahora mismo",
      focus:
        "Busco un equipo donde pueda seguir creciendo, tocar distintas partes del producto y aprender trabajando sobre problemas reales."
    },
    skills: {
      label: "Tecnologías",
      title: "Herramientas con las que trabajo.",
      intro:
        "Tecnologías que he usado en proyectos reales y personales, desde interfaz y lógica de negocio hasta APIs y bases de datos."
    },
    projects: {
      label: "Proyectos",
      title: "Proyectos que explican mejor cómo trabajo.",
      intro:
        "Aquí se ve mejor cómo pienso, qué tipo de problemas me interesan y cómo los afronto."
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
        "Me interesan especialmente los equipos donde pueda tocar distintas capas del producto, trabajar cerca del problema y seguir creciendo como desarrolladora.",
      footer: "Hecho con Next.js, TypeScript y Tailwind CSS.",
      downloadCvLabel: "Descargar CV"
    }
  },
  about: [
    "He trabajado en producto SaaS y he tocado frontend, backend y datos en proyectos de prácticas, formación y trabajo personal.",
    "Mi formación en filosofía ha influido mucho en cómo trabajo: tiendo a ordenar bien los problemas, comunicar con claridad y no conformarme con la primera solución que funciona.",
    "Disfruto especialmente los proyectos donde hay que entender bien qué pasa, pensar una solución con sentido y dejar un código que otra persona pueda seguir sin pelearse con él."
  ],
  currentLearning: {
    title: "Aprendiendo ahora",
    text: "Java, Spring Boot y diseño de sistemas, sin perder de vista el frontend y el trabajo de producto."
  },
  developerSignals: {
    label: "Ahora",
    title: "En lo que estoy centrada ahora mismo.",
    intro:
      "Una foto rápida de lo que estoy aprendiendo y construyendo en esta etapa.",
    building: {
      title: "En marcha",
      text:
        "Estoy puliendo el portfolio, profundizando en Java y aprendiendo Spring Boot para ampliar mi base técnica y sentirme más cómoda cubriendo todo el stack."
    },
    highlight: {
      label: "Destacado",
      title: "JavaFX Fish Simulation",
      text:
        "Simulación de escritorio con comportamiento procedural, estructura ECS, sistemas de colisión e integración con ANU QRNG."
    },
    stats: [
      { label: "Repositorios", value: "Trabajo de producción y aprendizaje" },
      { label: "Tecnologías", value: "Angular / Laravel / Java / SQL / APIs REST" },
      { label: "Foco actual", value: "Java, Spring Boot y aplicaciones web de extremo a extremo" }
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
        "Arquitectura ECS",
        "Generación procedural",
        "RxJS e interceptors",
        "Autenticación con Sanctum",
        "SaaS multi-tenant"
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
        "Más que un CRUD, aquí me interesaba trabajar arquitectura, comportamiento y sistemas en tiempo real.",
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
        "Portfolio personal construido con Next.js, TypeScript y Tailwind CSS para presentar mi perfil y proyectos de una forma clara, cuidada y fácil de recorrer.",
      highlight:
        "Aquí el objetivo era ordenar bien el contenido, trabajar componentes reutilizables y evitar una interfaz recargada.",
      bullets: [
        "Implementado con Next.js App Router y TypeScript.",
        "Contenido estructurado mediante objetos reutilizables y componentes por sección.",
        "Construido como una experiencia responsive con motion refinado."
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
            "Layout centrado en contenido con movimiento contenido"
          ],
          note: "Lo construí para que fuese legible, fácil de mantener y sencillo de ampliar."
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
    },
    {
      title: "DevConnect",
      type: "Proyecto de fin de curso",
      description:
        "Red social para el sector IT desarrollada como proyecto final de DAW, con publicaciones, comentarios, likes, perfiles de usuario y sistema de logros.",
      highlight:
        "Además de la parte social, el proyecto me sirvió para trabajar separación cliente-servidor, autenticación y flujos reales de comunidad dentro de una aplicación web completa.",
      bullets: [
        "Desarrollo del frontend con Angular, TypeScript, RxJS e interceptors para gestionar flujos y comunicación con la API.",
        "Construcción del backend con Laravel, incluyendo autenticación con Sanctum y cookies HTTP-only.",
        "Arquitectura SPA con base de datos PostgreSQL.",
        "Trabajo colaborativo con Git y GitHub siguiendo flujo de desarrollo en equipo."
      ],
      tags: ["Angular", "RxJS", "Laravel", "PostgreSQL", "SPA"],
      linkMode: "in-progress",
      status: "Proyecto final DAW",
      statusDetail: "Frontend disponible en GitHub",
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
          note: "Proyecto centrado en perfiles, comunidad e interacción dentro de una aplicación separada por capas."
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
        }
      ]
    }
  ],
  timeline: [
    {
      title: "Desarrolladora en prácticas",
      place: "Sinqro",
      date: "Feb 2026 - May 2026",
      iconKey: "cpu",
      details:
        "Trabajé en una plataforma SaaS multi-tenant para restauración, participando en frontend configurable, soporte multidioma, ajustes SEO y flujos de pedido.",
      bullets: [
        "Desarrollo de funcionalidades para una plataforma SaaS multi-tenant del sector restauración.",
        "Trabajo sobre branding, theming y arquitectura frontend configurable.",
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
        "Cuatro años gestionando incidencias, coordinando con distintos departamentos y trabajando con autonomía en un entorno de atención al público."
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
