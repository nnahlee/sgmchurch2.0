import Faq from "./Faq";
import type { Metadata } from "next";

const siteUrl = "https://www.sgmchurch.com";

type FAQProps = {
  params: Promise<{ locale: "en" | "ko" }>;
};

export async function generateMetadata({
  params,
}: FAQProps): Promise<Metadata> {
  const { locale } = await params;
  const isKorean = locale === "ko";

  const title = isKorean
    ? "자주 묻는 질문 - Street Gospel Mission Church"
    : "FAQ - Street Gospel Mission Church";

  const description = isKorean
    ? "Street Gospel Mission Church의 기부 방법, 봉사 활동, 예배 및 사역에 관한 자주 묻는 질문과 답변을 확인하세요."
    : "Find answers to frequently asked questions about donations, volunteering, worship, and the outreach programs at Street Gospel Mission Church.";

  const pageUrl = `${siteUrl}/${locale}/faq`;

  return {
    title,
    description,
    keywords: isKorean
      ? [
          "Street Gospel Mission Church 자주 묻는 질문",
          "교회 FAQ",
          "기부 방법",
          "봉사 활동",
          "노숙인 지원 사역",
        ]
      : [
          "Street Gospel Mission Church FAQ",
          "church frequently asked questions",
          "how to donate",
          "volunteer opportunities",
          "homeless outreach ministry",
        ],

    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${siteUrl}/en/faq`,
        ko: `${siteUrl}/ko/faq`,
      },
    },

    openGraph: {
      title: isKorean
        ? "Street Gospel Mission Church 자주 묻는 질문"
        : "Frequently Asked Questions - Street Gospel Mission Church",
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

const FaqPage = () => {
  return (
    <div className="p-24 flex justify-center min-h-[70vh]">
      <Faq />
    </div>
  );
};

export default FaqPage;
