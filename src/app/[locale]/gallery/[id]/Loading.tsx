// dynamic routes need boundary loading for prefetch
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="container mx-auto space-y-6 px-4 py-8">
      {/* Page title */}
      <Skeleton className="h-8 w-48" />

      {/* Main image viewer */}
      <div className="mx-auto w-full max-w-4xl space-y-4">
        <Skeleton className="aspect-video w-full rounded-xl" />

        {/* Image description */}
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      {/* Thumbnail gallery */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} className="aspect-square w-full rounded-lg" />
        ))}
      </div>
    </main>
  );
}
