"use client";

import Image from "next/image";
import { gallerySlides } from "../../../../../types";

import { Link } from "@/i18n/navigation";
import { Maximize2, Images } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

type GalleryImageTypes = {
  id: string;
};

const GalleryImage = ({ id }: GalleryImageTypes) => {
  // const currentImageIndex = +id - 1;
  // console.log(currentImageIndex);
  const imgSrc = gallerySlides.map((slide) => slide.src)[+id];

  const imageRef = useRef<HTMLDivElement>(null);

  const handleFullscreen = async () => {
    if (!imageRef.current) return;

    try {
      // check if already fs
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        // enter fs
        await imageRef.current.requestFullscreen();
      }
    } catch (error) {
      console.error("Unable to toggle fullscreen:", error);
    }
  };
  return (
    <div>
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          {/* Top navigation */}
          <div className="mb-5 flex items-center justify-between gap-4">
            <Link
              aria-label="Back to gallery"
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <Button className="cursor-pointer" size="lg" variant="secondary">
                Back to Gallery
              </Button>
            </Link>

            <span className="shrink-0 text-sm font-medium tabular-nums text-muted-foreground">
              {id} / {gallerySlides.length}
            </span>
          </div>

          {/* Main image viewer */}
          <div
            ref={imageRef}
            className="group relative isolate aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-950 shadow-xl sm:aspect-[16/9] lg:aspect-[16/8]"
          >
            <Image
              aria-label={`gallery image - ${id}`}
              src={imgSrc}
              alt={id}
              fill
              quality={75}
              fetchPriority="high"
              sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 767px) calc(100vw - 3rem), (max-width: 1279px) calc(100vw - 4rem), 1216px"
              className="object-contain"
            />

            {/* Fullscreen */}
            <button
              type="button"
              onClick={handleFullscreen}
              aria-label="Toggle fullscreen"
              className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/75 sm:bottom-5 sm:right-5"
            >
              <Maximize2 className="h-5 w-5" />
            </button>
          </div>

          {/* Image thumbnails */}
          <div className="mt-5 flex gap-3 overflow-x-auto pb-3">
            {gallerySlides.map((item, index) => {
              const isActive = index === +id;

              return (
                <Link
                  key={item.src}
                  href={`/gallery/${item.id}`}
                  aria-label={`View image ${item.id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-20 sm:w-28 ${
                    isActive
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    aria-label={`gallery thumbnail ${item.alt} - ${item.id}`}
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </Link>
              );
            })}
          </div>

          {/* Image information */}
          <section className="mt-8 border-t border-border pt-7 sm:mt-10 sm:pt-9">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  Street Gospel Mission Church
                </span>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Celebrating faith, fellowship, and service at Street Gospel
                  Mission Church. Each moment reflects our shared commitment to
                  worship, community, and sharing God&apos;s love.
                </p>
              </div>

              <Link
                aria-label={`gallery image - ${id}`}
                href={`/gallery/${id}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition hover:bg-muted"
              >
                <Images className="h-4 w-4" />
                Explore Gallery
              </Link>
            </div>
          </section>

          {/* Bottom navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-border pt-5"></div>
        </div>
      </main>
    </div>
  );
};

export default GalleryImage;
