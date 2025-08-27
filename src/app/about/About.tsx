"use client";
import React from "react";
import { FcAbout } from "react-icons/fc";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { aboutGalleryImages } from "../../../types";
import { motion } from "framer-motion";

const imageVariants = {
  start: { opacity: 0, x: -100 },
  end: (idx: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: idx * 0.25 },
  }),
};

const About = () => {
  return (
    <div className="my-12 sm:my-24">
      {/* About text */}
      <div className="about-wrapper bg-slate-50 flex items-center justify-center flex-col px-6 sm:px-12 lg:px-24 py-12 sm:py-24">
        <div className="wrapper flex flex-col sm:flex-row justify-center gap-4 items-center mb-10 text-center">
          <FcAbout size={54} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Street Gospel Mission Church
          </h1>
        </div>

        <p className="leading-relaxed text-base sm:text-lg lg:text-xl text-center">
          The primary focus of SGMC Corps is the proclamation and the
          demonstration of the Gospel of Jesus Christ for our nearest neighbors.
          We embrace the spiritual principle that the greatest goal of the
          believer is to grow in the grace and the holy spirit of living Christ
          as we learn, teach, apply, and exercise Gods blessed words in our
          daily life. This spiritual empowerment results in the evangelization
          of the lost and the demonstration of the love of Christ. We are openly
          encouraged to engage, invite and believe in Christ and to learn and
          grow in the grace of Christ through the real exercise of the Gospel of
          Jesus Christ. Our daily outreach is to bridge between our near
          neighbors who are lost/last/least and those who have a compassion to
          love our neighbors as ourselves in Christ. Our nearest neighbors are
          the poor in need who crosses our path as we journey through life
        </p>
      </div>

      {/* Pastors section */}
      <div className="sectionwrapper px-6 sm:px-12 lg:px-24">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center my-20 sm:my-24">
          Our Pastors
        </h1>
        <section className="pastors-section grid grid-cols-1 xl:grid-cols-2 my-20 place-items-center gap-8">
          <Card className="w-full max-w-4xl my-20">
            <CardContent className="flex flex-col md:flex-row h-auto md:h-[400px] justify-center items-center gap-12 ">
              <div className="relative w-full md:w-[1800px] h-[340px]">
                <Image
                  src="/images/steven.PNG"
                  alt="Pastor Steven Lee"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <p className="text-center md:text-left leading-relaxed text-base sm:text-lg">
                Pastor Steven Lee is an influential religious leader and public
                figure who has dedicated his life to spreading the teachings of
                the Christian faith. He is widely respected for his thoughtful
                and compassionate approach to ministry, and is known for his
                ability to connect with people from all walks of life.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full max-w-4xl ">
            <CardContent className="flex flex-col md:flex-row h-auto md:h-[400px] justify-center items-center gap-12 ">
              <div className="relative w-full sm:w-[1800px] h-[340px]">
                <Image
                  src="/images/soon.PNG"
                  alt="Pastor Soon Keum Lee"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <p className="text-center md:text-left leading-relaxed text-base sm:text-lg">
                Pastor Soon Keum Lee is a highly respected spiritual leader and
                devoted servant of God who has dedicated her life to spreading
                the teachings of the Christian faith. With a kind and
                compassionate spirit, she has touched the lives of countless
                individuals and inspired them to deepen their faith and seek a
                closer relationship with God.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Gallery */}
      <div className="imgwrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 sm:gap-12 my-20 px-6">
        {aboutGalleryImages.map((img: string, idx) => (
          <motion.div
            variants={imageVariants}
            initial="start"
            whileInView="end" // <-- animate when in view
            viewport={{ once: true }} // <-- animate only once
            custom={idx}
            key={img}
            className="relative w-full max-w-[400px] h-[420px]"
          >
            <Image
              src={img}
              alt="About Gallery"
              fill
              className="rounded-xl object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
