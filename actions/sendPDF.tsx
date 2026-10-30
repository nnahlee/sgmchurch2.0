"use server";
import nodemailer from "nodemailer";
import { createServerAction } from "zsa";
import {
  contactFormSchema,
  FormTypes,
  emailPdfSchema,
  EmailPdfTypes,
} from "../zodtypes/zodTypes";

import { render } from "@react-email/components";
import PdfEmail from "@/../emails/PdfEmail";
// google gmail api
// https://developers.google.com/oauthplayground to get the refresh token
// test users -> https://console.cloud.google.com/auth/audience?project=zzzstore

export const sendPdfEmailAction = createServerAction()
  .input(emailPdfSchema)
  .handler(async ({ input }: { input: EmailPdfTypes }) => {
    const { amount, donationDate, receiptUrl } = input;
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
      <PdfEmail
        amount={amount}
        donationDate={donationDate}
        receiptUrl={receiptUrl}
      />,

      // <ContactEmail name={name} email={email} message={message} />,
    );

    const emailOptions = {
      from: process.env.EMAIL_USER,
      // to receiptant not this todo
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
