import DonationSuccess from "./DonationSuccess";
import { Suspense } from "react";
const DonationSuccessPage = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading donation details...</p>}>
        <DonationSuccess />
      </Suspense>
    </div>
  );
};

export default DonationSuccessPage;
