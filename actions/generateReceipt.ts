"use server";
import { createServerAction } from "zsa";
import { stripe } from "../providers/stripe/stripe";

import { receiptTypeSchema, receiptReturnSchema } from "../zodtypes/zodTypes";
export const generateReceiptAction = createServerAction()
  .input(receiptTypeSchema)
  .output(receiptReturnSchema)
  .handler(async ({ input }) => {
    // Ensure input is properly destructuring if using ZSA format
    const session = await stripe.checkout.sessions.retrieve(input.sessionId);

    // Fix: Throw if the session is NOT found instead of returning empty
    if (!session) {
      throw new Error("Stripe checkout session not found.");
    }

    if (session.status !== "complete" || session.payment_status !== "paid") {
      throw new Error("Donation payment is not verified");
    }

    // Now TypeScript safely infers that this object is always returned if no errors occur
    return {
      verified: true,
      amount: session.amount_total,
      currency: session.currency,
      name: session.customer_details?.name ?? null,
    };
  });
