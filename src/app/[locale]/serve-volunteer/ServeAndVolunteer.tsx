"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CiLocationArrow1 } from "react-icons/ci";
import { Badge } from "@/components/ui/badge";
import ServeForm from "./ServeForm";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const ServeAndVolunteer = () => {
  const t = useTranslations("ServeAndVolunteer");
  const router = useRouter();
  return (
    <div>
      <div className="bg-[#172a39]  grid xl:grid-cols-2  md:grid-cols-1  gap-8 md:p-12 p-4">
        <Card className="bg-[#17a39] mb-12  h-full min-w-[240px] rounded-4xl ">
          <CardHeader>
            <CardTitle className=" font-bold xl:text-6xl text-4xl  lg:text-left text-center md:p-12 p-4 text-white">
              {t("title")}
            </CardTitle>
          </CardHeader>
          <CardHeader>
            <CardDescription className=" font-bold text-3xl md:text-left text-center md:p-12 p-0 text-white">
              {t("secondaryTitle")}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-white md:p-6 p-4  md:text-xl md:text-left text-center text-lg  leading-relaxed">
            {t("description")}
          </CardContent>
          <CardFooter className="flex md:flex-row flex-col m-12 gap-8">
            <Button
              onClick={() => {
                document.getElementById("signup")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="px-12 w-[200px] bg-teal-500 hover:bg-pink-500 text-white py-7 cursor-pointer"
              size="lg"
            >
              {t("btnText1")}
              <CiLocationArrow1 data-icon="inline-end" />
            </Button>

            <Button
              type="button"
              onClick={() => router.push("/faq")}
              className="px-12 w-[200px] py-7 cursor-pointer bg-gray-200 font-bold"
              size="lg"
              variant="outline"
            >
              {t("btnText2")}
            </Button>
          </CardFooter>
        </Card>
        <Card className="relative h-[400px] md:h-[700px] mb-12">
          <Image
            fill={true}
            className="object-cover rounded-xl md:p-12 p-0"
            src="/images/serve-volunteer.jpg"
            alt="place-holder"
          />
        </Card>
      </div>
      <div className="service-form-container grid  xl:grid-cols-2 grid-cols-1 gap-6 bg-stone-50 w-screen md:p-24 p-4">
        <div className="flex  flex-col  xl:p-4 p-0">
          <Badge
            variant="outline"
            className="p-6 text-teal-500 md:text-lg text-sm"
          >
            {t("signUpBadge")}
          </Badge>
          <p className="leading-relaxed md:text-2xl text-lg md:text-left text-center md:p-0 p-6 my-18">
            {t("signUpDescription")}
          </p>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <ServeForm />
        </div>
      </div>
    </div>
  );
};

export default ServeAndVolunteer;
