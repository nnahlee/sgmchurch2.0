"use client";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { slideInfos } from "../../../types";

const Slider = () => {
  return (
    <div className="md:p-24 py-12">
      <Carousel className="w-full max-w-[1650px] mx-auto">
        <CarouselContent>
          {slideInfos.map(({ title, description, src }, index) => (
            <CarouselItem key={index}>
              <div>
                <Card className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-12">
                  <div className="relative w-full sm:max-w-[450px] aspect-[9/10]">
                    <Image
                      src={src}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <CardContent className="flex aspect-square flex-col gap-12 items-center justify-center p-6">
                    <CardTitle className="xl:text-6xl text-3xl text-green-500 capitalize text-center">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-xl md:text-start text-center leading-9 font-bold text-gray-700">
                      {description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[-8px] top-1/2 -translate-y-1/2  p-3 w-12 h-12 rounded-full bg-white shadow-md hover:bg-gray-100 !flex" />
        <CarouselNext className="right-[-8px] top-1/2 -translate-y-1/2  p-3 w-12 h-12 rounded-full bg-white shadow-md hover:bg-gray-100 !flex" />
      </Carousel>
    </div>
  );
};

export default Slider;
