"use client";

// https://github.com/shadcn-labs/pdfcn/blob/main/apps/web/components/pdf-preview.tsx
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { DonationReceiptData } from "@/components/pdf/blocks/invoice-modern/invoice-modern";
import takumiWasmUrl from "takumi-pdf/wasm-url";

type Props = {
  data: DonationReceiptData;
};

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

export function DonationReceiptPreview({ data }: Props) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    let objectUrl: string | undefined;

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
  }, [data]);

  if (error) {
    return <p role="alert">PDF generation failed: {error}</p>;
  }

  if (!pdfUrl) {
    return <p>Generating donation receipt...</p>;
  }

  return (
    <div className="w-full overflow-hidden rounded-lg border bg-muted/30">
      <div className="flex items-center justify-between border-b p-3">
        <p className="text-sm font-medium">Donation Receipt</p>

        <Button asChild variant="outline" size="sm">
          <a
            href={pdfUrl}
            download={`donation-receipt-${data.receiptNumber}.pdf`}
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
