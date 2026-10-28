import Hero from "../hero/Hero";
import { heroContent } from "../../../../types";

import About from "./About";
const {
  about: { title, description, btnText, heroImg },
} = heroContent;

import type { Metadata } from "next";

const siteUrl = "https://www.sgmchurch.com";

type AboutProps = {
  params: Promise<{ locale: "en" | "ko" }>;
};

export async function generateMetadata({
  params,
}: AboutProps): Promise<Metadata> {
  const { locale } = await params;
  const isKorean = locale === "ko";

  const title = isKorean
    ? "교회 소개 - Street Gospel Mission Church"
    : "About Us - Street Gospel Mission Church";

  const description = isKorean
    ? "Street Gospel Mission Church의 사명과 노숙인 봉사 활동, 그리고 지역사회에 믿음과 소망과 사랑을 전하려는 비전을 알아보세요."
    : "Learn about Street Gospel Mission Church, our mission to serve the homeless, and our vision to share faith, hope, and love in our community.";

  const pageUrl = `${siteUrl}/${locale}/about`;

  return {
    title,
    description,
    keywords: isKorean
      ? [
          "Street Gospel Mission Church",
          "교회 소개",
          "기독교 비영리 단체",
          "노숙인 봉사 사역",
          "믿음과 지역사회",
        ]
      : [
          "Street Gospel Mission Church",
          "about our church",
          "Christian nonprofit",
          "homeless outreach ministry",
          "faith and community",
        ],

    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${siteUrl}/en/about`,
        ko: `${siteUrl}/ko/about`,
      },
    },

    openGraph: {
      title: isKorean
        ? "Street Gospel Mission Church 소개"
        : "About Street Gospel Mission Church",
      description: isKorean
        ? "Street Gospel Mission Church의 이야기와 사명을 알아보세요. 저희는 믿음을 전하고 사랑과 긍휼로 노숙인들을 섬기는 데 헌신하고 있습니다."
        : "Discover our story and mission — Street Gospel Mission Church is dedicated to spreading faith and serving the homeless with love and compassion.",
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

const AboutPage = () => {
  return (
    <div>
      <Hero
        section="about"
        title={title}
        description={description}
        btnText={btnText}
        heroImg={heroImg}
      />
      <About />
    </div>
  );
};

export default AboutPage;
