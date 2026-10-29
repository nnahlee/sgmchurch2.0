import { NextRequest, NextResponse } from "next/server";

// https://developer.paypal.com/dashboard/webhooksSimulator/

type PayPalWebhookEvent = {
  id: string;
  event_type: string;
  create_time?: string;
  resource?: {
    id?: string;
    status?: string;
    amount?: {
      currency_code?: string;
      value?: string;
    };
  };
};

export async function POST(request: NextRequest) {
  const body = (await request.json()) as PayPalWebhookEvent;

  console.log("Webhook received:", {
    event_id: body.id,
    event_type: body.event_type,
    invoice_id: body.resource?.id,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ message: "Webhook received", data: body });
}
