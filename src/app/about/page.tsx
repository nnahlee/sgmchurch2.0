import Hero from "../hero/Hero";
import { heroContent } from "../../../types";

import About from "./About";
const {
  about: { title, description, btnText, heroImg },
} = heroContent;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Street Gospel Mission Church",
  description:
    "Learn about Street Gospel Mission Church, our mission to serve the homeless, and our vision to share faith, hope, and love in our community.",
  keywords: [
    "Street Gospel Mission Church",
    "about our church",
    "Christian nonprofit",
    "homeless outreach ministry",
    "faith and community",
  ],
  openGraph: {
    title: "About Street Gospel Mission Church",
    description:
      "Discover our story and mission — Street Gospel Mission Church is dedicated to spreading faith and serving the homeless with love and compassion.",
    url: "https://www.sgmchurch.com/about",
    siteName: "Street Gospel Mission Church",
    locale: "en_US",
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <div>
      <Hero
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
