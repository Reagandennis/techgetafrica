import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  HandCoins,
  ScanFace,
  Send,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTABand } from "@/components/home/CTABand";

export const metadata: Metadata = {
  title: "Recruitment",
  description:
    "TechGetAfrica matches engineers, designers, and operators with companies that treat them well — and supports both sides through the entire process.",
};

const employerSteps = [
  {
    icon: ScanFace,
    title: "Brief us properly",
    description:
      "A 45-minute call with our recruitment lead. We dig into the role, the team, and what success looks like in six months — not just the JD.",
  },
  {
    icon: UserCheck,
    title: "Curated shortlist",
    description:
      "Within ten business days, you see three to five people we&rsquo;d hire ourselves. No spray-and-pray.",
  },
  {
    icon: HandCoins,
    title: "Offer & negotiate",
    description:
      "We benchmark salary, help structure an offer that lands, and stay in the room through the awkward parts.",
  },
  {
    icon: ShieldCheck,
    title: "Six-month support",
    description:
      "We check in monthly with both sides for six months. If a placement breaks down, we re-run the process at no charge.",
  },
];

const candidateSteps = [
  {
    icon: Send,
    title: "One conversation",
    description:
      "A 30-minute intake call with one of our recruiters. We&rsquo;d rather learn the real story than collect a CV in a portal.",
  },
  {
    icon: Sparkles,
    title: "Coaching, not gatekeeping",
    description:
      "We&rsquo;ll help you tighten your CV, prep for interviews, and figure out which roles are actually right.",
  },
  {
    icon: Briefcase,
    title: "Introductions that respect your time",
    description:
      "You only meet companies where we genuinely think you&rsquo;d thrive. No volume submissions.",
  },
  {
    icon: GraduationCap,
    title: "First-90-day support",
    description:
      "Every placed candidate gets check-ins through their first 90 days on the job — and a backchannel to us if anything goes sideways.",
  },
];

export default function RecruitmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recruitment"
        title={
          <>
            The right people, both ways — without the
            <span className="text-primary"> volume-agency theatre.</span>
          </>
        }
        lede="We work with companies who care about who they hire, and with candidates who care about where they end up. We try to be useful to both sides."
      >
        <div className="flex flex-wrap gap-3">
          <Button
            href="#employers"
            size="md"
            iconLeft={<Briefcase className="size-4" />}
          >
            For employers
          </Button>
          <Button
            href="#candidates"
            variant="outline"
            size="md"
            iconLeft={<GraduationCap className="size-4" />}
          >
            For candidates
          </Button>
        </div>
      </PageHeader>

      {/* Quick stats */}
      <Section tone="canvas" spacing="md">
        <Container>
          <Reveal>
            <dl className="grid grid-cols-2 gap-y-10 border-y border-border py-10 md:grid-cols-4 md:divide-x md:divide-border md:gap-y-0">
              {[
                { v: "240", l: "Placements made" },
                { v: "85", l: "Companies served" },
                { v: "12 days", l: "Average shortlist time" },
                { v: "92%", l: "Still placed at 180 days" },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className={`md:px-8 ${i === 0 ? "md:pl-0" : ""} ${i === 3 ? "md:pr-0" : ""}`}
                >
                  <dd className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                    {s.v}
                  </dd>
                  <dt className="mt-2 text-sm text-muted">{s.l}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>

      {/* For Employers */}
      <Section tone="soft" spacing="lg" id="employers">
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Badge tone="primary" size="md">
                <Briefcase className="size-3.5" />
                For employers
              </Badge>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                Hire the way good companies actually want to hire.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                We&rsquo;re a small recruitment team that takes a small number
                of roles seriously. We won&rsquo;t flood your inbox with maybes
                or pressure you into a hire. If we don&rsquo;t have someone
                great for you, we&rsquo;ll say so.
              </p>
              <ul className="mt-8 space-y-3 text-[15px] text-ink-soft">
                {[
                  "Roles from $30k to $150k, IC and leadership",
                  "Engineering, design, product, data, DevOps",
                  "Pan-African talent pool, remote-friendly",
                  "Contingency or retained, your choice",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className="mt-2 inline-block size-1 rounded-full bg-primary"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  href="/contact"
                  size="md"
                  iconRight={<ArrowRight className="size-4" />}
                >
                  Brief us on a role
                </Button>
                <Button href="/jobs" variant="ghost" size="md">
                  See active roles
                </Button>
              </div>
            </div>

            <Stagger
              className="grid gap-4 sm:grid-cols-2 lg:col-span-7"
              amount={0.08}
            >
              {employerSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <StaggerItem key={step.title} as="div">
                    <Card variant="default" className="flex h-full flex-col p-6">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary-soft text-primary ring-1 ring-primary/15">
                          <Icon className="size-[18px]" />
                        </span>
                        <span className="text-eyebrow text-muted">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </Card>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </Reveal>
        </Container>
      </Section>

      {/* For Candidates */}
      <Section tone="canvas" spacing="lg" id="candidates">
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-12">
            <Stagger
              className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:order-1"
              amount={0.08}
            >
              {candidateSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <StaggerItem key={step.title} as="div">
                    <Card variant="default" className="flex h-full flex-col p-6">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent ring-1 ring-accent/15">
                          <Icon className="size-[18px]" />
                        </span>
                        <span className="text-eyebrow text-muted">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </Card>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <div className="lg:col-span-5 lg:order-2">
              <Badge tone="accent" size="md">
                <GraduationCap className="size-3.5" />
                For candidates
              </Badge>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                We work for you, not just the company paying us.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Recruitment is broken in a lot of places. We try not to be one
                of them. You get a real human who reads your CV, gives you real
                feedback, and only puts you forward when there&rsquo;s
                something genuinely worth applying to.
              </p>
              <ul className="mt-8 space-y-3 text-[15px] text-ink-soft">
                {[
                  "Honest salary benchmarks before you apply",
                  "Interview prep with someone who’s done the role",
                  "We’ll tell you when a role isn’t right",
                  "Free to candidates, always",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className="mt-2 inline-block size-1 rounded-full bg-accent"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  href="/jobs"
                  size="md"
                  iconRight={<ArrowRight className="size-4" />}
                >
                  Browse open roles
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  Talk to a recruiter
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Pull quote */}
      <Section tone="surface" spacing="md">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="primary" className="justify-center">
              From a recent hire
            </Eyebrow>
            <blockquote className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
              &ldquo;I&rsquo;d been job-hunting for nine months on my own. Two
              weeks after my first call with my TGA recruiter, I had an offer
              that paid 40% more than my last job.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-muted">
              Tunde Akinola · Senior Engineer · Kazi Health
            </p>
            <Link
              href="/jobs"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              See the roles we&rsquo;re working on now
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
