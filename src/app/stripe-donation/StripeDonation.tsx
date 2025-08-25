"use client";

import React, { useEffect, useState } from "react";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "sonner";
// server action
import { stripeAction } from "../../../actions/stripe";
import { useServerAction } from "zsa-react";

const stripePublishKey =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_LIVE_STRIPE_PUBLISH_KEY!
    : process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISH_KEY!;

const stripePromise = loadStripe(stripePublishKey);

const StripeDonation = () => {
  const [clientSecret, setClientSecret] = React.useState<string | null>(null);
  const { execute, error } = useServerAction(stripeAction);
  useEffect(() => {
    const fetchStripeClientSecret = async () => {
      const [secretKey] = await execute();
      setClientSecret(secretKey);
    };
    fetchStripeClientSecret();
  }, [execute]);

  return (
    <div
      className="md:p-16 p-4 min-h-[50vh]
    "
      id="checkout"
    >
      {error && toast.error("Something Went Wrong")}
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{
          clientSecret: clientSecret,
        }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default StripeDonation;
