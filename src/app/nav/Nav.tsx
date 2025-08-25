"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeartIcon } from "lucide-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

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
      delay: i * 0.1, // stagger links by index
      duration: 0.3,
    },
  }),
};

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="w-full flex sticky top-0 z-50 items-center justify-between md:px-12 p-4 bg-background shadow-md">
      {/* Logo */}
      <Link href="/">
        <div className="relative w-[200px] h-[70px] md:w-[360px] md:h-[125px]">
          <Image
            src="/images/icontwo.png"
            alt="Homepage Icon"
            fill
            className="object-cover"
          />
        </div>
      </Link>

      {/* Desktop Nav */}
      <ul className="lg:flex hidden items-center gap-14 text-xl">
        {navLinks.map(({ name, href }) => (
          <li key={name}>
            {name === "Donate" ? (
              <Button asChild className="w-[160px] py-7 font-bold text-lg">
                <Link href={href}>
                  <HeartIcon size={46} color="red" /> {name}
                </Link>
              </Button>
            ) : (
              <Link
                href={href}
                className="hover:text-primary transition-colors duration-200"
              >
                {name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        className="lg:hidden p-2 relative z-50 flex items-center justify-center text-black cursor-pointer"
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

            {/* mobile nav horizontoal drawer  */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-full bg-background shadow-2xl flex flex-col items-center justify-center gap-8 text-2xl z-50"
            >
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
                        <HeartIcon size={30} color="red" /> {name}
                      </Link>
                    </Button>
                  ) : (
                    <Link
                      href={href}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
