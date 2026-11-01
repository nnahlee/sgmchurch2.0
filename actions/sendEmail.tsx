"use server";
import nodemailer from "nodemailer";
import { createServerAction } from "zsa";
import { contactFormSchema } from "../zodtypes/zodTypes";
import ContactEmail from "../emails/ContactEmail";
import { render } from "@react-email/components";

// Refresh token setup (OAuth 2.0):

// https://developers.google.com/oauthplayground -> gear icon -> check
// "Use your own OAuth credentials" and paste the SAME client id/secret that are
// in .env.local, scope https://mail.google.com/ (required for Gmail SMTP XOAUTH2).
// A token minted with the Playground's own client, or with a client whose secret
// was later rotated, is rejected with `unauthorized_client`.
// Or run `pnpm run google:token` to mint one locally.
// Test users -> https://console.cloud.google.com/auth/audience?project=zzzstore

type MailEnv = {
  user: string;
  clientId: string;
  clientSecret: string;
  refreshToken: string;
};

function readMailEnv(): MailEnv {
  const {
    EMAIL_USER,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN,
  } = process.env;

  const missing = Object.entries({
    EMAIL_USER,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN,
  })
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(
      `Email is not configured. Missing environment variable(s): ${missing.join(", ")}`,
    );
  }

  return {
    user: EMAIL_USER as string,
    clientId: GOOGLE_CLIENT_ID as string,
    clientSecret: GOOGLE_CLIENT_SECRET as string,
    refreshToken: GOOGLE_REFRESH_TOKEN as string,
  };
}

/**
 * Turns nodemailer/OAuth failures into something the visitor can act on.
 * Nodemailer throws an EAUTH error whose message contains the raw Google
 * error (e.g. `unauthorized_client`), which is meaningless in a toast.
 */
function toUserFacingError(error: unknown): Error {
  const raw = error instanceof Error ? error.message : String(error);
  const code =
    typeof error === "object" && error !== null && "code" in error
      ? String((error as { code?: unknown }).code ?? "")
      : "";

  if (
    code === "EAUTH" ||
    /unauthorized_client|invalid_grant|invalid_client|invalid_scope/i.test(raw)
  ) {
    return new Error(
      "Google rejected the email credentials (OAuth 2.0). The refresh token is expired, " +
        "revoked, or was issued to a different OAuth client. Run `pnpm run google:token` to mint a new one.",
    );
  }

  if (code === "EENVELOPE") {
    return new Error(
      "The email was rejected by Gmail. Check that EMAIL_USER matches the account that owns the OAuth client.",
    );
  }

  return new Error(`Could not send your message: ${raw}`);
}

export const sendEmailAction = createServerAction()
  .input(contactFormSchema)
  .handler(async ({ input }) => {
    const { name, email, phone, message } = input;
    const { user, clientId, clientSecret, refreshToken } = readMailEnv();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user,
        clientId,
        clientSecret,
        refreshToken,
      },
    });

    const emailHtml = await render(
      <ContactEmail
        name={name}
        email={email}
        phone={phone}
        message={message}
      />,
    );

    try {
      const info = await transporter.sendMail({
        // Gmail only lets you send as the authenticated account or a verified
        // alias, so the visitor's address belongs in reply-to, not from.
        from: `"Street Gospel Mission Church" <${user}>`,
        to: user,
        replyTo: email,
        subject: `Contact message from ${name}`,
        html: emailHtml,
      });

      // status 250 sent success
      return info.response;
    } catch (error) {
      throw toUserFacingError(error);
    }
  });
