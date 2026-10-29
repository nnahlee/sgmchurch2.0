import { NextRequest, NextResponse } from "next/server";

// https://developer.paypal.com/api/nvp-soap/ipn/IPNPDTAnAlternativetoIPN/
// ipn instant payment notification - time lag between payment completion and time your webpage receives event notification
const sandbox = true;

/** Production Postback URL */
const PRODUCTION_VERIFY_URI = "https://ipnpb.paypal.com/cgi-bin/webscr";
/** Sandbox Postback URL */
const SANDBOX_VERIFY_URI = "https://ipnpb.sandbox.paypal.com/cgi-bin/webscr";

function getPaypalURI() {
  return sandbox ? SANDBOX_VERIFY_URI : PRODUCTION_VERIFY_URI;
}

export async function POST(request: NextRequest) {
  // paypal sends form-encoded payload for PayPal verification to server.
  const originalEncodedBody = await request.text();

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

    const verificationFinishedCheck = (
      await verificationResponse.text()
    ).trim();
    const txn_id = params.get("txn_id");
    const payment_status = params.get("payment_status");
    if (verificationFinishedCheck === "VERIFIED") {
      console.log(
        `Verified IPN: IPN message for Transaction ID: ${txn_id} is verified.`,
      );
      if (payment_status === "Completed") {
        // send email to do later
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
