import { ArrowRight, ArrowUpRight, Briefcase, GraduationCap, Hammer } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas bg-wash">
      <div className="absolute inset-0 bg-dot-grid-soft opacity-50 mask-fade-b" aria-hidden />
      <Container className="relative pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-28">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <Badge tone="primary" size="md" className="font-display">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                Train · Build · Place
              </Badge>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.025em] text-ink sm:text-5xl lg:text-[64px]">
                Africa&rsquo;s tech talent,
                <br className="hidden sm:block" />
                <span className="text-primary"> fully delivered.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
                TechGetAfrica is three businesses under one roof. We train engineers,
                designers, and data folks for working life. We build software for
                ambitious teams. And we place the right people into the right roles —
                across the continent and beyond.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  href="/programs"
                  variant="primary"
                  size="lg"
                  iconLeft={<GraduationCap className="size-4" />}
                  iconRight={<ArrowRight className="size-4" />}
                >
                  Train with us
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  size="lg"
                  iconLeft={<Hammer className="size-4" />}
                >
                  Build with us
                </Button>
                <Button
                  href="/recruitment"
                  variant="ghost"
                  size="lg"
                  iconLeft={<Briefcase className="size-4" />}
                  iconRight={<ArrowUpRight className="size-4" />}
                >
                  Hire with us
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 sm:gap-10">
                {[
                  { v: "1,200+", l: "Engineers trained" },
                  { v: "240", l: "Placements made" },
                  { v: "92%", l: "Placed in 180 days" },
                ].map((m) => (
                  <div key={m.l}>
                    <dt className="text-eyebrow text-muted">{m.l}</dt>
                    <dd className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
                      {m.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={0.18} className="lg:col-span-5">
            <HeroComposition />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function HeroComposition() {
  return (
    <div className="relative mx-auto mt-2 h-[480px] w-full max-w-[480px] lg:h-[520px]">
      {/* BUILD card — code preview */}
      <div className="absolute right-0 top-0 w-[78%] rotate-[1.2deg] rounded-xl bg-surface ring-1 ring-border shadow-card">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
          <span className="size-2 rounded-full bg-border-strong" />
          <span className="size-2 rounded-full bg-border-strong" />
          <span className="size-2 rounded-full bg-border-strong" />
          <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-muted-soft">
            build
          </span>
        </div>
        <pre className="overflow-hidden px-4 py-4 text-[11.5px] leading-relaxed text-ink-soft font-mono">
{`export async function deploy(plan: Plan) {
  const env = await provision(plan.env);
  await db.migrate(env);
  await services.roll(env, {
    strategy: "blue-green",
    canary: 0.1,
  });
  return env.url;
}`}
        </pre>
      </div>

      {/* PLACE card — candidate */}
      <div className="absolute left-0 top-[180px] w-[62%] -rotate-[1.5deg] rounded-xl bg-surface ring-1 ring-border shadow-card">
        <div className="flex items-center gap-3 p-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-canvas font-display text-sm font-semibold">
            AO
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight text-ink">
              Amaka Onyeka
            </p>
            <p className="truncate text-xs text-muted">Senior Engineer · Lagos</p>
          </div>
          <span className="ml-auto inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-100">
            Placed
          </span>
        </div>
        <div className="border-t border-border px-4 py-3 text-xs text-muted">
          Matched in <span className="text-ink-soft">6 days</span> · 3 offers
        </div>
      </div>

      {/* TRAIN card — course */}
      <div className="absolute bottom-0 right-[6%] w-[64%] rotate-[2deg] rounded-xl bg-ink text-canvas ring-1 ring-ink shadow-lifted">
        <div className="flex items-center justify-between px-4 pt-4">
          <span className="text-[10px] uppercase tracking-[0.18em] text-canvas/60">
            Cohort 14
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium text-accent ring-1 ring-accent/25">
            Enrolling
          </span>
        </div>
        <p className="px-4 pb-1 pt-2 font-display text-lg font-semibold leading-tight tracking-tight">
          Fullstack Engineering Bootcamp
        </p>
        <div className="grid grid-cols-3 gap-2 px-4 pb-4 pt-2 text-[11px] text-canvas/70">
          <div>
            <div className="text-canvas">16 wk</div>
            <div className="opacity-70">Duration</div>
          </div>
          <div>
            <div className="text-canvas">Hybrid</div>
            <div className="opacity-70">Format</div>
          </div>
          <div>
            <div className="text-canvas">Jun 9</div>
            <div className="opacity-70">Starts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
