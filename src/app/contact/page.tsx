import type { Metadata } from "next";
import { Suspense } from "react";
import { Briefcase, GraduationCap, Hammer, Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with TechGetAfrica — about a project, a hire, a role, or one of our training programs. We reply within one business day.",
};

const routes = [
  {
    icon: Hammer,
    title: "Build with us",
    description: "Agency engagements — MVPs, embedded pods, platform work.",
    href: "/services",
    hue: "text-primary bg-primary-soft ring-primary/15",
  },
  {
    icon: Briefcase,
    title: "Hire with us",
    description: "Curated recruitment for engineering, design, product, data.",
    href: "/recruitment#employers",
    hue: "text-ink bg-surface-soft ring-border",
  },
  {
    icon: GraduationCap,
    title: "Train with us",
    description: "Cohort-based programs, currently enrolling.",
    href: "/programs",
    hue: "text-accent bg-accent-soft ring-accent/15",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Tell us what you&rsquo;re trying to do —
            <span className="text-primary"> we&rsquo;ll route you to the right person.</span>
          </>
        }
        lede="One short message, and we&rsquo;ll get back to you within one business day. No forms-as-gates, no sales sequences."
      />

      <Section tone="canvas" spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Card variant="default" className="p-7 md:p-10">
                <Suspense fallback={<FormSkeleton />}>
                  <ContactForm />
                </Suspense>
              </Card>
            </div>

            <aside className="space-y-8 lg:col-span-5">
              <Card variant="soft" className="p-7">
                <h2 className="text-eyebrow text-muted">Direct lines</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-muted">General</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="mt-0.5 block font-medium text-ink hover:text-primary"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-muted">Recruitment</p>
                      <a
                        href="mailto:recruitment@techgetafrica.com"
                        className="mt-0.5 block font-medium text-ink hover:text-primary"
                      >
                        recruitment@techgetafrica.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-muted">Where we work from</p>
                      <p className="mt-0.5 font-medium text-ink">
                        {siteConfig.locations.join(" · ")}
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>

              <div>
                <h2 className="text-eyebrow text-muted">In a hurry?</h2>
                <ul className="mt-4 space-y-3">
                  {routes.map((r) => {
                    const Icon = r.icon;
                    return (
                      <li key={r.title}>
                        <a
                          href={r.href}
                          className="group flex items-start gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-border-strong"
                        >
                          <span
                            className={`mt-0.5 inline-flex size-8 items-center justify-center rounded-md ring-1 ${r.hue}`}
                          >
                            <Icon className="size-4" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-ink group-hover:text-primary">
                              {r.title}
                            </p>
                            <p className="mt-0.5 text-xs text-muted">
                              {r.description}
                            </p>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <Card variant="outlined" className="p-6" id="privacy">
                <h2 className="text-eyebrow text-muted">Privacy</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  We store the contents of this form only as long as we need to
                  reply to you, and never share contact details with third
                  parties. Ask us to delete your record any time at{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                  .
                </p>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}

function FormSkeleton() {
  return (
    <div className="space-y-5 animate-pulse">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="h-20 rounded-md bg-surface-soft" />
        <div className="h-20 rounded-md bg-surface-soft" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="h-20 rounded-md bg-surface-soft" />
        <div className="h-20 rounded-md bg-surface-soft" />
      </div>
      <div className="h-40 rounded-md bg-surface-soft" />
      <div className="h-12 rounded-md bg-surface-soft" />
    </div>
  );
}
