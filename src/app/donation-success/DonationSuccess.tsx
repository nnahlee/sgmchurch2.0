"use client";

import React, { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaRegCopy } from "react-icons/fa";

const DonationSuccess = () => {
  const [mount, setMount] = useState(false);
  const { width, height } = useWindowSize();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setMount(true);
    setTimeout(() => setMount(false), 3500);
  }, []);

  const handleCopy = async () => {
    try {
      // Get current URL
      await navigator.clipboard.writeText(window.location.origin);
      setOpen(true);

      setTimeout(() => setOpen(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="md:p-24 p-0 my-20 flex items-center flex-col justify-center gap-4">
      <h2 className="md:text-6xl text-4xl text-green-500 text-center font-bold">
        ✅ Donation Success 💌
      </h2>
      <div className="donate-description flex flex-col items-center justify-center gap-6 my-12">
        <h3 className="md:text-4xl text-2xl font-bold text-center">
          Thank you For your Donation
        </h3>
        <p className="text-center text-lg font-bold">
          Continue to show support by spreading awareness and sharing with your
          family and friends.
        </p>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger>
            <Badge
              onClick={handleCopy}
              className="p-3 bg-gray-800 cursor-pointer px-12 text-lg font-bold"
              variant="default"
            >
              Share Link
            </Badge>
          </PopoverTrigger>
          <PopoverContent className="text-center flex justify-center gap-2 items-center my-4">
            Link Copied! <FaRegCopy size={18} />
          </PopoverContent>
        </Popover>
      </div>
      {mount && <Confetti width={width} height={height} />}
    </div>
  );
};

export default DonationSuccess;
