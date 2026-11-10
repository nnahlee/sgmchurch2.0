"use client";

import { eventInfos } from "@/../types";
import {
  Mail,
  Phone,
  Heart,
  HandHeart,
  CalendarDays,
  MapPin,
} from "lucide-react";
import slugify from "slugify";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type EventTypes = {
  title: string;
};

const Event = ({ title }: EventTypes) => {
  // Normalize the URL slug
  const parsedTitle = slugify(title, {
    lower: true,
    strict: true,
  });

  // Find the matching event
  const event = eventInfos.find(
    (e) =>
      slugify(e.title, {
        lower: true,
        strict: true,
      }) === parsedTitle,
  );

  if (!event) {
    return (
      <div className="mx-auto flex gap-6 justify-center items-center flex-col min-h-[70vh] max-w-6xl px-6 py-20 text-center">
        <h1 className="text-4xl font-semibold">Event Not Found</h1>
        <Link href="/events" className="mt-4 inline-block underline">
          <Button size="lg" className="cursor-pointer py-6">
            Return to Events
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
      {/* Event Overview */}
      <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: Event Information */}
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {event.badgeText}
          </span>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {event.title}
          </h1>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              {event.date}
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              {event.badgeText}
            </div>
          </div>

          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            {event.description}
          </p>

          <Link
            href="/contact"
            className="inline-flex text-center items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            <HandHeart className="md:h-5 md:w-5 w-0 h-0" />
            Sign Up to Volunteer
          </Link>
        </div>

        {/* Right: Event Image */}
        <div className="relative aspect-[4/2] w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={event.imgSrc}
            alt={event.title}
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
            Donate or Volunteer
          </h2>

          <p className="leading-7 text-muted-foreground">
            Your generosity and willingness to serve can make a meaningful
            difference in someone's life. We welcome donations of supplies and
            volunteers who want to help make this event possible.
          </p>

          <ul className="space-y-2 text-muted-foreground">
            <li>• Donate essential supplies for this event.</li>
            <li>• Volunteer to help distribute donations.</li>
            <li>• Help bring hope and encouragement to others.</li>
          </ul>

          <Link
            href="/donate"
            className="mt-auto inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90"
          >
            <HandHeart className="sm:h-5 sm:w-5 h-0 w-0" />
            Donate
          </Link>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col sm:items-start items-center gap-4 rounded-2xl border bg-card p-7">
          <Mail className="h-7 w-7 text-primary" />

          <h2 className="text-2xl text-center font-semibold">
            Contact & Sign Up
          </h2>

          <p className="leading-7 sm:text-left text-center  text-muted-foreground">
            Interested in participating, donating, or volunteering? Contact us
            to sign up and learn more about how you can help.
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
          Together, We Can Make a Difference
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
          Every act of kindness, every donation, and every helping hand can
          bring hope to someone in need. Thank you for sharing your time,
          generosity, and love with our community.
        </p>
      </section>
    </main>
  );
};

export default Event;
