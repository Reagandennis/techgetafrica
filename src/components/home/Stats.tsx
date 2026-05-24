import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { heroStats } from "@/data/stats";

export function Stats() {
  return (
    <Section tone="ink" spacing="md" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-30 mask-fade-b" aria-hidden />
      <Container>
        <Reveal>
          <p className="text-eyebrow text-canvas/60">
            By the numbers · last twelve months
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-snug tracking-tight text-canvas md:text-3xl">
            What four years of training, building, and placing across the
            continent looks like in a table.
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <dl className="mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-white/10">
            {heroStats.map((s, i) => (
              <div
                key={s.label}
                className={`sm:px-8 ${i === 0 ? "sm:pl-0" : ""} ${i === heroStats.length - 1 ? "sm:pr-0" : ""}`}
              >
                <dd className="font-display text-4xl font-semibold tracking-tight text-canvas md:text-5xl">
                  {s.value}
                </dd>
                <dt className="mt-3 text-sm text-canvas/70">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </Section>
  );
}
