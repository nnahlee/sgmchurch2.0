"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectTypes = {
  label: string;
  value: "en" | "ko";
};

const languageSelections: SelectTypes[] = [
  {
    label: "한국어",
    value: "ko",
  },
  {
    label: "English",
    value: "en",
  },
];

export default function LanguageSwitcher() {
  const t = useTranslations("Nav");
  // locale = current language
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (nextLocale: string) => {
    if (nextLocale !== "en" && nextLocale !== "ko") {
      return;
    }

    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  return (
    <div>
      <Select value={locale} onValueChange={switchLocale}>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>{t("localeSelectTitle")}</SelectLabel>

            {languageSelections.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
