import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { testimonials } from "@/data/testimonials";
import { initials } from "@/lib/utils";

const audienceTone: Record<string, string> = {
  Employer: "bg-primary-soft text-primary",
  Candidate: "bg-accent-soft text-accent",
  Learner: "bg-emerald-50 text-emerald-700",
};

export function Testimonials() {
  const featured = testimonials.slice(0, 3);

  return (
    <Section tone="surface" spacing="lg">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="primary" className="justify-center">
            What people say
          </Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Three perspectives. One company.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            We&rsquo;d rather show you what the people we&rsquo;ve trained,
            placed, and shipped for actually say than write our own marketing
            copy about it.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3" amount={0.1}>
          {featured.map((t) => (
            <StaggerItem key={t.author} as="div">
              <Card variant="outlined" className="flex h-full flex-col p-7">
                <span
                  className={`inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                    audienceTone[t.audience]
                  }`}
                >
                  {t.audience}
                </span>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-ink text-canvas text-sm font-semibold">
                    {initials(t.author)}
                  </span>
                  <span>
                    <p className="text-sm font-semibold tracking-tight text-ink">
                      {t.author}
                    </p>
                    <p className="text-xs text-muted">
                      {t.role} · {t.company}
                    </p>
                  </span>
                </figcaption>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
