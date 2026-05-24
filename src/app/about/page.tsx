import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTABand } from "@/components/home/CTABand";
import { team, values } from "@/data/team";
import { aboutStats } from "@/data/stats";
import { initials } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About us",
  description:
    "TechGetAfrica is a small, founder-led company that trains, builds, and places tech talent across the African continent.",
};

const hueRing: Record<string, string> = {
  blue: "ring-primary/20 from-[#0B4F6C] to-[#1E7898]",
  amber: "ring-accent/20 from-[#C2611C] to-[#E59640]",
  green: "ring-emerald-200 from-[#1F6F4A] to-[#3B9F73]",
  slate: "ring-border-strong from-[#2A3340] to-[#5C6877]",
  violet: "ring-violet-200 from-[#3F2B6B] to-[#6D5BAA]",
  rose: "ring-rose-200 from-[#9D2A4E] to-[#C95F7A]",
};

const milestones = [
  {
    year: "2022",
    title: "We started, quietly",
    body: "Amara and Kwame left their previous jobs and started TGA with one bootcamp cohort of twelve learners in Lagos. The first hire was a recruiter, not a designer.",
  },
  {
    year: "2023",
    title: "Agency and recruitment, formalised",
    body: "Our first agency engagements grew out of placements — companies kept asking if we could just build the thing too. We said yes, hired our first engineers, and ran nine cohorts.",
  },
  {
    year: "2024",
    title: "Six cities, one team",
    body: "We opened informal hubs in Accra, Cape Town, and Nairobi. We grew to twenty-six people, all founder-interviewed, and turned down two acquisition conversations.",
  },
  {
    year: "2025",
    title: "The three lines feed each other",
    body: "Programs, agency, and recruitment finally clicked together. Our graduates joined our agency. Our agency clients hired through recruitment. Recruitment's signal shaped our curriculum.",
  },
  {
    year: "2026",
    title: "Still small enough to mean it",
    body: "Thirty-eight people, founders still in every hiring call, $0 in outside investment. The plan is to keep going carefully.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About TechGetAfrica"
        title={
          <>
            We&rsquo;re a small company doing
            <span className="text-primary"> three big things — together.</span>
          </>
        }
        lede="Four years in, thirty-eight people, three lines of work, one team. We&rsquo;re founder-led, founder-funded, and not in a hurry to be anything else."
      />

      {/* Mission */}
      <Section tone="canvas" spacing="lg">
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>Our mission</Eyebrow>
            </div>
            <div className="lg:col-span-8">
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
                To make sure the next generation of African engineers, designers,
                and operators has the training, the work, and the introductions
                they need to build careers that travel —{" "}
                <span className="text-primary">
                  whether they leave the continent or build something new on it.
                </span>
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Story */}
      <Section tone="soft" spacing="lg">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow tone="primary">Our story</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Four years, told in five paragraphs.
            </h2>
          </Reveal>

          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {milestones.map((m, i) => (
              <li key={m.year} className="relative">
                <span className="text-eyebrow text-primary">{m.year}</span>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                  {m.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {m.body}
                </p>
                {i < milestones.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-4 top-3 hidden h-px w-8 bg-border-strong lg:block"
                  />
                )}
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Values */}
      <Section tone="canvas" spacing="lg">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow tone="accent">Our values</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              The five things we&rsquo;re trying to be.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We don&rsquo;t have a poster on the wall. These are the things we
              quote at each other when we have to make a hard call.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" amount={0.08}>
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={v.title} as="div">
                  <Card variant="outlined" className="flex h-full flex-col p-7">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent ring-1 ring-accent/15">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">
                      {v.description}
                    </p>
                  </Card>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      {/* Team */}
      <Section tone="soft" spacing="lg">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>The team</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              The people you&rsquo;ll actually work with.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              No account managers. The person who picks up your project is the
              person who runs it. The person who interviews you for a role is
              the person you stay in touch with for six months after.
            </p>
          </Reveal>

          <Stagger
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            amount={0.05}
          >
            {team.map((m) => (
              <StaggerItem key={m.name} as="div">
                <Card variant="default" className="flex h-full flex-col p-6">
                  <div
                    className={`flex size-14 items-center justify-center rounded-xl bg-gradient-to-br text-canvas font-display text-lg font-semibold ring-1 ${hueRing[m.hue] ?? hueRing.blue}`}
                  >
                    {initials(m.name)}
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold leading-snug tracking-tight text-ink">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {m.bio}
                  </p>
                  <p className="mt-auto pt-4 text-xs text-muted-soft">
                    {m.location}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* About stats */}
      <Section tone="ink" spacing="md">
        <Container>
          <Reveal>
            <p className="text-eyebrow text-canvas/60">By the numbers</p>
            <dl className="mt-8 grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-white/10">
              {aboutStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`sm:px-8 ${i === 0 ? "sm:pl-0" : ""} ${i === aboutStats.length - 1 ? "sm:pr-0" : ""}`}
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

      {/* Working with us */}
      <Section tone="canvas" spacing="lg">
        <Container>
          <Reveal className="grid gap-10 rounded-2xl border border-border bg-surface p-8 md:grid-cols-3 md:items-center md:p-12">
            <div className="md:col-span-2">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Want to work with us, or for us?
              </h2>
              <p className="mt-4 text-muted">
                Whether you&rsquo;re a company, a learner, or someone thinking
                about joining the team — start with a conversation. We reply
                within one business day.
              </p>
            </div>
            <div className="md:text-right">
              <Button
                href="/contact"
                size="md"
                iconRight={<ArrowRight className="size-4" />}
              >
                Get in touch
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
