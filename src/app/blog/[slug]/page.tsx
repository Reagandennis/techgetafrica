import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/motion/Reveal";
import { Prose } from "@/components/blog/Prose";
import { CTABand } from "@/components/home/CTABand";
import { posts } from "@/data/posts";
import { formatDate, initials, readingTime } from "@/lib/utils";

type PageParams = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article", authors: [post.author.name], publishedTime: post.date },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Section tone="canvas" spacing="md" className="border-b border-border">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            All posts
          </Link>

          <article className="mx-auto mt-10 max-w-3xl">
            <Reveal>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <Badge key={t} tone="primary">
                    {t}
                  </Badge>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-ink md:text-5xl">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {post.excerpt}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex items-center gap-4 border-b border-border pb-8">
                <span className="flex size-12 items-center justify-center rounded-full bg-ink text-canvas text-sm font-semibold">
                  {initials(post.author.name)}
                </span>
                <div>
                  <p className="font-medium text-ink">{post.author.name}</p>
                  <p className="text-sm text-muted">
                    {post.author.role} · {formatDate(post.date)} ·{" "}
                    {readingTime(post.body)} min read
                  </p>
                </div>
              </div>
            </Reveal>
          </article>
        </Container>
      </Section>

      <Section tone="canvas" spacing="lg">
        <Container>
          <div className="mx-auto max-w-3xl">
            <PlaceholderImage
              hue={post.hue}
              label={post.tags[0]}
              monogram=""
              caption={post.title}
              aspect="wide"
              size="lg"
              className="mb-12"
            />
            <Prose content={post.body} />

            <hr className="my-12 border-border" />

            <Card variant="soft" className="p-6">
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-ink text-canvas text-sm font-semibold">
                  {initials(post.author.name)}
                </span>
                <div>
                  <p className="text-eyebrow text-muted">Written by</p>
                  <p className="mt-1 font-medium text-ink">{post.author.name}</p>
                  <p className="text-sm text-muted">{post.author.role}</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {more.length > 0 && (
        <Section tone="soft" spacing="lg">
          <Container>
            <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Keep reading
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                All posts
                <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block"
                >
                  <PlaceholderImage
                    hue={p.hue}
                    label={p.tags[0]}
                    monogram=""
                    caption={p.title}
                    aspect="video"
                  />
                  <div className="mt-4">
                    <p className="text-xs text-muted">
                      {formatDate(p.date)} · {readingTime(p.body)} min read
                    </p>
                    <h3 className="mt-2 font-display text-base font-semibold leading-snug tracking-tight text-ink group-hover:text-primary">
                      {p.title}
                    </h3>
                  </div>
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
