import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  tone?: "canvas" | "surface" | "soft";
  className?: string;
  children?: React.ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "canvas",
  className,
  children,
}: Props) {
  const toneClasses = {
    canvas: "bg-canvas",
    surface: "bg-surface",
    soft: "bg-surface-soft",
  } as const;

  return (
    <header
      className={cn(
        "relative isolate overflow-hidden border-b border-border",
        toneClasses[tone],
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-dot-grid-soft opacity-60 mask-fade-b"
      />
      <Container className="relative pt-20 pb-16 md:pt-28 md:pb-20">
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center",
          )}
        >
          <Reveal>
            <Eyebrow
              tone="primary"
              className={align === "center" ? "justify-center" : ""}
            >
              {eyebrow}
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-ink md:text-5xl lg:text-[56px]">
              {title}
            </h1>
          </Reveal>
          {lede && (
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                {lede}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.22}>
              <div className="mt-8">{children}</div>
            </Reveal>
          )}
        </div>
      </Container>
    </header>
  );
}
