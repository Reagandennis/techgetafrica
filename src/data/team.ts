import type { TeamMember, Value } from "@/lib/types";
import { HeartHandshake, Compass, GraduationCap, Hammer, Sparkles } from "lucide-react";

export const team: TeamMember[] = [
  {
    name: "Amara Okafor",
    role: "Co-founder & CEO",
    bio: "Built and sold a fintech in Lagos before starting TechGetAfrica. Spends most of her time with customers and candidates.",
    location: "Lagos",
    hue: "blue",
  },
  {
    name: "Kwame Adusei",
    role: "Co-founder & COO",
    bio: "Ran operations for a 600-person engineering org before joining the founding team. Allergic to vanity metrics.",
    location: "Accra",
    hue: "green",
  },
  {
    name: "Wanjiru Mwangi",
    role: "Head of Recruitment",
    bio: "Twelve years matching engineers and companies. Has a sixth sense for whether a culture-fit conversation is real or a euphemism.",
    location: "Nairobi",
    hue: "amber",
  },
  {
    name: "Tendai Mhlanga",
    role: "Director of Programs",
    bio: "Built and ran the curriculum from cohort one. Will out-argue you on the case for cohort-based learning.",
    location: "Harare",
    hue: "violet",
  },
  {
    name: "Kofi Asante",
    role: "Principal Engineer",
    bio: "Reluctant TypeScript fan, enthusiastic SQL one. Leads the architecture review board across our client work.",
    location: "Accra",
    hue: "slate",
  },
  {
    name: "Lerato Dube",
    role: "Design Director",
    bio: "Spent ten years building design systems at fintech and edtech companies. Believes the best DS work is invisible.",
    location: "Johannesburg",
    hue: "rose",
  },
  {
    name: "Yusra Hassan",
    role: "Head of Talent Success",
    bio: "Runs candidate coaching and the post-placement support program. Pre-TGA, was a clinical psychologist.",
    location: "Nairobi",
    hue: "blue",
  },
  {
    name: "Mohamed Diop",
    role: "Engineering Manager",
    bio: "Manages the platform pod. Previously led engineering at a Senegal-based logistics startup.",
    location: "Dakar",
    hue: "green",
  },
];

export const values: Value[] = [
  {
    title: "Plain talk",
    description:
      "Clear writing, honest scoping, and no jargon for jargon's sake — internally with each other and externally with everyone else.",
    icon: Compass,
  },
  {
    title: "Craft, not theatre",
    description:
      "We optimise for the work being good, not for the work looking impressive in a quarterly review.",
    icon: Hammer,
  },
  {
    title: "Generous mentorship",
    description:
      "The people we train, hire, and place all get senior attention. It's the most repeatable thing we do well.",
    icon: GraduationCap,
  },
  {
    title: "Care, then competence",
    description:
      "We hire for both, in that order. We can teach competence to people who care. We cannot teach the opposite.",
    icon: HeartHandshake,
  },
  {
    title: "Small enough to mean it",
    description:
      "We stay small enough that the founders still know every team member's name and every client's roadmap.",
    icon: Sparkles,
  },
];
