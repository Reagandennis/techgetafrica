import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, GraduationCap, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTABand } from "@/components/home/CTABand";
import { programs } from "@/data/programs";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Cohort-based programs in engineering, design, and data — built to get learners genuinely job-ready, with direct intros to hiring partners.",
};

const levelTone: Record<string, "primary" | "accent" | "neutral"> = {
  Foundations: "primary",
  Intermediate: "neutral",
  Advanced: "accent",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs · Now enrolling"
        title={
          <>
            Cohort-based programs to make you
            <span className="text-primary"> genuinely employable.</span>
          </>
        }
        lede="No on-demand video pile. Live cohorts, senior mentors, real portfolio projects — and direct intros to companies looking to hire."
      >
        <div className="flex flex-wrap gap-3">
          <Button
            href="#outcomes"
            size="md"
            iconLeft={<GraduationCap className="size-4" />}
          >
            Career outcomes
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="md"
            iconRight={<ArrowRight className="size-4" />}
          >
            Talk to admissions
          </Button>
        </div>
      </PageHeader>

      <Section tone="canvas" spacing="lg">
        <Container>
          <Stagger
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            amount={0.08}
          >
            {programs.map((p) => (
              <StaggerItem key={p.slug} as="div">
                <Card hover className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <Badge tone={levelTone[p.level]} size="md">
                      <Sparkles className="size-3" />
                      {p.level}
                    </Badge>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                      <Clock className="size-3.5" />
                      {p.durationWeeks} weeks
                    </span>
                  </div>

                  <h2 className="mt-6 font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.formats.map((f) => (
                      <Badge key={f} tone="neutral">
                        {f}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="flex items-center justify-between border-t border-border pt-4 text-xs">
                      <div>
                        <p className="text-eyebrow text-muted">Next cohort</p>
                        <p className="mt-1 font-medium text-ink-soft">
                          {formatDate(p.nextCohort)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-eyebrow text-muted">Tuition</p>
                        <p className="mt-1 font-medium text-ink-soft">
                          ${p.priceUsd.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/programs/${p.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                      Curriculum & details
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section tone="soft" spacing="lg" id="outcomes">
        <Container>
          <Reveal className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow tone="accent">Career outcomes</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                We measure ourselves by what happens after graduation.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Completion rates are easy to fake. Job outcomes aren&rsquo;t.
                We publish ours every quarter — and we&rsquo;d rather you
                compare us to other programs honestly.
              </p>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="mt-8"
                iconRight={<ArrowRight className="size-4" />}
              >
                Get the placement report
              </Button>
            </div>

            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border ring-1 ring-border lg:col-span-7">
              {[
                { v: "87%", l: "Cohort completion rate" },
                { v: "92%", l: "Placed within 180 days" },
                { v: "$42k", l: "Median first-year salary" },
                { v: "4.8/5", l: "Graduate NPS" },
              ].map((s) => (
                <div key={s.l} className="bg-surface p-8">
                  <dd className="font-display text-4xl font-semibold tracking-tight text-ink">
                    {s.v}
                  </dd>
                  <dt className="mt-3 text-sm text-muted">{s.l}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
