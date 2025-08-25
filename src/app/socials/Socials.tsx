import React from "react";
import { LucideFacebook, LucideInstagram } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type SocialsTypes = {
  title: string;
  btnText: string;
  description: string;
  icon: React.ReactNode;
  url: string;
};

const Socials = () => {
  const sgmSocials: SocialsTypes[] = [
    {
      title: "Facebook",
      btnText: "Follow Us",
      description:
        "Stay connected with our community through Facebook. Get updates, event information, and more.",
      icon: <LucideFacebook size={48} className="text-blue-600" />,
      url: "https://www.facebook.com/welcomegospel",
    },
    {
      title: "Instagram",
      btnText: "Follow Us",
      description:
        "Follow us on Instagram for inspiring photos, stories, and updates from our church community.",
      icon: <LucideInstagram size={48} className="text-pink-600" />,
      url: "/",
    },
    {
      title: "Youtube",
      btnText: "Subscribe Now",
      description:
        "Subscribe to our YouTube channel for sermons, worship sessions, and community highlights.",
      icon: <Youtube size={60} className="text-red-600" />,
      url: "https://www.youtube.com/@eternalkingdomofgod4438/",
    },
  ];

  return (
    <div>
      <h1 className="md:text-6xl text-4xl font-bold text-center my-10">
        Follow us to stay connected with our community!
      </h1>
      <div className="grid-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-20 p-12">
        {sgmSocials.map(({ description, title, icon, url }) => {
          return (
            <Card
              className="flex items-center w-[400px] h-[500px] justify-center flex-col p-4"
              key={title}
            >
              <CardTitle className="text-4xl font-bold mb-4">{title}</CardTitle>
              {icon}
              <CardDescription className="text-center text-lg mb-4">
                {description}
              </CardDescription>

              <Button className="bg-orange-500 w-1/2 py-6 cursor-pointer  text-white  rounded-lg px-6  font-bold text-lg flex items-center gap-2">
                <Link className="w-full" target="_blank" href={url}>
                  Follow Us
                </Link>
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
