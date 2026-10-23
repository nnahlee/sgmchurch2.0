import GalleryImage from "./GalleryImage";
import { redirect } from "next/navigation";
import { gallerySlides } from "@/../types";

type ParamTypes = {
  params: Promise<{ id: string }>;
};

// generate prebuilt pages for dynamic routes
export function generateStaticParams() {
  return gallerySlides.map((_, idx) => ({ id: idx.toString() }));
}

const GalleryIdPage = async ({ params }: ParamTypes) => {
  const { id } = await params;

  if (!id) return redirect("/");

  return (
    <div>
      <GalleryImage id={id} />
    </div>
  );
};

export default GalleryIdPage;
