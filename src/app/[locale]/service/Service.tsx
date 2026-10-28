"use client";
import Image from "next/image";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

type ServiceProps = {
  title: string;
  description: string;
  btnText: string;
  imgUrl: string;
};

const cardVariant = {
  start: { opacity: 0, x: -100 },
  end: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.4, // delay based on index
    },
  }),
};

const Service = () => {
  const t = useTranslations("Services");
  const services: ServiceProps[] = [
    {
      title: "San Francisco",
      description: "Sunday at 7:00am",
      btnText: "Learn More",
      imgUrl: "sf2-compressed.webp",
    },
    {
      title: "Oakland & Berkeley",
      description: "Tuesday at 9:00am",
      btnText: "Learn More",
      imgUrl: "oakland2-compressed.webp",
    },
    {
      title: "San Jose",
      description: "Thursday at 8:00am",
      btnText: "Learn More",
      imgUrl: "sanjose.webp",
    },
  ];

  return (
    <div>
      <h1 className="md:text-6xl text-4xl font-bold text-center my-20">
        {t("serviceTitle")}
      </h1>

      <div className="grid-container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 my-30 place-items-center gap-8">
        {services.map((service, idx) => (
          <motion.div
            variants={cardVariant}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            custom={idx}
            key={service.title}
          >
            <Card className="relative flex min-h-[420px] max-h-[520px] min-w-0 w-full max-w-[400px] items-center justify-center p-12">
              <CardTitle className="mt-3 text-2xl font-bold">
                {service.title}
              </CardTitle>

              <div className="img-container relative h-[420px] w-[250px]">
                <Image
                  aria-label={`Service image for ${service.title}`}
                  className="rounded-xl object-cover"
                  fill
                  sizes="240px"
                  quality={75}
                  src={`/images/compressed/${service.imgUrl}`}
                  alt={service.title}
                />
              </div>

              <CardDescription className="text-lg font-bold text-secondary-foreground">
                {service.description}
              </CardDescription>
              <Button asChild className="cursor-pointer px-8" size="lg">
                <Link
                  aria-label="Contact Street Gospel Mission Church"
                  href="/contact"
                >
                  {service.btnText}
                </Link>
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
