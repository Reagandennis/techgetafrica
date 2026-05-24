import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide" | "narrow" | "tight";
};

export function Container({
  className,
  size = "default",
  ...props
}: Props) {
  const sizes = {
    tight: "max-w-3xl",
    narrow: "max-w-5xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
  } as const;

  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10 lg:px-12",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
