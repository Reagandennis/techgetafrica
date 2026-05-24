"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/Input";
import {
  ContactSchema,
  contactTopics,
  type ContactInput,
} from "@/lib/contact-schema";

export function ContactForm() {
  const searchParams = useSearchParams();
  const presetRole = searchParams.get("role");
  const presetCompany = searchParams.get("company");

  const prefillMessage = React.useMemo(() => {
    if (presetRole && presetCompany) {
      return `Hi! I'd like to apply for the ${presetRole} role at ${presetCompany}.\n\nA bit about me:\n`;
    }
    return "";
  }, [presetRole, presetCompany]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: presetCompany ?? "",
      topic: presetRole ? "Job" : "Build",
      message: prefillMessage,
      consent: false,
    },
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setError("root", {
          message:
            body?.error ?? "Something went wrong. Please try again in a moment.",
        });
        return;
      }
      reset({
        name: "",
        email: "",
        company: "",
        topic: "Build",
        message: "",
        consent: false,
      });
    } catch {
      setError("root", {
        message: "Network error. Please try again.",
      });
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-8 text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="size-6" />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
          Thanks — we got your message.
        </h3>
        <p className="mt-3 text-sm text-muted">
          We&rsquo;ll reply within one business day. If it&rsquo;s urgent, drop
          us a line at{" "}
          <a
            href="mailto:hello@techgetafrica.com"
            className="text-primary hover:underline"
          >
            hello@techgetafrica.com
          </a>
          .
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="mt-6"
          onClick={() => reset()}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
      aria-label="Contact TechGetAfrica"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          htmlFor="cf-name"
          required
          error={errors.name?.message}
        >
          <Input
            id="cf-name"
            autoComplete="name"
            invalid={!!errors.name}
            {...register("name")}
          />
        </Field>
        <Field
          label="Email"
          htmlFor="cf-email"
          required
          error={errors.email?.message}
        >
          <Input
            id="cf-email"
            type="email"
            autoComplete="email"
            invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Company"
          htmlFor="cf-company"
          hint="Optional"
          error={errors.company?.message}
        >
          <Input
            id="cf-company"
            autoComplete="organization"
            invalid={!!errors.company}
            {...register("company")}
          />
        </Field>
        <Field
          label="What's this about?"
          htmlFor="cf-topic"
          required
          error={errors.topic?.message}
        >
          <Select
            id="cf-topic"
            invalid={!!errors.topic}
            {...register("topic")}
          >
            {contactTopics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field
        label="Message"
        htmlFor="cf-message"
        required
        hint="The more specific you can be, the better we can route you."
        error={errors.message?.message}
      >
        <Textarea
          id="cf-message"
          rows={6}
          invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-soft">
          <input
            type="checkbox"
            className="mt-1 size-4 rounded border-border-strong text-primary focus:ring-primary"
            {...register("consent")}
          />
          <span>
            I&rsquo;m okay with TechGetAfrica storing this message so they can
            reply. We never share contact details with third parties.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 text-xs text-danger">{errors.consent.message}</p>
        )}
      </div>

      {errors.root && (
        <p className="rounded-md border border-danger/30 bg-danger/5 px-3 py-2 text-sm text-danger">
          {errors.root.message}
        </p>
      )}

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-muted">
          We reply within one business day.
        </p>
        <Button
          type="submit"
          size="md"
          disabled={isSubmitting}
          iconRight={<Send className="size-4" />}
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
