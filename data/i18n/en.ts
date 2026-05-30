import type { PortfolioContent } from "@/data/profile";

export const en: PortfolioContent = {
  metadata: {
    title: "Carol Vilar | Junior Web Developer",
    description:
      "Portfolio of Carol Vilar, a junior web developer with hands-on experience in frontend, backend, and digital product work."
  },
  ui: {
    localeSwitcherLabel: "Language selector"
  },
  profile: {
    name: "Carol Vilar",
    legalName: "Carolina Vilar Rodenas",
    role: "Junior Full-Stack Developer",
    headline:
      "I build full-stack web applications, with hands-on experience across frontend, APIs, and backend.",
    stackLine: "Angular / Laravel / Java / Spring Boot / SQL / REST APIs",
    email: "carolvr8@gmail.com",
    github: "https://github.com/Akashae98",
    linkedin: "https://www.linkedin.com/in/carolina-vilar-rodenas-/",
    cv: "/assets/Resume-Carolina-Vilar-Rodenas-EN.pdf"
  },
  navigation: [
    { label: "Profile", href: "#about" },
    { label: "Stack", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ],
  sectionCopy: {
    hero: {
      label: "Web / SaaS / Product",
      rightLabel: "Interface, logic, data",
      viewProjectsLabel: "View Projects",
      downloadCvLabel: "Download Resume",
      illustrationCaption: "Original illustration, reworked in 2026"
    },
    about: {
      label: "Profile",
      title: "I want to understand how things work, not just scratch the surface.",
      intro:
        "I move comfortably between interface, business logic, and data depending on what the project needs.",
      focusLabel: "Right now",
      focus:
        "Spring Boot, system design, and projects that make me think."
    },
    skills: {
      label: "Stack",
      title: "Tools I work with.",
      intro: "Technologies I have already used in real and personal projects."
    },
    projects: {
      label: "Projects",
      title: "Projects that best show how I work.",
      intro:
        "Three different projects that show how I think and how I build."
    },
    experience: {
      label: "Experience",
      title: "Experience and training.",
      intro:
        "Recent SaaS work, technical training, and a very hands-on way of learning."
    },
    contact: {
      label: "Contact",
      title: "If you think I could contribute, let's talk.",
      intro: "",
      body:
        "I am looking for a team where I can contribute from day one and learn from people who know more than I do.",
      footer: "Built with Next.js, TypeScript and Tailwind CSS.",
      downloadCvLabel: "Download Resume"
    }
  },
  about: [
    "I have worked on SaaS features and touched frontend, backend, and data through internships, training, and personal projects. I like understanding the problem well before I start coding.",
    "My background in philosophy has reinforced a way of working that translates well into development: structuring problems clearly, communicating well, and not stopping at the first solution that happens to work."
  ],
  currentLearning: {
    title: "Currently Learning",
    text: "Right now I'm going deeper into Java, Spring Boot, and system design to strengthen the backend side of my full-stack profile."
  },
  developerSignals: {
    label: "Current Focus",
    title: "Where I want to keep growing",
    intro:
      "I am steering my growth toward stronger end-to-end web applications, with more depth in backend and architecture.",
    focusPanel: {
      items: [
        "Spring Boot and Java",
        "Angular + RxJS",
        "Personal full-stack projects"
      ]
    },
    highlight: {
      label: "Featured project",
      title: "JavaFX Fish Simulation",
      text:
        "Combines ECS architecture, real-time simulation, and quantum randomness through the ANU QRNG API."
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
        { label: "REST APIs", kind: "concept" },
        { label: "SQL" }
      ]
    },
    {
      title: "Databases",
      iconKey: "network",
      visualWeight: "standard",
      items: [
        { label: "MySQL", emphasis: "primary" },
        { label: "PostgreSQL", emphasis: "primary" },
        { label: "SQL queries" },
        { label: "Relational DBs", kind: "concept" },
        { label: "DB design", kind: "concept" }
      ]
    },
    {
      title: "Technical Interests",
      iconKey: "sparkles",
      visualWeight: "feature",
      items: [
        { label: "ECS Architecture", kind: "concept", emphasis: "primary" },
        { label: "Multi-tenant SaaS", kind: "concept", emphasis: "primary" },
        { label: "Procedural Generation", kind: "concept" },
        { label: "RxJS + Interceptors", kind: "concept" },
        { label: "Laravel Sanctum", kind: "concept" }
      ]
    },
    {
      title: "Tools",
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
      type: "Final course project",
      description:
        "Tech-focused social network built as a final project, with Angular on the frontend and Laravel on the backend.",
      highlight:
        "It is the project that best sums up how I work on the web.",
      bullets: [
        "Frontend built with Angular, TypeScript, and RxJS interceptors.",
        "Backend built with Laravel, Sanctum, and HTTP-only cookies.",
        "SPA using PostgreSQL on Neon, deployed through Vercel and Railway."
      ],
      tags: ["Angular", "Laravel", "PostgreSQL", "Neon", "Vercel", "Railway"],
      linkMode: "live-demo",
      status: "DAW final project",
      statusDetail: "Live demo available on Vercel",
      media: {
        poster: "/assets/devconnect-login.png",
        posterAlt: "DevConnect landing screen with hero copy, call to action, and login form.",
        detailPanel: {
          title: "Client and server",
          items: [
            "Angular, RxJS, and interceptors",
            "Laravel Sanctum and HTTP-only cookies",
            "Profiles, community, and gamification"
          ],
          note: "Course project focused on a complete web app with client, server, and community flows."
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
        },
        {
          label: "Live Demo",
          href: "https://devconnect-free.vercel.app/login",
          variant: "secondary",
          external: true,
          iconKey: "external"
        }
      ]
    },
    {
      title: "Personal Portfolio",
      type: "Web project",
      description:
        "Portfolio built in Next.js to present my profile, projects, and visual criteria with a clear structure.",
      highlight:
        "Built to keep the content clear, with reusable sections and a strong visual hierarchy, without losing personality.",
      bullets: [
        "Implemented with Next.js App Router and TypeScript.",
        "Structured through typed content and reusable sections."
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      linkMode: "live-demo",
      status: "Active project",
      statusDetail: "Code available on GitHub",
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
          note: "Built to stay readable, maintainable, and easy to expand over time."
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
        }
      ]
    },
    {
      title: "Interactive JavaFX Fish Simulation",
      type: "Technical project",
      description:
        "JavaFX simulation built with ECS, procedural generation, and real-time behavior systems.",
      highlight:
        "It is probably the project that best reflects my intellectual curiosity, both in its visual side and in the integration of a quantum randomness API.",
      bullets: [
        "ECS architecture to separate entities, components, and systems.",
        "Live quantum randomness integrated through the ANU QRNG API."
      ],
      tags: ["Java", "JavaFX", "ECS Architecture", "ANU QRNG"],
      linkMode: "desktop-download",
      status: "Release v0.1.2",
      statusDetail: "Desktop download available",
      media: {
        poster: "/assets/fish-sim-thumb.jpg",
        posterAlt: "JavaFX fish simulation screenshot showing a field of fish entities and bubbles.",
        video: "/assets/fish-sim-preview.mp4",
        badgeLabel: "Preview from the desktop version",
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
            video: "/assets/fish-sim-entity-spread.mp4",
            objectPosition: "center center",
            label: "Movement field"
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
          label: "Download App",
          href: "https://github.com/Akashae98/JavaFX-Fish-Simulation/releases/tag/v0.1.2",
          variant: "secondary",
          external: true,
          iconKey: "download"
        }
      ]
    }
  ],
  timeline: [
    {
      title: "Development Intern",
      place: "Sinqro",
      date: "Feb 2026 - May 2026",
      iconKey: "cpu",
      details:
        "Worked on a multi-tenant restaurant SaaS platform, contributing to configurable frontend systems and product flows.",
      bullets: [
        "Worked on branding, theming, and configurable frontend architecture.",
        "Implemented multilingual support and SEO settings.",
        "Contributed to ordering and management workflows."
      ]
    },
    {
      title: "Higher Vocational Degree in Web Application Development (DAW)",
      place: "Instituto FOC",
      date: "2024 - 2026",
      iconKey: "code2",
      details: "Technical training in web development, databases, backend, frontend, and deployment."
    },
    {
      title: "Receptionist",
      place: "Oficinas El Triangle / Azertia",
      date: "2021 - 2025",
      iconKey: "briefcase",
      details:
        "Four years handling incidents, coordination, and autonomous work in a client-facing environment."
    },
    {
      title: "Degree in Philosophy",
      place: "UNED",
      date: "2019 - 2023",
      iconKey: "network",
      details: "Strong foundation in critical thinking, formal logic, and complex problem analysis."
    },
    {
      title: "Java Certifications",
      place: "Oracle Academy",
      date: "Additional training",
      iconKey: "code2",
      details: "Completed Java Fundamentals and Java Foundations through Oracle Academy."
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
