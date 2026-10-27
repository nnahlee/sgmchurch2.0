"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Video = () => {
  const t = useTranslations("Video");
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = "26LaiI9zydo";

  return (
    <section className="flex w-full flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
      <h2 className="mb-8 text-center text-4xl font-bold md:mb-12 md:text-6xl">
        {t("videoTitle")}
      </h2>

      <div className="relative w-full max-w-[984px] overflow-hidden rounded-xl bg-black shadow-lg">
        <div className="relative aspect-video w-full ">
          {isPlaying ? (
            <iframe
              className="absolute inset-0 h-full w-full cursor-pointer"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
              title={t("videoTitle")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="group absolute cursor-pointer inset-0 flex h-full w-full items-center justify-center"
              aria-label="Play church video"
            >
              <Image
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={t("videoTitle")}
                fill
                sizes="(max-width: 1024px) 100vw, 984px"
                className="object-cover cursor-pointer"
              />

              <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />

              <span className="relative flex h-16 w-20 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg transition-transform group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1 h-8 w-8 fill-current"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Video;
