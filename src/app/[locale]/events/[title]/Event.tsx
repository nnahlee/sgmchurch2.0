"use client";

import {
  Mail,
  Phone,
  Heart,
  HandHeart,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
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

type EventTypes = {
  title: string;
  translatedEvent: EventInfo;
};

const Event = ({ translatedEvent }: EventTypes) => {
  const t = useTranslations("Events");

  return (
    <main className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
      {/* Event Overview */}
      <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: Event Information */}
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {translatedEvent.badgeText}
            {/* {t(`items.${translatedEvent.id}.badgeText`)} */}
          </span>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {translatedEvent.title}
          </h1>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              {translatedEvent.date}
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              {translatedEvent.badgeText}
            </div>
          </div>

          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            {translatedEvent.description}
          </p>

          <Link
            href="/contact"
            className="inline-flex text-center items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            <HandHeart className="md:h-5 md:w-5 w-0 h-0" />
            {t(`contactTitle`)}
          </Link>
        </div>

        {/* Right: translatedEvent Image */}
        <div className="relative aspect-[4/2] w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={translatedEvent.imgSrc}
            alt={translatedEvent.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Donate & Volunteer / Contact */}
      <section className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Donate & Volunteer */}
        <div className="flex flex-col sm:items-start items-center gap-4 rounded-2xl border bg-card p-7">
          <Heart className="h-7 w-7 text-primary" />

          <h2 className="text-2xl text-center font-semibold">
            {t(`donateTitle`)}
          </h2>

          <p className="leading-7 text-muted-foreground">
            {t(`donateDescription`)}
          </p>

          <Link
            href="/donate"
            className="mt-auto inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90"
          >
            <HandHeart className="sm:h-5 sm:w-5 h-0 w-0" />
            {t(`donateTitle`)}
          </Link>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col sm:items-start items-center gap-4 rounded-2xl border bg-card p-7">
          <Mail className="h-7 w-7 text-primary" />

          <h2 className="text-2xl text-center font-semibold">
            {t(`contactTitle`)}
          </h2>

          <p className="leading-7 sm:text-left text-center  text-muted-foreground">
            {t(`contactDescription`)}
          </p>

          <div className="mt-2 flex items-center flex-col gap-4">
            <a
              href="mailto:admin@sgmchurch.com"
              className="flex items-center text-center gap-3 transition hover:text-primary"
            >
              <Mail className="sm:h-5 sm:w-5  w-0 h-0" />
              admin@sgmchurch.com
            </a>

            <a
              href="tel:6509953336"
              className="flex items-center text-center gap-3 transition hover:text-primary"
            >
              <Phone className="sm:h-5 sm:w-5 w-0 h-0" />
              650-995-3336
            </a>
          </div>
        </div>
      </section>

      {/* Encouragement */}
      <section className="mt-8 rounded-2xl bg-muted px-6 py-12 text-center sm:px-12">
        <Heart className="mx-auto  mb-4 h-8 w-8 text-red-500" />

        <h2 className="text-2xl font-semibold sm:text-3xl">
          {t(`secondaryTitle`)}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
          {t(`secondaryDescription`)}
        </p>
      </section>
    </main>
  );
};

export default Event;
