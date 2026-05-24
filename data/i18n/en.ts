import type { PortfolioContent } from "@/data/profile";

export const en: PortfolioContent = {
  metadata: {
    title: "Carol Vilar | Junior Web Developer",
    description:
      "Portfolio of Carol Vilar, a junior web developer with hands-on experience across frontend, backend, and digital product work."
  },
  ui: {
    localeSwitcherLabel: "Language selector"
  },
  profile: {
    name: "Carol Vilar",
    legalName: "Carolina Vilar Rodenas",
    role: "Junior Web Developer",
    headline: "I build web applications. I move between frontend and backend, and I like understanding what I build.",
    stackLine: "Angular / Laravel / Java / SQL / REST APIs",
    email: "carolvr8@gmail.com",
    github: "https://github.com/Akashae98",
    linkedin: "https://www.linkedin.com/in/carolina-vilar-rodenas-/",
    cv: "/assets/CV-Carolina-Vilar-Rodenas.pdf"
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
      downloadCvLabel: "Download CV",
      illustrationCaption: "Original illustration, reworked in 2026"
    },
    about: {
      label: "Profile",
      title: "I like understanding how things work.",
      intro:
        "I learn quickly, like understanding how things are built, and feel comfortable moving between interface, logic, and data depending on what the project needs.",
      focusLabel: "Right now",
      focus:
        "I am looking for a team where I can keep growing, work across different parts of the product, and learn by solving real problems."
    },
    skills: {
      label: "Stack",
      title: "Tools I work with.",
      intro:
        "Technologies I have used in real and personal projects, from interface and business logic to APIs and databases."
    },
    projects: {
      label: "Projects",
      title: "Projects that explain best how I work.",
      intro:
        "This is where it is easiest to see how I think, what kind of problems interest me, and how I approach them."
    },
    experience: {
      label: "Experience",
      title: "Experience and training.",
      intro:
        "Recent SaaS work, technical training, and a very hands-on way of learning."
    },
    contact: {
      label: "Contact",
      title: "Open to new opportunities.",
      intro: "",
      body:
        "I am especially interested in teams where I can work across different layers of the product, stay close to the problem, and keep growing as a developer.",
      footer: "Built with Next.js, TypeScript and Tailwind CSS.",
      downloadCvLabel: "Download CV"
    }
  },
  about: [
    "I have worked on SaaS product features and touched frontend, backend, and data across internships, coursework, and personal projects.",
    "My background in philosophy shaped the way I work: I tend to structure problems carefully, communicate clearly, and not settle for the first solution that happens to work.",
    "I especially enjoy projects where I need to understand what is going on, think through a sensible solution, and leave code that another person can follow without friction."
  ],
  currentLearning: {
    title: "Currently Learning",
    text: "Java, Spring Boot, and system design, while still keeping frontend and product work in view."
  },
  developerSignals: {
    label: "Now",
    title: "What I am focused on right now.",
    intro:
      "A quick snapshot of what I am learning and building at this stage.",
    building: {
      title: "In progress",
      text:
        "I am refining the portfolio, going deeper into Java, and learning Spring Boot to broaden my technical range and feel more comfortable working across the whole stack."
    },
    highlight: {
      label: "Highlight",
      title: "JavaFX Fish Simulation",
      text:
        "Desktop simulation with procedural behavior, ECS structure, collision systems, and ANU QRNG integration."
    },
    stats: [
      { label: "Repositories", value: "Production and learning work" },
      { label: "Technologies", value: "Angular / Laravel / Java / SQL / REST APIs" },
      { label: "Current focus", value: "Java, Spring Boot, and end-to-end web applications" }
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
        "ECS Architecture",
        "Procedural Generation",
        "RxJS and Interceptors",
        "Sanctum Authentication",
        "Multi-tenant SaaS"
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
        "More than a CRUD app, this project let me work on architecture, behavior, and real-time systems.",
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
          label: "Download App",
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
        "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS to present my profile and projects in a clear, thoughtful, and easy-to-browse way.",
      highlight:
        "The goal here was to organize the content well, build reusable components, and avoid an overdesigned interface.",
      bullets: [
        "Implemented with Next.js App Router and TypeScript.",
        "Structured content through reusable data objects and section components.",
        "Built as a responsive single-page experience with refined motion."
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
          note: "Built to stay readable, easy to maintain, and simple to expand over time."
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
      title: "DevConnect",
      type: "Final course project",
      description:
        "Social network for the IT sector developed as a DAW final project, with posts, comments, likes, user profiles, and an achievement system.",
      highlight:
        "Beyond the social features, the project let me work on client-server separation, authentication, and real community flows inside a complete web application.",
      bullets: [
        "Developed the frontend with Angular, TypeScript, RxJS, and interceptors to manage flows and API communication.",
        "Built the backend with Laravel, including authentication with Sanctum and HTTP-only cookies.",
        "Built as an SPA with a PostgreSQL database.",
        "Worked collaboratively with Git and GitHub using a team development workflow."
      ],
      tags: ["Angular", "RxJS", "Laravel", "PostgreSQL", "SPA"],
      linkMode: "in-progress",
      status: "DAW final project",
      statusDetail: "Frontend available on GitHub",
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
          note: "Course project focused on profiles, community, and interaction inside a layered web application."
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
      title: "Development Intern",
      place: "Sinqro",
      date: "Feb 2026 - May 2026",
      iconKey: "cpu",
      details:
        "Worked on a multi-tenant restaurant SaaS platform, contributing to configurable frontend systems, multilingual support, SEO settings, and ordering workflows.",
      bullets: [
        "Developed features for a multi-tenant restaurant SaaS platform.",
        "Worked on branding, theming, and configurable frontend architecture.",
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
        "Four years handling incidents, coordinating across departments, and working independently in a client-facing environment."
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
