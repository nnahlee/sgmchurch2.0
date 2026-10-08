import StripeDonation from "./StripeDonation";
import { stripeAction } from "../../../actions/stripe";

// A Stripe Checkout client_secret is single-use and short-lived.
// Without this, Next.js statically prerenders this route at build time,
// baking an expired client_secret into cached HTML for production visitors.
export const dynamic = "force-dynamic";

const StripeDonationPage = async () => {
  const [data] = await stripeAction();

  return (
    <div>
      <StripeDonation clientSecret={data} />
    </div>
  );
};

export default StripeDonationPage;
