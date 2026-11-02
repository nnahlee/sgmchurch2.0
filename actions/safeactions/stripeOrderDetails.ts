"use server";

import { actionClient } from "@/../lib/safe-actions/safe-action";
import { stripe } from "@/../providers/stripe/stripe";
import { redirect } from "next/navigation";
import {
  stripeOrderDetailSchema,
  receiptReturnSchema,
} from "@/../zodtypes/zodTypes";

export const stripeOrderDetailsAction = actionClient
  .inputSchema(stripeOrderDetailSchema)
  .outputSchema(receiptReturnSchema)
  .action(async ({ parsedInput }) => {
    const { params, searchParams } = parsedInput;
    const { locale } = params;
    const { session_id } = searchParams;

    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items", "payment_intent"],
    });
    if (!session) {
      throw new Error("Stripe checkout session not found.");
    }

    if (session.status !== "complete" || session.payment_status !== "paid") {
      return redirect(`/${locale}/donate`);
    }

    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(now);

    return {
      receiptNumber: "SGMC-" + now.getTime(),
      receiptDate: formattedDate,
      donationDate: formattedDate,
      status: session.status,

      verified: true,
      amount: session.amount_total,
      currency: session.currency,
      name: session.customer_details?.name ?? null,
      email: session.customer_details?.email ?? null,
    };
  });
