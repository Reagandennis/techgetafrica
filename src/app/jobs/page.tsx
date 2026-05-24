import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { JobsBoard } from "@/components/jobs/JobsBoard";
import { CTABand } from "@/components/home/CTABand";
import { jobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Open roles",
  description:
    "Engineering, design, product, data, and DevOps roles we&rsquo;re currently filling for companies across the continent.",
};

export default function JobsPage() {
  // Newest first
  const sorted = [...jobs].sort(
    (a, b) => +new Date(b.postedAt) - +new Date(a.postedAt),
  );

  return (
    <>
      <PageHeader
        eyebrow="Jobs board"
        title={
          <>
            Roles we&rsquo;re currently working on —
            <span className="text-primary"> real ones, hand-curated.</span>
          </>
        }
        lede="Each role is one we&rsquo;d apply for ourselves. Filter by what matters to you, or get in touch and we&rsquo;ll let you know when something fits."
      />
      <JobsBoard jobs={sorted} />
      <CTABand />
    </>
  );
}
