import type { PortfolioContent } from "@/data/profile";

export const en: PortfolioContent = {
  metadata: {
    title: "Carol Vilar | Full-Stack Developer Portfolio",
    description:
      "Portfolio of Carol Vilar, a backend-focused Full-Stack developer working with APIs and web applications."
  },
  ui: {
    localeSwitcherLabel: "Language selector"
  },
  profile: {
    name: "Carol Vilar",
    legalName: "Carolina Vilar Rodenas",
    role: "Junior Full-Stack Developer",
    headline: "Backend-focused developer working with APIs and web applications.",
    stackLine: "Angular / Laravel / Java / SQL / REST APIs",
    email: "carolvr8@gmail.com",
    github: "https://github.com/Akashae98",
    linkedin: "https://www.linkedin.com/in/carolina-vilar-rodenas-/",
    cv: "/assets/CV-Carolina-Vilar-Rodenas.pdf"
  },
  navigation: [
    { label: "Profile", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ],
  sectionCopy: {
    hero: {
      label: "Backend / APIs / SaaS",
      rightLabel: "Full-Stack Systems",
      viewProjectsLabel: "View Projects",
      downloadCvLabel: "Download CV",
      illustrationCaption: "Original illustration, reworked in 2026"
    },
    about: {
      label: "Profile",
      title: "Analytical thinking, clear software.",
      intro:
        "A developer who learns quickly, understands how products work, and contributes with care to existing codebases.",
      focusLabel: "Current focus",
      focus:
        "Growing as a Full-Stack developer in a team where I can build useful software, write clear code, and keep improving across backend and frontend work."
    },
    skills: {
      label: "Skills",
      title: "Tools I use to build web applications.",
      intro:
        "Core technologies for Full-Stack web development, plus project work that shows architecture, implementation, and problem solving."
    },
    projects: {
      label: "Projects",
      title: "Projects that show how I build and think.",
      intro:
        "A selection of work focused on architecture, implementation decisions, and hands-on development."
    },
    experience: {
      label: "Experience",
      title: "Recent experience and transferable skills.",
      intro:
        "SaaS experience, web development training, and an analytical background applied to software work."
    },
    contact: {
      label: "Contact",
      title: "Open to Full-Stack development opportunities.",
      intro:
        "Available for internships, entry-level roles, and teams building solid web products.",
      body:
        "Open to internships, junior Full-Stack roles, and teams building useful, well-structured web products.",
      footer: "Built with Next.js, TypeScript and Tailwind CSS.",
      downloadCvLabel: "Download CV"
    }
  },
  about: [
    "Full-Stack developer with hands-on experience building SaaS features and a solid foundation in web development, backend systems, and databases.",
    "My background in philosophy shaped the way I approach software: structured thinking, clear communication, and the habit of understanding problems before solving them.",
    "I am especially interested in backend systems, APIs, and technical projects where architecture and maintainability matter."
  ],
  currentLearning: {
    title: "Currently Learning",
    text: "Backend architecture, system design, Spring Boot, and deeper Java work."
  },
  developerSignals: {
    label: "Developer Signals",
    title: "What I'm focused on right now.",
    intro:
      "A quick view of what I'm building and the technical direction I want to keep pushing.",
    building: {
      title: "Currently Building",
      text:
        "Portfolio refinement, deeper Java work, and Spring Boot learning as I keep growing as a Full-Stack developer."
    },
    highlight: {
      label: "Latest Highlight",
      title: "JavaFX Fish Simulation release",
      text:
        "Desktop simulation with procedural fish behavior, ECS structure, collision systems, and ANU QRNG integration."
    },
    stats: [
      { label: "Repositories", value: "Production and learning work" },
      { label: "Technologies", value: "Angular / Laravel / Java / SQL / REST APIs" },
      { label: "Current Focus", value: "Full-Stack growth, Java, Spring Boot" }
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
      items: ["Laravel", "Java", "PHP", "REST APIs", "SQL"]
    },
    {
      title: "Databases",
      iconKey: "network",
      items: ["MySQL", "PostgreSQL", "Relational databases", "SQL queries", "Database design"]
    },
    {
      title: "Tools",
      iconKey: "terminal",
      items: ["Git", "GitHub", "Docker", "Postman"]
    },
    {
      title: "Technical Projects",
      iconKey: "sparkles",
      items: [
        "JavaFX",
        "ECS Architecture",
        "Interactive Simulation",
        "External API Integration",
        "Procedural Generation"
      ]
    }
  ],
  projects: [
    {
      title: "Interactive JavaFX Fish Simulation",
      type: "Technical project",
      description:
        "Interactive JavaFX simulation built with ECS architecture, procedural entity generation, collision systems, and real quantum randomness integration through the ANU QRNG API.",
      highlight:
        "Focused on architecture, simulation systems, and real-time interaction rather than traditional CRUD application design.",
      bullets: [
        "Designed an Entity Component System architecture.",
        "Implemented procedural fish generation and movement logic.",
        "Built collision and interaction systems in JavaFX.",
        "Integrated real quantum randomness through the ANU QRNG API."
      ],
      tags: [
        "Java",
        "JavaFX",
        "ECS Architecture",
        "Procedural Generation",
        "Collision Systems",
        "ANU QRNG"
      ],
      linkMode: "desktop-download",
      status: "Release v0.1.2",
      statusDetail: "Desktop download available",
      media: {
        poster: "/assets/fish-sim-thumb.jpg",
        posterAlt: "JavaFX fish simulation screenshot showing a field of fish entities and bubbles.",
        video: "/assets/fish-sim-preview.mp4",
        badgeLabel: "Preview from desktop build",
        frames: [
          {
            src: "/assets/fish-sim-thumb.jpg",
            alt: "Wide simulation screenshot with fish entities distributed across the aquarium.",
            video: "/assets/fish-sim-entity-spread-2.mp4",
            objectPosition: "center top",
            label: "Entity spread"
          },
          {
            src: "/assets/fish-sim-thumb.jpg",
            alt: "Mid-field fish clusters showing spacing and movement across the simulation.",
            objectPosition: "center center",
            label: "Movement field"
          },
          {
            src: "/assets/fish-sim-thumb.jpg",
            alt: "Lower simulation area with fish clusters and bubble particles.",
            objectPosition: "center bottom",
            label: "Runtime atmosphere"
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
          label: "Desktop Release",
          href: "https://github.com/Akashae98/JavaFX-Fish-Simulation/releases/tag/v0.1.2",
          variant: "secondary",
          external: true,
          iconKey: "download"
        }
      ]
    },
    {
      title: "Personal Portfolio",
      type: "Web project",
      description:
        "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS to present my profile and projects with a clear technical structure.",
      highlight:
        "Focused on content hierarchy, reusable sections, and a restrained visual system rather than decorative complexity.",
      bullets: [
        "Implemented with Next.js App Router and TypeScript.",
        "Structured content through reusable data objects and section components.",
        "Built as a responsive single-page experience with refined motion."
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      linkMode: "live-demo",
      status: "Vercel deploy",
      statusDetail: "Public build available",
      media: {
        poster: "/assets/portfolio-screenshot.png",
        posterAlt: "Screenshot of Carol Vilar's personal portfolio hero section.",
        detailPanel: {
          title: "Portfolio system",
          items: [
            "Next.js App Router",
            "Typed content model and reusable sections",
            "Content-first layout with restrained motion"
          ],
          note: "Built to keep the interface readable, structured, and easy to evolve as the project grows."
        },
        frames: [
          {
            src: "/assets/portfolio-screenshot.png",
            alt: "Main portfolio view with the hero section and dark visual system.",
            objectPosition: "center center",
            label: "Main view"
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
        },
        {
          label: "View build",
          href: "https://prototipo-portfolio-rho.vercel.app/en",
          variant: "secondary",
          external: true,
          iconKey: "external"
        }
      ]
    },
    {
      title: "DevConnect",
      type: "Final course project",
      description:
        "Social network for the IT sector developed as a DAW final project, with an Angular frontend and Laravel backend.",
      highlight:
        "The project focuses on building a complete Full-Stack application with a clear separation between client and server, designed around profiles, community, and connections between tech professionals.",
      bullets: [
        "Developed the frontend with Angular and TypeScript.",
        "Used RxJS and interceptors to manage flows and API communication.",
        "Built the backend with Laravel.",
        "Built as an SPA with a PostgreSQL database."
      ],
      tags: ["Angular", "RxJS", "Laravel", "PostgreSQL", "SPA"],
      linkMode: "in-progress",
      status: "DAW final project",
      statusDetail: "Frontend available on GitHub",
      media: {
        poster: "/assets/devconnect-login.png",
        posterAlt: "DevConnect landing screen with hero copy, call to action, and login form.",
        detailPanel: {
          title: "Full-Stack architecture",
          items: [
            "Angular SPA",
            "RxJS and interceptors",
            "Laravel and PostgreSQL"
          ],
          note: "Final course project focused on connecting tech profiles through a layered web application."
        },
        frames: [
          {
            src: "/assets/devconnect-login.png",
            alt: "DevConnect login screen with hero section and access form.",
            objectPosition: "center center",
            label: "Hero and login"
          },
          {
            src: "/assets/devconnect-feed.png",
            alt: "Main DevConnect feed with posts and side panels.",
            objectPosition: "center top",
            label: "Main feed"
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
      title: "Full-Stack Developer Intern",
      place: "Sinqro",
      date: "Feb 2026 - May 2026",
      iconKey: "cpu",
      details:
        "Worked on a multi-tenant restaurant SaaS platform, contributing to configurable frontend systems, multilingual support, SEO settings, and ordering workflows.",
      bullets: [
        "Developed features for a multi-tenant restaurant SaaS platform.",
        "Worked on configurable frontend architecture, branding, and theming.",
        "Implemented multilingual support and SEO configuration.",
        "Contributed to ordering and management workflows."
      ]
    },
    {
      title: "Higher Vocational Degree in Web Application Development (DAW)",
      place: "Instituto FOC",
      date: "2024 - 2026",
      iconKey: "code2",
      details:
        "Training in programming, databases, backend development, frontend development, and web application deployment."
    },
    {
      title: "Receptionist",
      place: "Oficinas El Triangle / Azertia",
      date: "2021 - 2025",
      iconKey: "briefcase",
      details:
        "Developed communication, autonomy, incident resolution, and coordination skills in a client-facing environment."
    },
    {
      title: "Degree in Philosophy",
      place: "UNED",
      date: "2019 - 2023",
      iconKey: "network",
      details:
        "Focused on critical thinking, formal logic, argumentation, and analysis of complex problems."
    },
    {
      title: "Java Certifications",
      place: "Oracle Academy",
      date: "Additional training",
      iconKey: "code2",
      details:
        "Award of Course Completion in Java Fundamentals and Award of Achievement in Java Foundations."
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
