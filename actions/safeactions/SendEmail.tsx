"use server";
import { actionClient } from "@/../lib/safe-actions/safe-action";
import nodemailer from "nodemailer";
import ContactEmail from "@/../emails/ContactEmail";
import ContactEmailData from "@/../emails/ContactEmailData";
import { render } from "@react-email/components";
import { sendEmailSchema } from "@/../zodtypes/zodTypes";

export const sendEmailAction = actionClient
  .inputSchema(sendEmailSchema)
  .action(async ({ parsedInput }) => {
    const { email, phone, message, name } = parsedInput;
    const transporter = nodemailer.createTransport({
      service: "gmail", // Shortcut for Gmail's SMTP settings - see Well-Known Services
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      },
    });

    const [emailHtml, emailContactDataHtml] = await Promise.all([
      render(
        <ContactEmail
          name={name}
          email={email}
          phone={phone}
          message={message}
        />,
      ),
      render(
        <ContactEmailData
          name={name}
          email={email}
          phone={phone}
          message={message}
        />,
      ),
    ]);

    // send email form data to self
    const emailFormData = transporter.sendMail({
      from: `Street Gospel Mission Church ${process.env.EMAIL_USER}`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contact message from ${name}`,
      html: emailContactDataHtml,
    });

    // send email confirmation to user
    const userEmailConfirmation = transporter.sendMail({
      from: `Street Gospel Mission Church ${process.env.EMAIL_USER}`,
      to: email,
      replyTo: process.env.EMAIL_USER,
      subject: `Thank you for contacting Street Gospel Mission Church`,
      html: emailHtml,
    });

    const [emailDataRes, userEmailDataRes] = await Promise.all([
      emailFormData,
      userEmailConfirmation,
    ]);

    // console.log("Admin email result:", emailDataRes);
    // console.log("User confirmation result:", userEmailDataRes);
  });
