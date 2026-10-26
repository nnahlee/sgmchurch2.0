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

export type ImageGalleryTypes = {
  src: string;
  alt: string;
  // width: number;
  // height: number;
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

export const gallerySlides: ImageGalleryTypes[] = [
  {
    src: "/images/compressed/slide1-compressed.webp",
    alt: "Slide 1",
  },
  {
    src: "/images/compressed/slide2-compressed.webp",
    alt: "Slide 1",
  },
  {
    src: "/images/compressed/slide3-compressed.webp",
    alt: "Slide 1",
  },
  {
    src: "/images/compressed/slide4-compressed.webp",
    alt: "Slide 1",
  },
  {
    src: "/images/compressed/newgal1-compressed.webp",
    alt: "Gallery image 1",
  },
  {
    src: "/images/compressed/newgal2-compressed.webp",
    alt: "Gallery image 2",
  },
  {
    src: "/images/compressed/newgal3-compressed.webp",
    alt: "Gallery image 3",
  },
  {
    src: "/images/compressed/newgal4-compressed.webp",
    alt: "Gallery image 4",
  },
  {
    src: "/images/compressed/newgal5-compressed.webp",
    alt: "Gallery image 5",
  },
  {
    src: "/images/compressed/newgal6-compressed.webp",
    alt: "Gallery image 6",
  },
  {
    src: "/images/compressed/newgal7-compressed.webp",
    alt: "Gallery image 7",
  },
  {
    src: "/images/compressed/newgal8-compressed.webp",
    alt: "Gallery image 8",
  },
  {
    src: "/images/compressed/newgal9-compressed.webp",
    alt: "Gallery image 9",
  },
  {
    src: "/images/compressed/newgal10-compressed.webp",
    alt: "Gallery image 10",
  },
  {
    src: "/images/compressed/newgal11-compressed.webp",
    alt: "Gallery image 11",
  },
  {
    src: "/images/compressed/newgal12-compressed.webp",
    alt: "Gallery image 12",
  },
  {
    src: "/images/compressed/newgal13-compressed.webp",
    alt: "Gallery image 13",
  },
  {
    src: "/images/compressed/newgal14-compressed.webp",
    alt: "Gallery image 14",
  },
  {
    src: "/images/compressed/newgal15-compressed.webp",
    alt: "Gallery image 15",
  },
  {
    src: "/images/compressed/newgal16-compressed.webp",
    alt: "Gallery image 16",
  },
  {
    src: "/images/compressed/newgal17-compressed.webp",
    alt: "Gallery image 17",
  },
  {
    src: "/images/compressed/newgal18-compressed.webp",
    alt: "Gallery image 18",
  },
  {
    src: "/images/compressed/newgal19-compressed.webp",
    alt: "Gallery image 19",
  },
  {
    src: "/images/compressed/newgal20-compressed.webp",
    alt: "Gallery image 20",
  },
  {
    src: "/images/compressed/newgal21-compressed.webp",
    alt: "Gallery image 21",
  },
  {
    src: "/images/compressed/newgal22-compressed.webp",
    alt: "Gallery image 22",
  },
  {
    src: "/images/compressed/newgal23-compressed.webp",
    alt: "Gallery image 23",
  },
  {
    src: "/images/compressed/newgal24-compressed.webp",
    alt: "Gallery image 24",
  },
  {
    src: "/images/compressed/newgal25-compressed.webp",
    alt: "Gallery image 25",
  },
  {
    src: "/images/compressed/newgal26-compressed.webp",
    alt: "Gallery image 26",
  },
  {
    src: "/images/compressed/newgal27-compressed.webp",
    alt: "Gallery image 27",
  },
  {
    src: "/images/compressed/newgal28-compressed.webp",
    alt: "Gallery image 28",
  },
  {
    src: "/images/compressed/newgal29-compressed.webp",
    alt: "Gallery image 29",
  },
  {
    src: "/images/compressed/newgal30-compressed.webp",
    alt: "Gallery image 30",
  },
  {
    src: "/images/compressed/newgal31-compressed.webp",
    alt: "Gallery image 31",
  },
  {
    src: "/images/compressed/newgal32-compressed.webp",
    alt: "Gallery image 32",
  },
  {
    src: "/images/compressed/newgal33-compressed.webp",
    alt: "Gallery image 33",
  },
  {
    src: "/images/compressed/newgal34-compressed.webp",
    alt: "Gallery image 34",
  },
  {
    src: "/images/compressed/newgal35-compressed.webp",
    alt: "Gallery image 35",
  },
  {
    src: "/images/compressed/newgal36-compressed.webp",
    alt: "Gallery image 36",
  },
  {
    src: "/images/compressed/newgal37-compressed.webp",
    alt: "Gallery image 37",
  },
  {
    src: "/images/compressed/newgal38-compressed.webp",
    alt: "Gallery image 38",
  },
  {
    src: "/images/compressed/newgal39-compressed.webp",
    alt: "Gallery image 39",
  },
  {
    src: "/images/compressed/newgal40-compressed.webp",
    alt: "Gallery image 40",
  },
  {
    src: "/images/compressed/newgal41-compressed.webp",
    alt: "Gallery image 41",
  },
  {
    src: "/images/compressed/newgal42-compressed.webp",
    alt: "Gallery image 42",
  },
  {
    src: "/images/compressed/newgal43-compressed.webp",
    alt: "Gallery image 43",
  },
  {
    src: "/images/compressed/newgal44-compressed.webp",
    alt: "Gallery image 44",
  },
  {
    src: "/images/compressed/newgal45-compressed.webp",
    alt: "Gallery image 45",
  },
  {
    src: "/images/compressed/newgal46-compressed.webp",
    alt: "Gallery image 46",
  },
  {
    src: "/images/compressed/newgal47-compressed.webp",
    alt: "Gallery image 47",
  },
  {
    src: "/images/compressed/newgal48-compressed.webp",
    alt: "Gallery image 48",
  },
];
