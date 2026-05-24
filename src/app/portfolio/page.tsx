import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTABand } from "@/components/home/CTABand";
import { portfolioProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies of software TechGetAfrica has built — fintech merchant tools, offline-first health records, cross-border logistics, and more.",
};

function clientMonogram(client: string) {
  return client
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function PortfolioPage() {
  const projects = portfolioProjects;
  const industries = Array.from(new Set(projects.map((p) => p.industry)));

  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title={
          <>
            Software shipped for teams that
            <span className="text-primary"> bet on Africa.</span>
          </>
        }
        lede="A sample of recent client work across fintech, health, logistics, and education — the problem, the solution, and what changed."
      >
        <ul className="flex flex-wrap gap-2">
          {industries.map((i) => (
            <li key={i}>
              <Badge tone="neutral" size="md">
                {i}
              </Badge>
            </li>
          ))}
        </ul>
      </PageHeader>

      <Section tone="canvas" spacing="lg">
        <Container>
          <Stagger
            className="grid gap-10 md:grid-cols-2"
            amount={0.05}
          >
            {projects.map((p, i) => (
              <StaggerItem key={p.slug} as="div">
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="group block"
                >
                  <PlaceholderImage
                    hue={p.hue}
                    label={p.industry}
                    monogram={clientMonogram(p.client)}
                    caption={`${p.year}`}
                    aspect={i % 3 === 0 ? "wide" : "video"}
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:shadow-card"
                  />
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-eyebrow text-muted">
                        {p.client} · {p.year}
                      </p>
                      <h2 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-ink group-hover:text-primary md:text-2xl">
                        {p.title}
                      </h2>
                    </div>
                    <ArrowUpRight className="size-5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {p.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.services.map((s) => (
                      <Badge key={s} tone="primary">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-20 rounded-2xl bg-surface ring-1 ring-border p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Working under NDA on something we can&rsquo;t show here?
                </h2>
                <p className="mt-3 text-muted">
                  About a third of our work isn&rsquo;t public. Reach out and
                  we&rsquo;ll share what&rsquo;s relevant under a mutual NDA.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-canvas hover:bg-primary-hover"
              >
                Get in touch
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
