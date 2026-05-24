import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { posts } from "@/data/posts";
import { formatDate, readingTime } from "@/lib/utils";

export function LatestPosts() {
  const latest = posts.slice(0, 3);

  return (
    <Section tone="canvas" spacing="lg">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow tone="muted">From the blog</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Notes from the work — not the marketing version.
            </h2>
          </div>
          <Button
            href="/blog"
            variant="outline"
            size="md"
            iconRight={<ArrowRight className="size-4" />}
          >
            All posts
          </Button>
        </Reveal>

        <Stagger className="mt-12 grid gap-8 md:grid-cols-3" amount={0.1}>
          {latest.map((p) => (
            <StaggerItem key={p.slug} as="div">
              <Link href={`/blog/${p.slug}`} className="group block">
                <PlaceholderImage
                  hue={p.hue}
                  label={p.tags[0]}
                  monogram=""
                  caption={p.title}
                  aspect="wide"
                />
                <div className="mt-5">
                  <p className="flex items-center gap-2 text-xs text-muted">
                    <span>{formatDate(p.date)}</span>
                    <span aria-hidden>·</span>
                    <span>{readingTime(p.body)} min read</span>
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight text-ink group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-muted-soft">
                    {p.author.name} · {p.author.role}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
