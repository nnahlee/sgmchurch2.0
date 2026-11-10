import type { MetadataRoute } from "next";
// https://next-intl.dev/docs/routing/navigation#getpathname
import { getPathname } from "@/i18n/navigation";
import slugify from "slugify";
import { eventInfos } from "@/../types";

const baseHost = "https://www.sgmchurch.com";

const slugEventPaths = eventInfos.map(({ title }) => {
  return `/events/${slugify(title, {
    lower: true,
    strict: true,
  })}`;
});

const urlPaths = [
  "/",
  "/about",
  "/serve-volunteer",
  "/donate",
  "/faq",
  "/gallery",
  "/contact",
  "/events",
];

const allPaths = [...slugEventPaths, ...urlPaths];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = await Promise.all(
    allPaths.map(async (path) => {
      const [enPath, koPath] = await Promise.all([
        // returns /[en or ko]/path in loopreturns all paths
        getPathname({ locale: "en", href: path }),
        getPathname({ locale: "ko", href: path }),
      ]);
      const languagePaths = {
        en: `${baseHost}${enPath}`,
        ko: `${baseHost}${koPath}`,
      };

      const siteMapEntries = [
        {
          url: languagePaths.en,
          priority: path === "/" ? 1.0 : 0.8,
          alternates: {
            languages: languagePaths,
          },
        },
        {
          url: languagePaths.ko,
          priority: path === "/" ? 1.0 : 0.8,
          alternates: {
            languages: languagePaths,
          },
        },
      ];
      return siteMapEntries;
    }),
  );
  // flatten the array of arrays into a single array of sitemap entries
  return entries.flat();
}
