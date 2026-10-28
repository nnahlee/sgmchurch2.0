import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({ subsets: ["latin"], weight: "700" });
import { routing } from "@/i18n/routing";

// comps
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sgmchurch.com"),
  title: {
    default: "Street Gospel Mission Church",
    template: "%s | Street Gospel Mission Church",
  },
  other: {
    google: "notranslate",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} className={inter.className}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17476185400"
        strategy="lazyOnload"
      />
      <Script id="google-ads-init" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17476185400');
          `}
      </Script>
      <body
        className={`${inter.className} ${inter.style} antialiased overflow-x-hidden`}
      >
        <NextIntlClientProvider>
          <Nav />
          <main>{children}</main>
          <Toaster richColors />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
