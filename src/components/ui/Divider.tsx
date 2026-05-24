import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  orientation?: "horizontal" | "vertical";
  tone?: "default" | "strong";
};

export function Divider({
  className,
  orientation = "horizontal",
  tone = "default",
}: Props) {
  return (
    <span
      aria-hidden
      role="presentation"
      className={cn(
        orientation === "horizontal" ? "block h-px w-full" : "block h-full w-px",
        tone === "strong" ? "bg-border-strong" : "bg-border",
        className,
      )}
    />
  );
}
