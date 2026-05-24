"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled
          ? "bg-canvas/85 backdrop-blur-md ring-1 ring-border/70"
          : "bg-transparent",
      )}
    >
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between md:h-20"
        >
          <Logo variant="default" />

          <ul className="hidden items-center gap-1 md:flex">
            {siteConfig.primaryNav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-flex h-9 items-center rounded-md px-3 text-sm font-medium tracking-tight transition-colors",
                      active
                        ? "text-primary"
                        : "text-ink-soft hover:text-ink hover:bg-surface-soft",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-px h-px bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              iconRight={<ArrowRight className="size-4" />}
            >
              Get in touch
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md text-ink ring-1 ring-border md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden"
          >
            <div className="border-t border-border bg-surface">
              <Container>
                <ul className="flex flex-col py-3">
                  {siteConfig.primaryNav.map((item) => {
                    const active =
                      pathname === item.href ||
                      (item.href !== "/" && pathname?.startsWith(item.href));
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between rounded-md px-3 py-3 text-base font-medium tracking-tight",
                            active ? "text-primary bg-primary-soft" : "text-ink",
                          )}
                        >
                          <span>{item.label}</span>
                          <ArrowRight className="size-4 opacity-60" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="border-t border-border py-4">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    fullWidth
                    iconRight={<ArrowRight className="size-4" />}
                  >
                    Get in touch
                  </Button>
                </div>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
