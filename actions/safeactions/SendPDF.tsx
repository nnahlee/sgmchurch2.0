"use server";
import { actionClient } from "@/../lib/safe-actions/safe-action";
import nodemailer from "nodemailer";
import { emailPdfSchema } from "@/../zodtypes/zodTypes";
import PdfEmail from "@/../emails/PdfEmail";
import { render } from "@react-email/components";

export const sendPDFAction = actionClient
  .inputSchema(emailPdfSchema)
  .action(async ({ parsedInput }) => {
    const { amount, donationDate, receiptUrl, email, transactionId } =
      parsedInput;

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
    const toEmail =
      process.env.NODE_ENV === "development" ? process.env.EMAIL_USER : email;

    const emailHtml = await render(
      <PdfEmail
        amount={amount}
        donationDate={donationDate}
        receiptUrl={receiptUrl}
        email={email}
        transactionId={transactionId}
      />,
    );
    const emailOptions = {
      from: process.env.EMAIL_USER,
      // change to email
      to: toEmail,
      subject: "Donation Receipt PDF",
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
