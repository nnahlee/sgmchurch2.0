import Hero from "../hero/Hero";
import { heroContent } from "../../../../types";
import Donate from "./Donate";
import type { Metadata } from "next";
const {
  donate: { title, description, btnText, heroImg },
} = heroContent;

const siteUrl = "https://www.sgmchurch.com";

type DonateProps = {
  params: Promise<{ locale: "en" | "ko" }>;
};

export async function generateMetadata({
  params,
}: DonateProps): Promise<Metadata> {
  const { locale } = await params;
  const isKorean = locale === "ko";

  const title = isKorean
    ? "기부하기 - Street Gospel Mission Church"
    : "Donate - Street Gospel Mission Church";

  const description = isKorean
    ? "Street Gospel Mission Church에 기부하여 사역을 지원해 주세요. 겨울철 연말 기간에 노숙인들에게 음식, 후드티, 침낭을 제공하는 데 도움을 주세요."
    : "Support Street Gospel Mission Church with a donation. Help us provide food, hoodies, and sleeping bags for the homeless during the winter holidays.";

  const pageUrl = `${siteUrl}/${locale}/donate`;

  return {
    title,
    description,
    keywords: isKorean
      ? [
          "Street Gospel Mission Church 기부",
          "노숙인 지원",
          "자선 기부",
          "기독교 비영리 단체 기부",
          "연말 봉사 프로그램",
        ]
      : [
          "donate to Street Gospel Mission Church",
          "support homeless outreach",
          "charity donations",
          "Christian nonprofit giving",
          "holiday outreach program",
        ],

    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${siteUrl}/en/donate`,
        ko: `${siteUrl}/ko/donate`,
      },
    },

    openGraph: {
      title: isKorean
        ? "Street Gospel Mission Church에 기부하기"
        : "Donate to Street Gospel Mission Church",
      description: isKorean
        ? "여러분의 기부는 큰 변화를 만듭니다. 믿음을 바탕으로 한 사역을 통해 노숙인들을 섬기고 도움이 필요한 이들에게 희망을 전하는 데 함께해 주세요."
        : "Your donation makes a difference! Partner with us to serve the homeless and bring hope to those in need through our faith-driven outreach programs.",
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

const DonatePage = () => {
  return (
    <div>
      <Hero
        section="donate"
        title={title}
        description={description}
        heroImg={heroImg}
        btnText={btnText}
      />
      <Donate />
    </div>
  );
};

export default DonatePage;
