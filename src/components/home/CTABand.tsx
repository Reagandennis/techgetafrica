import { ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

export function CTABand() {
  return (
    <Section tone="surface" spacing="lg">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-14 text-white ring-1 ring-primary/20 md:px-14 md:py-20">
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.85) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
              aria-hidden
            />
            <div
              aria-hidden
              className="absolute -right-24 -top-24 size-80 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <Eyebrow tone="accent" className="text-accent">
                  Talk to us
                </Eyebrow>
                <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  Ready to train, build, or hire? Let&rsquo;s get specific.
                </h2>
                <p className="mt-5 max-w-2xl text-canvas/80 md:text-lg">
                  Tell us what you&rsquo;re trying to do — a feature, a hire, a
                  career change — and we&rsquo;ll route you to the person who
                  can actually help. We reply within one business day.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/95 hover:text-primary"
                  iconLeft={<MessageSquare className="size-4" />}
                  iconRight={<ArrowRight className="size-4" />}
                >
                  Start a conversation
                </Button>
                <p className="text-xs text-white/70">
                  Or email us at{" "}
                  <a
                    href="mailto:hello@techgetafrica.com"
                    className="underline-offset-4 hover:underline"
                  >
                    hello@techgetafrica.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
