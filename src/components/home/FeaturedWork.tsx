import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { portfolioProjects } from "@/data/portfolio";

export function FeaturedWork() {
  const featured = portfolioProjects.filter((p) => p.highlight).slice(0, 3);

  return (
    <Section tone="soft" spacing="lg">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Software we&rsquo;ve shipped for teams that bet on Africa.
            </h2>
          </div>
          <Button href="/portfolio" variant="outline" size="md" iconRight={<ArrowUpRight className="size-4" />}>
            All projects
          </Button>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" amount={0.1}>
          {featured.map((p) => (
            <StaggerItem key={p.slug} as="div">
              <Link
                href={`/portfolio/${p.slug}`}
                className="group block rounded-xl"
              >
                <PlaceholderImage
                  hue={p.hue}
                  label={p.industry}
                  monogram={p.client
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                  caption={`${p.year}`}
                  aspect="video"
                  className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:shadow-card"
                />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-eyebrow text-muted">{p.client}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight text-ink group-hover:text-primary">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map((s) => (
                    <Badge key={s} tone="neutral">
                      {s}
                    </Badge>
                  ))}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
