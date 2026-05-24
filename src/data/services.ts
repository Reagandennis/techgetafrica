import {
  Code2,
  Smartphone,
  Rocket,
  Users,
  Cloud,
  LineChart,
} from "lucide-react";
import type { Service, ProcessStep } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "web-platforms",
    title: "Web platforms",
    short: "Bespoke web apps built to scale.",
    description:
      "Production-grade web applications — from internal tools to customer-facing platforms — engineered with modern stacks and a long shelf life.",
    icon: Code2,
    bullets: [
      "Next.js, TypeScript, React",
      "Design systems & component libraries",
      "Performance & accessibility baked in",
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile apps",
    short: "iOS and Android, shipped properly.",
    description:
      "Native and cross-platform mobile experiences for fintech, health, logistics, and consumer products across the continent.",
    icon: Smartphone,
    bullets: [
      "React Native & Flutter",
      "Offline-first patterns",
      "App store launch support",
    ],
  },
  {
    slug: "mvp-sprints",
    title: "MVP sprints",
    short: "Validate an idea in six to ten weeks.",
    description:
      "A focused sprint to turn a hypothesis into a working product, with a clear scope, weekly demos, and a roadmap you actually own.",
    icon: Rocket,
    bullets: [
      "Scoped, fixed-timeline engagements",
      "Designer + 2 engineers on staff",
      "User-tested before launch",
    ],
  },
  {
    slug: "dedicated-teams",
    title: "Dedicated teams",
    short: "Embedded engineering pods.",
    description:
      "A vetted pod of engineers, designers, and a delivery lead that integrates into your sprint cadence and stays for the long run.",
    icon: Users,
    bullets: [
      "2–8 person squads",
      "Your tooling, your standards",
      "Quarterly business reviews",
    ],
  },
  {
    slug: "platform-engineering",
    title: "Platform & cloud",
    short: "Infrastructure that you can sleep on.",
    description:
      "Cloud architecture, CI/CD, observability, and DevSecOps — set up so your team ships every day without firefighting.",
    icon: Cloud,
    bullets: [
      "AWS, GCP, Azure",
      "Terraform, GitHub Actions",
      "SOC2-ready foundations",
    ],
  },
  {
    slug: "data-and-ai",
    title: "Data & AI",
    short: "From dashboards to model-backed features.",
    description:
      "Analytics pipelines, customer dashboards, and pragmatic AI features that move metrics — not headlines.",
    icon: LineChart,
    bullets: [
      "Warehouse design & modeling",
      "LLM-powered features with guardrails",
      "Real-time dashboards",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We spend a structured week understanding your business, users, and success metrics — no slide deck theatre.",
  },
  {
    number: "02",
    title: "Shape",
    description:
      "Designers and engineers co-write the brief, build clickable prototypes, and align on a tight scope before any production code.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Two-week sprints, demos every Friday, a single delivery lead as your point of contact. You see progress, not promises.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We ship with observability, runbooks, and load tests. Day-one isn't a leap of faith — it's a Tuesday.",
  },
  {
    number: "05",
    title: "Operate",
    description:
      "We stay on as long as you want us to — for warranty support, roadmap iteration, or a long-term embedded squad.",
  },
];
