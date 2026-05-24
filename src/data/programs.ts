import type { Program } from "@/lib/types";

export const programs: Program[] = [
  {
    slug: "fullstack-engineering-bootcamp",
    title: "Fullstack Engineering Bootcamp",
    level: "Foundations",
    durationWeeks: 16,
    formats: ["Full-time, in-person", "Hybrid evening"],
    summary:
      "A career-launching bootcamp that takes motivated learners from first principles to shipping a deployed, production-quality fullstack app.",
    outcomes: [
      "Build and ship four portfolio projects",
      "Pair with a working engineer for the full 16 weeks",
      "Interview prep with our recruitment team",
      "Direct introductions to hiring partners",
    ],
    curriculum: [
      {
        module: "Foundations",
        topics: ["Modern JavaScript & TypeScript", "Git & collaboration", "How the web works"],
      },
      {
        module: "Frontend",
        topics: ["React & Next.js", "Accessibility", "Design systems"],
      },
      {
        module: "Backend",
        topics: ["APIs with Node", "Relational data modeling", "Auth & sessions"],
      },
      {
        module: "Ship it",
        topics: ["Cloud deploys", "Testing & CI", "Observability basics"],
      },
    ],
    nextCohort: "2026-06-09",
    priceUsd: 1800,
    hue: "blue",
  },
  {
    slug: "advanced-frontend-engineering",
    title: "Advanced Frontend Engineering",
    level: "Advanced",
    durationWeeks: 10,
    formats: ["Part-time, remote"],
    summary:
      "For working engineers who want to lead frontend architecture — design systems, performance budgets, and the messy parts of building for scale.",
    outcomes: [
      "Design a real component library, end to end",
      "Set up performance budgets that hold under pressure",
      "Lead an a11y audit and remediation",
      "Mentorship from senior platform engineers",
    ],
    curriculum: [
      {
        module: "Architecture",
        topics: ["State that scales", "Server components", "Bundling & caching"],
      },
      {
        module: "Design systems",
        topics: ["Tokens & theming", "Composable primitives", "Docs that get used"],
      },
      {
        module: "Performance",
        topics: ["Real-user metrics", "Image & font strategies", "Budgets in CI"],
      },
      {
        module: "Accessibility",
        topics: ["WCAG audit", "ARIA in practice", "Keyboard-first design"],
      },
    ],
    nextCohort: "2026-07-21",
    priceUsd: 1200,
    hue: "violet",
  },
  {
    slug: "data-engineering-foundations",
    title: "Data Engineering Foundations",
    level: "Intermediate",
    durationWeeks: 12,
    formats: ["Part-time, remote"],
    summary:
      "From SQL fundamentals to a warehouse you can trust — ideal for engineers and analysts moving into data platform roles.",
    outcomes: [
      "Model data for a real product domain",
      "Build a pipeline from raw events to dashboards",
      "Set up data quality tests and lineage",
      "Capstone: ship a portfolio-grade analytics project",
    ],
    curriculum: [
      {
        module: "SQL & modeling",
        topics: ["Advanced SQL", "Dimensional modeling", "Slowly-changing dimensions"],
      },
      {
        module: "Pipelines",
        topics: ["Batch with dbt", "Streaming basics", "Orchestration"],
      },
      {
        module: "Warehouses",
        topics: ["BigQuery", "Snowflake patterns", "Cost engineering"],
      },
      {
        module: "Quality",
        topics: ["dbt tests", "Lineage & metadata", "On-call for data"],
      },
    ],
    nextCohort: "2026-06-30",
    priceUsd: 1400,
    hue: "green",
  },
  {
    slug: "product-design-immersive",
    title: "Product Design Immersive",
    level: "Foundations",
    durationWeeks: 14,
    formats: ["Full-time, in-person"],
    summary:
      "A product-led design program that builds taste, craft, and a portfolio strong enough to land a first design role.",
    outcomes: [
      "Three case studies in your portfolio",
      "Critique culture with working designers",
      "Internship placement in your final month",
      "1:1 mentorship for six months post-grad",
    ],
    curriculum: [
      {
        module: "Craft",
        topics: ["Typography", "Layout & grids", "Interaction patterns"],
      },
      {
        module: "Process",
        topics: ["Research methods", "Concepting & critique", "Prototyping"],
      },
      {
        module: "Systems",
        topics: ["Design systems", "Handoff & engineering partnership", "Accessibility"],
      },
      {
        module: "Portfolio",
        topics: ["Case-study writing", "Presenting work", "Interview prep"],
      },
    ],
    nextCohort: "2026-08-04",
    priceUsd: 1700,
    hue: "amber",
  },
  {
    slug: "cloud-and-devops-launchpad",
    title: "Cloud & DevOps Launchpad",
    level: "Intermediate",
    durationWeeks: 10,
    formats: ["Part-time, remote"],
    summary:
      "Take your team's deployment game from manual to mature: CI/CD, infra-as-code, and a real on-call rotation playbook.",
    outcomes: [
      "Build CI/CD pipelines from scratch",
      "Provision infra with Terraform",
      "Set up logging, metrics, and alerts",
      "Run a tabletop incident response drill",
    ],
    curriculum: [
      {
        module: "CI/CD",
        topics: ["GitHub Actions", "Release strategies", "Secrets management"],
      },
      {
        module: "Cloud foundations",
        topics: ["AWS & GCP primitives", "Networking", "Cost basics"],
      },
      {
        module: "Infra as code",
        topics: ["Terraform", "Modules & state", "Drift detection"],
      },
      {
        module: "Operate",
        topics: ["Observability", "On-call & runbooks", "Postmortems"],
      },
    ],
    nextCohort: "2026-07-07",
    priceUsd: 1300,
    hue: "slate",
  },
  {
    slug: "ai-for-product-engineers",
    title: "AI for Product Engineers",
    level: "Advanced",
    durationWeeks: 8,
    formats: ["Part-time, remote"],
    summary:
      "A pragmatic, hands-on program for engineers shipping AI-powered features — with a focus on evals, guardrails, and shipping something users keep.",
    outcomes: [
      "Ship a production AI feature with evals",
      "Build retrieval & tool-use patterns",
      "Cost, latency, and quality budgets",
      "Capstone: a model-backed feature you own",
    ],
    curriculum: [
      {
        module: "Foundations",
        topics: ["LLM mental model", "Prompting that scales", "When not to use AI"],
      },
      {
        module: "Patterns",
        topics: ["Retrieval-augmented gen", "Tool use", "Agents (carefully)"],
      },
      {
        module: "Quality",
        topics: ["Eval design", "Guardrails", "Cost & latency budgets"],
      },
      {
        module: "Ship",
        topics: ["Observability", "Rollouts", "Feedback loops"],
      },
    ],
    nextCohort: "2026-06-16",
    priceUsd: 1100,
    hue: "rose",
  },
];
