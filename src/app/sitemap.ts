import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { portfolioProjects } from "@/data/portfolio";
import { jobs } from "@/data/jobs";
import { programs } from "@/data/programs";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/services",
    "/portfolio",
    "/recruitment",
    "/jobs",
    "/programs",
    "/blog",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioProjects.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const jobRoutes: MetadataRoute.Sitemap = jobs.map((j) => ({
    url: `${base}/jobs/${j.slug}`,
    lastModified: new Date(j.postedAt),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const programRoutes: MetadataRoute.Sitemap = programs.map((p) => ({
    url: `${base}/programs/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...portfolioRoutes,
    ...jobRoutes,
    ...programRoutes,
    ...postRoutes,
  ];
}
