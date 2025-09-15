// https://docs.stripe.com/checkout/embedded/quickstart
import "server-only";

import Stripe from "stripe";

const stripeSecretKey =
  process.env.NODE_ENV === "production"
    ? process.env.STRIPE_SECRET_LIVE_KEY!
    : process.env.TEST_STRIPE_SECRET_KEY!;

if (!stripeSecretKey) {
  throw new Error("Stripe key not defined");
}

// non-null
// export const stripe = new Stripe(process.env.TEST_STRIPE_SECRET_KEY!);
export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-07-30.basil",
});
