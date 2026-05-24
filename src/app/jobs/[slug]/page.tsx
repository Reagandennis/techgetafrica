import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  Calendar,
  CircleDollarSign,
  MapPin,
  Send,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { jobs } from "@/data/jobs";
import { formatDate } from "@/lib/utils";

type PageParams = { slug: string };

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};
  return {
    title: `${job.title} at ${job.company}`,
    description: job.summary,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  const related = jobs.filter((j) => j.slug !== job.slug).slice(0, 3);

  return (
    <>
      <Section tone="canvas" spacing="md" className="border-b border-border">
        <Container>
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            All open roles
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="flex flex-wrap gap-2">
                  <Badge tone="primary" size="md">
                    {job.role}
                  </Badge>
                  <Badge tone="neutral" size="md">
                    {job.type}
                  </Badge>
                  <Badge tone="neutral" size="md">
                    {job.remote}
                  </Badge>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-ink md:text-5xl">
                  {job.title}
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-3 font-display text-lg font-medium text-primary">
                  {job.company}
                </p>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                  {job.summary}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="canvas" spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-12 lg:col-span-8">
              <Reveal>
                <Eyebrow tone="primary">Responsibilities</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  What you&rsquo;ll be doing.
                </h2>
                <ul className="mt-6 space-y-3 text-[15px] text-ink-soft">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-2 inline-block size-1.5 rounded-full bg-primary"
                      />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal>
                <Eyebrow tone="primary">What you bring</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Requirements.
                </h2>
                <ul className="mt-6 space-y-3 text-[15px] text-ink-soft">
                  {job.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-2 inline-block size-1.5 rounded-full bg-ink-soft"
                      />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {job.niceToHave && job.niceToHave.length > 0 && (
                <Reveal>
                  <Eyebrow tone="accent">Bonus</Eyebrow>
                  <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                    Nice to have.
                  </h2>
                  <ul className="mt-6 space-y-3 text-[15px] text-ink-soft">
                    {job.niceToHave.map((r) => (
                      <li key={r} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-2 inline-block size-1.5 rounded-full bg-accent"
                        />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              <Reveal>
                <Card variant="soft" className="p-6 md:p-8">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    A note from our recruiter
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    Don&rsquo;t meet 100% of the requirements? Apply anyway —
                    we read every application carefully and have placed plenty
                    of strong candidates who were 70% on paper but 100% on
                    substance.
                  </p>
                </Card>
              </Reveal>
            </div>

            <aside className="lg:col-span-4">
              <Card variant="default" className="sticky top-24 p-6">
                <h3 className="text-eyebrow text-muted">Role at a glance</h3>
                <dl className="mt-5 space-y-5 text-sm">
                  <Detail
                    icon={Building2}
                    label="Company"
                    value={job.company}
                  />
                  <Detail icon={MapPin} label="Location" value={job.location} />
                  <Detail
                    icon={CircleDollarSign}
                    label="Compensation"
                    value={job.salaryRange}
                  />
                  <Detail
                    icon={Calendar}
                    label="Posted"
                    value={formatDate(job.postedAt)}
                  />
                </dl>

                <Button
                  href={`/contact?role=${encodeURIComponent(job.title)}&company=${encodeURIComponent(job.company)}`}
                  variant="primary"
                  size="md"
                  fullWidth
                  className="mt-7"
                  iconLeft={<Send className="size-4" />}
                >
                  Apply for this role
                </Button>
                <p className="mt-3 text-center text-xs text-muted">
                  Or email{" "}
                  <a
                    href="mailto:recruitment@techgetafrica.com"
                    className="text-primary hover:underline"
                  >
                    recruitment@techgetafrica.com
                  </a>
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
              More roles open right now
            </h2>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              See all open roles
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-3">
            {related.map((j) => (
              <Link
                key={j.slug}
                href={`/jobs/${j.slug}`}
                className="group block rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-eyebrow text-muted">
                      {j.company} · {j.location}
                    </p>
                    <h3 className="mt-1 font-display text-base font-semibold leading-snug tracking-tight text-ink group-hover:text-primary">
                      {j.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-ink">
                      {j.salaryRange}
                    </span>
                    <ArrowUpRight className="size-4 text-muted group-hover:text-primary" />
                  </div>
                </div>
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
  icon: typeof Building2;
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
