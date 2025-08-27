import Contact from "./Contact";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Street Gospel Mission Church",
  description:
    "Get in touch with Street Gospel Mission Church. Reach out to volunteer, donate, or learn more about how we serve the homeless and our local community.",
  keywords: [
    "contact Street Gospel Mission Church",
    "volunteer opportunities",
    "donate to homeless ministry",
    "church contact information",
    "Christian nonprofit outreach",
  ],
  openGraph: {
    title: "Contact Street Gospel Mission Church",
    description:
      "We’d love to hear from you! Connect with Street Gospel Mission Church to get involved, volunteer, or support our outreach programs.",
    url: "https://www.sgmchurch.com/contact",
    siteName: "Street Gospel Mission Church",

    locale: "en_US",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Contact />
    </div>
  );
};

export default ContactPage;
