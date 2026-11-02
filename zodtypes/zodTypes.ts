import { z } from "zod";
import { inferServerActionReturnData, inferServerActionReturnType } from "zsa";
import { stripeAction } from "../actions/stripe";
import { generateReceiptAction } from "@/../actions/generateReceipt";

export const sendEmailSchema = z.object({
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

export const stripeSessionSecretSchema = z.string().nullable();
export const stripeOrderDetailSchema = z.object({
  params: z.object({
    locale: z.string().min(1, {
      message: "locale is required",
    }),
  }),
  searchParams: z.object({
    session_id: z.string().min(1, {
      message: "session_id is required",
    }),
  }),
});

// stripe data return
export const receiptReturnSchema = z.object({
  // pdf: z.string(),
  receiptNumber: z.string(),
  receiptDate: z.string(),
  donationDate: z.string(),
  status: z.string(),

  verified: z.boolean(),
  amount: z.number().nullable(),
  currency: z.string().nullable(),
  name: z.string().nullable(),
  email: z.email().nullable(),
});

export const emailPdfSchema = z.object({
  amount: z.string().min(1, {
    message: "amount is required",
  }),
  donationDate: z.string(),
  receiptUrl: z.string(),
  email: z.email(),
  transactionId: z.string(),
});

export type EmailPdfTypes = z.infer<typeof emailPdfSchema>;

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
