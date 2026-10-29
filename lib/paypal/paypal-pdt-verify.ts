"use server";

function getPaypalPdtUrl(): string {
  return process.env.NEXT_PUBLIC_PAYPAL_ENVIRONMENT === "sandbox"
    ? "https://www.sandbox.paypal.com/cgi-bin/webscr"
    : "https://www.paypal.com/cgi-bin/webscr";
}

export async function verifyPaypalPdt(
  txToken: string,
): Promise<boolean | undefined | null> {
  const identityToken = process.env.PAYPAL_DT_TOKEN;

  if (!identityToken || !txToken) {
    return null;
  }

  //   get values of ? and & and returns object
  const body = new URLSearchParams({
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
  // console.log(`this is response ${await response.text()}`);
  try {
    if (!response.ok) {
      throw new Error("PayPal PDT verification request failed");
    }
    // emailsend here on success and on IPN route
  } catch {
    return null;
  }
}
