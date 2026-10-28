import ServeAndVolunteer from "./ServeAndVolunteer";
import type { Metadata } from "next";

const siteUrl = "https://www.sgmchurch.com";

type ServeProps = {
  params: Promise<{ locale: "en" | "ko" }>;
};

export async function generateMetadata({
  params,
}: ServeProps): Promise<Metadata> {
  const { locale } = await params;
  const isKorean = locale === "ko";

  const title = isKorean
    ? "섬김 활동 - Street Gospel Mission Church"
    : "Serve Our Community - Street Gospel Mission Church";

  const description = isKorean
    ? "Street Gospel Mission Church와 함께 도움이 필요한 이웃과 노숙인들을 섬기고 지역사회에 사랑과 희망을 전하세요."
    : "Join Street Gospel Mission Church in serving people experiencing homelessness and bringing love, hope, and support to our local community.";

  const pageUrl = `${siteUrl}/${locale}/serve-volunteer`;

  return {
    title,
    description,
    keywords: isKorean
      ? [
          "Street Gospel Mission Church",
          "지역사회 봉사",
          "노숙인 지원",
          "기독교 봉사 활동",
          "이웃 섬김",
        ]
      : [
          "Street Gospel Mission Church",
          "community service",
          "homeless outreach",
          "Christian volunteer service",
          "serving our community",
        ],

    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${siteUrl}/en/serve`,
        ko: `${siteUrl}/ko/serve`,
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
          alt: "Street Gospel Mission Church community outreach",
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
const ServeAndVolunteerPage = () => {
  return (
    <div className="flex justify-center items-center">
      <ServeAndVolunteer />
    </div>
  );
};

export default ServeAndVolunteerPage;
