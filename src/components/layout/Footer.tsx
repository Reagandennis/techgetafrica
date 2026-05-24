import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Divider } from "@/components/ui/Divider";
import { siteConfig } from "@/lib/site";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.989V9h3.102v1.561h.043c.432-.818 1.487-1.681 3.062-1.681 3.275 0 3.88 2.155 3.88 4.959v6.613zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zM6.956 20.452H3.715V9h3.241v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialIcons = {
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  github: GithubIcon,
  youtube: YoutubeIcon,
};

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-surface" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Divider />
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-muted">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-ink-soft hover:text-primary"
              >
                <Mail className="size-4" />
                {siteConfig.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4" />
                {siteConfig.locations.join(" · ")}
              </span>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8"
          >
            {Object.entries(siteConfig.footerNav).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-eyebrow text-ink-soft">{heading}</h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <Divider className="mt-14" />

        <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} TechGetAfrica Ltd · Built for the long run.
          </p>
          <ul className="flex items-center gap-1">
            {Object.entries(siteConfig.social).map(([key, href]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons];
              if (!Icon) return null;
              return (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`TechGetAfrica on ${key}`}
                    className="inline-flex size-9 items-center justify-center rounded-md text-muted ring-1 ring-transparent transition-colors hover:bg-surface-soft hover:text-ink hover:ring-border"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
