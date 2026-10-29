"use client";

// live - https://www.paypal.com/donate/buttons/manage?fromLanding=true
// for sandbox test login using sandbox account from main sgmchurch
// test - https://sandbox.paypal.com/donate/buttons/manage?fromLanding=true
// href="https://www.paypal.com/donate/?hosted_button_id=AQRY3P8Z3DFMN"
// https://developer.paypal.com/guides/nextjs-checkout
// test pdt using ngrok
// https://www.paypal.com/unifiedsettings/webPreferences

// https://www.paypal.com/donate/?hosted_button_id=AQRY3P8Z3DFMN live hosted button

// setup PDT for client confirmation (incase close early) and IPN for server confirmation
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { sendGTMEvent } from "@next/third-parties/google";

// live  https://www.paypal.com/donate/?hosted_button_id=AQRY3P8Z3DFMN
type HeroTypes = {
  section: "home" | "about" | "donate";
  title: string;
  description: string;
  btnText: string;
  heroImg: string;
};

const containerVariant = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
  transition: {
    staggerChildren: 0.2,
  },
};

const fadeInDownTopVariant = {
  start: { opacity: 0, y: -30 },
  end: { opacity: 1, y: 0 },
  transition: {
    duration: 0.2,
  },
};

const btnVariant = {
  start: {
    opacity: 0,
    x: -20,
  },
  end: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
};

const Hero = ({ title, description, btnText, heroImg, section }: HeroTypes) => {
  const t = useTranslations("Hero");
  const paypalPaymentLink =
    process.env.NODE_ENV === "development"
      ? "https://www.sandbox.paypal.com/ncp/payment/XT6GUVFUZQ9DN"
      : "https://www.paypal.com/ncp/payment/9YX85RCK9BU6J";

  return (
    <div className="relative w-full h-[1000px] sm:h-[600px] lg:h-[700px]">
      <Image
        src={heroImg}
        alt="Hero Image"
        fill
        quality={75}
        preload={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-4 sm:px-8 lg:px-24 bg-black/40">
        <motion.div
          variants={containerVariant}
          initial="start"
          animate="end"
          className="flex flex-col items-start"
        >
          <motion.h1
            variants={fadeInDownTopVariant}
            className="text-4xl sm:text-4xl lg:text-6xl text-center font-bold text-white mb-4"
          >
            {t(`${section}.title`) || title}
          </motion.h1>

          <motion.p
            variants={fadeInDownTopVariant}
            className="m-4 text-white text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed sm:leading-loose"
          >
            {t(`${section}.description`) || description}
          </motion.p>

          <motion.div variants={btnVariant} className="btn my-4">
            <Button
              asChild
              onClick={() =>
                sendGTMEvent({
                  event: "paypal-btn-clicked",
                  paymentMethod: "paypal",
                  btnLocation: "hero",
                })
              }
              className="w-full md:w-[500px] h-[70px] cursor-pointer rounded-2xl px-12 py-4 z-99 hover:bg-pink-400 bg-teal-500 transition-colors duration-300 ease-in-out text-white text-xl font-bold flex items-center justify-center gap-4"
            >
              <Link
                aria-label="Donate using paypal"
                className="w-full"
                target="_blank"
                href={paypalPaymentLink}
              >
                {t(`${section}.btnText`) || btnText}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
