"use client";

import { Card, CardTitle, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { eventInfos } from "@/../types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import slugify from "slugify";
import { useTranslations } from "next-intl";

type EventInfo = {
  id: number;
  title: string;
  imgSrc: string;
  date: string;
  btnText: string;
  badgeText: string;
  description: string;
};

const Events = () => {
  const t = useTranslations("Events");
  const eventInfos = t.raw("items") as EventInfo[];

  return (
    <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="my-12 text-center">
          <p className="mb-6 text-xl font-semibold uppercase tracking-[0.25em] text-primary">
            Join Us
          </p>

          <h2 className="text-3xl font-bold my-6 tracking-tight sm:text-4xl md:text-6xl">
            Upcoming Events
          </h2>

          <p className="mx-auto mt-4 my-6 max-w-2xl text-muted-foreground">
            Come together with us for fellowship, worship, and opportunities to
            serve our community.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {eventInfos.map(({ title, imgSrc }, idx) => (
            <Link
              key={title}
              href={`/events/${slugify(title, {
                lower: true,
                strict: true,
              })}`}
            >
              <Card className="flex cursor-pointer p-6 h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                {/* Image Container */}

                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    fill
                    src={imgSrc}
                    alt={title}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Event Information */}
                <CardHeader className="flex-1 space-y-3">
                  <div>
                    <Badge className="px-4 py-3" variant="outline">
                      {t(`items.${idx}.badgeText`)}
                    </Badge>
                  </div>

                  <CardTitle className="text-xl">
                    {t(`items.${idx}.title`)}
                  </CardTitle>
                </CardHeader>

                {/* Event Button */}
                <CardFooter className="mt-auto">
                  <Button size="lg" className="mt-2 cursor-pointer">
                    {t(`items.${idx}.btnText`)}
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
