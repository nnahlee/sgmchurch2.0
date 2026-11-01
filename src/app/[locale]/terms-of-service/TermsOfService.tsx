"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  const lastUpdated = "October 31, 2025";

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="mb-10 space-y-4 text-center sm:mb-12">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10">
          <FileText className="size-7 text-primary" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Terms of Service
        </h1>

        <p className="text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Welcome to Street Gospel Mission Church. These Terms of Service
          explain the conditions for accessing and using our website and
          services.
        </p>
      </div>

      <Separator className="mb-10" />

      <div className="space-y-10 text-sm leading-7 text-muted-foreground sm:text-base">
        {/* 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the Street Gospel Mission Church website, you
            agree to comply with these Terms of Service and applicable laws and
            regulations.
          </p>
          <p>
            If you do not agree with these terms, please discontinue using our
            website.
          </p>
        </section>

        {/* 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            2. Website Use
          </h2>
          <p>
            Our website provides information about Street Gospel Mission Church,
            including worship services, church activities, events, volunteer
            opportunities, and donation options.
          </p>
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Use the website for unlawful purposes.</li>
            <li>
              Attempt to gain unauthorized access to our systems or services.
            </li>
            <li>Interfere with the operation or security of our website.</li>
            <li>
              Submit false, misleading, or harmful information through our
              forms.
            </li>
            <li>Use our website to distribute spam or malicious content.</li>
          </ul>
        </section>

        {/* 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            3. Donations and Payments
          </h2>
          <p>
            Street Gospel Mission Church accepts voluntary donations through
            supported payment methods, which may include PayPal, Stripe, and
            Zelle.
          </p>
          <p>By making a donation, you acknowledge that:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Donations are voluntary contributions to support our church and
              its activities.
            </li>
            <li>You are authorized to use the payment method submitted.</li>
            <li>
              Payment processing is handled by the applicable third-party
              payment provider.
            </li>
            <li>
              You should verify your donation amount and payment details before
              completing a transaction.
            </li>
          </ul>
          <p>
            Street Gospel Mission Church does not directly collect or store
            complete credit or debit card numbers through our website. Payment
            providers process financial information under their own terms and
            privacy policies.
          </p>
        </section>

        {/* 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            4. Donation Refunds and Corrections
          </h2>
          <p>
            Donations are generally voluntary contributions. If you believe you
            made a duplicate donation, entered an incorrect amount, or
            experienced a payment error, please contact us.
          </p>
          <p>
            Refund requests will be reviewed individually, subject to applicable
            laws, payment provider policies, and the circumstances of the
            transaction.
          </p>
          <p>
            Please contact us with your transaction details so we can review
            your request. Do not send complete payment card information.
          </p>
        </section>

        {/* 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            5. Intellectual Property
          </h2>
          <p>
            Unless otherwise stated, website content, including text,
            photographs, graphics, logos, videos, and other materials, belongs
            to Street Gospel Mission Church or its respective content owners.
          </p>
          <p>
            You may view and access website content for personal, non-commercial
            purposes. You may not reproduce, distribute, modify, or commercially
            use our content without prior permission from the appropriate rights
            holder.
          </p>
        </section>

        {/* 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            6. Third-Party Services and Links
          </h2>
          <p>
            Our website may contain links to third-party websites and services,
            including PayPal, Stripe, and external video or social media
            platforms.
          </p>
          <p>
            These services operate independently and are governed by their own
            terms, privacy policies, and practices. Street Gospel Mission Church
            is not responsible for the content, availability, or policies of
            third-party websites.
          </p>
        </section>

        {/* 7 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            7. Website Availability
          </h2>
          <p>
            We make reasonable efforts to keep our website available and
            functioning properly. However, we do not guarantee uninterrupted
            access or that the website will always be free of errors,
            interruptions, or technical issues.
          </p>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of
            our website or services when necessary.
          </p>
        </section>

        {/* 8 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            8. Disclaimer
          </h2>
          <p>
            Website content is provided for general informational and religious
            purposes. While we strive to keep information accurate and current,
            we do not guarantee that all website content is complete, accurate,
            or up to date.
          </p>
          <p>
            Nothing on this website should be interpreted as a guarantee of
            specific spiritual, personal, financial, or other outcomes.
          </p>
        </section>

        {/* 9 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            9. Limitation of Liability
          </h2>
          <p>
            To the extent permitted by applicable law, Street Gospel Mission
            Church shall not be liable for indirect, incidental, special,
            consequential, or punitive damages arising from the use of, or
            inability to use, our website or services.
          </p>
          <p>
            Nothing in these terms is intended to exclude liability that cannot
            legally be excluded or limited under applicable law.
          </p>
        </section>

        {/* 10 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            10. Changes to These Terms
          </h2>
          <p>
            We may update these Terms of Service periodically to reflect changes
            to our website, services, or applicable requirements.
          </p>
          <p>
            Updated terms will be published on this page with a revised last
            updated date. Your continued use of the website after changes are
            posted constitutes acceptance of the updated terms to the extent
            permitted by applicable law.
          </p>
        </section>

        {/* 11 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            11. Governing Law
          </h2>
          <p>
            These Terms of Service are governed by the laws of the State of
            California, without regard to its conflict of law principles, except
            where applicable law requires otherwise.
          </p>
        </section>

        {/* 12 */}
        <section className="space-y-4 rounded-xl border bg-muted/30 p-5 sm:p-7">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            12. Contact Us
          </h2>
          <p>
            If you have questions about these Terms of Service, donations, or
            the use of our website, please contact us.
          </p>

          <div className="space-y-2 text-foreground">
            <p className="font-semibold">Street Gospel Mission Church</p>

            <p>
              Email:{" "}
              <a
                href="mailto:sgmchurch1@gmail.com"
                className="text-primary underline underline-offset-4"
              >
                sgmchurch1@gmail.com
              </a>
            </p>

            <p>
              Phone:{" "}
              <a
                href="tel:+16509953336"
                className="text-primary underline underline-offset-4"
              >
                (650) 995-3336
              </a>
            </p>

            <Link
              href="/en/contact"
              className="inline-block pt-2 font-medium text-primary underline underline-offset-4"
            >
              Visit our Contact Page
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
