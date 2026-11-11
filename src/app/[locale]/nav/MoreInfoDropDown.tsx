"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { useTranslations } from "next-intl";

const MoreInfoDropDown = () => {
  const t = useTranslations("Nav");

  type NavigationLinkTypes = {
    title: string;
    href: string;
  };

  const navigationLinks: NavigationLinkTypes[] = [
    {
      title: "FAQ - Frequently Asked Questions",
      href: "/faq",
    },
    {
      title: "Watch Online",
      href: "https://www.youtube.com/@eternalkingdomofgod4438",
    },
    {
      title: "Serve - Volunteer",
      href: "/serve-volunteer",
    },
  ];

  return (
    <NavigationMenu
      viewport={false}
      className="relative w-full max-w-full justify-center 2xl:w-auto"
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="min-w-[200px] cursor-pointer rounded-md bg-gray-900 py-7 text-base font-bold text-white">
            <div className="flex items-center justify-center gap-2">
              <IoSearch size={20} />
              {t("moreInfoBtn")}
            </div>
          </NavigationMenuTrigger>

          <NavigationMenuContent
            className="
    !absolute !left-1/2 !right-auto !top-full
    !-translate-x-1/2
    !w-[min(320px,calc(100vw-32px))]
    !min-w-0
    z-[60] mt-1.5 p-3 text-center

    2xl:!left-auto
    2xl:!right-0
    2xl:!translate-x-0
    2xl:!w-max
    2xl:!min-w-[280px]
    2xl:!max-w-[min(400px,calc(100vw-32px))]
  "
          >
            <div className="flex flex-col gap-2">
              {navigationLinks.map(({ href, title }, idx) => (
                <NavigationMenuLink
                  aria-label={`Visit ${title}`}
                  key={title}
                  target={title === "Watch Online" ? "_blank" : "_self"}
                  className="flex flex-row items-center justify-center gap-2 whitespace-normal py-3 text-sm"
                  href={href}
                >
                  <Image
                    alt="pulse-img"
                    width={20}
                    height={20}
                    src="/images/compressed/pulse.webp"
                  />
                  {t(`moreInfos.${idx}.title`)}
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MoreInfoDropDown;
