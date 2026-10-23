"use client";
import React from "react";
import { useTranslations } from "next-intl";

const Video = () => {
  const t = useTranslations("Video");
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="md:text-6xl text-4xl font-bold text-center m-20">
        {t(`videoTitle`)}
      </h1>
      <div className="video-container">
        <iframe
          width="984"
          height="515"
          src="https://www.youtube.com/embed/26LaiI9zydo?si=jWZzQtu-W-J1Z5nJ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
