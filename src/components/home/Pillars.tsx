import Link from "next/link";
import { ArrowRight, GraduationCap, Hammer, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const pillars = [
  {
    eyebrow: "01 · Train",
    icon: GraduationCap,
    title: "Programs that get you working",
    description:
      "Cohort-based bootcamps and advanced programs in engineering, design, and data — built to make graduates job-ready, not just certified.",
    bullets: [
      "Live cohorts with senior mentors",
      "Portfolio projects you can defend",
      "Direct intros to hiring partners",
    ],
    href: "/programs",
    cta: "Browse programs",
    hue: "text-primary",
    halo: "bg-primary-soft text-primary ring-primary/15",
  },
  {
    eyebrow: "02 · Build",
    icon: Hammer,
    title: "Software, shipped with care",
    description:
      "MVP sprints, dedicated pods, and platform engineering for ambitious teams. We work the way good in-house teams do — only faster.",
    bullets: [
      "Fixed-scope MVP sprints",
      "Embedded engineering pods",
      "Platform, cloud, and AI work",
    ],
    href: "/services",
    cta: "See our services",
    hue: "text-ink",
    halo: "bg-ink/95 text-canvas ring-ink/10",
  },
  {
    eyebrow: "03 · Place",
    icon: Briefcase,
    title: "The right people, both ways",
    description:
      "We match engineers, designers, and operators with companies who treat them well — and we coach candidates through the entire process.",
    bullets: [
      "Vetted talent, no spray-and-pray",
      "Salary benchmarking included",
      "Six-month post-placement support",
    ],
    href: "/recruitment",
    cta: "How recruitment works",
    hue: "text-accent",
    halo: "bg-accent-soft text-accent ring-accent/15",
  },
];

export function Pillars() {
  return (
    <Section spacing="lg" tone="canvas" id="pillars">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="primary" className="justify-center">
            One company. Three lines of work.
          </Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            We don&rsquo;t split the company in three because the three
            lines feed each other.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The signal our recruiters get from interviews shapes our curriculum.
            Our agency work shows our trainees what production really looks like.
            Our graduates strengthen the talent pool we place from.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3" amount={0.1}>
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title} as="div">
                <Card hover className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex size-10 items-center justify-center rounded-lg ring-1 ${p.halo}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="text-eyebrow text-muted">{p.eyebrow}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {p.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span
                          aria-hidden
                          className="mt-2 inline-block size-1 rounded-full bg-muted-soft"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={p.href}
                    className={`mt-7 inline-flex items-center gap-1.5 text-sm font-medium ${p.hue} hover:underline underline-offset-4`}
                  >
                    {p.cta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
