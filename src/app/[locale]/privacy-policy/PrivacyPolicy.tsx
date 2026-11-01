"use client";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "October 31, 2025";

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="mb-10 space-y-4 text-center sm:mb-12">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10">
          <ShieldCheck className="size-7 text-primary" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>

        <p className="text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Street Gospel Mission Church respects your privacy and is committed to
          protecting the personal information you share with us.
        </p>
      </div>

      <Separator className="mb-10" />

      {/* Policy Content */}
      <div className="space-y-10 text-sm leading-7 text-muted-foreground sm:text-base">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            1. Information We Collect
          </h2>
          <p>
            We may collect personal information that you voluntarily provide
            when using our website, including:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Name and email address.</li>
            <li>
              Messages and information submitted through our contact forms.
            </li>
            <li>
              Information voluntarily provided when requesting prayer,
              volunteering, or contacting our church.
            </li>
            <li>
              Donation-related information processed through third-party payment
              providers.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            2. How We Use Your Information
          </h2>
          <p>Information collected through our website may be used to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Respond to questions and contact form submissions.</li>
            <li>
              Provide information about church services, events, and activities.
            </li>
            <li>Process and acknowledge donations.</li>
            <li>Respond to prayer requests and volunteer inquiries.</li>
            <li>Maintain, improve, and secure our website.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            3. Donations and Third-Party Payment Providers
          </h2>
          <p>
            Donations made through our website may be processed by third-party
            payment providers, including PayPal and Stripe. These providers
            handle payment information according to their own privacy policies
            and security practices.
          </p>
          <p>
            Street Gospel Mission Church does not directly store your complete
            credit or debit card numbers through our website.
          </p>
          <p>
            Please review the privacy policies of{" "}
            <a
              href="https://www.paypal.com/us/legalhub/privacy-full"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
            >
              PayPal
            </a>{" "}
            and{" "}
            <a
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
            >
              Stripe
            </a>{" "}
            for more information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            4. Cookies and Analytics
          </h2>
          <p>
            Our website may use cookies and similar technologies to support
            website functionality, understand visitor activity, and improve user
            experience.
          </p>
          <p>
            We may use analytics services to understand how visitors interact
            with our website. These services may collect information such as
            browser type, device information, pages visited, and general usage
            statistics.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            5. Sharing Your Information
          </h2>
          <p>
            We do not sell or rent your personal information. We may share
            information with trusted third-party service providers when
            necessary to operate our website, process donations, send emails, or
            provide requested services.
          </p>
          <p>
            We may also disclose information when required by law or when
            necessary to protect our rights, users, or organization.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            6. Data Security and Retention
          </h2>
          <p>
            We take reasonable measures to protect personal information from
            unauthorized access, alteration, disclosure, or destruction.
            However, no method of internet transmission or electronic storage is
            completely secure.
          </p>
          <p>
            We retain personal information only for as long as reasonably
            necessary for the purposes described in this policy, unless a longer
            retention period is required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            7. Your Privacy Rights
          </h2>
          <p>
            Depending on your location and applicable law, you may have the
            right to request access to, correction of, or deletion of your
            personal information.
          </p>
          <p>
            To make a privacy-related request, please contact us using the
            information below.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            8. Children's Privacy
          </h2>
          <p>
            Our website is not intended to knowingly collect personal
            information from children under 13 without appropriate parental
            consent. If you believe a child has submitted personal information
            without parental consent, please contact us.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, services, or applicable requirements.
            Updates will be posted on this page with a revised last updated
            date.
          </p>
        </section>

        <section className="space-y-4 rounded-xl border bg-muted/30 p-5 sm:p-7">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            10. Contact Us
          </h2>
          <p>
            If you have questions or concerns about this Privacy Policy or how
            your information is handled, please contact Street Gospel Mission
            Church.
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
            <a
              href="/en/contact"
              className="inline-block pt-2 font-medium text-primary underline underline-offset-4"
            >
              Visit our Contact Page
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
