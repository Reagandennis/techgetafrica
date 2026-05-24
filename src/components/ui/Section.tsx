import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "article" | "header";
  spacing?: "sm" | "md" | "lg" | "xl";
  tone?: "canvas" | "surface" | "soft" | "ink";
  dotted?: boolean;
};

export function Section({
  className,
  as: Component = "section",
  spacing = "lg",
  tone = "canvas",
  dotted = false,
  ...props
}: Props) {
  const spacings = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-20",
    lg: "py-20 md:py-28",
    xl: "py-24 md:py-36",
  } as const;

  const tones = {
    canvas: "bg-canvas text-ink",
    surface: "bg-surface text-ink",
    soft: "bg-surface-soft text-ink",
    ink: "bg-ink text-canvas",
  } as const;

  return (
    <Component
      className={cn(
        "relative w-full",
        spacings[spacing],
        tones[tone],
        dotted && "bg-dot-grid-soft",
        className,
      )}
      {...props}
    />
  );
}
