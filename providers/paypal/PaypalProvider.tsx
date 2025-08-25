"use client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";

const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
  currency: "USD",
  intent: "capture",
};

type PaypalProviderTypes = {
  children: React.ReactNode;
  deferLoad: boolean;
};

const PaypalProvider = ({ children, deferLoad }: PaypalProviderTypes) => {
  return (
    <PayPalScriptProvider deferLoading={deferLoad} options={initialOptions}>
      {children}
    </PayPalScriptProvider>
  );
};

export default PaypalProvider;
