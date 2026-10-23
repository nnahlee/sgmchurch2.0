import { z } from "zod";
import { inferServerActionReturnData, inferServerActionReturnType } from "zsa";
import { stripeAction } from "../actions/stripe";
import { generateReceiptAction } from "@/../actions/generateReceipt";

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

export const receiptTypeSchema = z.object({
  sessionId: z.string().min(1, {
    message: "id is required",
  }),
});

export const receiptReturnSchema = z.object({
  // pdf: z.string(),
  verified: z.boolean(),
  amount: z.number().nullable(),
  currency: z.string().nullable(),
  name: z.string().nullable(),
});

export type FormTypes = z.infer<typeof contactFormSchema>;
export type inferReturnStripeType = inferServerActionReturnData<
  typeof stripeAction
>;

export type ReceiptTypes = z.infer<typeof receiptTypeSchema>;

export type ReceiptReturnTypes = z.infer<typeof receiptReturnSchema>;
export type inferReturnReceiptType = inferServerActionReturnType<
  typeof generateReceiptAction
>;

export type inferReturnReceiptData = inferServerActionReturnData<
  typeof generateReceiptAction
>;
