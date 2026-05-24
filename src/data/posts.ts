import type { Post } from "@/lib/types";

export const posts: Post[] = [
  {
    slug: "what-we-look-for-in-engineers",
    title: "What we actually look for when we hire engineers",
    excerpt:
      "After placing 240+ engineers across the continent, here's the honest list — and the things we stopped caring about along the way.",
    body: `Hiring is a strange ritual. We dress it up in rubrics and rounds, but most engineering hires are, at heart, a guess about whether someone will be useful in the messy middle of a project six months from now.

After 240+ placements across the continent, here's the honest version of what our recruitment team weights, and what we've stopped caring about.

## What we care about

**Clear writing.** Almost every modern engineering team works async at least some of the time. The ability to put a problem, an option, and a recommendation in a paragraph is the single highest-correlation skill we see with later success. We test it explicitly in the take-home.

**Comfort being wrong.** We don't run gotcha interviews — we run paired problems and watch how candidates respond when we push back. The ones who say "huh, let me think" and reach for the whiteboard tend to thrive. The ones who get defensive don't.

**Operational instincts.** What does this fail like? How would you know? Engineers who reach for observability questions early — even at mid-level — make better teammates than those who only think about the happy path.

## What we stopped caring about

**Big-tech logos.** A FAANG line on a CV used to bump candidates up in our scoring. It doesn't anymore. We've seen too many people who built one slice of one system and don't know how to operate end-to-end.

**Algorithmic puzzles.** We did them for years out of habit. They don't predict performance on the kind of product engineering we hire for, and they punish candidates who didn't have the time to grind LeetCode.

**Years of experience as a threshold.** We've placed brilliant 2-year engineers into staff-leaning roles when the role really wanted ownership, not a specific set of past systems. The conversation should be about what someone can do, not how long they've been doing it.

## What this means if you're hiring with us

Tell us what success looks like in the first six months of the role — not the seniority box. We'll work backwards from there. The best matches we make tend to be the ones where the hiring manager could describe, in two sentences, the change they want in their team in a year.`,
    date: "2026-05-12",
    author: { name: "Wanjiru Mwangi", role: "Head of Recruitment" },
    tags: ["Hiring", "Engineering"],
    hue: "blue",
  },
  {
    slug: "why-we-train-in-cohorts",
    title: "Why we still train in cohorts",
    excerpt:
      "Async, on-demand learning has its place. For going from beginner to job-ready in a craft, cohorts still win — and here's the data behind that claim.",
    body: `Every six months, somebody asks us if we'll launch a self-paced version of our bootcamp. The honest answer is: not yet, and probably not for a long time.

Here's what we've learned from running cohort-based training for four years.

## Cohorts trade flexibility for accountability

The single biggest predictor of completion in our programs isn't the curriculum, the instructor, or the price — it's the cohort. People show up because their peers will notice if they don't. Async learners can pause indefinitely; cohort learners get pulled along.

Our internal data: cohort completion sits at 87%, our short-lived async pilot peaked at 31%. That's not a small gap.

## Critique culture is hard to fake asynchronously

In a design or engineering program, the highest-leverage moments are when someone defends a choice and a peer pushes back. You can do this async, but it's slow and most people opt out.

Live critique forces clarity. Most of our graduates point to a specific critique session as the moment something clicked.

## When async makes sense

For people who already work in the field, short async courses on a specific topic — say, our "AI for Product Engineers" program — work fine. The bar to learning is low; the bar to job-readiness is what cohorts unlock.

If we ever ship self-paced foundations, it'll be for working engineers expanding a known skill set — not for first-job seekers.`,
    date: "2026-05-04",
    author: { name: "Tendai Mhlanga", role: "Director of Programs" },
    tags: ["Training", "Programs"],
    hue: "green",
  },
  {
    slug: "shipping-offline-first-for-kazi-health",
    title: "Shipping offline-first software for clinics that drop offline daily",
    excerpt:
      "A field report from rebuilding the Kazi Health EHR. What we got right, what we got wrong, and the architecture that's still standing.",
    body: `Most "offline-first" guides are written by people who tested in airplane mode. Our partners at Kazi Health work in clinics where the connection genuinely disappears for hours, sometimes days.

Here's what survived contact with that reality.

## We picked a local-first database, not a cache

Caching APIs and falling back is a fragile pattern when the network is gone for real. We went with a local SQLite database as the source of truth on-device, and a bidirectional sync engine to push to a central Postgres.

## Conflict resolution is a product decision, not a technical one

The library will give you primitives. The product team has to decide what "wins" when two clinicians edit the same record. We sat in clinics for two weeks watching this happen before we wrote a single line of conflict-resolution code.

The rule we landed on: clinician edits beat sync-down edits, with a visible diff and a one-tap undo. It's not academically elegant. It works.

## The hardest part is the UI

When you don't know if the user is online, every save, every sync indicator, every "are you sure" dialog needs to make sense in both states. We rewrote the sync indicator three times. The final version is two words: "saved here" or "saved everywhere".`,
    date: "2026-04-22",
    author: { name: "Kofi Asante", role: "Principal Engineer" },
    tags: ["Engineering", "Case study"],
    hue: "amber",
  },
  {
    slug: "the-three-lines-of-work",
    title: "Train, build, place — and why we keep all three",
    excerpt:
      "We get asked once a quarter to split the company into three. Here's why we keep training, agency, and recruitment under one roof.",
    body: `Every quarter, somebody — usually a well-meaning investor — suggests we split the company up. Training, agency, and recruitment, the argument goes, are three different businesses with three different customers.

They're right on the surface, and wrong on the substance.

## The three lines feed each other

Our recruitment team places hundreds of engineers a year. The signal they get from interviewing thousands of candidates flows directly into our training programs — we know what hiring managers ask, what gaps they see, what they actually pay for.

Our agency ships software for ambitious customers. The patterns we see on those projects flow into our training: what production really looks like, what tooling actually matters, what failure modes show up at scale.

Our training program graduates feed both sides: some of our best agency hires come from our cohorts; our recruitment team knows the strongest candidates personally because we taught them.

## Customers benefit from the wholeness

When a client hires us to build a product, we can also place a senior engineer in their team to maintain it after we leave. When they want to skill up their existing team, we can run a private cohort. When they need to hire faster, our talent pool is already pre-vetted.

The whole really is more than the sum of its parts. We'll keep it that way.`,
    date: "2026-04-08",
    author: { name: "Amara Okafor", role: "CEO" },
    tags: ["Company", "Strategy"],
    hue: "violet",
  },
  {
    slug: "what-a-real-design-system-looks-like",
    title: "What a design system actually looks like once it's two years old",
    excerpt:
      "A walkthrough of how a real, in-production design system evolves — including the things that don't show up on launch day.",
    body: `It's easy to launch a design system. It's much harder to have one that's still useful, well-loved, and well-maintained two years later.

Here's the unsexy story of how our design system at Moja Pay aged. (We helped build it; the team owns it now.)

## Year one is about the primitives

Tokens, button, input, modal, table. The boring stuff. If your year-one system doesn't ship these and get them adopted, nothing else matters.

We spent the first six months purely on adoption. The design system team didn't ship new components — they paired with product teams to migrate existing screens to the primitives.

## Year two is about the unsexy systems work

Versioning. Deprecation. A real changelog. Visual regression tests. Docs that explain *why*, not just *what*.

The biggest year-two unlock for the Moja team was a public roadmap. Once product teams could see what was coming, they stopped reinventing things in their own corners.

## What still doesn't get talked about

Design system teams in production live or die on relationships with product teams. The best DS teams we've worked with treat product teams as customers — they do office hours, they ship requested components, they say no with clear reasons. The ones that fail are the ones that treat the design system as a place where the rules live.`,
    date: "2026-03-19",
    author: { name: "Lerato Dube", role: "Design Director" },
    tags: ["Design", "Engineering"],
    hue: "slate",
  },
  {
    slug: "interview-prep-the-honest-version",
    title: "Interview prep, the honest version",
    excerpt:
      "We coach hundreds of candidates a year. Here's the shortest, most honest prep guide we'd give a friend.",
    body: `If you have an interview next week and you only have a few hours to prep, here's what we'd tell a friend.

## Pick three projects and learn to talk about them

For each project: what was the problem, what did you do, what did you learn, and what would you do differently? Two minutes each. Practice out loud.

## Have a take on the company

Spend 30 minutes on the company's website and any recent press. Form an opinion about something — a product choice, a market they're in, anything. Bring it up. It signals you care.

## Be honest about gaps

The fastest way to lose an interviewer is to bluff. The fastest way to win them over is to say "I haven't done that, but here's how I'd approach it." Senior engineers love that.

## Ask one question that isn't on the FAQ

"What's a hard problem the team is working on right now?" works almost everywhere. So does "what's something you wish you'd known before you joined?". Skip "what's the company culture like?".

## After the interview

Send a short thank-you email the same day. Two sentences is enough. Most candidates don't, and the ones who do stand out.`,
    date: "2026-03-02",
    author: { name: "Wanjiru Mwangi", role: "Head of Recruitment" },
    tags: ["Hiring", "Careers"],
    hue: "rose",
  },
];
