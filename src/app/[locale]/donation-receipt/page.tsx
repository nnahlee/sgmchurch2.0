// import DonationReceipt from "./DonationReceipt";
import { redirect } from "next/navigation";
import { generateReceiptAction } from "@/../actions/generateReceipt";
import { inferReturnReceiptData } from "@/../zodtypes/zodTypes";
import { DonationReceiptPreview } from "./DonationPreview";
import { type DonationReceiptData } from "@/components/pdf/blocks/invoice-modern/invoice-modern";
import { sendPdfEmailAction } from "@/../actions/sendPDF";
type DonationReceiptTypes = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ session_id?: string }>;
};

const DonationReceiptPage = async ({
  params,
  searchParams,
}: DonationReceiptTypes) => {
  const { locale } = await params;
  const { session_id } = await searchParams;
  if (!session_id) {
    redirect(`/${locale}`);
  }
  const [receiptDataConfirmed, error]: inferReturnReceiptData =
    await generateReceiptAction({
      sessionId: session_id,
    });

  if (error || !receiptDataConfirmed) {
    redirect(`/${locale}`);
  }

  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(now);

  const data: DonationReceiptData = {
    receiptNumber: "SGMC-" + now.getTime(),
    receiptDate: formattedDate,
    donationDate: formattedDate,
    donorName: receiptDataConfirmed.name,
    amount: receiptDataConfirmed.amount / 100,
    currency: receiptDataConfirmed.currency,
  };
  // send email
  const emailDataPayload = {
    amount: receiptDataConfirmed.amount.toString(),
    donationDate: formattedDate,
    receiptUrl: `https://sgmchurch.com/${locale}/donation-receipt?session_id=${session_id}`,
    email: receiptDataConfirmed.email,
    transactionId: data.receiptNumber,
  };
  if (receiptDataConfirmed.verified && receiptDataConfirmed.amount) {
    const mailData = await sendPdfEmailAction(emailDataPayload);
    console.log(mailData);
  }

  return (
    <div>
      <DonationReceiptPreview data={data} />
    </div>
  );
};

export default DonationReceiptPage;
