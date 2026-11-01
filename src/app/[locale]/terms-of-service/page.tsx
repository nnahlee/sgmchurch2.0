import { getLocale } from "next-intl/server";
import TermsOfService from "./TermsOfService";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const canonicalUrl = `https://sgmchurch.com/${locale}/terms-of-service`;

  return {
    title: "Terms of Service",
    description: "Terms of Service page",
    alternates: {
      // primary
      canonical: canonicalUrl,
      languages: {
        en: "https://sgmchurch.com/en/terms-of-service",
        ko: "https://sgmchurch.com/ko/terms-of-service",
      },
    },
    openGraph: {
      title: "Terms of Service",
      description: "Terms of Service Page",
      url: "/privacy-policy",
      siteName: "Street Gospel Mission Church",
      type: "website",
    },
  };
}

const TermsOfServicePage = () => {
  return (
    <div>
      <TermsOfService />
    </div>
  );
};

export default TermsOfServicePage;
