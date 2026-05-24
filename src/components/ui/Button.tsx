import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  prefetch?: boolean;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-soft hover:shadow-card",
  secondary:
    "bg-ink text-canvas hover:bg-ink-soft shadow-soft hover:shadow-card",
  outline:
    "bg-transparent text-ink ring-1 ring-inset ring-border-strong hover:ring-ink hover:bg-surface",
  ghost: "bg-transparent text-ink hover:bg-surface-soft",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    iconLeft,
    iconRight,
    fullWidth,
  } = props;

  const styles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {iconLeft ? <span className="-ml-0.5 inline-flex shrink-0">{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span className="-mr-0.5 inline-flex shrink-0">{iconRight}</span> : null}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, external, prefetch, target, rel } = props;
    if (external) {
      return (
        <a
          href={href}
          className={styles}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={styles} prefetch={prefetch} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, iconLeft: _il, iconRight: _ir, fullWidth: _fw, children: _ch, ...rest } = props;
  void _v; void _s; void _c; void _il; void _ir; void _fw; void _ch;

  return (
    <button className={styles} {...rest}>
      {content}
    </button>
  );
}
