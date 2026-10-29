"use client";

// https://github.com/shadcn-labs/pdfcn/blob/main/apps/web/components/pdf-preview.tsx
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { DonationReceiptData } from "@/components/pdf/blocks/invoice-modern/invoice-modern";
import takumiWasmUrl from "takumi-pdf/wasm-url";
import { useSearchParams, redirect } from "next/navigation";

type TakumiInitializer = (input: { module_or_path: URL }) => Promise<unknown>;

let takumiWasmReady: Promise<unknown> | undefined;

// initialization shared across renders outside component
async function initializeTakumi(initialize: TakumiInitializer) {
  takumiWasmReady ??= initialize({
    module_or_path: takumiWasmUrl,
  });

  try {
    await takumiWasmReady;
  } catch (error) {
    takumiWasmReady = undefined;
    throw error;
  }
}

export function PaypalDonationPreview() {
  const searchParams = useSearchParams();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [receiptNumber, setReceiptNumber] = useState("");

  useEffect(() => {
    let cancelled = false;
    let objectUrl: string | undefined;
    const paymentStatus = searchParams.get("st");
    const amount = searchParams.get("amt");
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(now);
    const data: DonationReceiptData = {
      amount: Number(amount),
      receiptNumber: "SGMC-" + now.getTime(),
      receiptDate: formattedDate,
      donorName: "MR./MS.",
      donationDate: formattedDate,
      currency: "usd",
    };
    if (!amount || paymentStatus !== "COMPLETED") {
      return redirect("/");
    }

    setReceiptNumber(data.receiptNumber);

    async function generatePdf() {
      try {
        setError(null);
        setPdfUrl(null);

        const [{ default: initialize, render }, { InvoiceModernDocument }] =
          await Promise.all([
            import("takumi-pdf/no-init"),
            import("@/components/pdf/blocks/invoice-modern/invoice-modern"),
          ]);

        await initializeTakumi(initialize);

        const document = <InvoiceModernDocument data={data} />;
        const pdfBytes = await render(document);

        if (cancelled) return;

        const pdfBuffer = new ArrayBuffer(pdfBytes.byteLength);
        new Uint8Array(pdfBuffer).set(pdfBytes);

        const blob = new Blob([pdfBuffer], {
          type: "application/pdf",
        });

        objectUrl = URL.createObjectURL(blob);
        setPdfUrl(objectUrl);
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to generate the donation receipt.",
          );
        }
      }
    }

    void generatePdf();

    return () => {
      cancelled = true;

      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [searchParams]);

  if (error) {
    return <p role="alert">PDF generation failed: {error}</p>;
  }

  if (!pdfUrl) {
    return <p className="font-bold text-2xl">Loading...</p>;
  }

  return (
    <div className="w-full overflow-hidden rounded-lg border bg-muted/30">
      <div className="flex items-center justify-between border-b p-3">
        <p className="text-sm font-medium">Donation Receipt</p>

        <Button asChild variant="outline" size="sm">
          <a
            aria-label="donation receipt download"
            href={pdfUrl}
            download={`donation-receipt-${receiptNumber}.pdf`}
          >
            Download PDF
          </a>
        </Button>
      </div>

      <iframe
        src={`${pdfUrl}#toolbar=1&navpanes=0`}
        title="Donation receipt PDF preview"
        className="block w-full bg-background"
        style={{ height: "80vh" }}
      />
    </div>
  );
}
