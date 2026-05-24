import { cn } from "@/lib/utils";

type Tone = "neutral" | "primary" | "accent" | "success" | "warning" | "danger";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
  size?: "sm" | "md";
};

export function Badge({
  tone = "neutral",
  size = "sm",
  className,
  ...props
}: Props) {
  const tones: Record<Tone, string> = {
    neutral: "bg-surface text-ink-soft ring-1 ring-inset ring-border",
    primary: "bg-primary-soft text-primary ring-1 ring-inset ring-primary/15",
    accent: "bg-accent-soft text-accent ring-1 ring-inset ring-accent/15",
    success: "bg-emerald-50 text-emerald-800 ring-1 ring-inset ring-emerald-100",
    warning: "bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-100",
    danger: "bg-rose-50 text-rose-800 ring-1 ring-inset ring-rose-100",
  };

  const sizes = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-medium tracking-tight",
        tones[tone],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
