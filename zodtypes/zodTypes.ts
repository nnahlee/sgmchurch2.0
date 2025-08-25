import { z } from "zod";
import { inferServerActionReturnData } from "zsa";
import { stripeAction } from "../actions/stripe";

export const contactFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.email().min(1, {
    message: "Email is required",
  }),
  phone: z.string().optional(),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});

export type FormTypes = z.infer<typeof contactFormSchema>;
export type inferReturnStripeType = inferServerActionReturnData<
  typeof stripeAction
>;
