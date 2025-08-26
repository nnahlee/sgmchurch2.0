"use client";

import React, { useEffect } from "react";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "sonner";
// server action
import { stripeAction } from "../../../actions/stripe";
import { useServerAction } from "zsa-react";
import { Skeleton } from "@/components/ui/skeleton";
const stripePublishKey =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_LIVE_STRIPE_PUBLISH_KEY!
    : process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISH_KEY!;

const stripePromise = loadStripe(stripePublishKey);

const StripeDonation = () => {
  const { execute, error } = useServerAction(stripeAction);

  const [clientSecret, setClientSecret] = React.useState<string | null>(null);

  useEffect(() => {
    const fetchStripeClientSecret = async () => {
      const [secretKey] = await execute();
      setClientSecret(secretKey); // store it in state
    };
    fetchStripeClientSecret();
  }, [execute]);

  if (error) {
    toast.error("Something Went Wrong");
  }

  if (!clientSecret)
    return (
      <div className="flex flex-col justify-center items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );

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
