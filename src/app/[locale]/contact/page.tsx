import Contact from "./Contact";

import type { Metadata } from "next";

const siteUrl = "https://www.sgmchurch.com";

type ContactProps = {
  params: Promise<{ locale: "en" | "ko" }>;
};

export async function generateMetadata({
  params,
}: ContactProps): Promise<Metadata> {
  const { locale } = await params;
  const isKorean = locale === "ko";

  const title = isKorean
    ? "문의하기 - Street Gospel Mission Church"
    : "Contact Us - Street Gospel Mission Church";

  const description = isKorean
    ? "Street Gospel Mission Church에 문의하세요. 봉사 활동, 기부 또는 노숙인과 지역사회를 위한 저희의 사역에 대해 자세히 알아보실 수 있습니다."
    : "Get in touch with Street Gospel Mission Church. Reach out to volunteer, donate, or learn more about how we serve the homeless and our local community.";

  const pageUrl = `${siteUrl}/${locale}/contact`;

  return {
    title,
    description,
    keywords: isKorean
      ? [
          "Street Gospel Mission Church 문의",
          "봉사 기회",
          "노숙인 사역 기부",
          "교회 연락처",
          "기독교 지역사회 봉사",
        ]
      : [
          "contact Street Gospel Mission Church",
          "volunteer opportunities",
          "donate to homeless ministry",
          "church contact information",
          "Christian nonprofit outreach",
        ],

    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${siteUrl}/en/contact`,
        ko: `${siteUrl}/ko/contact`,
      },
    },

    openGraph: {
      title: isKorean
        ? "Street Gospel Mission Church에 문의하기"
        : "Contact Street Gospel Mission Church",
      description: isKorean
        ? "Street Gospel Mission Church에 연락해 주세요. 봉사 활동에 참여하고 지역사회 사역을 지원하는 방법을 알아보실 수 있습니다."
        : "We’d love to hear from you! Connect with Street Gospel Mission Church to get involved, volunteer, or support our outreach programs.",
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

const ContactPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Contact />
    </div>
  );
};

export default ContactPage;
