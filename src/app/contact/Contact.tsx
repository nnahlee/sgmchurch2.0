"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { contactImages } from "../../../types";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";


const Contact = () => {
  const imageVariants = {
    start: { opacity: 0, x: -100 },
    end: (idx: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: idx * 0.28 },
    }),
  };
  return (
    <div>
      <div className="contactwrapper flex flex-col items-center justify-center gap-6">
        <h1 className="md:text-6xl text-4xl text-green-500 font-bold text-center my-20">
          Get Involved
        </h1>
        <p className="text-center">
          There are many ways you can get involved with Street Gospel Mission
          Church.
        </p>
      </div>

      <div className="contactimgwrapper grid lg:grid-cols-2 grid-cols-1 gap-6 my-12 mx-auto place-items-center max-w-[1250px]">
        {contactImages.map((img, idx) => (
          <motion.div
            variants={imageVariants}
            initial="start"
            whileInView="end" // <-- animate when in view
            viewport={{ once: true }} // <-- animate only once
            custom={idx}
            key={img}
          >
            <Card className="p-8">
              <CardContent className="flex relative w-[400px] h-[400px] justify-center items-center">
                <Image
                  src={img}
                  alt="Contact Image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-xl object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="contactdetailswrapper flex flex-col items-center justify-center gap-6 my-12 sm:my-24 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-green-500 font-bold text-center my-12 sm:my-8">
          Our Address & Contact Details
        </h1>

        <p className="text-center text-base sm:text-lg lg:text-xl text-secondary-foreground my-4 sm:my-6 max-w-2xl">
          950 Main St #229, Redwood City, CA, 94063 or PO Box 3573. Redwood
          City, CA 94064-3573
        </p>

        {/* First contact row */}
        <div className="contactinfowrapper flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 my-4 text-center">
          <div className="flex items-center gap-2 p-4">
            <span className="sm:block hidden text-secondary-foreground">
              <MdOutlineEmail size={28} />
            </span>
            <p className="font-bold text-green-500 text-lg sm:text-xl lg:text-2xl break-all">
              lsoonkeum@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary-foreground">
              <MdOutlinePhone size={20} />
            </span>
            <p className="font-bold text-green-500 text-lg sm:text-xl lg:text-2xl">
              650-995-3336
            </p>
          </div>
        </div>

        {/* Second contact row */}
        <div className="contactinfowrapper flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 my-4 text-center">
          <div className="flex items-center gap-2 p-4">
            <span className="text-secondary-foreground">
              <MdOutlineEmail className="sm:block hidden" size={28} />
            </span>
            <p className="font-bold text-green-500 text-lg sm:text-xl lg:text-2xl break-all">
              welcomecross@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary-foreground">
              <MdOutlinePhone size={20} />
            </span>
            <p className="font-bold text-green-500 text-lg sm:text-xl lg:text-2xl">
              650-474-1637
            </p>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
