"use server";
import nodemailer from "nodemailer";
import { createServerAction } from "zsa";
import { contactFormSchema, FormTypes } from "../zodtypes/zodTypes";
import ContactEmail from "../emails/ContactEmail";
import { render } from "@react-email/components";
// google gmail api
// https://developers.google.com/oauthplayground to get the refresh token
// test users -> https://console.cloud.google.com/auth/audience?project=zzzstore

export const sendEmailAction = createServerAction()
  .input(contactFormSchema)
  .handler(async ({ input }: { input: FormTypes }) => {
    const { name, email, message } = input;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      },
    });

    const emailHtml = await render(
      <ContactEmail name={name} email={email} message={message} />
    );

    const emailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Contact message for SGM Church",
      html: emailHtml,
    };

    const returnData = await transporter
      .sendMail(emailOptions)
      .then((info) => {
        // status 250 sent success
        console.log(`email sent`, info.response);
        return info.response;
      })
      .catch((error) => {
        console.log(`error - ${error}`);
      });

    return returnData;
  });
