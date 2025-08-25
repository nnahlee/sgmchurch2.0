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
// server action
import { sendEmailAction } from "../../../actions/sendEmail";
import { useServerAction } from "zsa-react";
import { contactFormSchema, FormTypes } from "../../../zodtypes/zodTypes";
const ContactForm = () => {
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

    if (data) {
      toast.success(`Email Sent Successfully`);
    }

    if (err) {
      return toast.error(`Something Went Wrong`);
    }

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
    <div className="md:p-24 p:0 bg-green-500 text-white flex xl:flex-row flex-col justify-center items-center gap-24">
      <Image
        src="/images/contactform.PNG"
        alt="Contact Form Image"
        width={500}
        height={500}
        className="object-cover rounded-lg my-12"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 md:p-0 p-12 flex flex-col items-center justify-center md:min-w-2xl lg:w-1/2 w-full"
        >
          <h1 className="text-white md:text-6xl text-5xl font-bold text-center">
            Contact
          </h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white p-5 text-black"
                    placeholder="Enter name..."
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
                <FormLabel className="text-lg">Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white p-5 text-black"
                    placeholder="Enter email..."
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
                <FormLabel className="text-lg">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white text-black p-5"
                    placeholder="Enter phone..."
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
                <FormLabel className="text-lg">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your message..."
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
            disabled={isPending || !capcha}
            size="lg"
            className="w-full p-6 font-bold text-lg cursor-pointer"
            type="submit"
          >
            Submit <FaArrowRightFromBracket className="ml-1" size={36} />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
