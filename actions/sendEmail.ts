"use server";
import nodemailer from "nodemailer";
import { createServerAction } from "zsa";
import { contactFormSchema, FormTypes } from "../zodtypes/zodTypes";

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
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
    });
    return { success: true };
  });

/*
export async function sendEmailAction(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = formData;

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

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
    });
  } catch (error) {
    console.error("Email send error:", error);
    throw new Error("Failed to send email");
  }

  return { success: true };
}
  */
