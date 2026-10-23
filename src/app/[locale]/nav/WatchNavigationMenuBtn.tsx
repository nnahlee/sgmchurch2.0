"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useTranslations } from "next-intl";

const WatchNavigationMenuBtn = () => {
  const t = useTranslations("Nav");
  type NavigationLinkTypes = {
    title: string;
    href: string;
  };

  const navigationLinks: NavigationLinkTypes[] = [
    {
      title: "Youtube Channel",
      href: "https://www.youtube.com/@eternalkingdomofgod4438",
    },
    {
      title: "Watch Live Sunday 7AM - 8AM",
      href: "https://www.youtube.com/@eternalkingdomofgod4438/live",
    },
  ];
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-[160px] py-[30px] cursor-pointer bg-gray-900   text-white font-bold text-base">
              {t("watchOnlineBtn")}
            </NavigationMenuTrigger>

            <NavigationMenuContent className="min-w-[200px] p-2 text-center">
              {navigationLinks.map(({ href, title }) => {
                return (
                  <NavigationMenuLink
                    key={title}
                    target="_blank"
                    className="flex flex-row items-center justify-center gap-2"
                    href={href}
                  >
                    <Image
                      alt="pulse-img"
                      width={20}
                      height={20}
                      src="/images/pulse.gif"
                    />{" "}
                    {title}
                  </NavigationMenuLink>
                );
              })}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default WatchNavigationMenuBtn;
