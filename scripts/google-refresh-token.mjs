#!/usr/bin/env node
/**
 * Mints a Google OAuth 2.0 refresh token for the Gmail account in EMAIL_USER and
 * writes it to .env.local as GOOGLE_REFRESH_TOKEN.
 *
 * The token must be issued to the OAuth client in GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET,
 * because that is the client Nodemailer authenticates with. A token issued to any
 * other client (for example the OAuth Playground's own shared client) fails with:
 *   401 unauthorized_client / Unauthorized
 *
 * Usage: pnpm run google:token
 *
 * It reuses the redirect URI that is already registered on this OAuth client,
 * https://developers.google.com/oauthplayground, so nothing has to be added in
 * the Google Cloud console.
 */
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ENV_PATH = path.join(ROOT, ".env.local");
const SCOPES = "https://mail.google.com/"; // required for Gmail SMTP XOAUTH2
const REDIRECT_URI =
  process.env.OAUTH_REDIRECT_URI ??
  "https://developers.google.com/oauthplayground";

function loadEnv() {
  if (!fs.existsSync(ENV_PATH))
    throw new Error(`.env.local not found at ${ENV_PATH}`);

  const env = {};
  for (const line of fs.readFileSync(ENV_PATH, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)$/);
    if (!match) continue;
    let value = match[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    env[match[1]] = value;
  }
  return env;
}

async function postToken(params) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(params),
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok || body.error) {
    throw new Error(
      `${body.error ?? response.status} - ${body.error_description ?? "no description"}`,
    );
  }
  return body;
}

/** Accepts a full redirect URL, a "code=...&scope=..." fragment, or a bare code. */
function extractCode(pasted) {
  const text = pasted.trim().replace(/^["']|["']$/g, "");
  if (!text) return null;

  const fromUrl = () => {
    try {
      return new URL(text).searchParams.get("code");
    } catch {
      return null;
    }
  };

  const fromQuery = () => {
    for (const part of text.split(/[&?]/)) {
      const [key, ...rest] = part.split("=");
      if (key === "code" && rest.length > 0) {
        return decodeURIComponent(rest.join("="));
      }
    }
    return null;
  };

  return (
    fromUrl() ??
    fromQuery() ??
    (text.includes(".") || text.startsWith("4/") ? text : null)
  );
}

function saveRefreshToken(refreshToken) {
  const current = fs.readFileSync(ENV_PATH, "utf8");
  const pattern = /^[ \t]*GOOGLE_REFRESH_TOKEN[ \t]*=.*$/m;
  const line = `GOOGLE_REFRESH_TOKEN=${refreshToken}`;
  const next = pattern.test(current)
    ? current.replace(pattern, line)
    : `${current.replace(/\s*$/, "")}\n${line}\n`;
  fs.writeFileSync(ENV_PATH, next, "utf8");
}

async function main() {
  const env = loadEnv();
  const missing = [
    "EMAIL_USER",
    "GOOGLE_CLIENT_ID",
    "GOOGLE_CLIENT_SECRET",
  ].filter((key) => !env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing in .env.local: ${missing.join(", ")}`);
  }

  const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  authUrl.searchParams.set("client_id", env.GOOGLE_CLIENT_ID);
  authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("scope", SCOPES);
  authUrl.searchParams.set("access_type", "offline"); // required to get a refresh token
  authUrl.searchParams.set("prompt", "consent"); // forces a refresh token on re-consent
  authUrl.searchParams.set("login_hint", env.EMAIL_USER);

  //   console.log(`
  // 1. Open this URL and sign in as ${env.EMAIL_USER}:
  // `);
  //   console.log(authUrl.toString());
  //   console.log(`
  // 2. Approve Gmail access. Google will send you to:
  //    ${REDIRECT_URI}/?code=4/0...
  //    Copy that whole address (or just the code) from the browser.
  // `);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const pasted = await rl.question("3. Paste the redirect URL or code here: ");
  rl.close();

  const code = extractCode(pasted);
  if (!code) {
    throw new Error("Could not find a `code` value in what you pasted.");
  }

  console.log("\nExchanging the authorization code...");
  let tokens;
  try {
    tokens = await postToken({
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      code,
      grant_type: "authorization_code",
      redirect_uri: REDIRECT_URI,
    });
  } catch (error) {
    throw new Error(
      `Exchange failed: ${error.message}\n` +
        "Common causes: the code was already used, it is older than ~10 minutes, or the " +
        "redirect URI does not match the one registered on the OAuth client.",
    );
  }

  if (!tokens.refresh_token) {
    throw new Error(
      "Google returned no refresh token. Remove the app at " +
        "https://myaccount.google.com/permissions and run this again.",
    );
  }

  // Prove the token works with this exact client before saving it, so a dead token
  // never gets written to .env.local.
  // console.log("Verifying the refresh token against this OAuth client...");
  const verified = await postToken({
    client_id: env.GOOGLE_CLIENT_ID,
    client_secret: env.GOOGLE_CLIENT_SECRET,
    refresh_token: tokens.refresh_token,
    grant_type: "refresh_token",
  });

  saveRefreshToken(tokens.refresh_token);
  // console.log(
  //   `\nOK - access token acquired (expires in ${verified.expires_in}s).`,
  // );
  // console.log(`Wrote GOOGLE_REFRESH_TOKEN to ${ENV_PATH}`);
  // console.log("Restart the dev server so the new value is picked up.");
}

// exitCode instead of process.exit() so open handles (stdin) close cleanly.
main().catch((error) => {
  // console.error(`\n${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
