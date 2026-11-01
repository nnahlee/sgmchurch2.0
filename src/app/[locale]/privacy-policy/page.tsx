import PrivacyPolicy from "./PrivacyPolicy";

import { getLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const canonicalUrl = `https://sgmchurch.com/${locale}/terms-of-service`;

  return {
    title: "Privacy Policy",
    description: "Privacy Policy page",
    alternates: {
      // primary
      canonical: canonicalUrl,
      languages: {
        en: "https://sgmchurch.com/en/terms-of-service",
        ko: "https://sgmchurch.com/ko/terms-of-service",
      },
    },
    openGraph: {
      title: "Privacy Policy",
      description: "Privacy Policy Page",
      url: "/privacy-policy",
      siteName: "Street Gospel Mission Church",
      type: "website",
    },
  };
}

const PrivacyPolicyPage = () => {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
};

export default PrivacyPolicyPage;
