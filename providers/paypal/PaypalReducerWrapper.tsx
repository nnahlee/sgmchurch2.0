"use client";

import React, { SetStateAction } from "react";
import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
type PaypalReducerButtonTypes = {
  amount: string;
  isValidAmount: boolean;
  errorMsg: string;
  setAmount: React.Dispatch<SetStateAction<string>>;
};

const PaypalReducerWrapperButton = ({
  amount,
  isValidAmount,
  errorMsg,
  setAmount,
}: PaypalReducerButtonTypes) => {
  const [{ isPending }] = usePayPalScriptReducer();
  const router = useRouter();

  return (
    <div>
      {isPending ? (
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-12 w-12 text-teal-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      ) : (
        isValidAmount &&
        !errorMsg && (
          <PayPalButtons
            createOrder={async (data, actions) => {
              const orderDataId = await actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD",
                      value: amount,
                    },
                  },
                ],
                intent: "CAPTURE",
              });

              if (orderDataId) {
                setAmount("");
              }

              return orderDataId;
            }}
            onApprove={async (data, actions) => {
              try {
                const details = await actions?.order?.capture();
                if (details?.status === "COMPLETED") {
                  router.push(`/donation-success`);
                }
              } catch (error) {
                console.error("Error capturing order:", error);
                alert("Something went wrong. Please try again.");
              }
            }}
          />
        )
      )}
      {errorMsg && !isValidAmount && (
        <Badge className="p-2" variant="destructive">
          {errorMsg}
        </Badge>
      )}
    </div>
  );
};

export default PaypalReducerWrapperButton;
