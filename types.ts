export type HeroContentData = {
  title: string;
  description: string;
  btnText: string;
  heroImg: string;
};
export type HeroKeys = "home" | "about" | "donate";
export type HeroContentTypes = Record<HeroKeys, HeroContentData>;

export type InfoTypes = {
  src: string;
  title: string;
  description: string;
  btnText?: string | undefined;
  btnUrl?: string | undefined;
};

export type DonatePaymentTypes = InfoTypes;
export type SlideInfoTypes = InfoTypes;

export const heroContent: HeroContentTypes = {
  home: {
    title: "Welcome to Street Gospel Mission Church",
    description: `Our community is built on love, faith, and service, and we welcome all
          who seek to grow in their relationship with God. Come as you are and
          experience the power of transformation in our inclusive and supportive
          environment. Together, we can make a positive impact on our world and
          bring light to the darkest corners of our city.`,
    btnText: "Donate Now",
    heroImg: "/images/heroimg.jpg",
  },
  about: {
    title: "Our Story and Mission",
    description: `We work in order to achieve Advanced Contemporary Evangelization for fallen-away nearest Christian neighbors who no longer practice/consider themselves as Christians. We are not to look for mission "to the nations" and to Christian communities. Love them enough to share the good news of Jesus Christ with them.`,
    btnText: "Help Support Us",
    heroImg: "/images/aboutimg.jpg",
  },
  donate: {
    title: "Donate and Partner with Us",
    description: `We rely on the generosity of our supporters to continue our work and make a positive impact. Thank you for considering a donation to Street Gospel Mission Church. Together, we can make a difference and bring hope to those in need.`,
    btnText: "Donate Now",
    heroImg: "/images/donatebanner.jpg",
  },
};

export const aboutGalleryImages = [
  "/images/aboutone.PNG",
  "/images/about2.PNG",
  "/images/about3.PNG",
  "/images/about4.PNG",
  "/images/about5.PNG",
  "/images/about6.PNG",
];

export const contactImages = [
  "/images/contact1.jpg",
  "/images/contact2.jpg",
  "/images/contact3.jpg",
  "/images/contact4.jpg",
];

export const donatePayments: DonatePaymentTypes[] = [
  {
    src: "/images/paypal.png",
    title: "Paypal",
    description: `To make a donation, simply visit our website and select the "Donate Now" button. From there, you will be directed to our donation page, where you can choose PayPal as your payment option`,
    btnText: "Donate With Paypal",
  },
  {
    src: "/images/creditcardmain.png",
    title: "Credit or Debit Card",
    description: `To make a donation, simply click "Donate with card" button below.`,
    btnText: "Donate with Credit Card",
    btnUrl: "/stripe-donation",
  },
  {
    src: "/images/zelle.png",
    title: "Zelle",
    description: `Zelle is a fast, safe, and easy way to send and receive money with friends, family, and other contacts within minutes using email or phone offered by many banks`,
    btnText: "Donate with Zelle",
  },
];

export const slideInfos: SlideInfoTypes[] = [
  {
    title: "Make the most",
    description: `Welcome Gospel Street Mission Church is a vibrant and welcoming community of believers located in the heart of the city. Their mission is to spread the gospel and provide hope to those who are struggling, marginalized, or in need. Through their various programs and services, they strive to make a positive impact on the lives of those around them.`,
    src: "/images/slide4.PNG",
  },
  {
    title: "Spreading the Gospel",
    description: `Our church's worship services are lively and inspiring, with music that ranges from traditional hymns to contemporary Christian songs. The preaching is rooted in the Bible and relevant to the challenges of everyday life. In addition to their regular worship services, the church offers a variety of programs for children, youth, and adults.`,
    src: "/images/slide1.PNG",
  },
  {
    title: "Providing Hope",
    description: `We regularly post updates about their services, events, and outreach programs. From feeding the homeless to providing shelter to those in need, the church is committed to serving others with love and compassion.`,
    src: "/images/slide2.PNG",
  },
  {
    title: "Making a Difference",
    description: `focus on community outreach and gospel-centered worship, they are a shining example of what it means to live out the love of Christ in the world.`,
    src: "/images/slide3.PNG",
  },
];
