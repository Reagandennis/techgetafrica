import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { CTABand } from "@/components/home/CTABand";
import { portfolioProjects } from "@/data/portfolio";

type PageParams = { slug: string };

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.client} — ${project.title}`,
    description: project.summary,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const monogram = project.client
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const related = portfolioProjects
    .filter((p) => p.slug !== project.slug && p.industry === project.industry)
    .slice(0, 2);

  return (
    <>
      <Section tone="canvas" spacing="md" className="border-b border-border">
        <Container>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            All projects
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="primary">
                  {project.client} · {project.industry} · {project.year}
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-ink md:text-5xl">
                  {project.title}
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                  {project.summary}
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.services.map((s) => (
                    <Badge key={s} tone="primary" size="md">
                      {s}
                    </Badge>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.18} className="lg:col-span-5">
              <PlaceholderImage
                hue={project.hue}
                label={project.industry}
                monogram={monogram}
                caption={project.client}
                aspect="square"
                size="lg"
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
                <Eyebrow tone="muted">The problem</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Where they were when we started.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  {project.problem}
                </p>
              </Reveal>

              <Reveal>
                <Eyebrow tone="primary">Our approach</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  What we built together.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  {project.solution}
                </p>
              </Reveal>

              <Reveal>
                <Eyebrow tone="accent">Outcomes</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  What changed for the business.
                </h2>
                <dl className="mt-8 grid gap-px overflow-hidden rounded-xl bg-border ring-1 ring-border sm:grid-cols-2">
                  {project.outcomes.map((o) => (
                    <div key={o.label} className="bg-surface p-6">
                      <dt className="text-eyebrow text-muted">{o.label}</dt>
                      <dd className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
                        {o.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <aside className="lg:col-span-4">
              <Reveal>
                <Card variant="soft" className="sticky top-24 p-6">
                  <h3 className="text-eyebrow text-muted">Project facts</h3>
                  <dl className="mt-5 space-y-5 text-sm">
                    <div>
                      <dt className="text-muted">Client</dt>
                      <dd className="mt-1 font-medium text-ink">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Industry</dt>
                      <dd className="mt-1 font-medium text-ink">{project.industry}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Year</dt>
                      <dd className="mt-1 font-medium text-ink">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Stack</dt>
                      <dd className="mt-2 flex flex-wrap gap-1.5">
                        {project.stack.map((s) => (
                          <Badge key={s} tone="neutral">
                            {s}
                          </Badge>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-muted">Services</dt>
                      <dd className="mt-1 font-medium text-ink-soft">
                        {project.services.join(" · ")}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-6 border-t border-border-strong/40 pt-5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      Want to build something similar?
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </Card>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section tone="soft" spacing="lg">
          <Container>
            <Reveal>
              <Eyebrow>More from {project.industry.toLowerCase()}</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Other projects in this space.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/portfolio/${r.slug}`}
                  className="group block"
                >
                  <PlaceholderImage
                    hue={r.hue}
                    label={r.industry}
                    monogram={r.client
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                    caption={`${r.year}`}
                    aspect="video"
                    className="transition-transform duration-500 group-hover:-translate-y-0.5"
                  />
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug tracking-tight text-ink group-hover:text-primary">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{r.summary}</p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTABand />
    </>
  );
}
