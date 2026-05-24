import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { programs } from "@/data/programs";
import { formatDate } from "@/lib/utils";

export function FeaturedPrograms() {
  const featured = programs.slice(0, 3);

  return (
    <Section tone="canvas" spacing="lg">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow tone="accent">Now enrolling</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Programs designed to make you genuinely employable.
            </h2>
          </div>
          <Button
            href="/programs"
            variant="outline"
            size="md"
            iconRight={<ArrowRight className="size-4" />}
          >
            All programs
          </Button>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3" amount={0.1}>
          {featured.map((p) => (
            <StaggerItem key={p.slug} as="div">
              <Card hover className="flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <Badge tone="accent" size="md">
                    <Sparkles className="size-3" />
                    {p.level}
                  </Badge>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                    <Clock className="size-3.5" />
                    {p.durationWeeks} weeks
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.summary}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                  {p.outcomes.slice(0, 3).map((o) => (
                    <li key={o} className="flex items-start gap-2.5">
                      <span
                        aria-hidden
                        className="mt-2 inline-block size-1 rounded-full bg-accent"
                      />
                      {o}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="flex items-center justify-between border-t border-border pt-4 text-xs">
                    <div>
                      <p className="text-eyebrow text-muted">Next cohort</p>
                      <p className="mt-1 font-medium text-ink-soft">
                        {formatDate(p.nextCohort)}
                      </p>
                    </div>
                    <Link
                      href={`/programs/${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                      Details
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
