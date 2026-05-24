import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTABand } from "@/components/home/CTABand";
import { services, processSteps } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software agency services from TechGetAfrica — web platforms, mobile apps, MVP sprints, dedicated teams, platform engineering, and data & AI.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Software agency"
        title={
          <>
            We build software the way good in-house teams
            <span className="text-primary"> wish they could.</span>
          </>
        }
        lede="MVP sprints, embedded pods, platform work — engineered for the long run. We pair senior craft with the speed of a small, accountable team."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" size="md" iconRight={<ArrowRight className="size-4" />}>
            Start a conversation
          </Button>
          <Button href="/portfolio" variant="outline" size="md" iconRight={<ArrowUpRight className="size-4" />}>
            See our work
          </Button>
        </div>
      </PageHeader>

      <Section tone="canvas" spacing="lg">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Six things we do well, often together.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We work in flexible shapes — a focused MVP sprint, an embedded pod
              for a quarter, a long-running platform engagement. The shape
              follows the work, not the other way around.
            </p>
          </Reveal>

          <Stagger
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            amount={0.08}
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.slug} as="div">
                  <Card hover className="flex h-full flex-col p-7">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary-soft text-primary ring-1 ring-primary/15">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-primary">
                      {s.short}
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {s.description}
                    </p>
                    <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <span
                            aria-hidden
                            className="mt-2 inline-block size-1 rounded-full bg-muted-soft"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      <Section tone="soft" spacing="lg" id="process">
        <Container>
          <Reveal className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow tone="accent">How we work</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                A predictable process. None of the theatre.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Every engagement runs through the same five phases — sized to
                the scope. You always know what week you&rsquo;re in, what
                you&rsquo;ll see Friday, and who owns the call.
              </p>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="mt-8"
                iconRight={<ArrowRight className="size-4" />}
              >
                Brief us on a project
              </Button>
            </div>

            <ol className="relative lg:col-span-7">
              <span
                aria-hidden
                className="absolute bottom-2 left-[15px] top-2 w-px bg-border-strong"
              />
              {processSteps.map((step, i) => (
                <li key={step.number} className="relative pb-10 pl-12 last:pb-0">
                  <span
                    className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full bg-surface ring-1 ring-border-strong text-xs font-display font-semibold text-primary"
                    aria-hidden
                  >
                    {step.number}
                  </span>
                  <h3 className="font-display text-lg font-semibold leading-tight tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {step.description}
                  </p>
                  {i === processSteps.length - 1 && (
                    <span className="sr-only">End of process</span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </Section>

      <Section tone="canvas" spacing="lg">
        <Container>
          <Reveal className="grid items-end gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Eyebrow>Engagement shapes</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                Pick the shape that matches the work.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Not sure which? Let&rsquo;s talk
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-3" amount={0.1}>
            {[
              {
                shape: "MVP Sprint",
                timeline: "6–10 weeks",
                team: "1 designer · 2 engineers · 1 lead",
                description:
                  "A fixed scope, a Friday-demo cadence, and a working product at the end. Ideal for validating a hypothesis.",
              },
              {
                shape: "Embedded Pod",
                timeline: "3–12 months",
                team: "2–8 people, your shape",
                description:
                  "A self-managing pod that joins your sprint cadence and standups. We hire for fit with your existing team.",
              },
              {
                shape: "Platform Engagement",
                timeline: "Open-ended",
                team: "Senior engineering + advisory",
                description:
                  "For when the foundations matter as much as the features — CI/CD, infra, observability, architecture coaching.",
              },
            ].map((shape) => (
              <StaggerItem key={shape.shape} as="div">
                <Card variant="outlined" className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                      {shape.shape}
                    </h3>
                    <span className="text-eyebrow text-muted">
                      {shape.timeline}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-primary">{shape.team}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {shape.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
