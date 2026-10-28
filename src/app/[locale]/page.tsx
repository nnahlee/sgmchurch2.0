import Hero from "./hero/Hero";
import Video from "./video/Video";
import Service from "./service/Service";
import Volunteer from "./volunteer/Volunteer";
import VolunteerDescription from "./volunteer/VolunteerDescription";
import Socials from "./socials/Socials";
import { heroContent } from "../../../types";
import Slider from "./slider/Slider";
import Gallery from "./gallery/Gallery";
import type { Metadata } from "next";

const siteUrl = "https://www.sgmchurch.com";

const {
  home: { title, description, btnText, heroImg },
} = heroContent;

type HomeProps = {
  params: Promise<{ locale: string }>;
};

// dynamic metadata generation for SEO and social sharing
export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const { locale } = await params;
  const isKorean = locale === "ko";
  const canonicalUrl = `${siteUrl}/${locale}`;

  const pageTitle = "Street Gospel Mission Church - Faith, Service & Community";

  const pageDescription =
    "Welcome to Street Gospel Mission Church. Join us in sharing faith, hope, and love through worship, community, and outreach programs that serve the homeless and those in need.";

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      "Street Gospel Mission Church",
      "Christian nonprofit",
      "homeless outreach ministry",
      "faith community",
      "volunteer church programs",
      "charity giving",
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteUrl}/en`,
        ko: `${siteUrl}/ko`,
      },
    },
    openGraph: {
      title: pageTitle,
      description:
        "Street Gospel Mission Church is dedicated to spreading the Gospel and serving the homeless through faith-driven outreach, worship, and community support.",
      url: canonicalUrl,
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

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero
        section="home"
        title={title}
        description={description}
        btnText={btnText}
        heroImg={heroImg}
      />
      <Video />
      <Service />
      <Volunteer />
      <VolunteerDescription />
      <Socials />
      <Slider />
      <Gallery />
    </div>
  );
}
