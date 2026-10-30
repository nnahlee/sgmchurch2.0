import { FaFacebook, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";
const Footer = () => {
  const t = useTranslations("Socials");
  return (
    <div className="p-12 bg-gray-900 text-white">
      <div className="socials-container flex flex-col items-center justify-center gap-4">
        <h1 className="md:text-6xl text-4xl font-bold text-center">
          {t("footerTitle")}
        </h1>

        <div className="social-icon-container flex text-white justify-center items-center gap-8 my-8">
          <Link
            target="_blank"
            aria-label="Visit our Facebook page"
            href="https://www.facebook.com/welcomegospel/"
          >
            <FaFacebook
              aria-hidden="true"
              className="hover:text-pink-500  transition-colors duration-300 ease-in-out"
              size={48}
            />
          </Link>

          <Link
            aria-label="Visit our YouTube channel"
            target="_blank"
            href="https://www.youtube.com/@eternalkingdomofgod4438"
          >
            <FaYoutube
              aria-hidden="true"
              className="hover:text-pink-500 transition-colors duration-300 ease-in-out"
              size={60}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
