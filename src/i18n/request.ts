/*
request config file for scoping users locale language
loaded from server components
loades the e.json file

 */
import { getRequestConfig } from "next-intl/server";
import * as rootParams from "next/root-params";
import { notFound } from "next/navigation";
import { routing } from "./routing";
// hasLocale is the config of languages configured
import { hasLocale } from "next-intl";
export default getRequestConfig(async ({ locale }) => {
  // locale might already be specified by the user

  if (!locale) {
    // get locale from route
    locale = await rootParams.locale();
  }
  // for errors
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // success
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
