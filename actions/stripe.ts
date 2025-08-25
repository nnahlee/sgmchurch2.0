"use server";
import { headers } from "next/headers";
import { stripe } from "../providers/stripe/stripe";
import { createServerAction } from "zsa";

export const stripeAction = createServerAction().handler(async () => {
  const origin = (await headers()).get("origin");

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        price: "price_1S06Y08ivRxcR8RmJubNRaVF",
        quantity: 1,
      },
    ],
    mode: "payment",
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  return session.client_secret;
});
