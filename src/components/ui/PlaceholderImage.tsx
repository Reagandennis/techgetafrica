import { cn } from "@/lib/utils";

type Hue = "blue" | "amber" | "green" | "slate" | "violet" | "rose";

type Props = {
  hue?: Hue;
  label?: string;
  caption?: string;
  monogram?: string;
  className?: string;
  aspect?: "video" | "square" | "wide" | "portrait" | "auto";
  size?: "sm" | "md" | "lg";
};

const palettes: Record<
  Hue,
  { from: string; to: string; ink: string; soft: string }
> = {
  blue: {
    from: "from-[#0B4F6C]",
    to: "to-[#1E7898]",
    ink: "text-white",
    soft: "text-white/70",
  },
  amber: {
    from: "from-[#C2611C]",
    to: "to-[#E59640]",
    ink: "text-white",
    soft: "text-white/75",
  },
  green: {
    from: "from-[#1F6F4A]",
    to: "to-[#3B9F73]",
    ink: "text-white",
    soft: "text-white/75",
  },
  slate: {
    from: "from-[#2A3340]",
    to: "to-[#5C6877]",
    ink: "text-white",
    soft: "text-white/70",
  },
  violet: {
    from: "from-[#3F2B6B]",
    to: "to-[#6D5BAA]",
    ink: "text-white",
    soft: "text-white/75",
  },
  rose: {
    from: "from-[#9D2A4E]",
    to: "to-[#C95F7A]",
    ink: "text-white",
    soft: "text-white/75",
  },
};

export function PlaceholderImage({
  hue = "blue",
  label,
  caption,
  monogram,
  className,
  aspect = "video",
  size = "md",
}: Props) {
  const palette = palettes[hue];
  const aspects = {
    video: "aspect-[16/10]",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    portrait: "aspect-[3/4]",
    auto: "",
  } as const;

  const mono = {
    sm: "text-3xl",
    md: "text-5xl",
    lg: "text-7xl",
  };

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-xl ring-1 ring-black/5 bg-gradient-to-br",
        palette.from,
        palette.to,
        aspects[aspect],
        className,
      )}
      aria-hidden={!label}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      {/* Layered geometric flourish — a faint sweep + dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-12 -top-12 size-56 rounded-full bg-white/10 blur-2xl"
      />
      <div
        aria-hidden
        className="absolute -left-16 -bottom-20 size-72 rounded-full bg-black/15 blur-3xl"
      />

      {/* Diagonal hairline */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full opacity-30"
        aria-hidden
      >
        <line x1="0" y1="92" x2="100" y2="20" stroke="white" strokeWidth="0.4" strokeDasharray="2 3" />
      </svg>

      {/* Content */}
      <div className={cn("absolute inset-0 flex flex-col justify-between p-6 md:p-8", palette.ink)}>
        <div className="flex items-start justify-between">
          {label ? (
            <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-white/80">
              {label}
            </span>
          ) : <span />}
          <span aria-hidden className="size-2 rounded-full bg-white/60" />
        </div>

        {monogram && (
          <div className="flex items-end justify-between">
            <span className={cn("font-display font-semibold leading-none tracking-tight", mono[size])}>
              {monogram}
            </span>
            {caption && (
              <span className={cn("max-w-[55%] text-right text-xs leading-snug", palette.soft)}>
                {caption}
              </span>
            )}
          </div>
        )}

        {!monogram && caption && (
          <span className={cn("text-sm leading-snug", palette.soft)}>{caption}</span>
        )}
      </div>
    </div>
  );
}
