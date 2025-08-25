"use client";

import React, { useEffect, Suspense } from "react";
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
  const { execute, error, data } = useServerAction(stripeAction);
  useEffect(() => {
    const fetchStripeClientSecret = async () => {
      const [secretKey] = await execute();
    };
    fetchStripeClientSecret();
  }, [execute]);

  return (
    <Suspense
      fallback={
        <div className="flex justify-center flex-col items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      }
    >
      <div className="md:p-16 p-4 min-h-[50vh]" id="checkout">
        {/* {error && toast.error("Something Went Wrong")}  */}
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{
            clientSecret: data,
          }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </Suspense>
  );
};

export default StripeDonation;
