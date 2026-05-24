import type { PortfolioProject } from "@/lib/types";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "moja-pay-merchant-os",
    client: "Moja Pay",
    title: "A merchant OS for 12,000 informal vendors",
    summary:
      "We rebuilt the merchant dashboard from a fragile prototype into a multi-tenant platform that now processes over $4M/month in payments.",
    industry: "Fintech",
    year: 2025,
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Stripe"],
    services: ["Web platform", "Platform engineering", "Design system"],
    hue: "blue",
    problem:
      "Moja Pay had outgrown their original dashboard — a single-tenant React app that crashed under load and was painful to extend. New merchant features were taking 6+ weeks to ship.",
    solution:
      "A six-month engagement: we shaped a clean multi-tenant model, rebuilt the dashboard with a typed design system, introduced a CI/CD pipeline, and stood up real observability. The original team kept shipping their own roadmap throughout.",
    outcomes: [
      { label: "Monthly processed volume", value: "$4.2M+" },
      { label: "Time-to-ship for new features", value: "~10 days" },
      { label: "Page load p95", value: "1.4s" },
      { label: "Uptime since relaunch", value: "99.98%" },
    ],
    highlight: true,
  },
  {
    slug: "kazi-health-records",
    client: "Kazi Health",
    title: "Offline-first electronic health records for clinics",
    summary:
      "A clinic-grade EHR that syncs the moment a patient walks back into network range — built for ground-floor realities, not enterprise wishlists.",
    industry: "Health",
    year: 2025,
    stack: ["React Native", "TypeScript", "Postgres", "PowerSync"],
    services: ["Mobile app", "Data architecture"],
    hue: "green",
    problem:
      "Kazi Health's clinic partners often work without reliable internet. Their existing web tool simply didn't function in those conditions, and paper records were costing real lives.",
    solution:
      "We designed an offline-first mobile app with a local-first data model, conflict resolution on sync, and a clinician-friendly UI shaped by two months of in-clinic shadowing.",
    outcomes: [
      { label: "Clinics deployed", value: "38" },
      { label: "Patient records digitized", value: "210,000+" },
      { label: "Median consult time", value: "−34%" },
    ],
    highlight: true,
  },
  {
    slug: "savanna-logistics-control-tower",
    client: "Savanna Logistics",
    title: "A control tower for cross-border freight",
    summary:
      "Real-time visibility on truck movements, customs status, and ETAs across five borders — replacing a WhatsApp-and-spreadsheets workflow.",
    industry: "Logistics",
    year: 2024,
    stack: ["Next.js", "Mapbox", "Kafka", "TimescaleDB"],
    services: ["Web platform", "Data & AI"],
    hue: "amber",
    problem:
      "Operations leads were stitching together truck location, customs paperwork, and driver check-ins from at least four tools. ETAs were guesses.",
    solution:
      "A single operations dashboard with live truck positions, a customs workflow engine, and ML-assisted ETA forecasts. We embedded with their ops team for two weeks before writing the spec.",
    outcomes: [
      { label: "ETA accuracy", value: "±22 min" },
      { label: "Manual check-ins eliminated", value: "~3,000/week" },
      { label: "Driver app adoption", value: "94%" },
    ],
    highlight: true,
  },
  {
    slug: "amani-microlending-mvp",
    client: "Amani",
    title: "A microlending MVP shipped in eight weeks",
    summary:
      "From whiteboard to a live, regulated micro-loan product underwritten against mobile money history — built end-to-end by a focused sprint pod.",
    industry: "Fintech",
    year: 2024,
    stack: ["Next.js", "TypeScript", "Prisma", "Vercel"],
    services: ["MVP sprint", "Compliance"],
    hue: "violet",
    problem:
      "Amani had a credit thesis and a regulatory license — but no product. They needed something live in two months to start collecting real underwriting data.",
    solution:
      "An eight-week MVP sprint with a designer, two engineers, and a delivery lead. Weekly demos, a fixed scope, and a clean handover doc when we wrapped.",
    outcomes: [
      { label: "Time from kickoff to live", value: "8 weeks" },
      { label: "Loans disbursed in pilot", value: "1,200" },
      { label: "Default rate vs. target", value: "−40%" },
    ],
  },
  {
    slug: "nuru-edtech-marketplace",
    client: "Nuru",
    title: "An edtech marketplace for parents and tutors",
    summary:
      "A two-sided marketplace with scheduling, payments, and a parent-trust scoring model that rewards tutors who actually show up.",
    industry: "Education",
    year: 2024,
    stack: ["Next.js", "Supabase", "Stripe"],
    services: ["Web platform", "Mobile app"],
    hue: "rose",
    problem:
      "Nuru's tutors and parents were transacting on WhatsApp. There was no payment escrow, no scheduling, and no way to surface reliable tutors.",
    solution:
      "We built the marketplace in two phases: a web platform for parents and a tutor-side mobile app. The trust score model was co-designed with both audiences.",
    outcomes: [
      { label: "Bookings in first quarter", value: "8,500+" },
      { label: "Tutor retention (90-day)", value: "71%" },
      { label: "Repeat parent rate", value: "62%" },
    ],
  },
  {
    slug: "kifaru-internal-tooling",
    client: "Kifaru",
    title: "An internal tool suite for a 400-person ops team",
    summary:
      "Replaced six spreadsheets and three Retool dashboards with a single, role-aware internal platform — and made the ops team faster on day one.",
    industry: "Operations",
    year: 2023,
    stack: ["Next.js", "TypeScript", "Postgres", "Auth0"],
    services: ["Web platform", "Design system"],
    hue: "slate",
    problem:
      "Kifaru's operations team was losing 9+ hours per week per analyst to context switching. The tools didn't talk to each other; permissions were ad-hoc.",
    solution:
      "A modular internal platform with shared auth, audit logging, and a design system the ops team can extend themselves with low-code blocks.",
    outcomes: [
      { label: "Time saved per analyst / week", value: "7h" },
      { label: "Tools consolidated", value: "9 → 1" },
      { label: "Audit-trail coverage", value: "100%" },
    ],
  },
];
