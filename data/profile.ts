import {
  Briefcase,
  Code2,
  Cpu,
  Database,
  Github,
  Linkedin,
  Mail,
  Network,
  Sparkles,
  Terminal
} from "lucide-react";

export const profile = {
  name: "Carol Vilar",
  legalName: "Carolina Vilar Rodenas",
  role: "Junior Full-Stack Developer",
  headline: "Focused on backend systems, APIs and scalable web applications.",
  stackLine: "Angular / Laravel / Java / SQL / REST APIs",
  email: "carolvr8@gmail.com",
  github: "https://github.com/Akashae98",
  linkedin: "https://www.linkedin.com/in/carolina-vilar-rodenas-/",
  cv: "/assets/CV-Carolina-Vilar-Rodenas.pdf"
};

export const navigation = [
  { label: "Profile", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const sectionCopy = {
  hero: {
    label: "Backend / APIs / SaaS",
    rightLabel: "Full-Stack Systems",
    bottomLabel: "Backend / APIs / SaaS"
  },
  about: {
    label: "Profile",
    title: "Analytical thinking, practical software.",
    intro:
      "A focused profile for teams looking for someone who can understand a product, learn quickly and contribute to real codebases.",
    focusLabel: "Current focus",
    focus:
      "Growing as a full-stack developer in a team where I can contribute to real products, write maintainable code and keep improving my backend and frontend skills."
  },
  skills: {
    label: "Skills",
    title: "A practical stack for web products.",
    intro:
      "Core technologies for full-stack SaaS work, plus technical project skills that show architecture and problem solving."
  },
  projects: {
    label: "Projects",
    title: "Technical projects with clear engineering value.",
    intro:
      "A small selection focused on architecture, implementation decisions and real repositories."
  },
  experience: {
    label: "Experience",
    title: "Recent product experience and transferable skills.",
    intro:
      "SaaS work, web development training and analytical background presented as practical engineering value."
  },
  contact: {
    label: "Contact",
    title: "Open to full-stack development opportunities.",
    intro:
      "Available for internships, entry-level roles and teams building real web products.",
    body:
      "Open to full-stack development opportunities, internships and teams building real web products.",
    footer: "Full-Stack Development / Backend / SaaS / APIs"
  }
};

export const about = [
  "Full-stack developer with hands-on experience building features for SaaS products and a strong foundation in web development, backend systems and databases.",
  "My background in philosophy shaped the way I approach software: structured thinking, clear communication and the ability to analyse complex problems before implementing solutions.",
  "I enjoy understanding how systems work internally and building software that stays clear and maintainable as complexity grows.",
  "I am especially interested in backend systems, APIs and technical projects that combine architecture, interaction and problem solving."
];

export const currentLearning = {
  title: "Currently Learning",
  text: "Backend architecture, scalable systems, AI tooling and advanced Java development."
};

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["Angular", "TypeScript", "HTML", "CSS", "Responsive UI"]
  },
  {
    title: "Backend",
    icon: Database,
    items: ["Laravel", "Java", "PHP", "REST APIs", "SQL"]
  },
  {
    title: "Databases",
    icon: Network,
    items: ["MySQL", "PostgreSQL", "Relational databases", "SQL queries", "Database design"]
  },
  {
    title: "Tools",
    icon: Terminal,
    items: ["Git", "GitHub", "Docker", "Postman"]
  },
  {
    title: "Technical Projects",
    icon: Sparkles,
    items: [
      "JavaFX",
      "ECS Architecture",
      "Interactive Simulation",
      "External API Integration",
      "Procedural Generation"
    ]
  }
];

export const projects = [
  {
    title: "Interactive JavaFX Fish Simulation",
    type: "Technical project",
    description:
      "Interactive JavaFX simulation built with ECS architecture, procedural entity generation, collision systems and real quantum randomness integration through the ANU QRNG API.",
    highlight:
      "Focused on architecture, simulation systems and real-time interaction rather than traditional CRUD application design.",
    bullets: [
      "Designed an Entity Component System architecture.",
      "Implemented procedural fish generation and movement logic.",
      "Built collision and interaction systems in JavaFX.",
      "Integrated real quantum randomness through the ANU QRNG API.",
      "Structured the project using object-oriented programming principles."
    ],
    tags: [
      "Java",
      "JavaFX",
      "ECS Architecture",
      "Procedural Generation",
      "Collision Systems",
      "REST API",
      "ANU QRNG"
    ],
    status: "Featured",
    github: "https://github.com/Akashae98/JavaFX-Fish-Simulation",
    demo: "#contact"
  },
  {
    title: "Personal Portfolio",
    type: "Web project",
    description:
      "Personal portfolio built with Next.js, TypeScript and Tailwind CSS, designed to present technical experience, projects and professional profile with a distinctive visual identity.",
    highlight:
      "Built as a responsive single-page portfolio with a custom visual system, structured content and subtle motion.",
    bullets: [
      "Implemented with Next.js App Router and TypeScript.",
      "Structured content through reusable data objects and section components.",
      "Designed a custom visual interface without hiding recruiter-critical information."
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive UI"],
    status: "Current",
    github: "https://github.com/Akashae98/prototipo-portfolio",
    demo: "#hero"
  }
];

export const timeline = [
  {
    title: "Full-Stack Developer Intern",
    place: "Sinqro",
    date: "Feb 2026 - May 2026",
    icon: Cpu,
    details:
      "Worked on a scalable multi-tenant restaurant SaaS platform, contributing to configurable frontend systems, multilingual support, SEO settings and ordering workflows.",
    bullets: [
      "Developed features for a multi-tenant restaurant SaaS platform.",
      "Worked on configurable frontend architecture, branding and theming.",
      "Implemented multilingual support and SEO configuration.",
      "Collaborated on ordering and management workflows.",
      "Worked with Angular, Laravel, SQL and REST APIs."
    ]
  },
  {
    title: "Higher Vocational Degree in Web Application Development (DAW)",
    place: "Instituto FOC",
    date: "2024 - 2026",
    icon: Code2,
    details:
      "Training in programming, databases, backend development, frontend development and web application deployment."
  },
  {
    title: "Receptionist",
    place: "Oficinas El Triangle / Azertia",
    date: "2021 - 2025",
    icon: Briefcase,
    details:
      "Developed communication, autonomy, incident resolution and coordination skills in a client-facing environment."
  },
  {
    title: "Degree in Philosophy",
    place: "UNED",
    date: "2019 - 2023",
    icon: Network,
    details:
      "Focused on critical thinking, formal logic, argumentation and analysis of complex problems."
  },
  {
    title: "Java Certifications",
    place: "Oracle Academy",
    date: "Additional training",
    icon: Code2,
    details:
      "Award of Course Completion in Java Fundamentals and Award of Achievement in Java Foundations."
  }
];

export const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email, icon: Mail },
  { label: "GitHub", href: profile.github, value: "github.com/Akashae98", icon: Github },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    value: "linkedin.com/in/carolina-vilar-rodenas",
    icon: Linkedin
  }
];
