import { PaypalDonationPreview } from "./PaypalDonationPreview";
import { redirect } from "next/navigation";
import { verifyPaypalPdt } from "@/../lib/paypal/paypal-pdt-verify";
// page 20 reference
// https://www.paypalobjects.com/en_US/DE/pdf/PP_OrderManagement_IntegrationGuide.pdf
// A transaction token is passed to the return URL tx=value_of_transaction_token
// need to use at=identity token value too

type PaypalDonationReceiptTypes = {
  searchParams: Promise<{ tx?: string }>;
};

const DonationPaypalReceiptPage = async ({
  searchParams,
}: PaypalDonationReceiptTypes) => {
  const { tx } = await searchParams;

  if (!tx) {
    return redirect("/");
  }

  const isPdtVerified = await verifyPaypalPdt(tx);

  console.log(`is verified ${isPdtVerified}`);

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
