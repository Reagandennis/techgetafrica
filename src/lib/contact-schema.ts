import { z } from "zod";

export const contactTopics = [
  { value: "Build", label: "I want to build something (agency)" },
  { value: "Hire", label: "I want to hire someone (recruitment)" },
  { value: "Job", label: "I'm looking for a role (candidate)" },
  { value: "Train", label: "I want to enroll in a program" },
  { value: "Other", label: "Something else" },
] as const;

export type ContactTopic = (typeof contactTopics)[number]["value"];

export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Please share your name")
    .max(120, "That's a long name — please shorten it"),
  email: z
    .string()
    .min(1, "We'll need an email to reply")
    .email("That doesn't look like a valid email")
    .max(200),
  company: z.string().max(120).optional().or(z.literal("")),
  topic: z.enum(["Build", "Hire", "Job", "Train", "Other"], {
    message: "Pick the option that fits best",
  }),
  message: z
    .string()
    .min(20, "A few more words please — at least 20 characters")
    .max(4000, "Let's keep it under 4,000 characters"),
  consent: z
    .boolean()
    .refine((v) => v === true, "Please confirm before sending"),
});

export type ContactInput = z.infer<typeof ContactSchema>;
