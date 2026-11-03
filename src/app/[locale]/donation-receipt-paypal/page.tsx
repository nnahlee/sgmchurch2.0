import { PaypalDonationPreview } from "./PaypalDonationPreview";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { verifyPaypalPdt } from "@/../lib/paypal/paypal-pdt-verify";
// page 20 reference
// https://www.paypalobjects.com/en_US/DE/pdf/PP_OrderManagement_IntegrationGuide.pdf
// A transaction token is passed to the return URL tx=value_of_transaction_token
// need to use at=identity token value too

type PaypalDonationReceiptTypes = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tx?: string }>;
};

export async function generateMetadata({
  params,
}: PaypalDonationReceiptTypes): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ko" ? "PayPal 기부 영수증" : "Paypal Donation Successful",
    robots: {
      index: false,
      follow: false,
    },
  };
}

const DonationPaypalReceiptPage = async ({
  searchParams,
}: PaypalDonationReceiptTypes) => {
  const { tx } = await searchParams;

  if (!tx) {
    return redirect("/");
  }

  const isPdtVerified = await verifyPaypalPdt(tx);

  // console.log(`is verified ${isPdtVerified}`);

  if (!isPdtVerified) {
    redirect("/");
  }

  return (
    <div>
      <PaypalDonationPreview />
    </div>
  );
};

export default DonationPaypalReceiptPage;
