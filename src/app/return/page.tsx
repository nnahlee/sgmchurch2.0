// import redirect from "next";
import { redirect } from "next/navigation";

import { stripe } from "../../../providers/stripe/stripe";
import DonationSuccess from "@/app/donation-success/DonationSuccess";

// https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes

type ReturnPageTypes = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function ReturnPage({ searchParams }: ReturnPageTypes) {
  const { session_id } = await searchParams;

  if (!session_id) throw new Error("Missing Stripe Checkout session ID.");

  const { status } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open" || status === "expired") {
    return redirect("/donate");
  }

  if (status === "complete") {
    return (
      <section id="success">
        <DonationSuccess />
      </section>
    );
  }
}
