import GalleryPagination from "./GalleryPagination";
import type { Metadata } from "next";

const siteUrl = "https://www.sgmchurch.com";

type GalleryProps = {
  params: Promise<{ locale: string }>;
};

// dynamic metadata generation for SEO and social sharing
export async function generateMetadata({
  params,
}: GalleryProps): Promise<Metadata> {
  const { locale } = await params;
  const isKorean = locale === "ko";

  const title = isKorean
    ? "갤러리 - Street Gospel Mission Church"
    : "Gallery - Street Gospel Mission Church";

  const description = isKorean
    ? "Street Gospel Mission Church의 예배, 봉사 활동 및 지역사회 섬김의 순간들을 만나보세요."
    : "Explore moments from Street Gospel Mission Church, including worship, volunteer outreach, and community service.";

  const pageUrl = `${siteUrl}/${locale}/gallery`;

  return {
    title,
    description,
    keywords: isKorean
      ? [
          "Street Gospel Mission Church",
          "교회 갤러리",
          "노숙인 봉사",
          "기독교 사역",
          "지역사회 봉사",
        ]
      : [
          "Street Gospel Mission Church",
          "church gallery",
          "Christian nonprofit",
          "homeless outreach ministry",
          "faith and community",
        ],

    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${siteUrl}/en/gallery`,
        ko: `${siteUrl}/ko/gallery`,
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
  };
}

const GalleryPage = () => {
  return (
    <div className="md:p-24 p-0 flex justify-center  min-h-[70vh]">
      <GalleryPagination />
    </div>
  );
};

export default GalleryPage;
