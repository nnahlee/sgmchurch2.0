import { PaypalDonationPreview } from "./PaypalDonationPreview";
import type { DonationReceiptData } from "@/components/pdf/blocks/invoice-modern/invoice-modern";

const now = new Date();
const formattedDate = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(now);

const data: DonationReceiptData = {
  receiptNumber: "SGMC-" + now.getTime(),
  receiptDate: formattedDate,
  donorName: "MR./MS.",
  donationDate: formattedDate,
  currency: "usd",
  amount: 0,
};

const DonationPaypalReceiptPage = () => {
  return (
    <div>
      <PaypalDonationPreview data={data} />
    </div>
  );
};

export default DonationPaypalReceiptPage;
