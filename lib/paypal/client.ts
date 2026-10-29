import { Client, Environment } from "@paypal/paypal-server-sdk";

// One configured client, shared by every controller (Orders, Payments, Vault).
export const paypalClient = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
    oAuthClientSecret: process.env.PAYPAL_SECRET_KEY!,
  },
  environment:
    process.env.NEXT_PUBLIC_PAYPAL_ENVIRONMENT === "production"
      ? Environment.Production
      : Environment.Sandbox,
});
