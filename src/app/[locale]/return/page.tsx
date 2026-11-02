// import redirect from "next";
import { redirect } from "next/navigation";
import DonationSuccess from "@/app/[locale]/donation-success/DonationSuccess";

import { sendPDFAction } from "@/../actions/safeactions/SendPDF";
import { stripeOrderDetailsAction } from "@/../actions/safeactions/stripeOrderDetails";
// https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
// id session be different for every user on request
type ReturnPageTypes = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ session_id: string }>;
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

  const payload = {
    params: { locale },
    searchParams: { session_id },
  };

  const { data } = await stripeOrderDetailsAction(payload);

  if (!data) {
    console.error("Error fetching order details");
    return redirect(`/${locale}/donate`);
  }

  const receiptUrl =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/${locale}/donation-receipt?session_id=${session_id}`
      : `https://sgmchurch.com/${locale}/donation-receipt?session_id=${session_id}`;

  const emailPayload = {
    receiptUrl,
    amount: data.amount ? (data.amount / 100).toFixed(2) : "0.00",
    donationDate: data.donationDate,
    email: data.email as string,
    transactionId: data.receiptNumber,
  };
  const { serverError } = await sendPDFAction(emailPayload);

  if (serverError) {
    console.error("Error sending email:", serverError);
  }

  if (data.status === "complete") {
    return (
      <section id="success">
        <DonationSuccess />
      </section>
    );
  }
}
