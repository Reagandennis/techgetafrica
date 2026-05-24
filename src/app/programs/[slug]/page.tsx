import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CircleDollarSign,
  Clock,
  Compass,
  Sparkles,
  Users,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/motion/Reveal";
import { programs } from "@/data/programs";
import { formatDate } from "@/lib/utils";

type PageParams = { slug: string };

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.summary,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const related = programs.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <>
      <Section tone="canvas" spacing="md" className="border-b border-border">
        <Container>
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            All programs
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex flex-wrap gap-2">
                  <Badge tone="accent" size="md">
                    <Sparkles className="size-3" />
                    {program.level}
                  </Badge>
                  <Badge tone="neutral" size="md">
                    <Clock className="size-3" />
                    {program.durationWeeks} weeks
                  </Badge>
                  {program.formats.map((f) => (
                    <Badge key={f} tone="neutral" size="md">
                      {f}
                    </Badge>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-ink md:text-5xl">
                  {program.title}
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                  {program.summary}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.18} className="lg:col-span-5">
              <PlaceholderImage
                hue={program.hue}
                label={program.level}
                monogram={program.title
                  .split(" ")
                  .filter((w) => /^[A-Z]/.test(w))
                  .map((w) => w[0])
                  .slice(0, 3)
                  .join("")}
                caption={`Next cohort · ${formatDate(program.nextCohort)}`}
                aspect="video"
                size="md"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="canvas" spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-12 lg:col-span-8">
              <Reveal>
                <Eyebrow tone="accent">Outcomes</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  What you&rsquo;ll walk out with.
                </h2>
                <ul className="mt-6 space-y-3 text-[15px] text-ink-soft">
                  {program.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-2 inline-block size-1.5 rounded-full bg-accent"
                      />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal>
                <Eyebrow tone="primary">Curriculum</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  What we&rsquo;ll cover, week by module.
                </h2>
                <ol className="mt-8 grid gap-4 sm:grid-cols-2">
                  {program.curriculum.map((m, i) => (
                    <li key={m.module}>
                      <Card variant="outlined" className="h-full p-6">
                        <div className="flex items-center justify-between">
                          <span className="text-eyebrow text-primary">
                            Module 0{i + 1}
                          </span>
                          <Compass className="size-4 text-muted-soft" />
                        </div>
                        <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-ink">
                          {m.module}
                        </h3>
                        <ul className="mt-3 space-y-1.5 text-sm text-muted">
                          {m.topics.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </Card>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal>
                <Card variant="soft" className="p-6 md:p-8">
                  <Eyebrow tone="muted">How a typical week works</Eyebrow>
                  <ul className="mt-5 grid gap-4 text-sm text-ink-soft sm:grid-cols-2">
                    <li>
                      <p className="font-semibold text-ink">Two live sessions</p>
                      <p className="mt-1 text-muted">
                        Lecture + hands-on. 90 min each, recorded for review.
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-ink">Pair sessions</p>
                      <p className="mt-1 text-muted">
                        Weekly 1:1 with a senior mentor. Booked async.
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-ink">Project work</p>
                      <p className="mt-1 text-muted">
                        ~12–15 hours/week on graded portfolio projects.
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-ink">Critique Fridays</p>
                      <p className="mt-1 text-muted">
                        Show your work to the cohort. Get honest feedback.
                      </p>
                    </li>
                  </ul>
                </Card>
              </Reveal>
            </div>

            <aside className="lg:col-span-4">
              <Card variant="default" className="sticky top-24 p-6">
                <h3 className="text-eyebrow text-muted">Cohort details</h3>
                <dl className="mt-5 space-y-5 text-sm">
                  <Detail
                    icon={CalendarDays}
                    label="Next cohort starts"
                    value={formatDate(program.nextCohort)}
                  />
                  <Detail
                    icon={Clock}
                    label="Duration"
                    value={`${program.durationWeeks} weeks`}
                  />
                  <Detail
                    icon={Users}
                    label="Format"
                    value={program.formats.join(" · ")}
                  />
                  <Detail
                    icon={CircleDollarSign}
                    label="Tuition"
                    value={`$${program.priceUsd.toLocaleString()} USD`}
                  />
                </dl>
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  fullWidth
                  className="mt-7"
                  iconRight={<ArrowRight className="size-4" />}
                >
                  Apply for this cohort
                </Button>
                <p className="mt-3 text-center text-xs text-muted">
                  Scholarships available. Just ask.
                </p>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="soft" spacing="lg">
        <Container>
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Other programs you might like
            </h2>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              See all programs
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/programs/${r.slug}`}
                className="group block rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
              >
                <Badge tone="neutral">{r.level}</Badge>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug tracking-tight text-ink group-hover:text-primary">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {r.durationWeeks} weeks · Next cohort {formatDate(r.nextCohort)}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 size-4 shrink-0 text-muted" />
      <div>
        <dt className="text-xs text-muted">{label}</dt>
        <dd className="mt-0.5 font-medium text-ink">{value}</dd>
      </div>
    </div>
  );
}
