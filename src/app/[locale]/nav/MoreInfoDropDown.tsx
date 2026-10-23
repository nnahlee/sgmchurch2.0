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
      title: "Gallery",
      href: "/gallery",
    },
    {
      title: "Serve - Volunteer",
      href: "/serve-volunteer",
    },
  ];
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" rounded-md py-6 min-w-[160px] cursor-pointer bg-gray-900   text-white font-bold text-base">
              <div className="flex justify-center items-center gap-2">
                <IoSearch size={20} />
                {t("moreInfoBtn")}
              </div>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="min-w-[200px] p-4 text-center">
              {navigationLinks.map(({ href, title }, idx) => {
                return (
                  <NavigationMenuLink
                    key={title}
                    className="flex flex-row items-center justify-center gap-2"
                    href={href}
                  >
                    <Image
                      alt="pulse-img"
                      width={20}
                      height={20}
                      src="/images/pulse.gif"
                    />{" "}
                    {t(`moreInfos.${idx}.title`)}
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

export default MoreInfoDropDown;
