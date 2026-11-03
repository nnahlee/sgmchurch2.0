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
  id: string;
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
    heroImg: "/images/compressed/heroimg-compressed.webp",
  },
  about: {
    title: "Our Story and Mission",
    description: `We work in order to achieve Advanced Contemporary Evangelization for fallen-away nearest Christian neighbors who no longer practice/consider themselves as Christians. We are not to look for mission "to the nations" and to Christian communities. Love them enough to share the good news of Jesus Christ with them.`,
    btnText: "Help Support Us",
    heroImg: "/images/compressed/aboutimg-compressed.webp",
  },
  donate: {
    title: "Donate and Partner with Us",
    description: `We rely on the generosity of our supporters to continue our work and make a positive impact. Thank you for considering a donation to Street Gospel Mission Church. Together, we can make a difference and bring hope to those in need.`,
    btnText: "Donate Now",
    heroImg: "/images/compressed/donatebanner-compressed.webp",
  },
};

export const aboutGalleryImages = [
  "/images/compressed/aboutone-compressed.webp",
  "/images/compressed/about2-compressed.webp",
  "/images/compressed/about3-compressed.webp",
  "/images/compressed/about4-compressed.webp",
  "/images/compressed/about5-compressed.webp",
  "/images/compressed/about6-compressed.webp",
];

export const contactImages = [
  "/images/compressed/contact1-compressed.webp",
  "/images/compressed/contact2-compressed.webp",
  "/images/compressed/contact3-compressed.webp",
  "/images/compressed/contact4-compressed.webp",
];

export const donatePayments: DonatePaymentTypes[] = [
  {
    src: "/images/compressed/paypal.webp",
    title: "Paypal",
    description: `To make a donation, simply visit our website and select the "Donate Now" button. From there, you will be directed to our donation page, where you can choose PayPal as your payment option`,
    btnText: "Donate With Paypal",
  },
  {
    src: "/images/compressed/creditcardmain-compressed.webp",
    title: "Credit or Debit Card",
    description: `To make a donation, simply click "Donate with card" button below.`,
    btnText: "Donate with Credit Card",
    btnUrl: "/stripe-donation",
  },
  {
    src: "/images/compressed/zelle-compressed.webp",
    title: "Zelle",
    description: `Zelle is a fast, safe, and easy way to send and receive money with friends, family, and other contacts within minutes using email or phone offered by many banks`,
    btnText: "Donate with Zelle",
  },
];

export const slideInfos: SlideInfoTypes[] = [
  {
    title: "Make the most",
    description: `Welcome Gospel Street Mission Church is a vibrant and welcoming community of believers located in the heart of the city. Their mission is to spread the gospel and provide hope to those who are struggling, marginalized, or in need. Through their various programs and services, they strive to make a positive impact on the lives of those around them.`,
    src: "/images/compressed/slide4-compressed.webp",
  },
  {
    title: "Spreading the Gospel",
    description: `Our church's worship services are lively and inspiring, with music that ranges from traditional hymns to contemporary Christian songs. The preaching is rooted in the Bible and relevant to the challenges of everyday life. In addition to their regular worship services, the church offers a variety of programs for children, youth, and adults.`,
    src: "/images/compressed/slide1-compressed.webp",
  },
  {
    title: "Providing Hope",
    description: `We regularly post updates about their services, events, and outreach programs. From feeding the homeless to providing shelter to those in need, the church is committed to serving others with love and compassion.`,
    src: "/images/compressed/slide2-compressed.webp",
  },
  {
    title: "Making a Difference",
    description: `focus on community outreach and gospel-centered worship, they are a shining example of what it means to live out the love of Christ in the world.`,
    src: "/images/compressed/slide3-compressed.webp",
  },
];

export const gallerySlides: ImageGalleryTypes[] = [
  {
    id: "0",
    src: "/images/compressed/slide1-compressed.webp",
    alt: "Slide 1",
  },
  {
    id: "1",
    src: "/images/compressed/slide2-compressed.webp",
    alt: "Slide 2",
  },
  {
    id: "2",
    src: "/images/compressed/slide3-compressed.webp",
    alt: "Slide 3",
  },
  {
    id: "3",
    src: "/images/compressed/slide4-compressed.webp",
    alt: "Slide 4",
  },
  {
    id: "4",
    src: "/images/compressed/newgal1-compressed-compressed.webp",
    alt: "Gallery image 1",
  },
  {
    id: "5",
    src: "/images/compressed/newgal2-compressed-compressed.webp",
    alt: "Gallery image 2",
  },
  {
    id: "6",
    src: "/images/compressed/newgal3-compressed-compressed.webp",
    alt: "Gallery image 3",
  },
  {
    id: "7",
    src: "/images/compressed/newgal4-compressed-compressed.webp",
    alt: "Gallery image 4",
  },
  {
    id: "8",
    src: "/images/compressed/newgal5-compressed-compressed.webp",
    alt: "Gallery image 5",
  },
  {
    id: "9",
    src: "/images/compressed/newgal6-compressed-compressed.webp",
    alt: "Gallery image 6",
  },
  {
    id: "10",
    src: "/images/compressed/newgal7-compressed-compressed.webp",
    alt: "Gallery image 7",
  },
  {
    id: "11",
    src: "/images/compressed/newgal8-compressed-compressed.webp",
    alt: "Gallery image 8",
  },
  {
    id: "12",
    src: "/images/compressed/newgal9-compressed-compressed.webp",
    alt: "Gallery image 9",
  },
  {
    id: "13",
    src: "/images/compressed/newgal10-compressed-compressed.webp",
    alt: "Gallery image 10",
  },
  {
    id: "14",
    src: "/images/compressed/newgal11-compressed-compressed.webp",
    alt: "Gallery image 11",
  },
  {
    id: "15",
    src: "/images/compressed/newgal12-compressed-compressed.webp",
    alt: "Gallery image 12",
  },
  {
    id: "16",
    src: "/images/compressed/newgal13-compressed-compressed.webp",
    alt: "Gallery image 13",
  },
  {
    id: "17",
    src: "/images/compressed/newgal14-compressed-compressed.webp",
    alt: "Gallery image 14",
  },
  {
    id: "18",
    src: "/images/compressed/newgal15-compressed-compressed.webp",
    alt: "Gallery image 15",
  },
  {
    id: "19",
    src: "/images/compressed/newgal16-compressed-compressed.webp",
    alt: "Gallery image 16",
  },
  {
    id: "20",
    src: "/images/compressed/newgal17-compressed-compressed.webp",
    alt: "Gallery image 17",
  },
  {
    id: "21",
    src: "/images/compressed/newgal18-compressed-compressed.webp",
    alt: "Gallery image 18",
  },
  {
    id: "22",
    src: "/images/compressed/newgal19-compressed-compressed.webp",
    alt: "Gallery image 19",
  },
  {
    id: "23",
    src: "/images/compressed/newgal20-compressed-compressed.webp",
    alt: "Gallery image 20",
  },
  {
    id: "24",
    src: "/images/compressed/newgal21-compressed-compressed.webp",
    alt: "Gallery image 21",
  },
  {
    id: "25",
    src: "/images/compressed/newgal22-compressed-compressed.webp",
    alt: "Gallery image 22",
  },
  {
    id: "26",
    src: "/images/compressed/newgal23-compressed-compressed.webp",
    alt: "Gallery image 23",
  },
  {
    id: "27",
    src: "/images/compressed/newgal24-compressed-compressed.webp",
    alt: "Gallery image 24",
  },
  {
    id: "28",
    src: "/images/compressed/newgal25-compressed-compressed.webp",
    alt: "Gallery image 25",
  },
  {
    id: "29",
    src: "/images/compressed/newgal26-compressed-compressed.webp",
    alt: "Gallery image 26",
  },
  {
    id: "30",
    src: "/images/compressed/newgal27-compressed-compressed.webp",
    alt: "Gallery image 27",
  },
  {
    id: "31",
    src: "/images/compressed/newgal28-compressed-compressed.webp",
    alt: "Gallery image 28",
  },
  {
    id: "32",
    src: "/images/compressed/newgal29-compressed-compressed.webp",
    alt: "Gallery image 29",
  },
  {
    id: "33",
    src: "/images/compressed/newgal30-compressed-compressed.webp",
    alt: "Gallery image 30",
  },
  {
    id: "34",
    src: "/images/compressed/newgal31-compressed-compressed.webp",
    alt: "Gallery image 31",
  },
  {
    id: "35",
    src: "/images/compressed/newgal32-compressed-compressed.webp",
    alt: "Gallery image 32",
  },
  {
    id: "36",
    src: "/images/compressed/newgal33-compressed-compressed.webp",
    alt: "Gallery image 33",
  },
  {
    id: "37",
    src: "/images/compressed/newgal34-compressed-compressed.webp",
    alt: "Gallery image 34",
  },
  {
    id: "38",
    src: "/images/compressed/newgal35-compressed-compressed.webp",
    alt: "Gallery image 35",
  },
  {
    id: "39",
    src: "/images/compressed/newgal36-compressed-compressed.webp",
    alt: "Gallery image 36",
  },
  {
    id: "40",
    src: "/images/compressed/newgal37-compressed-compressed.webp",
    alt: "Gallery image 37",
  },
  {
    id: "41",
    src: "/images/compressed/newgal38-compressed-compressed.webp",
    alt: "Gallery image 38",
  },
  {
    id: "42",
    src: "/images/compressed/newgal39-compressed-compressed.webp",
    alt: "Gallery image 39",
  },
  {
    id: "43",
    src: "/images/compressed/newgal40-compressed-compressed.webp",
    alt: "Gallery image 40",
  },
  {
    id: "44",
    src: "/images/compressed/newgal41-compressed-compressed.webp",
    alt: "Gallery image 41",
  },
  {
    id: "45",
    src: "/images/compressed/newgal42-compressed-compressed.webp",
    alt: "Gallery image 42",
  },
  {
    id: "46",
    src: "/images/compressed/newgal43-compressed-compressed.webp",
    alt: "Gallery image 43",
  },
  {
    id: "47",
    src: "/images/compressed/newgal44-compressed-compressed.webp",
    alt: "Gallery image 44",
  },
  {
    id: "48",
    src: "/images/compressed/newgal45-compressed-compressed.webp",
    alt: "Gallery image 45",
  },
  {
    id: "49",
    src: "/images/compressed/newgal46-compressed-compressed.webp",
    alt: "Gallery image 46",
  },
  {
    id: "50",
    src: "/images/compressed/newgal47-compressed-compressed.webp",
    alt: "Gallery image 47",
  },
  {
    id: "51",
    src: "/images/compressed/newgal48-compressed-compressed.webp",
    alt: "Gallery image 48",
  },
  {
    id: "52",
    src: "/images/compressed/newgal49-compressed-compressed.webp",
    alt: "Gallery image 49",
  },
  {
    id: "53",
    src: "/images/compressed/newgal50-compressed-compressed.webp",
    alt: "Gallery image 50",
  },
  {
    id: "54",
    src: "/images/compressed/newgal51-compressed-compressed.webp",
    alt: "Gallery image 51",
  },
  {
    id: "55",
    src: "/images/compressed/newgal52-compressed-compressed.webp",
    alt: "Gallery image 52",
  },
  {
    id: "56",
    src: "/images/compressed/newgal53-compressed-compressed.webp",
    alt: "Gallery image 53",
  },
  {
    id: "57",
    src: "/images/compressed/newgal54-compressed-compressed.webp",
    alt: "Gallery image 54",
  },
  {
    id: "58",
    src: "/images/compressed/newgal55-compressed-compressed.webp",
    alt: "Gallery image 55",
  },
  {
    id: "59",
    src: "/images/compressed/newgal56-compressed-compressed.webp",
    alt: "Gallery image 56",
  },
  {
    id: "60",
    src: "/images/compressed/newgal57-compressed-compressed.webp",
    alt: "Gallery image 57",
  },
  {
    id: "61",
    src: "/images/compressed/newgal58-compressed-compressed.webp",
    alt: "Gallery image 58",
  },
  {
    id: "62",
    src: "/images/compressed/newgal59-compressed-compressed.webp",
    alt: "Gallery image 59",
  },
  {
    id: "63",
    src: "/images/compressed/newgal60-compressed-compressed.webp",
    alt: "Gallery image 60",
  },
  {
    id: "64",
    src: "/images/compressed/newgal61-compressed-compressed.webp",
    alt: "Gallery image 61",
  },
  {
    id: "65",
    src: "/images/compressed/newgal62-compressed-compressed.webp",
    alt: "Gallery image 62",
  },
  {
    id: "66",
    src: "/images/compressed/newgal63-compressed-compressed.webp",
    alt: "Gallery image 63",
  },
  {
    id: "67",
    src: "/images/compressed/newgal64-compressed-compressed.webp",
    alt: "Gallery image 64",
  },
  {
    id: "68",
    src: "/images/compressed/newgal65-compressed-compressed.webp",
    alt: "Gallery image 65",
  },
  {
    id: "69",
    src: "/images/compressed/newgal66-compressed-compressed.webp",
    alt: "Gallery image 66",
  },
  {
    id: "70",
    src: "/images/compressed/newgal67-compressed-compressed.webp",
    alt: "Gallery image 67",
  },
  {
    id: "71",
    src: "/images/compressed/newgal68-compressed-compressed.webp",
    alt: "Gallery image 68",
  },
  {
    id: "72",
    src: "/images/compressed/newgal69-compressed-compressed.webp",
    alt: "Gallery image 69",
  },
  {
    id: "73",
    src: "/images/compressed/newgal70-compressed-compressed.webp",
    alt: "Gallery image 70",
  },
  {
    id: "74",
    src: "/images/compressed/newgal71-compressed-compressed.webp",
    alt: "Gallery image 71",
  },
  {
    id: "75",
    src: "/images/compressed/newgal72-compressed-compressed.webp",
    alt: "Gallery image 72",
  },
  {
    id: "76",
    src: "/images/compressed/newgal73-compressed-compressed.webp",
    alt: "Gallery image 73",
  },
  {
    id: "77",
    src: "/images/compressed/newgal74-compressed-compressed.webp",
    alt: "Gallery image 74",
  },
  {
    id: "78",
    src: "/images/compressed/newgal75-compressed-compressed.webp",
    alt: "Gallery image 75",
  },
];
