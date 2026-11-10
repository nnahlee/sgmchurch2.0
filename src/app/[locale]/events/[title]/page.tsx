import Event from "./Event";
import { eventInfos } from "@/../types";
import { Metadata } from "next";
import slugify from "slugify";

type ParamTypes = {
  params: Promise<{ locale: string; title: string }>;
};

export async function generateMetaData({
  params,
}: ParamTypes): Promise<Metadata> {
  const siteUrl = "https://www.sgmchurch.com";
  const { locale, title: metaTitle } = await params;
  const isKorean = locale === "ko";
  const title = isKorean
    ? `이벤트 - ${metaTitle} - Street Gospel Mission Church`
    : `Event - ${metaTitle} - Street Gospel Mission Church`;

  const description = isKorean
    ? "Street Gospel Mission Church의 이벤트를 확인하세요."
    : "Events - Street Gospel Mission Church.";

  const pageUrl = `${siteUrl}/${locale}/events`;
  return {
    title,
    description,
    keywords: isKorean
      ? ["Street Gospel Mission Church", "스트리트 가스펠 미션 교회 행사"]
      : ["Street Gospel Mission Church", "Events Street Gospel Mission Church"],
    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${siteUrl}/en/events`,
        ko: `${siteUrl}/en/events`,
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
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  return eventInfos.map(({ title }) => ({
    title: slugify(title, {
      lower: true,
      strict: true,
    }),
  }));
}

export default async function EventPage({ params }: ParamTypes) {
  const { title } = await params;

  return (
    <div>
      <Event title={title} />
    </div>
  );
}
