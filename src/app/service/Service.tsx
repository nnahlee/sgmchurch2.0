"use client";
import Image from "next/image";
import React from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

type ServiceProps = {
  title: string;
  description: string;
  btnText: string;
  imgUrl: string;
};

const cardVariant = {
  start: { opacity: 0, x: -100 },
  end: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.5, // delay based on index
    },
  }),
};

const Service = () => {
  const services: ServiceProps[] = [
    {
      title: "San Francisco",
      description: "Sunday at 7:00am",
      btnText: "Learn More",
      imgUrl: "sf2.jpg",
    },
    {
      title: "Oakland & Berkeley",
      description: "Tuesday at 9:00am",
      btnText: "Learn More",
      imgUrl: "oakland2.jpg",
    },
    {
      title: "San Jose",
      description: "Thursday at 8:00am",
      btnText: "Learn More",
      imgUrl: "sanjose.jpg",
    },
  ];

  return (
    <div>
      <h1 className="md:text-6xl text-4xl font-bold text-center my-20">
        Service Days
      </h1>
      <div className="grid-container grid  lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 my-30 place-items-center  gap-8">
        {services.map((service, idx: number) => {
          return (
            <motion.div
              variants={cardVariant}
              initial="start"
              animate="end"
              custom={idx}
              key={service.title}
            >
              <Card className="flex items-center justify-center p-6 min-w-[420px] min-h-[400px] max-w-[400px] max-h-[500px] relative">
                <CardTitle className="text-2xl mt-3 font-bold">
                  {service.title}
                </CardTitle>
                <div className="img-container w-[240px] h-[320px] relative">
                  <Image
                    className="object-cover rounded-xl"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={`/images/${service.imgUrl}`}
                    alt="service-img"
                  />
                </div>

                <CardDescription className="text-lg text-secondary-foreground font-bold">
                  {service.description}
                </CardDescription>
                <Link href="/contact">
                  <Button className="cursor-pointer px-8" size="lg">
                    {service.btnText}
                  </Button>
                </Link>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
