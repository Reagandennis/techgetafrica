import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
};

export type PortfolioProject = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  industry: string;
  year: number;
  stack: string[];
  services: string[];
  hue: "blue" | "amber" | "green" | "slate" | "violet" | "rose";
  problem: string;
  solution: string;
  outcomes: { label: string; value: string }[];
  highlight?: boolean;
};

export type Program = {
  slug: string;
  title: string;
  level: "Foundations" | "Intermediate" | "Advanced";
  durationWeeks: number;
  formats: string[];
  summary: string;
  outcomes: string[];
  curriculum: { module: string; topics: string[] }[];
  nextCohort: string;
  priceUsd: number;
  hue: "blue" | "amber" | "green" | "slate" | "violet" | "rose";
};

export type Job = {
  slug: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Contract" | "Part-time" | "Internship";
  remote: "Remote" | "Hybrid" | "On-site";
  role: "Engineering" | "Design" | "Product" | "Data" | "DevOps" | "Leadership";
  salaryRange: string;
  postedAt: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  author: { name: string; role: string };
  tags: string[];
  hue: "blue" | "amber" | "green" | "slate" | "violet" | "rose";
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  audience: "Employer" | "Candidate" | "Learner";
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  location: string;
  hue: "blue" | "amber" | "green" | "slate" | "violet" | "rose";
};

export type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Logo = {
  name: string;
  monogram: string;
};
