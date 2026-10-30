"use client";

import { Button } from "@/components/ui/button";
import { Share2, Check } from "lucide-react";
import { FaRegCopy } from "react-icons/fa6";
import { useEffect, useState } from "react";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  EmailIcon,
  EmailShareButton,
} from "next-share";

export default function SocialSideBar() {
  const [copied, setCopied] = useState(false);
  const [pageUrl, setPageUrl] = useState("https://sgmchurch.com");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);

      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        // console.log(document.title);
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } else {
        await copyLink();
      }
    } catch (error) {
      if (error) {
        console.error("Sharing failed:", error);
      }
    }
  };

  const shareLinks = [
    {
      name: "Facebook",
      icon: FacebookIcon,
      btn: FacebookShareButton,
      quote: "Share Street Gospel Mission Church on Facebook",
      hashtag: "#SGMCHURCH",
    },
    {
      name: "Twitter",
      icon: TwitterIcon,
      btn: TwitterShareButton,
      quote: "Share Street Gospel Mission Church on Twitter",
      hashtag: "#SGMCHURCH",
    },
    {
      name: "Email Share",
      icon: EmailIcon,
      btn: EmailShareButton,
      subject: "Share Street Gospel Mission Church",
      body: "Check out Street Gospel Mission Church!",
    },
  ];

  type SocialShareBtnProps = {
    children: React.ReactNode;
  };

  function SocialShareBtn({ children }: SocialShareBtnProps) {
    return (
      <div className="flex shrink-0 items-center justify-center">
        {children}
      </div>
    );
  }

  return (
    <aside
      aria-label="Share this page"
      className="
        fixed z-50 flex flex-row items-center
        gap-1 rounded-full border bg-background/95
        p-2 shadow-lg backdrop-blur-md

        bottom-[calc(env(safe-area-inset-bottom)+1rem)]
        left-1/2 -translate-x-1/2

        md:bottom-auto md:left-auto md:right-4
        md:top-1/2 md:-translate-x-0 md:-translate-y-1/2
        md:flex-col md:gap-2
      "
    >
      {/* Native Share */}
      <Button
        variant="ghost"
        size="icon"
        className="size-10 shrink-0 cursor-pointer rounded-full"
        aria-label="Share this page"
        onClick={handleShare}
      >
        <Share2 className="size-5" />
      </Button>

      <div className="h-6 w-px bg-border md:h-px md:w-6" />

      {/* Social Share Buttons */}
      {shareLinks.map(({ btn, hashtag, icon, name, quote, body, subject }) => {
        const ShareButton = btn;
        const ShareIcon = icon;

        return (
          <SocialShareBtn key={name}>
            <ShareButton
              url={pageUrl}
              quote={quote}
              hashtag={hashtag}
              body={body}
              subject={subject}
            >
              <ShareIcon size={35} />
            </ShareButton>
          </SocialShareBtn>
        );
      })}

      <div className="h-6 w-px bg-border md:h-px md:w-6" />

      {/* Copy Link */}
      <Button
        variant="ghost"
        size="icon"
        className="size-10 shrink-0 cursor-pointer rounded-full"
        aria-label={copied ? "Link copied" : "Copy page link"}
        onClick={copyLink}
      >
        {copied ? (
          <Check className="size-5 text-green-600" />
        ) : (
          <FaRegCopy className="size-5" />
        )}
      </Button>
    </aside>
  );
}
