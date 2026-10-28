import StripeDonation from "./StripeDonation";
import { stripeAction } from "../../../../actions/stripe";
import type { Metadata } from "next";
// A Stripe Checkout client_secret is single-use and short-lived.
// Without this, Next.js statically prerenders this route at build time,
// baking an expired client_secret into cached HTML for production visitors.
export const dynamic = "force-dynamic";

const siteUrl = "https://www.sgmchurch.com";

type StripeDonationProps = {
  params: Promise<{ locale: "en" | "ko" }>;
};

export async function generateMetadata({
  params,
}: StripeDonationProps): Promise<Metadata> {
  const { locale } = await params;
  const isKorean = locale === "ko";

  const title = isKorean
    ? "온라인 기부 - Street Gospel Mission Church"
    : "Online Donation - Street Gospel Mission Church";

  const description = isKorean
    ? "Street Gospel Mission Church의 온라인 기부를 통해 노숙인 지원 사역과 지역사회 봉사 활동을 후원해 주세요."
    : "Make an online donation to support Street Gospel Mission Church and our outreach programs serving people experiencing homelessness.";

  const pageUrl = `${siteUrl}/${locale}/stripe-donation`;

  return {
    title,
    description,

    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${siteUrl}/en/stripe-donation`,
        ko: `${siteUrl}/ko/stripe-donation`,
      },
    },

    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Street Gospel Mission Church",
      locale: isKorean ? "ko_KR" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/compressed/opengraphsearch.webp",
          width: 1200,
          height: 630,
          alt: "Street Gospel Mission Church",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/compressed/opengraphsearch.webp"],
    },
  };
}
const StripeDonationPage = async () => {
  const [data] = await stripeAction();

  return (
    <div>
      <StripeDonation clientSecret={data} />
    </div>
  );
};

export default StripeDonationPage;
