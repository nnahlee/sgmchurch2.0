import Event from "./Event";

import { Metadata } from "next";
import slugify from "slugify";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

type ParamTypes = {
  params: Promise<{ locale: string; title: string }>;
};

type EventInfo = {
  id: number;
  title: string;
  imgSrc: string;
  date: string;
  btnText: string;
  badgeText: string;
  description: string;
};

async function getEvent(
  locale: string,
  slug: string,
): Promise<EventInfo | undefined> {
  const t = await getTranslations({ locale, namespace: "Events" });
  const translatedEvents = t.raw("items") as EventInfo[];
  return translatedEvents.find(
    (e) => slugify(e.title, { lower: true, strict: true }) === slug,
  );
}

export async function generateMetadata({
  params,
}: ParamTypes): Promise<Metadata> {
  const siteUrl = "https:www.sgmchurch.com";
  const { locale, title: slugTitle } = await params;

  const isKorean = locale === "ko";
  const title = isKorean
    ? `이벤트 - ${slugTitle} - Street Gospel Mission Church`
    : `Event - ${slugTitle} - Street Gospel Mission Church`;

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
  const locales = ["en", "ko"];

  const allParams = await Promise.all(
    locales.map(async (locale) => {
      // runs 2x for en and ko loop
      const t = await getTranslations({
        locale,
        namespace: "Events",
      });

      const events = t.raw("items") as EventInfo[];

      return events.map(({ title }) => ({
        locale,
        title: slugify(title, {
          lower: true,
          strict: true,
        }),
      }));
    }),
  );

  // console.log(allParams.flat());

  return allParams.flat();
}

export default async function EventPage({ params }: ParamTypes) {
  const { locale, title } = await params;
  const translatedEvent = await getEvent(locale, title);

  if (!translatedEvent) {
    return notFound();
  }

  return (
    <div>
      <Event title={title} translatedEvent={translatedEvent} />
    </div>
  );
}
