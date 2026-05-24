import * as React from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "block w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted-soft shadow-soft transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15 disabled:bg-surface-soft disabled:opacity-60";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(fieldBase, invalid && "border-danger focus:border-danger focus:ring-danger/15", className)}
      {...props}
    />
  ),
);
Input.displayName = "Input";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        fieldBase,
        "min-h-[140px] resize-y leading-relaxed",
        invalid && "border-danger focus:border-danger focus:ring-danger/15",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, invalid, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        fieldBase,
        "appearance-none bg-[length:16px] bg-no-repeat bg-[right_12px_center] pr-10",
        invalid && "border-danger focus:border-danger focus:ring-danger/15",
        className,
      )}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20' stroke='%235c6877' stroke-width='1.5'><path stroke-linecap='round' stroke-linejoin='round' d='m6 8 4 4 4-4'/></svg>\")",
      }}
      {...props}
    >
      {children}
    </select>
  ),
);
Select.displayName = "Select";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn("block text-sm font-medium tracking-tight text-ink-soft", className)}
      {...props}
    />
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
};

export function Field({ label, htmlFor, error, hint, required, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </Label>
      {children}
      {hint && !error && <p className="text-xs text-muted">{hint}</p>}
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
}
