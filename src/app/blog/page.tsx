import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTABand } from "@/components/home/CTABand";
import { posts } from "@/data/posts";
import { formatDate, initials, readingTime } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from the work — engineering, design, hiring, and training. Written by the TechGetAfrica team.",
};

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );
  const [featured, ...rest] = sorted;
  const allTags = Array.from(new Set(sorted.flatMap((p) => p.tags)));

  return (
    <>
      <PageHeader
        eyebrow="The blog"
        title={
          <>
            Notes from the work —
            <span className="text-primary"> not the marketing version.</span>
          </>
        }
        lede="Engineering field reports, hiring opinions, training reflections, and the occasional rant. Written by the people doing the work."
      >
        <ul className="flex flex-wrap gap-1.5">
          {allTags.map((t) => (
            <li key={t}>
              <Badge tone="neutral">{t}</Badge>
            </li>
          ))}
        </ul>
      </PageHeader>

      {/* Featured */}
      {featured && (
        <Section tone="canvas" spacing="lg">
          <Container>
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
              >
                <div className="lg:col-span-6">
                  <PlaceholderImage
                    hue={featured.hue}
                    label={featured.tags[0]}
                    monogram=""
                    caption={featured.title}
                    aspect="video"
                    size="lg"
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:shadow-card"
                  />
                </div>
                <div className="lg:col-span-6">
                  <p className="text-eyebrow text-primary">Latest</p>
                  <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink group-hover:text-primary md:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-sm text-muted">
                    <span className="flex size-8 items-center justify-center rounded-full bg-ink text-canvas text-xs font-semibold">
                      {initials(featured.author.name)}
                    </span>
                    <div>
                      <p className="font-medium text-ink-soft">
                        {featured.author.name}
                      </p>
                      <p className="text-xs">
                        {featured.author.role} · {formatDate(featured.date)} ·{" "}
                        {readingTime(featured.body)} min read
                      </p>
                    </div>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read the post
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </Container>
        </Section>
      )}

      {/* Rest */}
      {rest.length > 0 && (
        <Section tone="soft" spacing="lg">
          <Container>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              More from the blog
            </h2>
            <Stagger
              className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
              amount={0.08}
            >
              {rest.map((p) => (
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
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <Badge key={t} tone="neutral">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-16 text-center text-sm text-muted">
              That&rsquo;s everything we&rsquo;ve published so far. Subscribe to
              the{" "}
              <Link
                href="/contact"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                newsletter
                <ArrowUpRight className="size-3.5" />
              </Link>{" "}
              if you&rsquo;d rather not check back.
            </Reveal>
          </Container>
        </Section>
      )}

      <CTABand />
    </>
  );
}
