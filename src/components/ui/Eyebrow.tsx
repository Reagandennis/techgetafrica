import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLParagraphElement> & {
  tone?: "primary" | "accent" | "muted";
};

export function Eyebrow({ className, tone = "primary", children, ...props }: Props) {
  const tones = {
    primary: "text-primary",
    accent: "text-accent",
    muted: "text-muted",
  };

  const ruleColor =
    tone === "primary"
      ? "bg-primary/40"
      : tone === "accent"
        ? "bg-accent/40"
        : "bg-muted/40";

  return (
    <p
      className={cn("text-eyebrow flex items-center gap-2.5", tones[tone], className)}
      {...props}
    >
      <span aria-hidden className={cn("inline-block h-px w-6", ruleColor)} />
      <span>{children}</span>
    </p>
  );
}
