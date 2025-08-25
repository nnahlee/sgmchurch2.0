"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
// import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
// import PaypalProvider from "../../../providers/paypal/PaypalProvider";
// import { Input } from "@/components/ui/input";

// import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
// import PaypalReducerWrapperButton from "../../../providers/paypal/PaypalReducerWrapper";
// import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type HeroTypes = {
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
    // wait between children animation
    staggerChildren: 0.3,
  },
};

const fadeInDownTopVariant = {
  start: { opacity: 0, y: -40 },
  end: { opacity: 1, y: 0 },
  transition: {
    duration: 0.4,
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
      duration: 0.4,
    },
  },
};

const Hero = ({ title, description, btnText, heroImg }: HeroTypes) => {
  /*
 
   const [deferLoad, setDeferLoad] = useState<boolean>(true);
   const [isActive, setIsActive] = useState<boolean>(false);
    const [amount, setAmount] = useState("");
    const [isValidAmount, setIsValidAmount] = useState(false);
    const [errorMsg, setErrMsg] = useState("");


  const donationAmountSchema = z
    .number()
    .positive({ message: "Amount must be greater than 0" })
    .min(1, {
      message: "Amount must be greater than 1",
    });

  function handleClick() {
    setDeferLoad(false);
    setIsActive(!isActive);
  }
    *

  /*
  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setAmount(value);
    const parsedAmount = parseFloat(value);
    const validatedAmount = donationAmountSchema.safeParse(parsedAmount);
    if (validatedAmount.success) {
      setIsValidAmount(true);
      setErrMsg("");
    } else {
      setIsValidAmount(false);
      setErrMsg("Add Amount to Donate");
    }
  }

  */

  return (
    <motion.div
      variants={containerVariant}
      initial="start"
      animate="end"
      className="relative w-full h-[1000px] sm:h-[600px] lg:h-[700px]"
    >
      <Image
        src={heroImg}
        alt="Hero Image"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-4 sm:px-8 lg:px-24 bg-black/40">
        <motion.h1
          variants={fadeInDownTopVariant}
          className="text-4xl sm:text-4xl lg:text-6xl text-center font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        <p className="m-4 text-white text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed sm:leading-loose">
          {description}
        </p>

        <motion.div variants={btnVariant} className="btn my-4">
          <Button
            // onClick={handleClick}
            className="w-full md:w-[500px] h-[70px] cursor-pointer rounded-2xl px-12 py-4 z-99 hover:bg-pink-400 bg-teal-500 transition-colors duration-300 ease-in-out text-white text-xl font-bold flex items-center justify-center gap-4"
          >
            <Link
              className="w-full"
              target="_blank"
              href="https://www.paypal.com/donate/?hosted_button_id=AQRY3P8Z3DFMN"
            >
              {btnText}
            </Link>

            {/* <ArrowRightIcon size={36} /> */}
          </Button>
          {/* <PaypalProvider deferLoad={deferLoad}>
            <Dialog open={isActive} onOpenChange={setIsActive}>
              <DialogTitle hidden={true}>Paypal</DialogTitle>
              <DialogContent className="p-10">
                {isValidAmount && !errorMsg && (
                  <Badge
                    className="bg-teal-500 p-2 text-white"
                    variant="secondary"
                  >
                    Select Donation Option
                  </Badge>
                )}
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => handleAmountChange(e)}
                  placeholder="Enter donation amount"
                />
                {!deferLoad && (
                  <PaypalReducerWrapperButton
                    isValidAmount={isValidAmount}
                    amount={amount}
                    errorMsg={errorMsg}
                    setAmount={setAmount}
                  />
                )}
              </DialogContent>
            </Dialog>

            <Button
              onClick={handleClick}
              className="w-full md:w-[500px] h-[70px] cursor-pointer rounded-2xl px-12 py-4 z-99 hover:bg-pink-400 bg-teal-500 transition-colors duration-300 ease-in-out text-white text-xl font-bold flex items-center justify-center gap-4"
            >
              {btnText}
              <ArrowRightIcon size={36} />
            </Button>
          </PaypalProvider> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
