import StripeDonation from "./StripeDonation";
import { stripeAction } from "../../../actions/stripe";

const StripeDonationPage = async () => {
  const [data] = await stripeAction();

  return (
    <div>
      <StripeDonation clientSecret={data} />
    </div>
  );
};

export default StripeDonationPage;
