"use client";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { donatePayments } from "../../../types";
import { BiDonateHeart } from "react-icons/bi";
import { BsBalloonHeartFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaRegCopy } from "react-icons/fa";

const Donate = () => {
  const handleCopy = async () => {
    const zelleAddress = "lsoonkeum@gmail.com";
    await navigator.clipboard.writeText(zelleAddress);
  };
  return (
    <div className=" my-12">
      <div className="text-wrapper flex flex-col items-center gap-12 my-8 sm:mt-24 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-green-500 capitalize">
          Ways you can give
        </h1>
        <p className="text-center text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
          If you would like to give towards the work we do, here are ways you
          can help us.
        </p>
      </div>

      <div
        className="grid place-items-center gap-6 sm:gap-8 my-12 sm:my-24  
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {donatePayments.map((payment, idx) => (
          <Card
            key={idx}
            className="flex  items-center justify-center flex-col w-full min-h-[1000px]  p-6 sm:p-12"
          >
            <CardContent className="flex flex-col items-center">
              <Image
                src={payment.src}
                alt={`Donation method ${idx + 1}`}
                className="rounded-lg object-cover my-12"
                width={340}
                height={400}
              />

              <CardTitle className="text-3xl text-center font-bold mb-6">
                {payment.title}
              </CardTitle>
              <CardDescription className="text-center text-lg font-bold text-gray-600 mb-4">
                {payment.description}
              </CardDescription>
              <CardFooter className="p-4 ">
                <div className="flex flex-col items-center gap-2">
                  {payment.btnUrl === "/stripe-donation" ? (
                    <Link href="/stripe-donation" passHref>
                      <Button
                        className="md:w-[280px] cursor-pointer w-full md:py-7 py-0 md:text-lg text-sm font-bold bg-green-500"
                        size="lg"
                      >
                        {payment.btnText}
                      </Button>
                    </Link>
                  ) : payment.title === "Zelle" ? (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          onClick={handleCopy}
                          className="md:w-[280px] cursor-pointer w-full md:py-7 py-0 md:text-lg text-sm font-bold bg-green-500"
                        >
                          Donate With Zelle
                        </Button>
                      </PopoverTrigger>
                      <p className="text-center font-bold text-lg mt-4">
                        Send using Zelle to{" "}
                        <span className="text-green-500 text-xl  font-bold text-center">
                          lsoonkeum@gmail.com
                        </span>
                      </p>

                      <PopoverContent className="cursor-pointer text-center mt-2 flex justify-center items-center gap-2">
                        lsoonkeum@gmail.com <FaRegCopy size={16} />
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <Link
                      target="_blank"
                      href="https://www.paypal.com/donate/?hosted_button_id=AQRY3P8Z3DFMN"
                      passHref
                    >
                      <Button
                        className="md:w-[280px] cursor-pointer w-full md:py-7 py-0 md:text-lg text-sm font-bold bg-green-500"
                        size="lg"
                      >
                        {payment.btnText}
                      </Button>
                    </Link>
                  )}
                </div>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="donate-reasons-wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-6 sm:px-12 md:px-46 py-12 bg-gray-50 items-stretch my-24">
        <Card className="flex flex-col items-center justify-center gap-8 sm:gap-12 p-6 sm:p-8 h-full">
          <BiDonateHeart size={80} className="text-red-500 sm:size-[100px]" />
          <CardTitle className="text-2xl sm:text-3xl font-bold text-center">
            Donate Today and Be a Part of Our Mission
          </CardTitle>
          <CardContent className="text-center text-base sm:text-lg font-bold text-gray-600 max-w-xl">
            Street Gospel Mission Church is a faith-based organization that
            seeks to spread the gospel of Jesus Christ and provide support to
            those in need in our local community. Our mission is to help
            individuals and families overcome life’s challenges and find hope
            and restoration through faith, fellowship, and service.
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center justify-center gap-8 sm:gap-12 p-6 sm:p-8 h-full">
          <BsBalloonHeartFill
            size={80}
            className="text-red-500 sm:size-[100px]"
          />
          <CardTitle className="text-2xl sm:text-3xl font-bold text-center">
            Giving Hope to the Homeless
          </CardTitle>
          <CardContent className="text-center text-base sm:text-lg font-bold text-gray-600 max-w-xl">
            Thank you for considering a donation to Street Gospel Mission
            Church. Together, we can make a difference and bring hope to those
            in need.
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Donate;
