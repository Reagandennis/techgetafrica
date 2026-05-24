export type SiteNavLink = {
  label: string;
  href: string;
  description?: string;
};

export const siteConfig = {
  name: "TechGetAfrica",
  shortName: "TGA",
  tagline: "Train. Build. Place.",
  description:
    "TechGetAfrica trains world-class engineers, builds software for ambitious teams, and places talent into roles that matter — across the continent and beyond.",
  url: "https://techgetafrica.com",
  twitter: "@techgetafrica",
  email: "hello@techgetafrica.com",
  phone: "+254 700 000 000",
  locations: ["Nairobi", "Lagos", "Cape Town", "Remote-first"],
  social: {
    linkedin: "https://www.linkedin.com/company/techgetafrica",
    twitter: "https://twitter.com/techgetafrica",
    github: "https://github.com/techgetafrica",
    youtube: "https://youtube.com/@techgetafrica",
  },
  primaryNav: [
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Recruitment", href: "/recruitment" },
    { label: "Jobs", href: "/jobs" },
    { label: "Programs", href: "/programs" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ] satisfies SiteNavLink[],
  footerNav: {
    Build: [
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "How we work", href: "/services#process" },
    ],
    Place: [
      { label: "For employers", href: "/recruitment#employers" },
      { label: "For candidates", href: "/recruitment#candidates" },
      { label: "Open roles", href: "/jobs" },
    ],
    Train: [
      { label: "Programs", href: "/programs" },
      { label: "Career outcomes", href: "/programs#outcomes" },
      { label: "Blog", href: "/blog" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/contact#privacy" },
    ],
  } satisfies Record<string, SiteNavLink[]>,
} as const;

export type SiteConfig = typeof siteConfig;
