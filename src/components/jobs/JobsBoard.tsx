"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  MapPin,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Input, Label, Select } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { Job } from "@/lib/types";

type Props = {
  jobs: Job[];
};

const ALL = "All";

export function JobsBoard({ jobs }: Props) {
  const [query, setQuery] = React.useState("");
  const [role, setRole] = React.useState<string>(ALL);
  const [remote, setRemote] = React.useState<string>(ALL);
  const [type, setType] = React.useState<string>(ALL);

  const roles = React.useMemo(
    () => [ALL, ...Array.from(new Set(jobs.map((j) => j.role)))],
    [jobs],
  );
  const remotes = React.useMemo(
    () => [ALL, ...Array.from(new Set(jobs.map((j) => j.remote)))],
    [jobs],
  );
  const types = React.useMemo(
    () => [ALL, ...Array.from(new Set(jobs.map((j) => j.type)))],
    [jobs],
  );

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((j) => {
      if (role !== ALL && j.role !== role) return false;
      if (remote !== ALL && j.remote !== remote) return false;
      if (type !== ALL && j.type !== type) return false;
      if (
        q &&
        ![j.title, j.company, j.location, j.summary]
          .join(" ")
          .toLowerCase()
          .includes(q)
      )
        return false;
      return true;
    });
  }, [jobs, role, remote, type, query]);

  const reset = () => {
    setQuery("");
    setRole(ALL);
    setRemote(ALL);
    setType(ALL);
  };

  const activeFilters =
    Number(role !== ALL) + Number(remote !== ALL) + Number(type !== ALL);

  return (
    <Container className="py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Filters */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24 space-y-6 rounded-xl border border-border bg-surface p-6">
            <div className="flex items-center justify-between">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                <SlidersHorizontal className="size-4" />
                Filters
              </p>
              {activeFilters + (query ? 1 : 0) > 0 && (
                <button
                  type="button"
                  onClick={reset}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="job-search">Search</Label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-soft" />
                <Input
                  id="job-search"
                  placeholder="Role, company, location…"
                  className="pl-9"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="job-role">Role</Label>
              <Select
                id="job-role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="job-remote">Work setup</Label>
              <Select
                id="job-remote"
                value={remote}
                onChange={(e) => setRemote(e.target.value)}
              >
                {remotes.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="job-type">Employment type</Label>
              <Select
                id="job-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {types.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </aside>

        {/* Job list */}
        <div className="lg:col-span-9">
          <div className="mb-6 flex items-baseline justify-between">
            <p className="text-sm text-muted">
              <span className="font-semibold text-ink">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "role" : "roles"} open
            </p>
          </div>

          {filtered.length === 0 ? (
            <Card variant="outlined" className="p-10 text-center">
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                Nothing matches those filters — yet.
              </h3>
              <p className="mt-3 text-muted">
                Try clearing the filters or{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  tell us what you&rsquo;re looking for
                </Link>{" "}
                — we work the network constantly.
              </p>
            </Card>
          ) : (
            <ul className="space-y-3">
              {filtered.map((job) => (
                <li key={job.slug}>
                  <Link
                    href={`/jobs/${job.slug}`}
                    className="group block rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <Badge tone="primary">{job.role}</Badge>
                          <Badge tone="neutral">{job.type}</Badge>
                          <Badge tone="neutral">{job.remote}</Badge>
                        </div>
                        <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight text-ink group-hover:text-primary">
                          {job.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted">{job.summary}</p>
                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
                          <span className="inline-flex items-center gap-1.5">
                            <Building2 className="size-3.5" />
                            {job.company}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="size-3.5" />
                            {job.location}
                          </span>
                          <span>Posted {formatDate(job.postedAt)}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-3 text-right">
                        <span className="font-display text-sm font-semibold text-ink">
                          {job.salaryRange}
                        </span>
                        <ArrowUpRight className="size-5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Container>
  );
}
