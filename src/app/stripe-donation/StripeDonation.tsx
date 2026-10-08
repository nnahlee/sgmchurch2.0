"use client";

import React, { useEffect } from "react";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Skeleton } from "../../components/ui/skeleton";

const stripePublishKey =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_LIVE_STRIPE_PUBLISH_KEY!
    : process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISH_KEY!;

const stripePromise = loadStripe(stripePublishKey);
import { inferReturnStripeType } from "../../../zodtypes/zodTypes";

type StripeDonationTypes = {
  clientSecret: inferReturnStripeType | null;
};

const StripeDonation = ({ clientSecret }: StripeDonationTypes) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!clientSecret) {
    return (
      <div className="flex  min-h-[70vh] justify-center items-center gap-8">
        <Skeleton className="size-16 shrink-0 rounded-full" />
        <div className="grid gap-2">
          <Skeleton className="h-6 w-[450px]" />
          <Skeleton className="h-6 w-[400px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="md:p-16 p-4 min-h-[50vh]" id="checkout">
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
