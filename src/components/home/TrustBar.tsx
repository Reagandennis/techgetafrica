import { Container } from "@/components/ui/Container";
import { trustLogos } from "@/data/stats";

export function TrustBar() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="border-y border-border bg-surface py-10"
    >
      <Container>
        <p
          id="trust-heading"
          className="text-eyebrow text-center text-muted"
        >
          Trusted by teams building & hiring across the continent
        </p>
        <ul className="mt-7 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 opacity-90 sm:grid-cols-3 md:grid-cols-7">
          {trustLogos.map((logo) => (
            <li key={logo.name}>
              <LogoPlaceholder name={logo.name} monogram={logo.monogram} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function LogoPlaceholder({ name, monogram }: { name: string; monogram: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-muted-soft transition-colors hover:text-ink-soft"
      title={name}
    >
      <span className="flex size-7 items-center justify-center rounded-md bg-surface-soft text-[11px] font-semibold text-ink-soft ring-1 ring-border">
        {monogram}
      </span>
      <span className="font-display text-sm font-semibold tracking-tight">
        {name}
      </span>
    </span>
  );
}
