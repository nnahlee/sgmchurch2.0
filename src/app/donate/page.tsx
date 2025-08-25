import Hero from "../hero/Hero";
import { heroContent } from "../../../types";
import Donate from "./Donate";
import type { Metadata } from "next";
const {
  donate: { title, description, btnText, heroImg },
} = heroContent;

export const metadata: Metadata = {
  title: "Donate - Street Gospel Mission Church",
  description:
    "Support Street Gospel Mission Church with a donation. Help us provide food, hoodies, and sleeping bags for the homeless during the winter holidays.",
  keywords: [
    "donate to Street Gospel Mission Church",
    "support homeless outreach",
    "charity donations",
    "Christian nonprofit giving",
    "holiday outreach program",
  ],
  openGraph: {
    title: "Donate to Street Gospel Mission Church",
    description:
      "Your donation makes a difference! Partner with us to serve the homeless and bring hope to those in need through our faith-driven outreach programs.",
    url: "https://www.sgmchurch.com/donate",
    siteName: "Street Gospel Mission Church",

    locale: "en_US",
    type: "website",
  },
};

const DonatePage = () => {
  return (
    <div>
      <Hero
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
