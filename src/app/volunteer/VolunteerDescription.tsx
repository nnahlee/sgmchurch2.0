import React from "react";
import { LucideQuote, ChevronLeft } from "lucide-react";

type VolunteerDescriptionTypes = {
  title: string;
  text: string;
};

const VolunteerDescription = () => {
  const volunteerDescriptions: VolunteerDescriptionTypes[] = [
    {
      title: "Alms & Offerings",
      text: "Contributing to the upkeep and ongoing work of Renewal of God's Work",
    },
    {
      title: "Vision Offerings",
      text: "Reaching the next generation with our ‘Make the Most’ building project",
    },
    {
      title: "Community Fund",
      text: "Supporting people within our local community who are in need of help",
    },
    {
      title: "Relief Fund",
      text: "Providing relief in times of distress for those in our church family",
    },
  ];

  return (
    <div className="bg-gray-50 my-16 px-4 sm:px-8 lg:px-24 py-12">
      {/* Header Section */}
      <div className="text-description flex flex-col items-center gap-4">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">
          <LucideQuote size={32} className="text-teal-500" /> We believe that
          God has called us to reach and bless people from one to many.
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-center">
          Our heartfelt thanks goes to you for standing with us in your
          donations to help the church to fulfil its mission and vision. You may
          wish to know more on how to contribute to the work of Renewal, please
          scroll down for the four ways you can support by giving financially.
        </p>
      </div>

      {/* Descriptions Section */}
      <div className="my-10 space-y-8">
        {volunteerDescriptions.map((description, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 text-center sm:text-left"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-teal-500 font-bold">
              {description.title}
            </h2>
            <ChevronLeft
              size={28}
              className="hidden sm:block text-teal-500 flex-shrink-0"
            />
            <p className="text-base sm:text-lg lg:text-xl text-secondary-foreground font-semibold">
              {description.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerDescription;
