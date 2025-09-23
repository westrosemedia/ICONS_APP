import { z } from "zod";

// shared contact object
const contact = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional()
});

// Spotlight
export const spotlightSchema = z.object({
  contact,
  city: z.enum(["Calgary", "Vancouver", "Toronto", "Other"], { required_error: "Choose a city" }),
  preferredDates: z.string().min(2, "Tell us your ideal dates"),
  brandGoals: z.string().min(5, "Tell us your goals"),
  usage: z.array(z.enum(["Social", "Website", "Ads", "Press"])).nonempty("Pick at least one"),
  addOns: z.array(z.enum(["Extra images", "Extra video", "Rush edit"])).optional(),
  notes: z.string().optional()
});

// WRM Lite
export const liteSchema = z.object({
  contact,
  businessStage: z.enum(["Early", "Mid", "Scaling"]),
  contentPain: z.string().min(5, "Tell us what feels heavy"),
  goals90: z.string().min(5, "What is the 90 day target"),
  approvalProcess: z.enum(["Solo", "Team of 2", "Team of 3+"]),
  platforms: z.array(z.enum(["IG", "TikTok", "YT", "LI", "FB"])).nonempty("Pick at least one"),
  terms: z.literal(true, { errorMap: () => ({ message: "You must agree to the terms" }) }),
  notes: z.string().optional()
});

// Immersion or Event
export const immersionSchema = z.object({
  contact,
  eventName: z.string().min(2),
  dates: z.string().min(2),
  location: z.string().min(2),
  participants: z.coerce.number().int().min(1).max(10),
  wantParticipantContent: z.enum(["Yes", "No"]),
  twoShooters: z.enum(["Yes", "No"]),
  deliverables: z.enum(["Photos only", "Video only", "Both"]),
  notes: z.string().optional()
});

// ICON
export const iconSchema = z.object({
  contact,
  monthlyRevenue: z.enum(["<10k", "10k-50k", "50k-100k", "100k+"]),
  bottlenecks: z.string().min(5),
  desiredOutcome: z.string().min(5),
  teamSize: z.enum(["1", "2-5", "6-10", "10+"]),
  commitment: z.literal(true, { errorMap: () => ({ message: "Please confirm partnership terms" }) }),
  notes: z.string().optional()
});

export type SpotlightForm = z.infer<typeof spotlightSchema>;
export type LiteForm = z.infer<typeof liteSchema>;
export type ImmersionForm = z.infer<typeof immersionSchema>;
export type IconForm = z.infer<typeof iconSchema>;
