"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import WatchNavigationMenuBtn from "./WatchNavigationMenuBtn";
import MoreInfoDropDown from "./MoreInfoDropDown";
import LocaleSwitcher from "../LocaleSwitcher";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type NavLinkTypes = {
  name: string;
  href: string;
};

const navLinks: NavLinkTypes[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Donate", href: "/donate" },
];

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // stagger links
      duration: 0.3,
    },
  }),
};

export default function Nav() {
  const t = useTranslations("Nav");
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="w-full flex sticky top-0 z-50 items-center justify-between md:px-12 p-2 bg-background shadow-md">
      {/* Logo */}
      <Link href="/">
        <div className="relative w-[200px] h-[70px] md:w-[360px] md:h-[125px]">
          <Image
            src="/images/icontwo.png"
            alt="Homepage Icon"
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>

      {/* Desktop Nav */}
      <ul className="2xl:flex hidden items-center gap-14 text-xl">
        {navLinks.map(({ name, href }, idx) => (
          <li key={name}>
            {name === "Donate" ? (
              <Button asChild className="w-[160px] py-7 font-bold text-lg">
                <Link href={href}>
                  <HeartIcon size={46} color="red" /> {t("donateBtn")}
                </Link>
              </Button>
            ) : (
              <Link
                href={href}
                className="hover:text-primary transition-colors duration-200"
              >
                {t(`linkTitles.${idx}.title`)}
              </Link>
            )}
          </li>
        ))}

        <WatchNavigationMenuBtn />
        <MoreInfoDropDown />
        <LocaleSwitcher />
      </ul>

      {/* Mobile Menu Button */}
      <div
        className="2xl:hidden p-2 relative z-50 flex items-center justify-center text-black cursor-pointer"
        onClick={() => setIsMobile(!isMobile)}
      >
        <RxHamburgerMenu size={30} />
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobile(false)}
            />

            {/* Centered Mobile Nav */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background shadow-2xl flex flex-col items-center justify-center gap-8 text-2xl z-50"
            >
              {/* Close Button */}
              <div
                className="absolute top-4 right-4 p-2 text-black cursor-pointer"
                onClick={() => setIsMobile(false)}
              >
                <IoMdClose size={30} />
              </div>

              {navLinks.map(({ name, href }, index) => (
                <motion.div
                  key={name}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onClick={() => setIsMobile(false)}
                >
                  {name === "Donate" ? (
                    <Button
                      asChild
                      className="w-[200px] py-7 font-bold text-lg"
                    >
                      <Link href={href}>
                        <HeartIcon size={30} color="red" /> {t("donateBtn")}
                      </Link>
                    </Button>
                  ) : (
                    <Link
                      href={href}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {t(`linkTitles.${index}.title`)}
                    </Link>
                  )}
                </motion.div>
              ))}

              <WatchNavigationMenuBtn />
              <MoreInfoDropDown />
              <LocaleSwitcher />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
