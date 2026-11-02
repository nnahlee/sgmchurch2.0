// import DonationReceipt from "./DonationReceipt";
import { redirect } from "next/navigation";
import { DonationReceiptPreview } from "./DonationPreview";
import { stripeOrderDetailsAction } from "@/../actions/safeactions/stripeOrderDetails";

type DonationReceiptTypes = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ session_id: string }>;
};

const DonationReceiptPage = async ({
  params,
  searchParams,
}: DonationReceiptTypes) => {
  const { locale } = await params;
  const { session_id } = await searchParams;
  const payload = {
    params: { locale },
    searchParams: { session_id },
  };

  const { data, serverError } = await stripeOrderDetailsAction(payload);

  if (serverError || !data) {
    console.error("Error fetching order details:", serverError);
    redirect(`/${locale}/donate`);
  }

  return (
    <div>
      <DonationReceiptPreview data={data} />
    </div>
  );
};

export default DonationReceiptPage;
