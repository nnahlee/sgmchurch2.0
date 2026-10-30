"use client";
import React from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaArrowRightFromBracket } from "react-icons/fa6";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslations } from "next-intl";
import { sendGTMEvent } from "@next/third-parties/google";
// server action
import { sendEmailAction } from "../../../../actions/sendEmail";
import { useServerAction } from "zsa-react";
import { contactFormSchema, FormTypes } from "../../../../zodtypes/zodTypes";
const ServeForm = () => {
  const t = useTranslations("ServeAndVolunteer");
  const form = useForm<FormTypes>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [capcha, setCapcha] = React.useState(false);

  const { isPending, execute } = useServerAction(sendEmailAction);

  async function onSubmit(values: FormTypes) {
    console.log("Form submitted:", values);

    // const emailData = await sendEmailAction(data);
    const [data, err] = await execute(values);
    console.log(data);

    if (err) {
      return toast.error(`Something Went Wrong`);
    }

    toast.success(`Email sent Successfully`);

    form.reset({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }

  function handleRecapcha(value: string | null) {
    console.log(`capcha value ${value}`);
    if (value) {
      setCapcha(true);
    }
  }
  return (
    <div className=" bg-slate-800 md:p-12 p-4 text-white 2xl:w-[700px] w-full">
      <div className="relative img-container md:min-h-[480px] h-[400px]">
        <Image
          aria-label="Serve and Volunteer"
          src="/images/compressed/serve-compressed.webp"
          alt="Contact Form Image"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-xl "
        />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 my-6  scroll-mt-110"
          id="signup"
        >
          <h1 className="text-white md:text-6xl text-3xl font-bold text-center">
            {t("formTitleMessage")}
          </h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="name" className="text-lg">
                  {t("name")}
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-white p-5 text-black"
                    placeholder={`${t("namep")}...`}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="email" className="text-lg">
                  {t("email")}
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-white p-5 text-black"
                    placeholder={`${t("emailp")}...`}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">{t("phone")}</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white text-black p-5"
                    placeholder={`${t("phonep")}...`}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="message" className="text-lg">
                  {t("message")}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={`${t("messagep")}...`}
                    className="resize-none bg-white p-5 text-black py-6"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPCHA_CLIENT_KEY!}
            onChange={handleRecapcha}
          />

          <Button
            onClick={() => {
              sendGTMEvent({
                event: "serve-volunteer-form-submitted",
                formLocation: "serve-volunteer-form",
              });
            }}
            disabled={isPending || !capcha}
            size="lg"
            className="w-full p-6 font-bold text-lg cursor-pointer"
            type="submit"
          >
            {t("submit")}
            <FaArrowRightFromBracket className="ml-1" size={36} />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ServeForm;
