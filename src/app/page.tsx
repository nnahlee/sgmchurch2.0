import Hero from "./hero/Hero";
import Video from "./video/Video";
import Service from "./service/Service";
import Volunteer from "./volunteer/Volunteer";
import VolunteerDescription from "./volunteer/VolunteerDescription";
import Socials from "./socials/Socials";
import { heroContent } from "../../types";
import Slider from "./slider/Slider";
import type { Metadata } from "next";
const {
  home: { title, description, btnText, heroImg },
} = heroContent;

export const metadata: Metadata = {
  title: "Street Gospel Mission Church - Faith, Service & Community",
  description:
    "Welcome to Street Gospel Mission Church. Join us in sharing faith, hope, and love through worship, community, and outreach programs that serve the homeless and those in need.",
  keywords: [
    "Street Gospel Mission Church",
    "Christian nonprofit",
    "homeless outreach ministry",
    "faith community",
    "volunteer church programs",
    "charity giving",
  ],
  openGraph: {
    title: "Street Gospel Mission Church - Faith, Service & Community",
    description:
      "Street Gospel Mission Church is dedicated to spreading the Gospel and serving the homeless through faith-driven outreach, worship, and community support.",
    url: "https://www.sgmchurch.com",
    siteName: "Street Gospel Mission Church",

    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="">
      <Hero
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
    </div>
  );
}
