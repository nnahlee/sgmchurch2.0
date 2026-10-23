// server generated

import { ReceiptReturnTypes } from "../../../../zodtypes/zodTypes";
import { InvoiceModernDocument } from "@/components/pdf/blocks/invoice-modern/invoice-modern";
import { type DonationReceiptData } from "@/components/pdf/blocks/invoice-modern/invoice-modern";
export type DonationReceiptTypes = {
  receiptData?: ReceiptReturnTypes;
};

const DonationReceipt = ({ receiptData }: DonationReceiptTypes) => {
  console.log(receiptData);
  if (!receiptData) {
    return <p>Unable to verify this donation.</p>;
  }

  if (
    receiptData.amount == null ||
    !receiptData.currency ||
    !receiptData.name
  ) {
    return <p>Donation receipt information is incomplete.</p>;
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
    donorName: receiptData.name,
    amount: receiptData.amount / 100,
    currency: receiptData.currency,
  };

  return (
    <div className="">
      <InvoiceModernDocument data={data} />
    </div>
  );
};

export default DonationReceipt;
