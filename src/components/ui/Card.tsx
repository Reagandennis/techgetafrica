import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLElement> & {
  as?: "div" | "article" | "li";
  variant?: "default" | "soft" | "outlined" | "flat";
  hover?: boolean;
};

export function Card({
  as: Component = "div",
  variant = "default",
  hover = false,
  className,
  ...props
}: Props) {
  const variantStyles = {
    default:
      "bg-surface ring-1 ring-border shadow-soft",
    soft: "bg-surface-soft ring-1 ring-border",
    outlined: "bg-transparent ring-1 ring-border-strong",
    flat: "bg-surface",
  } as const;

  return (
    <Component
      className={cn(
        "relative rounded-xl",
        variantStyles[variant],
        hover &&
          "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card hover:ring-border-strong",
        className,
      )}
      {...props}
    />
  );
}
