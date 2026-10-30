"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { gallerySlides } from "../../../../types";
import { Link } from "@/i18n/navigation";

const Gallery = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  );

  return (
    <section className="w-full px-4 py-8 sm:px-6 md:py-8 lg:px-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => {
          plugin.current.reset();
          plugin.current.play();
        }}
        className="mx-auto w-full max-w-[1200px]"
      >
        <CarouselContent className="py-4 min-[400px]:py-8 sm:py-12 md:py-16">
          {gallerySlides.map(({ src, alt, id }) => (
            <CarouselItem
              key={id}
              className="basis-full min-w-0 min-[400px]:basis-1/2 lg:basis-1/3"
            >
              <Link href={`/gallery/${id}`}>
                <Card className="overflow-hidden p-1 min-[320px]:p-2 sm:p-3">
                  <CardContent className="relative h-[220px] min-[320px]:h-[260px] sm:h-[340px] md:h-[400px] lg:h-[440px] p-0">
                    <Image
                      quality={85}
                      src={src}
                      alt={alt}
                      fill
                      sizes="(max-width: 399px) 95vw, (max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="rounded-md sm:object-cover object-contain"
                    />
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 sm:left-4" />
        <CarouselNext className="right-2 sm:right-4" />
      </Carousel>
    </section>
  );
};

export default Gallery;
