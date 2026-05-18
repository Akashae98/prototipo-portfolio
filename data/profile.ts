export type ProjectActionVariant = "primary" | "secondary" | "ghost";

export type ProjectActionIconKey = "github" | "download" | "external";

export type ContactIconKey = "mail" | "github" | "linkedin";

export type SkillGroupIconKey = "code2" | "database" | "network" | "terminal" | "sparkles";

export type TimelineIconKey = "briefcase" | "code2" | "cpu" | "network";

export type ProjectAction = {
  label: string;
  href: string;
  variant?: ProjectActionVariant;
  external?: boolean;
  iconKey: ProjectActionIconKey;
};

export type ProjectMediaFrame = {
  src: string;
  alt: string;
  video?: string;
  objectPosition?: string;
  label: string;
};

export type ProjectMediaDetailPanel = {
  title: string;
  items: string[];
  note: string;
};

export type ProjectMedia = {
  poster: string;
  posterAlt: string;
  video?: string;
  badgeLabel?: string;
  frames?: ProjectMediaFrame[];
  detailPanel?: ProjectMediaDetailPanel;
};

export type ProjectLinkMode = "live-demo" | "desktop-download" | "in-progress";

export type PortfolioContent = {
  metadata: {
    title: string;
    description: string;
  };
  ui: {
    localeSwitcherLabel: string;
  };
  profile: {
    name: string;
    legalName: string;
    role: string;
    headline: string;
    stackLine: string;
    email: string;
    github: string;
    linkedin: string;
    cv: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  sectionCopy: {
    hero: {
      label: string;
      rightLabel: string;
      viewProjectsLabel: string;
      downloadCvLabel: string;
      illustrationCaption: string;
    };
    about: {
      label: string;
      title: string;
      intro: string;
      focusLabel: string;
      focus: string;
    };
    skills: {
      label: string;
      title: string;
      intro: string;
    };
    projects: {
      label: string;
      title: string;
      intro: string;
    };
    experience: {
      label: string;
      title: string;
      intro: string;
    };
    contact: {
      label: string;
      title: string;
      intro: string;
      body: string;
      footer: string;
      downloadCvLabel: string;
    };
  };
  about: string[];
  currentLearning: {
    title: string;
    text: string;
  };
  developerSignals: {
    label: string;
    title: string;
    intro: string;
    building: {
      title: string;
      text: string;
    };
    highlight: {
      label: string;
      title: string;
      text: string;
    };
    stats: Array<{
      label: string;
      value: string;
    }>;
  };
  skillGroups: Array<{
    title: string;
    iconKey: SkillGroupIconKey;
    items: string[];
  }>;
  projects: Array<{
    title: string;
    type: string;
    description: string;
    highlight: string;
    bullets: string[];
    tags: string[];
    linkMode: ProjectLinkMode;
    status: string;
    statusDetail: string;
    media: ProjectMedia;
    actions: ProjectAction[];
  }>;
  timeline: Array<{
    title: string;
    place: string;
    date: string;
    iconKey: TimelineIconKey;
    details: string;
    bullets?: string[];
  }>;
  contactLinks: Array<{
    label: string;
    href: string;
    value: string;
    iconKey: ContactIconKey;
  }>;
};
