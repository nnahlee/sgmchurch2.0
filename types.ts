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
    src: "/images/slide1.PNG",
    alt: "Slide 1",
  },
  {
    src: "/images/slide2.PNG",
    alt: "Slide 1",
  },
  {
    src: "/images/slide3.PNG",
    alt: "Slide 1",
  },
  {
    src: "/images/slide4.PNG",
    alt: "Slide 1",
  },
  {
    src: "/images/newgal1.jpg",
    alt: "Street Gospel Mission Church community gathering",
  },
  {
    src: "/images/newgal2.jpg",
    alt: "Church members worshiping together",
  },
  {
    src: "/images/newgal3.jpg",
    alt: "Church community sharing fellowship",
  },
  {
    src: "/images/newgal4.jpg",
    alt: "Congregation participating in a church service",
  },
  {
    src: "/images/newgal5.jpg",
    alt: "Church members serving the local community",
  },
  {
    src: "/images/newgal6.jpg",
    alt: "Community members gathering at church",
  },
  {
    src: "/images/newgal7.jpg",
    alt: "Church volunteers working together",
  },
  {
    src: "/images/newgal8.jpg",
    alt: "Members of Street Gospel Mission Church in fellowship",
  },
  {
    src: "/images/newgal9.jpg",
    alt: "Church gathering celebrating faith and community",
  },
  {
    src: "/images/newgal10.jpg",
    alt: "Church members participating in a group activity",
  },
  {
    src: "/images/newgal11.jpg",
    alt: "Volunteers helping others through community service",
  },
  {
    src: "/images/newgal12.jpg",
    alt: "Congregation gathered for worship and prayer",
  },
  {
    src: "/images/newgal13.jpg",
    alt: "Church community coming together in fellowship",
  },

  {
    src: "/images/newgal14.jpg",
    alt: "Street Gospel Mission Church members serving together",
  },
  {
    src: "/images/newgal15.jpg",
    alt: "Church community celebrating together",
  },
  {
    src: "/images/newgal16.jpg",
    alt: "Church volunteers supporting their community",
  },
  {
    src: "/images/newgal17.jpg",
    alt: "Street Gospel Mission Church community in fellowship",
  },
  { src: "/images/newgal18.jpg", alt: "Church community gathering" },
  { src: "/images/newgal19.jpg", alt: "Church worship service" },
  { src: "/images/newgal20.jpg", alt: "Community fellowship" },
  { src: "/images/newgal21.jpg", alt: "Church members together" },
  { src: "/images/newgal22.jpg", alt: "Sunday worship" },
  { src: "/images/newgal23.jpg", alt: "Church event" },
  { src: "/images/newgal24.jpg", alt: "Community gathering" },
  { src: "/images/newgal25.jpg", alt: "Church celebration" },
  { src: "/images/newgal26.jpg", alt: "Worship and fellowship" },
  { src: "/images/newgal27.jpg", alt: "Church community event" },
  { src: "/images/newgal28.jpg", alt: "Congregation gathering" },
  { src: "/images/newgal29.jpg", alt: "Church service" },
  { src: "/images/newgal30.jpg", alt: "Community fellowship event" },
  { src: "/images/newgal31.jpg", alt: "Church members worshipping" },
  { src: "/images/newgal32.jpg", alt: "Church gathering" },
  { src: "/images/newgal33.jpg", alt: "Sunday fellowship" },
  { src: "/images/newgal34.jpg", alt: "Church community celebration" },
  { src: "/images/newgal35.jpg", alt: "Congregation in fellowship" },
  { src: "/images/newgal36.jpg", alt: "Church ministry event" },
  { src: "/images/newgal37.jpg", alt: "Community worship gathering" },
  { src: "/images/newgal38.jpg", alt: "Church fellowship gathering" },
  { src: "/images/newgal39.jpg", alt: "Church community activity" },
  { src: "/images/newgal40.jpg", alt: "Congregational event" },
  { src: "/images/newgal41.jpg", alt: "Church worship and prayer" },
  { src: "/images/newgal42.jpg", alt: "Church members at an event" },
  { src: "/images/newgal43.jpg", alt: "Community celebration" },
  { src: "/images/newgal44.jpg", alt: "Church gathering and fellowship" },
  { src: "/images/newgal45.jpg", alt: "Church ministry gathering" },
  { src: "/images/newgal46.jpg", alt: "Church community fellowship" },
  { src: "/images/newgal47.jpg", alt: "Church event and worship" },
  { src: "/images/newgal48.jpg", alt: "Church community together" },
];
