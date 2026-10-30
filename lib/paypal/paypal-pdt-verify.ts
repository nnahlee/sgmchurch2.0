"use server";

function getPaypalPdtUrl(): string {
  const paypalEnvironment =
    process.env.NODE_ENV === "development"
      ? "https://www.sandbox.paypal.com/cgi-bin/webscr"
      : "https://www.paypal.com/cgi-bin/webscr";

  return paypalEnvironment;
}

export async function verifyPaypalPdt(
  txToken: string,
): Promise<boolean | undefined | null> {
  const identityToken = process.env.PAYPAL_DT_TOKEN;

  if (!identityToken || !txToken) {
    console.log("no id token");
    return null;
  }

  //   get values of ? and & and returns object
  const body = new URLSearchParams({
    cmd: "_notify-synch",
    tx: txToken,
    at: identityToken,
  });
  // console.log(`this is bod! ${body.toString()}`);

  const config: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // body accepts only strings
    body: body.toString(),
    cache: "no-store",
  };
  const response = await fetch(getPaypalPdtUrl(), config);
  console.log(response);

  try {
    if (!response.ok || response.status !== 200) {
      throw new Error("PayPal PDT verification request failed");
    }
    // success
    return true;
    // emailsend here on success and on IPN route
  } catch {
    return null;
  }
}
