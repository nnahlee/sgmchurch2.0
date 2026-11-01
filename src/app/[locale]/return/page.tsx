// import redirect from "next";
import { redirect } from "next/navigation";

import { stripe } from "../../../../providers/stripe/stripe";
import DonationSuccess from "@/app/[locale]/donation-success/DonationSuccess";
import { sendPdfEmailAction } from "@/../actions/sendPDF";
// https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes

// id session be different for every user on request
type ReturnPageTypes = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ session_id?: string }>;
};

// This route reads searchParams, but keep it explicitly dynamic so it can
// never be statically cached with a stale checkout status.
// Run the server code for every request
export const dynamic = "force-dynamic";

export default async function ReturnPage({
  params,
  searchParams,
}: ReturnPageTypes) {
  const { session_id } = await searchParams;
  const { locale } = await params;
  if (!session_id) throw new Error("Missing Stripe Checkout session ID.");

  const { status, amount_total, customer_email, payment_intent } =
    await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items", "payment_intent"],
    });

  if (status === "open" || status === "expired") {
    return redirect("/donate");
  }

  const receiptUrl =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/${locale}/donation-receipt?session_id=${session_id}`
      : `https://sgmchurch.com/${locale}/donation-receipt?session_id=${session_id}`;

  const amount = amount_total ? (amount_total / 100).toFixed(2) : "0.00";

  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(now);
  const transactionId =
    typeof payment_intent === "string"
      ? payment_intent
      : (payment_intent?.id ?? "SGMC-" + now.getTime());

  const emailPayload = {
    receiptUrl,
    amount,
    donationDate: formattedDate,
    email: customer_email || "Noemail@gmail.com",
    transactionId,
  };
  const mailData = await sendPdfEmailAction(emailPayload);
  console.log(mailData);

  if (status === "complete") {
    return (
      <section id="success">
        <DonationSuccess />
      </section>
    );
  }
}
