import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  href?: string;
  variant?: "default" | "compact" | "mark";
  tone?: "ink" | "light";
};

export function Logo({
  className,
  href = "/",
  variant = "default",
  tone = "ink",
}: Props) {
  const text = tone === "ink" ? "text-ink" : "text-canvas";
  const sub = tone === "ink" ? "text-muted" : "text-canvas/70";

  const inner = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="size-7" />
      {variant !== "mark" && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[17px] font-semibold tracking-tight",
              text,
            )}
          >
            TechGetAfrica
          </span>
          {variant === "default" && (
            <span className={cn("mt-0.5 text-[10px] tracking-[0.18em] uppercase", sub)}>
              Train · Build · Place
            </span>
          )}
        </span>
      )}
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} aria-label="TechGetAfrica — home" className="inline-flex items-center">
      {inner}
    </Link>
  );
}

function LogoMark({ className }: { className?: string }) {
  // A custom monogram — three stacked bars representing Train/Build/Place,
  // colored in primary with a single accent stroke.
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7" fill="var(--color-primary)" />
      <rect x="7" y="8" width="18" height="3" rx="1.2" fill="white" />
      <rect x="7" y="14.5" width="14" height="3" rx="1.2" fill="white" opacity="0.85" />
      <rect x="7" y="21" width="10" height="3" rx="1.2" fill="var(--color-accent)" />
    </svg>
  );
}
