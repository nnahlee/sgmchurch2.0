import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="p-12 bg-gray-900 text-white">
      <div className="socials-container flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl font-bold text-center">Socials</h1>

        <div className="social-icon-container flex text-white justify-center items-center gap-8 my-8">
          <Link target="_blank" href="https://www.facebook.com/welcomegospel/">
            <FaFacebook
              className="hover:text-pink-500  transition-colors duration-300 ease-in-out"
              size={48}
            />
          </Link>
          <FaInstagram
            className="hover:text-pink-500  transition-colors duration-300 ease-in-out"
            size={48}
          />
          <Link
            target="_blank"
            href="https://www.youtube.com/@eternalkingdomofgod4438"
          >
            <FaYoutube
              className="hover:text-pink-500  transition-colors duration-300 ease-in-out"
              size={60}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
