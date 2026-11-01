import { NextResponse } from "next/server";
import { sendPdfEmailAction } from "@/../actions/sendPDF";
// edit link for development/production use main sandbox for ipn link
// https://www.paypal.com/merchantnotification/ipn/preference/edit
// https://developer.paypal.com/api/nvp-soap/ipn/IPNPDTAnAlternativetoIPN/
// ipn instant payment notification - time lag between payment completion and time your webpage receives event notification
// simulater
// https://developer.paypal.com/dashboard/ipnSimulator

const sandbox = true;

/** Production Postback URL */
const PRODUCTION_VERIFY_URI = "https://ipnpb.paypal.com/cgi-bin/webscr";
/** Sandbox Postback URL */
const SANDBOX_VERIFY_URI = "https://ipnpb.sandbox.paypal.com/cgi-bin/webscr";

function getPaypalURI() {
  return sandbox ? SANDBOX_VERIFY_URI : PRODUCTION_VERIFY_URI;
}

export async function POST(request: Request) {
  console.log("IPN REQUEST RECEIVED");

  // paypal sends form-encoded payload for PayPal verification to server.
  const originalEncodedBody = await request.text();
  // console.log(request);
  // console.log(`encoded body ${originalEncodedBody}`);

  /*
  const params = new URLSearchParams(originalEncodedBody);
  const verificationBody = `cmd=_notify-validate&${originalEncodedBody}`;
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: verificationBody.toString(),
    // do not persist this in browser
    cache: "no-store",
  };
  const verificationResponse = await fetch(getPaypalURI(), options);
  return NextResponse.json({
    message: "test",
    body: originalEncodedBody,
    paypalRes: verificationResponse,
  });

  */

  if (!originalEncodedBody) {
    return NextResponse.json(
      {
        error: "No ipn details",
      },
      { status: 400 },
    );
  }
  //   grab all param values with get()
  const params = new URLSearchParams(originalEncodedBody);
  const verificationBody = `cmd=_notify-validate&${originalEncodedBody}`;
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: verificationBody.toString(),
    // do not persist this in browser
    cache: "no-store",
  };

  try {
    // paypal response
    const verificationResponse = await fetch(getPaypalURI(), options);
    if (!verificationResponse.ok) {
      return new NextResponse(null, { status: 503 });
    }

    // https://developer.paypal.com/api/nvp-soap/ipn/IPNIntro
    // PayPal sends a single word back - either VERIFIED (if the message matches the original) or INVALID (if the message does not match the original).
    const verificationFinishedCheck = (
      await verificationResponse.text()
    ).trim();
    const txn_id = params.get("txn_id");
    const payment_status = params.get("payment_status");
    const payer_email = params.get("payer_email");
    const amount = params.get("mc_gross");

    if (verificationFinishedCheck === "VERIFIED") {
      console.log(
        `Verified IPN: IPN message for Transaction ID: ${txn_id} is verified.`,
      );
      if (payment_status === "Completed") {
        const receiptUrl =
          process.env.NODE_ENV === "development"
            ? `https://profusely-zigzagged-sneak.ngrok-free.dev/donation-receipt-paypal?amt=${amount}&tx=${txn_id}&st=${payment_status}`
            : `https://sgmchurch.com/donation-receipt-paypal?amt=${amount}&tx=${txn_id}&st=${payment_status}`;

        const now = new Date();
        const formattedDate = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(now);

        const payload = {
          amount,
          email: payer_email,
          transactionId: txn_id,
          receiptUrl,
          donationDate: formattedDate,
        };

        const mailData = await sendPdfEmailAction(payload);
        console.log(`mail data ${mailData}`);
        return NextResponse.json(
          { message: "IPN verified email sent" },
          {
            status: 200,
          },
        );
      }
      return NextResponse.json(
        {
          message: "IPN verified; no receipt issued",
        },
        { status: 200 },
      );
    } else if (verificationFinishedCheck === "INVALID") {
      console.error(
        `Invalid IPN: IPN message for Transaction ID: ${txn_id} is invalid.`,
      );
      return NextResponse.json({ error: "Invalid IPN" }, { status: 400 });
    } else {
      console.error("Unexpected response body.");
      return NextResponse.json(
        { error: "Unexpected verification response" },
        { status: 503 },
      );
    }
  } catch {
    return new NextResponse(null, { status: 503 });
  }
}
