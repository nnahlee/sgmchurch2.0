import React from "react";
import Image from "next/image";

const Volunteer = () => {
  return (
    <div className="bg-gray-50 p-24">
      <div className="gridcontainer grid place-items-center md:grid-cols-2 grid-cols-1 gap-24 p-10">
        <div className="img-container relative min-w-[240px] w-full h-[420px]">
          <Image
            fill
            src="/images/volunteer.jpg"
            alt="volunteer-img"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-xl"
          />
        </div>
        <div className="w-full volunteer-description flex items-center justify-center flex-col">
          <h1 className="md:text-6xl  text-4xl font-bold text-center m-10">
            Volunteer
          </h1>
          <p className="leading-9 text-xl font-bold text-center">
            Use your unique gifts & talents to invest in the community around
            you. Whether you love to pour into the next generation, have a
            musical skillset, or simply love welcoming & encouraging guests
            every week, volunteering is at the heart of Street Gospel Mission
            Church.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
