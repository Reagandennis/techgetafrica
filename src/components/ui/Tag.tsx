import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  active?: boolean;
};

export function Tag({ active, className, ...props }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium tracking-tight transition-colors",
        active
          ? "border-ink bg-ink text-canvas"
          : "border-border bg-surface text-ink-soft hover:border-border-strong",
        className,
      )}
      {...props}
    />
  );
}
