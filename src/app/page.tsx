import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Pillars } from "@/components/home/Pillars";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { FeaturedPrograms } from "@/components/home/FeaturedPrograms";
import { Testimonials } from "@/components/home/Testimonials";
import { Stats } from "@/components/home/Stats";
import { LatestPosts } from "@/components/home/LatestPosts";
import { CTABand } from "@/components/home/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Pillars />
      <FeaturedWork />
      <Stats />
      <FeaturedPrograms />
      <Testimonials />
      <LatestPosts />
      <CTABand />
    </>
  );
}
