// import DonationReceipt from "./DonationReceipt";
import { redirect } from "next/navigation";
import { DonationReceiptPreview } from "./DonationPreview";
import { stripeOrderDetailsAction } from "@/../actions/safeactions/stripeOrderDetails";
import type { Metadata } from "next";
type DonationReceiptTypes = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ session_id: string }>;
};

export async function generateMetadata({
  params,
}: DonationReceiptTypes): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "ko" ? "기부 완료" : "Donation Successful",
    robots: {
      index: false,
      follow: false,
    },
  };
}

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
